import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  ArrowRight, 
  Search, 
  BarChart3, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Award,
  ArrowLeft,
  Phone,
  MapPin,
  Globe,
  Target,
  Zap,
  Eye,
  Star,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  Building,
  ShoppingCart,
  FileText,
  Link as LinkIcon,
  Smartphone,
  Monitor,
  PieChart,
  Activity
} from 'lucide-react'
import { motion } from 'framer-motion'


function MarketingSEOPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const seoServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Technical SEO Optimization',
      description: 'Complete website audit and optimization including site speed, mobile responsiveness, crawlability, and Core Web Vitals improvements.',
      features: ['Site Speed Optimization', 'Mobile-First Indexing', 'Schema Markup', 'XML Sitemaps', 'Robots.txt Optimization', 'SSL Implementation']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Keyword Research & Strategy',
      description: 'In-depth keyword analysis to identify high-value search terms your customers use, including long-tail and local keyword opportunities.',
      features: ['Competitor Analysis', 'Search Volume Research', 'Keyword Difficulty Assessment', 'Long-tail Keyword Discovery', 'Search Intent Analysis', 'Keyword Mapping']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Optimization',
      description: 'Strategic content creation and optimization that targets your ideal customers while satisfying search engine algorithms.',
      features: ['On-Page SEO', 'Content Gap Analysis', 'Blog Content Strategy', 'Meta Tag Optimization', 'Header Tag Structure', 'Internal Linking']
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local SEO Mastery',
      description: 'Dominate local search results with Google Business Profile optimization, local citations, and location-based content strategies.',
      features: ['Google Business Profile', 'Local Citations', 'Review Management', 'Local Link Building', 'NAP Consistency', 'Local Schema Markup']
    },
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: 'Link Building & Authority',
      description: 'Ethical link building strategies that increase your domain authority and establish your business as an industry leader.',
      features: ['High-Quality Backlinks', 'Guest Posting', 'Resource Page Links', 'Local Directory Submissions', 'Broken Link Building', 'Digital PR']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'SEO Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure success, identify opportunities, and continuously improve your SEO performance.',
      features: ['Google Analytics Setup', 'Search Console Optimization', 'Rank Tracking', 'Traffic Analysis', 'Conversion Tracking', 'Monthly Reports']
    }
  ]

  const localSeoFeatures = [
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Google Business Profile Optimization',
      description: 'Complete optimization of your Google Business Profile with accurate information, compelling descriptions, and strategic keyword placement.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Review Management Strategy',
      description: 'Systematic approach to generating positive reviews, responding to feedback, and maintaining a strong online reputation.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Local Citation Building',
      description: 'Consistent NAP (Name, Address, Phone) information across all major directories and local business listings.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Location-Based Content',
      description: 'Content strategy targeting local keywords and addressing specific needs of your local customer base.'
    }
  ]

  const industryExpertise = [
    {
      industry: 'Legal Services',
      description: 'Specialized SEO for law firms, attorneys, and legal practices with focus on local search and practice area optimization.',
      keyStrategies: ['Practice Area Pages', 'Local Legal Directories', 'Attorney Bio Optimization', 'Legal Content Marketing']
    },
    {
      industry: 'Healthcare & Medical',
      description: 'HIPAA-compliant SEO strategies for medical practices, dental offices, and healthcare providers.',
      keyStrategies: ['Medical SEO', 'Patient Review Management', 'Health Content Strategy', 'Local Medical Directories']
    },
    {
      industry: 'Real Estate',
      description: 'Property-focused SEO for real estate agents, brokers, and property management companies.',
      keyStrategies: ['Property Listing Optimization', 'Neighborhood Pages', 'Real Estate Content', 'Local Market Analysis']
    },
    {
      industry: 'Home Services',
      description: 'Local SEO for contractors, plumbers, electricians, and other service-based businesses.',
      keyStrategies: ['Service Area Pages', 'Emergency Service SEO', 'Before/After Content', 'Local Service Directories']
    },
    {
      industry: 'Restaurants & Food',
      description: 'Food industry SEO focusing on local discovery, menu optimization, and customer acquisition.',
      keyStrategies: ['Menu SEO', 'Food Photography', 'Local Food Directories', 'Event Marketing']
    },
    {
      industry: 'E-commerce',
      description: 'Product-focused SEO strategies for online retailers and e-commerce businesses.',
      keyStrategies: ['Product Page Optimization', 'Category Structure', 'Shopping Feed Optimization', 'Product Schema']
    }
  ]

  const seoProcess = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your current website, competitors, and market opportunities.',
      deliverables: ['Technical SEO Audit', 'Competitor Analysis', 'Keyword Research Report', 'SEO Strategy Document']
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom SEO strategy tailored to your business goals, target audience, and competitive landscape.',
      deliverables: ['SEO Roadmap', 'Content Calendar', 'Technical Recommendations', 'Local SEO Plan']
    },
    {
      step: '03',
      title: 'Implementation & Optimization',
      description: 'Execute the SEO strategy with on-page optimization, content creation, and technical improvements.',
      deliverables: ['On-Page Optimization', 'Content Creation', 'Technical Fixes', 'Local Listings Setup']
    },
    {
      step: '04',
      title: 'Monitoring & Reporting',
      description: 'Continuous monitoring of performance with regular reporting and strategy adjustments.',
      deliverables: ['Monthly Reports', 'Rank Tracking', 'Traffic Analysis', 'ROI Measurement']
    }
  ]

  const seoResults = [
    {
      metric: '231%',
      description: 'Average traffic increase for our clients',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      metric: '212%',
      description: 'Average increase in local search visibility',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      metric: '90%',
      description: 'Of clients see first page rankings within 6 months',
      icon: <Award className="w-8 h-8" />
    }
  ]

  const faqItems = [
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term investment that typically shows initial improvements within 3-4 months, with significant results appearing within 6-12 months. However, some technical improvements and local SEO changes can show results more quickly. The timeline depends on factors like competition level, current website status, and the scope of optimization needed.'
    },
    {
      question: 'What is the difference between SEO and Local SEO?',
      answer: 'SEO (Search Engine Optimization) focuses on improving your website\'s visibility in search results globally or nationally. Local SEO specifically targets local search results, helping businesses appear when people search for services "near me" or in specific geographic areas. Local SEO includes Google Business Profile optimization, local citations, and location-based content.'
    },
    {
      question: 'How do you measure SEO success?',
      answer: 'We track multiple key performance indicators including organic traffic growth, keyword rankings, local search visibility, conversion rates, bounce rate, page load speed, and ultimately, ROI. We provide detailed monthly reports showing progress across all these metrics and how they impact your business goals.'
    },
    {
      question: 'Do you guarantee first page rankings?',
      answer: 'While no ethical SEO agency can guarantee specific rankings due to constantly changing search algorithms, we do guarantee to use proven, white-hat SEO strategies that have consistently delivered results for our clients. Our focus is on sustainable, long-term growth rather than quick fixes that could harm your website.'
    },
    {
      question: 'What makes your SEO services different?',
      answer: 'Our SEO approach combines technical expertise with deep local market knowledge. We focus on understanding your business goals, not just rankings. Our strategies are data-driven, transparent, and designed for long-term success. Plus, we provide detailed reporting and maintain open communication throughout the process.'
    },
    {
      question: 'How much does SEO cost?',
      answer: 'SEO investment varies based on your business size, competition level, and goals. We offer customized SEO packages starting from local business optimization to comprehensive enterprise SEO strategies. Contact us for a free consultation and custom quote based on your specific needs.'
    },
    {
      question: 'Can you help with both organic SEO and paid search?',
      answer: 'Yes! We offer comprehensive digital marketing services including both organic SEO and paid search (Google Ads, Bing Ads). Combining both strategies often provides the best results, as they complement each other and provide maximum search engine visibility.'
    },
    {
      question: 'What happens if I stop SEO services?',
      answer: 'SEO is an ongoing process. While the improvements made to your website will remain, your competitors will continue optimizing their sites. Without ongoing SEO efforts, your rankings may gradually decline over time. However, the foundational improvements we make will continue to benefit your site long-term.'
    }
  ]

  const seoTools = [
    'Google Analytics & Search Console',
    'SEMrush & Ahrefs',
    'Screaming Frog',
    'Google PageSpeed Insights',
    'Schema Markup Generators',
    'Local SEO Tools',
    'Rank Tracking Software',
    'Content Optimization Tools'
  ]

  const seoPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO & Local SEO Services",
    "description": "Professional SEO and Local SEO services in Cincinnati and Northern Kentucky. Increase website traffic, improve search rankings, and dominate local search results.",
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
    "serviceType": "SEO Services",
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
      "description": "Comprehensive SEO services including technical optimization, content strategy, local SEO, and ongoing monitoring",
      "priceRange": "$$"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO Optimization",
            "description": "Complete website audit and optimization including site speed, mobile responsiveness, and Core Web Vitals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Services",
            "description": "Google Business Profile optimization, local citations, and location-based search optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Strategy & Optimization",
            "description": "Keyword research, content creation, and on-page optimization for better search rankings"
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="SEO & Local SEO Services Cincinnati | Uptrade Media"
        description="Professional SEO and Local SEO services in Cincinnati and Northern Kentucky. Increase website traffic by 300%, improve search rankings, and dominate local search results. Free SEO audit available."
        keywords="SEO Cincinnati, Local SEO Northern Kentucky, search engine optimization, Google rankings, website traffic, Cincinnati SEO company, local search optimization, SEO services"
        ogImage="/marketing_hero.webp"
        structuredData={seoPageStructuredData}
        pageType="service"
      />
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/marketing" 
            onClick={scrollToTop}
            className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors"
          >
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
            >
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-4">
                <Search className="w-4 h-4 mr-2" />
                SEO Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                SEO & Local SEO Services in Cincinnati
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Dominate search results and attract more customers with proven SEO strategies. Our comprehensive approach combines technical optimization, content marketing, and local SEO to drive sustainable growth for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/free-audit" onClick={scrollToTop}>
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Get Your Free SEO Audit
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
                  <div className="text-3xl font-bold">231%</div>
                  <div className="text-white/80">Average Traffic Growth</div>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">90%</div>
                  <div className="text-white/80">First Page Rankings</div>
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
          <BarChart3 className="w-6 h-6 mr-3 text-[#4bbf39]" />
          Free SEO Analysis
        </CardTitle>
        <p className="text-gray-600">
          Get a comprehensive analysis of your website's SEO performance and discover opportunities for improvement.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {submitted ? (
      <div className="text-center py-6">
        <CheckCircle className="mx-auto text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-bold mb-2">Thank you</h3>
        <p className="text-gray-600">We have received your request and will email the audit within 24 hours.</p>
      </div>
        ) : (
<form
  name="seo-analysis"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
   onSubmit={handleSubmit}  // ⬅️ use JS handler instead of action
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="seo-analysis" />
  <p className="hidden">
    <label>
      Do not fill this out if you are human:
      <input name="bot-field" />
    </label>
  </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL *</label>
                <input
                  type="url"
                  name="website"
                  required
                  autoComplete="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input
                  type="text"
                  name="business"
                  required
                  autoComplete="organization"
                  placeholder="Your Business"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Keywords (Optional)</label>
              <input
                type="text"
                name="keywords"
                placeholder="e.g., Cincinnati plumber, law firm SEO"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:from-[#39bfb0] hover:to-[#4bbf39] py-3 text-lg font-semibold"
            >
              Get My Free SEO Analysis
              <Search className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-center text-gray-500 text-sm">Detailed report delivered within 24 hours</p>
</form>
)}
</CardContent>
</Card>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Proven SEO Results That Drive Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven SEO strategies have helped businesses across Cincinnati and Northern Kentucky achieve remarkable growth in organic traffic, leads, and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {seoResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg h-full flex flex-col justify-center">
                  <div className="text-[#4bbf39] mb-4 flex justify-center">
                    {result.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {result.metric}
                  </div>
                  <p className="text-gray-600">
                    {result.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Study Highlight */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-[#4bbf39]/10 text-[#4bbf39] mb-4">
                    Case Study
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    Queen City Riverboats: 1,084% Traffic Increase
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Through comprehensive SEO optimization including technical improvements, content strategy, and local SEO, we helped Queen City Riverboats achieve a remarkable 1,084% increase in organic traffic, leading to significant growth in bookings and revenue.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-[#4bbf39]">1,084%</div>
                      <div className="text-sm text-gray-600">Traffic Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#4bbf39]">300%</div>
                      <div className="text-sm text-gray-600">Booking Increase</div>
                    </div>
                  </div>
                  <Link to="/portfolio/queen-city-riverboats" onClick={scrollToTop}>
                    <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-[#4bbf39]/10 to-[#39bfb0]/10 rounded-lg p-8">
                  <img 
                    src="/adtabletresults.jpg" 
                    alt="SEO Analytics Dashboard showing traffic growth and search performance metrics"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our full-service SEO approach covers every aspect of search engine optimization to ensure your business achieves maximum visibility and sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="text-[#4bbf39] mr-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#4bbf39]/10 text-[#4bbf39] mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Local SEO
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Dominate Local Search Results
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Local SEO is crucial for businesses serving specific geographic areas. Our local SEO strategies help you appear in "near me" searches, Google Maps results, and local business directories, connecting you with customers in your immediate area.
              </p>
              
              <div className="space-y-6">
                {localSeoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-[#4bbf39] mr-4 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/contact" onClick={scrollToTop}>
                  <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                    Get Local SEO Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Local SEO Checklist</h3>
              <div className="space-y-4">
                {[
                  'Google Business Profile Optimization',
                  'Local Keyword Research',
                  'NAP Consistency Audit',
                  'Local Citation Building',
                  'Review Management Strategy',
                  'Local Schema Markup',
                  'Location-Based Content',
                  'Local Link Building',
                  'Competitor Analysis',
                  'Local Rank Tracking'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Industry-Specific SEO Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every industry has unique SEO challenges and opportunities. Our specialized knowledge across various sectors ensures your SEO strategy is tailored to your specific market dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#4bbf39]">
                      {industry.industry}
                    </CardTitle>
                    <p className="text-gray-600">
                      {industry.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Strategies:</h4>
                    <div className="space-y-2">
                      {industry.keyStrategies.map((strategy, strategyIndex) => (
                        <div key={strategyIndex} className="flex items-center text-sm text-gray-600">
                          <Target className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {strategy}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Proven SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every aspect of your SEO campaign is strategically planned, expertly executed, and continuously optimized for maximum results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {seoProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-[#4bbf39] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl">
                        {step.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Deliverables:</h4>
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Professional SEO Tools & Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and technologies to analyze, optimize, and track your SEO performance with precision and accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-[#4bbf39] mb-3">
                  <Activity className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">{tool}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions About SEO
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about SEO services, timelines, and strategies.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-left">
                        {faq.question}
                      </CardTitle>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#4bbf39]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#4bbf39]" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free SEO audit and discover how we can help your business achieve top rankings and drive more qualified traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-audit" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100">
                Get Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarketingSEOPage