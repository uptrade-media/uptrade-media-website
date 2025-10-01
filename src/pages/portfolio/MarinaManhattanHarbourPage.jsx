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
  Calendar,
  Phone,
  ExternalLink
} from 'lucide-react'
import { motion } from 'framer-motion'

function MarinaManhattanHarbourPage() {
  const deliverables = [
    'Website Design & Development',
    'Brand Voice & Messaging',
    'SEO Foundation & Structured Data',
    'Photography & Video',
    'Event Booking System',
    'Mobile Optimization'
  ]

  const services = [
    { icon: <Globe className="w-6 h-6" />, title: 'Web Design', description: 'Mobile-friendly, conversion-focused design' },
    { icon: <Search className="w-6 h-6" />, title: 'SEO', description: 'Structured data and page architecture' },
    { icon: <Camera className="w-6 h-6" />, title: 'Media Creation', description: 'On-site photography and videography' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Booking System', description: 'Event inquiry and slip request forms' }
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
                Hospitality & Recreation
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                The Marina at Manhattan Harbour
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Riverfront Experience Brought to Life
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Web Design', 'Branding', 'SEO', 'Media Creation'].map((service, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {service}
                  </Badge>
                ))}
              </div>
              <a 
                href="https://www.manhattanharbourky.com" 
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
                src="/Portfolio/The_Marina_At_Manhattan_Harbour_portfolio.png" 
                alt="The Marina at Manhattan Harbour website showcase"
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
                  We partnered with The Marina at Manhattan Harbour to bring their riverfront experience to life online. Our team designed a vibrant, mobile-friendly website that captures the laid-back energy of the marina and showcases Blue Catty's—their tropical bar and event space—as a destination in its own right.
                </p>
                
                <p className="text-gray-600 mb-6">
                  We handled everything from copywriting and on-site photography to structured SEO and page architecture. The result is a visually rich, conversion-focused site that invites users to dock, dine, and explore. With a built-in event inquiry system, interactive menus, and easy slip request forms, the site supports both day-to-day operations and long-term growth.
                </p>
                
                <p className="text-gray-600">
                  This project blended storytelling with functionality, giving the marina a digital home that's as welcoming as its shoreline.
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
                    <p className="text-gray-600">Hospitality & Recreation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Manhattan Harbour, Cincinnati</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Type</h4>
                    <p className="text-gray-600">Complete Website Design & Development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Timeline</h4>
                    <p className="text-gray-600">8 weeks</p>
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
              Services Provided
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach combining design, technology, and content to create an engaging digital experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Project Deliverables
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every aspect of the project was designed to enhance the marina's digital presence and support their business operations.
              </p>
              
              <div className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Interactive event booking system for Blue Catty's</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Easy slip request forms for marina services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Mobile-optimized design for on-the-go users</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>SEO-optimized content and structure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Professional photography showcasing amenities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Results & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The new website successfully captures the marina's unique atmosphere while providing practical functionality for visitors and boat owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Enhanced</div>
                <div className="text-gray-600">User Experience</div>
                <p className="text-sm text-gray-500 mt-2">Streamlined navigation and booking process</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Improved</div>
                <div className="text-gray-600">Online Presence</div>
                <p className="text-sm text-gray-500 mt-2">Professional digital representation of the marina</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Increased</div>
                <div className="text-gray-600">Functionality</div>
                <p className="text-sm text-gray-500 mt-2">Integrated booking and inquiry systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a digital experience that captures your brand's unique personality and drives real results.
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

export default MarinaManhattanHarbourPage
