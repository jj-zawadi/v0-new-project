"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Menu, PinIcon as Pinterest, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Elegance Interiors</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <Pinterest className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
          <Button asChild size="sm">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                  <Pinterest className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
              </div>
            </div>
            <Button asChild size="sm" className="mt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
