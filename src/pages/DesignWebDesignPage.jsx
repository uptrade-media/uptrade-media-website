import React, { useState } from 'react'
import FormLoadingSpinner from "../components/FormLoadingSpinner.jsx"
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  ArrowRight, 
  Monitor, 
  Globe, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Award,
  ArrowLeft,
  Phone,
  Search,
  Smartphone,
  Zap,
  Eye,
  Target,
  Code,
  Palette,
  ExternalLink,
  Camera
} from 'lucide-react'
import { motion } from 'framer-motion'

function DesignWebDesignPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
          window.location.href = "/thank-you"
        }, 1500)
      })
      .catch((err) => {
        console.error("Form submit error:", err)
        setIsSubmitting(false)
        alert("There was an error. Please try again.")
      })
  }

  const portfolioProjects = [
    {
      title: 'Queen City Riverboats',
      category: 'Tourism & Entertainment',
      description: 'Complete website redesign that delivered a 1,084.4% traffic increase through strategic design and SEO optimization.',
      image: '/Portfolio/Queen_City_Riverboats_Portfolio.png',
      link: '/portfolio/queen-city-riverboats',
      features: ['Responsive Design', 'Booking System', 'SEO Optimization', 'Visual Storytelling']
    },
    {
      title: 'El Señor Pig',
      category: 'Restaurant & Food Service',
      description: 'Vibrant website design capturing the restaurant\'s unique personality with bold colors and engaging user experience.',
      image: '/Portfolio/El_Senor_Pig_Portfolio.png',
      link: '/portfolio/el-senor-pig',
      features: ['Brand Identity', 'Mobile Responsive', 'Local SEO', 'Visual Design']
    },
    {
      title: 'Manhattan Harbour Living',
      category: 'Real Estate & Development',
      description: 'Luxury website showcasing riverfront community with immersive visuals and lead generation focus.',
      image: '/Portfolio/Manhattan_Harbour_Riverside_Living_Portfolio.png',
      link: '/portfolio/manhattan-harbour-living',
      features: ['Luxury Design', 'Lead Generation', 'Drone Integration', 'Property Showcase']
    }
  ]

  const designServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Custom Website Design',
      description: 'Unique, brand-focused designs that capture your business personality and engage your target audience.',
      features: ['Brand-aligned aesthetics', 'Custom layouts', 'Visual hierarchy', 'Color psychology']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Development',
      description: 'Mobile-first approach ensuring your website looks and functions perfectly on all devices and screen sizes.',
      features: ['Mobile optimization', 'Cross-browser compatibility', 'Fast loading speeds', 'Touch-friendly interface']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Conversion Optimization',
      description: 'Strategic design elements and user experience optimization to turn visitors into customers.',
      features: ['Strategic CTAs', 'User journey mapping', 'A/B testing', 'Analytics integration']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical Excellence',
      description: 'Clean, efficient code and modern development practices for optimal performance and maintainability.',
      features: ['Clean code structure', 'Security best practices', 'Performance optimization', 'Scalable architecture']
    }
  ]

  const webDesignBenefits = [
    {
      title: 'Professional First Impressions',
      description: 'Your website is often the first interaction customers have with your brand. Make it count with stunning, professional design.',
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'Enhanced User Experience',
      description: 'Intuitive navigation, fast loading times, and responsive design create seamless experiences that keep visitors engaged.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Higher Conversion Rates',
      description: 'Strategic design and clear calls-to-action guide visitors through your sales funnel and increase conversions.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Mobile-First Performance',
      description: 'With mobile traffic dominating, responsive design ensures your site performs flawlessly on every device.',
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: 'SEO Foundation',
      description: 'Websites built with SEO best practices from the ground up rank higher and attract more organic traffic.',
      icon: <Search className="w-8 h-8" />
    },
    {
      title: 'Brand Credibility',
      description: 'Professional web design builds trust and establishes your business as a credible authority in your industry.',
      icon: <Award className="w-8 h-8" />
    }
  ]

  const process = [
    { step: '01', title: 'Discovery & Strategy', description: 'We analyze your business goals, target audience, and competitive landscape to create a strategic foundation.' },
    { step: '02', title: 'Design & Wireframing', description: 'Custom designs and wireframes that align with your brand and optimize user experience.' },
    { step: '03', title: 'Development & Testing', description: 'Clean, efficient code development with rigorous testing across devices and browsers.' },
    { step: '04', title: 'Launch & Optimization', description: 'Seamless launch with ongoing performance monitoring and optimization for maximum results.' }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)

  const faqItems = [
    {
      question: 'How long does it take to build a custom website?',
      answer: 'The timeline for a custom website varies based on complexity and features, but typically ranges from 4 to 8 weeks from initial concept to launch. Simple websites can be completed in 2-3 weeks, while complex e-commerce or custom functionality sites may take 8-12 weeks.'
    },
    {
      question: 'What is the cost of professional web design in Cincinnati?',
      answer: 'Web design costs vary based on your specific needs, features, and complexity. Our custom websites typically range from $3,000 to $15,000. We provide detailed quotes after understanding your requirements and offer flexible payment plans to fit your budget.'
    },
    {
      question: 'Do you offer e-commerce website development?',
      answer: 'Yes, we specialize in creating robust and secure e-commerce platforms using platforms like Shopify, WooCommerce, and custom solutions. Our e-commerce sites include shopping carts, payment processing, inventory management, and conversion optimization features.'
    },
    {
      question: 'Will my website be mobile-friendly and responsive?',
      answer: 'Absolutely. All our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktop computers. We test across all devices and browsers to guarantee optimal performance.'
    },
    {
      question: 'Do you provide SEO optimization with web design?',
      answer: 'Yes, every website we design includes comprehensive SEO optimization. This includes optimized page structure, meta tags, fast loading speeds, mobile responsiveness, and clean code that search engines love. We also offer ongoing SEO services.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We specialize in website redesigns that improve user experience, increase conversions, and modernize your online presence. We can work with your existing content or help create new content that better serves your goals.'
    },
    {
      question: 'Do you provide ongoing website maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, backup services, and technical support. Our maintenance plans ensure your website stays secure, fast, and up-to-date.'
    },
    {
      question: 'What platforms do you use for web design?',
      answer: 'We work with various platforms including WordPress, Shopify, React, and custom HTML/CSS solutions. We choose the best platform based on your specific needs, budget, and long-term goals to ensure optimal performance and scalability.'
    },
    {
      question: 'Do you provide website hosting services?',
      answer: 'While we don\'t provide hosting directly, we partner with reliable hosting providers and can help you choose the best hosting solution for your needs. We also assist with domain registration and DNS setup for a complete solution.'
    },
    {
      question: 'How do you ensure my website loads quickly?',
      answer: 'We implement multiple performance optimization techniques including image compression, code minification, caching strategies, CDN integration, and optimized hosting configurations. We aim for page load speeds under 3 seconds on all devices.'
    },
    {
      question: 'Can you integrate my website with social media and marketing tools?',
      answer: 'Yes, we can integrate your website with various marketing tools including Google Analytics, Facebook Pixel, email marketing platforms, CRM systems, and social media feeds. This helps you track performance and automate your marketing efforts.'
    },
    {
      question: 'What makes Uptrade Media different from other web design companies?',
      answer: 'We combine beautiful design with strategic marketing focus. Every website we create is optimized for conversions, SEO, and user experience. Plus, we\'re local to Cincinnati and provide personalized service with ongoing support and digital marketing expertise.'
    }
  ]

  const uiUxDesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design & Development Services",
    "description": "Professional UI/UX design services in Cincinnati and Northern Kentucky. User-centered design that creates exceptional digital experiences and drives conversions.",
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
    "serviceType": "UI/UX Design & Development",
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
      "description": "UI/UX design services including user research, wireframing, prototyping, and conversion optimization",
      "priceRange": "$$"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Web Design Cincinnati | Professional Website Design | Uptrade Media"
        description="Professional web design services in Cincinnati and Northern Kentucky. Custom website design that combines beautiful aesthetics with high performance and SEO optimization to drive business results."
        keywords="web design Cincinnati, website design Northern Kentucky, custom web design, responsive web design, professional website design, Cincinnati web designer, website development"
        ogImage="/design_hero.webp"
        structuredData={uiUxDesignStructuredData}
        pageType="service"
      />
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/design" className="inline-flex items-center text-[#4bbf39] hover:text-#39bfb0 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Design Services
          </Link>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
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
                <Globe className="w-4 h-4 mr-2" />
                Web Design Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional Web Design in Cincinnati
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Create stunning, high-performing websites that drive results for your business. Our web design process combines beautiful aesthetics, user-friendly functionality, and SEO optimization to deliver websites that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Start Your Web Design Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+15133310555">
                  <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                    <Phone className="w-5 h-5 mr-2" />
                    (513) 331-0555
                  </Button>
                </a>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">50+{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  <div className="text-white/80">Websites Designed{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">231%{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  <div className="text-white/80">Avg Traffic Increase{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
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
                    <Globe className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Free Web Design Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Get expert insights on your website design and discover how professional web design can transform your online presence and drive more conversions.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form 
                    name="web-design-consultation" 
                    method="POST" 
                    data-netlify="true"
                    onSubmit={handleSubmit} 
                    netlify-honeypot="bot-field"
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="web-design-consultation" />
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
                    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
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
                    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel" autoComplete="tel"
                        placeholder="(513) 555-0123"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                      />
                    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select name="projectType" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent">
                      <option value="">Select project type</option>
                      <option value="new-website">New Website Design</option>
                      <option value="website-redesign">Website Redesign</option>
                      <option value="ecommerce">E-commerce Website</option>
                      <option value="landing-page">Landing Page Design</option>
                      <option value="website-audit">Website Audit</option>
                      <option value="other">Other</option>
                    </select>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Challenge
                    </label>
                    <textarea
                      name="challenge"
                      rows={3}
                      placeholder="What web design challenges are you facing? Tell us about your goals and current website issues."
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                    ></textarea>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg hover:from-[#39bfb0] hover:to-[#4bbf39]">
                    Get Free Web Design Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </form>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Free consultation • No obligation • Expert insights
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>









      {/* Portfolio Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Featured Web Design Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our custom web design solutions have transformed businesses across different industries, delivering measurable results and exceptional user experiences.
            </p>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-#4bbf39 text-white">
                        {project.category}
                      </Badge>
                    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                    
                    <Link to={project.link}>
                      <Button variant="outline" className="w-full">
                        View Case Study
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>

      {/* Design Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Web Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final launch, we provide end-to-end web design and development services that deliver exceptional results.
            </p>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg flex items-center justify-center text-white mr-4">
                        {service.icon}
                      {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
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
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>

      {/* In-House Media Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Full In-House Media Production
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why settle for stock photos when you can have custom, professional media that tells your unique story? Our in-house video production and commercial photography teams create compelling visual content that elevates your web design.
            </p>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                The Uptrade Media Advantage
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Most web design agencies rely on generic stock photos and videos. We create custom visual content specifically for your brand, ensuring your website stands out with authentic, high-quality media that resonates with your audience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Camera className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Custom Photography</h4>
                    <p className="text-gray-600">Professional commercial photography that showcases your products, services, team, and facilities with stunning clarity and composition.</p>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                
                <div className="flex items-start">
                  <Monitor className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Video Production</h4>
                    <p className="text-gray-600">Cinematic video content including hero videos, product showcases, testimonials, and brand stories that engage visitors and increase conversions.</p>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Seamless Integration</h4>
                    <p className="text-gray-600">Our design and media teams work together from day one, ensuring perfect integration of visual content with your website's design and functionality.</p>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/media/video-production">
                  <Button size="lg" className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                    Video Production Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/media/photography">
                  <Button size="lg" variant="outline" className="border-#4bbf39 text-[#4bbf39] hover:bg-#4bbf39 hover:text-white">
                    Commercial Photography
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
            {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl aspect-video">
                <iframe 
                  src="https://uptrademedia.wistia.com/embed/iframe/6jjp0sfsz9?autoPlay=true&muted=true&playButton=false&fullscreenButton=false&volumeControl=false&seo=false"
                  title="The Marina at Manhattan Harbour - Custom Header Video"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                ></iframe>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold">The Marina at Manhattan Harbour</p>
                <p className="text-xs opacity-90">Custom Header Video Production</p>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
            {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Award className="w-8 h-8" />
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                <h4 className="text-xl font-bold mb-2">Brand Authenticity</h4>
                <p className="text-gray-600">Custom media that truly represents your brand, not generic stock content that looks like everyone else's.</p>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
              
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                <h4 className="text-xl font-bold mb-2">Higher Engagement</h4>
                <p className="text-gray-600">Professional video and photography increase user engagement, time on site, and conversion rates significantly.</p>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
              
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Lightbulb className="w-8 h-8" />
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                <h4 className="text-xl font-bold mb-2">Competitive Edge</h4>
                <p className="text-gray-600">Stand out from competitors with unique, high-quality visual content that showcases your business professionally.</p>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
            {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>

      {/* SEO Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                SEO-Optimized Web Design
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Beautiful design means nothing if your customers can't find you. That's why every website we create is built with SEO best practices from the ground up.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Search className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technical SEO Foundation</h3>
                    <p className="text-gray-600">Clean code structure, fast loading speeds, mobile optimization, and proper schema markup for search engine visibility.</p>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Content Optimization</h3>
                    <p className="text-gray-600">Strategic keyword placement, optimized meta tags, and content structure that both users and search engines love.</p>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-[#4bbf39] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
                    <p className="text-gray-600">Image optimization, caching strategies, and code minification for lightning-fast page speeds that improve rankings.</p>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

              <Link to="/marketing/seo">
                <Button size="lg" className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                  Learn More About Our SEO Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">SEO Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Average Traffic Increase</span>
                    <span className="text-2xl font-bold">231%</span>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '85%'}}>{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Page Speed Improvement</span>
                    <span className="text-2xl font-bold">+40%</span>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '70%'}}>{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Search Rankings</span>
                    <span className="text-2xl font-bold">Top 3</span>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '90%'}}>{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
              {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
            {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Professional Web Design Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital landscape, your website is your most important marketing asset. Here's how professional web design drives business growth.
            </p>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDesignBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                  {benefit.icon}
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Web Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every website we create delivers exceptional results and exceeds expectations.
            </p>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] transform -translate-x-8">{isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                )}
              </motion.div>
            ))}
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
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
                  {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a website that not only looks amazing but drives real business results. Get started with a free consultation and website audit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/free-audit">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Your Free Website Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15133310555">
              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Call (513) 331-0555
              </Button>
            </a>
          {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
        {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
      </section>
    {isSubmitting && <FormLoadingSpinner message={submitted ? "Success! Redirecting..." : "Submitting your request..."} />}
      </div>
  )
}

export default DesignWebDesignPage
