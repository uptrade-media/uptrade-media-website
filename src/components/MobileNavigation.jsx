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
  const location = useLocation()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setExpandedMenu(null)
  }, [location])

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
      title: 'Marketing',
      icon: TrendingUp,
      color: 'text-[#4bbf39]',
      submenu: [
        { name: 'SEO & Local SEO', path: '/marketing/seo' },
        { name: 'Paid Ads Management', path: '/marketing/ad-management' },
        { name: 'Review & Reputation Management', path: '/marketing/reputation-management' },
        { name: 'Content Marketing & Blogging', path: '/marketing/content-marketing' },
        { name: 'Email & Social Campaigns', path: '/marketing/email-social-marketing' },
        { name: 'Sales Funnels & Lead Generation', path: '/marketing/sales-funnels' }
      ]
    },
    {
      title: 'Media',
      icon: Camera,
      color: 'text-blue-500',
      submenu: [
        { name: 'Video Production', path: '/media/video-production' },
        { name: 'Commercial Photography', path: '/media/photography' },
        { name: 'Testimonial & Case Study Videos', path: '/media/build-credibility' },
        { name: 'Aerial & Drone Media', path: '/media/aerial-drone' }
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'text-purple-500',
      submenu: [
        { name: 'Web Design & Development', path: '/design/web-design' },
        { name: 'Brand Identity & Logo Design', path: '/design/branding' },
        { name: 'UX/UI Design', path: '/design/ux' },
        { name: 'Graphic Design', path: '/design/graphic-design' }
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
      <button
        onClick={toggleMenu}
        className={`relative z-[10000] w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transition-all duration-200 ${
          isOpen 
            ? 'bg-gray-800 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
        style={{position: 'fixed', top: '20px', right: '20px'}}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[9999] md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Quick CTA */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">5.0 Stars</span>
                  </div>
                  <p className="text-sm opacity-90">Get your free website audit today!</p>
                </div>
              </div>

              {/* Menu items */}
              <div className="bg-white" style={{minHeight: '400px', height: 'calc(100vh - 200px)'}}>
                <div style={{padding: '10px', backgroundColor: '#ff0000', color: 'white', fontSize: '14px'}}>
                  MENU ITEMS SECTION - {menuItems.length} items
                </div>
                <nav className="p-4">
                  {menuItems.map((item, index) => (
                    <div key={item.title} className="mb-2">
                      {item.submenu ? (
                        // Menu item with submenu
                        <div>
                          <button
                            onClick={() => toggleSubmenu(index)}
                            className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 bg-white text-gray-900 border border-gray-200"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${item.color}`}>
                                <item.icon className="w-5 h-5" />
                              </div>
                              <span className="font-medium text-gray-900">{item.title}</span>
                            </div>
                            <ChevronRight 
                              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                expandedMenu === index ? 'rotate-90' : ''
                              }`} 
                            />
                          </button>

                          {/* Submenu */}
                          {expandedMenu === index && (
                            <div className="pl-4 pt-2">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => handleLinkClick(subItem.path)}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-[#4bbf39] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        // Simple menu item
                        <Link
                          to={item.path}
                          onClick={() => handleLinkClick(item.path)}
                          className={`flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 bg-white text-gray-900 border border-gray-200 ${
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
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <p className="text-xs text-gray-500 text-center">
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
