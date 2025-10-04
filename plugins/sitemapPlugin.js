// plugins/sitemapPlugin.js
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const posix = p => p.replace(/\\/g, '/')
const xml = (s='') => String(s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;')

// pull a balanced JS object after "export const <name> = { ... }"
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

const walk = async (dir, fileRx) => {
  const out = []
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const e of entries) {
      const p = path.join(dir, e.name)
      if (e.isDirectory()) out.push(...await walk(p, fileRx))
      else if (e.isFile() && fileRx.test(p)) out.push(p)
    }
  } catch {}
  return out
}

function inferRelSlug(abs) {
  const p = posix(abs)
  return p
    .replace(/^.*\/src\/(blog|insights|content\/insights|posts)\//, '')
    .replace(/\.(mdx?|MDX?)$/, '')
}

function toISO(d) {
  const dt = new Date(d)
  return isNaN(+dt) ? null : dt.toISOString().slice(0,10)
}

async function parseRoutesFromApp(appPath) {
  try {
    const code = await fs.readFile(appPath, 'utf-8')
    const rx = /<Route\s+path=(?:"|')([^"']+)(?:"|')/g
    const out = []
    let m
    while ((m = rx.exec(code))) {
      const p = m[1]
      // skip dynamic & wildcard
      if (!p || p.includes(':') || p === '*' || p.startsWith('/404')) continue
      out.push(p)
    }
    return out
  } catch {
    return []
  }
}

async function readMdxMeta(file) {
  const src = await fs.readFile(file, 'utf-8')
  let meta = extractObjectAfter(src, 'meta')
  if (!meta) meta = extractObjectAfter(src, 'frontmatter')
  if (!meta) {
    const fm = matter(src)
    if (fm && fm.data && Object.keys(fm.data).length) meta = fm.data
  }
  return meta || null
}

export function generateSitemapPlugin({
  site = 'https://uptrademedia.com',
  outFile = 'sitemap.xml',
  appFile = './src/App.jsx',     // read real routes from your App.jsx
  extraRoutes = [],              // any manual routes to force into the sitemap
  exclude = ['/404', '/404.html']
} = {}) {

  return {
    name: 'generate-sitemap',
    apply: 'build',
    async closeBundle() {
      const root = path.resolve(process.cwd(), 'src')

      // 1) Blog posts (MD/MDX)
      const blogDirs = [
        path.join(root, 'blog'),
        path.join(root, 'insights'),
        path.join(root, 'content', 'insights'),
        path.join(root, 'posts'),
      ]
      const mdxFiles = (await Promise.all(blogDirs.map(d => walk(d, /\.mdx?$/i)))).flat()

      const postUrls = []
      for (const f of mdxFiles) {
        const meta = await readMdxMeta(f)
        if (!meta || meta.draft) continue

        const rel = inferRelSlug(f)          // e.g. design/brand-design-conversion-rates
        const category = String(meta.category || '').trim() || rel.split('/')[0] || 'insights'
        const slug = String(meta.slug || rel.split('/').pop() || '').trim()
        const fallback = slug ? `/insights/${category}/${slug}` : `/insights/${rel}`
        const urlPath = meta.canonical && String(meta.canonical).trim() ? meta.canonical : fallback

        // choose a reasonable lastmod
        const stat = await fs.stat(f)
        const lastmod = toISO(meta.modifiedDate || meta.publishDate || meta.date || stat.mtime)
        postUrls.push({ url: urlPath, lastmod })
      }

      // 2) App routes from <Route path="…">
      const appRoutes = await parseRoutesFromApp(path.resolve(process.cwd(), appFile))
      const pageUrls = appRoutes
        .filter(Boolean)
        .filter(p => !p.includes(':')) // guard, though parseRoutesFromApp already does
        .map(u => ({ url: u, lastmod: toISO(new Date()) }))

      // 3) Merge + extras + home, dedupe, exclude
      const merged = new Map()
      const add = (u, m) => { if (!u) return; if (exclude.includes(u)) return; merged.set(u, m || null) }

      add('/', toISO(new Date()))
      for (const r of extraRoutes) add(r, toISO(new Date()))
      for (const r of pageUrls) add(r.url, r.lastmod)
      for (const p of postUrls) add(p.url, p.lastmod)

      const routes = [...merged.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))

      const body =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([u, m]) => 
  `  <url><loc>${xml(u.startsWith('http') ? u : site + u)}</loc>${m ? `<lastmod>${xml(m)}</lastmod>` : ''}</url>`
).join('\n')}
</urlset>`

      const out = path.resolve(process.cwd(), 'dist', outFile)
      await fs.mkdir(path.dirname(out), { recursive: true })
      await fs.writeFile(out, body, 'utf-8')

      console.log(`[generate-sitemap] ${routes.length} URLs -> ${out}`)
      console.log('[generate-sitemap] sample:', routes.slice(0, 10).map(([u]) => u))
    }
  }
}
