import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const InteractiveButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon,
  showSparkles = false,
  onClick,
  className = '',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const baseClasses = "relative overflow-hidden font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
  
  const variants = {
    primary: "bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:from-[#39bfb0] hover:to-[#4bbf39]",
    secondary: "bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:from-[#39bfb0] hover:to-[#4bbf39]",
    tertiary: "bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white hover:from-[#39bfb0] hover:to-[#4bbf39]",
    outline: "border-2 border-[#4bbf39] text-[#4bbf39] hover:bg-[#4bbf39] hover:text-white",
    ghost: "text-gray-700 hover:text-[#4bbf39] hover:bg-gray-50"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const handleClick = (e) => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)
    if (onClick) onClick(e)
  }

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {/* Ripple effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-white opacity-30 rounded-lg"
          initial={{ scale: 0, opacity: 0.3 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Sparkles effect */}
      {showSparkles && isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50
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
        </>
      )}

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        animate={isHovered ? { 
          x: ['-100%', '100%'],
          opacity: [0, 0.2, 0]
        } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <motion.div
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        )}
      </span>
    </motion.button>
  )
}

export default InteractiveButton
