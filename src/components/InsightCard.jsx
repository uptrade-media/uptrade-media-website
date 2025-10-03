// src/components/InsightCard.jsx
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

export default function InsightCard({ post }) {
  if (!post) return null
  return (
    <Card className="h-full hover:shadow-xs transition-shadow duration-300 bg-white border-0 overflow-hidden p-0">
      <div className="relative">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-white/30 capitalize">
            {post.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="text-sm text-gray-500 mb-3">{post.readTime}</div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          to={`/insights/${post.slug}`}
          className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] font-medium"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
