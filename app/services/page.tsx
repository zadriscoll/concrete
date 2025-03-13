import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/concrete-pros-logo.png"
                alt="Concrete Pros Logo"
                width={120}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Our Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Photo Gallery
            </Link>
            <Link href="/reviews" className="text-sm font-medium transition-colors hover:text-primary">
              Reviews
            </Link>
            <Link href="/quote" className="text-sm font-medium transition-colors hover:text-primary">
              Get Free Quote
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="tel:+17705551234" className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 770 555 1234</span>
            </Link>
            <Button className="md:hidden" variant="outline" size="icon">
              <span className="sr-only">Toggle menu</span>
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With 20 years of industry experience, we deliver quality concrete solutions for all your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-6 w-6"
                  >
                    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                    <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                    <path d="M12 12h.01" />
                    <path d="M3 16h18" />
                    <path d="M4 20h16" />
                    <path d="M8 7h8" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Driveways & Patios</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Custom concrete driveways and patios built to last with premium materials and expert craftsmanship.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-6 w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Concrete Repair</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Professional concrete repair services to fix cracks, spalling, and other damage to restore your
                    concrete surfaces.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
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
                    className="h-6 w-6"
                  >
                    <path d="M2 20h.01" />
                    <path d="M7 20v-4" />
                    <path d="M12 20v-8" />
                    <path d="M17 20V8" />
                    <path d="M22 4v16" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Retaining Walls</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sturdy retaining walls that prevent soil erosion and add beautiful landscaping features to your
                    property.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl mt-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border bg-card shadow-sm">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Stamped Concrete</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Decorative concrete that mimics the look of stone, brick, slate, or other materials at a fraction
                      of the cost.
                    </p>
                    <Image
                      src="/images/stamped-concrete.jpg"
                      alt="Stamped concrete patio"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="rounded-lg border bg-card shadow-sm">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Concrete Sidewalks</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Durable and attractive sidewalks that enhance your property's accessibility and curb appeal.
                    </p>
                    <Image
                      src="/images/sidewalk.jpg"
                      alt="Concrete sidewalk"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="rounded-lg border bg-card shadow-sm">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Foundation Work</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Solid foundations for new construction or repairs to existing foundations to ensure structural
                      integrity.
                    </p>
                    <Image
                      src="/images/foundation.jpg"
                      alt="Concrete foundation"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="rounded-lg border bg-card shadow-sm">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Decorative Concrete</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Custom colored, textured, and designed concrete surfaces that add unique aesthetic appeal to your
                      property.
                    </p>
                    <Image
                      src="/images/decorative-concrete.jpg"
                      alt="Decorative concrete"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
            © {new Date().getFullYear()} Concrete Pros. All rights reserved. Serving North Atlanta, Georgia.
          </p>
          <div className="flex gap-4">
            <Link
              href="tel:+17705551234"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              +1 770 555 1234
            </Link>
            <Link
              href="mailto:info@concretepros.com"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              info@concretepros.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

