// src/utils/blogManager.js

// -------- utils --------

// Coerce anything to text (string, {default: string}, null, etc.)
const toText = (v) => {
  if (typeof v === 'string') return v;
  if (v && typeof v.default === 'string') return v.default;
  return String(v ?? '');
};

const minRead = (words) => {
  const w = Number(words || 0);
  if (!w) return "";
  const m = Math.max(1, Math.ceil(w / 225)); // 225 wpm + 1 min floor
  return `${m} min read`;
};

// Strip leading slash and any collection prefix so slugs are consistent
const stripPrefix = (slug = "") =>
  String(slug)
    .replace(/^\/+/, "")
    .replace(/^(insights|blog|content\/insights|posts)\//, "");

const normalize = (p = {}) => ({
  title: p.title || "Untitled",
  slug: stripPrefix(String(p.slug || p.path || p.url || "")),
  date: p.date || "",
  image: p.image || "/insights/placeholder.webp",
  imageAlt: p.imageAlt || p.title || "Image",
  canonical: p.canonical || (p.slug ? `/insights/${stripPrefix(p.slug)}` : ""),
  category: p.category || "insights",
  excerpt: p.excerpt || p.description || "",
  readTime: p.readTime || minRead(p.wordCount || p.words),
  featured: Boolean(p.featured || p.isFeatured),
  tags: Array.isArray(p.tags)
    ? p.tags
    : typeof p.tags === "string"
    ? p.tags.split(",").map((s) => s.trim())
    : [],
  draft: Boolean(p.draft),
  meta: p.meta || undefined,
});

function inferSlugFromPath(p = "") {
  // Normalize Windows backslashes to POSIX for regex to behave
  const posix = String(p).replace(/\\/g, "/");
  return posix
    .replace(/^.*\/src\//, "")
    .replace(/^.*\/content\//, "")
    .replace(/^.*\/insights\//, "")
    .replace(/^.*\/posts\//, "")
    .replace(/^.*\/blog\//, "")
    .replace(/\.(mdx?|MDX?)$/, "");
}

function categoryFromSlug(slug = "") {
  const first = String(slug).split("/")[0];
  return first || "insights";
}

function sortPosts(arr) {
  const toDate = (d) => (d ? new Date(d) : new Date(0));
  return arr
    .filter(Boolean)
    .map(normalize)
    .sort((a, b) => toDate(b.date) - toDate(a.date));
}

// ----- raw text helpers (for excerpt/read time) -----
function stripCodeAndHtml(md = "") {
  const s = toText(md);
  return s
    .replace(/```[\s\S]*?```/g, " ")             // code fences
    .replace(/`[^`]*`/g, " ")                    // inline code
    .replace(/<[^>]+>/g, " ")                    // raw html
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")       // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")     // links -> text
    .replace(/\s+/g, " ")
    .trim();
}

function firstParagraph(md = "") {
  const s = toText(md);
  // take from start until the first blank line (ignoring headings/lists)
  const lines = s.split(/\r?\n/);
  let out = [];
  let inFence = false;
  for (const raw of lines) {
    let line = raw;
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (!line.trim()) {
      if (out.length) break;
      continue;
    }
    // skip headings, blockquotes, list markers
    if (/^\s*(#{1,6}\s|>|[-*]\s|\d+\.\s)/.test(line)) {
      if (out.length) break;
      continue;
    }
    out.push(line.trim());
    if (out.length >= 4) break; // keep it short
  }
  return stripCodeAndHtml(out.join(" "));
}

function toExcerpt(md = "", maxLen = 160) {
  const base = firstParagraph(md) || stripCodeAndHtml(md);
  if (base.length <= maxLen) return base;
  const cut = base.slice(0, maxLen + 1);
  return cut.includes(" ") ? cut.slice(0, cut.lastIndexOf(" ")) : base.slice(0, maxLen);
}

function countWords(md = "") {
  const txt = stripCodeAndHtml(md);
  return txt ? txt.split(/\s+/).filter(Boolean).length : 0;
}

// --- loaders ---

// Use absolute-from-root globs so module/raw maps share identical keys
export function listMdxModules() {
  return import.meta.glob("/src/blog/**/*.{md,MD,mdx,MDX}", { eager: true });
}

export function listMdxRaws() {
  return import.meta.glob("/src/blog/**/*.{md,MD,mdx,MDX}", {
    query: "?raw",
    import: "default",
    eager: true,
  });
}

if (import.meta.env?.DEV) {
  const m = listMdxModules();
  const r = listMdxRaws();
  console.log('[MDX modules]', Object.keys(m).length, Object.keys(m).slice(0, 5));
  console.log('[MDX raws]', Object.keys(r).length, Object.keys(r).slice(0, 5));

  // Extra visibility: flag any non-string raws
  const weird = Object.entries(r).filter(([, v]) => typeof v !== 'string');
  if (weird.length) {
    console.warn('[blogManager] non-string raw entries (showing up to 5):',
      weird.slice(0, 5).map(([p, v]) => [p, typeof v, v && v.constructor && v.constructor.name]));
  }
}

function toPost([path, mod], rawsMap) {
  const meta = mod?.frontmatter || mod?.meta || {};
  const raw = toText(rawsMap?.[path] || "");

  const rawSlug = meta.slug || inferSlugFromPath(path);
  const slug = stripPrefix(rawSlug);

  const base = {
    ...meta,
    meta,                                  // expose raw meta back out
    slug,
    category: meta.category || categoryFromSlug(slug),
    // prefer meta.description; fallback to raw paragraph
    excerpt: meta.description || toExcerpt(raw),
    // supply word count so normalize can compute readTime
    words: countWords(raw),
    // canonical & imageAlt handled by normalize() via passed fields
    canonical: meta.canonical || `/insights/${slug}`,
    imageAlt: meta.imageAlt || meta.title || slug,
    // ensure date falls back across common keys
    date: meta.date || meta.publishDate || meta.published || "",
  };

  const component = mod?.default || null; // md may not compile to component

  return {
    ...normalize(base),
    component,
    __path: path, // debug helper
  };
}

async function loadFromMdx() {
  try {
    const modules = listMdxModules();
    const raws = listMdxRaws();

    const list = Object.entries(modules).map((entry) => toPost(entry, raws));

    // Remove drafts and dedupe by slug (last one wins)
    const bySlug = new Map();
    for (const p of list) {
      if (!p || p.draft) continue;
      bySlug.set(p.slug, p);
    }
    return [...bySlug.values()];
  } catch (e) {
    if (import.meta.env?.DEV) console.warn("[blogManager] MDX import failed:", e);
    return [];
  }
}

// JSON fallback (e.g. /public/insights/index.json)
async function loadFromJson() {
  try {
    const res = await fetch("/insights/index.json", { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    const list = Array.isArray(json?.posts)
      ? json.posts
      : Array.isArray(json)
      ? json
      : [];
    return list.map(normalize).filter((p) => !p.draft);
  } catch {
    return [];
  }
}

// -------- public API --------
export async function getBlogPosts() {
  try {
    if (Array.isArray(window?.__BLOG_POSTS__)) {
      return sortPosts(window.__BLOG_POSTS__.filter((p) => !p?.draft));
    }
  } catch {
    // non-browser envs
  }

  const mdxPosts = await loadFromMdx();
  if (mdxPosts.length) return sortPosts(mdxPosts);

  const json = await loadFromJson();
  if (json.length) return sortPosts(json);

  if (import.meta.env?.DEV) console.warn("[blogManager] No posts found");
  return [];
}

export async function getFeaturedPosts() {
  const all = await getBlogPosts();
  const featured = all.filter((p) => {
    if (p?.featured) return true;
    const tags = (p?.tags || []).map((t) => String(t).toLowerCase());
    return tags.includes("featured");
  });
  return featured.length ? featured.slice(0, 3) : all.slice(0, 3);
}

// For /insights/:slug pages
export async function getPostBySlug(slug) {
  const clean = stripPrefix(String(slug));
  const modules = listMdxModules();
  const raws = listMdxRaws();

  for (const [path, mod] of Object.entries(modules)) {
    const meta = mod?.frontmatter || mod?.meta || {};
    const s = stripPrefix(meta.slug || inferSlugFromPath(path));
    if (s === clean) {
      const post = toPost([path, mod], raws);
      return post;
    }
  }

  // Fallback to JSON index if present
  const all = await getBlogPosts();
  const hit = all.find((p) => stripPrefix(p.slug) === clean);
  return hit || null;
}

// Return latest N posts matching a tag (or category)
export async function getPostsByTag(tag, { limit = 3, includeCategory = true } = {}) {
  const all = await getBlogPosts();
  const needle = String(tag || "").toLowerCase();

  const filtered = all.filter((p) => {
    const tags = (p?.tags || []).map((t) => String(t).toLowerCase());
    const cat = String(p?.category || "").toLowerCase();
    return tags.includes(needle) || (includeCategory && cat.includes(needle));
  });

  return filtered.slice(0, limit);
}
