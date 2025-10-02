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
  TrendingUp,
  Phone,
  ExternalLink,
  Calendar
} from 'lucide-react'
import { motion } from 'framer-motion'

function QueenCityRiverboatsPage() {
  const services = [
    { icon: <Globe className="w-6 h-6" />, title: 'Website Redesign', description: 'Modern, user-friendly design reflecting riverboat charm' },
    { icon: <Search className="w-6 h-6" />, title: 'SEO Optimization', description: 'Strategic keywords and clean site architecture' },
    { icon: <Camera className="w-6 h-6" />, title: 'Media Production', description: 'Custom drone video and high-resolution photography' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Booking System', description: 'Streamlined cruise schedules and charter booking' }
  ]

  const results = [
    { metric: '1,084.4%', label: 'Traffic Increase', description: 'Dramatic improvement in website visitors' },
    { metric: '6 Months', label: 'Timeline', description: 'Time to achieve measurable results' },
    { metric: 'Top Rankings', label: 'Search Position', description: 'Improved visibility in local searches' }
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
                Tourism & Entertainment
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Queen City Riverboats
              </h1>
              <p className="text-xl mb-6 text-white/90">
                Premier Riverboat Charter Experience
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Web Design', 'SEO', 'Photography', 'Booking System'].map((service, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {service}
                  </Badge>
                ))}
              </div>
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">1,084.4%</div>
                    <div className="text-white/90">Traffic Increase</div>
                  </div>
                </div>
              </div>
              <a href="https://queencityriverboats.com" target="_blank" rel="noopener noreferrer">
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
                src="/Portfolio/Queen_City_Riverboats_Portfolio.png" 
                alt="Queen City Riverboats website showcase"
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
                  Uptrade Media transformed the digital presence of Queen City Riverboats with a comprehensive redesign of www.queencityriverboats.com, creating a dynamic, user-friendly website that captures the essence of Cincinnati's premier riverboat and yacht charter company. The project focused on delivering an engaging online experience that seamlessly blends functionality with visual storytelling.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Uptrade Media started by developing a modern design that reflects the unique charm of riverboat cruises while highlighting the company's services, including private charters, public cruises, and event hosting. Custom drone video and high-resolution photography were incorporated to showcase the riverboats in their natural environment, offering potential clients an immersive preview of the Queen City Riverboats experience.
                </p>
                
                <p className="text-gray-600">
                  Special attention was given to SEO optimization, ensuring the site ranks well in local and regional searches by implementing strategic keywords, optimized metadata, and a clean site architecture. The website was also built with responsive design principles, ensuring an exceptional browsing experience on desktop, tablet, and mobile devices.
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
                    <p className="text-gray-600">Tourism & Entertainment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Cincinnati, OH</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Website</h4>
                    <p className="text-gray-600">queencityriverboats.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Type</h4>
                    <p className="text-gray-600">Complete Website Redesign & SEO</p>
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
              A comprehensive digital transformation focused on user experience, visual storytelling, and search engine optimization.
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

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Key Features & Improvements
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Immersive Visual Experience</h3>
                    <p className="text-gray-600">Custom drone video and high-resolution photography showcase the riverboats in their natural environment, providing potential clients with an authentic preview.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Streamlined Navigation</h3>
                    <p className="text-gray-600">Simplified navigation provides easy access to cruise schedules, charter details, and booking options for both public cruises and private events.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">SEO Optimization</h3>
                    <p className="text-gray-600">Strategic keyword implementation and clean site architecture ensure strong rankings in local and regional searches.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mobile Responsive Design</h3>
                    <p className="text-gray-600">Exceptional browsing experience across all devices with fast load times and intuitive functionality.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">SEO Strategy</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Local Search Optimization</h4>
                      <p className="text-blue-100">Targeted Cincinnati and Ohio River region keywords</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Content Strategy</h4>
                      <p className="text-blue-100">SEMrush-powered content refinement and monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Technical SEO</h4>
                      <p className="text-blue-100">Optimized metadata and site architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Exceptional Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The comprehensive redesign and optimization delivered measurable improvements in traffic, engagement, and booking conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-[#4bbf39] mb-2">{result.metric}</div>
                    <div className="text-xl font-semibold text-gray-900 mb-2">{result.label}</div>
                    <p className="text-gray-600">{result.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Services Implemented</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Website redesign and optimization',
                'Comprehensive SEO strategy', 
                'Professional media creation',
                'Social media management'
              ].map((service, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            "From its inviting design to its enhanced performance, the new website serves as a powerful marketing tool for Queen City Riverboats, driving online engagement and increasing charter bookings while reinforcing the company's reputation as a top destination for riverfront experiences in Cincinnati."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Exceptional Results?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a digital experience that drives measurable growth and positions your business as the leader in your industry.
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

export default QueenCityRiverboatsPage
