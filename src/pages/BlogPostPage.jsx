// src/pages/BlogPostPage.jsx
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  CheckCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { getPostBySlug, getBlogPosts } from '../utils/blogManager'
import '../mobile-blog-fixes.css'
import SEO from '../components/SEO'
import { mdxComponents } from '../mdx-components.jsx'

/* -----------------------------
   QoL: Reading progress (top)
------------------------------*/
function ReadingProgress({ target = '#post-article' }) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const el = document.querySelector(target)
    if (!el) return
    const onScroll = () => {
      const total = el.scrollHeight - window.innerHeight
      const scrolled = Math.min(Math.max(window.scrollY - (el.offsetTop || 0), 0), total)
      setP(total > 0 ? (scrolled / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [target])
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
      <div className="h-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0]" style={{ width: `${p}%` }} />
    </div>
  )
}

/* -----------------------------
   QoL: Share bar (compact)
------------------------------*/
function ShareBar({ url, title }) {
  const encodedURL = encodeURIComponent(url || '')
  const encodedTitle = encodeURIComponent(title || '')
  const items = [
    { id: 'x', label: 'X', href: `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}` },
    { id: 'fb', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}` },
    { id: 'ln', label: 'LinkedIn', href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}` },
  ]
  return (
    <div className="not-prose my-6 flex flex-wrap items-center gap-3 text-sm">
      <span className="text-gray-500">Share:</span>
      {items.map(i => (
        <a
          key={i.id}
          href={i.href}
          target="_blank"
          rel="noopener"
          className="px-3 py-1 rounded-full border hover:bg-gray-50"
        >
          {i.label}
        </a>
      ))}
      <button
        className="px-3 py-1 rounded-full border hover:bg-gray-50"
        onClick={async () => {
          try { await navigator.clipboard.writeText(url); alert('Link copied!') } catch {}
        }}
      >
        Copy link
      </button>
    </div>
  )
}

