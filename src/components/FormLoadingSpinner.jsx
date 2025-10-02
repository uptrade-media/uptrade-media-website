import React from 'react'

const FormLoadingSpinner = ({ message = "Submitting..." }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 text-center max-w-sm mx-4 shadow-2xl">
        {/* Branded Spinner */}
        <div className="relative mb-6">
          {/* Outer ring */}
          <div className="w-12 h-12 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-3 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-[#4bbf39] border-r-[#39bfb0] animate-spin"></div>
          </div>
          
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {message}
          </h3>
          <p className="text-gray-600 text-sm">Please wait a moment...</p>
        </div>

        {/* Success checkmark animation (hidden by default) */}
        <div className="hidden success-checkmark">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Success!</h3>
          <p className="text-gray-600 text-sm">Redirecting you now...</p>
        </div>
      </div>
    </div>
  )
}

export default FormLoadingSpinner
