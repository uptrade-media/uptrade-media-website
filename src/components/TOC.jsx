import React from "react";

/**
 * Auto-generates a TOC from headings inside a container (H2/H3 by default).
 * - Works with rehype-slug (you already have it) so anchors are stable.
 * - Highlights active section on scroll.
 * - Smooth scroll with offset for your sticky header.
 */
export default function TOC({
  from = "#post-article",   // container that wraps the MDX body
  minLevel = 2,
  maxLevel = 3,
  offset = 88,              // ~header height; tweak if needed
  title = "Table of contents",
  className = "",
}) {
  const [items, setItems] = React.useState([]);
  const [activeId, setActiveId] = React.useState("");

  React.useEffect(() => {
    const root = document.querySelector(from);
    if (!root) return;

    const selector = Array
      .from({ length: maxLevel - minLevel + 1 }, (_, i) => `h${i + minLevel}`)
      .join(",");

    const heads = Array.from(root.querySelectorAll(selector));
    const mapped = heads.map(h => ({
      id: h.id,
      text: h.textContent || "",
      level: Number(h.tagName.replace("H", "")),
    }));

    setItems(mapped);

    // Observe headings for active highlight
    const observer = new IntersectionObserver(
      entries => {
        // pick the first fully or mostly intersecting heading
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: `-${offset + 8}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    heads.forEach(h => observer.observe(h));
    return () => observer.disconnect();
  }, [from, minLevel, maxLevel, offset]);

  const onJump = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={
        "rounded-lg border border-gray-200 bg-white p-4 text-sm " +
        "shadow-sm lg:sticky lg:top-24 " + className
      }
    >
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h2>
      <ul className="space-y-1">
        {items.map(({ id, text, level }) => (
          <li key={id} className={level === 3 ? "ml-4" : ""}>
            <a
              href={`#${id}`}
              onClick={onJump(id)}
              className={
                "block rounded px-2 py-1 transition-colors " +
                (activeId === id
                  ? "bg-green-50 text-[#2f7f28]"
                  : "text-gray-700 hover:bg-gray-100")
              }
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
