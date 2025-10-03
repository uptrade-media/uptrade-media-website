import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, Compass, Search, Home, Phone, ArrowRight, TrendingUp, Users, Award } from 'lucide-react'

function NotFoundPage() {
  const location = useLocation()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "404: Page Not Found",
    "url": "https://uptrademedia.com" + location.pathname,
    "inLanguage": "en",
    "isPartOf": {
      "@type": "Organization",
      "name": "Uptrade Media",
      "url": "https://uptrademedia.com"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" onClick={scrollToTop} className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section with Brand Logo */}
      <section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img src="/whitelogo.svg" alt="Uptrade Media" className="w-16 h-16 mr-4" />
              </div>
              
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-6 inline-flex items-center">
                <Compass className="w-4 h-4 mr-2" />
                Error 404
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Oops! Page Not Found
              </h1>
              
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                We couldn't find the page you're looking for at <span className="font-semibold text-white bg-white/20 px-2 py-1 rounded">{location.pathname}</span>. 
                Don't worry – let's get you back on track with our digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/">
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    <Home className="mr-2 w-5 h-5" />
                    Back to Home
                  </Button>
                </Link>
                <a href="tel:+15133310555">
                  <Button size="lg" variant="outline" className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                    <Phone className="mr-2 w-5 h-5" />
                    Call (513) 331-0555
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="text-9xl font-bold text-white/20">404</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Find what you need across our comprehensive digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                    <Search className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Marketing Solutions</CardTitle>
                  <CardDescription className="text-gray-600">
                    SEO, Paid Ads, Content Marketing, and more to grow your online presence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/marketing">
                    <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
                      Explore Marketing
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Media Solutions</CardTitle>
                  <CardDescription className="text-gray-600">
                    Video production, photography, and visual content that tells your story.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/media">
                    <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
                      Explore Media
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                    <Award className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Design Solutions</CardTitle>
                  <CardDescription className="text-gray-600">
                    Web design, branding, and UX/UI that converts visitors into customers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/design">
                    <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
                      Explore Design
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Pages
            </h2>
            <p className="text-xl text-gray-600">
              Quick access to our most visited pages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Portfolio', description: 'View our latest work', link: '/portfolio' },
              { title: 'About Us', description: 'Learn about our team', link: '/about' },
              { title: 'Insights', description: 'Read our latest articles', link: '/insights' },
              { title: 'Contact', description: 'Get in touch with us', link: '/contact' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold text-gray-900">{item.title}</CardTitle>
                    <CardDescription className="text-gray-600">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={item.link}>
                      <Button variant="outline" className="w-full">
                        Visit Page
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free website audit and discover how we can help your business grow with our media-first approach to web design and digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Your Free Audit
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
              <a href="tel:+15133310555">
                <Button size="lg" variant="outline" className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                  <Phone className="mr-2 w-5 h-5" />
                  Call (513) 331-0555
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
