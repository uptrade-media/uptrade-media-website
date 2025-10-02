import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, Edit, FileText, Lightbulb, TrendingUp, Users, BarChart3, ArrowLeft, Phone, PenTool, Target, Search, Calendar, Award, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge.jsx'
import { motion } from 'framer-motion'

function MarketingContentMarketingPage() {
  const [submitted, setSubmitted] = useState(false)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

  const contentServices = [
    {
      title: 'Blog Writing & Strategy',
      description: 'SEO-optimized blog posts that drive traffic and establish thought leadership',
      features: ['Keyword Research', 'Topic Planning', 'SEO Optimization', 'Content Calendar', 'Performance Tracking']
    },
    {
      title: 'Website Copywriting',
      description: 'Compelling website copy that converts visitors into customers',
      features: ['Landing Pages', 'Product Descriptions', 'About Pages', 'Service Pages', 'Call-to-Action Copy']
    },
    {
      title: 'Social Media Content',
      description: 'Engaging social content that builds community and drives engagement',
      features: ['Post Creation', 'Content Planning', 'Hashtag Strategy', 'Visual Content', 'Community Management']
    },
    {
      title: 'Email Marketing Content',
      description: 'Persuasive email campaigns that nurture leads and drive sales',
      features: ['Newsletter Content', 'Drip Campaigns', 'Product Launches', 'Customer Retention', 'Automation Sequences']
    },
    {
      title: 'Video Scripts & Content',
      description: 'Compelling scripts for videos that engage and convert audiences',
      features: ['Video Scripts', 'Storyboarding', 'YouTube Descriptions', 'Video SEO', 'Content Planning']
    },
    {
      title: 'Content Strategy & Planning',
      description: 'Comprehensive content strategies aligned with business goals',
      features: ['Content Audits', 'Competitor Analysis', 'Editorial Calendars', 'Content Mapping', 'ROI Tracking']
    }
  ]

  const contentProcess = [
    {
      step: '01',
      title: 'Content Audit & Strategy',
      description: 'We analyze your current content, identify gaps, and develop a comprehensive strategy aligned with your business goals and target audience.',
      deliverables: ['Content audit report', 'Competitor analysis', 'Content strategy document', 'Editorial calendar']
    },
    {
      step: '02',
      title: 'Research & Planning',
      description: 'Deep dive into keyword research, topic ideation, and content planning to ensure maximum impact and search visibility.',
      deliverables: ['Keyword research report', 'Topic clusters', 'Content briefs', 'SEO guidelines']
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Our expert writers create high-quality, engaging content optimized for both search engines and your target audience.',
      deliverables: ['Written content', 'SEO optimization', 'Meta descriptions', 'Internal linking strategy']
    },
    {
      step: '04',
      title: 'Performance & Optimization',
      description: 'We monitor content performance, analyze metrics, and continuously optimize to improve results and ROI.',
      deliverables: ['Performance reports', 'Content updates', 'Optimization recommendations', 'ROI analysis']
    }
  ]

  const industryExpertise = [
    {
      industry: 'Legal Services',
      description: 'Legal content that builds trust and demonstrates expertise while maintaining compliance',
      specialties: ['Practice area content', 'Legal blog posts', 'Case studies', 'FAQ content']
    },
    {
      industry: 'Healthcare & Medical',
      description: 'Medical content that educates patients and establishes professional authority',
      specialties: ['Patient education', 'Service descriptions', 'Health blog posts', 'Treatment guides']
    },
    {
      industry: 'Real Estate',
      description: 'Real estate content that showcases properties and market expertise',
      specialties: ['Property descriptions', 'Market reports', 'Buyer guides', 'Neighborhood content']
    },
    {
      industry: 'Professional Services',
      description: 'B2B content that demonstrates expertise and generates qualified leads',
      specialties: ['Service pages', 'Case studies', 'White papers', 'Industry insights']
    },
    {
      industry: 'E-commerce & Retail',
      description: 'Product-focused content that drives sales and improves search rankings',
      specialties: ['Product descriptions', 'Category pages', 'Buying guides', 'Brand storytelling']
    },
    {
      industry: 'Technology & SaaS',
      description: 'Technical content that simplifies complex concepts and drives conversions',
      specialties: ['Feature descriptions', 'Technical documentation', 'Use cases', 'Integration guides']
    }
  ]

  const contentBenefits = [
    {
      title: 'Increased Organic Traffic',
      description: 'SEO-optimized content drives more qualified visitors to your website through search engines.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Enhanced Brand Authority',
      description: 'Consistent, valuable content establishes your business as a trusted industry leader.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Improved Lead Generation',
      description: 'Strategic content with clear CTAs converts readers into qualified leads and customers.',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Better Customer Engagement',
      description: 'Engaging content keeps your audience interested and encourages repeat visits.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Long-term ROI',
      description: 'Quality content continues to drive results long after publication, providing lasting value.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Multi-channel Versatility',
      description: 'Content can be repurposed across multiple marketing channels for maximum reach.',
      icon: <FileText className="w-8 h-8" />
    }
  ]

  const faqItems = [
    {
      question: 'What types of content do you create?',
      answer: 'We create a wide range of content including blog posts, website copy, social media content, email campaigns, video scripts, white papers, case studies, and more. All content is tailored to your specific industry and target audience.'
    },
    {
      question: 'How do you ensure content is SEO-optimized?',
      answer: 'Our content creation process includes comprehensive keyword research, competitor analysis, on-page SEO optimization, meta descriptions, internal linking strategies, and adherence to current SEO best practices to maximize search visibility.'
    },
    {
      question: 'Can you help develop a content strategy?',
      answer: 'Absolutely! We develop comprehensive content strategies that include content audits, competitor analysis, editorial calendars, topic clusters, and performance metrics aligned with your business goals and target audience.'
    },
    {
      question: 'How often should we publish new content?',
      answer: 'The ideal publishing frequency depends on your industry, audience, and resources. We typically recommend a consistent schedule of 1-4 blog posts per month, with additional content for social media and email campaigns as needed.'
    },
    {
      question: 'Do you provide content for specific industries?',
      answer: 'Yes, we have extensive experience creating content for various industries including legal services, healthcare, real estate, professional services, e-commerce, and technology. We understand industry-specific requirements and compliance needs.'
    },
    {
      question: 'How do you measure content performance?',
      answer: 'We track key metrics including organic traffic, search rankings, engagement rates, lead generation, conversion rates, and ROI. We provide detailed monthly reports and continuously optimize content based on performance data.'
    },
    {
      question: 'Can you repurpose existing content?',
      answer: 'Yes, we can audit your existing content and repurpose it into different formats and channels. This includes turning blog posts into social media content, creating video scripts from articles, and developing email campaigns from existing materials.'
    },
    {
      question: 'What is your content creation process?',
      answer: 'Our process includes content audit and strategy development, keyword research and planning, content creation and optimization, and ongoing performance monitoring and optimization. We work closely with clients throughout each phase to ensure alignment with business goals.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)

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
      <section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden bg-white/20 backdrop-blur-sm border-white/30 text-white mb-4">
                Content Marketing Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Content Marketing
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Strategic content that engages your audience, builds authority, and drives measurable business growth through compelling storytelling and SEO optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" onClick={scrollToTop}>
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Get Your Content Strategy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+15133310555">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (513) 331-0555
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">272%</div>
                  <div className="text-white/80">Average Traffic Increase</div>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-white/80">Client Satisfaction Rate</div>
                </div>
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
                    <PenTool className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Get Your Content Strategy
                  </CardTitle>
                  <p className="text-gray-600">
                    Discover how strategic content marketing can transform your business growth.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form 
                    name="content-strategy" 
                    method="POST" 
                    data-netlify="true" 
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="content-strategy" />
                    <p style={{display: 'none'}}>
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(513) 555-0123"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select name="industry" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent">
                        <option value="">Select Industry</option>
                        <option value="legal">Legal Services</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="realestate">Real Estate</option>
                        <option value="professional">Professional Services</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="technology">Technology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content Goals *
                    </label>
                    <textarea
                      name="goals"
                      rows={3}
                      placeholder="What are your main content marketing goals? (e.g., increase website traffic, generate leads, build brand authority)"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:from-[#39bfb0] hover:to-[#4bbf39] py-3 text-lg font-semibold">
                    Get My Content Strategy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </form>
                  
                  <p className="text-center text-gray-500 text-sm">
                    We'll create a custom content strategy for your business
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Content Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy development to content creation and performance optimization, we provide end-to-end content marketing solutions that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Content Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your content marketing delivers measurable results and drives business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full border-l-4 border-l-[#4bbf39]">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-[#4bbf39] mr-4">{step.step}</span>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {step.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {deliverable}
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

      {/* Industry Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Content Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique content needs and compliance requirements of different industries, ensuring your content resonates with your target audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {industry.industry}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {specialty}
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Content Marketing Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic content marketing delivers measurable results that compound over time, providing long-term value for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentBenefits.map((benefit, index) => (
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our content marketing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
                  <CardHeader 
                    className="pb-3"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </CardTitle>
                      <ArrowRight 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          expandedFaq === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent className="pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Content Marketing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Let's create a content strategy that drives real business results. Get started with a free consultation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-white text-[#4bbf39] hover:bg-gray-100 font-semibold">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/insights" onClick={scrollToTop}>
              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                Read Our Insights
                <BookOpen className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MarketingContentMarketingPage
