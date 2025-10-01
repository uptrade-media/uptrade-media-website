import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { CheckCircle, ArrowRight, Video, Camera, Film, Play, Lightbulb, Award, ArrowLeft, Phone, Star, Users, TrendingUp, Eye, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

// Video Player Component
const VideoPlayer = ({ video }) => {
  // Extract Wistia video ID from URL
  const getWistiaVideoId = (url) => {
    const match = url.match(/medias\/([a-zA-Z0-9]+)/)
    return match ? match[1] : null
  }

  const videoId = getWistiaVideoId(video.videoUrl)

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
      <iframe 
        src={`https://fast.wistia.net/embed/iframe/${videoId}?playButton=true&fullscreenButton=true&volumeControl=true`}
        title={video.title}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full h-full"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  )
}

function MediaVideoProductionPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const featuredVideos = [
    {
      title: 'The American Dream TV Show',
      description: 'We shot video content for The American Dream TV show, a prestigious platform showcasing successful businesses and entrepreneurs. This is a significant achievement in our video production portfolio.',
      videoUrl: 'https://uptrademedia.wistia.com/medias/jbshk5kolr',
      category: 'TV Production',
      client: 'The American Dream',
      services: ['Video Production', 'Professional Filming', 'TV Content Creation'],
      featured: true,
      logo: '/american-dream-logo.webp',
      preview: '/american_dream_preview.jpg'
    },
    {
      title: 'Mercedes Benz Fort Mitchell - Sprinter Promo',
      description: 'A sleek 15-second promotional video for Mercedes Benz of Fort Mitchell featuring their Sprinter line. Working with such a prestigious automotive brand demonstrates our capability to deliver high-end commercial content.',
      videoUrl: 'https://uptrademedia.wistia.com/medias/0je0mhqiqi',
      category: 'Commercial',
      client: 'Mercedes Benz of Fort Mitchell',
      services: ['Commercial Video', 'Automotive Marketing', 'Brand Promotion'],
      preview: '/mercedes_preview.jpg'
    },
    {
      title: 'Chateau at Heritage Square - Independent Living Community',
      description: 'A compelling promotional video for Chateau at Heritage Square, an independent living community in Brockport, NY. This video showcases the lifestyle and amenities that make this community special.',
      videoUrl: 'https://uptrademedia.wistia.com/medias/hgjm1s7f7r',
      category: 'Senior Living Marketing',
      client: 'Chateau at Heritage Square',
      services: ['Video Production', 'Senior Living Marketing', 'Lifestyle Videography'],
      preview: '/chateau_at_heritage_square_preview.jpg'
    },
    {
      title: 'El Senor Pig - Restaurant Header Video',
      description: 'An appetizing header video for El Senor Pig restaurant that captures the vibrant atmosphere and delicious food offerings, designed to engage website visitors immediately.',
      videoUrl: 'https://uptrademedia.wistia.com/medias/sd2pbokc1n',
      category: 'Restaurant Marketing',
      client: 'El Senor Pig',
      services: ['Food Videography', 'Website Video', 'Restaurant Marketing'],
      preview: '/el_senor_pig_preview.jpg'
    },
    {
      title: 'Blue Catty\'s Bar & Grille - Atmosphere Video',
      description: 'A dynamic header video showcasing the lively atmosphere and dining experience at Blue Catty\'s Bar & Grille, perfect for attracting customers and setting expectations.',
      videoUrl: 'https://uptrademedia.wistia.com/medias/lha83id9s4',
      category: 'Restaurant Marketing',
      client: 'Blue Catty\'s Bar & Grille',
      services: ['Atmosphere Video', 'Restaurant Branding', 'Website Content'],
      preview: '/blue_cattys_preview.jpg'
    }
  ]

  const videoServices = [
    {
      title: 'Commercial Video Production',
      description: 'High-impact commercial videos that drive sales and brand awareness',
      features: ['Brand Commercials', 'Product Showcases', 'Service Promotions', 'TV Advertisements', 'Digital Campaigns']
    },
    {
      title: 'Corporate Video Solutions',
      description: 'Professional corporate videos that communicate your message effectively',
      features: ['Company Overviews', 'Training Videos', 'Internal Communications', 'Recruitment Videos', 'Executive Messaging']
    },
    {
      title: 'Restaurant & Food Videography',
      description: 'Mouth-watering food videos that showcase your culinary offerings',
      features: ['Food Styling', 'Menu Showcases', 'Restaurant Atmosphere', 'Chef Profiles', 'Behind-the-Scenes']
    },
    {
      title: 'Event & Documentary Filming',
      description: 'Comprehensive event coverage and documentary-style storytelling',
      features: ['Event Coverage', 'Documentary Films', 'Conference Recording', 'Live Streaming', 'Multi-Camera Setup']
    },
    {
      title: 'Testimonial & Case Study Videos',
      description: 'Authentic customer stories that build trust and credibility',
      features: ['Customer Interviews', 'Success Stories', 'Case Study Documentation', 'Before/After Content', 'Social Proof']
    },
    {
      title: 'Aerial & Drone Videography',
      description: 'Stunning aerial perspectives that elevate your visual storytelling',
      features: ['Drone Footage', 'Aerial Cinematography', 'Property Tours', 'Landscape Videos', 'Unique Perspectives']
    }
  ]

  const productionProcess = [
    {
      step: '01',
      title: 'Concept Development',
      description: 'We work with you to develop a creative concept that aligns with your brand goals and target audience, ensuring every video serves a strategic purpose.',
      deliverables: ['Creative brief', 'Storyboard', 'Shot list', 'Production timeline']
    },
    {
      step: '02',
      title: 'Pre-Production Planning',
      description: 'Detailed planning phase including location scouting, talent coordination, equipment preparation, and scheduling to ensure smooth production.',
      deliverables: ['Location permits', 'Talent agreements', 'Equipment list', 'Production schedule']
    },
    {
      step: '03',
      title: 'Professional Filming',
      description: 'Our experienced crew captures high-quality footage using professional equipment, ensuring every shot meets our exacting standards.',
      deliverables: ['Raw footage', 'Multiple camera angles', 'Professional audio', 'B-roll content']
    },
    {
      step: '04',
      title: 'Post-Production & Delivery',
      description: 'Expert editing, color correction, audio mixing, and final delivery in multiple formats optimized for your intended platforms.',
      deliverables: ['Edited video', 'Color correction', 'Audio mixing', 'Multiple formats']
    }
  ]

  const videoBenefits = [
    {
      title: 'Increased Engagement',
      description: 'Video content generates 1200% more shares than text and images combined, dramatically increasing your reach.',
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'Higher Conversion Rates',
      description: 'Landing pages with video can increase conversions by up to 80%, turning more visitors into customers.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Enhanced Brand Trust',
      description: 'Video builds emotional connections and trust, with 57% of consumers saying video gives them confidence to purchase.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Improved SEO Performance',
      description: 'Websites with video are 53 times more likely to rank on the first page of Google search results.',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: 'Better Information Retention',
      description: 'Viewers retain 95% of a message when watching it in a video compared to 10% when reading it in text.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Versatile Marketing Asset',
      description: 'Videos can be repurposed across multiple channels, maximizing your investment and extending reach.',
      icon: <Zap className="w-8 h-8" />
    }
  ]

  const faqItems = [
    {
      question: 'What types of video production services do you offer?',
      answer: 'We offer comprehensive video production services including commercial videos, corporate communications, restaurant and food videography, event coverage, testimonial videos, aerial drone footage, and documentary-style content. Our portfolio includes work for major brands like Mercedes Benz and TV productions like The American Dream show.'
    },
    {
      question: 'How long does a typical video project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple promotional videos typically take 2-3 weeks from concept to delivery, while more complex commercial productions can take 4-8 weeks. We provide detailed timelines during the planning phase and keep you updated throughout the process.'
    },
    {
      question: 'Do you handle both filming and post-production?',
      answer: 'Yes, we provide end-to-end video production services including concept development, pre-production planning, professional filming with our experienced crew, and complete post-production including editing, color correction, audio mixing, and final delivery in multiple formats.'
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Absolutely! We work closely with your brand guidelines to ensure all video content aligns with your visual identity, messaging, and brand voice. Our experience with major brands like Mercedes Benz demonstrates our ability to maintain brand consistency at the highest level.'
    },
    {
      question: 'What equipment do you use for filming?',
      answer: 'We use professional-grade equipment including 4K cameras, professional lighting setups, high-quality audio recording equipment, and licensed drone equipment for aerial footage. Our equipment is regularly updated to ensure we deliver the highest quality results.'
    },
    {
      question: 'Do you provide video content for social media?',
      answer: 'Yes, we create video content optimized for various social media platforms including Instagram, Facebook, YouTube, LinkedIn, and TikTok. We understand the specific requirements and best practices for each platform and can deliver content in the appropriate formats and aspect ratios.'
    },
    {
      question: 'Can you help with video marketing strategy?',
      answer: 'Definitely! Beyond production, we help develop video marketing strategies that align with your business goals. This includes determining the right types of videos for your audience, optimal distribution channels, and measuring performance to maximize ROI.'
    },
    {
      question: 'What makes your video production different?',
      answer: 'Our unique combination of creative storytelling, technical expertise, and marketing knowledge sets us apart. We don\'t just create beautiful videos – we create strategic content that drives business results. Our work with prestigious clients and TV productions demonstrates our capability to deliver at the highest professional level.'
    }
  ]

  const [expandedFaq, setExpandedFaq] = React.useState(null)

  const videoProductionStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Video Production Services",
    "description": "Professional video production services in Cincinnati and Northern Kentucky. TV commercials, corporate videos, promotional content, and more.",
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
    "serviceType": "Video Production",
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
      "description": "Professional video production including TV commercials, corporate videos, promotional content, and brand storytelling",
      "priceRange": "$$"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Experience",
        "recognizedBy": {
          "@type": "Organization",
          "name": "The American Dream TV Show"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Brand Partnership",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Mercedes Benz"
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Video Production Services Cincinnati | TV Commercials | Uptrade Media"
        description="Professional video production services in Cincinnati and Northern Kentucky. TV commercials, corporate videos, promotional content. Featured on The American Dream TV show and Mercedes Benz campaigns."
        keywords="video production Cincinnati, TV commercials Northern Kentucky, corporate videos, promotional videos, video marketing, Cincinnati video production company, commercial videography"
        ogImage="/media_hero.webp"
        structuredData={videoProductionStructuredData}
        pageType="service"
      />
      {/* Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/media" onClick={scrollToTop} className="inline-flex items-center text-[#4bbf39] hover:text-#9333EA transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Media Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Video Production
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
            >
              Professional video production that tells your story, engages your audience, and drives real business results. From concept to final cut, we create videos that work.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/contact" onClick={scrollToTop}>
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                  Start Your Video Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+15133310555">
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                  <Phone className="w-5 h-5 mr-2" />
                  (513) 331-0555
                </Button>
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Star className="w-8 h-8 text-white/90 mb-2" />
                <div className="text-3xl font-bold">50+</div>
                <div className="text-white/80">Videos Produced</div>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-white/90 mb-2" />
                <div className="text-3xl font-bold">TV</div>
                <div className="text-white/80">Production Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="w-8 h-8 text-white/90 mb-2" />
                <div className="text-3xl font-bold">80%</div>
                <div className="text-white/80">Conversion Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Video Productions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our diverse portfolio of professional video productions, from major brand commercials to TV show content and restaurant marketing videos.
            </p>
          </div>

          <div className="space-y-12">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative`}>
                  <VideoPlayer video={video} />
                  {video.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured Production
                      </span>
                    </div>
                  )}
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-#4bbf39/10 text-[#4bbf39] px-3 py-1 rounded-full text-sm font-medium">
                        {video.category}
                      </span>
                      {video.featured && (
                        <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured Work
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {video.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-gray-900">Client: {video.client}</p>
                        {video.logo && (
                          <img 
                            src={video.logo} 
                            alt={`${video.client} logo`}
                            className="h-8 w-auto object-contain"
                          />
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {video.services.map((service, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Video Production Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept development to final delivery, we provide end-to-end video production services that bring your vision to life and drive business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Video Production Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every video project delivers exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productionProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full border-l-4 border-l-#4bbf39">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-[#4bbf39] mr-4">{step.step}</span>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {step.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {deliverable}
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
              Why Video Marketing Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Video content delivers measurable results that drive business growth and customer engagement across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoBenefits.map((benefit, index) => (
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
              Get answers to common questions about our video production services.
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
                <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
                  <CardHeader 
                    className="pb-3"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
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
            Ready to Create Compelling Video Content?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Let's bring your vision to life with professional video production that drives results. Contact us today to discuss your project.
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
                Start Your Video Project
                <Video className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MediaVideoProductionPage
