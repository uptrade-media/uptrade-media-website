import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Play, Pause, Volume2, VolumeX } from 'lucide-react'

// Mobile-optimized hero section
export const MobileHeroSection = ({ 
  title, 
  subtitle, 
  backgroundVideo, 
  backgroundImage, 
  children,
  className = '' 
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background media */}
      {backgroundVideo ? (
        <div className="absolute inset-0">
          <video
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          
          {/* Video controls for mobile */}
          <div className="absolute bottom-4 right-4 flex gap-2 md:hidden">
            <motion.button
              onClick={() => {
                const video = document.querySelector('video')
                if (isVideoPlaying) {
                  video.pause()
                } else {
                  video.play()
                }
              }}
              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
            >
              {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              onClick={() => {
                const video = document.querySelector('video')
                video.muted = !isMuted
                setIsMuted(!isMuted)
              }}
              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      ) : backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}

// Mobile-optimized card grid
export const MobileCardGrid = ({ 
  items, 
  renderCard, 
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 4,
  className = '' 
}) => {
  const getGridClasses = () => {
    const colClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4'
    }
    
    return `grid gap-${gap} ${colClasses[columns.sm]} sm:${colClasses[columns.md]} lg:${colClasses[columns.lg]}`
  }

  return (
    <div className={`${getGridClasses()} ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {renderCard(item, index)}
        </motion.div>
      ))}
    </div>
  )
}

// Mobile-optimized accordion
export const MobileAccordion = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.button
            onClick={() => toggleItem(index)}
            className="w-full p-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium text-gray-900">{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 text-gray-600 leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

// Mobile-optimized tabs
export const MobileTabs = ({ tabs, className = '' }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={className}>
      {/* Tab navigation - horizontal scroll on mobile */}
      <div className="flex overflow-x-auto scrollbar-hide mb-6 -mx-4 px-4">
        <div className="flex gap-2 min-w-max">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === index
                  ? 'bg-[#4bbf39] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: activeTab === index ? 1.05 : 1
              }}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Mobile-optimized image gallery
export const MobileImageGallery = ({ images, className = '' }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Fullscreen modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Mobile-optimized stats section
export const MobileStatsSection = ({ stats, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <motion.div
      className={`grid grid-cols-2 gap-4 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-4 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <motion.div
            className="text-2xl sm:text-3xl font-bold text-[#4bbf39] mb-2"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
          >
            {stat.value}
          </motion.div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Mobile-optimized testimonial card
export const MobileTestimonialCard = ({ testimonial, className = '' }) => {
  return (
    <motion.div
      className={`bg-white rounded-xl p-6 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-3">
          <div className="font-medium text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.company}</div>
        </div>
      </div>
      
      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-yellow-400">★</span>
            </motion.div>
          ))}
        </div>
        {testimonial.result && (
          <div className="text-sm font-medium text-[#4bbf39]">
            {testimonial.result}
          </div>
        )}
      </div>
    </motion.div>
  )
}
