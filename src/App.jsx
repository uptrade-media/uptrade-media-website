import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import ScrollToTop from "./components/ScrollToTop";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
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
  Zap,
} from "lucide-react";
import { motion, AnimatePresence, } from "framer-motion";
import "./App.css";

// Utility: scroll to top on click
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Assets
import uptradeMediaLogoDark from "./assets/logo_dark.svg";
import uptradeMediaLogoLight from "./assets/logo_light.svg";

// Lazy routes
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage.jsx"));
const ContactPage = React.lazy(() => import("./pages/ContactPage.jsx"));
const AboutPage = React.lazy(() => import("./pages/AboutPage.jsx"));
const InsightsPage = React.lazy(() => import("./pages/InsightsPage.jsx"));
const BlogPostPage = React.lazy(() => import("./pages/BlogPostPage.jsx"));


const MarketingPage = React.lazy(() => import("./pages/MarketingPage.jsx"));
const MarketingSEOPage = React.lazy(() => import("./pages/MarketingSEOPage.jsx"));
const MarketingPaidAdsPage = React.lazy(() => import("./pages/MarketingPaidAdsPage.jsx"));
const MarketingReputationPage = React.lazy(() => import("./pages/MarketingReputationPage.jsx"));
const MarketingContentMarketingPage = React.lazy(() => import("./pages/MarketingContentMarketingPage.jsx"));
const MarketingEmailSocialPage = React.lazy(() => import("./pages/MarketingEmailSocialPage.jsx"));
const MarketingSalesFunnelPage = React.lazy(() => import("./pages/MarketingSalesFunnelPage.jsx"));

const MediaPage = React.lazy(() => import("./pages/MediaPage.jsx"));
const MediaVideoProductionPage = React.lazy(() => import("./pages/MediaVideoProductionPage.jsx"));
const MediaPhotographyPage = React.lazy(() => import("./pages/MediaPhotographyPage.jsx"));
const MediaTestimonialPage = React.lazy(() => import("./pages/MediaTestimonialPage.jsx"));
const MediaAerialDronePage = React.lazy(() => import("./pages/MediaAerialDronePage.jsx"));

const DesignPage = React.lazy(() => import("./pages/DesignPage.jsx"));
const DesignWebDesignPage = React.lazy(() => import("./pages/DesignWebDesignPage.jsx"));
const DesignBrandingPage = React.lazy(() => import("./pages/DesignBrandingPage.jsx"));
const DesignUXUIPage = React.lazy(() => import("./pages/DesignUXUIPage.jsx"));
const DesignGraphicDesignPage = React.lazy(() => import("./pages/DesignGraphicDesignPage.jsx"));
const FreeAuditPage = React.lazy(() => import("./pages/FreeAuditPage.jsx"));
const ThankYouPage = React.lazy(() => import("./pages/ThankYouPage.jsx"));


// Portfolio pages
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage.jsx"));
const MarinaManhattanHarbourPage = React.lazy(() => import("./pages/portfolio/MarinaManhattanHarbourPage.jsx"));
const ElSenorPigPage = React.lazy(() => import("./pages/portfolio/ElSenorPigPage.jsx"));
const QueenCityRiverboatsPage = React.lazy(() => import("./pages/portfolio/QueenCityRiverboatsPage.jsx"));
const SpadeKreationsPage = React.lazy(() => import("./pages/portfolio/SpadeKreationsPage.jsx"));
const ManhattanHarbourLivingPage = React.lazy(() => import("./pages/portfolio/ManhattanHarbourLivingPage.jsx"));
const ChateauHeritageSquarePage = React.lazy(() => import("./pages/portfolio/ChateauHeritageSquarePage.jsx"));

// Legal pages (lazy)
const TermsPage = React.lazy(() => import("./pages/TermsPage.jsx"));
const PrivacyPage = React.lazy(() => import("./pages/PrivacyPage.jsx"));

