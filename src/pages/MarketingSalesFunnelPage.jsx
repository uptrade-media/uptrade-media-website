import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, TrendingUp, Target, Users, Zap, ArrowLeft, Phone, Award, BarChart3, Funnel, } from 'lucide-react'
import { motion } from 'framer-motion'

function MarketingSalesFunnelPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [submitting, setSubmitting] = useState(false);
const [submitted, setSubmitted] = useState(false);

const handleSubscribe = useCallback(async (e) => {
  e.preventDefault();
  setSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    // Netlify requires URL-encoded body
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    setSubmitted(true);
    form.reset();
  } catch (err) {
    console.error("Subscription failed:", err);
    // optional: show a toast or inline error state
  } finally {
    setSubmitting(false);
  }
}, []);

  const funnelStages = [
    {
      stage: "Awareness",
      title: "Attract Your Ideal Prospects",
      description: "Drive targeted traffic through SEO, content marketing, social media, and paid advertising to reach potential customers.",
      tactics: ["Content Marketing", "SEO Optimization", "Social Media Ads", "Google Ads", "Influencer Partnerships"],
      icon: <Users className="w-8 h-8" />
    },
    {
      stage: "Interest", 
      title: "Capture & Nurture Leads",
      description: "Convert visitors into leads with compelling lead magnets, landing pages, and email capture strategies.",
      tactics: ["Lead Magnets", "Landing Pages", "Email Opt-ins", "Webinars", "Free Consultations"],
      icon: <Target className="w-8 h-8" />
    },
    {
      stage: "Consideration",
      title: "Build Trust & Authority",
      description: "Nurture leads with valuable content, case studies, and testimonials that demonstrate your expertise.",
      tactics: ["Email Sequences", "Case Studies", "Testimonials", "Product Demos", "Educational Content"],
      icon: <Award className="w-8 h-8" />
    },
    {
      stage: "Purchase",
      title: "Convert Leads to Customers",
      description: "Optimize the buying process with compelling offers, urgency, and seamless checkout experiences.",
      tactics: ["Sales Pages", "Special Offers", "Urgency Elements", "Payment Processing", "Follow-up Sequences"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      stage: "Retention",
      title: "Maximize Customer Value",
      description: "Increase customer lifetime value through upsells, cross-sells, and exceptional customer experience.",
      tactics: ["Upsell Campaigns", "Customer Support", "Loyalty Programs", "Referral Systems", "Feedback Loops"],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ]

  const funnelTypes = [
    {
      title: "Lead Generation Funnels",
      description: "Capture high-quality leads and nurture them into paying customers",
      features: ["Lead magnets", "Landing pages", "Email automation", "Lead scoring", "CRM integration"],
      bestFor: "B2B companies, consultants, service providers"
    },
    {
      title: "E-commerce Sales Funnels", 
      description: "Drive product sales and increase average order value",
      features: ["Product pages", "Cart abandonment", "Upsell sequences", "Customer reviews", "Retargeting"],
      bestFor: "Online retailers, product-based businesses"
    },
    {
      title: "Webinar Funnels",
      description: "Build authority and sell high-ticket products or services",
      features: ["Registration pages", "Email reminders", "Live presentations", "Special offers", "Follow-up sequences"],
      bestFor: "Coaches, consultants, course creators"
    },
    {
      title: "Application Funnels",
      description: "Pre-qualify prospects for high-value services",
      features: ["Application forms", "Qualification process", "Discovery calls", "Proposal delivery", "Contract signing"],
      bestFor: "Agencies, high-ticket services, B2B sales"
    }
  ]

  const successMetrics = [
    { metric: "340%", description: "Average increase in conversion rates" },
    { metric: "67%", description: "Reduction in customer acquisition cost" },
    { metric: "89%", description: "Improvement in lead quality" },
    { metric: "245%", description: "Increase in customer lifetime value" }
  ]

  const faqItems = [
    {
      question: "What is a sales funnel and why do I need one?",
      answer: "A sales funnel is a systematic process that guides potential customers from initial awareness to purchase and beyond. It's essential because it helps you convert more visitors into customers, reduces acquisition costs, and increases customer lifetime value by providing a structured path to purchase."
    },
    {
      question: "How long does it take to build a sales funnel?",
      answer: "The timeline depends on complexity, but most sales funnels take 4-8 weeks to build and optimize. This includes strategy development, content creation, technical setup, testing, and initial optimization based on performance data."
    },
    {
      question: "What's included in your sales funnel service?",
      answer: "Our comprehensive service includes funnel strategy, landing page design, email automation setup, lead magnets, sales copy, technical integration, analytics setup, and ongoing optimization. We handle everything from concept to conversion."
    },
    {
      question: "How do you measure funnel success?",
      answer: "We track key metrics including conversion rates at each stage, cost per acquisition, customer lifetime value, email open/click rates, and overall ROI. We provide detailed monthly reports showing performance and optimization opportunities."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Yes, we work with all major CRM systems, email platforms, payment processors, and analytics tools. Common integrations include HubSpot, Salesforce, Mailchimp, Stripe, Google Analytics, and Facebook Pixel."
    },
    {
      question: "What makes your funnels different?",
      answer: "Our funnels are built on data-driven strategies, psychological triggers, and proven conversion principles. We focus on the entire customer journey, not just the sale, ensuring long-term success and customer retention."
    },
    {
      question: "Do you provide ongoing optimization?",
      answer: "Absolutely. Sales funnels require continuous testing and optimization. We provide ongoing A/B testing, performance analysis, and improvements to maximize your conversion rates and ROI over time."
    },
    {
      question: "What industries do you work with?",
      answer: "We've successfully built funnels for various industries including professional services, e-commerce, SaaS, healthcare, real estate, education, and B2B companies. Our strategies adapt to any business model."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/marketing" className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
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
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Sales Funnel Creation & Optimization
        </h1>
        <p className="text-xl mb-8 text-white/90">
          Transform your website visitors into paying customers with strategically designed sales funnels that guide prospects through every stage of the buying journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" onClick={scrollToTop}>
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Build My Funnel
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <a href="tel:+15133310555">
            <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              (513) 331-0555
            </Button>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <img 
          src="/LandingPageImage.webp"
          alt="Professional sales funnel landing page example showing conversion optimization"
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </motion.div>
    </div>

    {/* Success Metrics */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
      {successMetrics.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.metric}</div>
          <div className="text-white/80 text-sm">{stat.description}</div>
        </motion.div>
      ))}
    </div>

{/* Aggressive CTA - Subscribe to Insights */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}          // ⬅️ animate on mount
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl"
>
  {submitted ? (
    <div className="text-center py-6">
      <CheckCircle className="mx-auto text-white mb-4" size={48} />
      <h3 className="text-xl font-bold mb-2">You’re In</h3>
      <p className="text-white/90">
        Thanks for subscribing to <span className="font-semibold">Uptrade Media Insights</span>.  
        Expect bold strategies and proven tactics delivered straight to your inbox.
      </p>
    </div>
  ) : (
    <>
      <h3 className="text-2xl font-bold mb-4">
        Don’t Just Watch Competitors Grow. Outpace Them.
      </h3>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        Get the exact tactics behind our <strong>340%+ average conversion lifts</strong> delivered to your inbox.
      </p>

     <form
  name="insights-subscribe"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={handleSubscribe}
  className="flex flex-col gap-4 justify-center items-stretch"
>
  {/* required for Netlify */}
  <input type="hidden" name="form-name" value="insights-subscribe" />
  <p style={{ display: "none" }}>
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>

  {/* Input + Button Row */}
  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-stretch">
    <input
  type="email"
  name="email"
  required
  placeholder="Enter your email"
  className="h-10 px-4 rounded-lg text-gray-900 w-full sm:w-96 bg-white
             focus:outline-none focus:ring-2 focus:ring-[#4bbf39]
             border border-transparent focus:border-[#4bbf39] transition-all"
/>

<Button
  type="submit"
  size="lg"
  disabled={submitting}
  className="h-10 px-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white
             hover:bg-white/90 hover:text-[#4bbf39] transition-all duration-200 shadow-xs
             disabled:opacity-60 disabled:cursor-not-allowed"
>
  {submitting ? "Subscribing..." : "Subscribe Now"}
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>

  </div>

  {/* Consent Checkbox */}
  <div className="flex items-start justify-center gap-2 text-left mt-2 max-w-xl mx-auto">
    <input
      type="checkbox"
      name="consent"
      required
      className="mt-1 h-4 w-4 text-[#4bbf39] border-gray-300 rounded focus:ring-[#4bbf39]"
    />
    <label className="text-sm text-white/90">
      I agree to receive communications, marketing updates, and promotional content from
      <span className="font-semibold"> Uptrade Media</span>. You can unsubscribe anytime.
    </label>
  </div>
</form>

    </>
  )}
</motion.div>

  </div>
</section>

      {/* Funnel Stages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The Complete Sales Funnel Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic approach covers every stage of the customer journey, from initial awareness to long-term retention and growth.
            </p>
          </div>

          <div className="space-y-8">
            {funnelStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="text-[#4bbf39] mr-4">{stage.icon}</div>
                        <div>
                          <div className="text-sm font-bold text-[#4bbf39] mb-1">{stage.stage}</div>
                          <h3 className="text-2xl font-bold">{stage.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{stage.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Tactics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {stage.tactics.map((tactic, tacticIndex) => (
                            <span key={tacticIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tactic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={`text-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-6xl font-bold text-[#4bbf39] mb-4">0{index + 1}</div>
                  <Funnel className="w-24 h-24 text-gray-300 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Funnel Types We Specialize In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every business is unique. We create custom sales funnels tailored to your specific industry, audience, and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {funnelTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-gray-600">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Best For:</h4>
                        <p className="text-sm text-gray-600">{type.bestFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
            Ready to Build Your High-Converting Sales Funnel?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create a strategic sales funnel that turns your website visitors into loyal customers and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={scrollToTop}>
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Start My Funnel Project
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
        </div>
      </section>
    </div>
  )
}

export default MarketingSalesFunnelPage
