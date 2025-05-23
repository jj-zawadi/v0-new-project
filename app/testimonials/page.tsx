import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Client Testimonials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Client Testimonials</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Hear what our clients have to say about their experience working with Elegance Interiors.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "Working with Elegance Interiors was a dream. They transformed our home into a beautiful space that
                perfectly reflects our style and needs. The attention to detail was impressive."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Residential Client</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "The team's attention to detail and creative solutions helped us maximize our office space while
                creating an inspiring environment for our employees."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Michael Chen"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "From the initial consultation to the final reveal, the process was seamless. Their expertise and
                professionalism exceeded our expectations."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Emily Rodriguez"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Emily Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Restaurant Owner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "Elegance Interiors transformed our outdated living room into a modern, functional space that our family
                loves. They listened to our needs and delivered beyond our expectations."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Robert Thompson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Robert Thompson</div>
                  <div className="text-sm text-muted-foreground">Homeowner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "The design team at Elegance Interiors created a stunning boutique hotel lobby that has received
                countless compliments from our guests. Their vision and execution were flawless."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Jennifer Lee"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Jennifer Lee</div>
                  <div className="text-sm text-muted-foreground">Hotel Manager</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "We hired Elegance Interiors for our kitchen renovation, and they delivered a beautiful, functional
                space that has become the heart of our home. Their attention to detail was exceptional."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="David Wilson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">David Wilson</div>
                  <div className="text-sm text-muted-foreground">Homeowner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "As a busy professional, I appreciated their turnkey approach. They handled everything from design to
                installation, making the process stress-free and enjoyable."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Amanda Parker"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Amanda Parker</div>
                  <div className="text-sm text-muted-foreground">Executive</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "The team at Elegance Interiors transformed our retail space into an inviting environment that has
                significantly increased customer engagement and sales."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Thomas Brown"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Thomas Brown</div>
                  <div className="text-sm text-muted-foreground">Retail Store Owner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic">
                "Their ability to blend functionality with aesthetics is remarkable. Our new office space is not only
                beautiful but also enhances productivity and collaboration."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sophia Martinez"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sophia Martinez</div>
                  <div className="text-sm text-muted-foreground">Operations Director</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Video Testimonials</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Watch our clients share their experiences working with Elegance Interiors.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Video testimonial thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-8 w-8"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Featured Client Projects</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore some of the stunning transformations we've created for our satisfied clients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Modern Living Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">Modern Living Room Transformation</h3>
              <p className="text-muted-foreground">
                A complete redesign of a dated living space into a contemporary, light-filled room for a family in
                Brooklyn.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Luxury Master Bedroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">Luxury Master Bedroom Suite</h3>
              <p className="text-muted-foreground">
                A serene and sophisticated master bedroom retreat for a couple in Manhattan, featuring custom
                furnishings and lighting.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">Upscale Restaurant Design</h3>
              <p className="text-muted-foreground">
                A vibrant and inviting restaurant interior that balances sophistication with comfort for a new dining
                establishment.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image src="/placeholder.svg?height=600&width=800" alt="Office Space" fill className="object-cover" />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">Creative Office Space</h3>
              <p className="text-muted-foreground">
                A dynamic and collaborative workspace designed for a growing tech company, emphasizing flexibility and
                brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
