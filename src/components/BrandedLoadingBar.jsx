import React from 'react'

const BrandedLoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Branded Spinner */}
        <div className="relative mb-8">
          {/* Outer ring */}
          <div className="w-16 h-16 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#4bbf39] border-r-[#39bfb0] animate-spin"></div>
          </div>
          
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Branded Logo/Text */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] bg-clip-text text-transparent mb-2">
            UpTrade Media
          </h3>
          <p className="text-gray-600">Loading your experience...</p>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-[#4bbf39] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#4bbf39] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-[#39bfb0] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default BrandedLoadingSpinner
