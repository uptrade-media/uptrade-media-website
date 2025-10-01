import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, 
  ExternalLink,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Phone
} from 'lucide-react'
import { motion } from 'framer-motion'

function PortfolioPage() {
  const portfolioProjects = [
    {
      id: 'marina-manhattan-harbour',
      title: 'The Marina at Manhattan Harbour',
      subtitle: 'Riverfront Experience Brought to Life',
      services: ['Web Design', 'Branding', 'SEO', 'Media Creation'],
      description: 'We partnered with The Marina at Manhattan Harbour to bring their riverfront experience to life online with a vibrant, mobile-friendly website that captures the laid-back energy of the marina.',
      image: '/Portfolio/The_Marina_At_Manhattan_Harbour_portfolio.png',
      category: 'Hospitality & Recreation',
      featured: true
    },
    {
      id: 'el-senor-pig',
      title: 'El Señor Pig',
      subtitle: 'Vibrant Mexican Restaurant Digital Presence',
      services: ['Web Design', 'Branding', 'Local SEO', 'Photography'],
      description: 'A bold digital transformation for this family-owned Mexican restaurant, capturing their quirky personality and pink ambiance in a conversion-focused website.',
      image: '/Portfolio/El_Senor_Pig_Portfolio.png',
      category: 'Restaurant & Food Service'
    },
    {
      id: 'spade-kreations',
      title: 'Spade Kreations',
      subtitle: 'Complete Website Overhaul & Lead Generation',
      services: ['Website Overhaul', 'Lead Generation', 'SEO Optimization'],
      description: 'Complete website transformation for this automotive business, delivering a 430% increase in web leads through strategic design and optimization.',
      image: '/Portfolio/Spade_Kreations_Portfolio.png',
      category: 'Automotive',
      highlight: '430% Lead Increase'
    },
    {
      id: 'manhattan-harbour-living',
      title: 'Manhattan Harbour Living',
      subtitle: 'Luxury Riverfront Community Showcase',
      services: ['Web Design', 'SEO', 'Drone Footage', 'Lead Generation'],
      description: 'Complete digital overhaul for this luxury riverfront community, featuring stunning visuals and strategic lead capture to drive conversions.',
      image: '/Portfolio/Manhattan_Harbour_Riverside_Living_Portfolio.png',
      category: 'Real Estate & Development'
    },
    {
      id: 'queen-city-riverboats',
      title: 'Queen City Riverboats',
      subtitle: 'Premier Riverboat Charter Experience',
      services: ['Web Design', 'SEO', 'Photography', 'Booking System'],
      description: 'Dynamic website redesign for Cincinnati\'s premier riverboat company, featuring immersive visuals and streamlined booking functionality.',
      image: '/Portfolio/Queen_City_Riverboats_Portfolio.png',
      category: 'Tourism & Entertainment',
      highlight: '1,084.4% Traffic Increase'
    },
    {
      id: 'chateau-heritage-square',
      title: 'Chateau at Heritage Square',
      subtitle: '55+ Independent Living Community',
      services: ['Web Design', 'Media Production', 'Content Strategy'],
      description: 'Complete marketing package for this independent living community, showcasing amenities and lifestyle through compelling visuals and content.',
      image: '/Portfolio/Chateau_at_Heritage_Square_Portfolio.png',
      category: 'Senior Living & Healthcare'
    }
  ]

  const stats = [
    { number: '231%', label: 'Average Traffic Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '50+', label: 'Successful Projects', icon: <Award className="w-6 h-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Users className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Award className="w-4 h-4 mr-2" />
                Our Work
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Portfolio of Success Stories
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Discover how we've helped businesses across Cincinnati and Northern Kentucky transform their digital presence, drive growth, and achieve measurable results through strategic design, SEO, and media creation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents a unique challenge and a tailored solution. From local restaurants to luxury developments, we bring the same level of expertise and creativity to every client.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={project.featured ? 'lg:col-span-2' : ''}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={`${project.title} website showcase`}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.highlight && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {project.highlight}
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl lg:text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-[#4bbf39]">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={`/portfolio/${project.id}`} onClick={() => window.scrollTo(0, 0)} className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                          View Case Study
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Process Delivers Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every successful project follows our proven methodology that combines strategic thinking, creative execution, and measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We start by understanding your business goals, target audience, and competitive landscape to develop a tailored strategy.'
              },
              {
                step: '02',
                title: 'Design & Development',
                description: 'Our team creates visually stunning, user-friendly designs that are optimized for conversions and search engines.'
              },
              {
                step: '03',
                title: 'Content & Media',
                description: 'We produce high-quality photography, videography, and written content that tells your brand story effectively.'
              },
              {
                step: '04',
                title: 'Launch & Optimize',
                description: 'After launch, we monitor performance and continuously optimize to ensure maximum ROI and sustained growth.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help transform your digital presence and drive measurable growth for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/free-audit">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15133310555">
              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-6 py-3 transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                (513) 331-0555
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage;


