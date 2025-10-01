import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Search,
  Camera,
  Settings,
  Phone,
  ShoppingCart,
  TrendingUp,
  Globe
} from 'lucide-react'
import { motion } from 'framer-motion'

function SpadeKreationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio" className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Automotive
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Spade Kreations
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Complete Website Overhaul & Lead Generation
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Website Overhaul', 'Lead Generation', 'SEO Optimization'].map((service, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {service}
                  </Badge>
                ))}
              </div>
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">430%</div>
                    <div className="text-white/90">Lead Increase</div>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.spademade.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 font-semibold px-8 py-3">
                  <Globe className="mr-2 w-5 h-5" />
                  Visit Live Website
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/Portfolio/Spade_Kreations_Portfolio.png" 
                alt="Spade Kreations website showcase"
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Uptrade Media partnered with Spade Kreations, an automotive business, to deliver a complete website overhaul that transformed their digital presence and lead generation capabilities. The project resulted in an impressive 430% increase in web leads through strategic design, optimization, and enhanced user experience.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Our comprehensive approach included a complete website redesign, advanced SEO optimization, and high-quality media production. We captured professional photography and enhanced the visual impact of the website while showcasing Spade Kreations' automotive expertise and capabilities.
                </p>
                
                <p className="text-gray-600">
                  The new website not only looks professional and modern but is strategically designed to convert visitors into leads, positioning Spade Kreations for sustained growth in the competitive automotive market.
                </p>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry</h4>
                    <p className="text-gray-600">Automotive</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Type</h4>
                    <p className="text-gray-600">Complete Website Overhaul</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Results</h4>
                    <p className="text-gray-600">430% Increase in Web Leads</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Enhancement Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-[#4bbf39] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Complete Website Overhaul</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Modern, responsive design</li>
                  <li>• Enhanced user experience</li>
                  <li>• Mobile optimization</li>
                  <li>• Professional branding</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-[#4bbf39] mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lead Generation Focus</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Strategic call-to-actions</li>
                  <li>• Conversion optimization</li>
                  <li>• Lead capture forms</li>
                  <li>• 430% lead increase</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Search className="w-12 h-12 text-[#4bbf39] mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Automotive keyword targeting</li>
                  <li>• Technical SEO improvements</li>
                  <li>• Local search optimization</li>
                  <li>• Content optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Optional Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Enhancements</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-8 h-8 text-[#4bbf39] mr-3" />
                <h3 className="text-2xl font-semibold">Product Catalog Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                An optional phase included building out a full product catalog with individual product pages and categorized layouts to support future e-commerce or custom build inquiries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-2" />
                  <span>Individual product pages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-2" />
                  <span>Categorized layouts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-2" />
                  <span>E-commerce ready structure</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Search className="w-8 h-8 text-[#4bbf39] mr-3" />
                <h3 className="text-2xl font-semibold">Ongoing SEO Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Uptrade Media also offered monthly content creation services to maintain ongoing SEO momentum and keep Spade Kreations competitive in search results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-2" />
                  <span>Monthly content creation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-2" />
                  <span>SEO momentum maintenance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-2" />
                  <span>Competitive positioning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Enhance Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's optimize your website for search engines and create a digital experience that drives measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/free-audit">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15133310555">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                <Phone className="mr-2 w-5 h-5" />
                Call (513) 331-0555
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpadeKreationsPage
