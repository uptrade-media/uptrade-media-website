// src/utils/blogManager.js

// -------- utils --------
const minRead = (words) => {
  const w = Number(words || 0);
  if (!w) return "";
  const m = Math.max(1, Math.ceil(w / 225));
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

function sortPosts(arr) {
  const toDate = (d) => (d ? new Date(d) : new Date(0));
  return arr
    .filter(Boolean)
    .map(normalize)
    .sort((a, b) => toDate(b.date) - toDate(a.date));
}

// -------- loaders --------
function listMdxModules() {
  // Globs must be absolute (/src/...) or relative (./, ../).
  return {
    ...import.meta.glob("/src/content/insights/**/*.{md,mdx}", { eager: true }),
    ...import.meta.glob("/src/insights/**/*.{md,mdx}", { eager: true }),
    ...import.meta.glob("/src/posts/**/*.{md,mdx}", { eager: true }),
    ...import.meta.glob("/src/blog/**/*.{md,mdx}", { eager: true }), // <— added
  };
}

function toPost([path, mod]) {
  // With mdx plugin, front-matter is usually exported as `frontmatter`
  const fm = mod.frontmatter || mod.meta || {};
  const rawSlug = fm.slug || inferSlugFromPath(path);
  const slug = stripPrefix(rawSlug);

  const base = normalize({ ...fm, slug });
  const component = mod?.default || null; // if .md isn’t compiled to a component

  return {
    ...base,
    component,
    __path: path, // debug helper
  };
}

async function loadFromMdx() {
  try {
    const modules = listMdxModules();
    const list = Object.entries(modules).map(toPost);

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
    const list = Array.isArray(json?.posts) ? json.posts : Array.isArray(json) ? json : [];
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

  for (const [path, mod] of Object.entries(modules)) {
    const fm = mod.frontmatter || mod.meta || {};
    const s = stripPrefix(fm.slug || inferSlugFromPath(path));
    if (s === clean) {
      const base = normalize({ ...fm, slug: s });
      const component = mod?.default || null;
      return { ...base, component };
    }
  }

  // Fallback to JSON index if present
  const all = await getBlogPosts();
  const hit = all.find((p) => stripPrefix(p.slug) === clean);
  return hit || null;
}
