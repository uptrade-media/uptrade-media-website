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
  Users,
  Phone,
  ExternalLink,
  Home
} from 'lucide-react'
import { motion } from 'framer-motion'

function ManhattanHarbourLivingPage() {
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
                Real Estate & Development
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Manhattan Harbour Living
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Luxury Riverfront Community Showcase
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Web Design', 'SEO', 'Drone Footage', 'Lead Generation'].map((service, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {service}
                  </Badge>
                ))}
              </div>
              <a href="https://manhattanharbourliving.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-[#4bbf39] px-8 py-3 transition-all duration-200">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  View Live Website
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
                src="/Portfolio/Manhattan_Harbour_Riverside_Living_Portfolio.png" 
                alt="Manhattan Harbour Living website showcase"
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
                  Uptrade Media elevated the online presence of Manhattan Harbour with a complete overhaul of www.manhattanharbourliving.com, transforming it into a visually stunning and highly functional digital showcase for this luxury riverfront community. The project began with a comprehensive site audit, followed by a strategic redesign focused on capturing the upscale lifestyle and unique amenities that Manhattan Harbour offers.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Uptrade Media crafted a clean, modern design with a sleek layout that highlights the waterfront living experience, seamlessly blending high-resolution imagery, custom drone footage, and interactive elements to immerse visitors in the beauty of the community. The site's navigation was streamlined to provide easy access to information about available homes, community features, and development updates.
                </p>
                
                <p className="text-gray-600">
                  To further engage potential buyers, Uptrade Media incorporated lead capture forms and calls-to-action strategically placed throughout the site to encourage inquiries and drive conversions. The result is a polished, high-performance website that serves as an essential marketing tool for Manhattan Harbour, attracting prospective residents and showcasing the community's unparalleled living experience on the banks of the Ohio River.
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
                    <p className="text-gray-600">Real Estate & Development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Manhattan Harbour, Cincinnati</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Website</h4>
                    <p className="text-gray-600">manhattanharbourliving.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Type</h4>
                    <p className="text-gray-600">Complete Website Overhaul</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Key Features & Enhancements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-[#4bbf39] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                <p className="text-gray-600">Clean, sleek layout highlighting waterfront living experience</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Camera className="w-12 h-12 text-[#4bbf39] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Drone Footage</h3>
                <p className="text-gray-600">Custom aerial photography showcasing community beauty</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Search className="w-12 h-12 text-[#4bbf39] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                <p className="text-gray-600">SEMrush-powered strategy for increased visibility</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-[#4bbf39] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
                <p className="text-gray-600">Strategic forms and CTAs to drive conversions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Elements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Luxury Living Experience
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Immersive Visual Experience</h3>
                    <p className="text-gray-600">High-resolution imagery and custom drone footage immerse visitors in the community's natural beauty and luxury amenities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Streamlined Navigation</h3>
                    <p className="text-gray-600">Easy access to available homes, community features, and development updates with intuitive site structure.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mobile Responsive</h3>
                    <p className="text-gray-600">Exceptional user experience on desktop and mobile devices with fast load times and intuitive functionality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Lead Capture Strategy</h3>
                    <p className="text-gray-600">Strategically placed forms and calls-to-action encourage inquiries and drive conversions from prospective residents.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">SEO Strategy</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Home className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Real Estate Keywords</h4>
                      <p className="text-blue-100">Targeted luxury living and riverfront community terms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Search className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Local SEO</h4>
                      <p className="text-blue-100">Cincinnati and Ohio River region optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Content Strategy</h4>
                      <p className="text-blue-100">SEMrush-powered content optimization and monitoring</p>
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
              Project Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Enhanced</div>
                <div className="text-gray-600">Digital Presence</div>
                <p className="text-sm text-gray-500 mt-2">Polished, high-performance marketing tool</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Improved</div>
                <div className="text-gray-600">User Experience</div>
                <p className="text-sm text-gray-500 mt-2">Immersive showcase of luxury living</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Increased</div>
                <div className="text-gray-600">Lead Generation</div>
                <p className="text-sm text-gray-500 mt-2">Strategic CTAs driving conversions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Showcase Your Development?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a stunning digital presence that attracts prospective buyers and showcases your property's unique value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

export default ManhattanHarbourLivingPage
