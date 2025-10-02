import React from 'react'

const FormLoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 text-center max-w-sm mx-4 shadow-2xl">
        {/* Branded Spinner */}
        <div className="relative">
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
      </div>
    </div>
  )
}

export default FormLoadingSpinner
