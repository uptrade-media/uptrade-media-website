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
  Camera,
  FileText,
  Users,
  Phone,
  Heart,
  Home
} from 'lucide-react'
import { motion } from 'framer-motion'

function ChateauHeritageSquarePage() {
  const services = [
    { icon: <Globe className="w-6 h-6" />, title: 'Website Design & Development', description: 'Modern, user-friendly site highlighting amenities and lifestyle' },
    { icon: <Camera className="w-6 h-6" />, title: 'Media Production', description: 'Cinematic drone footage and lifestyle video content' },
    { icon: <Users className="w-6 h-6" />, title: 'Photography', description: 'High-quality images of property, residents, and amenities' },
    { icon: <FileText className="w-6 h-6" />, title: 'Content Strategy', description: 'SEO-optimized copy emphasizing all-inclusive living model' }
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
                Senior Living & Healthcare
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Chateau at Heritage Square
              </h1>
              <p className="text-xl mb-6 text-white/90">
                55+ Independent Living Community
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Web Design', 'Media Production', 'Content Strategy'].map((service, index) => (
                  <Badge key={index} className="bg-white/20 text-white border-white/30">
                    {service}
                  </Badge>
                ))}
              </div>
              <a 
                href="https://www.chateauatheritagesquare.com" 
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
                src="/Portfolio/Chateau_at_Heritage_Square_Portfolio.png" 
                alt="Chateau at Heritage Square website showcase"
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
                  Uptrade Media partnered with Chateau at Heritage Square, a 55+ independent living community in Brockport, NY, to elevate their digital presence and help attract new residents. We delivered a complete marketing package that positioned Chateau as more than just a place to live—it's a community with a complete amenities package.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Our integrated approach combined website design and development with comprehensive media production to authentically showcase the community experience. We captured cinematic drone footage, lifestyle video of residents, and testimonial interviews to tell the story of what makes Chateau at Heritage Square special.
                </p>
                
                <p className="text-gray-600">
                  The combination of storytelling, video, and digital optimization set the foundation to begin driving qualified leads and securing new tenants by highlighting Chateau's all-inclusive living model, dining at Cappelletti's, and vibrant social lifestyle.
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
                    <p className="text-gray-600">Senior Living & Healthcare</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Brockport, NY</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Type</h4>
                    <p className="text-gray-600">55+ Independent Living</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Type</h4>
                    <p className="text-gray-600">Complete Marketing Package</p>
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
              Complete Marketing Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An integrated approach combining digital presence, visual storytelling, and content strategy to attract qualified residents.
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
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">What We Delivered</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-3">
                    <Globe className="w-6 h-6 text-[#4bbf39] mr-3" />
                    <h3 className="text-xl font-semibold">Website Design & Development</h3>
                  </div>
                  <p className="text-gray-600">
                    Built a modern, user-friendly website highlighting Chateau's amenities, dining, and lifestyle. We structured the site for clear navigation, optimized for conversions, and integrated calls-to-action like scheduling tours.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <Camera className="w-6 h-6 text-[#4bbf39] mr-3" />
                    <h3 className="text-xl font-semibold">Media Production</h3>
                  </div>
                  <p className="text-gray-600">
                    Captured cinematic drone footage, lifestyle video of residents, and testimonial interviews to authentically showcase the community experience and what makes living at Chateau special.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-[#4bbf39] mr-3" />
                    <h3 className="text-xl font-semibold">Photography</h3>
                  </div>
                  <p className="text-gray-600">
                    Produced high-quality images of the property, residents, and amenities for both the website and marketing collateral, showcasing the vibrant community atmosphere.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <FileText className="w-6 h-6 text-[#4bbf39] mr-3" />
                    <h3 className="text-xl font-semibold">Content Strategy</h3>
                  </div>
                  <p className="text-gray-600">
                    Developed SEO-optimized copy emphasizing Chateau's all-inclusive living model, dining at Cappelletti's, and social lifestyle, designed to rank and convert.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Community Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Heart className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">All-Inclusive Living</h4>
                      <p className="text-white/90">Complete amenities package with dining, activities, and services</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Home className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Cappelletti's Dining</h4>
                      <p className="text-white/90">On-site restaurant providing quality meals and social atmosphere</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Social Lifestyle</h4>
                      <p className="text-white/90">Vibrant community with activities and resident engagement</p>
                    </div>
                  </div>
                </div>
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
              Project Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The integrated marketing approach positioned Chateau at Heritage Square for sustained growth and resident acquisition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Enhanced</div>
                <div className="text-gray-600">Digital Presence</div>
                <p className="text-sm text-gray-500 mt-2">Professional website showcasing community lifestyle</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Authentic</div>
                <div className="text-gray-600">Storytelling</div>
                <p className="text-sm text-gray-500 mt-2">Video content featuring real residents and experiences</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#4bbf39] mb-2">Qualified</div>
                <div className="text-gray-600">Lead Generation</div>
                <p className="text-sm text-gray-500 mt-2">Foundation for driving prospective resident inquiries</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8">
            <blockquote className="text-xl text-gray-700 text-center italic">
              "This integrated approach positioned Chateau at Heritage Square as more than just a place to live—it's a community with a complete amenities package. The combination of storytelling, video, and digital optimization set the foundation to begin driving qualified leads and securing new tenants."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Attract Quality Residents?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create an integrated marketing approach that showcases your community's unique lifestyle and drives qualified leads.
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

export default ChateauHeritageSquarePage
