import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonicalUrl,
  structuredData,
  pageType = 'website'
}) => {
  const location = useLocation()
  const currentUrl = `https://uptrademedia.com${location.pathname}`
  
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords && keywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords)
    }
    
    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }
    
    if (title) updateOGTag('og:title', title)
    if (description) updateOGTag('og:description', description)
    updateOGTag('og:url', currentUrl)
    updateOGTag('og:type', pageType)
    if (ogImage) updateOGTag('og:image', `https://uptrademedia.com${ogImage}`)
    
    // Update Twitter tags
    const updateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }
    
    if (title) updateTwitterTag('twitter:title', title)
    if (description) updateTwitterTag('twitter:description', description)
    updateTwitterTag('twitter:url', currentUrl)
    if (ogImage) updateTwitterTag('twitter:image', `https://uptrademedia.com${ogImage}`)
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl || currentUrl)
    
    // Add structured data
    if (structuredData) {
      // Remove existing structured data for this page
      const existingScript = document.querySelector(`script[data-page="${location.pathname}"]`)
      if (existingScript) {
        existingScript.remove()
      }
      
      // Add new structured data
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-page', location.pathname)
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
    
    // Cleanup function
    return () => {
      // Remove page-specific structured data when component unmounts
      const pageScript = document.querySelector(`script[data-page="${location.pathname}"]`)
      if (pageScript) {
        pageScript.remove()
      }
    }
  }, [title, description, keywords, ogImage, canonicalUrl, structuredData, pageType, location.pathname, currentUrl])
  
  return null // This component doesn't render anything
}

export default SEOHead
