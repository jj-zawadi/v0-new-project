import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Contact Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Get in touch with our team to discuss your interior design needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mb-8 text-muted-foreground">
              We'd love to hear from you. Fill out the form below, and one of our design consultants will get back to
              you within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Design</SelectItem>
                    <SelectItem value="commercial">Commercial Design</SelectItem>
                    <SelectItem value="consultation">Design Consultation</SelectItem>
                    <SelectItem value="renovation">Renovation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project and design needs" rows={5} />
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
              <Image src="/placeholder.svg?height=800&width=1200" alt="Our office" fill className="object-cover" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>123 Design Street</p>
                  <p>Suite 101</p>
                  <p>New York, NY 10001</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Main: (555) 123-4567</p>
                  <p>Helpline: (555) 987-6543</p>
                  <p>Fax: (555) 123-4568</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>info@eleganceinteriors.com</p>
                  <p>support@eleganceinteriors.com</p>
                  <p>careers@eleganceinteriors.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted">
        <div className="relative h-full w-full">
          <Image src="/placeholder.svg?height=800&width=1920" alt="Map location" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-lg bg-background p-4 shadow-lg">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>How much does interior design cost?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our design fees vary based on the scope and complexity of your project. We offer different service
                packages starting from $1,500 for single-room designs. During our initial consultation, we'll discuss
                your budget and provide a detailed quote.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long does a typical design project take?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Project timelines depend on the scope of work. A single room design might take 4-6 weeks, while a full
                home renovation could take 3-6 months. We'll provide a detailed timeline during our initial planning
                phase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do you work with clients remotely?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we offer virtual design services for clients outside our local area. Through video consultations,
                digital mood boards, and 3D renderings, we can create beautiful designs regardless of your location.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can you work with my existing furniture?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're happy to incorporate your existing pieces into the new design. During our consultation, we'll
                discuss which items you'd like to keep and how to integrate them with new elements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do you offer project management services?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, our Premium and Luxury design packages include project management services. We coordinate with
                contractors, oversee installations, and ensure that every aspect of the design is executed to our high
                standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
