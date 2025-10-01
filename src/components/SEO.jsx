import React from 'react'
import { Helmet } from '@dr.pogodin/react-helmet'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  article = null 
}) => {
  const siteTitle = 'Uptrade Media'
  const siteDescription = 'Cincinnati\'s premier digital marketing, web design, and media production agency. We help businesses grow through strategic marketing, professional media, and innovative design solutions.'
  const siteUrl = 'https://uptrademedia.com'
  const defaultImage = `${siteUrl}/ogimage.jpg`

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const pageDescription = description || siteDescription
  const pageImage = image ? `${siteUrl}${image}` : defaultImage
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:site" content="@uptrademedia" />
      <meta name="twitter:creator" content="@uptrademedia" />

      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author || siteTitle} />
          <meta property="article:section" content={article.section} />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Business/Local SEO Tags */}
      <meta name="geo.region" content="US-OH" />
      <meta name="geo.placename" content="Cincinnati" />
      <meta name="geo.position" content="39.1031;-84.5120" />
      <meta name="ICBM" content="39.1031, -84.5120" />

      {/* Additional SEO Tags */}
      <meta name="author" content={siteTitle} />
      <meta name="publisher" content={siteTitle} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteTitle}`} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  )
}

export default SEO

// Pre-configured SEO components for common pages
export const HomeSEO = () => (
  <SEO
    title="Cincinnati Digital Marketing, Web Design & Media Production Agency"
    description="Uptrade Media is Cincinnati's premier digital marketing agency specializing in web design, SEO, video production, and photography. We help businesses grow through strategic marketing and professional media solutions."
    keywords="Cincinnati digital marketing, web design Cincinnati, SEO Cincinnati, video production Cincinnati, photography Cincinnati, marketing agency Ohio"
    url="/"
  />
)

export const AboutSEO = () => (
  <SEO
    title="About Uptrade Media - Cincinnati Marketing & Design Experts"
    description="Learn about Uptrade Media's team of marketing, design, and media professionals. Founded in Cincinnati, we're dedicated to helping businesses grow through innovative digital solutions."
    keywords="about Uptrade Media, Cincinnati marketing team, digital marketing experts Ohio, web design professionals"
    url="/about"
  />
)

export const ContactSEO = () => (
  <SEO
    title="Contact Uptrade Media - Get Your Free Marketing Consultation"
    description="Ready to grow your business? Contact Uptrade Media for a free consultation. We're Cincinnati's trusted partner for digital marketing, web design, and media production."
    keywords="contact Uptrade Media, Cincinnati marketing consultation, free marketing audit, digital marketing contact"
    url="/contact"
  />
)

export const PortfolioSEO = () => (
  <SEO
    title="Portfolio - Successful Marketing & Design Projects | Uptrade Media"
    description="Explore Uptrade Media's portfolio of successful marketing campaigns, web design projects, and media productions. See how we've helped Cincinnati businesses grow."
    keywords="marketing portfolio Cincinnati, web design portfolio, video production examples, successful marketing campaigns"
    url="/portfolio"
  />
)

export const InsightsSEO = () => (
  <SEO
    title="Marketing Insights & Tips - Expert Advice from Uptrade Media"
    description="Get expert marketing insights, tips, and strategies from Uptrade Media's blog. Learn about digital marketing, web design, SEO, and business growth tactics."
    keywords="marketing insights, digital marketing tips, SEO advice, web design tips, business growth strategies"
    url="/insights"
  />
)
