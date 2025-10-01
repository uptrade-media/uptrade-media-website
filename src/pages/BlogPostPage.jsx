import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import { getBlogPost, getBlogPostsByCategory } from '../utils/blogManager'

const BlogPostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    // Get post metadata by slug only
    const postData = getBlogPost(slug)
    if (postData) {
      setPost(postData)
      
      // Get related posts (newest 3 from same category, excluding current post)
      const categoryPosts = getBlogPostsByCategory(postData.category)
        .filter(p => p.slug !== slug)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
      setRelatedPosts(categoryPosts)
      
      // Load markdown content
      fetch(`/blog/${postData.category}/${slug}.md`)
        .then(response => response.text())
        .then(markdown => {
          // Simple markdown parsing - extract content after frontmatter
          const contentStart = markdown.indexOf('---', 3) + 3
          const markdownContent = markdown.substring(contentStart).trim()
          
          // Basic markdown to HTML conversion with internal linking
          const htmlContent = markdownContent
            .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6 text-gray-900">$1</h1>')
            .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold mb-4 mt-8 text-gray-900">$1</h2>')
            .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900">$1</h3>')
            .replace(/^#### (.*$)/gm, '<h4 class="text-xl font-bold mb-2 mt-4 text-gray-900">$1</h4>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
            .replace(/^- (.*$)/gm, '<li class="mb-1">$1</li>')
            .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-[#4bbf39] pl-4 italic text-gray-700 my-4">$1</blockquote>')
            // Remove inline images from content (keep only header image)
            .replace(/!\[(.*?)\]\((.*?)\)/g, '')
            // Internal linking for services
            .replace(/\b(SEO|search engine optimization)\b/gi, '<a href="/marketing/seo" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(web design|website design)\b/gi, '<a href="/design/web-design" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(video production|video marketing)\b/gi, '<a href="/media/video-production" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(commercial photography|photography services)\b/gi, '<a href="/media/photography" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(brand identity|branding|logo design)\b/gi, '<a href="/design/branding" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(paid ads|Google Ads|PPC)\b/gi, '<a href="/marketing/ad-management" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(UX\/UI design|user experience)\b/gi, '<a href="/design/ux" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(graphic design)\b/gi, '<a href="/design/graphic-design" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(email marketing|social media marketing)\b/gi, '<a href="/marketing/email-marketing" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(reputation management|review management)\b/gi, '<a href="/marketing/reputation-management" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(content marketing)\b/gi, '<a href="/marketing/content-marketing" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(aerial photography|drone media)\b/gi, '<a href="/media/aerial-drone" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(testimonial videos|case study videos)\b/gi, '<a href="/media/build-credibility" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            // Internal linking for location-based terms
            .replace(/\b(Cincinnati|Northern Kentucky)\b/gi, '<a href="/about" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            // Internal linking for contact/consultation
            .replace(/\b(free audit|website audit|consultation)\b/gi, '<a href="/free-audit" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\b(contact us|get in touch)\b/gi, '<a href="/contact" class="text-[#4bbf39] hover:text-[#39bfb0] underline font-medium">$1</a>')
            .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
            .replace(/^(?!<[h|l|b])/gm, '<p class="mb-4 text-gray-700 leading-relaxed">')
            .replace(/<p class="mb-4 text-gray-700 leading-relaxed">(<[h|l|b])/g, '$1')
            
          setContent(`<div class="prose prose-lg max-w-none">${htmlContent}</div>`)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error loading blog post:', error)
          setContent('<p class="text-gray-600">Content not available.</p>')
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
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

  const shareUrl = window.location.href
  const shareTitle = post.title

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/insights" className="text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
              Insights
            </Link>
            <span className="text-gray-400">/</span>
            <Link to={`/insights?category=${post.category}`} className="text-[#4bbf39] hover:text-[#39bfb0] transition-colors capitalize">
              {post.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
            {/* Back Button */}
            <Link to="/insights" className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                post.category === 'marketing' ? 'bg-[#4bbf39]/10 text-[#4bbf39]' :
                post.category === 'media' ? 'bg-[#39bfb0]/10 text-[#39bfb0]' :
                post.category === 'design' ? 'bg-red-100 text-#A855F7' :
                'bg-orange-100 text-orange-600'
              }`}>
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {post.tags.join(', ')}
              </div>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Share:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-[#4bbf39] text-white rounded-lg hover:bg-[#39bfb0] transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-[#4bbf39] text-white rounded-lg hover:bg-[#39bfb0] transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-[#39bfb0] text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
              </motion.div>
            </div>

            {/* Sidebar - Recommended */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.slug} 
                      to={`/insights/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        {relatedPost.image && (
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-32 object-cover"
                          />
                        )}
                        <div className="p-4">
                          <div className="flex items-center mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              relatedPost.category === 'marketing' ? 'bg-[#4bbf39]/10 text-[#4bbf39]' :
                              relatedPost.category === 'media' ? 'bg-[#39bfb0]/10 text-[#39bfb0]' :
                              relatedPost.category === 'design' ? 'bg-red-100 text-#A855F7' :
                              'bg-orange-100 text-orange-600'
                            }`}>
                              {relatedPost.category.charAt(0).toUpperCase() + relatedPost.category.slice(1)}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#4bbf39] transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert insights and strategies tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/insights">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-3 transition-all duration-200">
                Read More Insights
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
