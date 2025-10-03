// src/hooks/useFeaturedPosts.js
import * as React from 'react'
import { getFeaturedPosts } from '@/utils/blogManager'

export default function useFeaturedPosts(limit = 3) {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const list = await getFeaturedPosts()
        if (!alive) return
        setPosts((list || []).slice(0, limit))
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [limit])

  return { posts, loading }
}
