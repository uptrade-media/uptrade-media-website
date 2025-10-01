import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ArrowRight, 
  Play,
  Camera,
  Palette,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Target,
  BarChart3,
  MessageSquare,
  Video,
  Image as ImageIcon,
  Plane,
  Monitor,
  Brush,
  Globe,
  Newspaper,
  Clock,
  Zap
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Utility function to scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Import the logo
import uptradeMediaLogoDark from './assets/logo_dark.svg'
import uptradeMediaLogoLight from './assets/logo_light.svg'
import uptradeMediaHero from './assets/uptrade_media_hero.webp'
import marketingHero from './assets/marketing_hero.webp'
import mediaHero from './assets/media_hero.webp'
import designHero from './assets/design_hero.webp'


// Lazy load all page components for better performance
const MarketingSEOPage = React.lazy(() => import('./pages/MarketingSEOPage.jsx'))
const MarketingPaidAdsPage = React.lazy(() => import('./pages/MarketingPaidAdsPage.jsx'))
const MarketingReputationPage = React.lazy(() => import('./pages/MarketingReputationPage.jsx'))
const MarketingContentMarketingPage = React.lazy(() => import('./pages/MarketingContentMarketingPage.jsx'))
const ContactPage = React.lazy(() => import('./pages/ContactPage.jsx'))
const AboutPage = React.lazy(() => import('./pages/AboutPage.jsx'))
const InsightsPage = React.lazy(() => import('./pages/InsightsPage.jsx'))
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage.jsx'))
const MarketingEmailSocialPage = React.lazy(() => import('./pages/MarketingEmailSocialPage.jsx'))
const MarketingSalesFunnelPage = React.lazy(() => import('./pages/MarketingSalesFunnelPage.jsx'))

const MediaVideoProductionPage = React.lazy(() => import('./pages/MediaVideoProductionPage.jsx'))
const MediaPhotographyPage = React.lazy(() => import('./pages/MediaPhotographyPage.jsx'))
const MediaTestimonialPage = React.lazy(() => import('./pages/MediaTestimonialPage.jsx'))
const MediaAerialDronePage = React.lazy(() => import('./pages/MediaAerialDronePage.jsx'))

const DesignWebDesignPage = React.lazy(() => import('./pages/DesignWebDesignPage.jsx'))
const DesignBrandingPage = React.lazy(() => import('./pages/DesignBrandingPage.jsx'))
const DesignUXUIPage = React.lazy(() => import('./pages/DesignUXUIPage.jsx'))
const DesignGraphicDesignPage = React.lazy(() => import('./pages/DesignGraphicDesignPage.jsx'))
const FreeAuditPage = React.lazy(() => import('./pages/FreeAuditPage.jsx'))

// Portfolio Pages
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage.jsx'))
const MarinaManhattanHarbourPage = React.lazy(() => import('./pages/portfolio/MarinaManhattanHarbourPage.jsx'))
const ElSenorPigPage = React.lazy(() => import('./pages/portfolio/ElSenorPigPage.jsx'))
const QueenCityRiverboatsPage = React.lazy(() => import('./pages/portfolio/QueenCityRiverboatsPage.jsx'))
const SpadeKreationsPage = React.lazy(() => import('./pages/portfolio/SpadeKreationsPage.jsx'))
const ManhattanHarbourLivingPage = React.lazy(() => import('./pages/portfolio/ManhattanHarbourLivingPage.jsx'))
const ChateauHeritageSquarePage = React.lazy(() => import('./pages/portfolio/ChateauHeritageSquarePage.jsx'))

// Import loading component
import LoadingSpinner from './components/LoadingSpinner.jsx'
import FloatingActionButton from './components/FloatingActionButton.jsx'
import StickyCTABar from './components/StickyCTABar.jsx'
import ExitIntentPopup from './components/ExitIntentPopup.jsx'
import SimpleMobileNavigation from './components/SimpleMobileNavigation.jsx'
import { MobileStickyFooter } from './components/MobileTouchComponents.jsx'
import { LocalBusinessSchema, OrganizationSchema, WebsiteSchema } from './components/StructuredData.jsx'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { HomeSEO, AboutSEO, ContactSEO, PortfolioSEO, InsightsSEO } from './components/SEO.jsx'


