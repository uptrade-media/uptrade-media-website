import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const SimpleMobileNavigation = ({ scrollToTop }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (path) => {
    setIsOpen(false)
    scrollToTop()
  }

  const menuItems = [
    { title: 'Home', path: '/' },
    { 
      title: 'Marketing', 
      path: '/marketing',
      submenu: [
        { title: 'SEO & Local SEO', path: '/marketing/seo' },
        { title: 'Paid Ads Management', path: '/marketing/ad-management' },
        { title: 'Review & Reputation Management', path: '/marketing/reputation-management' },
        { title: 'Content Marketing & Blogging', path: '/marketing/content-marketing' },
        { title: 'Email & Social Campaigns', path: '/marketing/email-social-marketing' },
        { title: 'Sales Funnels & Lead Generation', path: '/marketing/sales-funnels' }
      ]
    },
    { 
      title: 'Media', 
      path: '/media',
      submenu: [
        { title: 'Video Production', path: '/media/video-production' },
        { title: 'Commercial Photography', path: '/media/photography' },
        { title: 'Testimonial & Case Study Videos', path: '/media/build-credibility' },
        { title: 'Aerial & Drone Media', path: '/media/aerial-drone' }
      ]
    },
    { 
      title: 'Design', 
      path: '/design',
      submenu: [
        { title: 'Web Design & Development', path: '/design/web-design' },
        { title: 'Brand Identity & Logo Design', path: '/design/branding' },
        { title: 'UX/UI Design', path: '/design/ux' },
        { title: 'Graphic Design', path: '/design/graphic-design' }
      ]
    },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Insights', path: '/insights' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="flex md:hidden items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-lg shadow-md z-[10001]"
        style={{
          backgroundColor: isOpen ? '#333' : 'white',
          color: isOpen ? 'white' : '#333'
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu overlay and panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 10000
            }}
          />

          {/* Menu panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '300px',
              maxWidth: '85vw',
              height: '100vh',
              backgroundColor: 'white',
              zIndex: 10000,
              boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div
              style={{
                background: 'linear-gradient(to right, #4bbf39, #39bfb0)',
                color: 'white',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px'
              }}
            >
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu items */}
            <div
              style={{
                flex: 1,
                padding: '20px',
                overflowY: 'auto',
                backgroundColor: '#f8f9fa',
                minHeight: '300px'
              }}
            >
              {menuItems.map((item, index) => (
                <div key={item.title} style={{ marginBottom: '10px' }}>
                  {item.submenu ? (
                    <div>
                      <Link
                        to={item.path}
                        onClick={() => handleLinkClick(item.path)}
                        style={{
                          display: 'block',
                          padding: '15px',
                          backgroundColor: location.pathname === item.path ? '#e8f5e8' : 'white',
                          border: '1px solid #ddd',
                          borderRadius: '8px',
                          marginBottom: '5px',
                          fontWeight: 'bold',
                          color: location.pathname === item.path ? '#4bbf39' : '#333',
                          textDecoration: 'none'
                        }}
                      >
                        {item.title}
                      </Link>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => handleLinkClick(subItem.path)}
                          style={{
                            display: 'block',
                            padding: '12px 15px',
                            backgroundColor: 'white',
                            border: '1px solid #eee',
                            borderRadius: '6px',
                            marginBottom: '3px',
                            marginLeft: '15px',
                            textDecoration: 'none',
                            color: '#666',
                            fontSize: '14px'
                          }}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      style={{
                        display: 'block',
                        padding: '15px',
                        backgroundColor: location.pathname === item.path ? '#e8f5e8' : 'white',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        color: location.pathname === item.path ? '#4bbf39' : '#333',
                        fontWeight: location.pathname === item.path ? 'bold' : 'normal'
                      }}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default SimpleMobileNavigation
