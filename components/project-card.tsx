import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  imageSrc: string
  href: string
}

export default function ProjectCard({ title, category, imageSrc, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group overflow-hidden rounded-lg border bg-background shadow-sm">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-muted-foreground">{category}</div>
        <h3 className="text-lg font-medium group-hover:text-primary">{title}</h3>
      </div>
    </Link>
  )
}
