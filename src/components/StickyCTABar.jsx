import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, ArrowRight, Zap, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const StickyCTABar = ({ 
  showAfterScroll = 500,
  variant = 'audit',
  position = 'bottom',
  dismissible = true 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed && window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else if (window.scrollY <= showAfterScroll) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfterScroll, isDismissed])

  const variants = {
    audit: {
      text: "Get Your Free Website Audit",
      subtext: "See how to increase traffic by 200%+",
      buttonText: "Get Free Audit",
      buttonAction: () => window.open('/free-audit', '_blank'),
      gradient: "from-[#4bbf39] to-[#39bfb0]",
      icon: Zap
    },
    phone: {
      text: "Ready to Get Started?",
      subtext: "Speak with our experts today",
      buttonText: "Call (513) 331-0555",
      buttonAction: () => window.open('tel:+15133310555'),
      gradient: "from-[#4bbf39] to-[#39bfb0]",
      icon: Phone
    },
    urgency: {
      text: "Limited Free Audits Available",
      subtext: "Secure your spot this week",
      buttonText: "Get Started Now",
      buttonAction: () => window.open('/contact', '_blank'),
      gradient: "from-[#4bbf39] to-[#39bfb0]",
      icon: Clock
    },
    consultation: {
      text: "Free 30-Min Strategy Session",
      subtext: "Get a custom growth plan",
      buttonText: "Book Free Call",
      buttonAction: () => window.open('/contact', '_blank'),
      gradient: "from-[#4bbf39] to-[#39bfb0]",
      icon: Clock
    }
  }

  const currentVariant = variants[variant]
  const IconComponent = currentVariant.icon

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  const positionClasses = {
    bottom: 'bottom-0 left-0 right-0',
    top: 'top-0 left-0 right-0'
  }

  const animationVariants = {
    bottom: {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 }
    },
    top: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -100, opacity: 0 }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={animationVariants[position].initial}
          animate={animationVariants[position].animate}
          exit={animationVariants[position].exit}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed ${positionClasses[position]} z-50 shadow-2xl`}
        >
          <div className={`bg-gradient-to-r ${currentVariant.gradient} text-white relative overflow-hidden`}>
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0, 0.1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            <div className="relative z-10 px-4 py-3">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Icon with pulse animation */}
                  <motion.div
                    className="hidden sm:flex w-10 h-10 bg-white/20 rounded-full items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.div>

                  {/* Text content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <motion.h4 
                        className="font-bold text-sm sm:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {currentVariant.text}
                      </motion.h4>
                      <motion.p 
                        className="text-xs sm:text-sm opacity-90"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {currentVariant.subtext}
                      </motion.p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={currentVariant.buttonAction}
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base relative overflow-hidden group"
                    >
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-50"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        {currentVariant.buttonText}
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>

                  {/* Dismiss button */}
                  {dismissible && (
                    <motion.button
                      onClick={handleDismiss}
                      className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>

            {/* Progress bar for urgency */}
            {variant === 'urgency' && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white/30"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 10, ease: "linear" }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyCTABar
