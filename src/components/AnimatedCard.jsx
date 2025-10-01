import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'

const AnimatedCard = ({ 
  children, 
  className = '',
  hoverEffect = 'lift',
  delay = 0,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const hoverEffects = {
    lift: {
      whileHover: { 
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    scale: {
      whileHover: { 
        scale: 1.03,
        boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    tilt: {
      whileHover: { 
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }
    },
    glow: {
      whileHover: { 
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
        borderColor: "rgb(59, 130, 246)",
        transition: { duration: 0.3 }
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...hoverEffects[hoverEffect]}
      className="relative"
    >
      <Card className={`relative overflow-hidden transition-all duration-300 ${className}`} {...props}>
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#4bbf39]/5 via-[#39bfb0]/5 to-[#4bbf39]/10 opacity-0"
          animate={isHovered ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={isHovered ? { 
            x: ['-100%', '100%'],
            opacity: [0, 0.1, 0]
          } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    </motion.div>
  )
}

// Specialized card components
export const ServiceCard = ({ icon: Icon, title, description, features, link, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimatedCard 
      hoverEffect="lift" 
      delay={delay}
      className="h-full cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="text-center pb-4">
        <motion.div 
          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#4bbf39] transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="w-2 h-2 bg-[#4bbf39] rounded-full mr-3"
                  whileHover={{ scale: 1.5 }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </CardContent>
    </AnimatedCard>
  )
}

export const StatsCard = ({ number, label, description, icon: Icon, delay = 0 }) => {
  return (
    <AnimatedCard hoverEffect="scale" delay={delay} className="text-center p-6">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
      >
        {Icon && (
          <motion.div
            className="w-12 h-12 mx-auto mb-4 text-[#4bbf39]"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        )}
        <motion.div 
          className="text-3xl font-bold text-[#4bbf39] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        >
          {number}
        </motion.div>
        <div className="text-gray-600 font-medium mb-1">{label}</div>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </motion.div>
    </AnimatedCard>
  )
}

export default AnimatedCard
