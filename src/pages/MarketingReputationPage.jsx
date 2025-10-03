import React, { useState } from 'react'
import BrandedLoadingSpinner from "../components/BrandedLoadingSpinner.jsx"
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, Star, MessageSquare, Shield, TrendingUp, Users, Lightbulb, Phone, ArrowLeft, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

function MarketingReputationPage() {
  const reputationBenefits = [
    {
      title: 'Enhanced Online Presence',
      description: 'Improve your visibility and attract more customers with a strong online reputation.',
      icon: <Star className="w-8 h-8" />
    },
    {
      title: 'Increased Trust & Credibility',
      description: 'Positive reviews build confidence and make potential customers more likely to choose you.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Higher Conversion Rates',
      description: 'Customers are more likely to convert when they see positive feedback from others.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Valuable Customer Insights',
      description: 'Reviews provide direct feedback, helping you understand customer needs and improve services.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Competitive Advantage',
      description: 'Stand out from competitors with a superior online reputation and proactive management.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Mitigate Negative Feedback',
      description: 'Proactive management helps address and resolve negative reviews effectively, protecting your brand.',
      icon: <MessageSquare className="w-8 h-8" />
    },
  ]

  const faqItems = [
    {
      question: 'Why is online reputation management important for my business?',
      answer: 'In today\'s digital age, customers heavily rely on online reviews and ratings before making purchasing decisions. A strong online reputation builds trust, attracts new clients, and directly impacts your bottom line.'
    },
    {
      question: 'How do you help generate more reviews?',
      answer: 'We implement strategies to encourage satisfied customers to leave reviews, including automated email campaigns, in-store prompts, and easy-to-use review platforms, making the process simple and effective.'
    },
    {
      question: 'How do you handle negative reviews?',
      answer: 'We believe every review is an opportunity. We help you craft professional, empathetic responses to negative feedback, demonstrating your commitment to customer satisfaction and often turning a negative experience into a positive one.'
    },
    {
      question: 'What platforms do you monitor for reviews?',
      answer: 'We monitor all major review platforms relevant to your industry, including Google My Business, Yelp, Facebook, industry-specific sites, and more, ensuring comprehensive coverage of your online reputation.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [setIsSubmitting] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      
      setSubmitted(true)
      
      // Redirect to thank you page after successful submission
      setTimeout(() => {
        window.location.href = '/thank-you'
      }, 1500)
    } catch (err) {
      console.error('Form submit error:', err)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/marketing" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketing Services
          </Link>
      </div>
      </div>

{/* Hero Section */}
<section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-bold mb-6"
        >
          Review & Reputation Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-8 text-white/90"
        >
          Generate, respond, and showcase reviews to build trust and enhance your online presence.
          Protect and grow your business reputation with strategic review management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-[#4bbf39] hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <a href="tel:+15133310555" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (513) 331-0555
            </Button>
          </a>
        </motion.div>

        {/* Feature line that wraps on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white" />
            <span>Free Reputation Audit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white" />
            <span>24/7 Monitoring</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white" />
            <span>Review Response Management</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Constrain the card on phones so it doesn't span edge-to-edge */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <Card className="bg-white border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-3 text-[#4bbf39]" />
                Free Reputation Audit
              </CardTitle>
              <p className="text-gray-600">
                Discover how your online reputation impacts your business and get actionable insights to improve it.
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              {submitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="mx-auto text-green-600 mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">Thank you</h3>
                  <p className="text-gray-600">We received your request and will follow up shortly.</p>
                </div>
              ) : (
                <form
                  name="reputation-management"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="reputation-management" />
                  <p className="hidden">
                    <label>Don’t fill this out: <input name="bot-field" /></label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="rep-name">
                        Full Name *
                      </label>
                      <input
                        id="rep-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="John Smith"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="rep-email">
                        Email Address *
                      </label>
                      <input
                        id="rep-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="rep-phone">
                        Phone Number
                      </label>
                      <input
                        id="rep-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="(513) 555-0123"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="rep-business">
                        Business Name
                      </label>
                      <input
                        id="rep-business"
                        type="text"
                        name="business"
                        autoComplete="organization"
                        placeholder="Your Business"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="rep-concerns">
                      Current Reputation Concerns
                    </label>
                    <textarea
                      id="rep-concerns"
                      name="concerns"
                      rows={3}
                      placeholder="Tell us about your reputation management needs..."
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg hover:from-[#39bfb0] hover:to-[#4bbf39]"
                  >
                    Get Free Reputation Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">Free audit • No obligation • Expert insights</p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build a Stellar Online Reputation That Drives Business
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your online reputation is your most valuable asset. Positive reviews and a strong online presence are crucial for attracting new customers and retaining existing ones. At Uptrade Media, we offer comprehensive review and reputation management services designed to help your business shine online.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We implement proactive strategies to generate authentic reviews, craft thoughtful responses to feedback, and showcase your best testimonials, ensuring your brand's narrative is always positive and compelling. Let us help you turn satisfied customers into powerful advocates.
              </p>
              <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                Get a Free Reputation Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
      </div>
            <div>
              <img 
                src="/reputation-management.jpeg" 
                alt="Online Reputation Management - Review monitoring and response" 
                className="rounded-lg shadow-xl w-full h-auto" 
              />
      </div>
      </div>
      </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Reputation Management Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building and maintaining a positive online image.
            </p>
      </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-[#4bbf39]">
                <Star className="w-8 h-8" />
      </div>
              <CardTitle className="text-xl font-bold mb-2">1. Audit & Strategy</CardTitle>
              <CardContent className="text-gray-600">
                We analyze your current online reputation, identify key platforms, and develop a tailored strategy for review generation and management.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <MessageSquare className="w-8 h-8" />
      </div>
              <CardTitle className="text-xl font-bold mb-2">2. Review Generation & Response</CardTitle>
              <CardContent className="text-gray-600">
                We implement tools and techniques to encourage positive reviews and craft professional, timely responses to all feedback.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-[#4bbf39]">
                <Shield className="w-8 h-8" />
      </div>
              <CardTitle className="text-xl font-bold mb-2">3. Monitoring & Protection</CardTitle>
              <CardContent className="text-gray-600">
                Continuous monitoring of your online presence, proactive issue resolution, and showcasing your best reviews to reinforce trust.
              </CardContent>
            </Card>
      </div>
      </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Invest in Reputation Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strong online reputation is critical for attracting new customers and building long-term brand loyalty.
            </p>
      </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reputationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                  {benefit.icon}
      </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
      </div>
      </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
      </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    {expandedFaq === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#4bbf39]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
      </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
      </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Online Reputation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and discover how strategic reputation management can boost your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
              <Phone className="mr-2 w-5 h-5" />
              Call (513) 331-0555
            </Button>
      </div>
      </div>
      </section>
      </div>
  )
}

export default MarketingReputationPage
