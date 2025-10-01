import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, DollarSign, Target, TrendingUp, Lightbulb, Users, BarChart3, Phone, Award, Search, MousePointer, Eye, Zap, Settings, PieChart } from 'lucide-react'
import { motion } from 'framer-motion'

function MarketingPaidAdsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const paidAdsServices = [
    {
      title: 'Google Ads Management',
      description: 'Comprehensive Google Ads campaigns including Search, Display, Shopping, and YouTube advertising.',
      features: ['Search Campaigns', 'Display Advertising', 'Shopping Ads', 'YouTube Ads', 'Performance Max', 'Local Campaigns'],
      icon: <Search className="w-8 h-8" />
    },
    {
      title: 'Meta Advertising (Facebook & Instagram)',
      description: 'Strategic social media advertising across Facebook and Instagram with advanced targeting.',
      features: ['Facebook Ads', 'Instagram Ads', 'Stories Advertising', 'Reels Promotion', 'Audience Targeting', 'Retargeting Campaigns'],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'LinkedIn Advertising',
      description: 'Professional B2B advertising campaigns targeting decision-makers and industry professionals.',
      features: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Lead Gen Forms', 'Account Targeting', 'Lookalike Audiences'],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Campaign Optimization & Analytics',
      description: 'Continuous monitoring, testing, and optimization to maximize your advertising ROI.',
      features: ['A/B Testing', 'Conversion Tracking', 'Bid Optimization', 'Audience Refinement', 'Performance Analysis', 'ROI Reporting'],
      icon: <BarChart3 className="w-8 h-8" />
    }
  ]

  const campaignTypes = [
    {
      title: 'Search Advertising',
      description: 'Capture high-intent customers actively searching for your products or services.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Display Campaigns',
      description: 'Build brand awareness with visually compelling ads across the web.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Social Media Ads',
      description: 'Engage audiences on their favorite social platforms with targeted content.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Retargeting Campaigns',
      description: 'Re-engage website visitors and convert them into customers.',
      icon: <MousePointer className="w-6 h-6" />
    },
    {
      title: 'Shopping Ads',
      description: 'Showcase products directly in search results with rich product information.',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: 'Video Advertising',
      description: 'Capture attention with engaging video content across YouTube and social platforms.',
      icon: <Zap className="w-6 h-6" />
    }
  ]

  const paidAdsProcess = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Comprehensive analysis of your business goals, target audience, and competitive landscape.',
      deliverables: ['Campaign Strategy', 'Audience Research', 'Competitor Analysis', 'Budget Allocation Plan']
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Professional campaign creation with optimized targeting, ad copy, and conversion tracking.',
      deliverables: ['Campaign Structure', 'Ad Creation', 'Tracking Setup', 'Landing Page Optimization']
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'Campaign launch with continuous monitoring and real-time optimization for maximum performance.',
      deliverables: ['Campaign Launch', 'Performance Monitoring', 'Daily Optimizations', 'Bid Management']
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description: 'Data-driven optimization and scaling strategies to maximize ROI and business growth.',
      deliverables: ['Performance Reports', 'A/B Test Results', 'Scaling Strategies', 'ROI Analysis']
    }
  ]

  const paidAdsBenefits = [
    {
      title: 'Instant Visibility',
      description: 'Get your brand in front of your target audience immediately, driving quick results.',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Precise Targeting',
      description: 'Reach specific demographics, interests, and behaviors with unparalleled accuracy.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Measurable ROI',
      description: 'Track every dollar spent and every conversion, ensuring a positive return on investment.',
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Scalable Growth',
      description: 'Easily adjust budgets and campaigns to scale your marketing efforts as your business grows.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Brand Awareness',
      description: 'Increase recognition and recall for your brand across various digital platforms.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead of competitors by dominating search results and social feeds.',
      icon: <BarChart3 className="w-8 h-8" />
    },
  ]

  const platformExpertise = [
    {
      platform: 'Google Ads',
      description: 'Certified Google Ads specialists managing Search, Display, Shopping, and YouTube campaigns.',
      capabilities: ['Search Campaigns', 'Display Network', 'Shopping Ads', 'YouTube Advertising', 'Performance Max', 'Local Campaigns']
    },
    {
      platform: 'Meta (Facebook & Instagram)',
      description: 'Advanced Meta advertising strategies for maximum reach and engagement.',
      capabilities: ['Facebook Ads', 'Instagram Ads', 'Stories & Reels', 'Messenger Ads', 'Audience Network', 'Catalog Ads']
    },
    {
      platform: 'LinkedIn Ads',
      description: 'B2B focused LinkedIn advertising for professional audiences and lead generation.',
      capabilities: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Lead Gen Forms', 'Event Ads', 'Follower Ads']
    },
    {
      platform: 'TikTok Ads',
      description: 'Creative TikTok advertising campaigns targeting younger demographics and viral content.',
      capabilities: ['In-Feed Ads', 'Brand Takeover', 'TopView Ads', 'Branded Effects', 'Spark Ads', 'Collection Ads']
    }
  ]

  const faqItems = [
    {
      question: 'What platforms do you manage paid ads on?',
      answer: 'We manage campaigns across Google Ads (Search, Display, Shopping, YouTube), Meta (Facebook, Instagram), LinkedIn Ads, TikTok Ads, and other emerging platforms, tailoring strategies to your target audience and business goals.'
    },
    {
      question: 'How do you determine the budget for paid ad campaigns?',
      answer: 'We work with you to establish a budget that aligns with your business objectives and expected ROI. We analyze your market, competition, and goals to recommend optimal budget allocation across platforms and campaign types for maximum impact.'
    },
    {
      question: 'How quickly can I see results from paid advertising?',
      answer: 'Paid advertising can generate immediate visibility and traffic. You may see initial results within hours of campaign launch, with meaningful data and optimization opportunities emerging within the first week. Full campaign optimization typically occurs within 2-4 weeks.'
    },
    {
      question: 'How often do you report on campaign performance?',
      answer: 'We provide regular, detailed performance reports, typically weekly or bi-weekly, covering key metrics like impressions, clicks, conversions, cost-per-acquisition, and return on ad spend. We also schedule regular strategy calls to discuss performance and optimizations.'
    },
    {
      question: 'Can you help with ad creative development?',
      answer: 'Yes, our team includes experienced designers and copywriters who create compelling ad copy and visually engaging creatives optimized for each platform. We ensure your campaigns stand out and convert with professional, on-brand creative assets.'
    },
    {
      question: 'What is your approach to campaign optimization?',
      answer: 'We use a data-driven approach with continuous A/B testing, audience refinement, bid optimization, and creative rotation. Our team monitors campaigns daily and makes strategic adjustments to improve performance and maximize your ROI.'
    },
    {
      question: 'Do you provide landing page optimization?',
      answer: 'Absolutely! We optimize landing pages to ensure they align with your ad campaigns and maximize conversion rates. This includes improving page speed, mobile responsiveness, messaging alignment, and conversion elements.'
    },
    {
      question: 'What kind of ROI can I expect from paid advertising?',
      answer: 'ROI varies by industry and campaign type, but our clients typically see 3-5x return on ad spend for well-optimized campaigns. We focus on strategies that deliver sustainable, profitable growth for your business.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden bg-white/20 backdrop-blur-sm border-white/30 text-white mb-4">
                Paid Advertising Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Paid Ads Management
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Google, Meta, LinkedIn, TikTok. Maximize your ROI with targeted campaigns and expert optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" onClick={scrollToTop}>
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Get Your Free Ad Audit
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
                  <Target className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">5x</div>
                  <div className="text-white/80">Average ROAS</div>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-white/80">Client Retention Rate</div>
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
                    <Target className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Get Your Free Ad Audit
                  </CardTitle>
                  <p className="text-gray-600">
                    Discover opportunities to improve your paid advertising performance and ROI.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        Monthly Ad Budget
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent">
                        <option value="">Select Budget Range</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Advertising Platforms
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent">
                      <option value="">Select Primary Platform</option>
                      <option value="google">Google Ads</option>
                      <option value="facebook">Facebook/Instagram</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="multiple">Multiple Platforms</option>
                      <option value="none">Not Currently Advertising</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Goals *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What are your main advertising goals? (e.g., increase sales, generate leads, build brand awareness)"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:from-[#39bfb0] hover:to-[#4bbf39] py-3 text-lg font-semibold">
                    Get My Free Ad Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-center text-gray-500 text-sm">
                    We'll analyze your current campaigns and provide actionable recommendations
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drive Immediate Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Drive Immediate Results with Strategic Paid Advertising
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In the fast-paced digital landscape, paid advertising offers an unparalleled opportunity to reach your ideal customers precisely when and where it matters most. At Uptrade Media, we specialize in crafting and managing highly effective paid ad campaigns across all major platforms.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our data-driven approach combines strategic targeting, compelling creative, and continuous optimization to maximize your return on ad spend. Whether you're looking to drive immediate sales, generate qualified leads, or build brand awareness, our expert team delivers results that matter to your bottom line.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4bbf39] mb-2">250%</div>
                  <div className="text-gray-600">Average ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4bbf39] mb-2">72hrs</div>
                  <div className="text-gray-600">Campaign Launch Time</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Google_ads_management.png" 
                alt="Google Ads Management Dashboard"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Paid Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy development to campaign optimization, we handle every aspect of your paid advertising success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {paidAdsServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg flex items-center justify-center text-white mr-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-3" />
                          <span className="text-gray-700">{feature}</span>
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

      {/* Campaign Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Campaign Types We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From search to social, we create campaigns that capture attention and drive conversions across all digital channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg flex items-center justify-center text-white mr-3">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Advertising Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating and optimizing paid advertising campaigns that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paidAdsProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {step.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-[#4bbf39] mr-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Platform Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified specialists across all major advertising platforms, ensuring your campaigns leverage the latest features and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platformExpertise.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">{platform.platform}</CardTitle>
                    <p className="text-gray-600">{platform.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2" />
                          <span className="text-sm text-gray-700">{capability}</span>
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Paid Advertising Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful advantages of strategic paid advertising for accelerating your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidAdsBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg flex items-center justify-center text-white mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our paid advertising management services.
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
                <Card className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </CardTitle>
                      <ArrowRight 
                        className={`w-5 h-5 text-gray-500 transition-transform ${
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
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Maximize Your Advertising ROI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Let's create paid advertising campaigns that drive immediate results and long-term growth for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MarketingPaidAdsPage
