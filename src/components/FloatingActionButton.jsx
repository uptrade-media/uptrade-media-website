import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, ArrowUp, Sparkles } from 'lucide-react'

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const actions = [
    {
      icon: Phone,
      label: 'Call Us',
      action: () => window.open('tel:+15133310555'),
      color: 'from-green-500 to-green-600',
      delay: 0.1
    },
    {
      icon: MessageCircle,
      label: 'Get Quote',
      action: () => window.open('/contact'),
      color: 'from-[#4bbf39] to-[#39bfb0]',
      delay: 0.2
    },
    {
      icon: ArrowUp,
      label: 'Back to Top',
      action: scrollToTop,
      color: 'from-[#4bbf39] to-[#39bfb0]',
      delay: 0.3
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Action buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-3 mb-4"
              >
                {actions.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0 }}
                    transition={{ delay: action.delay, type: "spring", stiffness: 300 }}
                    onClick={action.action}
                    className={`group relative w-12 h-12 rounded-full bg-gradient-to-r ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <action.icon className="w-5 h-5" />
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none"
                    >
                      {action.label}
                      <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45 transform -translate-y-1/2" />
                    </motion.div>

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white opacity-0"
                      whileTap={{ scale: 2, opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              rotate: isExpanded ? 45 : 0,
              backgroundColor: isExpanded ? "#ef4444" : undefined
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Sparkles effect */}
            <AnimatePresence>
              {!isExpanded && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        x: Math.random() * 40 - 20,
                        y: Math.random() * 40 - 20
                      }}
                      animate={{ 
                        opacity: [0, 1, 0], 
                        scale: [0, 1, 0],
                        rotate: 360
                      }}
                      transition={{ 
                        duration: 2,
                        delay: i * 0.5,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] opacity-30"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Icon */}
            <motion.div
              animate={{ rotate: isExpanded ? -45 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isExpanded ? (
                <div className="w-6 h-6 relative">
                  <div className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              ) : (
                <Sparkles className="w-6 h-6" />
              )}
            </motion.div>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white opacity-0"
              whileTap={{ scale: 2, opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingActionButton
