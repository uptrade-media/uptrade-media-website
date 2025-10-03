import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, Camera, MapPin, Home, Building, Plane, Eye, ArrowLeft, Phone, Star, TrendingUp, Award, Zap, Target } from 'lucide-react'
import { motion } from 'framer-motion'

function MediaAerialDronePage() {
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = React.useState(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 1500)
      })
      .catch((err) => {
        console.error("Form submit error:", err)
        alert("There was an error. Please try again.")
      })
  }

  const aerialServices = [
    {
      title: 'Real Estate Aerial Photography',
      description: 'Stunning aerial shots that showcase properties from unique perspectives, increasing listing appeal and buyer interest',
      features: ['Property overviews', 'Neighborhood context', 'Landscape features', 'Architectural details', 'Virtual tours', 'Marketing packages'],
      icon: <Home className="w-8 h-8" />
    },
    {
      title: 'Commercial Property Documentation',
      description: 'Professional aerial documentation for commercial real estate, construction, and development projects',
      features: ['Site surveys', 'Progress documentation', 'Marketing materials', 'Investment presentations', 'Development planning', 'Asset documentation'],
      icon: <Building className="w-8 h-8" />
    },
    {
      title: 'Video Production B-Roll',
      description: 'Cinematic aerial footage that adds production value and visual interest to your video projects',
      features: ['Establishing shots', 'Transition footage', 'Location reveals', 'Dynamic movement', 'Cinematic quality', 'Multiple angles'],
      icon: <Camera className="w-8 h-8" />
    },
    {
      title: 'Event & Venue Coverage',
      description: 'Capture events, venues, and gatherings from spectacular aerial perspectives',
      features: ['Event documentation', 'Venue showcases', 'Crowd shots', 'Facility overviews', 'Special occasions', 'Marketing content'],
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'Construction & Development',
      description: 'Document construction progress and showcase development projects with professional aerial imagery',
      features: ['Progress tracking', 'Site documentation', 'Before/after comparisons', 'Investor updates', 'Marketing materials', 'Time-lapse sequences'],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Tourism & Hospitality',
      description: 'Showcase destinations, hotels, and attractions with breathtaking aerial perspectives',
      features: ['Destination marketing', 'Hotel showcases', 'Attraction highlights', 'Tourism promotion', 'Venue marketing', 'Experience documentation'],
      icon: <MapPin className="w-8 h-8" />
    }
  ]

  const aerialBenefits = [
    {
      title: 'Unique Perspectives',
      description: 'Aerial photography provides viewpoints impossible to achieve from ground level, creating compelling visual narratives.',
      icon: <Plane className="w-8 h-8" />
    },
    {
      title: 'Increased Property Value',
      description: 'Real estate listings with aerial photos receive 68% more views and sell 32% faster than those without.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Enhanced Marketing Impact',
      description: 'Aerial content generates 300% more engagement on social media compared to ground-level photography.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Professional Quality',
      description: 'Licensed drone operators with professional equipment ensure high-quality, legally compliant aerial content.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Cost-Effective Solution',
      description: 'Drone photography is significantly more affordable than helicopter or airplane photography while delivering similar results.',
      icon: <Star className="w-8 h-8" />
    },
    {
      title: 'Versatile Applications',
      description: 'Aerial content works across multiple marketing channels - websites, social media, print, and video production.',
      icon: <Eye className="w-8 h-8" />
    }
  ]

  const equipmentSpecs = [
    {
      category: 'Camera Systems',
      specs: ['4K Ultra HD video recording', '20MP high-resolution stills', 'Professional color grading', 'RAW image capture', 'Multiple aspect ratios']
    },
    {
      category: 'Flight Capabilities',
      specs: ['35-minute flight time', '7km transmission range', 'GPS precision hovering', 'Obstacle avoidance', 'Weather resistance']
    },
    {
      category: 'Professional Features',
      specs: ['Gimbal stabilization', 'Automated flight modes', 'Waypoint navigation', 'Return-to-home safety', 'Live HD transmission']
    },
    {
      category: 'Legal Compliance',
      specs: ['FAA Part 107 certified', 'Fully insured operations', 'Airspace authorization', 'Safety protocols', 'Professional licensing']
    }
  ]

  const realEstateStats = [
    { metric: '68%', description: 'More views for listings with aerial photos' },
    { metric: '32%', description: 'Faster sales with aerial marketing' },
    { metric: '300%', description: 'Higher social media engagement' },
    { metric: '$15K', description: 'Average increase in property value perception' }
  ]

  const faqItems = [
    {
      question: 'Do you have the proper licenses and insurance for drone operations?',
      answer: 'Yes, we are fully FAA Part 107 certified for commercial drone operations and carry comprehensive liability insurance. We handle all airspace authorizations and ensure full compliance with federal, state, and local regulations for every flight.'
    },
    {
      question: 'What are the benefits of aerial photography for real estate?',
      answer: 'Aerial photography provides unique perspectives that showcase property features, neighborhood context, and surrounding amenities. Studies show listings with aerial photos receive 68% more views and sell 32% faster. Our blog post "How Aerial Shots Elevate Real Estate Marketing" provides detailed insights into these benefits.'
    },
    {
      question: 'Can you fly drones in all weather conditions?',
      answer: "We prioritize safety and quality, so we don't fly in adverse weather conditions like high winds, rain, or snow. We monitor weather conditions closely and will reschedule if necessary to ensure optimal results and safe operations."
    },
    {
      question: "What's the difference between drone photography and videography pricing?",
      answer: 'Pricing varies based on the scope of work, location, and deliverables. Photography sessions typically include multiple high-resolution images, while videography includes edited footage. We offer package deals that combine both services for maximum value.'
    },
    {
      question: 'How do aerial shots enhance video production projects?',
      answer: 'Aerial footage provides essential B-roll content that adds production value and visual interest. Establishing shots, transitions, and location reveals from aerial perspectives create cinematic quality that elevates any video project from corporate videos to commercials.'
    },
    {
      question: 'What file formats and resolutions do you provide?',
      answer: 'We deliver high-resolution images in multiple formats including RAW, JPEG, and TIFF. Video content is provided in 4K resolution with options for different aspect ratios and compression levels depending on your intended use and platform requirements.'
    },
    {
      question: 'How far in advance should I book aerial photography services?',
      answer: 'We recommend booking at least 1-2 weeks in advance to ensure availability and allow time for any necessary airspace authorizations. For large projects or specific date requirements, earlier booking is recommended.'
    },
    {
      question: 'Can you provide aerial photography for construction progress documentation?',
      answer: 'Absolutely! We specialize in construction progress documentation, providing regular aerial updates that track development phases. This is valuable for project management, investor updates, marketing materials, and creating time-lapse sequences of construction progress.'
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
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Professional Aerial & Drone Media
        </h1>

        <p className="text-xl mb-8 text-white/90">
          Elevate your visual storytelling with professional aerial photography and videography. From cinematic B-roll to marketing campaigns, our drone services provide unique perspectives that captivate audiences.
        </p>

        {/* Full-width CTA on mobile, auto on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" onClick={scrollToTop} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Book Aerial Shoot
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Right column — allow shrink at tiny widths */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative min-w-0"
      >
        {/* Keep ~16px gutters on very small screens; relax at sm+ */}
        <Card className="w-full max-w-[calc(100vw-2rem)] sm:max-w-none bg-white border-white/20 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Camera className="w-6 h-6 mr-3 text-[#4bbf39]" />
              Free Aerial Consultation
            </CardTitle>
            <p className="text-gray-600">
              Get expert advice on aerial photography and videography for your project.
            </p>
          </CardHeader>

          <CardContent className="space-y-4 min-w-0">
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
                name="aerial-consultation"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="aerial-consultation" />
                <p className="hidden">
                  <label>
                    Do not fill this out if you are human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent"
                  >
                    <option value="" disabled>Select project type</option>
                    <option>Real Estate Photography</option>
                    <option>Video Production</option>
                    <option>Commercial Property</option>
                    <option>Event Coverage</option>
                    <option>Construction Documentation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    placeholder="Tell us about your aerial photography needs..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 text-lg hover:from-[#39bfb0] hover:to-[#4bbf39]"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>

    {/* Stats row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
      {realEstateStats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">{stat.metric}</div>
          <div className="text-white/80 text-sm">{stat.description}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Real Estate Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Elevate Real Estate Marketing with Aerial Photography
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Real estate aerial photography isn't just about pretty pictures – it's about selling properties faster and for higher prices. Our professional drone photography showcases properties from perspectives that ground-level photos simply can't match.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3" />
                  <span className="text-gray-700">Showcase entire property and surrounding area</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3" />
                  <span className="text-gray-700">Highlight unique features and amenities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3" />
                  <span className="text-gray-700">Provide neighborhood context and location benefits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3" />
                  <span className="text-gray-700">Create compelling marketing materials</span>
                </div>
              </div>
              <Link to="/insights/drone-real-estate" onClick={scrollToTop}>
                <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:opacity-90 transition-opacity">
                  Read: How Aerial Shots Elevate Real Estate Marketing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/how_aerial_shots_elevate_real_estate_marketing.jpg"
                alt="Professional aerial photography showcasing real estate property from above, demonstrating how aerial shots elevate real estate marketing"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drone Media in Video Production Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/how_aerial_shots_elevate_real_estate_marketing.jpg"
                alt="Professional aerial photography showcasing real estate property from above, demonstrating how aerial shots elevate real estate marketing"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Drone Media in Video Production
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Aerial footage has become essential in modern video production, providing cinematic establishing shots, dynamic transitions, and breathtaking reveals that elevate storytelling. Our professional drone services integrate seamlessly with your video projects, delivering high-quality B-roll that adds production value and visual impact.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3 mt-1" />
                  <span className="text-gray-700">Cinematic establishing shots that set the scene</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3 mt-1" />
                  <span className="text-gray-700">Dynamic movement and smooth camera transitions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3 mt-1" />
                  <span className="text-gray-700">Location reveals and dramatic perspectives</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#4bbf39] mr-3 mt-1" />
                  <span className="text-gray-700">Professional 4K footage ready for post-production</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Aerial Photography Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real estate marketing to video production B-roll, our professional drone services provide unique perspectives that enhance your visual storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aerialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
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

      {/* Equipment & Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Equipment & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use state-of-the-art drone technology and maintain all necessary certifications for safe, legal, and professional aerial operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 text-center">
                      {spec.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {spec.specs.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {item}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Professional Aerial Photography
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drone photography delivers measurable results that enhance marketing effectiveness and business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aerialBenefits.map((benefit, index) => (
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our aerial photography and drone services.
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
            Ready to Elevate Your Marketing with Aerial Photography?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Let's capture stunning aerial perspectives that showcase your property, business, or project from angles that ground-level photography simply can't match.
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
                Book Your Aerial Session
                <Camera className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MediaAerialDronePage
