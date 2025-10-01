// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export const slideInFromBottom = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

export const hoverLift = {
  whileHover: { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" },
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
    borderColor: "rgb(59, 130, 246)"
  },
  transition: { duration: 0.3 }
}

// Button animations
export const buttonHover = {
  whileHover: { 
    scale: 1.02,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 25 }
}

export const iconBounce = {
  whileHover: { 
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 }
  }
}

// Loading animations
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

// Scroll reveal animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const scrollRevealStagger = (index) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { 
    duration: 0.5, 
    delay: index * 0.1,
    ease: "easeOut" 
  }
})

// Navigation animations
export const navItemHover = {
  whileHover: { 
    scale: 1.05,
    color: "#4bbf39"
  },
  transition: { type: "spring", stiffness: 300, damping: 20 }
}

export const dropdownAnimation = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
  transition: { duration: 0.2, ease: "easeOut" }
}

// Card animations
export const cardHover = {
  whileHover: { 
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

export const cardTilt = {
  whileHover: { 
    rotateY: 5,
    rotateX: 5,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

// Text animations
export const typewriterEffect = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: { duration: 2, ease: "easeInOut" }
}

export const letterSpacing = {
  whileHover: { letterSpacing: "0.1em" },
  transition: { duration: 0.3 }
}

// Progress animations
export const progressBar = (progress) => ({
  initial: { width: 0 },
  animate: { width: `${progress}%` },
  transition: { duration: 1.5, ease: "easeOut" }
})

// Floating animations
export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
}
