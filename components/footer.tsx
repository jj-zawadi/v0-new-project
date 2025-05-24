import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/eaw-logo.png"
                alt="Epoxy & Aesthetic Works Kenya"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="text-lg font-medium">Epoxy & Aesthetic Works Kenya</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Kenya's premier epoxy specialists. Creating stunning epoxy floors, custom furniture, and decorative
              accessories with unmatched quality and artistry.
            </p>
            <div className="flex items-center gap-2">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4" />
                </div>
              </Link>
              <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Epoxy Flooring
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Custom Epoxy Furniture
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Epoxy Wall Finishes
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Epoxy Accessories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground transition-colors hover:text-primary">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Nairobi, Kenya
                  <br />
                  Serving Nationwide
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+254 757 676 742</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground break-all">epoxy.aestheticworks@outlook.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Newsletter</h3>
            <p className="mb-4 text-muted-foreground">
              Subscribe for epoxy tips, project showcases, and exclusive offers.
            </p>
            <form action={subscribeToNewsletter} className="flex flex-col space-y-2">
              <Input type="email" name="email" placeholder="Your email address" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Epoxy & Aesthetic Works Kenya. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="transition-colors hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