// Components
import BrandedLoadingSpinner from "./components/BrandedLoadingSpinner.jsx";
import FloatingActionButton from "./components/FloatingActionButton.jsx";
import StickyCTABar from "./components/StickyCTABar.jsx";
import ExitIntentPopup from "./components/ExitIntentPopup.jsx";
import SimpleMobileNavigation from "./components/SimpleMobileNavigation.jsx";
import { MobileStickyFooter } from "./components/MobileTouchComponents.jsx";
import { LocalBusinessSchema, OrganizationSchema, WebsiteSchema } from "./components/StructuredData.jsx";
import { HomeSEO, AboutSEO, ContactSEO, PortfolioSEO, InsightsSEO } from "./components/SEO.jsx";

/* -----------------------------
   Helpers: Mobile-only entrance
------------------------------*/

// Self-contained proof strip (no external variables required)
import useIsMobile from "./hooks/useIsMobile";

function ProofStrip({ logos }) {
  const isMobile = useIsMobile(1100); // mobile threshold you chose

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="w-full">
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            Trusted by Leading Businesses in{" "}
            <span className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent">
              Cincinnati
            </span>{" "}
            and Nationwide
          </p>
        </div>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden w-full marquee-mask">
          <div className="flex animate-infinite-scroll whitespace-nowrap min-w-max gap-x-8 md:gap-x-12">
            {/* First set */}
            {logos.map((logo, i) => (
              <div key={`set1-${i}`} className="flex-shrink-0 w-32 md:w-48 h-16 flex items-center justify-center">
                <img
                  src={`/Client_logos/${logo}`}
                  alt={logo.replace(".svg", "").replace(/Logo|logo/g, "").trim()}
                  loading={isMobile ? "eager" : "lazy"}        // eager on mobile to stop late pop-in
                  fetchpriority={isMobile ? "high" : "auto"}    // prioritize on mobile
                  decoding="async"
                  width="192"
                  height="48"
                  className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless wrap */}
            {logos.map((logo, i) => (
              <div key={`set2-${i}`} className="flex-shrink-0 w-32 md:w-48 h-16 flex items-center justify-center" aria-hidden="true">
                <img
                  src={`/Client_logos/${logo}`}
                  alt=""
                  loading="lazy"
                  fetchpriority="auto"
                  decoding="async"
                  width="192"
                  height="48"
                  className="max-h-12 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* -----------------------------
   Layout: Header / Footer
------------------------------*/

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState({ marketing: false, media: false, design: false });
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/"  className="flex items-center group">
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
                
                className={`flex items-center transition-colors ${
                  location.pathname.startsWith("/marketing") ? "text-[#4bbf39]" : "text-gray-700 hover:text-[#4bbf39]"
                }`}
                onMouseEnter={() => setDropdownOpen((p) => ({ ...p, marketing: true }))}
                onMouseLeave={() => setDropdownOpen((p) => ({ ...p, marketing: false }))}
              >
                Marketing
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {dropdownOpen.marketing && (
                <div
                  className="absolute top-full left-0 -mt-1 w-64 bg-white rounded-lg shadow-xs border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setDropdownOpen((p) => ({ ...p, marketing: true }))}
                  onMouseLeave={() => setDropdownOpen((p) => ({ ...p, marketing: false }))}
                  style={{ paddingTop: "12px" }}
                >
                  <Link to="/marketing/seo"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    SEO & Local SEO
                  </Link>
                  <Link to="/marketing/ad-management"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Paid Ads Management
                  </Link>
                  <Link
                    to="/marketing/reputation-management"
                    
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]"
                  >
                    Review & Reputation Management
                  </Link>
                  <Link
                    to="/marketing/content-marketing"
                    
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]"
                  >
                    Content Marketing & Blogging
                  </Link>
                  <Link
                    to="/marketing/email-social-marketing"
                    
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]"
                  >
                    Email & Social Campaigns
                  </Link>
                  <Link
                    to="/marketing/sales-funnels"
                    
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]"
                  >
                    Sales Funnels & Lead Generation
                  </Link>
                </div>
              )}
            </div>

            {/* Media Dropdown */}
            <div className="relative group">
              <Link
                to="/media"
                
                className={`flex items-center transition-colors ${
                  location.pathname.startsWith("/media") ? "text-[#4bbf39]" : "text-gray-700 hover:text-[#4bbf39]"
                }`}
                onMouseEnter={() => setDropdownOpen((p) => ({ ...p, media: true }))}
                onMouseLeave={() => setDropdownOpen((p) => ({ ...p, media: false }))}
              >
                Media
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {dropdownOpen.media && (
                <div
                  className="absolute top-full left-0 -mt-1 w-64 bg-white rounded-lg shadow-xs border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setDropdownOpen((p) => ({ ...p, media: true }))}
                  onMouseLeave={() => setDropdownOpen((p) => ({ ...p, media: false }))}
                  style={{ paddingTop: "12px" }}
                >
                  <Link to="/media/video-production"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Video Production
                  </Link>
                  <Link to="/media/photography"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Commercial Photography
                  </Link>
                  <Link to="/media/build-credibility"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Testimonial & Case Study Videos
                  </Link>
                  <Link to="/media/aerial-drone"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Aerial & Drone Media
                  </Link>
                </div>
              )}
            </div>

            {/* Design Dropdown */}
            <div className="relative group">
              <Link
                to="/design"
                
                className={`flex items-center transition-colors ${
                  location.pathname.startsWith("/design") ? "text-[#4bbf39]" : "text-gray-700 hover:text-[#4bbf39]"
                }`}
                onMouseEnter={() => setDropdownOpen((p) => ({ ...p, design: true }))}
                onMouseLeave={() => setDropdownOpen((p) => ({ ...p, design: false }))}
              >
                Design
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {dropdownOpen.design && (
                <div
                  className="absolute top-full left-0 -mt-1 w-64 bg-white rounded-lg shadow-xs border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setDropdownOpen((p) => ({ ...p, design: true }))}
                  onMouseLeave={() => setDropdownOpen((p) => ({ ...p, design: false }))}
                  style={{ paddingTop: "12px" }}
                >
                  <Link to="/design/web-design"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Web Design & Development
                  </Link>
                  <Link to="/design/branding"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Brand Identity & Logo Design
                  </Link>
                  <Link to="/design/ux"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    UX/UI Design
                  </Link>
                  <Link to="/design/graphic-design"  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39]">
                    Graphic Design
                  </Link>
                </div>
              )}
            </div>

            <Link to="/portfolio"  className={`transition-colors ${location.pathname === "/portfolio" ? "text-[#4bbf39]" : "text-gray-700 hover:text-[#4bbf39]"}`}>
              Portfolio
            </Link>
            <Link to="/insights"  className={`transition-colors ${location.pathname.startsWith("/insights") ? "text-[#4bbf39]" : "text-gray-700 hover:text-[#4bbf39]"}`}>
              Insights
            </Link>
            <Link to="/about"  className={`transition-colors ${location.pathname === "/about" ? "text-[#4bbf39]" : "text-gray-700 hover:text-[#4bbf39]"}`}>
              About
            </Link>
            <Link to="/contact"  className={`transition-colors ${location.pathname === "/contact" ? "text-[#4bbf39]" : "text-gray-700 hover:text-[#4bbf39]"}`}>
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+15133310555"
              className="flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Phone className="w-4 h-4 mr-2" />
              </motion.div>
              (513) 331-0555
            </motion.a>
            <Link to="/free-audit">
<motion.div
  className="inline-block group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <Button
    aria-label="Free Audit"
    className="relative isolate overflow-hidden rounded-md
               bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white
               shadow-lg transition-shadow duration-300 group-hover:shadow-2xl
               transform-gpu [backface-visibility:hidden]
               focus-visible:ring-2 focus-visible:ring-[#4bbf39]"
  >
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
  );
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
              <li>
                <Link to="/design/web-design"  className="hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/design/ux"  className="hover:text-white transition-colors">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link to="/design/graphic-design"  className="hover:text-white transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/marketing/seo"  className="hover:text-white transition-colors">
                  SEO & Local SEO
                </Link>
              </li>
              <li>
                <Link to="/marketing/paid-ads"  className="hover:text-white transition-colors">
                  Paid Advertising
                </Link>
              </li>
              <li>
                <Link to="/media/video-production"  className="hover:text-white transition-colors">
                  Video Production
                </Link>
              </li>
              <li>
                <Link to="/media/photography"  className="hover:text-white transition-colors">
                  Commercial Photography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about"  className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights"  className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact"  className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/free-audit"  className="hover:text-white transition-colors">
                  Free Audit
                </Link>
              </li>
              <li>
                <Link to="/privacy"  className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service"  className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">© 2025 Uptrade Media. All rights reserved. | Serving Cincinnati, OH & Northern Kentucky</p>
            <button
              
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
  );
}

