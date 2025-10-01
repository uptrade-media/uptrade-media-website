import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, Phone, Mail, ArrowRight } from 'lucide-react'

// Mobile-optimized button with haptic feedback simulation
export const MobileButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'default',
  className = '',
  disabled = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const variants = {
    primary: 'bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white',
    secondary: 'bg-white border-2 border-[#4bbf39] text-[#4bbf39]',
    outline: 'bg-transparent border border-gray-300 text-gray-700',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    default: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]'
  }

  const handleTouchStart = () => {
    setIsPressed(true)
    // Simulate haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(10)
    }
  }

  const handleTouchEnd = () => {
    setIsPressed(false)
  }

  return (
    <motion.button
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
        rounded-xl font-medium transition-all duration-200 
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        touch-manipulation select-none
        flex items-center justify-center gap-2
        shadow-lg active:shadow-md
      `}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isPressed ? 0.95 : 1,
        boxShadow: isPressed 
          ? '0 4px 12px rgba(0,0,0,0.15)' 
          : '0 8px 25px rgba(0,0,0,0.15)'
      }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Swipeable card component for mobile
export const SwipeableCard = ({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  className = '',
  swipeThreshold = 100 
}) => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])
  const rotate = useTransform(x, [-200, 0, 200], [-10, 0, 10])

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset > swipeThreshold || velocity > 500) {
      onSwipeRight && onSwipeRight()
    } else if (offset < -swipeThreshold || velocity < -500) {
      onSwipeLeft && onSwipeLeft()
    }
    
    x.set(0)
  }

  return (
    <motion.div
      className={`${className} cursor-grab active:cursor-grabbing touch-manipulation`}
      style={{ x, opacity, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  )
}

// Mobile-optimized carousel
export const MobileCarousel = ({ items, renderItem, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === items.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? items.length - 1 : prevIndex - 1
      }
    })
  }

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-xl" ref={containerRef}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="cursor-grab active:cursor-grabbing"
        >
          {renderItem(items[currentIndex], currentIndex)}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#4bbf39]' : 'bg-gray-300'
            }`}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: index === currentIndex ? 1.2 : 1
            }}
          />
        ))}
      </div>

      {/* Navigation arrows for larger mobile screens */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <motion.button
          onClick={() => paginate(-1)}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 ml-2"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center">
        <motion.button
          onClick={() => paginate(1)}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 mr-2"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  )
}

// Mobile-optimized contact buttons
export const MobileContactButtons = ({ className = '' }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <MobileButton
        variant="primary"
        size="lg"
        onClick={() => window.open('tel:+15133310555')}
        className="flex-1"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </MobileButton>
      
      <MobileButton
        variant="secondary"
        size="lg"
        onClick={() => window.open('/contact')}
        className="flex-1"
      >
        <Mail className="w-5 h-5" />
        Get Quote
      </MobileButton>
    </div>
  )
}

// Pull-to-refresh component
export const PullToRefresh = ({ onRefresh, children, threshold = 80 }) => {
  const [isPulling, setIsPulling] = useState(false)
  const [pullDistance, setPullDistance] = useState(0)
  const y = useMotionValue(0)

  const handleDrag = (event, info) => {
    const distance = info.offset.y
    if (distance > 0 && window.scrollY === 0) {
      setPullDistance(distance)
      setIsPulling(distance > threshold)
    }
  }

  const handleDragEnd = (event, info) => {
    if (pullDistance > threshold) {
      onRefresh()
    }
    setPullDistance(0)
    setIsPulling(false)
    y.set(0)
  }

  return (
    <motion.div
      style={{ y }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className="touch-manipulation"
    >
      {/* Pull indicator */}
      {pullDistance > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center py-4"
        >
          <div className={`text-sm ${isPulling ? 'text-[#4bbf39]' : 'text-gray-500'}`}>
            {isPulling ? 'Release to refresh' : 'Pull to refresh'}
          </div>
        </motion.div>
      )}
      
      {children}
    </motion.div>
  )
}

// Mobile-optimized form input
export const MobileInput = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused 
            ? '0 0 0 3px rgba(75, 191, 57, 0.1)' 
            : '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full px-4 py-4 text-base border rounded-xl
            focus:outline-none focus:border-[#4bbf39]
            transition-colors duration-200
            min-h-[48px] touch-manipulation
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
          {...props}
        />
        
        {label && (
          <motion.label
            animate={{
              y: isFocused || value ? -24 : 0,
              scale: isFocused || value ? 0.85 : 1,
              color: isFocused ? '#4bbf39' : '#6b7280'
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 top-4 pointer-events-none origin-left"
          >
            {label}
          </motion.label>
        )}
      </motion.div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

// Mobile sticky footer with CTAs
export const MobileStickyFooter = ({ show = true }) => {
  if (!show) return null

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30 md:hidden"
    >
      <div className="flex gap-3">
        <MobileButton
          variant="secondary"
          size="default"
          onClick={() => window.open('tel:+15133310555')}
          className="flex-1"
        >
          <Phone className="w-4 h-4" />
          Call
        </MobileButton>
        
        <MobileButton
          variant="primary"
          size="default"
          onClick={() => window.open('/free-audit')}
          className="flex-[2]"
        >
          Free Audit
          <ArrowRight className="w-4 h-4" />
        </MobileButton>
      </div>
    </motion.div>
  )
}
