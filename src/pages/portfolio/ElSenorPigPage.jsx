import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Globe,
  Search,
  Camera,
  Palette,
  Phone,
  ExternalLink
} from 'lucide-react'
import { motion } from 'framer-motion'

function ElSenorPigPage() {
  const services = [
    'Web Design',
    'Branding', 
    'Local SEO',
    'Menu Copywriting',
    'Structured Data',
    'Photography',
    'Videography',
    'Google Business Optimization'
  ]

  const keyFeatures = [
    { icon: <Palette className="w-6 h-6" />, title: 'Brand Identity & Visual Direction', description: 'Color palette inspired by iconic pink walls and lush greenery' },
    { icon: <Globe className="w-6 h-6" />, title: 'Custom Website Design', description: 'Fully responsive design capturing the restaurant\'s unique atmosphere' },
    { icon: <Search className="w-6 h-6" />, title: 'Local SEO Optimization', description: 'Optimized for Northern Kentucky and Cincinnati area searches' },
    { icon: <Camera className="w-6 h-6" />, title: 'Photography & Videography', description: 'High-quality content showcasing food, ambiance, and drone shots' }
  ]

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
                Restaurant & Food Service
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                El Señor Pig
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Vibrant Mexican Restaurant Digital Presence
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Web Design', 'Branding', 'Local SEO', 'Photography'].map((service, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {service}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center text-white/90">
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>Visit: elsenorpig.com</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/Portfolio/El_Senor_Pig_Portfolio.png" 
                alt="El Señor Pig website showcase"
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
                  El Señor Pig is a vibrant, family-owned Mexican restaurant in Dayton, KY, known for its pink ambiance, playful decor, and fresh, authentic food. When they came to us, they had a bold vision—but needed a digital presence to match.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Did</h3>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Brand Identity & Visual Direction</h4>
                <p className="text-gray-600 mb-6">
                  We worked closely with the El Señor Pig team to translate their quirky, pig-loving personality into a visual identity that stood out—starting with a color palette inspired by their iconic pink walls and lush greenery. From logos to iconography, everything we created reflects the restaurant's fun, welcoming vibe.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Custom Website Design</h4>
                <p className="text-gray-600 mb-6">
                  We built a fully responsive website that captures the restaurant's unique atmosphere and makes it easy for customers to explore the menu, get directions, and make plans to visit. The design is bold, colorful, and full of personality—just like the restaurant itself.
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
                    <p className="text-gray-600">Restaurant & Food Service</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Dayton, KY</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Website</h4>
                    <p className="text-gray-600">elsenorpig.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Type</h4>
                    <p className="text-gray-600">Complete Brand & Digital Transformation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              What We Delivered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive digital transformation that captures the restaurant's vibrant personality and drives customer engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Complete Service Package</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#4bbf39]">Local SEO Optimization</h3>
                  <p className="text-gray-600">
                    To ensure El Señor Pig showed up in search results for hungry customers in the Northern Kentucky and Cincinnati area, we optimized the entire site for local SEO, including structured data, keyword-rich location pages, and Google Business integration.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#4bbf39]">Photography & Videography</h3>
                  <p className="text-gray-600">
                    Our team captured high-quality photo and video content for the website and social media—from delicious close-ups of fajitas and margaritas to drone shots of the patio and ambiance. Every visual was crafted to tell the story of what makes El Señor Pig special.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#4bbf39]">Content Writing & Menu Descriptions</h3>
                  <p className="text-gray-600">
                    We wrote appetizing menu descriptions and engaging on-site content that reflects the voice of the restaurant. Whether you're browsing their house-made tamales or reading their story, every word feels authentic and warm.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Brand Personality</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Vibrant & Playful</h4>
                      <p className="text-white/90">Bold colors and fun design elements that reflect the restaurant's personality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Authentic & Warm</h4>
                      <p className="text-white/90">Family-owned feel with genuine hospitality and fresh, quality food</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Local & Connected</h4>
                      <p className="text-white/90">Strong ties to the Northern Kentucky and Cincinnati community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Results & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The new digital presence successfully captures El Señor Pig's unique personality while driving customer engagement and local visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Enhanced</div>
                <div className="text-gray-600">Brand Recognition</div>
                <p className="text-sm text-gray-500 mt-2">Distinctive visual identity that stands out in the market</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Improved</div>
                <div className="text-gray-600">Local Visibility</div>
                <p className="text-sm text-gray-500 mt-2">Optimized for Northern Kentucky and Cincinnati searches</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Increased</div>
                <div className="text-gray-600">Customer Engagement</div>
                <p className="text-sm text-gray-500 mt-2">Compelling visuals and content that drive visits</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Showcase Your Brand?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a digital presence that captures your unique personality and connects with your local community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://elsenorpig.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                <ExternalLink className="mr-2 w-5 h-5" />
                View Live Website
              </Button>
            </a>
            <Link to="/free-audit">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
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

export default ElSenorPigPage