/* -----------------------------
   QoL: Table of contents
   - Finds h2/h3 inside #post-content
   - Active section highlight
------------------------------*/
function TOC({ containerSelector = '#post-content' }) {
  const [items, setItems] = useState([])
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const root = document.querySelector(containerSelector)
    if (!root) return
    const hs = Array.from(root.querySelectorAll('h2, h3'))
      .filter(h => h.id)
      .map(h => ({ id: h.id, text: h.textContent?.trim() || '', level: h.tagName.toLowerCase() }))
    setItems(hs)

    const onScroll = () => {
      let closest = null
      let min = Infinity
      hs.forEach(h => {
        const el = document.getElementById(h.id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top - 120) // ~header offset
        if (dist < min) { min = dist; closest = h.id }
      })
      if (closest) setActiveId(closest)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [containerSelector])

  if (!items.length) return null

  return (
    <nav aria-label="Table of contents" className="not-prose">
      <div className="hidden md:block rounded-lg border border-gray-200 p-4 bg-white">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">On this page</h3>
        <ul className="space-y-2">
          {items.map(it => (
            <li key={it.id} className={it.level === 'h3' ? 'ml-4' : ''}>
              <a
                href={`#${it.id}`}
                className={`text-sm hover:text-[#4bbf39] ${activeId === it.id ? 'text-[#4bbf39] font-medium' : 'text-gray-600'}`}
              >
                {it.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile collapsible */}
      <details className="md:hidden rounded-lg border border-gray-200 p-4 bg-white">
        <summary className="cursor-pointer text-sm font-semibold text-gray-700">Table of contents</summary>
        <ul className="mt-3 space-y-2">
          {items.map(it => (
            <li key={it.id} className={it.level === 'h3' ? 'ml-4' : ''}>
              <a
                href={`#${it.id}`}
                className={`text-sm hover:text-[#4bbf39] ${activeId === it.id ? 'text-[#4bbf39] font-medium' : 'text-gray-600'}`}
              >
                {it.text}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  )
}

const BlogPostPage = () => {
  const { category, slug } = useParams()
  const full = `${category}/${slug}`

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState([])

  // --- desktop detection (lg = 1024px) ---
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(min-width: 1024px)').matches
  })
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(min-width: 1024px)')
    const onChange = e => setIsDesktop(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const formData = new FormData(e.currentTarget)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      setSubmitted(true)
      e.currentTarget.reset()
    } catch (err) {
      console.error('Subscribe error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  // ---- Sticky/affix setup ----
  const STICKY_TOP_PX = 40
  const SIDEBAR_PAD_TOP = 20
  const SIDEBAR_PAD_BOTTOM = 20
  const STOP_GAP = 20

  const stickyWrapRef = useRef(null)
  const stickyInnerRef = useRef(null)
  const scrollAreaRef = useRef(null)
  const subscribeRef = useRef(null)

  const [affixState, setAffixState] = useState('static')
  const [sidebarWidth, setSidebarWidth] = useState(0)
  const [placeholderHeight, setPlaceholderHeight] = useState(0)

  useLayoutEffect(() => {
    if (!isDesktop) {
      setAffixState('static')
      setPlaceholderHeight(0)
      setSidebarWidth(0)
      return
    }

    let rafId = 0

    const update = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const wrap = stickyWrapRef.current
        const inner = stickyInnerRef.current
        const stopEl = subscribeRef.current
        if (!wrap || !inner) return

        const wrapRect = wrap.getBoundingClientRect()
        const wrapAbsTop = wrapRect.top + window.scrollY

        const innerHeight = inner.offsetHeight
        setPlaceholderHeight(innerHeight)
        setSidebarWidth(wrap.clientWidth)

        const stopAbsTop = stopEl
          ? stopEl.getBoundingClientRect().top + window.scrollY
          : Number.POSITIVE_INFINITY

        const y = window.scrollY
        const fixedStartY = wrapAbsTop - STICKY_TOP_PX
        const stopAtY = stopAbsTop - innerHeight - STOP_GAP - STICKY_TOP_PX

        if (y < fixedStartY) {
          setAffixState('static')
        } else if (y >= fixedStartY && y < stopAtY) {
          setAffixState('fixed')
        } else {
          setAffixState('stopped')
        }
      })
    }

    // Initial + listeners
    update()
    const onHash = () => { update(); requestAnimationFrame(update); setTimeout(update, 250) }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    window.addEventListener('hashchange', onHash)
    window.addEventListener('load', update)
    document.fonts?.ready?.then(update)

    // Recalc when DOM/layout changes
    const roTargets = [document.body, stickyInnerRef.current, subscribeRef.current].filter(Boolean)
    const ro = new ResizeObserver(() => { update(); requestAnimationFrame(update) })
    roTargets.forEach(el => ro.observe(el))

    const mo = new MutationObserver(() => { update(); requestAnimationFrame(update) })
    mo.observe(document.body, { childList: true, subtree: true, characterData: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('load', update)
      ro.disconnect()
      mo.disconnect()
    }
  }, [isDesktop])

  // Re-measure after any in-page anchor click (TOC etc.)
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.dispatchEvent(new Event('hashchange'))
        })
      })
      setTimeout(() => window.dispatchEvent(new Event('hashchange')), 250)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  // ------- Robust post loading (slug + canonical fallbacks) -------
  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        setLoading(true)

        const norm = (v) => (v ?? '').toString().trim().toLowerCase()
        const stripTrailingSlash = (v) => v.replace(/\/+$/, '')
        const urlSlug = norm(decodeURIComponent(slug || ''))

        // 1) direct
        let p = await getPostBySlug(urlSlug)
        let all

        // 2) fallbacks
        if (!p) {
          all = await getBlogPosts()
          const endsWithSlug = (canonish) => {
            const c = norm(stripTrailingSlash(canonish || ''))
            return c.endsWith(`/${urlSlug}`)
          }

          p =
            all.find(x => norm(x.slug) === urlSlug) ||
            all.find(x => norm(x.meta?.slug) === urlSlug) ||
            all.find(x => endsWithSlug(x.meta?.canonical || x.canonical)) ||
            all.find(x => endsWithSlug(x.url))
        }

        if (!alive) return

        if (!p) {
          setPost(null)
          setRelatedPosts([])
          return
        }

        setPost(p)

        // 3) related
        if (!all) all = await getBlogPosts()
        if (!alive) return

        const sameCategory = all.filter(x => x.slug !== p.slug && x.category === p.category)
        const others = all.filter(x => x.slug !== p.slug && x.category !== p.category)

        const tagsSet = new Set((p.tags || []).map(t => String(t).toLowerCase()))
        const byTags = (arr) =>
          arr.sort((a, b) => {
            const overlap = (post) => (post.tags || []).filter(t => tagsSet.has(String(t).toLowerCase())).length
            return overlap(b) - overlap(a)
          })

        const related = [...byTags(sameCategory), ...byTags(others)].slice(0, 3)
        setRelatedPosts(related)
      } catch (err) {
        console.error('[BlogPostPage] load error:', err)
        setPost(null)
        setRelatedPosts([])
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4bbf39] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/insights">
            <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // Be permissive about the compiled MDX export name
  const Content =
    post.component ||
    post.Component ||
    post.MDX ||
    post.content ||
    null

  const meta = post.meta || {}
  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''

  const canonicalAbs = (post.canonical && post.canonical.startsWith('http'))
    ? post.canonical
    : `https://uptrademedia.com${post.canonical || `/insights/${post.slug}`}`

  return (
    <div className="min-h-screen bg-white blog-container" style={{ overflow: 'visible' }}>
      {/* Reading progress */}
      <ReadingProgress target="#post-article" />

      {post && (
        <SEO
          title={meta.title || post.title}
          description={meta.description || post.excerpt}
          keywords={((meta.tags || post.tags) || []).join(', ')}
          image={meta.image || post.image}
          url={meta.canonical || `/insights/${post.slug}`}
          type="article"
          article={{
            publishedTime: post.publishDate || post.date,
            modifiedTime: post.modifiedDate || post.publishDate || post.date,
            author: 'Uptrade Media',
            section: post.category,
            tags: meta.tags || post.tags
          }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-[#4bbf39] hover:text-[#39bfb0] transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/insights" className="text-[#4bbf39] hover:text-[#39bfb0] transition-colors">Insights</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/insights?category=${post.category}`} className="text-[#4bbf39] hover:text-[#39bfb0] transition-colors capitalize">
              {post.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article + Sidebar GRID */}
      <article id="post-article" className="py-12" style={{ overflow: 'visible' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ overflow: 'visible' }}>
          <div className="grid lg:grid-cols-3 gap-12 items-start" style={{ overflow: 'visible' }}>
            {/* MAIN */}
            <div className="lg:col-span-2 min-w-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Link to="/insights" className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Insights
                </Link>

                <div className="mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.category === 'marketing'
                        ? 'bg-[#4bbf39]/10 text-[#4bbf39]'
                        : post.category === 'media'
                        ? 'bg-[#39bfb0]/10 text-[#39bfb0]'
                        : post.category === 'design'
                        ? 'bg-purple-100 text-[#A855F7]'
                        : 'bg-orange-100 text-orange-600'
                    }`}
                  >
                    {post.category?.charAt(0).toUpperCase() + post.category?.slice(1)}
                  </span>
                </div>

                {/* Gradient H1 */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                  {dateStr && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {dateStr}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                  {!!(post.tags && post.tags.length) && (
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      {(post.tags || []).join(', ')}
                    </div>
                  )}
                </div>

                {(meta.image || post.image) && (
                  <div className="mb-6 overflow-hidden">
                    <img
                      src={meta.image || post.image}
                      alt={meta.imageAlt || post.title}
                      loading="lazy"
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg max-w-full"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                )}

                {/* Intro paragraph (from description/excerpt), then TOC, then share, then content */}
                {(meta.description || post.excerpt) && (
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    {meta.description || post.excerpt}
                  </p>
                )}

                {/* TOC under title + image + intro */}
                <div className="not-prose mb-6">
                  <TOC containerSelector="#post-content" />
                </div>

                {/* Share bar */}
                <ShareBar url={canonicalAbs} title={post.title} />

                {/* MDX content */}
                <div
                  id="post-content"
                  className="prose prose-lg max-w-none"
                  style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                >
                  {Content ? <Content components={mdxComponents} /> : <p className="text-gray-600">Content not available.</p>}
                </div>

                <div className="mt-12 pt-8 border-top border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {(post.tags || []).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* SIDEBAR (Recommended stays) */}
            <aside className="lg:col-span-1 min-w-0">
              <div ref={stickyWrapRef} className="relative">
                {/* placeholder to keep layout when sticky */}
                <div style={{ height: isDesktop && affixState !== 'static' ? placeholderHeight : 0 }} />
                <div
                  ref={stickyInnerRef}
                  style={{
                    position: isDesktop
                      ? (affixState === 'fixed' ? 'fixed' : affixState === 'stopped' ? 'absolute' : 'static')
                      : 'static',
                    top: isDesktop && affixState === 'fixed' ? STICKY_TOP_PX : 'auto',
                    width: isDesktop && affixState !== 'static' ? sidebarWidth : 'auto',
                    ...(isDesktop && affixState === 'stopped' && (() => {
                      const wrap = stickyWrapRef.current
                      const stopEl = subscribeRef.current
                      if (!wrap || !stopEl) return {}
                      const wrapAbsTop = wrap.getBoundingClientRect().top + window.scrollY
                      const stopAbsTop = stopEl.getBoundingClientRect().top + window.scrollY
                      const inner = stickyInnerRef.current
                      const innerHeight = inner ? inner.offsetHeight : 0
                      const absoluteTop = Math.max(0, stopAbsTop - wrapAbsTop - innerHeight - 16)
                      return { top: absoluteTop }
                    })()),
                    paddingTop: isDesktop && affixState === 'fixed' ? SIDEBAR_PAD_TOP : 0,
                    paddingBottom: isDesktop && affixState === 'fixed' ? SIDEBAR_PAD_BOTTOM * 2 : 0,
                  }}
                >
                  <div
                    ref={scrollAreaRef}
                    className="sidebar-scroll hide-scrollbar"
                    style={{
                      maxHeight: isDesktop && affixState === 'fixed'
                        ? `calc(100vh - ${STICKY_TOP_PX + SIDEBAR_PAD_TOP + SIDEBAR_PAD_BOTTOM}px)`
                        : 'none',
                      overflowY: isDesktop && affixState === 'fixed' ? 'auto' : 'visible',
                      overscrollBehavior: isDesktop && affixState === 'fixed' ? 'contain' : 'auto'
                    }}
                    onWheel={(e) => {
                      if (!(isDesktop && affixState === 'fixed')) return
                      const el = e.currentTarget
                      const atTop = el.scrollTop <= 0
                      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight
                      const dirUp = e.deltaY < 0
                      const dirDown = e.deltaY > 0
                      if ((dirUp && !atTop) || (dirDown && !atBottom)) e.stopPropagation()
                    }}
                  >
                    {/* Recommended */}
                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended</h3>
                      <div className="space-y-6">
                        {relatedPosts.map((rp) => {
                          const href = rp.canonical
                            ? rp.canonical.replace(/^https?:\/\/[^/]+/, '')
                            : `/insights/${rp.slug}`
                          return (
                            <Link key={rp.slug} to={href} className="block group">
                              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                {rp.image && (
                                  <img
                                    src={rp.image}
                                    alt={rp.imageAlt || rp.title}
                                    loading="lazy"
                                    className="w-full h-32 object-cover max-w-full"
                                    style={{ maxWidth: '100%', height: 'auto', minHeight: '128px' }}
                                  />
                                )}
                                <div className="p-4">
                                  <div className="flex items-center mb-2">
                                    <span
                                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        rp.category === 'marketing'
                                          ? 'bg-[#4bbf39]/10 text-[#4bbf39]'
                                          : rp.category === 'media'
                                          ? 'bg-[#39bfb0]/10 text-[#39bfb0]'
                                          : rp.category === 'design'
                                          ? 'bg-purple-100 text-[#A855F7]'
                                          : 'bg-orange-100 text-orange-600'
                                      }`}
                                    >
                                      {rp.category?.charAt(0).toUpperCase() + rp.category?.slice(1)}
                                    </span>
                                  </div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-[#4bbf39] transition-colors line-clamp-2 mb-2">
                                    {rp.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">{rp.excerpt}</p>
                                  <div className="flex items-center text-xs text-gray-500">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {rp.readTime}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    {/* CTA card */}
                    <div className="mt-6 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg p-5 text-left text-white shadow-md">
                      <h4 className="font-semibold text-lg">Get a Free Website & SEO Audit</h4>
                      <p className="text-white/90 text-sm mt-1">Find missed keywords, quick wins, and revenue leaks.</p>
                      <ul className="mt-3 space-y-1 text-sm">
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Actionable fixes</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Competitor gap analysis</li>
                        <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Traffic & lead projections</li>
                      </ul>
                      <Link to="/free-audit" className="inline-block mt-4">
                        <Button className="bg-white text-[#4bbf39] hover:bg-white/90 inline-flex items-center">
                          Start Free Audit
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* CTA Section (Subscribe only) */}
      <section
        ref={subscribeRef}
        id="subscribe-cta"
        className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Turn Insight Into Revenue.</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Proven tactics from Uptrade Media that grow traffic, leads, and sales delivered straight to your inbox
            </p>
          </motion.div>

          {submitted ? (
            <div className="text-center py-6" aria-live="polite">
              <CheckCircle className="mx-auto text-white mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">You’re In</h3>
              <p className="text-white/90">
                Expect actionable insights and case-study tactics that actually move the needle.
              </p>
            </div>
          ) : (
            <form
              name="insights-subscribe"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubscribe}
              className="flex flex-col items-center gap-3"
            >
              <input type="hidden" name="form-name" value="insights-subscribe" />
              <p style={{ display: 'none' }}>
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
              </p>

              <div className="w-full flex flex-col sm:flex-row items-stretch justify-center gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="h-11 w-full sm:w-96 px-4 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                />
                <motion.div className="inline-block" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <Button
                    type="submit"
                    disabled={submitting}
                    aria-label="Subscribe to Uptrade Media Insights"
                    className="inline-flex h-11 items-center px-6 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] transition-all duration-200 shadow-xs disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Subscribing...' : 'Subscribe Now'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>

              <div className="mt-2 max-w-xl mx-auto text-left">
                <label className="inline-flex items-start gap-3 text-sm text-white/90">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-white/50 bg-white/20 accent-[#4bbf39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  />
                  <span className="leading-relaxed">
                    I agree to receive communications, marketing updates, and promotional content from
                    <span className="font-semibold"> Uptrade Media</span>. You can unsubscribe anytime.
                  </span>
                </label>
              </div>
            </form>
          )}

          {/* Hidden static form for Netlify detection */}
          <form name="insights-subscribe" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="email" name="email" />
            <input type="checkbox" name="consent" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
