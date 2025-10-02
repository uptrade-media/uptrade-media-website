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
import { 
  UnifiedForm, 
  FormInput, 
  FormSelect, 
  FormTextarea, 
  useFormState 
} from '../components/ui/unified-form'

const ContactPage = () => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useFormState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  })

  const onFormSubmit = () => handleSubmit('contact')

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
              <UnifiedForm
                title={
                  <div className="flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Send Us a Message
                  </div>
                }
                description="Fill out the form below and we'll get back to you within 24 hours."
                formName="contact"
                onSubmit={onFormSubmit}
                submitText="Send Message"
                isSubmitting={isSubmitting}
                isSubmitted={isSubmitted}
                successMessage="Thank you for reaching out. We'll be in touch within 24 hours."
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <FormInput
                    label="Full Name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(513) 555-0123"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Company Name"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormSelect
                    label="Service Interest"
                    name="service"
                    placeholder="Select a service"
                    options={services}
                    value={formData.service}
                    onChange={handleInputChange}
                  />
                  <FormSelect
                    label="Project Budget"
                    name="budget"
                    placeholder="Select budget range"
                    options={budgetRanges}
                    value={formData.budget}
                    onChange={handleInputChange}
                  />
                </div>

                <FormTextarea
                  label="Project Details"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </UnifiedForm>

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
<Button
  size="lg"
  asChild
  className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs"
>
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


