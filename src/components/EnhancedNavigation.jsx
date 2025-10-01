import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const EnhancedNavItem = ({ to, children, isActive, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link 
        to={to}
        onClick={onClick}
        className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
          isActive 
            ? 'text-[#4bbf39] bg-green-50' 
            : 'text-gray-700 hover:text-[#4bbf39] hover:bg-gray-50'
        }`}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4bbf39] rounded-full"
            layoutId="activeIndicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  )
}

const EnhancedDropdown = ({ 
  trigger, 
  items, 
  isOpen, 
  onToggle, 
  onItemClick,
  color = "from-[#4bbf39] to-[#39bfb0]"
}) => {
  return (
    <div className="relative">
      <motion.button
        onClick={onToggle}
        className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:text-[#4bbf39] hover:bg-gray-50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {trigger}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="ml-1 w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.05 }}
              transition={{ duration: 0.3 }}
            />

            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.to}
                  onClick={onItemClick}
                  className="relative block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#4bbf39] transition-all duration-200 group"
                >
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#4bbf39] opacity-0 group-hover:opacity-100"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="flex items-center">
                    {item.icon && (
                      <motion.div
                        className="mr-3 text-gray-400 group-hover:text-[#4bbf39]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.icon}
                      </motion.div>
                    )}
                    <div>
                      <div className="font-medium">{item.title}</div>
                      {item.description && (
                        <div className="text-sm text-gray-500 group-hover:text-gray-600">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-6 h-6 relative">
        <motion.span
          className="absolute top-0 left-0 w-full h-0.5 bg-gray-600 rounded-full"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute top-2 left-0 w-full h-0.5 bg-gray-600 rounded-full"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute top-4 left-0 w-full h-0.5 bg-gray-600 rounded-full"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.button>
  )
}

const MobileMenu = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="px-4 py-4 space-y-4"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { EnhancedNavItem, EnhancedDropdown, MobileMenuButton, MobileMenu }
