import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, Camera, Image, Users, Sun, Star, Lightbulb, ArrowLeft, Phone, Mail, Target, Award, Eye, Palette, Building, Utensils, Scale, Anchor } from 'lucide-react'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'

function MediaPhotographyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    details: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const form = e.target
      const formData = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      
      if (response.ok) {
        alert('Thank you! We\'ll be in touch within 24 hours to discuss your photography project.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          details: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  const photographyServices = [
    {
      title: 'Corporate & Business Photography',
      description: 'Professional headshots, team photos, and corporate event coverage that builds trust and credibility.',
      icon: <Building className="w-8 h-8" />,
      features: ['Executive headshots', 'Team photography', 'Corporate events', 'Office environments', 'Company culture shots', 'Annual reports']
    },
    {
      title: 'Product Photography',
      description: 'High-quality product images that showcase details and drive sales across all platforms.',
      icon: <Camera className="w-8 h-8" />,
      features: ['E-commerce photography', 'Lifestyle product shots', 'Detail and macro photography', 'White background images', 'Creative compositions', 'Multi-angle coverage']
    },
    {
      title: 'Food & Restaurant Photography',
      description: 'Mouth-watering food photography that makes your dishes irresistible to customers.',
      icon: <Utensils className="w-8 h-8" />,
      features: ['Menu photography', 'Restaurant ambiance', 'Chef portraits', 'Food styling', 'Behind-the-scenes', 'Social media content']
    },
    {
      title: 'Event Photography',
      description: 'Comprehensive event coverage capturing key moments, networking, and brand presence.',
      icon: <Users className="w-8 h-8" />,
      features: ['Grand openings', 'Corporate events', 'Trade shows', 'Conferences', 'Award ceremonies', 'Networking events']
    },
    {
      title: 'Legal & Professional Services',
      description: 'Professional photography for law firms, medical practices, and professional service providers.',
      icon: <Scale className="w-8 h-8" />,
      features: ['Attorney portraits', 'Courtroom photography', 'Office environments', 'Professional headshots', 'Team photos', 'Facility tours']
    },
    {
      title: 'Marine & Yacht Photography',
      description: 'Specialized photography for boats, yachts, and marine businesses showcasing vessels in their best light.',
      icon: <Anchor className="w-8 h-8" />,
      features: ['Yacht exteriors', 'Interior spaces', 'Aerial shots', 'Action photography', 'Charter marketing', 'Fleet documentation']
    }
  ]

  const featuredWork = [
    {
      title: '4M Lawn Care',
      description: 'Complete branding photoshoot showcasing professional lawn care services and team expertise.',
      image: '/4m_lawn_care.jpg',
      category: 'Branding Photography',
      services: ['Team portraits', 'Equipment photography', 'Before/after shots', 'Action shots']
    },
    {
      title: '3CDC',
      description: 'Official event coverage capturing the excitement and community engagement of the ribbon cutting ceremony for Court Street\'s renovation.',
      image: '/3cdc_court_street_grand_opening.jpg',
      category: 'Event Photography',
      services: ['Event coverage', 'VIP portraits', 'Crowd shots', 'Architectural photography']
    },
    {
      title: 'Queen City Riverboats',
      description: 'Professional yacht photography showcasing the luxury and elegance of The Destiny.',
      image: '/Queen_city_riverboats_the_destiny.jpg',
      category: 'Marine Photography',
      services: ['Exterior shots', 'Interior spaces', 'Detail photography', 'Marketing materials']
    },
    {
      title: 'Shannon Sexton Law',
      description: 'Professional legal photography capturing attorney expertise and courtroom presence.',
      image: '/shannon_sexton_lawyer.jpg',
      category: 'Professional Photography',
      services: ['Attorney portraits', 'Courtroom shots', 'Professional headshots', 'Office photography']
    },
    {
      title: 'Blue Catty\'s Bar & Grille',
      description: 'Appetizing food photography that makes menu items irresistible to customers.',
      image: '/mozz_sticks_blue_cattys.jpg',
      category: 'Food Photography',
      services: ['Menu photography', 'Food styling', 'Ambiance shots', 'Social media content']
    },
    {
      title: '3CDC',
      description: 'Dynamic event photography capturing the fun and community spirit of the skating rink grand opening celebration.',
      image: '/3cdc_skating_rink_grand_opening.jpg',
      category: 'Event Photography',
      services: ['Action shots', 'Family portraits', 'Facility photography', 'Community engagement']
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Photography Services",
    "description": "Professional commercial photography services in Cincinnati including corporate headshots, product photography, event coverage, and brand photography.",
    "provider": {
      "@type": "Organization",
      "name": "Uptrade Media",
      "url": "https://uptrademedia.com",
      "logo": "https://uptrademedia.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "335 Manhattan Blvd",
        "addressLocality": "Dayton",
        "addressRegion": "KY",
        "postalCode": "41074",
        "addressCountry": "US"
      },
      "telephone": "(513) 331-0555"
    },
    "areaServed": ["Cincinnati", "Northern Kentucky", "Dayton", "Ohio"],
    "serviceType": "Commercial Photography"
  }


  const faqItems = [
    {
      question: 'What types of photography services do you offer?',
      answer: 'We offer comprehensive commercial photography services including corporate headshots, product photography, food photography, event coverage, architectural photography, branding photography, lifestyle photography, and professional portraits for businesses across Cincinnati and Northern Kentucky.'
    },
    {
      question: 'How much does commercial photography cost?',
      answer: 'Photography pricing varies based on the scope, location, number of images, and specific requirements. We offer customized packages starting from basic headshot sessions to comprehensive brand photography campaigns. Contact us for a detailed quote based on your specific needs.'
    },
    {
      question: 'How do you prepare for a photoshoot?',
      answer: 'Our process begins with a detailed consultation to understand your vision, brand guidelines, and specific objectives. We then plan locations, lighting setup, props, styling, and shot lists. We also provide guidance on wardrobe and preparation to ensure the best possible results.'
    },
    {
      question: 'What is your post-production process?',
      answer: 'After the shoot, we carefully select and edit the best images using professional software. Our post-production includes color correction, exposure adjustments, retouching, and enhancement to deliver polished, brand-consistent photographs ready for immediate use across all your marketing channels.'
    },
    {
      question: 'How long does it take to receive the final photos?',
      answer: 'Turnaround time depends on the project scope and number of images. Typically, you can expect to receive your edited photos within 1-2 weeks for standard projects. Rush delivery is available for urgent needs with advance notice.'
    },
    {
      question: 'Can I use the photos for all my marketing materials?',
      answer: 'Yes, our photography packages include full commercial usage rights for all digital and print marketing materials, websites, social media, advertising, and promotional materials. You own the rights to use the images however you need for your business.'
    },
    {
      question: 'Do you provide on-location photography services?',
      answer: 'Absolutely! We provide on-location photography services throughout Cincinnati, Northern Kentucky, and surrounding areas. Whether it\'s at your business location, an event venue, or any other location that fits your brand story, we bring professional equipment and expertise to you.'
    },
    {
      question: 'What should I expect during a photography session?',
      answer: 'During your session, we\'ll guide you through poses and setups while maintaining a comfortable, professional atmosphere. We work efficiently to capture a variety of shots and angles, ensuring we get the perfect images that represent your brand and meet your objectives.'
    },
    {
      question: 'Do you offer retouching and editing services?',
      answer: 'Yes, professional retouching and editing are included in all our photography packages. This includes color correction, exposure adjustments, blemish removal, background cleanup, and other enhancements to ensure your photos look polished and professional.'
    },
    {
      question: 'Can you help with styling and creative direction?',
      answer: 'Absolutely! We provide creative direction and styling guidance to ensure your photos align with your brand identity and marketing goals. We can advise on wardrobe, props, locations, and overall aesthetic to create compelling visual content that resonates with your target audience.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Commercial Photography Cincinnati | Professional Business Photography | Uptrade Media"
        description="Professional commercial photography services in Cincinnati. Corporate headshots, product photography, event coverage, food photography, and brand photography that elevates your business."
        keywords="commercial photography Cincinnati, business photography, corporate headshots, product photography, event photography, food photography, professional photographer Cincinnati"
        canonicalUrl="https://uptrademedia.com/media/commercial-photography"
        ogImage="/commercial_photography_og.jpg"
        structuredData={structuredData}
      />

      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/media" className="inline-flex items-center text-[#4bbf39] hover:text-#9333EA transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Media Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Camera className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Commercial Photography Services</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional Commercial Photography in Cincinnati
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                Elevate your brand with stunning commercial photography. From corporate headshots to product photography and event coverage, we create compelling visual content that drives business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:+15133310555">
                  <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                    <Phone className="w-5 h-5 mr-2" />
                    (513) 331-0555
                  </Button>
                </a>
                <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-3 transition-all duration-200">
                  View Our Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Camera className="w-8 h-8 mr-2" />
                    <div className="text-3xl font-bold">500+</div>
                  </div>
                  <div className="text-sm opacity-80">Photo Sessions</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-8 h-8 mr-2" />
                    <div className="text-3xl font-bold">98%</div>
                  </div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Photography Consultation</h3>
                  <p className="text-gray-600">Get expert insights on your photography needs and discover how professional images can transform your marketing.</p>
                </div>

                <form 
                  name="photography-quote" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="photography-quote" />
                  <p style={{display: 'none'}}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                        placeholder="John Smith"
                        style={{ color: 'black' }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                        placeholder="john@company.com"
                        style={{ color: 'black' }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                        placeholder="(513) 555-0123"
                        style={{ color: 'black' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                        placeholder="Your Company"
                        style={{ color: 'black' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Photography Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                    >
                      <option value="">Select photography type</option>
                      <option value="corporate">Corporate & Headshots</option>
                      <option value="product">Product Photography</option>
                      <option value="food">Food & Restaurant</option>
                      <option value="event">Event Coverage</option>
                      <option value="branding">Branding Photography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-#4bbf39 focus:border-transparent"
                      placeholder="Tell us about your photography project..."
                      style={{ color: 'black' }}
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-#4bbf39 hover:bg-#9333EA text-white py-3">
                    Get Free Photography Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Free consultation • No obligation • Expert insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Featured Photography Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of professional commercial photography showcasing diverse industries and creative approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 p-0">
                  <div className="relative">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                    <p className="text-gray-600 mb-4">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.services.map((service, idx) => (
                        <span 
                          key={idx}
                          className="bg-#4bbf39/10 text-[#4bbf39] px-2 py-1 rounded text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Photography Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Commercial Photography Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From corporate headshots to product photography and event coverage, we provide professional photography services that elevate your brand and drive business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographyServices.map((service, index) => (
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

      {/* Photography Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Photography Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative approach that ensures every photography project delivers exceptional results and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation & Planning',
                description: 'Understanding your vision, brand, and specific photography needs to create the perfect shot list.',
                icon: <Target className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Pre-Production Setup',
                description: 'Location scouting, equipment preparation, and coordinating all logistics for a smooth shoot.',
                icon: <Camera className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Professional Photography',
                description: 'Capturing high-quality images with professional lighting, composition, and attention to detail.',
                icon: <Eye className="w-8 h-8" />
              },
              {
                step: '04',
                title: 'Post-Production & Delivery',
                description: 'Professional editing, color correction, and retouching to deliver stunning final images.',
                icon: <Palette className="w-8 h-8" />
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





      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Photography Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless approach to capturing your vision and delivering exceptional images.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-#39bfb0">
                <Lightbulb className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-bold mb-2">1. Consultation & Planning</CardTitle>
              <CardContent className="text-gray-600">
                We start by understanding your goals, brand aesthetic, and specific photography needs to create a detailed plan.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-#39bfb0">
                <Camera className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-bold mb-2">2. Photoshoot Execution</CardTitle>
              <CardContent className="text-gray-600">
                Our skilled photographers capture high-quality images, ensuring every shot aligns with the planned vision and your brand.
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-#9333EA">
                <Image className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-bold mb-2">3. Post-Production & Delivery</CardTitle>
              <CardContent className="text-gray-600">
                We meticulously edit and retouch images, delivering a polished final collection ready for all your marketing channels.
              </CardContent>
            </Card>
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
            Ready to Capture Your Brand's Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and discover how professional photography can elevate your visual presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Get Free Photography Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:+15133310555">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-3 transition-all duration-200">
                <Phone className="mr-2 w-5 h-5" />
                (513) 331-0555
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaPhotographyPage
