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
        <Image src="/images/metallic-epoxy-floor.jpg" alt="Our epoxy services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Epoxy Services</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Comprehensive epoxy solutions for flooring, furniture, walls, and accessories. Premium quality, custom
            designs.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="container py-16">
        <Tabs defaultValue="flooring" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="flooring">Epoxy Flooring</TabsTrigger>
            <TabsTrigger value="furniture">Epoxy Furniture</TabsTrigger>
            <TabsTrigger value="walls">Epoxy Walls</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
          </TabsList>

          <TabsContent value="flooring" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/images/metallic-epoxy-floor.jpg"
                  alt="Epoxy flooring installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Epoxy Flooring Solutions</h2>
                <p className="mb-6 text-muted-foreground">
                  Transform your floors with our premium epoxy coatings. Seamless, durable, and available in countless
                  colors and finishes including metallic, solid colors, and decorative patterns.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Metallic epoxy floors with stunning visual effects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Solid color epoxy for clean, modern looks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Decorative flake and quartz systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Anti-slip and chemical resistant options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Residential and commercial applications</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Book Site Visit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="furniture" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image src="/images/epoxy-river-table.jpg" alt="Custom epoxy furniture" fill className="object-cover" />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Custom Epoxy Furniture</h2>
                <p className="mb-6 text-muted-foreground">
                  Create unique furniture pieces that are both functional and artistic. Our custom epoxy furniture
                  combines premium wood with stunning resin art for one-of-a-kind pieces.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom dining tables with river designs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Epoxy kitchen countertops and islands</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Coffee tables and side tables</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Bar tops and commercial surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom designs with embedded objects</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Design Custom Furniture
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="walls" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image src="/images/epoxy-wall-mural.jpg" alt="Epoxy wall finishes" fill className="object-cover" />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Epoxy Wall Finishes</h2>
                <p className="mb-6 text-muted-foreground">
                  Add depth and character to your walls with our decorative epoxy finishes. From subtle textures to bold
                  artistic statements, we create walls that captivate.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Textured epoxy wall coatings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Metallic accent walls</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>3D epoxy wall art installations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Bathroom and kitchen wall coatings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Commercial wall branding solutions</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Explore Wall Options
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/images/epoxy-serving-tray.jpg"
                  alt="Epoxy accessories and art"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Epoxy Accessories & Art</h2>
                <p className="mb-6 text-muted-foreground">
                  Complete your space with custom epoxy accessories and artistic pieces. From functional items to pure
                  art, we create unique pieces that reflect your style.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom epoxy serving trays and boards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Decorative bowls and vases</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Epoxy art panels and sculptures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Coasters and desk accessories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom corporate gifts and awards</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact" className="group">
                    Order Custom Accessories
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
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Epoxy Packages</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Choose from our range of epoxy service packages designed for different needs and budgets.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic Epoxy Floor</CardTitle>
                <CardDescription>Perfect for garages and utility areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-4xl font-bold">KES 1,500</div>
                <p className="text-sm text-muted-foreground">Per square meter</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Surface preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Solid color epoxy coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Clear protective topcoat</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>2-year warranty</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Book Site Visit</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader className="bg-primary/5">
                <div className="mb-2 text-center text-sm font-medium text-primary">Most Popular</div>
                <CardTitle>Premium Metallic Floor</CardTitle>
                <CardDescription>Stunning metallic effects for living spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-4xl font-bold">KES 2,800</div>
                <p className="text-sm text-muted-foreground">Per square meter</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Metallic pigments and effects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom color blending</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Enhanced durability coating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>5-year warranty</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Book Site Visit</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Furniture Piece</CardTitle>
                <CardDescription>Bespoke epoxy furniture creation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-4xl font-bold">KES 25,000+</div>
                <p className="text-sm text-muted-foreground">Starting price</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Design consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Premium wood selection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom epoxy design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Professional finishing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Lifetime craftsmanship warranty</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Design Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Epoxy Process</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We follow a meticulous process to ensure perfect results for every epoxy project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              1
            </div>
            <h3 className="mb-2 text-xl font-medium">Consultation & Design</h3>
            <p className="text-muted-foreground">
              We discuss your vision, assess the space, and create a custom design plan.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              2
            </div>
            <h3 className="mb-2 text-xl font-medium">Surface Preparation</h3>
            <p className="text-muted-foreground">
              Thorough cleaning, grinding, and preparation to ensure perfect epoxy adhesion.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              3
            </div>
            <h3 className="mb-2 text-xl font-medium">Epoxy Application</h3>
            <p className="text-muted-foreground">
              Expert application of primer, base coat, decorative elements, and protective topcoat.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              4
            </div>
            <h3 className="mb-2 text-xl font-medium">Curing & Finishing</h3>
            <p className="text-muted-foreground">
              Proper curing time and final inspection to ensure a perfect, long-lasting finish.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready for Your Epoxy Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Contact us today to discuss your epoxy flooring, furniture, or accessory needs. Free consultations and site
            visits available.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