function Header() {
  const [dropdownOpen, setDropdownOpen] = useState({
    marketing: false,
    media: false,
    design: false
  })
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={scrollToTop} className="flex items-center group">
              <motion.img 
                src={uptradeMediaLogoLight} 
                alt="Uptrade Media" 
                className="h-8 w-auto" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Marketing Dropdown */}
            <div className="relative group">
              <Link 
                to="/marketing"
                onClick={scrollToTop}
                className={`flex items-center transition-colors ${location.pathname.startsWith('/marketing') ? 'text-[#4bbf39]' : 'text-gray-700 hover:text-[#4bbf39]'}`}
                onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, marketing: true }))}
                onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, marketing: false }))}
              >
                Marketing
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {dropdownOpen.marketing && (
                <div 
                  className="absolute top-full left-0 --mt-1 w-64 bg-white rounded-lg shadow-xs border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, marketing: true }))}
                  onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, marketing: false }))}
                  style={{ paddingTop: '12px' }}
                >
                  <Link to="/marketing/seo" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">SEO & Local SEO</Link>
                  <Link to="/marketing/ad-management" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Paid Ads Management</Link>
                  <Link to="/marketing/reputation-management" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Review & Reputation Management</Link>
                  <Link to="/marketing/content-marketing" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Content Marketing & Blogging</Link>
                  <Link to="/marketing/email-social-marketing" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Email & Social Campaigns</Link>
                  <Link to="/marketing/sales-funnels" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Sales Funnels & Lead Generation</Link>
                </div>
              )}
            </div>

            {/* Media Dropdown */}
            <div className="relative group">
              <Link 
                to="/media"
                onClick={scrollToTop}
                className={`flex items-center transition-colors ${location.pathname.startsWith('/media') ? 'text-[#4bbf39]' : 'text-gray-700 hover:text-[#4bbf39]'}`}
                onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, media: true }))}
                onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, media: false }))}
              >
                Media
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {dropdownOpen.media && (
                <div 
                  className="absolute top-full left-0 -mt-1 w-64 bg-white rounded-lg shadow-xs border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, media: true }))}
                  onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, media: false }))}
                  style={{ paddingTop: "12px" }}
                >
                  <Link to="/media/video-production" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Video Production</Link>
                  <Link to="/media/photography" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Commercial Photography</Link>
                  <Link to="/media/build-credibility" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Testimonial & Case Study Videos</Link>
                  <Link to="/media/aerial-drone" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Aerial & Drone Media</Link>
                </div>
              )}
            </div>

            {/* Design Dropdown */}
            <div className="relative group">
              <Link 
                to="/design"
                onClick={scrollToTop}
                className={`flex items-center transition-colors ${location.pathname.startsWith('/design') ? 'text-[#4bbf39]' : 'text-gray-700 hover:text-[#4bbf39]'}`}
                onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, design: true }))}
                onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, design: false }))}
              >
                Design
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {dropdownOpen.design && (
                <div 
                  className="absolute top-full left-0 -mt-1 w-64 bg-white rounded-lg shadow-xs border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, design: true }))}
                  onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, design: false }))}
                  style={{ paddingTop: "12px" }}
                >
                  <Link to="/design/web-design" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Web Design & Development</Link>
                  <Link to="/design/branding" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Brand Identity & Logo Design</Link>
                  <Link to="/design/ux" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">UX/UI Design</Link>
                  <Link to="/design/graphic-design" onClick={scrollToTop} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">Graphic Design</Link>
                </div>
              )}
            </div>

            <Link to="/portfolio" onClick={scrollToTop} className={`transition-colors ${location.pathname === '/portfolio' ? 'text-[#4bbf39]' : 'text-gray-700 hover:text-[#4bbf39]'}`}>Portfolio</Link>
            <Link to="/insights" onClick={scrollToTop} className={`transition-colors ${location.pathname.startsWith('/insights') ? 'text-[#4bbf39]' : 'text-gray-700 hover:text-[#4bbf39]'}`}>Insights</Link>
            <Link to="/about" onClick={scrollToTop} className={`transition-colors ${location.pathname === '/about' ? 'text-[#4bbf39]' : 'text-gray-700 hover:text-[#4bbf39]'}`}>About</Link>
            <Link to="/contact" onClick={scrollToTop} className={`transition-colors ${location.pathname === '/contact' ? 'text-[#4bbf39]' : 'text-gray-700 hover:text-[#4bbf39]'}`}>Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              href="tel:+15133310555" 
              className="flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-4 h-4 mr-2" />
              </motion.div>
              (513) 331-0555
            </motion.a>
            <Link to="/free-audit">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    whileHover={{ 
                      x: ['-100%', '100%'],
                      opacity: [0, 0.2, 0]
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Free Audit</span>
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <SimpleMobileNavigation scrollToTop={scrollToTop} />
        </div>
      </div>


    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={uptradeMediaLogoDark} alt="Uptrade Media" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 mb-6 max-w-md">
              Professional website design, SEO services, and media creation for Cincinnati and Northern Kentucky businesses. We combine expert strategy with creative execution to deliver results that matter.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#4bbf39] mr-3" />
                <span className="text-gray-400">335 Manhattan Blvd, Dayton, KY 41074</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#4bbf39] mr-3" />
                <a href="tel:+15133310555" className="text-gray-400 hover:text-white transition-colors">
                  (513) 331-0555
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#4bbf39] mr-3" />
                <a href="mailto:info@uptrademedia.com" className="text-gray-400 hover:text-white transition-colors">
                  info@uptrademedia.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/design/web-design" onClick={scrollToTop} className="hover:text-white transition-colors">Web Design</Link></li>
              <li><Link to="/design/ux" onClick={scrollToTop} className="hover:text-white transition-colors">UX/UI Design</Link></li>
              <li><Link to="/design/graphic-design" onClick={scrollToTop} className="hover:text-white transition-colors">Graphic Design</Link></li>
              <li><Link to="/marketing/seo" onClick={scrollToTop} className="hover:text-white transition-colors">SEO & Local SEO</Link></li>
              <li><Link to="/marketing/paid-ads" onClick={scrollToTop} className="hover:text-white transition-colors">Paid Advertising</Link></li>
              <li><Link to="/media/video-production" onClick={scrollToTop} className="hover:text-white transition-colors">Video Production</Link></li>
              <li><Link to="/media/photography" onClick={scrollToTop} className="hover:text-white transition-colors">Commercial Photography</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/insights" onClick={scrollToTop} className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/free-audit" onClick={scrollToTop} className="hover:text-white transition-colors">Free Audit</Link></li>
              <li><Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" onClick={scrollToTop} className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 Uptrade Media. All rights reserved. | Serving Cincinnati, OH & Northern Kentucky
            </p>
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 hover:shadow-xs"
            >
              <span>Back to Top</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const services = [
    {
      category: 'Media Solutions',
      icon: <Camera className="w-8 h-8" />,
      color: 'from-[#4bbf39] to-[#39bfb0]',
      link: '/media',
      services: [
        { name: 'Video Production', link: '/media/video-production' },
        { name: 'Commercial Photography', link: '/media/photography' },
        { name: 'Testimonial & Case Study Videos', link: '/media/build-credibility' },
        { name: 'Aerial & Drone Media', link: '/media/aerial-drone' }
      ]
    },
    {
      category: 'Design Solutions',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-[#4bbf39] to-[#39bfb0]',
      link: '/design',
      services: [
        { name: 'Web Design & Development', link: '/design/web-design' },
        { name: 'Brand Identity & Logo Design', link: '/design/branding' },
        { name: 'UX/UI Design', link: '/design/ux' },
        { name: 'Graphic Design', link: '/design/graphic-design' }
      ]
    },
    {
      category: 'Marketing Solutions',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-[#4bbf39] to-[#39bfb0]',
      link: '/marketing',
      services: [
        { name: 'SEO & Local SEO', link: '/marketing/seo' },
        { name: 'Paid Ads Management', link: '/marketing/ad-management' },
        { name: 'Review & Reputation Management', link: '/marketing/reputation-management' },
        { name: 'Email & Social Campaigns', link: '/marketing/email-social-marketing' }
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Queen City Riverboats',
      result: '1,084.4% traffic increase',
      quote: 'We couldn\'t be happier with the work Uptrade Media has done for Queen City Riverboats. From video and photography to redesigning our website, their team nailed it.',
      timeframe: '6 months'
    },
    {
      name: 'Manhattan Development Group',
      result: 'Transformed digital presence',
      quote: 'The websites Uptrade Media created have transformed our digital presence. Outstanding work.',
      timeframe: '4 months'
    },
    {
      name: 'The Marina at Manhattan Harbour',
      result: 'Incredible and professional work',
      quote: 'Highly recommend Uptrade Media! The work done on our website was incredible and highly professional. We couldn\'t be happier with the results!',
      timeframe: '6 months'
    }
  ]

  const faqs = [
    {
      question: 'What makes Uptrade Media different from other agencies?',
      answer: 'We have an in-house media team with a media-first mentality. Every website we build is designed with SEO and UX built-in from the ground up, not as an afterthought.'
    },
    {
      question: 'Do you offer free website audits?',
      answer: 'Yes! We provide comprehensive free website audits to identify opportunities for improvement in design, SEO, and user experience.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Cincinnati and Northern Kentucky, but we work with clients throughout the region and can handle projects remotely.'
    },
    {
      question: 'How long does a typical website project take?',
      answer: 'Most website projects are completed within 4-8 weeks, depending on complexity and scope. We provide detailed timelines during our consultation.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely. We offer ongoing maintenance, SEO optimization, content updates, and performance monitoring to ensure your website continues to deliver results.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <HomeSEO />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          controls={false}
          disablePictureInPicture
          preload="metadata"
          poster="/uptrade_media_hero.webp"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            WebkitPlaysinline: true,
            objectFit: 'cover'
          }}
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.backgroundImage = 'url(/uptrade_media_hero.webp)';
          }}
        >
          <source src="/videos/Home_page_hero_video.webm" type="video/webm" />
          <source src="/videos/home_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/uptrade_media_hero.webp)'}}></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">
                  Unleash Your Brand
                </span>
                <span className="text-white"> with Expert Marketing, Media, & Design</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white mb-8 max-w-3xl mx-auto"
              >
              We combine professional media production with expert web design and strategic marketing to create websites that don't just look great—they drive real business results for Cincinnati and Northern Kentucky businesses.
            </motion.p>
            {/* Social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-4"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium">5.0 Stars</span>
                <span className="opacity-75">•</span>
                <span className="opacity-90">Trusted by local businesses</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(75, 191, 57, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white px-8 py-3 relative overflow-hidden group" asChild>
                  <Link to="/free-audit">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <span className="relative z-10">Get Free Website Audit</span>
                    <motion.div
                      className="relative z-10 ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              <motion.a 
                href="tel:+15133310555"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.9)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 group">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mr-2"
                  >
                    <Phone className="w-5 h-5" />
                  </motion.div>
                  (513) 331-0555
                </Button>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4bbf39]" />
                <span>100% Free Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4bbf39]" />
                <span>No Spam, Ever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4bbf39]" />
                <span>Results in 24 Hours</span>
              </div>
            </motion.div>

            {/* Urgency indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 flex justify-center"
            >
              <motion.div
                className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-200 px-4 py-2 rounded-full text-sm font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <CheckCircle className="w-4 h-4" />
                </motion.div>
                <span>Free audit available - limited spots this week</span>
              </motion.div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="w-full">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by Leading Businesses in Cincinnati and Nationwide</p>
          </div>
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll-mobile md:animate-scroll-fast whitespace-nowrap">
              {Array(2).fill([
                '3CDC_Logo.svg',
                '4M_Lawn_Care_logo.svg',
                'Adams_Real_Estate_Advisors_Logo.svg',
                'Blue_Cattys_Bar_and_Grille_Logo.svg',
                'Boulevard_flats_at_manhattan_harbour_logo.svg',
                'Burnt_store_booking_logo.svg',
                'Gateway_Flats_at_Manhattan_Harbour_logo.svg',
                'GRSM50_logo.svg',
                'Gunning_Homes_Logo.svg',
                'Nikki_Hayden_Realtor_Logo.svg',
                'Prost_Bellevue_Tavern_Logo.svg',
                'Queen_City_Riverboats_Logo.svg',
                'Sexton_Law_Logo.svg',
                'Spade_Kreations_Logo.svg',
                'The_Marina_at_Manhattan_Harbour_logo.svg'
              ]).flat().map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-16 mx-8 flex items-center justify-center">
                  <img 
                    src={`/Client_logos/${logo}`} 
                    alt={logo.replace('.svg', '').replace(/Logo|logo/g, '').trim()}
                    className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From professional media production to cutting-edge web design and strategic marketing, we provide everything your business needs to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link to={service.link} onClick={scrollToTop} className="block h-full">
                  <motion.div
                    className="h-full"
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                      scale: 1.02
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="h-full border-0 bg-white cursor-pointer relative overflow-hidden">
                      {/* Animated background gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5`}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        whileHover={{ 
                          x: ['-100%', '100%'],
                          opacity: [0, 0.1, 0]
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />

                      <CardHeader className="text-center pb-4 relative z-10">
                        <motion.div 
                          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}
                          whileHover={{ 
                            scale: 1.15,
                            rotate: 5,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <motion.div
                            whileHover={{ rotate: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {service.icon}
                          </motion.div>
                        </motion.div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {service.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                              service.category === 'Media Solutions' ? 'text-[#4bbf39]' : 
                              service.category === 'Design Solutions' ? 'text-[#4bbf39]' : 
                              'text-[#4bbf39]'
                            }`} />
                            <Link 
                              to={item.link} 
                              className="text-gray-700 hover:text-[#4bbf39] transition-colors duration-200 relative z-10"
                              onClick={(e) => {
                                e.stopPropagation()
                                scrollToTop()
                              }}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full mt-6 text-white ${
                          service.category === 'Media Solutions' ? 'bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39]' :
                          service.category === 'Design Solutions' ? 'bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39]' :
                          'bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39]'
                        }`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#4bbf39] text-white">Case Study</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Queen City Riverboats Sees{' '}
                <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">
                  1,084.4% Traffic Increase
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Through our comprehensive web overhaul, SEO optimization, professional media production, and social management package, Queen City Riverboats transformed their online presence and achieved remarkable growth in just 6 months.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#4bbf39]">1,084.4%</div>
                  <div className="text-sm text-gray-600">Traffic Increase</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#4bbf39]">6 Months</div>
                  <div className="text-sm text-gray-600">Timeline</div>
                </div>
              </div>
              <Link to="/portfolio/queen-city-riverboats" onClick={scrollToTop}>
                <Button className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
                  View Full Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  src="https://uptrademedia.wistia.com/embed/iframe/94gc73ze2x?autoPlay=true&muted=true&playButton=false&fullscreenButton=true&volumeControl=false&seo=false"
                  title="Queen City Riverboats Case Study Video"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xs">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses in Cincinnati and Northern Kentucky
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-0 shadow-xs">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <Badge variant="secondary">{testimonial.timeframe}</Badge>
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-[#4bbf39] font-semibold text-base">
                      {testimonial.result}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://share.google/o7ZNKsYGbl4hOXbdx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <Star className="w-5 h-5" />
              View More Reviews on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>



      {/* Featured Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our expert insights on digital marketing, web design trends, and business growth strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Rump & Roll Delicatessen Opens in Dayton, KY",
                excerpt: "Local delicatessen brings authentic flavors and community spirit to Northern Kentucky with grand opening celebration.",
                category: "News",
                readTime: "4 min read",
                image: "/Rump_and_roll_delicatessen.jpg",
                link: "/insights/rump-roll-delicatessen-opens-dayton"
              },
              {
                title: "SEO for Law Firms | Best SEO Marketing Strategies",
                excerpt: "Discover proven SEO strategies that help law firms dominate local search results and attract high-value clients through strategic optimization.",
                category: "Marketing",
                readTime: "8 min read",
                image: "/seo_for_law_firms.jpeg",
                link: "/insights/seo-law-firms"
              },
              {
                title: "Best Practices for Small Business Web Design in 2025",
                excerpt: "Essential web design principles and trends that small businesses need to implement for success in the digital landscape.",
                category: "Design",
                readTime: "6 min read",
                image: "/best_practices_for_small_business_web_design.jpeg",
                link: "/insights/web-design-2025"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xs transition-shadow duration-300 bg-white border-0 overflow-hidden p-0">
                  <div className="relative">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-white/30">
                        {insight.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{insight.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>
                    <Link 
                      to={insight.link}
                      onClick={scrollToTop}
                      className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/insights" onClick={scrollToTop}>
              <Button size="lg" variant="outline" className="border-[#4bbf39] text-[#4bbf39] hover:bg-[#4bbf39] hover:text-white">
                View All Insights
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we follow a systematic approach that ensures every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We dive deep into your business goals, target audience, and competitive landscape to create a tailored strategy.",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Design & Development",
                description: "Our team creates stunning visuals and develops robust solutions that align with your brand and objectives.",
                icon: <Palette className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Content & Media Creation",
                description: "We produce high-quality content, photography, and video that engages your audience and drives action.",
                icon: <Camera className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "We launch your project and continuously optimize performance based on data and user feedback.",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#4bbf39]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <p className="text-gray-600">{faq.answer}</p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4bbf39] via-[#39bfb0] to-[#4bbf39] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-medium">5.0 Stars • Trusted Partner</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Online Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 opacity-90"
          >
            Get a free website audit and discover how we can help your business grow with our media-first approach to web design and digital marketing.
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/free-audit">
                <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-30"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Get Your Free Audit
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
              </Link>
            </motion.div>
            <motion.a 
              href="tel:+15133310555"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                <Phone className="mr-2 w-5 h-5" />
                Call (513) 331-0555
              </Button>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-sm opacity-90"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free consultation included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Results guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function MarketingPage() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const faqs = [
    {
      question: 'What makes Uptrade Media different from other agencies?',
      answer: 'We have an in-house media team with a media-first mentality. Every website we build is designed with SEO and UX built-in from the ground up, not as an afterthought.'
    },
    {
      question: 'Do you offer free website audits?',
      answer: 'Yes! We provide comprehensive free website audits to identify opportunities for improvement in design, SEO, and user experience.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Cincinnati and Northern Kentucky, but we work with clients throughout the region and can handle projects remotely.'
    },
    {
      question: 'How long does a typical website project take?',
      answer: 'Most website projects are completed within 4-8 weeks, depending on complexity and scope. We provide detailed timelines during our consultation.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely. We offer ongoing maintenance, SEO optimization, content updates, and performance monitoring to ensure your website continues to deliver results.'
    }
  ]

  const marketingServices = [
    {
      title: 'SEO & Local SEO',
      icon: <Search className="w-8 h-8" />,
      description: 'We don\'t do SEO for the sake of traffic. We do it to help you take market share. Our approach combines technical optimization, structured content, and smart backlink strategy.',
      features: ['Keyword Research & Strategy', 'Technical SEO Optimization', 'Local Business Optimization', 'Content Strategy', 'Link Building', 'Performance Tracking'],
      link: '/marketing/seo'
    },
    {
      title: 'Paid Ads Management',
      icon: <Target className="w-8 h-8" />,
      description: 'We build ad campaigns that cut through noise and deliver results. From Google to Meta to YouTube, we handle everything: creative, targeting, testing, and scaling.',
      features: ['Google Ads Management', 'Meta Advertising', 'YouTube Ads', 'Campaign Optimization', 'A/B Testing', 'ROI Tracking'],
      link: '/marketing/ad-management'
    },
    {
      title: 'Content Marketing & Blogging',
      icon: <MessageSquare className="w-8 h-8" />,
      description: 'A strong content marketing strategy helps businesses establish authority and build trust with their audience through valuable, educational content.',
      features: ['Blog Strategy & Writing', 'Content Calendar', 'SEO-Optimized Articles', 'Industry Insights', 'Lead Magnets', 'Content Distribution'],
      link: '/marketing/content-marketing'
    },
    {
      title: 'Email & Social Campaigns',
      icon: <Mail className="w-8 h-8" />,
      description: 'Email marketing remains one of the most cost-effective ways to nurture leads and retain customers with personalized, targeted campaigns.',
      features: ['Email Automation', 'Newsletter Design', 'Social Media Strategy', 'Campaign Segmentation', 'Performance Analytics', 'Lead Nurturing'],
      link: '/marketing/email-social-marketing'
    },
    {
      title: 'Review & Reputation Management',
      icon: <Star className="w-8 h-8" />,
      description: 'Generate, respond to, and showcase reviews to build trust and credibility with potential customers while managing your online reputation.',
      features: ['Review Generation', 'Response Management', 'Reputation Monitoring', 'Review Showcase', 'Crisis Management', 'Brand Protection'],
      link: '/marketing/reputation-management'
    },
    {
      title: 'Sales Funnel Creation',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Traffic without a system is a waste. We design lead funnels that guide your audience from curiosity to conversion with strategic touchpoints.',
      features: ['Funnel Strategy', 'Landing Page Design', 'Lead Magnets', 'Email Sequences', 'Conversion Optimization', 'Analytics & Tracking'],
      link: '/marketing/sales-funnels'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <HomeSEO />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls={false}
            disablePictureInPicture
            preload="metadata"
            poster="/marketing_hero.webp"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              WebkitPlaysinline: true,
              objectFit: 'cover'
            }}
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
          >
          <source src="/videos/marketing_page_hero_video.webm" type="video/webm" />
          <source src="/videos/marketing_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Marketing Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
            >
              Smart. Strategic. Results-Driven. Elevate Your Brand with Proven Marketing Solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-12 max-w-4xl mx-auto text-white/80"
            >
              From SEO and paid advertising to email campaigns and content marketing, we create integrated marketing strategies that drive measurable growth. Our data-driven approach ensures every dollar spent delivers maximum ROI for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" onClick={scrollToTop}>
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200 px-8 py-3 text-lg">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern marketing isn't about keeping up. It's about pulling ahead. We build campaigns that convert, not just campaigns that look good.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
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
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
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
              How Uptrade Media Drives Your Success
            </h2>
            <p className="text-xl text-gray-600">
              Get the most out of your marketing budget with targeted, cost-effective solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Maximized ROI',
                description: 'From high-impact web design to data-driven advertising, we turn visitors into loyal customers.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Higher Conversions',
                description: 'Stand out in your industry with strategies that boost visibility and recognition.',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Stronger Brand Presence',
                description: 'Whether you\'re a startup or an established business, our solutions grow with you.',
                icon: <Award className="w-8 h-8" />
              },
              {
                title: 'Scalable Growth',
                description: 'Focus on what you do best while we handle your marketing with precision.',
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                title: 'More Time for Your Business',
                description: 'Our industry knowledge keeps you ahead in the ever-evolving digital landscape.',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Expert Strategy & Execution',
                description: 'Our industry knowledge keeps you ahead in the ever-evolving digital landscape.',
                icon: <CheckCircle className="w-8 h-8" />
              }
            ].map((benefit, index) => (
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

      {/* Featured Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our expert insights on digital marketing, web design trends, and business growth strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Rump & Roll Delicatessen Opens in Dayton, KY",
                excerpt: "Local delicatessen brings authentic flavors and community spirit to Northern Kentucky with grand opening celebration.",
                category: "News",
                readTime: "4 min read",
                image: "/Rump_and_roll_delicatessen.jpg",
                link: "/insights/rump-roll-delicatessen-opens-dayton"
              },
              {
                title: "SEO for Law Firms | Best SEO Marketing Strategies",
                excerpt: "Discover proven SEO strategies that help law firms dominate local search results and attract high-value clients through strategic optimization.",
                category: "Marketing",
                readTime: "8 min read",
                image: "/seo_for_law_firms.jpeg",
                link: "/insights/seo-law-firms"
              },
              {
                title: "Best Practices for Small Business Web Design in 2025",
                excerpt: "Essential web design principles and trends that small businesses need to implement for success in the digital landscape.",
                category: "Design",
                readTime: "6 min read",
                image: "/best_practices_for_small_business_web_design.jpeg",
                link: "/insights/web-design-2025"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xs transition-shadow duration-300 bg-white border-0 overflow-hidden p-0">
                  <div className="relative">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-white/30">
                        {insight.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{insight.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>
                    <Link 
                      to={insight.link}
                      onClick={scrollToTop}
                      className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/insights" onClick={scrollToTop}>
              <Button size="lg" variant="outline" className="border-[#4bbf39] text-[#4bbf39] hover:bg-[#4bbf39] hover:text-white">
                View All Insights
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we follow a systematic approach that ensures every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We dive deep into your business goals, target audience, and competitive landscape to create a tailored strategy.",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Design & Development",
                description: "Our team creates stunning visuals and develops robust solutions that align with your brand and objectives.",
                icon: <Palette className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Content & Media Creation",
                description: "We produce high-quality content, photography, and video that engages your audience and drives action.",
                icon: <Camera className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "We launch your project and continuously optimize performance based on data and user feedback.",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#4bbf39]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <p className="text-gray-600">{faq.answer}</p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Fill out the form and one of our representatives will reach out shortly, or call Uptrade Media directly using the button below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-audit">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15133310555">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
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

function MediaPage() {
  const mediaServices = [
    {
      title: 'Video Production',
      icon: <Video className="w-8 h-8" />,
      description: 'Video doesn\'t just tell your story. It sells it. Adding video to your home or landing pages can increase conversion rates by up to 80 percent.',
      features: ['Cinematic Visuals', 'Direct Interviews', 'Fast-Paced Edits', 'Brand Films', '15-Second Ads', 'Story-Driven Content'],
      link: '/media/video-production'
    },
    {
      title: 'Photography Services',
      icon: <ImageIcon className="w-8 h-8" />,
      description: 'Crisp visuals elevate everything. We capture clean, compelling photos that highlight your people, products, and spaces with confidence.',
      features: ['Headshots', 'Lifestyle Shoots', 'Product Photography', 'Branded Content', 'Event Photography', 'Commercial Shoots'],
      link: '/media/photography'
    },
    {
      title: 'Drone & Aerial Footage',
      icon: <Plane className="w-8 h-8" />,
      description: 'Aerial content changes the perspective. Our drone footage captures scale, motion, and place in a way ground shots can\'t.',
      features: ['Aerial Photography', 'Drone Video Production', 'Real Estate Marketing', 'Construction Documentation', 'Event Coverage', 'B-Roll Content'],
      link: '/media/aerial-drone'
    },
    {
      title: 'Testimonial & Case Study Videos',
      icon: <MessageSquare className="w-8 h-8" />,
      description: 'Build credibility with proof-driven content that showcases real results and satisfied customers.',
      features: ['Customer Interviews', 'Success Stories', 'Before/After Content', 'Results Documentation', 'Trust Building', 'Social Proof'],
      link: '/media/testimonials'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <HomeSEO />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          controls={false}
          disablePictureInPicture
          preload="metadata"
          poster="/design_hero.webp"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            WebkitPlaysinline: true,
            objectFit: 'cover'
          }}
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.backgroundImage = 'url(/design_hero.webp)';
          }}
        >
          <source src="/videos/design_page_hero_video.webm" type="video/webm" />
          <source src="/videos/design_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/design_hero.webp)'}}></div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[60vh]">
          <div className="text-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Media Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-white opacity-90"
            >
              Bringing Your Brand to Life with Innovative Media Solutions That Connect and Engage.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" onClick={scrollToTop}>
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200 px-8 py-3 text-lg">
                  Start Your Media Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Media that Moves People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your visuals are the first impression. We make them impossible to ignore. From cinematic b-roll to sharp product photography, we create media that captures attention and builds trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
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
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
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
              How Media Creation Benefits Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Enhance Brand Image',
                description: 'High-quality visuals convey professionalism, credibility, and attention to detail, making your business more appealing to potential clients.',
                icon: <Award className="w-8 h-8" />
              },
              {
                title: 'Boost Engagement',
                description: 'Research shows that consumers are far more likely to engage with and share content that includes visually appealing images and videos.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Showcase Unique Selling Points',
                description: 'Aerial drone shots, behind-the-scenes videos, and high-definition product photography can highlight unique features.',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Strengthen Competitive Edge',
                description: 'Investing in professional media creation gives your brand a polished and compelling visual presence.',
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: 'Improve Marketing Effectiveness',
                description: 'Professional media assets can be repurposed across multiple marketing channels for consistent impact.',
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                title: 'Proven Results',
                description: 'Our high-quality media helps boost engagement, brand recognition, and sales, delivering measurable success.',
                icon: <Star className="w-8 h-8" />
              }
            ].map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stand Out and Succeed with Professional Media
          </h2>
          <p className="text-xl mb-8 opacity-90">
            In a world where digital presence is paramount, investing in professional media creation is no longer optional—it's essential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:+15133310555">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
                <Phone className="mr-2 w-5 h-5" />
                Call (513) 331-0555
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function DesignPage() {
  const designServices = [
    {
      title: 'Web Design & Development',
      icon: <Monitor className="w-8 h-8" />,
      description: 'We don\'t build websites to sit pretty. We build them to convert. Every site we launch is fast, mobile-optimized, and structured for SEO from day one.',
      features: ['Custom Website Design', 'Mobile Optimization', 'SEO Structure', 'Fast Loading', 'Clean Code', 'Conversion Focus'],
      link: '/design/web-design'
    },
    {
      title: 'Brand Identity & Logo Design',
      icon: <Brush className="w-8 h-8" />,
      description: 'Your brand isn\'t just a logo. It\'s the way people feel when they see you. We build cohesive visual identities that cut through noise.',
      features: ['Logo Design', 'Brand Guidelines', 'Typography Systems', 'Color Palettes', 'Brand Applications', 'Visual Identity'],
      link: '/design/branding'
    },
    {
      title: 'UX/UI Design',
      icon: <Users className="w-8 h-8" />,
      description: 'User-friendly design with clear calls to action drives visitors to take desired actions, such as making a purchase or booking a service.',
      features: ['User Experience Design', 'Interface Design', 'Wireframing', 'Prototyping', 'User Testing', 'Conversion Optimization'],
      link: '/design/ux'
    },
    {
      title: 'Graphic Design',
      icon: <Palette className="w-8 h-8" />,
      description: 'Strong visuals play a crucial role in capturing attention and creating a lasting impact across all your marketing materials.',
      features: ['Business Cards', 'Brochures', 'Social Media Graphics', 'Advertisements', 'Print Materials', 'Digital Assets'],
      link: '/design/graphic-design'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <HomeSEO />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          controls={false}
          disablePictureInPicture
          preload="metadata"
          poster="/media_hero.webp"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            WebkitPlaysinline: true,
            objectFit: 'cover'
          }}
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
        >
          <source src="/videos/media_page_hero_video.webm" type="video/webm" />
          <source src="/videos/media_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[60vh]">
          <div className="text-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Design Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-white opacity-90"
            >
              Transforming Your Online Presence with Stunning, User-Friendly Web Design Solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-12 max-w-4xl mx-auto text-white/80"
            >
              Your website is your most powerful marketing tool. We create conversion-focused web designs that not only look stunning but drive real business results. From concept to launch, we build websites that work as hard as you do.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/design/web-design" onClick={scrollToTop}>
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200 px-8 py-3 text-lg">
                  Start Your Web Design Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Websites Built to Win
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We design websites that do more than look good. They rank, convert, and scale with your business. Great design isn't decoration. It's a growth tool.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center text-white">
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
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
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
              How Uptrade Media Drives Your Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Improved Brand Recognition',
                description: 'Consistent, high-quality design helps create a strong, recognizable brand identity that resonates with your audience.',
                icon: <Award className="w-8 h-8" />
              },
              {
                title: 'Higher Conversion Rates',
                description: 'User-friendly design with clear calls to action drives visitors to take desired actions.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Increased Engagement',
                description: 'Visually appealing websites and graphics grab attention and encourage visitors to stay longer.',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Competitive Advantage',
                description: 'Investing in top-notch design services sets your business apart from competitors.',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Enhanced Credibility & Trust',
                description: 'A polished, professional online presence builds trust with potential customers.',
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: 'Better Search Engine Ranking',
                description: 'SEO-optimized websites improve your visibility on search engines, driving more organic traffic.',
                icon: <Search className="w-8 h-8" />
              }
            ].map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Uptrade Media?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            With a proven track record of helping businesses thrive, we take a strategic approach to design, ensuring every project aligns with your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-audit">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15133310555">
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs">
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

function AppContent() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-white">
      <HomeSEO />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* Portfolio case study routes */}
          <Route path="/portfolio/marina-manhattan-harbour" element={<MarinaManhattanHarbourPage />} />
          <Route path="/portfolio/el-senor-pig" element={<ElSenorPigPage />} />
          <Route path="/portfolio/queen-city-riverboats" element={<QueenCityRiverboatsPage />} />
          <Route path="/portfolio/spade-kreations" element={<SpadeKreationsPage />} />
          <Route path="/portfolio/manhattan-harbour-living" element={<ManhattanHarbourLivingPage />} />
          <Route path="/portfolio/chateau-heritage-square" element={<ChateauHeritageSquarePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/free-audit" element={<FreeAuditPage />} />
          {/* Service subpages */}
          {/* Marketing service routes */}
          <Route path="/marketing/seo" element={<MarketingSEOPage />} />
          <Route path="/marketing/ad-management" element={<MarketingPaidAdsPage />} />
          <Route path="/marketing/reputation-management" element={<MarketingReputationPage />} />
          <Route path="/marketing/content-marketing" element={<MarketingContentMarketingPage />} />
          <Route path="/marketing/email-social-marketing" element={<MarketingEmailSocialPage />} />
          <Route path="/marketing/sales-funnels" element={<MarketingSalesFunnelPage />} />

          {/* Media service routes */}
          <Route path="/media/video-production" element={<MediaVideoProductionPage />} />
          <Route path="/media/photography" element={<MediaPhotographyPage />} />
          <Route path="/media/build-credibility" element={<MediaTestimonialPage />} />
          <Route path="/media/aerial-drone" element={<MediaAerialDronePage />} />

          {/* Design service routes */}
          <Route path="/design/web-design" element={<DesignWebDesignPage />} />
          <Route path="/design/branding" element={<DesignBrandingPage />} />
          <Route path="/design/ux" element={<DesignUXUIPage />} />
          <Route path="/design/graphic-design" element={<DesignGraphicDesignPage />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActionButton />
      <StickyCTABar variant="audit" showAfterScroll={800} />
      <ExitIntentPopup offer="audit" enabled={true} />
      <MobileStickyFooter show={location.pathname !== '/contact'} />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}

export default App
