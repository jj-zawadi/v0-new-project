import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  // Sample project data - in a real application, this would come from a database or CMS
  const residentialProjects = [
    {
      id: "modern-apartment",
      title: "Modern Minimalist Apartment",
      description: "A sleek, contemporary design for an urban apartment featuring clean lines and a neutral palette.",
      location: "New York, NY",
      category: "Residential",
      year: "2023",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "luxury-penthouse",
      title: "Luxury Penthouse",
      description: "An opulent penthouse design with high-end finishes and panoramic city views.",
      location: "Miami, FL",
      category: "Residential",
      year: "2022",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "coastal-home",
      title: "Coastal Beach House",
      description: "A bright and airy beach house with natural textures and a serene color palette.",
      location: "Malibu, CA",
      category: "Residential",
      year: "2023",
      imageSrc: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "urban-loft",
      title: "Urban Industrial Loft",
      description: "A converted warehouse loft with industrial elements and modern furnishings.",
      location: "Chicago, IL",
      category: "Residential",
      year: "2021",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "family-home",
      title: "Contemporary Family Home",
      description: "A functional and stylish family home designed for modern living.",
      location: "Austin, TX",
      category: "Residential",
      year: "2022",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "mountain-retreat",
      title: "Mountain Retreat",
      description: "A cozy mountain home with rustic elements and panoramic nature views.",
      location: "Aspen, CO",
      category: "Residential",
      year: "2023",
      imageSrc: "/placeholder.svg?height=1200&width=800",
    },
  ]

  const commercialProjects = [
    {
      id: "boutique-hotel",
      title: "Luxury Boutique Hotel",
      description: "An elegant hotel lobby and common areas designed for a premium guest experience.",
      location: "San Francisco, CA",
      category: "Commercial",
      year: "2023",
      imageSrc: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: "office-space",
      title: "Contemporary Office Space",
      description: "A modern workspace designed to foster creativity and collaboration.",
      location: "Seattle, WA",
      category: "Commercial",
      year: "2022",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "restaurant-design",
      title: "Upscale Restaurant",
      description: "A sophisticated dining environment with custom lighting and bespoke furnishings.",
      location: "Boston, MA",
      category: "Commercial",
      year: "2023",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "retail-store",
      title: "Fashion Retail Store",
      description: "A high-end retail space designed to enhance the shopping experience.",
      location: "Los Angeles, CA",
      category: "Commercial",
      year: "2021",
      imageSrc: "/placeholder.svg?height=800&width=1200",
    },
  ]

  const hospitalityProjects = [
    {
      id: "spa-retreat",
      title: "Luxury Spa Retreat",
      description: "A tranquil spa environment designed for relaxation and rejuvenation.",
      location: "Palm Springs, CA",
      category: "Hospitality",
      year: "2022",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "rooftop-bar",
      title: "Urban Rooftop Bar",
      description: "A stylish rooftop venue with panoramic city views and custom furnishings.",
      location: "New York, NY",
      category: "Hospitality",
      year: "2023",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "wellness-center",
      title: "Wellness Center",
      description: "A holistic wellness facility designed to promote health and tranquility.",
      location: "Denver, CO",
      category: "Hospitality",
      year: "2022",
      imageSrc: "/placeholder.svg?height=800&width=1200",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Project Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Project Gallery</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Explore our portfolio of stunning interior design projects across residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="container py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex flex-col items-center">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
            </TabsList>
            <p className="text-center text-muted-foreground">
              Filter our projects by category to find inspiration for your space.
            </p>
          </div>

          <TabsContent value="all" className="mt-0">
            <GalleryGrid projects={[...residentialProjects, ...commercialProjects, ...hospitalityProjects]} />
          </TabsContent>

          <TabsContent value="residential" className="mt-0">
            <GalleryGrid projects={residentialProjects} />
          </TabsContent>

          <TabsContent value="commercial" className="mt-0">
            <GalleryGrid projects={commercialProjects} />
          </TabsContent>

          <TabsContent value="hospitality" className="mt-0">
            <GalleryGrid projects={hospitalityProjects} />
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Inspired by Our Work?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Let's discuss how we can transform your space into something equally beautiful and functional.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
