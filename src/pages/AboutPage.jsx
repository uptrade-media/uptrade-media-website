import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { 
  ArrowLeft, 
  ArrowRight,
  Users,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  Heart,
  Zap,
  Globe,
  CheckCircle,
  Star
} from 'lucide-react'
import { motion } from 'framer-motion'
import { AboutSEO } from '../components/SEO'

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technology and creative solutions to stay ahead of industry trends."
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "We believe in genuine relationships and transparent communication with our clients."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable, impactful results."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team, fostering partnerships that drive mutual success."
    }
  ]

  const achievements = [
    {
      number: "100%",
      label: "Client Satisfaction Rate",
      description: "Every client we've worked with has been satisfied with our results"
    },
    {
      number: "231%",
      label: "Average Traffic Increase",
      description: "Our SEO strategies consistently deliver significant growth"
    },
    {
      number: "50+",
      label: "Successful Projects",
      description: "Completed projects across various industries and business sizes"
    },
    {
      number: "8+",
      label: "Years of Experience",
      description: "Since our founding in 2017, we've continuously evolved and grown"
    }
  ]

  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Strategic Vision & Operations",
      description: "Our experienced leadership team brings together expertise in digital marketing, business strategy, and creative direction."
    },
    {
      name: "Marketing Specialists",
      role: "SEO, PPC & Content Strategy",
      description: "Certified experts in search engine optimization, paid advertising, and content marketing who drive measurable results."
    },
    {
      name: "Creative Team",
      role: "Design & Media Production",
      description: "Talented designers, videographers, and photographers who bring your brand vision to life with stunning visuals."
    },
    {
      name: "Development Team",
      role: "Web Development & Technical SEO",
      description: "Skilled developers who build fast, secure, and SEO-optimized websites that convert visitors into customers."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <AboutSEO />
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/about_page_background_2.svg" 
            alt="Uptrade Media team collaboration and creative process background illustration" 
            className="w-full h-full object-cover object-center"
            style={{ minWidth: '100%', minHeight: '100%' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">Uptrade Media</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From cryptocurrency pioneers to digital marketing leaders - discover the story of resilience, 
              innovation, and transformation that defines who we are today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey: From Vision to Reality
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Uptrade Media's journey began in <strong>September 2017</strong>, when it launched Uptrade Exchange—an ambitious 
                  cryptocurrency-based barter exchange aimed at disrupting traditional business transactions. Inspired by the 
                  rapid growth of blockchain and digital currency, the company envisioned a platform where businesses could 
                  trade goods and services without using traditional money, relying instead on cryptocurrency to fuel the exchanges.
                </p>
                <p>
                  The vision for Uptrade Exchange was bold, seeking to build a decentralized marketplace where businesses could 
                  easily swap products and services using digital assets. The team worked tirelessly, developing the platform 
                  and recruiting a group of enthusiastic crypto advocates. However, despite their efforts and the promise of 
                  a revolutionary idea, Uptrade Exchange struggled to gain traction.
                </p>
                <p>
                  The project faced challenges from regulatory hurdles to skeptical investors hesitant about the volatile nature 
                  of cryptocurrency and the unproven market for such an exchange. As the months passed, it became clear that the 
                  angel investment needed to push the company forward was not materializing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#4bbf39]/20 to-[#39bfb0]/20 rounded-2xl overflow-hidden">
                <img 
                  src="/Uptrade_CEO_shaking_hands.jpg" 
                  alt="CEO Ramsey Deal building client relationships" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-square bg-gradient-to-br from-[#39bfb0]/20 to-[#4bbf39]/20 rounded-2xl overflow-hidden">
                <img 
                  src="/roebling-bridge-based-in-cincinnati.jpeg" 
                  alt="Cincinnati Roebling Bridge - Our Local Roots" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Power of Reinvention
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  With limited resources and mounting pressure, the company made the difficult decision to pivot. 
                  Recognizing that the core principles of <strong>innovation, creativity, and a strong understanding of digital assets</strong> could 
                  still be leveraged, the team shifted focus. Uptrade Exchange was reimagined and transformed into 
                  <strong> Uptrade Media</strong>, a full-service marketing and design agency.
                </p>
                <p>
                  In this new chapter, the company applied its expertise in technology and digital marketing to help 
                  businesses build and enhance their online presence. With a keen understanding of SEO, media creation, 
                  and the power of engaging content, Uptrade Media positioned itself to serve companies looking to make 
                  an impact in the rapidly changing digital landscape.
                </p>
                <p>
                  Experience with cryptocurrencies and blockchain gave the company a unique perspective on innovation, 
                  which it applied to help clients push the boundaries of traditional marketing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Today: A Testament to Resilience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Uptrade Media quickly gained recognition for its creativity, strategic approach, and ability to drive results.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-[#4bbf39] mb-2">{achievement.number}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Through its data-driven marketing campaigns and cutting-edge design work, the company earned a reputation as an 
              industry leader. The pivot not only saved the company but set the stage for it to thrive in the marketing world, 
              becoming a trusted partner for businesses seeking to elevate their brands. Today, Uptrade Media stands as a 
              testament to <strong>resilience, adaptability, and the power of reinvention</strong>. From its humble beginnings as a 
              cryptocurrency barter exchange to its rise as a leader in digital marketing, the company's success story continues 
              to inspire entrepreneurs and businesses alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide everything we do and shape how we serve our clients.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>



      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Meet Our Expert Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Passionate professionals dedicated to delivering exceptional results for every client.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-[#4bbf39] font-semibold mb-3">{member.role}</p>
                        <p className="text-gray-600">{member.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Why Choose Uptrade Media?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <CheckCircle className="w-12 h-12 text-[#4bbf39] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                  <p className="text-gray-600">100% client satisfaction rate and an average 231% traffic increase across all projects.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Star className="w-12 h-12 text-[#39bfb0] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Service Solutions</h3>
                  <p className="text-gray-600">Complete marketing, design, and media production services under one roof.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-[#4bbf39] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Driven</h3>
                  <p className="text-gray-600">Our unique background in technology gives us a competitive edge in digital marketing.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the businesses that have transformed their digital presence with Uptrade Media. 
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 font-semibold px-8 py-4" asChild>
              <Link to="/free-audit">
                Get Free Website Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#4bbf39] font-semibold px-8 py-4" asChild>
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
