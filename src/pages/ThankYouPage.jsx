import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  Clock,
  Users,
  Target,
  Zap,
  Home
} from 'lucide-react'
import { motion } from 'framer-motion'

const ThankYouPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextSteps = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Check Your Email",
      description: "We've sent you a confirmation email with next steps and additional resources.",
      timeframe: "Within 5 minutes"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "We'll Contact You",
      description: "Our team will reach out to discuss your project and answer any questions.",
      timeframe: "Within 24 hours"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Strategy Session",
      description: "We'll schedule a detailed consultation to understand your goals and create a custom plan.",
      timeframe: "Within 2-3 days"
    }
  ]

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced professionals in marketing, design, and media production."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of delivering measurable growth for our clients."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Full-Service",
      description: "Complete marketing solutions under one roof - no need for multiple vendors."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            We've received your message and are excited to help you achieve your business goals. 
            Our team will be in touch soon to discuss how we can bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <a href="tel:+15133310555">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200 px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Call (513) 331-0555
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect from our team in the coming days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="inline-flex items-center bg-[#4bbf39]/10 text-[#4bbf39] px-3 py-1 rounded-full text-sm font-medium">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.timeframe}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Uptrade Media?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While you wait, here's why hundreds of businesses trust us with their digital marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what we've accomplished for businesses just like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#4bbf39] mb-2">1,084%</div>
              <div className="text-gray-600">Average Traffic Increase</div>
              <div className="text-sm text-gray-500 mt-1">Queen City Riverboats</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#39bfb0] mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
              <div className="text-sm text-gray-500 mt-1">Since 2017</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#4bbf39] mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Verified Reviews</div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" onClick={scrollToTop}>
              <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white px-8 py-3">
                View Our Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait - our team is ready to help you right now.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us Now</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <a href="tel:+15133310555" className="text-[#4bbf39] hover:text-[#39bfb0] font-semibold text-lg">
                  (513) 331-0555
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <a href="mailto:info@uptrademedia.com" className="text-[#4bbf39] hover:text-[#39bfb0] font-semibold text-lg">
                  info@uptrademedia.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThankYouPage
