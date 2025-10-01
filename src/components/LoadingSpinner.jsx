import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500 mx-auto mb-4"></div>
          <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-transparent border-r-purple-500 animate-pulse mx-auto"></div>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Loading</h3>
        <p className="text-gray-500">Please wait while we load the content...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
