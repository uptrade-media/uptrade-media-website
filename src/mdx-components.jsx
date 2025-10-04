// src/mdx-components.jsx
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

// Treat site-rooted and relative paths as internal.
// Leave anchors (#) alone so in-page links still work.
const isInternal = (href = '') =>
  href.startsWith('/') ||
  (!href.startsWith('http') &&
    !href.startsWith('mailto:') &&
    !href.startsWith('#'))

export function A({ href = '', children, ...rest }) {
  if (isInternal(href)) {
    return (
      <RouterLink to={href} {...rest}>
        {children}
      </RouterLink>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

export const mdxComponents = {
  a: A,
  img: (p) => <img loading="lazy" decoding="async" {...p} />,
    h1: (props) => (
    <h2 {...props} className="text-3xl md:text-4xl font-bold mt-8" />
    )
}

