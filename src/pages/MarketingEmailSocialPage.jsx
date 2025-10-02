import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, Mail, Share2, Lightbulb, TrendingUp, Users, BarChart3, Target, Calendar, MessageSquare, Heart, Eye, MousePointer, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

function MarketingEmailSocialPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [expandedFaq, setExpandedFaq] = useState(null)

  

  // Netlify form state
  const [submitted, setSubmitted] = useState(false)

  // Netlify form submit handler
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setSubmitted(true)
        // Redirect to thank you page after successful submission
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 1500)
      })
      .catch((err) => {
        console.error("Form submit error:", err)
        alert("There was an error. Please try again.")
      })
  }
const emailSocialServices = [
    {
      title: 'Email Marketing Automation',
      description: 'Sophisticated automated email sequences that nurture leads and convert prospects into customers.',
      features: ['Welcome Series', 'Drip Campaigns', 'Abandoned Cart Recovery', 'Re-engagement Sequences', 'Behavioral Triggers', 'A/B Testing'],
      icon: <Mail className="w-8 h-8" />
    },
    {
      title: 'Social Media Strategy & Management',
      description: 'Comprehensive social media presence that builds community and drives engagement across all platforms.',
      features: ['Content Strategy', 'Platform Management', 'Community Building', 'Influencer Partnerships', 'Social Advertising', 'Analytics & Reporting'],
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: 'Content Creation & Design',
      description: 'Compelling visual and written content that captures attention and drives action across all channels.',
      features: ['Email Templates', 'Social Graphics', 'Video Content', 'Copywriting', 'Brand Consistency', 'Visual Storytelling'],
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Campaign Analytics & Optimization',
      description: 'Data-driven insights and continuous optimization to maximize your campaign performance and ROI.',
      features: ['Performance Tracking', 'Conversion Analysis', 'Audience Insights', 'Campaign Optimization', 'ROI Reporting', 'Growth Metrics'],
      icon: <BarChart3 className="w-8 h-8" />
    }
  ]

  const faqItems = [
    {
      question: 'What kind of email campaigns do you manage?',
      answer: 'We manage a variety of email campaigns including newsletters, promotional emails, automated welcome series, abandoned cart reminders, re-engagement campaigns, and sophisticated drip sequences tailored to your business goals and customer journey.'
    },
    {
      question: 'Which social media platforms do you focus on?',
      answer: 'We develop strategies for platforms most relevant to your target audience, including Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube, ensuring your message reaches the right people with platform-specific content.'
    },
    {
      question: 'Do you create the content for emails and social posts?',
      answer: 'Yes, our team of copywriters and designers create engaging, on-brand content for all your campaigns, including email templates, social graphics, videos, compelling copy, and visual storytelling that drives engagement.'
    },
    {
      question: 'How do you measure the success of email and social campaigns?',
      answer: 'We track comprehensive metrics including open rates, click-through rates, conversion rates, engagement rates, follower growth, reach, impressions, and ROI, providing detailed reports and actionable insights for continuous improvement.'
    },
    {
      question: 'Can you integrate email marketing with our existing CRM?',
      answer: 'Absolutely! We work with popular CRM platforms like HubSpot, Salesforce, Mailchimp, and others to ensure seamless integration and automated lead nurturing workflows.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/marketing" onClick={scrollToTop} className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketing Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/email_social_campaigns_hero.webm" type="video/webm" />
            <source src="https://video.wixstatic.com/video/b59d6f_e0686571977c4b8d948c3f9358b8ae45/1080p/mp4/file.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Email & Social Media Marketing That Converts
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Build lasting relationships with your audience through strategic email campaigns and engaging social media content that drives real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" onClick={scrollToTop}>
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Start Your Campaign
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card className="bg-white border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Free Marketing Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Get expert insights on your email and social media strategy and discover how to maximize your marketing ROI.
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
      name="marketing-email-social"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="marketing-email-social" />
      <p hidden>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="name"
            type="text"
            placeholder="John Smith"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="challenge">
          Current Challenge
        </label>
        <textarea
          id="challenge"
          name="message"
          rows={3}
          placeholder="What marketing challenges are you facing?"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
        ></textarea>
      </div>

      <Button type="submit" className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg hover:from-[#39bfb0] hover:to-[#4bbf39]">
        Get Free Marketing Consultation
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </form>
  )}
</CardContent>

              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Email & Social Media Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automated email sequences to engaging social content, we create integrated campaigns that nurture leads and drive conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {emailSocialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg flex items-center justify-center text-white mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Email & Social Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that drives engagement, builds relationships, and generates measurable results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description: "We analyze your audience, competitors, and goals to create a comprehensive email and social media strategy.",
                icon: "🎯"
              },
              {
                step: "02", 
                title: "Content Creation",
                description: "Our team develops engaging email templates, social media graphics, and compelling copy that resonates with your audience.",
                icon: "✨"
              },
              {
                step: "03",
                title: "Campaign Execution",
                description: "We launch and manage your campaigns across multiple platforms, ensuring optimal timing and targeting.",
                icon: "🚀"
              },
              {
                step: "04",
                title: "Analytics & Optimization",
                description: "Continuous monitoring and optimization based on performance data to maximize your ROI and engagement.",
                icon: "📊"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <div className="text-sm font-bold text-[#4bbf39] mb-2">{process.step}</div>
                <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our email and social media campaigns have transformed businesses across Cincinnati and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Local Restaurant Chain",
                result: "300% increase in online orders",
                description: "Through targeted email campaigns and social media advertising, we helped this restaurant chain triple their online ordering revenue.",
                metric: "300%",
                metricLabel: "Order Increase"
              },
              {
                company: "B2B Software Company", 
                result: "45% improvement in lead quality",
                description: "Our email nurture sequences and LinkedIn campaigns generated higher-quality leads that converted at a much higher rate.",
                metric: "45%",
                metricLabel: "Lead Quality"
              },
              {
                company: "E-commerce Retailer",
                result: "250% ROI on email marketing",
                description: "Strategic email automation and social media retargeting campaigns delivered exceptional return on investment.",
                metric: "250%",
                metricLabel: "Email ROI"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#4bbf39] mb-2">{story.metric}</div>
                      <div className="text-sm text-gray-600">{story.metricLabel}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{story.company}</h3>
                    <p className="text-[#4bbf39] font-semibold mb-3">{story.result}</p>
                    <p className="text-gray-600">{story.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Platforms & Tools We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the best email marketing and social media platforms to maximize your reach and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Email Marketing Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Mailchimp", "Constant Contact", "HubSpot", "Klaviyo", 
                  "ConvertKit", "ActiveCampaign", "GetResponse", "AWeber"
                ].map((platform, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3" />
                    <span className="font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Social Media Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Facebook", "Instagram", "LinkedIn", "Twitter/X",
                  "TikTok", "YouTube", "Pinterest", "Snapchat"
                ].map((platform, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3" />
                    <span className="font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create email and social media campaigns that engage your audience and drive real business growth.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      
      {/* Hidden static form for Netlify build bot */}
      <form name="marketing-email-social" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="marketing-email-social" />
        <input name="name" />
        <input name="email" />
        <textarea name="message"></textarea>
      </form>
</section>
    </div>
  )
}

export default MarketingEmailSocialPage
