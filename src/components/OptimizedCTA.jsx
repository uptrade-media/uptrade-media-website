import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Phone, Mail, Star, Users, Clock, CheckCircle, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'

const OptimizedCTA = ({ 
  variant = 'primary',
  size = 'default',
  urgency = false,
  socialProof = false,
  testimonial = null,
  customText = null,
  showBenefits = false,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [urgencyTimer, setUrgencyTimer] = useState(null)

  useEffect(() => {
    setIsVisible(true)
    if (urgency) {
      // Create urgency timer (24 hours from now)
      const endTime = new Date().getTime() + (24 * 60 * 60 * 1000)
      setUrgencyTimer(endTime)
    }
  }, [urgency])

  const variants = {
    primary: {
      title: customText?.title || "Get Your Free Website Audit",
      subtitle: customText?.subtitle || "Discover how to increase your website traffic by 200%+ like our clients",
      buttonText: customText?.button || "Get Free Audit Now",
      buttonStyle: "bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white",
      icon: Zap,
      benefits: [
        "Complete SEO analysis",
        "Conversion optimization tips", 
        "Competitor comparison",
        "Action plan included"
      ]
    },
    phone: {
      title: customText?.title || "Ready to Get Started?",
      subtitle: customText?.subtitle || "Speak with our experts today",
      buttonText: customText?.button || "Call (513) 331-0555",
      buttonStyle: "bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white",
      icon: Phone,
      href: "tel:+15133310555"
    },
    consultation: {
      title: customText?.title || "Free Strategy Consultation",
      subtitle: customText?.subtitle || "Get a custom growth plan for your business",
      buttonText: customText?.button || "Book Free Consultation",
      buttonStyle: "bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white",
      icon: Users,
      benefits: [
        "30-minute strategy session",
        "Custom growth roadmap",
        "No obligation",
        "Expert insights"
      ]
    },
    quote: {
      title: customText?.title || "Get Your Project Quote",
      subtitle: customText?.subtitle || "Custom pricing for your specific needs",
      buttonText: customText?.button || "Get Custom Quote",
      buttonStyle: "bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white",
      icon: Mail,
      href: "/contact"
    }
  }

  const currentVariant = variants[variant]
  const IconComponent = currentVariant.icon

  const CountdownTimer = ({ endTime }) => {
    const [timeLeft, setTimeLeft] = useState('')

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date().getTime()
        const distance = endTime - now

        if (distance > 0) {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((distance % (1000 * 60)) / 1000)
          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`)
        } else {
          setTimeLeft('Expired')
        }
      }, 1000)

      return () => clearInterval(timer)
    }, [endTime])

    return (
      <motion.div
        className="flex items-center gap-2 text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Clock className="w-4 h-4" />
        Limited Time: {timeLeft}
      </motion.div>
    )
  }

  const SocialProofBadge = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-sm text-gray-600 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
    >
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
        ))}
      </div>
      <span className="font-medium">5.0 Stars</span>
      <span className="text-gray-500">•</span>
      <span>Trusted Partner</span>
    </motion.div>
  )

  const TestimonialQuote = ({ testimonial }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-md mx-auto"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.company}</div>
        </div>
      </div>
      <p className="text-sm text-gray-700 italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
        ))}
      </div>
    </motion.div>
  )

  const BenefitsList = ({ benefits }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4"
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          <CheckCircle className="w-4 h-4 text-[#4bbf39] flex-shrink-0" />
          {benefit}
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* Background with animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl"
        animate={{ 
          background: [
            "linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f9fafb 100%)",
            "linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #ffffff 100%)",
            "linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f9fafb 100%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 text-center">
        {/* Urgency Timer */}
        {urgency && urgencyTimer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 flex justify-center"
          >
            <CountdownTimer endTime={urgencyTimer} />
          </motion.div>
        )}

        {/* Social Proof Badge */}
        {socialProof && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex justify-center"
          >
            <SocialProofBadge />
          </motion.div>
        )}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {currentVariant.title}
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {currentVariant.subtitle}
          </p>
        </motion.div>

        {/* Benefits List */}
        {showBenefits && currentVariant.benefits && (
          <BenefitsList benefits={currentVariant.benefits} />
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          {currentVariant.href ? (
            <motion.a
              href={currentVariant.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className={`${currentVariant.buttonStyle} px-8 py-4 text-lg font-semibold relative overflow-hidden group shadow-xl`}
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
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 50 - 25
                      }}
                      animate={{ 
                        opacity: [0, 1, 0], 
                        scale: [0, 1, 0],
                        rotate: 360
                      }}
                      transition={{ 
                        duration: 1,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                    </motion.div>
                  ))}
                </motion.div>

                <span className="relative z-10 flex items-center gap-2">
                  <IconComponent className="w-5 h-5" />
                  {currentVariant.buttonText}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.a>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className={`${currentVariant.buttonStyle} px-8 py-4 text-lg font-semibold relative overflow-hidden group shadow-xl`}
                {...props}
              >
                {/* Same effects as above */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  <IconComponent className="w-5 h-5" />
                  {currentVariant.buttonText}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Testimonial */}
        {testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <TestimonialQuote testimonial={testimonial} />
          </motion.div>
        )}

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500"
        >
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-[#4bbf39]" />
            No spam, ever
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-[#4bbf39]" />
            100% free
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-[#4bbf39]" />
            Results in 24 hours
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-[#4bbf39] rounded-full opacity-20"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-20"
        animate={{ 
          scale: [1.5, 1, 1.5],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  )
}

export default OptimizedCTA
