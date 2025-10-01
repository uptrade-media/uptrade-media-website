import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import { expandedBlogPosts } from '../utils/expandedBlogPosts.js'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Search,
  TrendingUp,
  Video,
  Palette,
  Newspaper,
  ArrowRight,
  Eye
} from 'lucide-react'
import { motion } from 'framer-motion'

const InsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Use the expanded blog posts from the centralized data
  const blogPosts = expandedBlogPosts

  const categories = [
    { id: 'all', name: 'All Posts', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'marketing', name: 'Marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'media', name: 'Media', icon: <Video className="w-4 h-4" /> },
    { id: 'news', name: 'News', icon: <Newspaper className="w-4 h-4" /> }
  ]

  const featuredPosts = blogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const insightsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Marketing Insights - Uptrade Media",
    "description": "Expert insights on digital marketing, web design, media production, and industry trends from Uptrade Media.",
    "url": "https://uptrademedia.com/insights",
    "publisher": {
      "@type": "Organization",
      "name": "Uptrade Media",
      "url": "https://uptrademedia.com",
      "logo": "https://uptrademedia.com/logo_dark.svg"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://uptrademedia.com/insights"
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "SEO for Law Firms | Best SEO Marketing Strategies",
        "description": "Discover proven SEO strategies that help law firms dominate local search results and attract high-value clients.",
        "image": "https://uptrademedia.com/seo_for_law_firms.jpeg",
        "datePublished": "2024-12-14",
        "author": {
          "@type": "Organization",
          "name": "Uptrade Media"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "Best Practices for Small Business Web Design in 2025",
        "description": "Essential web design strategies that help small businesses create converting websites and improve online presence.",
        "image": "https://uptrademedia.com/best_practices_for_small_business_web_design.jpeg",
        "datePublished": "2024-12-10",
        "author": {
          "@type": "Organization",
          "name": "Uptrade Media"
        }
      }
    ]
  }

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

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Whiteabstractbackground.svg)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Marketing <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">Insights</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Expert insights on digital marketing, web design, media production, and industry trends. 
              Stay ahead with strategies that drive real business growth.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent" style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }} />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent text-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Insights</h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful content to help grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full !pt-0">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#4bbf39] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/insights/${post.slug}`}
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
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full !pt-0">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/insights/${post.slug}`}
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No insights found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our team of experts help you apply these insights to grow your business and achieve your marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InsightsPage
