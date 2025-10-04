import { useEffect, useState } from 'react'
import { getBlogPosts } from '../utils/blogManager'

export default function useBlogPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await getBlogPosts()
        if (!alive) return
        setPosts(Array.isArray(data) ? data : [])
      } catch (e) {
        if (alive) setError(e)
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [])

  return { posts, loading, error }
}
