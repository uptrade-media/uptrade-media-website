import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TopLoadingBar = () => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    // Start loading when route changes
    setLoading(true)
    setProgress(0)

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + Math.random() * 30
      })
    }, 100)

    // Complete loading after a short delay
    const completeTimer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setLoading(false)
        setProgress(0)
      }, 200)
    }, 500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(completeTimer)
    }
  }, [location])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="h-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default TopLoadingBar
