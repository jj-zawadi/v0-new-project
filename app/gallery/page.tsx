import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import GalleryGrid from "@/components/gallery-grid"
import { supabase } from "@/lib/supabase"

async function getProjects() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching projects:", error)
    return []
  }

  return projects || []
}

export default async function GalleryPage() {
  const allProjects = await getProjects()

  const flooringProjects = allProjects.filter((p) => p.category === "flooring")
  const furnitureProjects = allProjects.filter((p) => p.category === "furniture")
  const wallsProjects = allProjects.filter((p) => p.category === "walls")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/epoxy-wall-installation.jpg"
          alt="Epoxy Project Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Epoxy Project Gallery</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Explore our portfolio of stunning epoxy flooring, custom furniture, and decorative wall projects across
            Kenya.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="container py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex flex-col items-center">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Projects ({allProjects.length})</TabsTrigger>
              <TabsTrigger value="flooring">Epoxy Flooring ({flooringProjects.length})</TabsTrigger>
              <TabsTrigger value="furniture">Epoxy Furniture ({furnitureProjects.length})</TabsTrigger>
              <TabsTrigger value="walls">Epoxy Walls ({wallsProjects.length})</TabsTrigger>
            </TabsList>
            <p className="text-center text-muted-foreground">
              Filter our epoxy projects by category to find inspiration for your space.
            </p>
          </div>

          <TabsContent value="all" className="mt-0">
            <GalleryGrid projects={allProjects} />
          </TabsContent>

          <TabsContent value="flooring" className="mt-0">
            <GalleryGrid projects={flooringProjects} />
          </TabsContent>

          <TabsContent value="furniture" className="mt-0">
            <GalleryGrid projects={furnitureProjects} />
          </TabsContent>

          <TabsContent value="walls" className="mt-0">
            <GalleryGrid projects={wallsProjects} />
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Inspired by Our Epoxy Work?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Let's discuss how we can transform your space with beautiful, durable epoxy solutions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book Consultation</Link>
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
