import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="About Elegance Interiors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">About Us</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Discover the story, values, and people behind Elegance Interiors.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 2010, Elegance Interiors began as a small design studio with a big vision: to transform spaces
              into beautiful, functional environments that enhance people's lives.
            </p>
            <p className="mb-4 text-muted-foreground">
              Our founder, Jane Smith, started the company after spending a decade working with leading design firms
              across the country. She noticed a gap in the market for personalized, client-focused interior design
              services that prioritized both aesthetics and functionality.
            </p>
            <p className="mb-4 text-muted-foreground">
              What began as a one-woman operation has grown into a team of passionate designers, project managers, and
              craftspeople who share a commitment to excellence and innovation in interior design.
            </p>
            <p className="text-muted-foreground">
              Today, Elegance Interiors is proud to have transformed hundreds of spaces, from cozy homes to expansive
              commercial properties, always maintaining our core values of quality, creativity, and client satisfaction.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-auto">
            <Image src="/placeholder.svg?height=800&width=600" alt="Our design studio" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These core principles guide everything we do at Elegance Interiors.
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
                    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
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

      {/* Meet the Team */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Meet Our Team</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our talented team of designers and professionals brings expertise, creativity, and passion to every project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Jane Smith"
                width={200}
                height={200}
                className="mx-auto h-48 w-48 object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-medium">Jane Smith</h3>
            <p className="text-muted-foreground">Founder & Principal Designer</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Michael Johnson"
                width={200}
                height={200}
                className="mx-auto h-48 w-48 object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-medium">Michael Johnson</h3>
            <p className="text-muted-foreground">Senior Interior Designer</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Sarah Williams"
                width={200}
                height={200}
                className="mx-auto h-48 w-48 object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-medium">Sarah Williams</h3>
            <p className="text-muted-foreground">Project Manager</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="David Chen"
                width={200}
                height={200}
                className="mx-auto h-48 w-48 object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-medium">David Chen</h3>
            <p className="text-muted-foreground">Commercial Design Specialist</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/about/team" className="group">
              View Full Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Design Process</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We follow a structured approach to ensure your project runs smoothly from start to finish.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-border md:block hidden"></div>
            <div className="space-y-12">
              <div className="relative grid gap-6 md:grid-cols-2">
                <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-xl font-medium">Initial Consultation</h3>
                  <p className="text-muted-foreground">
                    We meet to discuss your vision, needs, and budget for the project. This helps us understand your
                    goals and expectations.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                  <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Initial Consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative grid gap-6 md:grid-cols-2">
                <div className="relative">
                  <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                  <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Concept Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-medium">Concept Development</h3>
                  <p className="text-muted-foreground">
                    We create design concepts based on your requirements and preferences, including mood boards, color
                    schemes, and space planning.
                  </p>
                </div>
              </div>

              <div className="relative grid gap-6 md:grid-cols-2">
                <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-xl font-medium">Design Presentation</h3>
                  <p className="text-muted-foreground">
                    We present our design concepts, including 3D visualizations, material samples, and detailed plans
                    for your feedback and approval.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                  <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Design Presentation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative grid gap-6 md:grid-cols-2">
                <div className="relative">
                  <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                  <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Implementation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-medium">Implementation</h3>
                  <p className="text-muted-foreground">
                    We execute the approved design plan, coordinating with contractors, vendors, and craftspeople to
                    bring your vision to life.
                  </p>
                </div>
              </div>

              <div className="relative grid gap-6 md:grid-cols-2">
                <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-xl font-medium">Final Reveal</h3>
                  <p className="text-muted-foreground">
                    We present your completed space, ensuring every detail meets your expectations and providing
                    guidance on maintenance and care.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 top-3 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 hidden md:block"></div>
                  <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Final Reveal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Transform Your Space?</h2>
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
