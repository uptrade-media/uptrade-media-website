// Blog Management Utility
// This file helps manage markdown blog posts for the Insights page

export const blogCategories = {
  marketing: {
    name: 'Marketing',
    description: 'Core SEO play: covers SEO, SEM, PPC, CRO, lead generation',
    color: 'text-[#4bbf39]',
    bgColor: 'bg-[#4bbf39]/10'
  },
  media: {
    name: 'Media',
    description: 'Focus: Video production, photography, drone, storytelling',
    color: 'text-[#39bfb0]',
    bgColor: 'bg-[#39bfb0]/10'
  },
  design: {
    name: 'Design',
    description: 'Focus: Web design, UI/UX, branding, graphic design',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  news: {
    name: 'News',
    description: 'Focus: Uptrade Media updates, case studies, partnerships, event coverage',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  }
}

// Import expanded blog posts collection
import { expandedBlogPosts } from './expandedBlogPosts.js'

// Sample blog posts structure - replace with actual markdown file loading in production
export const sampleBlogPosts = expandedBlogPosts

// Legacy posts for backward compatibility
export const legacyBlogPosts = [
  {
    id: 'seo-law-firms',
    title: 'SEO for Law Firms | Best SEO Marketing Strategies',
    excerpt: 'Discover proven SEO strategies that help law firms dominate local search results and attract high-value clients through strategic optimization.',
    category: 'marketing',
    date: '2024-12-15',
    readTime: '8 min read',
    tags: ['SEO', 'Law Firms', 'Local SEO', 'Legal Marketing'],
    featured: true,
    slug: 'seo-law-firms',
    image: '/seo_for_law_firms.jpeg'
  },
  {
    id: 'plastic-surgery-marketing',
    title: 'Plastic Surgery Marketing | Proven SEO & Advertising Strategies',
    excerpt: 'Learn how plastic surgeons can leverage SEO, PPC, and content marketing to build trust and attract qualified patients in a competitive market.',
    category: 'marketing',
    date: '2024-12-10',
    readTime: '10 min read',
    tags: ['Medical Marketing', 'PPC', 'SEO', 'Healthcare'],
    featured: false,
    slug: 'plastic-surgery-marketing'
  },
  {
    id: 'local-seo-construction',
    title: 'How Local SEO Drives Leads for Construction Companies',
    excerpt: 'Construction companies can dominate local search with targeted SEO strategies that connect them with homeowners and businesses needing their services.',
    category: 'marketing',
    date: '2024-12-05',
    readTime: '7 min read',
    tags: ['Local SEO', 'Construction', 'Lead Generation'],
    featured: false,
    slug: 'local-seo-construction'
  },
  {
    id: 'testimonial-video-roi',
    title: 'The ROI of Testimonial Videos for Service Businesses',
    excerpt: 'Testimonial videos deliver measurable ROI by building trust, increasing conversions, and providing authentic social proof that drives business growth.',
    category: 'media',
    date: '2024-12-08',
    readTime: '6 min read',
    tags: ['Video Marketing', 'Testimonials', 'ROI', 'Conversion'],
    featured: true,
    slug: 'testimonial-video-roi'
  },
  {
    id: 'drone-real-estate',
    title: 'Drone Footage: How Aerial Shots Elevate Real Estate Marketing',
    excerpt: 'Aerial drone footage transforms real estate marketing by showcasing properties from stunning perspectives that traditional photography cannot capture.',
    category: 'media',
    date: '2024-12-03',
    readTime: '5 min read',
    tags: ['Drone Photography', 'Real Estate', 'Aerial Video', 'Property Marketing'],
    featured: false,
    slug: 'drone-real-estate'
  },
  {
    id: 'web-design-2025',
    title: 'Best Practices for Small Business Web Design in 2025',
    excerpt: 'Essential web design principles that help small businesses create professional, conversion-focused websites that drive growth and customer engagement.',
    category: 'design',
    date: '2024-12-12',
    readTime: '9 min read',
    tags: ['Web Design', 'Small Business', 'UX/UI', '2025 Trends'],
    featured: true,
    slug: 'web-design-2025',
    image: '/best_practices_for_small_business_web_design.jpeg'
  },
  {
    id: 'brand-design-conversion',
    title: 'How Brand Design Impacts Conversion Rates',
    excerpt: 'Strategic brand design directly influences customer behavior and conversion rates through psychology, trust-building, and visual hierarchy.',
    category: 'design',
    date: '2024-12-01',
    readTime: '7 min read',
    tags: ['Brand Design', 'Conversion Rate', 'Psychology', 'Visual Design'],
    featured: false,
    slug: 'brand-design-conversion'
  },
  {
    id: 'rump-roll-delicatessen-opens-dayton',
    title: 'Rump & Roll Delicatessen Opens in Dayton, KY',
    excerpt: 'A new artisan butcher and delicatessen has opened in Dayton, Kentucky, bringing house-made meats and gourmet specialties to the Northern Kentucky community.',
    category: 'news',
    date: '2024-12-20',
    readTime: '3 min read',
    tags: ['Local Business', 'Dayton KY', 'Delicatessen', 'Community', 'Food & Dining'],
    featured: true,
    slug: 'rump-roll-delicatessen-opens-dayton',
    image: '/Rump_and_roll_delicatessen.jpg'
  }
]

// Utility functions for blog management
export const getBlogPosts = () => {
  return sampleBlogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getBlogPostsByCategory = (category) => {
  if (category === 'all') return getBlogPosts()
  return sampleBlogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getFeaturedPosts = () => {
  return sampleBlogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getBlogPost = (slug) => {
  return sampleBlogPosts.find(post => post.slug === slug)
}

export const searchBlogPosts = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return sampleBlogPosts
    .filter(post => 
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.tags.some(tag => tag.toLowerCase().includes(term))
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getRelatedPosts = (currentPost, limit = 3) => {
  return sampleBlogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

export const getAllTags = () => {
  const allTags = sampleBlogPosts.flatMap(post => post.tags)
  return [...new Set(allTags)].sort()
}

export const getCategoryStats = () => {
  const stats = {}
  sampleBlogPosts.forEach(post => {
    stats[post.category] = (stats[post.category] || 0) + 1
  })
  return stats
}

// Instructions for adding new blog posts:
/*
TO ADD NEW BLOG POSTS:

1. Create a new markdown file in the appropriate category folder:
   - Marketing: /public/blog/marketing/your-post-slug.md
   - Media: /public/blog/media/your-post-slug.md  
   - Design: /public/blog/design/your-post-slug.md
   - News: /public/blog/news/your-post-slug.md

2. Use this markdown frontmatter format:
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   category: "marketing|media|design|news"
   tags: ["Tag1", "Tag2", "Tag3"]
   excerpt: "Brief description for the post preview"
   featured: true|false
   readTime: "X min read"
   author: "Author Name"
   ---

3. Add the post metadata to the sampleBlogPosts array in this file:
   {
     id: 'unique-post-id',
     title: 'Your Post Title',
     excerpt: 'Brief description...',
     category: 'marketing',
     date: '2024-12-XX',
     readTime: 'X min read',
     tags: ['Tag1', 'Tag2'],
     featured: false,
     slug: 'your-post-slug'
   }

4. Rebuild and deploy the site to see your new post

CATEGORY GUIDELINES:
- Marketing: SEO, SEM, PPC, CRO, lead generation strategies
- Media: Video production, photography, drone footage, storytelling
- Design: Web design, UI/UX, branding, graphic design
- News: Company updates, case studies, partnerships, industry news
*/
