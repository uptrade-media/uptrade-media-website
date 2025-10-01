import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  ChevronRight,
  Home,
  Briefcase,
  Camera,
  Palette,
  TrendingUp,
  FileText,
  User,
  Mail,
  Star,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const MobileNavigation = ({ scrollToTop }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const location = useLocation()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setExpandedMenu(null)
  }, [location])

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && isOpen) {
      setIsOpen(false)
    }
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    {
      title: 'Home',
      icon: Home,
      path: '/',
      color: 'text-[#4bbf39]'
    },
    {
      title: 'Services',
      icon: Briefcase,
      color: 'text-blue-500',
      submenu: [
        {
          category: 'Media Solutions',
          icon: Camera,
          color: 'text-blue-500',
          items: [
            { name: 'Video Production', path: '/media/video-production' },
            { name: 'Photography', path: '/media/photography' },
            { name: 'Testimonial Videos', path: '/media/testimonial' },
            { name: 'Aerial & Drone Media', path: '/media/aerial-drone' }
          ]
        },
        {
          category: 'Design Solutions',
          icon: Palette,
          color: 'text-purple-500',
          items: [
            { name: 'Web Design & Development', path: '/design/web-design' },
            { name: 'Brand Identity & Logo Design', path: '/design/branding' },
            { name: 'UX/UI Design', path: '/design/ux' },
            { name: 'Graphic Design', path: '/design/graphic-design' }
          ]
        },
        {
          category: 'Marketing Solutions',
          icon: TrendingUp,
          color: 'text-[#4bbf39]',
          items: [
            { name: 'SEO & Local SEO', path: '/marketing/seo' },
            { name: 'Paid Ads Management', path: '/marketing/ad-management' },
            { name: 'Review & Reputation Management', path: '/marketing/reputation-management' },
            { name: 'Email & Social Campaigns', path: '/marketing/email-social-marketing' },
            { name: 'Sales Funnels & Lead Generation', path: '/marketing/sales-funnels' }
          ]
        }
      ]
    },
    {
      title: 'Portfolio',
      icon: FileText,
      path: '/portfolio',
      color: 'text-purple-500'
    },
    {
      title: 'Insights',
      icon: FileText,
      path: '/insights',
      color: 'text-orange-500'
    },
    {
      title: 'About',
      icon: User,
      path: '/about',
      color: 'text-gray-600'
    },
    {
      title: 'Contact',
      icon: Mail,
      path: '/contact',
      color: 'text-red-500'
    }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setExpandedMenu(null)
  }

  const toggleSubmenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index)
  }

  const handleLinkClick = (path) => {
    scrollToTop()
    setIsOpen(false)
    setExpandedMenu(null)
  }

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        onClick={toggleMenu}
        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-lg"
        whileTap={{ scale: 0.95 }}
        animate={{ 
          backgroundColor: isOpen ? '#ef4444' : '#ffffff',
          color: isOpen ? '#ffffff' : '#374151'
        }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 md:hidden overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full"
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {/* Quick CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-3"
                >
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">5.0 Stars</span>
                  </div>
                  <p className="text-sm opacity-90">Get your free website audit today!</p>
                </motion.div>
              </div>

              {/* Menu items */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="mb-2"
                    >
                      {item.submenu ? (
                        // Menu item with submenu
                        <div>
                          <motion.button
                            onClick={() => toggleSubmenu(index)}
                            className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${item.color}`}>
                                <item.icon className="w-5 h-5" />
                              </div>
                              <span className="font-medium text-gray-900">{item.title}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: expandedMenu === index ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </motion.button>

                          {/* Submenu */}
                          <AnimatePresence>
                            {expandedMenu === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pt-2">
                                  {item.submenu.map((category, catIndex) => (
                                    <div key={category.category} className="mb-4">
                                      <div className="flex items-center gap-2 mb-2 px-3">
                                        <category.icon className={`w-4 h-4 ${category.color}`} />
                                        <span className="text-sm font-medium text-gray-700">
                                          {category.category}
                                        </span>
                                      </div>
                                      {category.items.map((subItem, subIndex) => (
                                        <motion.div
                                          key={subItem.name}
                                          initial={{ opacity: 0, x: 10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: catIndex * 0.1 + subIndex * 0.05 }}
                                        >
                                          <Link
                                            to={subItem.path}
                                            onClick={() => handleLinkClick(subItem.path)}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#4bbf39] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                          >
                                            {subItem.name}
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        // Simple menu item
                        <Link
                          to={item.path}
                          onClick={() => handleLinkClick(item.path)}
                          className={`flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 ${
                            location.pathname === item.path ? 'bg-[#4bbf39]/10 border-l-4 border-[#4bbf39]' : ''
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${
                            location.pathname === item.path ? 'bg-[#4bbf39] text-white' : item.color
                          }`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <span className={`font-medium ${
                            location.pathname === item.path ? 'text-[#4bbf39]' : 'text-gray-900'
                          }`}>
                            {item.title}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer CTAs */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="space-y-3">
                  <motion.a
                    href="tel:+15133310555"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white py-3 px-4 rounded-xl font-medium"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    Call (513) 331-0555
                  </motion.a>
                  
                  <Link to="/free-audit" onClick={() => handleLinkClick('/free-audit')}>
                    <motion.div
                      className="flex items-center justify-center gap-2 w-full bg-white border-2 border-[#4bbf39] text-[#4bbf39] py-3 px-4 rounded-xl font-medium"
                      whileTap={{ scale: 0.98 }}
                    >
                      <Zap className="w-5 h-5" />
                      Free Website Audit
                    </motion.div>
                  </Link>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  Swipe right to close menu
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavigation
