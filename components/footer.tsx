import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, PinIcon as Pinterest } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Elegance Interiors</h3>
            <p className="mb-4 text-muted-foreground">
              Transforming spaces into beautiful, functional environments that enhance people's lives.
            </p>
            <div className="flex items-center gap-2">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4" />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </div>
              </Link>
              <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Pinterest className="h-4 w-4" />
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
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground transition-colors hover:text-primary">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground transition-colors hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground transition-colors hover:text-primary">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  123 Design Street
                  <br />
                  Suite 101
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@eleganceinteriors.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Newsletter</h3>
            <p className="mb-4 text-muted-foreground">
              Subscribe to our newsletter for design tips, trends, and exclusive offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Elegance Interiors. All rights reserved.
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
