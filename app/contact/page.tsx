import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop"
          alt="Contact Epoxy & Aesthetic Works Kenya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Ready to transform your space with premium epoxy solutions? Get in touch for a free consultation and site
            visit.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Book Your Consultation</h2>
            <p className="mb-8 text-muted-foreground">
              Ready to start your epoxy project? Fill out the form below and our epoxy specialists will get back to you
              within 24 hours to schedule a site visit and consultation.
            </p>

            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop"
                alt="Epoxy workshop in Kenya"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nairobi & Surrounding Areas</p>
                  <p>Mombasa, Kisumu, Eldoret</p>
                  <p>Nationwide Service Available</p>
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
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p>Sunday: Emergency Only</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Call or WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Phone: +254 757 676 742</p>
                  <p>WhatsApp: +254 757 676 742</p>
                  <p>Available 24/7 for consultations</p>
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
                  <p>epoxy.aestheticworks@outlook.com</p>
                  <p>Send photos for quick estimates</p>
                  <p>Project consultations available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=800&fit=crop"
            alt="Kenya service areas map"
            fill
            className="object-cover"
          />
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
            Common questions about our epoxy flooring, furniture, and accessory services.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>How much does epoxy flooring cost in Kenya?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our epoxy flooring starts from KES 1,500 per square meter for basic solid colors, up to KES 2,800 for
                premium metallic finishes. Final cost depends on area size, design complexity, and surface preparation
                requirements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long does epoxy flooring last?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With proper installation and maintenance, our epoxy floors last 10-15 years or more. We use premium
                resins designed for Kenya's climate and provide warranties on all our work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Can you create custom epoxy furniture?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes! We specialize in custom epoxy furniture including dining tables, coffee tables, countertops, and
                bar tops. Each piece is uniquely designed and handcrafted to your specifications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do you serve areas outside Nairobi?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we provide services across Kenya including Mombasa, Kisumu, Eldoret, and other major towns. Travel
                costs may apply for projects outside the Nairobi metropolitan area.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How long does installation take?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Epoxy flooring typically takes 2-3 days for residential spaces, including surface preparation and curing
                time. Custom furniture pieces take 1-2 weeks depending on complexity. We'll provide exact timelines
                during consultation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
