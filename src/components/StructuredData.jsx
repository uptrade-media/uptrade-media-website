import React from 'react'

// LocalBusiness Schema for the main business
export const LocalBusinessSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Uptrade Media",
    "description": "Professional web design, digital marketing, and media production services in Cincinnati, Ohio. We help businesses grow through expert marketing, media, and design solutions.",
    "url": "https://uptrademedia.com",
    "logo": "https://uptrademedia.com/logo_dark.svg",
    "image": "https://uptrademedia.com/ogimage.jpg",
    "telephone": "+1-513-555-0123",
    "email": "info@uptrademedia.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business District",
      "addressLocality": "Cincinnati",
      "addressRegion": "OH",
      "postalCode": "45202",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.1031",
      "longitude": "-84.5120"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cincinnati",
        "sameAs": "https://en.wikipedia.org/wiki/Cincinnati"
      },
      {
        "@type": "State",
        "name": "Ohio",
        "sameAs": "https://en.wikipedia.org/wiki/Ohio"
      },
      {
        "@type": "State",
        "name": "Kentucky",
        "sameAs": "https://en.wikipedia.org/wiki/Kentucky"
      }
    ],
    "serviceType": [
      "Web Design",
      "Digital Marketing",
      "SEO Services",
      "Video Production",
      "Photography",
      "Branding",
      "Social Media Marketing",
      "Content Marketing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing and Media Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Development",
            "description": "Custom website design and development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Local SEO",
            "description": "Search engine optimization services to improve online visibility"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Production",
            "description": "Professional video production and editing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Photography",
            "description": "Professional photography for businesses and marketing"
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://www.facebook.com/uptrademedia",
      "https://www.linkedin.com/company/uptrademedia",
      "https://www.instagram.com/uptrademedia"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Service Schema for individual service pages
export const ServiceSchema = ({ service }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Uptrade Media",
      "url": "https://uptrademedia.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cincinnati",
        "sameAs": "https://en.wikipedia.org/wiki/Cincinnati"
      },
      {
        "@type": "State",
        "name": "Ohio",
        "sameAs": "https://en.wikipedia.org/wiki/Ohio"
      }
    ],
    "serviceType": service.serviceType,
    "category": service.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": service.startingPrice || "Contact for pricing"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Article Schema for blog posts
export const ArticleSchema = ({ article }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": "Uptrade Media",
      "url": "https://uptrademedia.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Uptrade Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uptrademedia.com/logo_dark.svg"
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.modifiedDate || article.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://uptrademedia.com${article.url}`
    },
    "articleSection": article.category,
    "keywords": article.tags?.join(", ") || ""
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Organization Schema
export const OrganizationSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Uptrade Media",
    "url": "https://uptrademedia.com",
    "logo": "https://uptrademedia.com/logo_dark.svg",
    "description": "Cincinnati's premier digital marketing, web design, and media production agency. We help businesses grow through strategic marketing, professional media, and innovative design solutions.",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Ramsey Deal"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business District",
      "addressLocality": "Cincinnati",
      "addressRegion": "OH",
      "postalCode": "45202",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-513-555-0123",
      "contactType": "customer service",
      "email": "info@uptrademedia.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/uptrademedia",
      "https://www.linkedin.com/company/uptrademedia",
      "https://www.instagram.com/uptrademedia"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Website Schema
export const WebsiteSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Uptrade Media",
    "url": "https://uptrademedia.com",
    "description": "Professional digital marketing, web design, and media production services in Cincinnati, Ohio.",
    "publisher": {
      "@type": "Organization",
      "name": "Uptrade Media"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://uptrademedia.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
