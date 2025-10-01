import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, ArrowLeft, Phone, Brush, Palette, Lightbulb, TrendingUp, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'

function DesignBrandingPage() {
  const brandingBenefits = [
    {
      title: 'Stronger Brand Recognition',
      description: 'A cohesive brand identity makes your business memorable and easily recognizable.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Increased Trust & Credibility',
      description: 'Professional branding signals reliability and expertise, building customer confidence.',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: 'Competitive Differentiation',
      description: 'Stand out in a crowded market with a unique visual and verbal identity that resonates.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Attract Ideal Customers',
      description: 'A well-defined brand attracts customers who align with your values and offerings.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Enhanced Marketing Effectiveness',
      description: 'Consistent branding across all channels amplifies your marketing efforts and impact.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Higher Perceived Value',
      description: 'A strong brand allows you to command premium pricing and positions you as a leader.',
      icon: <Palette className="w-8 h-8" />
    },
  ]

  const faqItems = [
    {
      question: 'What is included in your brand identity package?',
      answer: 'Our brand identity package typically includes logo design, brand guidelines (color palette, typography, imagery style), business card design, and templates for essential marketing materials.'
    },
    {
      question: 'How long does the branding process take?',
      answer: 'The branding process usually takes between 4 to 8 weeks, depending on the scope and complexity of the project, including research, concept development, revisions, and finalization.'
    },
    {
      question: 'Can you redesign an existing logo or brand?',
      answer: 'Yes, we offer brand refresh and redesign services. We can evolve your current brand to better reflect your business growth, new market positioning, or modern aesthetic while retaining core recognition.'
    },
    {
      question: 'Why are brand guidelines important?',
      answer: 'Brand guidelines ensure consistency across all your communications. They provide clear rules for using your logo, colors, fonts, and messaging, helping to maintain a unified and professional brand image.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
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
              <div className="bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full px-4 py-2 inline-flex items-center mb-4">
                <Palette className="w-4 h-4 mr-2" />
                Brand Identity Design
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Brand Identity & Logo Design in Cincinnati
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Create a powerful brand identity that resonates with your audience and drives business growth. From logo design to comprehensive brand guidelines, we craft visual identities that make lasting impressions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    Start Your Brand Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+15133310555">
                  <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                    <Phone className="w-5 h-5 mr-2" />
                    (513) 331-0555
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-white/80">Brands Created</div>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 text-white/90 mb-2" />
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-white/80">Client Satisfaction</div>
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
                    <Brush className="w-6 h-6 mr-3 text-[#4bbf39]" />
                    Free Brand Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Get expert insights on your brand strategy and discover how professional design can transform your business.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your Business"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Restaurant, Law Firm"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(513) 555-0123"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-#4bbf39 focus:border-transparent">
                      <option value="">Select project type</option>
                      <option value="new-brand">New Brand Identity</option>
                      <option value="rebrand">Brand Refresh/Rebrand</option>
                      <option value="logo-only">Logo Design Only</option>
                      <option value="brand-guidelines">Brand Guidelines</option>
                      <option value="full-package">Complete Brand Package</option>
                    </select>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg hover:from-[#39bfb0] hover:to-[#4bbf39]">
                    Get Free Brand Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Free consultation • No obligation • Expert insights
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Crafting Brands That Resonate and Endure
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your brand is more than just a logo; it's the entire experience your customers have with your business. At Uptrade Media, we specialize in creating powerful and cohesive brand identities that capture your essence, communicate your values, and leave a lasting impression.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From initial concept and logo design to comprehensive brand guidelines and application across all touchpoints, we ensure your brand speaks volumes and stands out in a competitive marketplace. Let us help you build a brand that truly connects.
              </p>
              <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                View Our Branding Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trusted by Leading Businesses</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/The_Marina_at_Manhattan_Harbour_logo.svg" 
                      alt="The Marina at Manhattan Harbour"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/Queen_City_Riverboats_Logo.svg" 
                      alt="Queen City Riverboats"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/Blue_Cattys_Bar_and_Grille_Logo.png" 
                      alt="Blue Catty's Bar and Grille"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/Sexton_Law_Logo.svg" 
                      alt="Sexton Law"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/Gunning_Homes_Logo.svg" 
                      alt="Gunning Homes"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/Adams_Real_Estate_Advisors_Logo.svg" 
                      alt="Adams Real Estate Advisors"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/Nikki_Hayden_Realtor_Logo.svg" 
                      alt="Nikki Hayden Realtor"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/Prost_Bellevue_Tavern_Logo.svg" 
                      alt="Prost Bellevue Tavern"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img 
                      src="/Client_logos/3CDC_Logo.svg" 
                      alt="3CDC"
                      className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-6 text-sm">
                  From restaurants to real estate, law firms to luxury developments - we create brands that resonate across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Brand Identity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to complete brand implementation, we provide everything you need to establish a powerful brand presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                <Palette className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold mb-3">Logo Design</CardTitle>
              <CardContent className="text-gray-600 p-0">
                Custom logo design that captures your brand essence and works across all applications, from business cards to billboards.
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                <Brush className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold mb-3">Brand Guidelines</CardTitle>
              <CardContent className="text-gray-600 p-0">
                Comprehensive style guides covering logo usage, color palettes, typography, and brand voice to ensure consistency.
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold mb-3">Business Card Design</CardTitle>
              <CardContent className="text-gray-600 p-0">
                Professional business card design that makes a memorable first impression and reinforces your brand identity.
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                <Lightbulb className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold mb-3">Brand Strategy</CardTitle>
              <CardContent className="text-gray-600 p-0">
                Strategic brand positioning and messaging that differentiates you from competitors and resonates with your target audience.
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold mb-3">Brand Refresh</CardTitle>
              <CardContent className="text-gray-600 p-0">
                Modernize and evolve your existing brand to better reflect your growth and changing market position.
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold mb-3">Marketing Materials</CardTitle>
              <CardContent className="text-gray-600 p-0">
                Branded marketing collateral including brochures, flyers, presentations, and digital assets that maintain brand consistency.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Brand Identity Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic, collaborative journey from initial discovery to a compelling brand presence that drives business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery & Research</h3>
              <p className="text-gray-600 mb-4">
                We dive deep into your business, industry, competitors, and target audience to understand what makes your brand unique.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Brand audit & analysis</li>
                <li>• Competitor research</li>
                <li>• Target audience insights</li>
                <li>• Market positioning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy & Concept</h3>
              <p className="text-gray-600 mb-4">
                Based on our research, we develop a comprehensive brand strategy and create initial design concepts that align with your goals.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Brand strategy development</li>
                <li>• Creative brief creation</li>
                <li>• Mood boards & concepts</li>
                <li>• Style direction</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">Design & Development</h3>
              <p className="text-gray-600 mb-4">
                Our designers create your logo, select colors and typography, and develop all visual elements that will define your brand.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Logo design & refinement</li>
                <li>• Color palette selection</li>
                <li>• Typography choices</li>
                <li>• Visual element creation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white text-2xl font-bold">
                04
              </div>
              <h3 className="text-xl font-bold mb-4">Guidelines & Launch</h3>
              <p className="text-gray-600 mb-4">
                We create comprehensive brand guidelines and help you implement your new identity across all touchpoints for maximum impact.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Brand guidelines creation</li>
                <li>• Asset preparation</li>
                <li>• Implementation support</li>
                <li>• Launch strategy</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique branding challenges and opportunities across different industries, allowing us to create targeted solutions that resonate with your specific market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg">
              <CardTitle className="text-xl font-bold mb-3 text-[#4bbf39]">Restaurants & Food Service</CardTitle>
              <CardContent className="text-gray-600 p-0">
                <p className="mb-4">Creating appetizing brand identities that capture the essence of your culinary experience and attract hungry customers.</p>
                <ul className="text-sm space-y-1">
                  <li>• Menu design & branding</li>
                  <li>• Restaurant atmosphere design</li>
                  <li>• Food photography integration</li>
                  <li>• Takeout & delivery branding</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg">
              <CardTitle className="text-xl font-bold mb-3 text-[#4bbf39]">Real Estate & Development</CardTitle>
              <CardContent className="text-gray-600 p-0">
                <p className="mb-4">Professional branding that builds trust and showcases properties in the best light, from individual agents to major developments.</p>
                <ul className="text-sm space-y-1">
                  <li>• Agent personal branding</li>
                  <li>• Property development identity</li>
                  <li>• Luxury market positioning</li>
                  <li>• Marketing material design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg">
              <CardTitle className="text-xl font-bold mb-3 text-[#4bbf39]">Legal & Professional Services</CardTitle>
              <CardContent className="text-gray-600 p-0">
                <p className="mb-4">Sophisticated branding that conveys expertise, trustworthiness, and professionalism to attract and retain clients.</p>
                <ul className="text-sm space-y-1">
                  <li>• Law firm branding</li>
                  <li>• Professional credibility design</li>
                  <li>• Practice area specialization</li>
                  <li>• Client communication materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg">
              <CardTitle className="text-xl font-bold mb-3 text-[#4bbf39]">Healthcare & Medical</CardTitle>
              <CardContent className="text-gray-600 p-0">
                <p className="mb-4">Compassionate and professional branding that builds patient trust and communicates care quality and expertise.</p>
                <ul className="text-sm space-y-1">
                  <li>• Medical practice branding</li>
                  <li>• Patient-focused design</li>
                  <li>• Healthcare compliance</li>
                  <li>• Wellness brand positioning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg">
              <CardTitle className="text-xl font-bold mb-3 text-[#4bbf39]">Technology & Startups</CardTitle>
              <CardContent className="text-gray-600 p-0">
                <p className="mb-4">Modern, innovative branding that positions your tech company as a leader and attracts both customers and investors.</p>
                <ul className="text-sm space-y-1">
                  <li>• Startup brand development</li>
                  <li>• Tech industry positioning</li>
                  <li>• Innovation-focused design</li>
                  <li>• Scalable brand systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg">
              <CardTitle className="text-xl font-bold mb-3 text-[#4bbf39]">Retail & E-commerce</CardTitle>
              <CardContent className="text-gray-600 p-0">
                <p className="mb-4">Compelling brand identities that drive sales, build customer loyalty, and work seamlessly across physical and digital channels.</p>
                <ul className="text-sm space-y-1">
                  <li>• Retail brand development</li>
                  <li>• E-commerce optimization</li>
                  <li>• Product packaging design</li>
                  <li>• Omnichannel consistency</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why a Strong Brand Identity is Essential
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-crafted brand identity is the foundation of effective marketing and lasting customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingBenefits.map((benefit, index) => (
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
            Ready to Define Your Brand's Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and discover how powerful brand identity can elevate your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/90 hover:text-[#4bbf39] backdrop-blur-sm px-8 py-3">
              Call (513) 331-0555
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesignBrandingPage
