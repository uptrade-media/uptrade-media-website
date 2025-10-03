import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  ArrowRight, 
  Palette, 
  Layout, 
  Lightbulb, 
  TrendingUp, 
  Award, 
  Image,
  ArrowLeft,
  Phone,
  Truck,
  FileText,
  Monitor,
  Users,
  Target,
  Zap,
  Eye,
  Printer,
  Smartphone
} from 'lucide-react'
import { motion } from 'framer-motion'

function DesignGraphicDesignPage() {
  const [submitted, setSubmitted] = useState(false)

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
          window.location.href = "/thank-you"
        }, 1500)
      })
      .catch((err) => {
        console.error("Form submit error:", err)
        alert("There was an error. Please try again.")
      })
  }

  const graphicDesignServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Vehicle Wraps & Graphics',
      description: 'Eye-catching vehicle wraps, RV graphics, and fleet branding that turn your vehicles into mobile billboards.',
      features: ['Commercial vehicle wraps', 'RV and trailer graphics', 'Fleet branding', 'Partial wraps and decals']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Print Marketing Materials',
      description: 'Professional print designs including brochures, flyers, business cards, and promotional materials.',
      features: ['Brochures and catalogs', 'Flyers and postcards', 'Business cards', 'Trade show materials']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Digital Graphics',
      description: 'Engaging digital assets for websites, social media, email campaigns, and online advertising.',
      features: ['Social media graphics', 'Web banners', 'Email templates', 'Digital advertisements']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Identity Design',
      description: 'Complete visual identity systems including logos, color palettes, typography, and brand guidelines.',
      features: ['Logo design', 'Brand guidelines', 'Color palette development', 'Typography selection']
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Signage & Displays',
      description: 'Professional signage design for storefronts, trade shows, events, and interior displays.',
      features: ['Storefront signage', 'Trade show displays', 'Interior graphics', 'Wayfinding systems']
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Custom Illustrations',
      description: 'Original illustrations, infographics, and custom artwork that brings your ideas to life.',
      features: ['Custom illustrations', 'Infographic design', 'Icon creation', 'Technical drawings']
    }
  ]

  const graphicDesignBenefits = [
    {
      title: 'Stronger Brand Identity',
      description: 'Consistent and professional graphics reinforce your brand message and values.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Increased Engagement',
      description: 'Visually appealing designs capture attention and encourage interaction with your content.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Clear Communication',
      description: 'Complex ideas are easily understood through well-designed infographics and visual aids.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Competitive Edge',
      description: 'Stand out from competitors with unique and memorable visual assets.',
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: 'Versatile Marketing Materials',
      description: 'Graphics can be adapted for digital, print, and social media campaigns, maximizing reach.',
      icon: <Image className="w-8 h-8" />
    },
    {
      title: 'Professional Credibility',
      description: 'High-quality design signals professionalism and builds trust with your audience.',
      icon: <CheckCircle className="w-8 h-8" />
    },
  ]

  const faqItems = [
    {
      question: 'What types of graphic design services do you offer?',
      answer: 'We offer a comprehensive range of graphic design services including logo design, brand guidelines, marketing collateral (brochures, flyers), social media graphics, advertisements, pitch decks, and custom illustrations.'
    },
    {
      question: 'How do you ensure the designs align with my brand?',
      answer: 'Our process begins with a thorough understanding of your brand identity, target audience, and marketing goals. We work closely with you through concept development and revisions to ensure the final designs perfectly reflect your brand\'s aesthetic and message.'
    },
    {
      question: 'Can you design for both print and digital platforms?',
      answer: 'Yes, our designers are proficient in creating graphics optimized for both print (e.g., business cards, brochures, banners) and digital use (e.g., website banners, social media posts, email templates), ensuring consistency across all your channels.'
    },
    {
      question: 'What is the typical turnaround time for graphic design projects?',
      answer: 'Turnaround times vary depending on the complexity and scope of the project. Simple projects like social media graphics might take a few days, while more complex projects like brand identity packages can take several weeks. We provide clear timelines upfront.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)

  const graphicDesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Graphic Design Services",
    "description": "Professional graphic design services in Cincinnati and Northern Kentucky. Vehicle wraps, print materials, digital graphics, and brand identity design.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Uptrade Media",
      "url": "https://uptrademedia.com",
      "telephone": "+15133310555",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cincinnati",
        "addressRegion": "OH",
        "addressCountry": "US"
      }
    },
    "serviceType": "Graphic Design",
    "areaServed": [
      {
        "@type": "City",
        "name": "Cincinnati",
        "addressRegion": "OH"
      },
      {
        "@type": "State",
        "name": "Northern Kentucky",
        "addressRegion": "KY"
      }
    ],
    "offers": {
      "@type": "Offer",
      "description": "Graphic design services including vehicle wraps, print materials, digital graphics, brand identity, signage, and custom illustrations",
      "priceRange": "$$"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Graphic Design Cincinnati | Print Vehicle Wraps & Print Design Digital Design | Uptrade Media"
        description="Professional graphic design services in Cincinnati and Northern Kentucky. Print materials, digital graphics, branding, digital graphics, and brand identity design that drives results."
        keywords="graphic design Cincinnati, print design Northern Kentucky, digital graphics, brand identity, print design, flyer design, brochure design, Cincinnati graphic designer"
        ogImage="/rv_wrap_design.jpg"
        structuredData={graphicDesignStructuredData}
        pageType="service"
      />
      
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/design" className="inline-flex items-center text-[#4bbf39] hover:text-#39bfb0 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Design Services
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
            >
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-4">
                <Palette className="w-4 h-4 mr-2" />
                Graphic Design Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional Graphic Design in Cincinnati
              </h1>
              <p className="text-xl mb-8 text-white/90">
                From professional print materials and digital graphics to custom branding and signage, we create compelling visual designs that capture attention and drive business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Start Your Design Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+15133310555">
                  <Button size="lg" className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                    <Phone className="w-5 h-5 mr-2" />
                    (513) 331-0555
                  </Button>
                </a>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-white/80">Design Projects</div>
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
                    <Palette className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Free Design Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Get expert insights on your design needs and discover how professional graphics can transform your marketing.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
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
                    name="graphic-design-consultation" 
                    method="POST" 
                    data-netlify="true"
                    onSubmit={handleSubmit} 
                    netlify-honeypot="bot-field"
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="graphic-design-consultation" />
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
                        name="name" autoComplete="name"
                        placeholder="John Smith"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email" autoComplete="email"
                        name="email"
                        placeholder="john@company.com"
                        required
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
                        name="phone"
                        autoComplete="tel"
                        placeholder="(513) 555-0123"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Design Type
                    </label>
                    <select name="designType" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent">
                      <option value="">Select design type</option>
                      <option value="vehicle-wrap">Vehicle Wrap</option>
                      <option value="print-materials">Print Materials</option>
                      <option value="digital-graphics">Digital Graphics</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="signage">Signage & Displays</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      placeholder="Tell us about your design project..."
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg hover:from-[#39bfb0] hover:to-[#4bbf39]">
                    Get Free Design Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </form>
                  )}
                  
                  <p className="text-xs text-gray-500 text-center">
                    Free consultation • No obligation • Expert insights
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Comprehensive Graphic Design Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Graphic Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vehicle wraps to digital graphics, we provide end-to-end graphic design services that create powerful visual communications and drive business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicDesignServices.map((service, index) => (
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Graphic Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative approach that ensures every design project delivers exceptional results and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'Understanding your brand, goals, and target audience to create designs that resonate.',
                icon: <Target className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Concept Development',
                description: 'Creating initial design concepts and exploring creative directions that align with your vision.',
                icon: <Lightbulb className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Design & Refinement',
                description: 'Developing detailed designs with multiple revisions to perfect every element.',
                icon: <Palette className="w-8 h-8" />
              },
              {
                step: '04',
                title: 'Production & Delivery',
                description: 'Preparing final files for print or digital use with proper specifications and formats.',
                icon: <Printer className="w-8 h-8" />
              }
            ].map((step, index) => (
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
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] transform -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graphic design expertise spans multiple industries, creating tailored solutions that resonate with specific audiences and market requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Transportation & Logistics',
                description: 'Fleet graphics, commercial vehicle wraps, and transportation branding that builds recognition on the road.',
                features: ['Fleet vehicle wraps', 'Commercial truck graphics', 'Trailer branding', 'DOT compliance design']
              },
              {
                title: 'Retail & E-commerce',
                description: 'Point-of-sale materials, product packaging, and promotional graphics that drive sales.',
                features: ['Product packaging design', 'Store signage', 'Promotional materials', 'E-commerce graphics']
              },
              {
                title: 'Healthcare & Medical',
                description: 'Professional medical graphics, patient education materials, and healthcare facility signage.',
                features: ['Medical facility signage', 'Patient education materials', 'Healthcare brochures', 'Professional presentations']
              },
              {
                title: 'Real Estate & Development',
                description: 'Property marketing materials, development signage, and real estate branding that attracts buyers.',
                features: ['Property brochures', 'Development signage', 'Real estate marketing', 'Site plan graphics']
              },
              {
                title: 'Food & Beverage',
                description: 'Restaurant graphics, menu design, food packaging, and promotional materials that entice customers.',
                features: ['Menu design', 'Restaurant signage', 'Food packaging', 'Promotional materials']
              },
              {
                title: 'Professional Services',
                description: 'Corporate presentations, professional brochures, and business materials that build credibility.',
                features: ['Corporate presentations', 'Professional brochures', 'Business proposals', 'Conference materials']
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
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

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visually Communicate Your Brand's Message with Impact
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In a visually-driven world, compelling graphic design is essential for making a strong first impression and effectively communicating your brand's message. At Uptrade Media, we specialize in creating stunning visual assets that capture attention and drive engagement.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From eye-catching advertisements and informative infographics to cohesive social media campaigns and professional marketing collateral, our design team crafts visuals that not only look great but also strategically support your business objectives. Let us help your brand shine.
              </p>
              <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <img 
                src="/a-graphic-designer-working-on-his-desktop-computer.webp" 
                alt="Professional graphic designer working on creative projects at desktop computer"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Design Process</h3>
                <p className="text-gray-600">
                  Our experienced designers use industry-leading tools and creative expertise to bring your vision to life with precision and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Professional Graphic Design is a Must-Have
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In a competitive market, compelling visuals are crucial for capturing attention and conveying your brand's message effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicDesignBenefits.map((benefit, index) => (
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
            Ready to Elevate Your Visual Brand?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and discover how professional graphic design can transform your marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs h-10">
              <Phone className="mr-2 w-5 h-5" />
              Call (513) 331-0555
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesignGraphicDesignPage
