import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ShopPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/epoxy-serving-tray.jpg"
          alt="Epoxy accessories shop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Epoxy Shop</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Discover our curated collection of epoxy accessories, furniture pieces, and custom art for your home.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <div>
              <h3 className="mb-4 text-lg font-medium">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="furniture" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="furniture" className="ml-2 text-sm">
                    Epoxy Furniture
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="accessories" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="accessories" className="ml-2 text-sm">
                    Accessories
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="art" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="art" className="ml-2 text-sm">
                    Wall Art
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="serving" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="serving" className="ml-2 text-sm">
                    Serving Items
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="custom" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="custom" className="ml-2 text-sm">
                    Custom Orders
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Price Range (KES)</h3>
              <Slider defaultValue={[0, 50000]} min={0} max={100000} step={1000} />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>KES 0</span>
                <span>KES 100,000+</span>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Color</h3>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-8 cursor-pointer rounded-full bg-black" title="Black"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-white border" title="White"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-blue-500" title="Blue"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-green-500" title="Green"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-yellow-500" title="Gold"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-red-500" title="Red"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-purple-500" title="Purple"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-orange-500" title="Orange"></div>
              </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold">Epoxy Products</h2>
                <p className="text-muted-foreground">Showing 12 of 45 products</p>
              </div>
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <Input type="search" placeholder="Search products..." className="sm:w-[200px]" />
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src="/images/epoxy-river-table.jpg"
                    alt="Epoxy River Coffee Table"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Epoxy River Coffee Table</CardTitle>
                  <CardDescription>Live edge wood with turquoise epoxy river</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES 45,000</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src="/images/epoxy-serving-tray.jpg"
                    alt="Epoxy Serving Tray Set"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Luxury Epoxy Serving Tray</CardTitle>
                  <CardDescription>Black & white marble effect with gold handles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES 8,500</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src="/images/epoxy-clock-green.jpg"
                    alt="Epoxy Resin Clock"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Epoxy Resin Wall Clock</CardTitle>
                  <CardDescription>Green marble effect with gold Roman numerals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES 12,000</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src="/images/epoxy-rose-art.jpg"
                    alt="Epoxy Rose Art"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Preserved Rose Epoxy Art</CardTitle>
                  <CardDescription>LED-lit epoxy art with real preserved roses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES 18,000</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src="/images/epoxy-outdoor-tables.jpg"
                    alt="Outdoor Epoxy Tables"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Ocean Theme Side Tables</CardTitle>
                  <CardDescription>Set of 3 outdoor epoxy tables with sea elements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES 35,000</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src="/images/epoxy-clock-square.jpg"
                    alt="Square Epoxy Clock"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Marble Effect Epoxy Clock</CardTitle>
                  <CardDescription>Square design with black & gold marble pattern</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">KES 14,500</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <span className="sr-only">Previous page</span>
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
                    className="h-4 w-4"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  4
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Next page</span>
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
                    className="h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Featured Epoxy Collections</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our curated epoxy collections designed for different styles and spaces.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/epoxy-river-table.jpg"
                  alt="River Table Collection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="mb-2 text-2xl font-bold">River Table Collection</h3>
                <p className="mb-4">Stunning live-edge tables with flowing epoxy rivers.</p>
                <Button asChild variant="secondary">
                  <Link href="/shop/collections/river-tables">Explore Collection</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/epoxy-serving-tray.jpg"
                  alt="Serving Essentials Collection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="mb-2 text-2xl font-bold">Serving Essentials</h3>
                <p className="mb-4">Beautiful epoxy serving pieces for entertaining.</p>
                <Button asChild variant="secondary">
                  <Link href="/shop/collections/serving">Explore Collection</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/epoxy-rose-art.jpg"
                  alt="Art Collection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="mb-2 text-2xl font-bold">Art Collection</h3>
                <p className="mb-4">Unique epoxy art pieces for modern interiors.</p>
                <Button asChild variant="secondary">
                  <Link href="/shop/collections/art">Explore Collection</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-16">
        <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our newsletter to receive updates on new epoxy products, special offers, and design tips.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Enter your email" className="bg-primary-foreground text-primary" />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
