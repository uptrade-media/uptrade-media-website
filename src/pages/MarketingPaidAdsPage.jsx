import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import {
  CheckCircle,
  ArrowRight,
  DollarSign,
  Target,
  TrendingUp,
  Lightbulb,
  Users,
  BarChart3,
  Phone,
  Award,
  Search,
  MousePointer,
  Eye,
  Zap,
  PieChart,
  ArrowLeft,
} from "lucide-react";

function MarketingPaidAdsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paidAdsServices = [
    {
      title: "Google Ads Management",
      description:
        "Comprehensive Google Ads campaigns including Search, Display, Shopping, and YouTube advertising.",
      features: [
        "Search Campaigns",
        "Display Advertising",
        "Shopping Ads",
        "YouTube Ads",
        "Performance Max",
        "Local Campaigns",
      ],
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Meta Advertising (Facebook & Instagram)",
      description:
        "Strategic social media advertising across Facebook and Instagram with advanced targeting.",
      features: [
        "Facebook Ads",
        "Instagram Ads",
        "Stories Advertising",
        "Reels Promotion",
        "Audience Targeting",
        "Retargeting Campaigns",
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "LinkedIn Advertising",
      description:
        "Professional B2B advertising campaigns targeting decision-makers and industry professionals.",
      features: [
        "Sponsored Content",
        "Message Ads",
        "Dynamic Ads",
        "Lead Gen Forms",
        "Account Targeting",
        "Lookalike Audiences",
      ],
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Campaign Optimization & Analytics",
      description:
        "Continuous monitoring, testing, and optimization to maximize your advertising ROI.",
      features: [
        "A/B Testing",
        "Conversion Tracking",
        "Bid Optimization",
        "Audience Refinement",
        "Performance Analysis",
        "ROI Reporting",
      ],
      icon: <BarChart3 className="w-8 h-8" />,
    },
  ];

  const campaignTypes = [
    {
      title: "Search Advertising",
      description:
        "Capture high intent customers actively searching for your products or services.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Display Campaigns",
      description: "Build brand awareness with visually compelling ads across the web.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Social Media Ads",
      description:
        "Engage audiences on their favorite social platforms with targeted content.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Retargeting Campaigns",
      description: "Re engage website visitors and convert them into customers.",
      icon: <MousePointer className="w-6 h-6" />,
    },
    {
      title: "Shopping Ads",
      description:
        "Showcase products directly in search results with rich product information.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Video Advertising",
      description:
        "Capture attention with engaging video content across YouTube and social platforms.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const paidAdsProcess = [
    {
      step: "01",
      title: "Strategy & Planning",
      description:
        "Comprehensive analysis of your business goals, target audience, and competitive landscape.",
      deliverables: [
        "Campaign Strategy",
        "Audience Research",
        "Competitor Analysis",
        "Budget Allocation Plan",
      ],
    },
    {
      step: "02",
      title: "Campaign Setup",
      description:
        "Professional campaign creation with optimized targeting, ad copy, and conversion tracking.",
      deliverables: [
        "Campaign Structure",
        "Ad Creation",
        "Tracking Setup",
        "Landing Page Optimization",
      ],
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description:
        "Campaign launch with continuous monitoring and real time optimization for maximum performance.",
      deliverables: [
        "Campaign Launch",
        "Performance Monitoring",
        "Daily Optimizations",
        "Bid Management",
      ],
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description:
        "Data driven optimization and scaling strategies to maximize ROI and business growth.",
      deliverables: ["Performance Reports", "A/B Test Results", "Scaling Strategies", "ROI Analysis"],
    },
  ];

  const paidAdsBenefits = [
    {
      title: "Instant Visibility",
      description:
        "Get your brand in front of your target audience immediately, driving quick results.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Precise Targeting",
      description:
        "Reach specific demographics, interests, and behaviors with high accuracy.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Measurable ROI",
      description:
        "Track every dollar spent and every conversion to prove return on investment.",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Scalable Growth",
      description:
        "Adjust budgets and campaigns to scale your marketing as your business grows.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Brand Awareness",
      description: "Increase recognition and recall across major digital platforms.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Competitive Edge",
      description: "Dominate search results and social feeds in your market.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
  ];

  const platformExpertise = [
    {
      platform: "Google Ads",
      description:
        "Certified Google Ads specialists managing Search, Display, Shopping, and YouTube campaigns.",
      capabilities: [
        "Search Campaigns",
        "Display Network",
        "Shopping Ads",
        "YouTube Advertising",
        "Performance Max",
        "Local Campaigns",
      ],
    },
    {
      platform: "Meta (Facebook & Instagram)",
      description:
        "Advanced Meta advertising strategies for maximum reach and engagement.",
      capabilities: [
        "Facebook Ads",
        "Instagram Ads",
        "Stories & Reels",
        "Messenger Ads",
        "Audience Network",
        "Catalog Ads",
      ],
    },
    {
      platform: "LinkedIn Ads",
      description:
        "B2B focused LinkedIn advertising for professional audiences and lead generation.",
      capabilities: [
        "Sponsored Content",
        "Message Ads",
        "Dynamic Ads",
        "Lead Gen Forms",
        "Event Ads",
        "Follower Ads",
      ],
    },
    {
      platform: "TikTok Ads",
      description:
        "Creative TikTok campaigns targeting younger demographics and viral content.",
      capabilities: [
        "In Feed Ads",
        "Brand Takeover",
        "TopView Ads",
        "Branded Effects",
        "Spark Ads",
        "Collection Ads",
      ],
    },
  ];

  const faqItems = [
    {
      question: "What platforms do you manage paid ads on?",
      answer:
        "We manage Google Ads, Meta, LinkedIn, TikTok, and more. We tailor platform mix to your audience and goals.",
    },
    {
      question: "How do you determine the budget for campaigns?",
      answer:
        "We align budget with objectives and expected ROI, then allocate across platforms and campaign types for impact.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "You can see activity the same day a campaign launches. Optimization ramps in the first two to four weeks.",
    },
    {
      question: "How often do you report on performance?",
      answer:
        "We deliver weekly or bi weekly reporting with impressions, clicks, conversions, CPA, and ROAS, plus strategy calls.",
    },
    {
      question: "Do you create ad creative?",
      answer:
        "Yes. Our designers and copywriters produce on brand creative that converts on each platform.",
    },
    {
      question: "What is your optimization approach?",
      answer:
        "Continuous testing, audience refinement, bid optimization, and creative rotation based on data.",
    },
    {
      question: "Do you optimize landing pages?",
      answer:
        "Yes. We align messaging, improve speed and mobile experience, and tighten conversion paths.",
    },
    {
      question: "What ROI can I expect?",
      answer:
        "Performance varies by market, but well optimized campaigns commonly target three to five times ROAS.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = React.useState(null);

  // Netlify form state
  const [submitted, setSubmitted] = React.useState(false)

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


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

{/* Hero */}
<section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit bg-white/20 backdrop-blur-sm border-white/30 text-white mb-4">
          Paid Advertising Services
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">Paid Ads Management</h1>

        <p className="text-xl mb-8 text-white/90">
          Google, Meta, LinkedIn, TikTok. Maximize ROI with targeted campaigns and expert optimization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Full-width on mobile, auto on sm+ */}
          <Link to="/contact" onClick={scrollToTop} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto inline-flex items-center bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Get Your Free Ad Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <a href="tel:+15133310555" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200">
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
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle className="mx-auto text-green-600 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">Thank you</h3>
                <p className="text-gray-600">We received your request and will follow up shortly.</p>
              </div>
            ) : (
              <form
                name="paid-ads-audit"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} // ⬅️ keep your JS submit
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="paid-ads-audit" />
                <p hidden>
                  <label>Don’t fill this out: <input name="bot-field" /></label>
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
                      autoComplete="email"
                      name="email"
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
                      autoComplete="tel"
                      name="phone"
                      placeholder="(513) 555-0123"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Ad Budget</label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Advertising Platform</label>
                  <select
                    name="platform"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                  >
                    <option value="">Select Primary Platform</option>
                    <option value="google">Google Ads</option>
                    <option value="facebook">Facebook/Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="tiktok">TikTok</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white py-3"
                >
                  Get Free Ad Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>


      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Manage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End to end campaign strategy, build, and optimization across the platforms that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paidAdsServices.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white flex items-center justify-center mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-600 mb-4">{svc.description}</p>
                  <ul className="space-y-1">
                    {svc.features.map((f, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 mt-1 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campaign Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Match campaign type to intent and funnel stage for efficient growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTypes.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                  {t.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-600">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Paid Ads Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to build, optimize, and scale campaigns for maximum ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {paidAdsProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-l-4 border-l-[#4bbf39] p-6 text-center">
                  <div className="text-3xl font-bold text-[#4bbf39] mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="text-left space-y-1">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified specialists across all major platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformExpertise.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.platform}</h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <ul className="text-left space-y-1">
                    {platform.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Invest in Paid Ads Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional management turns ad spend into predictable pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidAdsBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Get answers to common questions about paid ads.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card
                  className="cursor-pointer hover:shadow-md transition-shadow duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </CardTitle>
                      <ArrowRight
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          expandedFaq === index ? "rotate-90" : ""
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Maximize Your ROI with Paid Ads
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Let us build high performance campaigns that drive measurable results. Contact us for a free ad audit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                Get Your Free Ad Audit
                <PieChart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Hidden static form for Netlify build bot */}
      <form name="paid-ads-audit" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="paid-ads-audit" />
        <input name="name" />
        <input name="email" />
        <input name="phone" />
        <select name="budget"><option>1000-2500</option></select>
        <select name="platform"><option>google</option></select>
      </form>

    </div>
  );
}

export default MarketingPaidAdsPage;
