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
        <Image src="/placeholder.svg?height=800&width=1920" alt="Our shop" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Shop</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Discover our curated collection of furniture, decor, and accessories for your home.
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
                    Furniture
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="lighting" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="lighting" className="ml-2 text-sm">
                    Lighting
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="decor" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="decor" className="ml-2 text-sm">
                    Decor
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="textiles" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="textiles" className="ml-2 text-sm">
                    Textiles
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="accessories" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="accessories" className="ml-2 text-sm">
                    Accessories
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Price Range</h3>
              <Slider defaultValue={[0, 1000]} min={0} max={2000} step={10} />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>$0</span>
                <span>$2000+</span>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Style</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="modern" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="modern" className="ml-2 text-sm">
                    Modern
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="contemporary" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="contemporary" className="ml-2 text-sm">
                    Contemporary
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="traditional" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="traditional" className="ml-2 text-sm">
                    Traditional
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="scandinavian" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="scandinavian" className="ml-2 text-sm">
                    Scandinavian
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="industrial" className="h-4 w-4 rounded border-gray-300" />
                  <label htmlFor="industrial" className="ml-2 text-sm">
                    Industrial
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Color</h3>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-8 cursor-pointer rounded-full bg-black" title="Black"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-white border" title="White"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-gray-500" title="Gray"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-blue-500" title="Blue"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-green-500" title="Green"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-yellow-500" title="Yellow"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-red-500" title="Red"></div>
                <div className="h-8 w-8 cursor-pointer rounded-full bg-purple-500" title="Purple"></div>
              </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold">Products</h2>
                <p className="text-muted-foreground">Showing 12 of 60 products</p>
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
                    src="/placeholder.svg?height=600&width=600"
                    alt="Modern Sofa"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Modern Sofa</CardTitle>
                  <CardDescription>Contemporary living room sofa</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,299.00</div>
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
                    src="/placeholder.svg?height=600&width=600"
                    alt="Pendant Light"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Pendant Light</CardTitle>
                  <CardDescription>Minimalist hanging light fixture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$249.00</div>
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
                    src="/placeholder.svg?height=600&width=600"
                    alt="Accent Chair"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Accent Chair</CardTitle>
                  <CardDescription>Stylish accent chair for any room</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$499.00</div>
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
                    src="/placeholder.svg?height=600&width=600"
                    alt="Coffee Table"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Coffee Table</CardTitle>
                  <CardDescription>Modern glass and wood coffee table</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$349.00</div>
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
                    src="/placeholder.svg?height=600&width=600"
                    alt="Area Rug"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Area Rug</CardTitle>
                  <CardDescription>Patterned area rug for living spaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$199.00</div>
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
                    src="/placeholder.svg?height=600&width=600"
                    alt="Wall Art"
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Wall Art</CardTitle>
                  <CardDescription>Abstract canvas wall art</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$129.00</div>
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
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Featured Collections</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our curated collections designed to complement various interior styles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Minimalist Collection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="mb-2 text-2xl font-bold">Minimalist Collection</h3>
                <p className="mb-4">Clean lines and functional design for modern spaces.</p>
                <Button asChild variant="secondary">
                  <Link href="/shop/collections/minimalist">Explore Collection</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Scandinavian Collection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="mb-2 text-2xl font-bold">Scandinavian Collection</h3>
                <p className="mb-4">Light, airy designs inspired by Nordic simplicity.</p>
                <Button asChild variant="secondary">
                  <Link href="/shop/collections/scandinavian">Explore Collection</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Luxury Collection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="mb-2 text-2xl font-bold">Luxury Collection</h3>
                <p className="mb-4">Elegant and sophisticated pieces for upscale interiors.</p>
                <Button asChild variant="secondary">
                  <Link href="/shop/collections/luxury">Explore Collection</Link>
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
              Subscribe to our newsletter to receive updates on new products, special offers, and design tips.
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
