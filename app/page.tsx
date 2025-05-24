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
          src="/placeholder.svg?height=1080&width=1920"
          alt="Elegant interior design showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transform Your Space
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Elegance Interiors brings your vision to life with bespoke interior design solutions that blend beauty,
            functionality, and your unique style.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We offer comprehensive interior design services tailored to your specific needs and preferences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Residential Design"
            description="Transform your home into a personalized sanctuary that reflects your lifestyle and aesthetic preferences."
            icon="Home"
            href="/services/residential"
          />
          <ServiceCard
            title="Commercial Design"
            description="Create functional and inspiring workspaces that enhance productivity and impress clients."
            icon="Building2"
            href="/services/commercial"
          />
          <ServiceCard
            title="Space Planning"
            description="Optimize your layout for flow, functionality, and aesthetic appeal with our expert space planning."
            icon="LayoutPanelTop"
            href="/services/space-planning"
          />
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/services" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our portfolio of stunning interior transformations and design solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Modern Minimalist Apartment"
              category="Residential"
              imageSrc="/placeholder.svg?height=600&width=800"
              href="/projects/modern-apartment"
            />
            <ProjectCard
              title="Luxury Boutique Hotel"
              category="Commercial"
              imageSrc="/placeholder.svg?height=600&width=800"
              href="/projects/boutique-hotel"
            />
            <ProjectCard
              title="Contemporary Office Space"
              category="Commercial"
              imageSrc="/placeholder.svg?height=600&width=800"
              href="/projects/office-space"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/gallery" className="group">
                View All Projects
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
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Elegance Interiors</h2>
            <p className="mb-8 text-muted-foreground">
              With years of experience and a passion for design, we deliver exceptional results that exceed
              expectations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Expert Designers</h3>
                  <p className="text-muted-foreground">
                    Our team consists of certified interior designers with years of experience.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Personalized Approach</h3>
                  <p className="text-muted-foreground">
                    We tailor our designs to reflect your unique style and requirements.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Quality Materials</h3>
                  <p className="text-muted-foreground">
                    We source the finest materials and furnishings for your space.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">End-to-End Service</h3>
                  <p className="text-muted-foreground">
                    From concept to completion, we handle every aspect of your project.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-auto">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Interior designer at work"
              fill
              className="object-cover"
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
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Working with Elegance Interiors was a dream. They transformed our home into a beautiful space that perfectly reflects our style and needs."
              author="Sarah Johnson"
              role="Homeowner"
              rating={5}
            />
            <TestimonialCard
              quote="The team's attention to detail and creative solutions helped us maximize our office space while creating an inspiring environment for our employees."
              author="Michael Chen"
              role="CEO, TechStart Inc."
              rating={5}
            />
            <TestimonialCard
              quote="From the initial consultation to the final reveal, the process was seamless. Their expertise and professionalism exceeded our expectations."
              author="Emily Rodriguez"
              role="Restaurant Owner"
              rating={5}
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/testimonials" className="group">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
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
