import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/marble-epoxy-kitchen.jpg"
          alt="About Epoxy & Aesthetic Works Kenya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">About Us</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Discover the story, expertise, and values behind Epoxy & Aesthetic Works Kenya.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              In the heart of Kenya, where creativity meets craftsmanship, a spark of inspiration gave birth to Epoxy &
              Aesthetic Works Kenya. What started as a fascination with shiny, seamless finishes soon transformed into a
              passion for turning ordinary spaces into stunning works of art.
            </p>
            <p className="mb-4 text-muted-foreground">
              Founded by a team of dreamers, makers, and doers, we took on a mission: to bring beauty, durability, and a
              touch of luxury into Kenyan homes, offices, and commercial spaces — one project at a time.
            </p>
            <p className="mb-4 text-muted-foreground">
              From our very first custom resin table to bold epoxy floors and textured 3D wall panels, every piece we
              create tells a story. A story of detail. A story of pride. A story of Kenya's vibrant, growing love for
              modern interior finishes.
            </p>
            <p className="text-muted-foreground">
              Today, we are more than just a brand — we are a movement. We believe that good design should be both
              functional and unforgettable. And we are here to help our clients express their personality through art
              that lasts. Welcome to the world of Epoxy & Aesthetic Works Kenya — where your space becomes your canvas.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-auto">
            <Image
              src="/images/epoxy-rose-art.jpg"
              alt="Our epoxy artistry and craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These core principles guide everything we do at Epoxy & Aesthetic Works Kenya.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality, from the materials we select to the craftsmanship we deliver.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
                    <path d="m4.93 4.93 14.14 14.14" />
                    <path d="m19.07 4.93-14.14 14.14" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Creativity</h3>
                <p className="text-muted-foreground">
                  We approach each project with fresh eyes and innovative ideas to create unique, inspiring spaces.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Client Focus</h3>
                <p className="text-muted-foreground">
                  We listen carefully to our clients' needs and preferences, making them the center of our design
                  process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Sustainability</h3>
                <p className="text-muted-foreground">
                  We prioritize eco-friendly materials and practices to minimize our environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Epoxy Design Process</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We follow a structured approach to ensure your epoxy project runs smoothly from start to finish.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-border md:block hidden"></div>
          <div className="space-y-12">
            <div className="relative grid gap-6 md:grid-cols-2">
              <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-xl font-medium">Consultation & Site Visit</h3>
                <p className="text-muted-foreground">
                  We start with a one-on-one discussion to understand your vision. A site visit follows to assess the
                  space, take measurements, and evaluate surface conditions.
                </p>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                <div className="relative h-[240px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/team-consultation.jpg"
                    alt="Team consultation and planning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2">
              <div className="relative">
                <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                <div className="relative h-[240px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/epoxy-wall-installation.jpg"
                    alt="Custom design development"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium">Custom Design & Quotation</h3>
                <p className="text-muted-foreground">
                  We create a tailored design proposal based on your needs and send a clear, detailed quotation. Once
                  approved, we lock in project timelines.
                </p>
              </div>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2">
              <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-xl font-medium">Surface Preparation</h3>
                <p className="text-muted-foreground">
                  We meticulously prepare concrete floors through diamond grinding, crack repair, and thorough cleaning.
                  This critical step ensures optimal epoxy adhesion and a flawless, long-lasting finish.
                </p>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                <div className="relative h-[240px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/hands-on-surface-prep.jpg"
                    alt="Hands-on concrete surface preparation with professional grinding tools"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2">
              <div className="relative">
                <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                <div className="relative h-[240px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/marble-epoxy-kitchen.jpg"
                    alt="Expert epoxy application and finishing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium">Application & Finishing</h3>
                <p className="text-muted-foreground">
                  Using premium materials, we apply your epoxy flooring, 3D wall finish, or resin décor with precision.
                  We finish with polishing or sealing for long-lasting beauty.
                </p>
              </div>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2">
              <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-xl font-medium">Handover & Aftercare</h3>
                <p className="text-muted-foreground">
                  We complete your project with a thorough walkthrough, provide maintenance guidelines, and ensure your
                  complete satisfaction. Our team remains available for ongoing support and future projects.
                </p>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                <div className="relative h-[240px] overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                    alt="Professional handshake - project completion and client satisfaction"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Space?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Contact us today to schedule a consultation and take the first step toward your dream interior.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
