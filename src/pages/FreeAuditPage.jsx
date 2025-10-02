import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  Search, 
  TrendingUp, 
  Users, 
  Award, 
  ArrowRight,
  Target,
  BarChart3,
  Monitor,
  Globe,
  AlertTriangle,
  Clock,
  Star,
  Phone,
  Mail
} from 'lucide-react'
import { motion } from 'framer-motion'
import { 
  UnifiedForm, 
  FormInput, 
  FormSelect, 
  FormTextarea, 
  useFormState 
} from '@/components/ui/unified-form.jsx'

function FreeAuditPage() {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useFormState({
    name: '',
    email: '',
    phone: '',
    website: '',
    company: '',
    goals: '',
    currentChallenges: ''
  })

  const onFormSubmit = () => handleSubmit('free-audit')

  const auditBenefits = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Performance Analysis",
      description: "Comprehensive review of your search engine optimization, including keyword rankings, meta tags, and technical SEO factors."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Experience Evaluation",
      description: "Assessment of your website's usability, navigation structure, and conversion optimization opportunities."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Metrics",
      description: "Analysis of page load speeds, mobile responsiveness, and Core Web Vitals that impact your search rankings."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Conversion Optimization",
      description: "Identification of barriers preventing visitors from becoming customers and actionable improvement recommendations."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Competitive Analysis",
      description: "Comparison with your top competitors to identify opportunities for gaining market advantage."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Local SEO Assessment",
      description: "Review of your local search presence, Google Business Profile optimization, and citation consistency."
    }
  ]

  const commonIssues = [
    {
      icon: <AlertTriangle className="w-5 h-5 text-#EF4444" />,
      issue: "Slow Loading Speed",
      impact: "53% of mobile users abandon sites that take longer than 3 seconds to load"
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-#EF4444" />,
      issue: "Poor Mobile Experience",
      impact: "60% of searches now happen on mobile devices"
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-#EF4444" />,
      issue: "Missing SEO Elements",
      impact: "Websites lose 70% of potential organic traffic without proper optimization"
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-#EF4444" />,
      issue: "Weak Call-to-Actions",
      impact: "Poor CTAs can reduce conversion rates by up to 80%"
    }
  ]

  const whatYouGet = [
    "Detailed 15-page audit report",
    "SEO performance scorecard",
    "UX/UI improvement recommendations",
    "Technical issues identification",
    "Competitor comparison analysis",
    "Prioritized action plan",
    "30-minute strategy consultation"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/about_page_background_2.svg" 
            alt="Free marketing audit - Uptrade Media Cincinnati digital marketing analysis background" 
            className="w-full h-full object-cover object-center"
            style={{ minWidth: '100%', minHeight: '100%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#4bbf39]/90 to-[#39bfb0]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Award className="w-4 h-4 mr-2" />
                Comprehensive Website Analysis
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Get Your Free Website Audit & Unlock Hidden Growth Opportunities
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Discover exactly what's holding your website back from ranking higher, converting better, and generating more leads. Our comprehensive audit reveals the specific issues impacting your online success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Delivered within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>No obligations or commitments</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <UnifiedForm
                title="Request Your Free Audit"
                description="Get a comprehensive analysis of your website's performance"
                formName="free-audit"
                onSubmit={onFormSubmit}
                submitText="Get My Free Website Audit"
                isSubmitting={isSubmitting}
                isSubmitted={isSubmitted}
                successMessage="Thank you! We'll send your free website audit within 24 hours."
                className="bg-white text-gray-900 shadow-2xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="Full Name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(513) 555-0123"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Website URL"
                    name="website"
                    type="url"
                    required
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>

                <FormInput
                  label="Company Name"
                  name="company"
                  type="text"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                />

                <FormSelect
                  label="Primary Goals"
                  name="goals"
                  placeholder="Select your main goal"
                  options={[
                    'Increase Website Traffic',
                    'Improve Search Rankings',
                    'Generate More Leads',
                    'Boost Online Sales',
                    'Improve User Experience',
                    'Other'
                  ]}
                  value={formData.goals}
                  onChange={handleInputChange}
                />

                <FormTextarea
                  label="Current Challenges (Optional)"
                  name="currentChallenges"
                  rows={3}
                  placeholder="Tell us about any specific issues you're facing with your website..."
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                />
              </UnifiedForm>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Website Audits Matter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Website Audits Are Critical for Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your website is your most important marketing asset. A comprehensive audit reveals the hidden issues that prevent you from maximizing its potential and achieving your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-lg flex items-center justify-center text-white mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Common Issues That Kill Website Performance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Most websites suffer from critical issues that dramatically impact their ability to attract visitors, engage users, and convert leads. Our audit identifies these problems and provides clear solutions.
              </p>
              
              <div className="space-y-6">
                {commonIssues.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.issue}</h3>
                      <p className="text-gray-600">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">What You'll Receive</CardTitle>
                  <CardDescription className="text-white/90">
                    Your comprehensive audit includes:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {whatYouGet.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3 text-white" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Fast Turnaround</span>
                    </div>
                    <p className="text-sm text-white/90">
                      Receive your detailed audit report within 24 hours of submission
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Real Results from Our Website Audits
            </h2>
            <p className="text-xl text-gray-600">
              See how our comprehensive audits have transformed businesses
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Queen City Riverboats</h3>
                  <p className="text-gray-600 mb-6">
                    After implementing our audit recommendations, Queen City Riverboats saw dramatic improvements in their online presence and lead generation.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">1,084.4%</div>
                        <div className="text-sm text-gray-600">Traffic Increase</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-[#4bbf39]" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#4bbf39]">6 Months</div>
                        <div className="text-sm text-gray-600">To Achieve Results</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Services Implemented:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Website redesign and optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Comprehensive SEO strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Professional media creation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Social media management
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Unlock Your Website's Potential?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get your comprehensive website audit today and discover exactly what's holding your business back from online success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3"
              onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Audit Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-white/80">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              <span>No obligations</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>24-hour delivery</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span>100% free</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FreeAuditPage;


