import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&h=800&fit=crop"
          alt="Client Testimonials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Client Testimonials</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Hear what our clients have to say about their experience working with Epoxy & Aesthetic Works Kenya.
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
                "The metallic epoxy floor in our living room is absolutely stunning! It's been two years and it still
                looks brand new. Best investment we made for our home."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Sarah Wanjiku"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Sarah Wanjiku</div>
                  <div className="text-sm text-muted-foreground">Homeowner, Nairobi</div>
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
                "Our custom epoxy conference table is the centerpiece of our boardroom. Clients always ask about it. The
                craftsmanship is exceptional."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Michael Kiprotich"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Michael Kiprotich</div>
                  <div className="text-sm text-muted-foreground">Business Owner, Eldoret</div>
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
                "The epoxy bar counter transformed our restaurant's look completely. It's easy to clean, durable, and
                gets compliments every day."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Grace Muthoni"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Grace Muthoni</div>
                  <div className="text-sm text-muted-foreground">Restaurant Owner, Mombasa</div>
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
                "The custom epoxy kitchen island is the heart of our home. The river design with blue resin is
                breathtaking and so functional."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Robert Thompson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Robert Thompson</div>
                  <div className="text-sm text-muted-foreground">Homeowner, Nakuru</div>
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
                "The epoxy wall art in our hotel lobby creates such an impressive first impression. Guests are always
                amazed by the 3D effect."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Jennifer Lee"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Jennifer Wanjiru</div>
                  <div className="text-sm text-muted-foreground">Hotel Manager, Kisumu</div>
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
                "Our epoxy garage floor can handle anything we throw at it. The anti-slip coating gives us confidence,
                and it looks amazing too."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="David Wilson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">David Kimani</div>
                  <div className="text-sm text-muted-foreground">Homeowner, Thika</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Projects */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Featured Epoxy Projects</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore some of the stunning epoxy transformations we've created for our satisfied clients across Kenya.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop"
                alt="Metallic Epoxy Floor Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">Metallic Epoxy Floor Transformation</h3>
              <p className="text-muted-foreground">
                A stunning metallic epoxy floor installation in a modern Nairobi home, featuring copper and bronze tones
                that create a luxurious, flowing effect.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=600&fit=crop"
                alt="Custom Epoxy River Table"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">Custom Epoxy River Dining Table</h3>
              <p className="text-muted-foreground">
                A bespoke dining table featuring live-edge wood with a stunning blue epoxy river design, handcrafted for
                a family in Kiambu.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
                alt="Epoxy Wall Art"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">3D Epoxy Wall Art Installation</h3>
              <p className="text-muted-foreground">
                An artistic 3D epoxy wall installation in a Mombasa office, creating depth and visual interest with
                ocean-inspired colors and textures.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
                alt="Commercial Epoxy Flooring"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-background p-6">
              <h3 className="mb-2 text-xl font-medium">Commercial Epoxy Flooring</h3>
              <p className="text-muted-foreground">
                A durable, chemical-resistant epoxy floor system installed in a manufacturing facility in Eldoret,
                designed for heavy-duty industrial use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
