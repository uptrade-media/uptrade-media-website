import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, MessageSquare, Users, Award, Lightbulb, TrendingUp, Star, ArrowLeft, Phone, Video, BarChart3, Target, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

function MediaTestimonialPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedFaq, setExpandedFaq] = React.useState(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    setIsSubmitting(true)
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
        setIsSubmitting(false)
        // Redirect to thank you page after successful submission
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 1500)
      })
      .catch((err) => {
        console.error("Form submit error:", err)
        setIsSubmitting(false)
        alert("There was an error. Please try again.")
      })
  }

  const featuredTestimonial = {
    title: 'Customer Success Interview',
    description:
      "A comprehensive interview with a satisfied customer showcasing the real impact of our services. This authentic testimonial demonstrates how our strategic approach led to measurable business improvements.",
    videoUrl:
      'https://video.wixstatic.com/video/b59d6f_1dcf2c4c566d4cda9f525d34be89bb2f/1080p/mp4/file.mp4',
    results: {
      conversionIncrease: '3%',
      metric: 'Higher Conversion Rate',
      description:
        "This testimonial video contributed to a 3% increase in landing page conversion rates when featured prominently on the client's website."
    },
    client: 'Satisfied Customer',
    industry: 'Professional Services'
  }

  const testimonialServices = [
    {
      title: 'Customer Success Interviews',
      description: 'In-depth interviews that capture authentic customer experiences and measurable results',
      features: ['Professional interviewing', 'Story development', 'Results documentation', 'Authentic testimonials', 'Customer journey mapping']
    },
    {
      title: 'Case Study Video Production',
      description: 'Comprehensive case studies that showcase problems, solutions, and quantifiable outcomes',
      features: ['Problem identification', 'Solution presentation', 'Results measurement', 'Before/after comparisons', 'ROI documentation']
    },
    {
      title: 'Product Review Videos',
      description: 'Authentic product reviews and demonstrations from real customers',
      features: ['Product demonstrations', 'User experience capture', 'Feature highlights', 'Benefit explanations', 'Usage scenarios']
    },
    {
      title: 'Service Testimonials',
      description: 'Professional testimonials highlighting service quality and customer satisfaction',
      features: ['Service experience capture', 'Quality demonstrations', 'Satisfaction metrics', 'Recommendation content', 'Trust building']
    },
    {
      title: 'Before & After Showcases',
      description: 'Visual documentation of transformations and improvements achieved',
      features: ['Transformation documentation', 'Progress tracking', 'Visual comparisons', 'Timeline presentations', 'Impact measurement']
    },
    {
      title: 'Industry-Specific Testimonials',
      description: 'Targeted testimonials for specific industries and use cases',
      features: ['Industry expertise', 'Sector-specific benefits', 'Compliance considerations', 'Professional standards', 'Market relevance']
    }
  ]

  const testimonialTypes = [
    {
      type: 'Short-Form Testimonials',
      duration: '30-60 seconds',
      description: 'Quick, impactful testimonials perfect for social media and website headers',
      bestFor: ['Social media', 'Website headers', 'Email signatures', 'Quick trust building']
    },
    {
      type: 'Detailed Case Studies',
      duration: '2-5 minutes',
      description: 'Comprehensive stories that detail the entire customer journey and results',
      bestFor: ['Sales presentations', 'Website case study pages', 'Proposal support', 'Detailed proof']
    },
    {
      type: 'Interview-Style Testimonials',
      duration: '1-3 minutes',
      description: 'Conversational format that feels natural and builds strong connections',
      bestFor: ['Website testimonials', 'Landing pages', 'Trust building', 'Authentic stories']
    },
    {
      type: 'Results-Focused Videos',
      duration: '1-2 minutes',
      description: 'Data-driven testimonials that highlight specific metrics and outcomes',
      bestFor: ['B2B sales', 'ROI demonstrations', 'Performance proof', 'Metric showcases']
    }
  ]

  const productionProcess = [
    {
      step: '01',
      title: 'Client Identification & Outreach',
      description:
        'We work with you to identify satisfied customers who would be excellent testimonial candidates and handle the outreach process professionally.',
      deliverables: ['Client selection criteria', 'Outreach templates', 'Scheduling coordination', 'Participation agreements']
    },
    {
      step: '02',
      title: 'Interview Preparation',
      description:
        'Detailed preparation including question development, story structure planning, and technical setup to ensure compelling content.',
      deliverables: ['Interview questions', 'Story outline', 'Technical requirements', 'Filming schedule']
    },
    {
      step: '03',
      title: 'Professional Filming',
      description:
        'Expert interviewing and filming that puts customers at ease while capturing authentic, compelling testimonials.',
      deliverables: ['Professional interviews', 'High-quality footage', 'Multiple camera angles', 'Clear audio recording']
    },
    {
      step: '04',
      title: 'Post-Production & Optimization',
      description:
        'Expert editing that creates compelling narratives while maintaining authenticity and optimizing for various platforms.',
      deliverables: ['Edited testimonials', 'Multiple formats', 'Platform optimization', 'Usage guidelines']
    }
  ]

  const testimonialBenefits = [
    {
      title: 'Increased Trust & Credibility',
      description: "92% of consumers trust recommendations from other people, even if they don't know them personally.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Higher Conversion Rates',
      description: 'Testimonial videos can increase conversion rates by up to 34% when placed strategically on landing pages.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Reduced Sales Cycle',
      description: 'Social proof helps prospects make decisions faster, reducing the time from interest to purchase.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Enhanced Brand Reputation',
      description: 'Authentic customer stories build brand reputation and differentiate you from competitors.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Overcome Objections',
      description: 'Customer testimonials address common concerns and objections before they become barriers to purchase.',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Versatile Marketing Asset',
      description: 'Use testimonials across websites, social media, sales presentations, and email campaigns for maximum impact.',
      icon: <BarChart3 className="w-8 h-8" />
    }
  ]

  const faqItems = [
    {
      question: 'What makes testimonial videos more effective than written testimonials?',
      answer:
        'Video testimonials are significantly more persuasive because they show real people sharing authentic experiences. Viewers can see facial expressions, hear tone of voice, and connect emotionally with the speaker. This creates a much stronger trust signal than text alone, leading to higher conversion rates and stronger brand credibility.'
    },
    {
      question: 'How do you ensure testimonials feel authentic and not scripted?',
      answer:
        'We use a conversational interview approach rather than scripts. Our experienced interviewers guide customers through their story naturally, asking follow-up questions that elicit genuine responses. We focus on capturing real emotions and specific details that make testimonials believable and relatable.'
    },
    {
      question: 'What types of customers make the best testimonial subjects?',
      answer:
        'The best testimonial subjects are customers who have achieved measurable results, can articulate their experience clearly, and represent your target audience. We look for customers who had specific challenges you solved, can speak to the value received, and are comfortable on camera.'
    },
    {
      question: 'How long should testimonial videos be for maximum impact?',
      answer:
        'The optimal length depends on the platform and purpose. For social media and quick trust building, 30-60 seconds works best. For website testimonials and landing pages, 1-3 minutes allows for more detailed stories. Comprehensive case studies can be 3-5 minutes for sales presentations and detailed proof points.'
    },
    {
      question: 'Can you help identify which customers to approach for testimonials?',
      answer:
        'Absolutely! We work with you to analyze your customer base and identify the best candidates based on their results, communication skills, and representation of your target market. We also handle the outreach process professionally to maximize participation rates.'
    },
    {
      question: 'How do you measure the effectiveness of testimonial videos?',
      answer:
        'We track various metrics including conversion rate improvements, engagement rates, time on page, and lead generation. For example, our featured customer testimonial contributed to a 3% increase in landing page conversion rates. We provide detailed analytics to demonstrate ROI.'
    },
    {
      question: 'Do you handle the legal aspects of using customer testimonials?',
      answer:
        'Yes, we provide proper release forms and ensure all legal requirements are met for using customer testimonials in your marketing. We handle permissions, usage rights, and compliance with advertising standards to protect both you and your customers.'
    },
    {
      question: 'Can testimonial videos be repurposed for different marketing channels?',
      answer:
        'Definitely! We create testimonials in multiple formats optimized for different channels. Full-length versions for websites and sales presentations, shorter clips for social media, audio versions for podcasts, and even quote graphics extracted from the video content.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/media"
            onClick={scrollToTop}
            className="inline-flex items-center text-[#4bbf39] hover:text-[#9333EA] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Media Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Testimonial & Case Study Videos
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl mb-8 text-white/90"
              >
                Build trust, overcome objections, and drive conversions with authentic customer testimonials that showcase real results and genuine satisfaction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/contact" onClick={scrollToTop}>
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Start Your Testimonial Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  asChild
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs"
                >
                  <a href="tel:+15133310555">
                    <Phone className="w-5 h-5 mr-2" />
                    (513) 331-0555
                  </a>
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">34%</div>
                  <div className="text-white/80">Conversion Increase</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">92%</div>
                  <div className="text-white/80">Trust Recommendations</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Star className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">3%</div>
                  <div className="text-white/80">Proven Results</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (refactored to Card + motion format) */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Card className="bg-white border-white/20 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <Video className="w-6 h-6 mr-3 text-[#4bbf39]" />
                      Start Your Testimonial Project
                    </CardTitle>
                    <p className="text-gray-600">
                      Share your vision and we’ll create a compelling testimonial video that captures your brand’s story.
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {submitted ? (
                      <div className="text-center py-6">
                        <CheckCircle className="mx-auto text-green-600 mb-4" size={40} />
                        <h3 className="text-xl font-bold mb-2">Thank you</h3>
                        <p className="text-gray-600">We have received your request and will follow up within 24 hours.</p>
                      </div>
                    ) : (
                      <form
                        name="testimonial-project"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit} // ⬅️ use JS handler instead of action
                        className="space-y-4"
                      >
                        <input type="hidden" name="form-name" value="testimonial-project" />
                        <p className="hidden">
                          <label>
                            Do not fill this out if you are human:
                            <input name="bot-field" />
                          </label>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              required
                              autoComplete="name"
                              placeholder="John Smith"
                              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              required
                              autoComplete="email"
                              placeholder="john@company.com"
                              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                            <input
                              type="text"
                              name="company"
                              autoComplete="organization"
                              placeholder="Your Company"
                              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              autoComplete="tel"
                              placeholder="(555) 123-4567"
                              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                          <textarea
                            name="details"
                            rows="4"
                            placeholder="Tell us about your testimonial video needs..."
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                          ></textarea>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:from-[#39bfb0] hover:to-[#4bbf39] py-3 text-lg font-semibold"
                        >
                          Get My Testimonial Quote
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <p className="text-center text-gray-500 text-sm">No obligation • Expert video strategy • Fast response</p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Customer Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how authentic customer testimonials drive real business results with measurable impact on conversion rates and customer trust.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
                <iframe
                  src="https://uptrademedia.wistia.com/embed/iframe/bpxzzfnsxq?playButton=true&fullscreenButton=true&volumeControl=true&seo=false"
                  title="Testimonial & Case Studies Video"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                ></iframe>

                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Success Story
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredTestimonial.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{featuredTestimonial.description}</p>
              </div>

              <Card className="border-l-4 border-l-[#4bbf39] bg-gradient-to-r from-[#4bbf39]/5 to-[#39bfb0]/5">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2 text-[#4bbf39]" />
                    Measurable Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Conversion Rate Improvement:</span>
                      <span className="text-2xl font-bold text-[#4bbf39]">+{featuredTestimonial.results.conversionIncrease}</span>
                    </div>
                    <p className="text-sm text-gray-600">{featuredTestimonial.results.description}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Client: {featuredTestimonial.client}</p>
                <p className="text-gray-600">Industry: {featuredTestimonial.industry}</p>
              </div>

              <Link to="/contact" onClick={scrollToTop}>
                <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:opacity-90 transition-opacity">
                  Create Your Success Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Testimonial Video Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customer interviews to case study documentation, we create compelling testimonial content that builds trust and drives conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
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

      {/* Testimonial Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Testimonial Videos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different formats for different purposes, each optimized for specific marketing goals and platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonialTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">{type.type}</CardTitle>
                      <span className="bg-[#4bbf39]/10 text-[#4bbf39] px-3 py-1 rounded-full text-sm font-medium">
                        {type.duration}
                      </span>
                    </div>
                    <CardDescription className="text-gray-600">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-2">Best for:</h4>
                    <ul className="space-y-1">
                      {type.bestFor.map((use, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {use}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Testimonial Production Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures authentic, compelling testimonials that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productionProcess.map((step, index) => (
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
                      <CardTitle className="text-xl font-bold text-gray-900">{step.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">{step.description}</CardDescription>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Testimonial Videos Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonial videos leverage the power of social proof to build trust, overcome objections, and drive conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about testimonial video production.</p>
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
                <Card
                  className="cursor-pointer hover:shadow-md transition-shadow duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-900">{item.question}</CardTitle>
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
            Ready to Build Trust with Authentic Testimonials?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Let's create compelling testimonial videos that showcase your success stories and drive conversions. Contact us today to get started.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                Start Your Testimonial Project
                <Video className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MediaTestimonialPage
