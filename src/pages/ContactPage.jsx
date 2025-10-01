import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { InlineWidget } from 'react-calendly'
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Zap
} from 'lucide-react'
import { ContactSEO } from '../components/SEO'
import { motion } from 'framer-motion'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target
      const formData = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'SEO & Digital Marketing',
    'Web Design & Development',
    'Video Production',
    'Commercial Photography',
    'Branding & Design',
    'PPC & Ad Management',
    'Content Marketing',
    'Full Marketing Package',
    'Other'
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Prefer to discuss'
  ]

  return (
    <div className="min-h-screen bg-white">
      <ContactSEO />
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
            alt="Contact Uptrade Media - Cincinnati digital marketing agency background design" 
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
              Let's <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Ready to transform your digital presence? Get in touch with our team of experts. 
              We're here to help you achieve your business goals.
            </motion.p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our team</p>
                  <a href="tel:+15133310555" className="text-[#4bbf39] hover:text-[#39bfb0] font-semibold">
                    (513) 331-0555
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us a detailed message</p>
                  <a href="mailto:info@uptrademedia.com" className="text-[#4bbf39] hover:text-[#39bfb0] font-semibold">
                    info@uptrademedia.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-4">Cincinnati & Northern Kentucky</p>
                  <span className="text-[#4bbf39] font-semibold">
                    Serving the Greater Cincinnati Area
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll be in touch within 24 hours.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: '', email: '', phone: '', company: '', 
                            service: '', message: '', budget: ''
                          })
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form 
                      name="contact" 
                      method="POST" 
                      data-netlify="true" 
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <p style={{display: 'none'}}>
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            placeholder="(513) 555-0123"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interest
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Budget
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8"
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-[#4bbf39]" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-[#4bbf39]/10 rounded-lg">
                      <p className="text-sm text-[#4bbf39] font-medium">
                        Emergency support available 24/7 for existing clients
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Schedule Consultation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-8"
            >
              {/* Calendly Embed */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Schedule a Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Book a free 30-minute strategy session with our team.
                  </p>
                </CardHeader>
                <CardContent>
                  {/* React Calendly Widget */}
                  <div className="rounded-lg overflow-hidden">
                    <InlineWidget
                      url="https://calendly.com/uptrademedia/30min"
                      styles={{
                        height: '630px',
                        width: '100%'
                      }}
                      pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '4bbf39',
                        textColor: '4d5055'
                      }}
                    />
                  </div>
                  
                  {/* Fallback link for users who prefer external calendar */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Prefer to open in a new window?
                    </p>
                    <a 
                      href="https://calendly.com/uptrademedia/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#4bbf39] hover:text-[#39bfb0] font-semibold text-sm"
                    >
                      Open Calendly in new tab →
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Why Choose Uptrade Media?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#4bbf39]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-[#4bbf39]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600 text-sm">Experienced professionals in marketing, design, and media production.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#39bfb0]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-4 h-4 text-[#39bfb0]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Results</h4>
                      <p className="text-gray-600 text-sm">Track record of delivering measurable growth for our clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-[#4bbf39]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Full-Service</h4>
                      <p className="text-gray-600 text-sm">Complete marketing solutions under one roof - no need for multiple vendors.</p>
                    </div>
                  </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait - your competitors aren't. Let's discuss how we can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 font-semibold px-8 py-4" asChild>
              <Link to="/free-audit">
                Get Free Website Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#4bbf39] font-semibold px-8 py-4" asChild>
              <a href="tel:+15133310555">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (513) 331-0555
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage;


