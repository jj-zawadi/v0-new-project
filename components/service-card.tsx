import { Building2, Home, LayoutPanelTop } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="h-10 w-10 text-primary" />
      case "Building2":
        return <Building2 className="h-10 w-10 text-primary" />
      case "LayoutPanelTop":
        return <LayoutPanelTop className="h-10 w-10 text-primary" />
      default:
        return <Home className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Link href={href} className="group">
      <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4">{getIcon(icon)}</div>
        <h3 className="mb-2 text-xl font-medium">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="text-sm font-medium text-primary group-hover:underline">Learn more</div>
      </div>
    </Link>
  )
}
