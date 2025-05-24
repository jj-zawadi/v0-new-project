import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/metallic-epoxy-floor.jpg"
          alt="Premium metallic epoxy flooring installation showcase"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Kenya's Premier Epoxy Specialists
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Transform your space with stunning epoxy flooring, custom epoxy furniture, decorative wall finishes, and
            unique epoxy accessories. Premium quality, lasting beauty.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/services">Our Epoxy Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Epoxy Specializations</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From seamless epoxy floors to custom furniture and decorative accessories, we create stunning epoxy
            solutions for every space and need.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Epoxy Flooring"
            description="Seamless, durable epoxy floors in metallic, solid colors, and decorative patterns. Perfect for homes, offices, and commercial spaces."
            icon="Home"
            href="/services/epoxy-flooring"
          />
          <ServiceCard
            title="Epoxy Furniture"
            description="Custom epoxy tables, countertops, and furniture pieces. Unique resin art combined with wood and other materials."
            icon="Building2"
            href="/services/epoxy-furniture"
          />
          <ServiceCard
            title="Epoxy Walls & Accessories"
            description="Decorative epoxy wall finishes, custom accessories, and artistic pieces that add character to any space."
            icon="LayoutPanelTop"
            href="/services/epoxy-accessories"
          />
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/services" className="group">
              View All Epoxy Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Epoxy Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our stunning epoxy flooring installations, custom furniture pieces, and decorative accessories
              crafted across Kenya.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Metallic Epoxy Floor"
              category="Epoxy Flooring"
              imageSrc="/images/metallic-epoxy-floor.jpg"
              href="/gallery?category=flooring"
            />
            <ProjectCard
              title="Custom Epoxy River Table"
              category="Epoxy Furniture"
              imageSrc="/images/epoxy-river-table.jpg"
              href="/gallery?category=furniture"
            />
            <ProjectCard
              title="Epoxy Wall Art Installation"
              category="Epoxy Walls"
              imageSrc="/images/epoxy-wall-mural.jpg"
              href="/gallery?category=walls"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/gallery" className="group">
                View All Epoxy Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Epoxy Expertise</h2>
            <p className="mb-8 text-muted-foreground">
              As Kenya's leading epoxy specialists, we combine technical expertise with artistic vision to create
              exceptional epoxy solutions that last.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Premium Epoxy Resins</h3>
                  <p className="text-muted-foreground">
                    We use only the highest quality epoxy resins and pigments for superior durability and stunning
                    finishes.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Master Craftsmen</h3>
                  <p className="text-muted-foreground">
                    Our skilled artisans specialize exclusively in epoxy work, ensuring perfect application every time.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Custom Designs</h3>
                  <p className="text-muted-foreground">
                    Every epoxy project is uniquely designed to match your vision, from colors to patterns and textures.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Lifetime Support</h3>
                  <p className="text-muted-foreground">
                    We provide ongoing maintenance advice and support to keep your epoxy installations looking perfect.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-auto">
            <Image
              src="/images/epoxy-rose-art.jpg"
              alt="Epoxy specialist crafting custom furniture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from satisfied customers who have transformed their spaces with our epoxy solutions across Kenya.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="The metallic epoxy floor in our living room is absolutely stunning! It's been two years and it still looks brand new. Best investment we made for our home."
              author="Sarah Wanjiku"
              role="Homeowner, Nairobi"
              rating={5}
            />
            <TestimonialCard
              quote="Our custom epoxy conference table is the centerpiece of our boardroom. Clients always ask about it. The craftsmanship is exceptional."
              author="Michael Kiprotich"
              role="Business Owner, Eldoret"
              rating={5}
            />
            <TestimonialCard
              quote="The epoxy bar counter transformed our restaurant's look completely. It's easy to clean, durable, and gets compliments every day."
              author="Grace Muthoni"
              role="Restaurant Owner, Mombasa"
              rating={5}
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/testimonials" className="group">
                Read More Success Stories
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready for Your Epoxy Transformation?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Contact us today for a free consultation and site visit. Let's create something beautiful and lasting
            together.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