// --- FeaturedInsights (Home) ---
import useFeaturedPosts from '@/hooks/useFeaturedPosts'

function FeaturedInsights() {
  const { posts, loading } = useFeaturedPosts(3)

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our expert insights on digital marketing,
              web design trends, and business growth strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0,1,2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 w-full bg-gray-200 rounded-lg mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!posts.length) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on digital marketing,
            web design trends, and business growth strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => {
            const href = post.slug?.startsWith('insights/')
              ? `/${post.slug}`
              : `/insights/${post.slug}`

            return (
              <motion.div
                key={post.slug || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xs transition-shadow duration-300 bg-white border-0 overflow-hidden p-0">
                  <div className="relative">
                    <img
                      src={post.image || '/insights/placeholder.webp'}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover"
                      onError={(e) => { e.currentTarget.src = "/insights/placeholder.webp"; }}
                    />
                    {post.category && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 border border-white/30 px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      to={href}
                      className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
<Button
  asChild
  size="lg"
  variant="outline"
  className="btn-mobile btn-zoom border-[#4bbf39] text-[#4bbf39] hover:bg-[#4bbf39] hover:text-white px-8 py-3"
>
  <Link to="/insights" onClick={scrollToTop}>
    View All Insights
    <ArrowRight className="ml-2 w-5 h-5" />
  </Link>
</Button>

        </div>
      </div>
    </section>
  )
}


function HomePage() {
const [expandedFaq, setExpandedFaq] = useState(null);

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

 // Put this just above the return in your HomePage (or equivalent) component
const logos = React.useMemo(
  () => [
    "3CDC_Logo.svg",
    "4M_Lawn_Care_logo.svg",
    "Adams_Real_Estate_Advisors_Logo.svg",
    "Blue_Cattys_Bar_and_Grille_Logo.svg",
    "Boulevard_flats_at_manhattan_harbour_logo.svg",
    "Burnt_store_booking_logo.svg",
    "Gateway_Flats_at_Manhattan_Harbour_logo.svg",
    "GRSM50_logo.svg",
    "Gunning_Homes_Logo.svg",
    "Nikki_Hayden_Realtor_Logo.svg",
    "Prost_Bellevue_Tavern_Logo.svg",
    "Queen_City_Riverboats_Logo.svg",
    "Sexton_Law_Logo.svg",
    "Spade_Kreations_Logo.svg",
    "The_Marina_at_Manhattan_Harbour_logo.svg",
  ],
  []
);
 
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

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Button
    size="lg"
    className="btn-mobile btn-zoom bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white px-8 py-3 relative overflow-hidden group"
    asChild
  >
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

  <Button
    size="lg"
    className="btn-mobile btn-zoom bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 group rounded-md"
    asChild
  >
    <a href="tel:+15133310555">
      <span className="mr-2">
        <Phone className="w-5 h-5" />
      </span>
      (513) 331-0555
    </a>
  </Button>
</div>


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
<ProofStrip logos={logos} />

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
<Link
  to={service.link}
  
  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bbf39] rounded-2xl"
>
  {/* No shadow/rounded here—prevents the “outer tile” */}
  <motion.div
    className="h-full transform-gpu [backface-visibility:hidden]"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* No visual styles on Card itself */}
    <Card className="h-full border-0 bg-transparent shadow-none p-0 rounded-none relative">
      {/* Single, real surface: owns radius, shadow, clipping, and blending */}
      <div className="relative bg-white rounded-2xl overflow-hidden isolate shadow-lg transition-shadow group-hover:shadow-2xl">
        {/* Subtle background wash */}
        <div
          className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-br ${service.color}
                      opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Shine strip (narrow, blended) */}
        <div
          className="pointer-events-none absolute top-0 -left-1/3 z-0 h-full w-1/4 rotate-12
                     bg-gradient-to-r from-transparent via-white/45 to-transparent
                     mix-blend-overlay opacity-0 translate-x-0
                     transition-all duration-700 ease-in-out
                     group-hover:opacity-100 group-hover:translate-x-[220%]"
        />

        {/* Explicit padding to match your layout */}
        <CardHeader className="text-center pb-4 pt-6 px-6 relative z-10">
          <motion.div
            className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color}
                        flex items-center justify-center text-white shadow-sm`}
            whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div whileHover={{ rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              {service.icon}
            </motion.div>
          </motion.div>

          <CardTitle className="text-xl font-bold text-gray-900">
            {service.category}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 px-6 pb-6">
          <ul className="space-y-3">
            {service.services.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[#4bbf39]" />
                <Link
                  to={item.link}
                  className="text-gray-700 hover:text-[#4bbf39] transition-colors duration-200 relative z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToTop();
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

<Button className="btn-mobile btn-zoom w-full mt-6 text-white bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39]">
  Learn More
  <ArrowRight className="ml-2 w-4 h-4" />
</Button>

        </CardContent>
      </div>
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
<Button
  className="btn-mobile btn-zoom bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white"
  asChild
>
  <Link to="/portfolio/queen-city-riverboats">
    View Full Case Study
    <ExternalLink className="ml-2 w-4 h-4" />
  </Link>
</Button>

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
<Button
  size="lg"
  className="btn-mobile btn-zoom bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
  asChild
>
  <a
    href="https://share.google/o7ZNKsYGbl4hOXbdx"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Star className="w-5 h-5 mr-2" />
    View More Reviews on Google
    <ExternalLink className="w-4 h-4 ml-2" />
  </a>
</Button>

          </div>
        </div>
      </section>

{/* Featured Insights Section */}
<FeaturedInsights />

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
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
  <Button
    size="lg"
    className="btn-mobile btn-zoom bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3 relative overflow-hidden group"
    asChild
  >
    <Link to="/free-audit">
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
    </Link>
  </Button>

  <Button
    size="lg"
    className="btn-mobile btn-zoom bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs rounded-md"
    asChild
  >
    <a href="tel:+15133310555">
      <Phone className="mr-2 w-5 h-5" />
      Call (513) 331-0555
    </a>
  </Button>
</div>


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

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <HomeSEO />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      <Header />
      <main>
        <Suspense fallback={<BrandedLoadingSpinner />}>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
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
            <Route path="/thank-you" element={<ThankYouPage />} />

            {/* Marketing */}
            <Route path="/marketing/seo" element={<MarketingSEOPage />} />
            <Route path="/marketing/ad-management" element={<MarketingPaidAdsPage />} />
            <Route path="/marketing/reputation-management" element={<MarketingReputationPage />} />
            <Route path="/marketing/content-marketing" element={<MarketingContentMarketingPage />} />
            <Route path="/marketing/email-social-marketing" element={<MarketingEmailSocialPage />} />
            <Route path="/marketing/sales-funnels" element={<MarketingSalesFunnelPage />} />

            {/* Media */}
            <Route path="/media/video-production" element={<MediaVideoProductionPage />} />
            <Route path="/media/photography" element={<MediaPhotographyPage />} />
            <Route path="/media/build-credibility" element={<MediaTestimonialPage />} />
            <Route path="/media/aerial-drone" element={<MediaAerialDronePage />} />

            {/* Design */}
            <Route path="/design/web-design" element={<DesignWebDesignPage />} />
            <Route path="/design/branding" element={<DesignBrandingPage />} />
            <Route path="/design/ux" element={<DesignUXUIPage />} />
            <Route path="/design/graphic-design" element={<DesignGraphicDesignPage />} />

            {/* Legal */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} /> {/* optional alias */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} /> {/* optional alias */}

          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingActionButton />
      <StickyCTABar variant="audit" showAfterScroll={800} />
      <ExitIntentPopup offer="audit" enabled={true} />
      <MobileStickyFooter show={location.pathname !== "/contact"} />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
