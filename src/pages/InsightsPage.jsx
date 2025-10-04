// src/pages/InsightsPage.jsx
import React, { useState, useRef, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import useBlogPosts from '../hooks/useBlogPosts'
import { Button } from '../components/ui/button.jsx'
import { Card, CardContent } from '../components/ui/card.jsx'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Search,
  TrendingUp,
  Video,
  Palette,
  Newspaper,
  ArrowRight,
  CheckCircle,
  X,
} from 'lucide-react'
import { motion } from 'framer-motion'

const PER_PAGE = 9 // 3 columns x 3 rows

export default function InsightsPage() {
  const { posts, loading, error } = useBlogPosts()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [blogPosts, setBlogPosts] = useState([])

  const resultsRef = useRef(null)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // --- Normalize & sort data from the hook ---
  useEffect(() => {
    const norm = (v) => (v ?? '').toString().trim()
    const sorted = (posts || [])
      .slice()
      .sort((a, b) => {
        const da = new Date(a.date || a.publishDate || 0).getTime()
        const db = new Date(b.date || b.publishDate || 0).getTime()
        return db - da
      })
      .map((p) => ({
        ...p,
        title: norm(p.title || p.meta?.title),
        excerpt: norm(p.excerpt || p.meta?.excerpt || p.meta?.description),
        image: p.meta?.image || p.image,
        imageAlt: p.meta?.imageAlt || p.imageAlt || p.title,
        slug: norm(p.slug || p.meta?.slug),
        canonical: p.meta?.canonical || p.canonical,
        category: (p.category || p.meta?.category || 'news').toLowerCase(),
        readTime: p.readTime || '—',
        tags: p.tags || p.meta?.tags || [],
        date: p.date || p.publishDate || p.modifiedDate,
      }))

    setBlogPosts(sorted)

    if (import.meta.env.DEV) {
      // Helpful visibility in dev
      console.log('[InsightsPage] received posts:', posts?.length || 0)
      console.log(
        '[InsightsPage] normalized slugs:',
        sorted.slice(0, 5).map((p) => p.slug)
      )
    }
  }, [posts])

  // --- Search + filter ---
  function handleSearchSubmit(e) {
    e.preventDefault()
    resultsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  function handleSearchKeyDown(e) {
    if (e.key === 'Escape') setSearchTerm('')
  }

  const filteredPosts = useMemo(() => {
    const q = (searchTerm || '').trim().toLowerCase()
    return (blogPosts || []).filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory
      const haystack = `${post.title || ''} ${post.excerpt || ''} ${(post.tags || []).join(' ')}`
        .toLowerCase()
      const matchesSearch = q === '' || haystack.includes(q)
      return matchesCategory && matchesSearch
    })
  }, [blogPosts, selectedCategory, searchTerm])

  // --- Page state synced to URL ---
  const initialPage = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1)
  const [page, setPage] = useState(initialPage)

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PER_PAGE))

  useEffect(() => {
    if (page > totalPages) {
      setPage(1)
      setSearchParams((prev) => {
        const p = new URLSearchParams(prev)
        p.set('page', '1')
        return p
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages])

  useEffect(() => {
    setPage(1)
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev)
      p.set('page', '1')
      return p
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchTerm])

  const goToPage = (p) => {
    const clamped = Math.min(Math.max(1, p), totalPages)
    setPage(clamped)
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      params.set('page', String(clamped))
      return params
    })
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  const start = (page - 1) * PER_PAGE
  const end = start + PER_PAGE
  const paginatedPosts = filteredPosts.slice(start, end)

  const categories = [
    { id: 'all', name: 'All Posts', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'marketing', name: 'Marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'media', name: 'Media', icon: <Video className="w-4 h-4" /> },
    { id: 'news', name: 'News', icon: <Newspaper className="w-4 h-4" /> },
  ]

  const featuredPosts = (blogPosts || [])
    .filter((post) => !!post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  // Build compact page list with ellipses
  const buildPageNumbers = () => {
    const pages = []
    const maxButtons = 7
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
      return pages
    }
    const showLeft = Math.max(2, page - 1)
    const showRight = Math.min(totalPages - 1, page + 1)
    pages.push(1)
    if (showLeft > 2) pages.push('left-ellipsis')
    for (let i = showLeft; i <= showRight; i++) pages.push(i)
    if (showRight < totalPages - 1) pages.push('right-ellipsis')
    pages.push(totalPages)
    return pages
  }

  // --- Subscribe (Netlify) ---
  async function handleSubscribe(e) {
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

  // --- Structured data ---
  const insightsStructuredData = useMemo(() => {
    const postsForSchema = (blogPosts || []).slice(0, 10).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      image: p.image,
      datePublished: p.publishDate || p.date,
      author: { '@type': 'Organization', name: 'Uptrade Media' },
      url:
        p.canonical?.startsWith('http')
          ? p.canonical
          : `https://uptrademedia.com${p.canonical || `/insights/${p.slug}`}`,
    }))
    return {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Marketing Insights - Uptrade Media',
      description:
        'Expert insights on digital marketing, web design, media production, and industry trends from Uptrade Media.',
      url: 'https://uptrademedia.com/insights',
      publisher: {
        '@type': 'Organization',
        name: 'Uptrade Media',
        url: 'https://uptrademedia.com',
        logo: 'https://uptrademedia.com/logo_dark.svg',
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://uptrademedia.com/insights' },
      blogPost: postsForSchema,
    }
  }, [blogPosts])

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Marketing Insights | Digital Marketing Blog | Uptrade Media"
        description="Expert insights on digital marketing, web design, media production, and industry trends. Stay ahead with strategies that drive real business growth from Uptrade Media."
        keywords="digital marketing insights, SEO strategies, web design trends, video marketing, content marketing, Cincinnati marketing blog, Northern Kentucky digital marketing"
        ogImage="/Whiteabstractbackground.svg"
        structuredData={insightsStructuredData}
        pageType="blog"
      />

      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={scrollToTop}
            className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/Whiteabstractbackground.svg)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Marketing{' '}
              <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">
                Insights
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Expert insights on digital marketing, web design, media production, and industry
              trends. Stay ahead with strategies that drive real business growth.
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto relative"
            >
              <form role="search" onSubmit={handleSearchSubmit} className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6
                             bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                />
                <input
                  type="search"
                  name="q"
                  placeholder="Search insights…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full pl-12 pr-24 py-4 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent text-lg shadow-lg"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-14 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-white/70"
                    aria-label="Clear search"
                    title="Clear"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                )}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-md
                             bg-white/80 hover:bg-white text-gray-700 font-medium border border-white/40"
                  aria-label="Search"
                  title="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Insights</h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful content to help grow your business
            </p>
          </div>

          {loading && featuredPosts.length === 0 ? (
            <div className="text-center text-gray-500">Loading…</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.slug || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full !pt-0">
                    <div className="relative">
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          loading="lazy"
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#4bbf39] text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date
                          ? new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })
                          : '—'}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(post.tags || []).slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={post.canonical || `/insights/${post.slug}`}
                        onClick={scrollToTop}
                        className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-center text-sm text-red-600 mt-6">Error loading insights. Try again later.</p>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#4bbf39] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.icon}
                <span className="ml-2 capitalize">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section ref={resultsRef} id="insights-results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results meta */}
          <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
            <span>
              {filteredPosts.length > 0
                ? `Showing ${start + 1}-${Math.min(end, filteredPosts.length)} of ${filteredPosts.length}`
                : loading
                ? 'Loading…'
                : 'No results'}
            </span>
            <span>{PER_PAGE} per page</span>
          </div>

          {loading && filteredPosts.length === 0 ? (
            <div className="text-center text-gray-500">Loading…</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, index) => (
                <motion.div
                  key={post.slug || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % PER_PAGE) * 0.05 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full !pt-0">
                    <div className="relative">
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          loading="lazy"
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                      )}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date
                          ? new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })
                          : '—'}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(post.tags || []).slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={post.canonical || `/insights/${post.slug}`}
                        onClick={scrollToTop}
                        className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No insights found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter</p>
              {import.meta.env.DEV && (
                <p className="mt-2 text-xs text-gray-400">
                  Dev hint: check console for <code>[useBlogPosts]</code> and <code>[MDX modules]</code> logs.
                </p>
              )}
            </div>
          )}

          {/* Pagination */}
          {!loading && filteredPosts.length > PER_PAGE && (
            <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="px-3 py-2 rounded-md border text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>

              {buildPageNumbers().map((p, i) =>
                p === 'left-ellipsis' || p === 'right-ellipsis' ? (
                  <span key={`${p}-${i}`} className="px-2 select-none">
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    type="button"
                    onClick={() => goToPage(p)}
                    aria-current={p === page ? 'page' : undefined}
                    className={`px-3 py-2 rounded-md text-sm border hover:bg-gray-50 ${
                      p === page ? 'bg-[#4bbf39] text-white border-[#4bbf39]' : ''
                    }`}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-2 rounded-md border text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* CTA: Subscribe */}
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0]">
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
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="w-full flex flex-col sm:flex-row items-stretch justify-center gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="h-11 w-full sm:w-96 px-4 rounded-md bg-white text-gray-900 placeholder:text-gray-500
                             focus:outline-none focus:ring-2 focus:ring-white/70"
                />
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Button
                    type="submit"
                    disabled={submitting}
                    aria-label="Subscribe to Uptrade Media Insights"
                    className="inline-flex h-11 items-center px-6
                               bg-white/20 backdrop-blur-sm border border-white/30 text-white
                               hover:bg-white/90 hover:text-[#4bbf39]
                               transition-all duration-200 shadow-xs
                               disabled:opacity-60 disabled:cursor-not-allowed"
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
                    className="mt-0.5 h-4 w-4 rounded border-white/50 bg-white/20
                               accent-[#4bbf39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
