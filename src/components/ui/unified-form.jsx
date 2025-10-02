import React, { useState, useCallback } from 'react'
import { Button } from './button'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { CheckCircle, Send, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import FormLoadingSpinner from '../FormLoadingSpinner.jsx'

// Unified form input component with consistent styling
export const FormInput = React.memo(({ 
  label, 
  name, 
  type = 'text', 
  required = false, 
  placeholder = '', 
  value, 
  onChange,
  className = '',
  autoComplete,
  ...props 
}) => {
  // Auto-detect autocomplete attribute based on field name if not provided
  const autoCompleteValue = (() => {
    if (autoComplete !== undefined) return autoComplete
    
    const lowerName = name.toLowerCase()
    if (lowerName.includes('name')) return 'name'
    if (lowerName.includes('email')) return 'email'
    if (lowerName.includes('phone') || lowerName.includes('tel')) return 'tel'
    if (lowerName.includes('company') || lowerName.includes('organization')) return 'organization'
    if (lowerName.includes('website') || lowerName.includes('url')) return 'url'
    if (lowerName.includes('address')) return 'street-address'
    if (lowerName.includes('city')) return 'address-level2'
    if (lowerName.includes('state')) return 'address-level1'
    if (lowerName.includes('zip') || lowerName.includes('postal')) return 'postal-code'
    
    return 'on'
  })()

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete={autoCompleteValue}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent transition-all duration-200 hover:border-gray-400 ${className}`}
        {...props}
      />
    </div>
  )
})

// Unified textarea component
export const FormTextarea = ({ 
  label, 
  name, 
  required = false, 
  placeholder = '', 
  value, 
  onChange, 
  rows = 4,
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none ${className}`}
        {...props}
      />
    </div>
  )
}

// Unified select component
export const FormSelect = ({ 
  label, 
  name, 
  required = false, 
  value, 
  onChange, 
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4bbf39] focus:border-transparent transition-all duration-200 hover:border-gray-400 ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={typeof option === 'string' ? option : option.value}>
            {typeof option === 'string' ? option : option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

// Unified form container component
// NOTE: For Netlify form detection, each page using UnifiedForm should also include
// a hidden HTML form with the same name and field structure for build-time detection.
// Example:
// <form name="form-name" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
//   <input type="hidden" name="form-name" value="form-name" />
//   <input name="field1" />
//   <select name="field2"><option>option</option></select>
//   <textarea name="field3"></textarea>
// </form>
export const UnifiedForm = ({
  title,
  description,
  formName,
  onSubmit,
  children,
  submitText = 'Submit',
  isSubmitting = false,
  isSubmitted = false,
  successMessage = 'Thank you! We\'ll be in touch soon.',
  className = '',
  showCard = true
}) => {
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    
    try {
      await onSubmit(e)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('There was an error submitting the form. Please try again.')
    }
  }

  const FormContent = () => (
    <>
      {title && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      )}

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
          <p className="text-gray-600">{successMessage}</p>
        </motion.div>
      ) : (
        <form 
          name={formName}
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value={formName} />
          <div style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: 
              <input name="bot-field" tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          {children}

          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{submitError}</span>
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                {submitText}
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      )}
    </>
  )

  if (showCard) {
    return (
      <Card className={`shadow-xl border-0 bg-white ${className}`}>
        <CardContent className="p-8">
          <FormContent />
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={className}>
      <FormContent />
    </div>
  )
}

// Utility function for form submission
export const submitNetlifyForm = async (formData, formName) => {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      'form-name': formName,
      ...formData
    }).toString()
  })

  if (!response.ok) {
    throw new Error(`Form submission failed: ${response.status}`)
  }

  return response
}

// Hook for form state management
export const useFormState = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = async (formName, onSuccess, redirectTo = '/thank-you') => {
    setIsSubmitting(true)
    
    try {
      await submitNetlifyForm(formData, formName)
      setIsSubmitted(true)
      if (onSuccess) onSuccess()
      
      // Show success state briefly, then redirect
      setTimeout(() => {
        window.location.href = redirectTo
      }, 1500) // Small delay to show success message
    } catch (error) {
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData(initialState)
    setIsSubmitted(false)
    setIsSubmitting(false)
  }

  return {
    formData,
    setFormData,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    resetForm,
    LoadingSpinner: () => isSubmitting ? <FormLoadingSpinner message={isSubmitted ? "Success! Redirecting..." : "Submitting your request..."} /> : null
  }
}
