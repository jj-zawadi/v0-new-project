import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Our services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Services</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Comprehensive interior design solutions tailored to your unique needs and style preferences.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="container py-16">
        <Tabs defaultValue="residential" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="consultation">Consultation</TabsTrigger>
            <TabsTrigger value="specialty">Specialty</TabsTrigger>
          </TabsList>

          <TabsContent value="residential" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Residential interior design"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Residential Design Services</h2>
                <p className="mb-6 text-muted-foreground">
                  Transform your home into a personalized sanctuary that reflects your lifestyle and aesthetic
                  preferences. Our residential design services cover everything from single rooms to entire homes.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Full home design and renovation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Kitchen and bathroom remodeling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Living space transformation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom furniture selection and placement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Color consultation and material selection</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Commercial interior design"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Commercial Design Services</h2>
                <p className="mb-6 text-muted-foreground">
                  Create functional and inspiring workspaces that enhance productivity and impress clients. Our
                  commercial design services are tailored to businesses of all sizes.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Office space planning and design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Retail store layouts and visual merchandising</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Restaurant and hospitality design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Corporate branding integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Ergonomic workspace solutions</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="consultation" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Design consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Consultation Services</h2>
                <p className="mb-6 text-muted-foreground">
                  Not ready for a full design project? Our consultation services provide expert advice and guidance to
                  help you make informed decisions about your space.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>One-time design consultations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Color and material selection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Furniture layout and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Design concept development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Renovation planning and budgeting</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specialty" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Specialty design services"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Specialty Design Services</h2>
                <p className="mb-6 text-muted-foreground">
                  Our specialty services address unique design challenges and specific requirements for specialized
                  spaces.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Sustainable and eco-friendly design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Universal design for accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Smart home integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Historic property renovation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Luxury and high-end design</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Service Packages */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Design Packages</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose from our range of design packages tailored to different needs and budgets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Essential Design</CardTitle>
                <CardDescription>Perfect for single rooms or small spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-4xl font-bold">$1,500</div>
                <p className="text-sm text-muted-foreground">Starting price</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Initial consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Space planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Color scheme selection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Furniture recommendations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader className="bg-primary/5">
                <div className="mb-2 text-center text-sm font-medium text-primary">Most Popular</div>
                <CardTitle>Premium Design</CardTitle>
                <CardDescription>Comprehensive design for whole rooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-4xl font-bold">$3,500</div>
                <p className="text-sm text-muted-foreground">Starting price</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Everything in Essential</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>3D visualization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom furniture selection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Material and finish selection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Lighting design</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Luxury Design</CardTitle>
                <CardDescription>Full-service design for entire homes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-4xl font-bold">$8,000+</div>
                <p className="text-sm text-muted-foreground">Starting price</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Project management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom furniture design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Contractor coordination</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Final styling and accessories</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Design Process</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We follow a structured approach to ensure your project runs smoothly from start to finish.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              1
            </div>
            <h3 className="mb-2 text-xl font-medium">Consultation</h3>
            <p className="text-muted-foreground">We meet to discuss your vision, needs, and budget for the project.</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              2
            </div>
            <h3 className="mb-2 text-xl font-medium">Concept Development</h3>
            <p className="text-muted-foreground">
              We create design concepts based on your requirements and preferences.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              3
            </div>
            <h3 className="mb-2 text-xl font-medium">Design Implementation</h3>
            <p className="text-muted-foreground">
              We execute the approved design plan, coordinating with contractors as needed.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              4
            </div>
            <h3 className="mb-2 text-xl font-medium">Final Reveal</h3>
            <p className="text-muted-foreground">
              We present your completed space, ensuring every detail meets your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Start Your Design Journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Contact us today to schedule a consultation and discuss how we can transform your space.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
