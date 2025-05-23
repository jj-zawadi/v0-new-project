import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <div className="mb-4 flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="mb-6 text-lg italic">{quote}</blockquote>
      <div>
        <div className="font-medium">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  )
}
