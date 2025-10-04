// plugins/rssPlugin.js
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter' // you already have gray-matter

const posix = p => p.replace(/\\/g, '/')
const xml = (s='') => String(s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;')

// pull a balanced JS object after "export const <name>"
function extractObjectAfter(code, name) {
  const i = code.indexOf(`export const ${name}`)
  if (i === -1) return null
  const j = code.indexOf('{', i)
  if (j === -1) return null
  let k = j, depth = 0
  while (k < code.length) {
    const ch = code[k]
    if (ch === '{') depth++
    else if (ch === '}') { depth--; if (depth === 0) { k++; break } }
    k++
  }
  const objCode = code.slice(j, k)
  try { return (new Function(`return (${objCode})`))() } catch { return null }
}

function inferRelSlug(abs) {
  const p = posix(abs)
  return p
    .replace(/^.*\/src\/(blog|insights|content\/insights|posts)\//, '') // keep folders under src/blog
    .replace(/\.(mdx?|MDX?)$/, '')
}

function toRfc2822(d) {
  try { return new Date(d).toUTCString() } catch { return '' }
}

export function generateRssPlugin({
  site = 'https://uptrademedia.com',
  title = 'Uptrade Media Insights',
  description = 'Bold strategies and proven tactics for design, media, and growth.',
  feedPath = 'rss.xml',
  limit = 50
} = {}) {

  const roots = [
    path.resolve(process.cwd(), 'src', 'blog'),
    path.resolve(process.cwd(), 'src', 'insights'),
    path.resolve(process.cwd(), 'src', 'content', 'insights'),
    path.resolve(process.cwd(), 'src', 'posts'),
  ]

  const walk = async (dir) => {
    const out = []
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true })
      for (const e of entries) {
        const p = path.join(dir, e.name)
        if (e.isDirectory()) out.push(...await walk(p))
        else if (e.isFile() && /\.mdx?$/i.test(p)) out.push(p)
      }
    } catch {} // dir may not exist
    return out
  }

  // best-effort meta extraction (meta > frontmatter export > YAML)
  async function readMeta(file) {
    const src = await fs.readFile(file, 'utf-8')

    // 1) export const meta = {...}
    let meta = extractObjectAfter(src, 'meta')
    if (!meta) {
      // 2) export const frontmatter = {...}
      meta = extractObjectAfter(src, 'frontmatter')
    }
    if (!meta) {
      // 3) YAML frontmatter
      const fm = matter(src)
      if (fm && fm.data && Object.keys(fm.data).length) meta = fm.data
    }
    return meta || null
  }

  return {
    name: 'generate-rss',
    apply: 'build',
    async closeBundle() {
      const files = (await Promise.all(roots.map(walk))).flat()

      const items = []
      for (const file of files) {
        const meta = await readMeta(file)
        if (!meta) continue
        if (meta.draft) continue

        const rel = inferRelSlug(file) // e.g. design/brand-design-conversion-rates
        const category = String(meta.category || '').trim() || rel.split('/')[0] || 'insights'
        const slug = String(meta.slug || rel.split('/').pop() || '').trim()
        const fallbackPath = slug ? `/insights/${category}/${slug}` : `/insights/${rel}`

        const urlPath = meta.canonical && String(meta.canonical).trim()
          ? meta.canonical
          : fallbackPath

        const link = urlPath.startsWith('http') ? urlPath : `${site}${urlPath}`

        const date =
          meta.publishDate || meta.date || meta.modifiedDate ||
          (await fs.stat(file)).mtime.toISOString()

        items.push({
          title: meta.title || slug || rel,
          link,
          description: meta.description || '',
          pubDate: toRfc2822(date),
          guid: link,
        })
      }

      items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
      const limited = items.slice(0, limit)

      const lastBuildDate = limited[0]?.pubDate || new Date().toUTCString()

      const rss =
`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(title)}</title>
    <link>${xml(site)}</link>
    <description>${xml(description)}</description>
    <language>en-us</language>
    <lastBuildDate>${xml(lastBuildDate)}</lastBuildDate>
    <atom:link href="${xml(site.replace(/\/+$/,'') + '/' + feedPath)}" rel="self" type="application/rss+xml" />
${limited.map(it => `    <item>
      <title>${xml(it.title)}</title>
      <link>${xml(it.link)}</link>
      <guid isPermaLink="true">${xml(it.guid)}</guid>
      <pubDate>${xml(it.pubDate)}</pubDate>
      <description><![CDATA[${it.description}]]></description>
    </item>`).join('\n')}
  </channel>
</rss>`.trim()

      const out = path.resolve(process.cwd(), 'dist', feedPath)
      await fs.mkdir(path.dirname(out), { recursive: true })
      await fs.writeFile(out, rss, 'utf-8')
      console.log(`[generate-rss] Wrote ${feedPath} with ${limited.length} items`)
    }
  }
}
