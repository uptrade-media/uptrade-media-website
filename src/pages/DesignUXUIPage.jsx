import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  CheckCircle,
  ArrowRight,
  Users,
  Layout,
  Lightbulb,
  TrendingUp,
  Award,
  ArrowLeft,
  Phone,
  Palette,
  Target,
  Eye,
  Star,
  Smartphone,
  Search,
  ChevronDown,
  ChevronUp,
  Grid,
  PenTool,
  RefreshCw,
  TestTube
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEOHead from '../components/SEOHead'

function DesignUXUIPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    })
      .then(() => {
        setSubmitted(true)
        setIsSubmitting(false)
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 1500)
      })
      .catch((err) => {
        console.error('Form submit error:', err)
        setIsSubmitting(false)
        alert('There was an error. Please try again.')
      })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const uxuiServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'User Research & Analysis',
      description:
        'Deep dive into user behavior, needs, and pain points through comprehensive research methodologies.',
      features: [
        'User Interviews',
        'Surveys & Analytics',
        'Competitor Analysis',
        'User Personas',
        'Journey Mapping',
        'Usability Testing'
      ]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Wireframing & Prototyping',
      description:
        'Create detailed wireframes and interactive prototypes to visualize and test user experiences before development.',
      features: [
        'Low-Fi Wireframes',
        'High-Fi Prototypes',
        'Interactive Mockups',
        'User Flow Diagrams',
        'Information Architecture',
        'Clickable Prototypes'
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Visual Design & Branding',
      description:
        'Craft beautiful, on-brand interfaces that create emotional connections and drive user engagement.',
      features: [
        'Visual Design Systems',
        'Brand Integration',
        'Color Psychology',
        'Typography Selection',
        'Icon Design',
        'Micro-interactions'
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description:
        'Ensure seamless experiences across all devices with mobile-first, responsive design approaches.',
      features: [
        'Mobile-First Design',
        'Tablet Optimization',
        'Desktop Layouts',
        'Touch Interactions',
        'Cross-Browser Testing',
        'Performance Optimization'
      ]
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Usability Testing',
      description:
        'Validate design decisions through comprehensive testing to ensure optimal user experiences.',
      features: [
        'A/B Testing',
        'User Testing Sessions',
        'Heatmap Analysis',
        'Conversion Optimization',
        'Accessibility Testing',
        'Performance Metrics'
      ]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Design System Development',
      description:
        'Build scalable design systems that ensure consistency and efficiency across all digital touchpoints.',
      features: [
        'Component Libraries',
        'Style Guides',
        'Design Tokens',
        'Pattern Libraries',
        'Documentation',
        'Version Control'
      ]
    }
  ]

  const designProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description:
        'Understanding your users, business goals, and market landscape through comprehensive research.',
      icon: <Search className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description:
        'Developing user personas, journey maps, and information architecture to guide design decisions.',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Wireframing & Prototyping',
      description:
        'Creating low and high-fidelity wireframes and interactive prototypes for testing and validation.',
      icon: <Grid className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Visual Design',
      description: 'Crafting beautiful, on-brand interfaces that create emotional connections with users.',
      icon: <Palette className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Testing & Iteration',
      description:
        'Conducting usability tests and iterating based on user feedback and performance data.',
      icon: <TestTube className="w-8 h-8" />
    },
    {
      step: '06',
      title: 'Implementation & Support',
      description:
        'Working closely with developers and providing ongoing support to ensure design integrity.',
      icon: <RefreshCw className="w-8 h-8" />
    }
  ]

  const uxuiBenefits = [
    {
      title: 'Increased Conversion Rates',
      description:
        'Optimized user flows and clear calls to action guide users to complete desired tasks, boosting conversions by up to 200%.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Enhanced User Satisfaction',
      description:
        'Intuitive and enjoyable interfaces lead to happier users, increased engagement, and higher retention rates.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Reduced Development Costs',
      description:
        'Addressing usability issues early in the design phase saves significant time and money on rework.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Stronger Brand Perception',
      description:
        'Professional, well-designed interfaces build trust and credibility, enhancing your brand reputation.',
      icon: <Star className="w-8 h-8" />
    },
    {
      title: 'Competitive Advantage',
      description:
        'Stand out in the market with superior user experiences that keep customers coming back.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Improved Accessibility',
      description:
        'Inclusive design ensures wider reach and compliance with accessibility standards like WCAG.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  const faqItems = [
    {
      question: 'What is the difference between UX and UI design?',
      answer:
        'UX (User Experience) design focuses on the overall feel and functionality of the experience - how easy it is to use and how users interact with a product. UI (User Interface) design focuses on the visual and interactive elements like buttons, icons, typography, and layout. Both work together to create exceptional digital experiences.'
    },
    {
      question: 'What tools do you use for UX/UI design?',
      answer:
        'We use industry-standard tools including Figma for collaborative design and prototyping, Adobe Creative Suite for visual design, Sketch for interface design, InVision for prototyping, and various user testing platforms like Hotjar and UserTesting to gather feedback and validate designs.'
    },
    {
      question: 'How do you ensure a user-centered design approach?',
      answer:
        'Our process is deeply rooted in user research, including user interviews, surveys, analytics analysis, and usability testing. We create detailed user personas, journey maps, and conduct iterative testing throughout the design process to ensure designs meet actual user needs and behaviors.'
    },
    {
      question: 'Can you redesign an existing application or website?',
      answer:
        'Absolutely! We specialize in redesigning and optimizing existing digital products. We start with a comprehensive UX audit to identify pain points and opportunities, analyze user behavior data, then apply modern UX/UI principles to enhance usability, accessibility, and conversion rates.'
    },
    {
      question: 'How long does a typical UX/UI design project take?',
      answer:
        'Project timelines vary based on scope and complexity. A simple website redesign might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our discovery phase and maintain transparent communication throughout the project.'
    },
    {
      question: 'Do you provide design systems and style guides?',
      answer:
        'Yes! We create comprehensive design systems including component libraries, style guides, design tokens, and documentation. This ensures consistency across all touchpoints and makes future updates and scaling much more efficient for your team.'
    },
    {
      question: 'How do you measure the success of UX/UI design?',
      answer:
        'We track key metrics including conversion rates, user engagement, task completion rates, bounce rates, time on page, and user satisfaction scores. We also conduct post-launch usability testing and analyze user behavior data to continuously optimize the experience.'
    },
    {
      question: 'Do you work with developers during implementation?',
      answer:
        'Absolutely! We collaborate closely with development teams throughout the implementation process. We provide detailed design specifications, assets, and ongoing support to ensure the final product matches our designs and maintains the intended user experience.'
    }
  ]

  const designTools = [
    'Figma & Sketch',
    'Adobe Creative Suite',
    'InVision & Principle',
    'Hotjar & UserTesting',
    'Google Analytics',
    'Miro & Whimsical',
    'Zeplin & Abstract',
    'Framer & ProtoPie'
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'UX/UI Design Services',
    description:
      'Professional UX/UI design services in Cincinnati. User research, wireframing, prototyping, visual design, and usability testing for web and mobile applications.',
    provider: {
      '@type': 'Organization',
      name: 'Uptrade Media',
      url: 'https://uptrademedia.com',
      logo: 'https://uptrademedia.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '335 Manhattan Blvd',
        addressLocality: 'Dayton',
        addressRegion: 'KY',
        postalCode: '41074',
        addressCountry: 'US'
      },
      telephone: '(513) 331-0555'
    },
    areaServed: ['Cincinnati', 'Northern Kentucky', 'Dayton', 'Ohio'],
    serviceType: 'UX/UI Design'
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="UX/UI Design Services Cincinnati | User Experience Design | Uptrade Media"
        description="Professional UX/UI design services in Cincinnati. User research, wireframing, prototyping, and visual design that increases conversions and user satisfaction."
        keywords="UX design Cincinnati, UI design, user experience design, wireframing, prototyping, usability testing, responsive design, Cincinnati UX designer"
        canonicalUrl="https://uptrademedia.com/design/ux"
        ogImage="/ux_ui_wireframing.jpg"
        structuredData={structuredData}
      />

      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/design"
            onClick={scrollToTop}
            className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Design Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-4">
                <Layout className="w-4 h-4 mr-2" />
                UX/UI Design Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">UX/UI Design That Converts Users Into Customers</h1>
              <p className="text-xl mb-8 text-white/90">
                Create exceptional user experiences that drive engagement and conversions. Our data-driven
                design approach combines user research, intuitive interfaces, and conversion optimization to
                deliver results that matter to your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/portfolio" onClick={scrollToTop}>
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    View Our Design Portfolio
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+15133310555">
                  <Button
                    size="lg"
                    className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-sm"
                  >
                    (513) 331-0555
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">200%</div>
                  <div className="text-white/80">Average Conversion Increase</div>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-white/80">User Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card id="ux-form" className="bg-white border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Eye className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Free UX Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Get expert insights on your current user experience and discover opportunities for
                    improvement.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-6">
                      <CheckCircle className="mx-auto text-green-600 mb-4" size={40} />
                      <h3 className="text-xl font-bold mb-2">Thank you</h3>
                      <p className="text-gray-600">
                        We have received your request and will follow up within 24 hours.
                      </p>
                    </div>
                  ) : (                  
                  <form
                    name="ux-ui-consultation"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="ux-ui-consultation" />
                    <p style={{ display: 'none' }}>
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          autoComplete="name"
                          placeholder="John Smith"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="(513) 555-0123"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                        />
                      </div>
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        name="projectType"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option>Website Redesign</option>
                        <option>Mobile App Design</option>
                        <option>Web Application</option>
                        <option>Design System</option>
                        <option>UX Audit</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                      <textarea
                        name="details"
                        rows={3}
                        placeholder="Tell us about your UX/UI design needs..."
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg hover:from-[#39bfb0] hover:to-[#4bbf39] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Free UX Consultation'}
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                  )}

                  <p className="text-xs text-gray-500 text-center mt-4">Free consultation • No obligation • Expert insights</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Crafting Digital Experiences That Users Love
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In today's digital landscape, exceptional user experience isn't just nice to have—it's
                essential for business success. At Uptrade Media, we specialize in creating intuitive,
                engaging, and conversion-focused designs that turn visitors into loyal customers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our user-centered design approach combines deep user research, data-driven insights, and
                proven design principles to create digital experiences that not only look beautiful but drive
                real business results.
              </p>
              <a href="#ux-form">
                <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                  View Our Design Process
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
            <div>
              <img
                src="/ux_ui_wireframing.jpg"
                alt="UX/UI designer wireframing website layouts and user flows"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive UX/UI Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive UX/UI Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial research to final implementation, we provide end-to-end UX/UI design services that
              create exceptional user experiences and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uxuiServices.map((service, index) => (
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

      {/* Design Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our UX/UI Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic, user-centered approach that ensures every design decision is backed by research
              and optimized for your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-[#4bbf39] mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < designProcess.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] transform -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Professional UX/UI Design Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Great design isn't just about aesthetics—it's about creating experiences that drive business
              results and user satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uxuiBenefits.map((benefit, index) => (
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

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Tools & Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading design tools and technologies to create exceptional user
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-semibold text-gray-900">{tool}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our UX/UI design services</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <CardHeader className="cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#4bbf39]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <p className="text-gray-600">{faq.answer}</p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create exceptional digital experiences that delight your users and drive business growth.
            Get started with a free UX consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#ux-form">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Free UX Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="tel:+15133310555">
              <Button
                size="lg"
                className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-sm"
              >
                <Phone className="mr-2 w-5 h-5" />
                (513) 331-0555
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hidden static form for Netlify build bot */}
      <form name="ux-ui-consultation" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="ux-ui-consultation" />
        <input name="name" autoComplete="name" />
        <input name="email" />
        <input name="phone" />
        <input name="company" autoComplete="organization" />
        <select name="projectType">
          <option>Website Redesign</option>
          <option>Mobile App Design</option>
          <option>Web Application</option>
          <option>Design System</option>
          <option>UX Audit</option>
          <option>Other</option>
        </select>
        <textarea name="details"></textarea>
      </form>
    </div>
  )
}

export default DesignUXUIPage
