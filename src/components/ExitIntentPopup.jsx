import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Clock, Star, ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'

const ExitIntentPopup = ({ 
  enabled = true,
  delay = 3000, // Minimum time on page before showing
  offer = 'audit',
  showOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const [countdown, setCountdown] = useState(300) // 5 minutes

  useEffect(() => {
    if (!enabled || hasShown) return

    // Track time on page
    const timeTracker = setInterval(() => {
      setTimeOnPage(prev => prev + 1000)
    }, 1000)

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setCountdown(prev => Math.max(0, prev - 1))
    }, 1000)

    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (
        e.clientY <= 0 && 
        timeOnPage >= delay && 
        !hasShown && 
        !isVisible
      ) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    // Mobile scroll detection (alternative to mouse leave)
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (
        currentScrollY < lastScrollY && 
        currentScrollY < 100 && 
        timeOnPage >= delay && 
        !hasShown && 
        !isVisible
      ) {
        setIsVisible(true)
        setHasShown(true)
      }
      lastScrollY = currentScrollY
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(timeTracker)
      clearInterval(countdownTimer)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [enabled, delay, hasShown, timeOnPage, isVisible])

  const offers = {
    audit: {
      title: "Wait! Don't Miss Out",
      subtitle: "Get Your FREE Website Audit Before You Go",
      description: "See exactly how to increase your website traffic by 200%+ like our clients",
      buttonText: "Get My Free Audit",
      buttonAction: () => window.open('/free-audit', '_blank'),
      benefits: [
        "Complete SEO analysis worth $500",
        "Conversion optimization tips",
        "Competitor comparison report",
        "Custom action plan included"
      ],
      urgency: "Limited spots available today",
      gradient: "from-[#4bbf39] to-[#39bfb0]"
    },
    consultation: {
      title: "Before You Leave...",
      subtitle: "Claim Your FREE 30-Minute Strategy Session",
      description: "Get a custom growth plan designed specifically for your business",
      buttonText: "Book Free Consultation",
      buttonAction: () => window.open('/contact', '_blank'),
      benefits: [
        "30-minute one-on-one session",
        "Custom growth roadmap",
        "Expert insights & recommendations",
        "No sales pitch, just value"
      ],
      urgency: "Only 3 slots left this week",
      gradient: "from-[#4bbf39] to-[#39bfb0]"
    },
    discount: {
      title: "Special Offer Just For You!",
      subtitle: "Save 25% on Your First Project",
      description: "This exclusive discount expires in 5 minutes",
      buttonText: "Claim 25% Discount",
      buttonAction: () => window.open('/contact', '_blank'),
      benefits: [
        "25% off any service package",
        "Free consultation included",
        "Priority project scheduling",
        "30-day money-back guarantee"
      ],
      urgency: `Offer expires in ${Math.floor(countdown / 60)}:${(countdown % 60).toString().padStart(2, '0')}`,
      gradient: "from-[#4bbf39] to-[#39bfb0]"
    }
  }

  const currentOffer = offers[offer]

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleClaim = () => {
    currentOffer.buttonAction()
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10 w-full max-w-lg"
          >
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              {/* Animated background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${currentOffer.gradient} opacity-5`}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Close button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4 text-gray-600" />
              </motion.button>

              <CardContent className="p-8 relative z-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-6"
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${currentOffer.gradient} flex items-center justify-center text-white`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Gift className="w-8 h-8" />
                  </motion.div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentOffer.title}
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    {currentOffer.subtitle}
                  </h3>
                  <p className="text-gray-600">
                    {currentOffer.description}
                  </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="grid gap-3">
                    {currentOffer.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#4bbf39] flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Urgency */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6 text-center"
                >
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    {currentOffer.urgency}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleClaim}
                      className={`w-full bg-gradient-to-r ${currentOffer.gradient} hover:opacity-90 text-white font-bold py-4 text-lg relative overflow-hidden group`}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      />

                      {/* Sparkles */}
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute"
                            initial={{ 
                              opacity: 0, 
                              scale: 0,
                              x: Math.random() * 200 - 100,
                              y: Math.random() * 60 - 30
                            }}
                            animate={{ 
                              opacity: [0, 1, 0], 
                              scale: [0, 1, 0],
                              rotate: 360
                            }}
                            transition={{ 
                              duration: 1,
                              delay: i * 0.1,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          >
                            <Star className="w-3 h-3 text-yellow-300" />
                          </motion.div>
                        ))}
                      </motion.div>

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5" />
                        {currentOffer.buttonText}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 flex justify-center gap-4 text-xs text-gray-500"
                >
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-[#4bbf39]" />
                    No spam
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-[#4bbf39]" />
                    100% free
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-[#4bbf39]" />
                    Instant access
                  </div>
                </motion.div>
              </CardContent>

              {/* Floating decorations */}
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-[#4bbf39] rounded-full opacity-30"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-30"
                animate={{ 
                  scale: [1.5, 1, 1.5],
                  opacity: [0.6, 0.3, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ExitIntentPopup
