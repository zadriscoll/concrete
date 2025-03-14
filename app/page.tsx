import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectGallery from "@/components/project-gallery"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Concrete Pros</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Our Services
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Photo Gallery
            </Link>
            <Link href="#reviews" className="text-sm font-medium transition-colors hover:text-primary">
              Reviews
            </Link>
            <Link href="#quote" className="text-sm font-medium transition-colors hover:text-primary">
              Get Free Quote
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="tel:+17705551234" className="hidden md:flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 404 272 1437</span>
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
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Foundations, Flatwork & More!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Just Concrete Pros
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Top Concrete Contractor In North Atlanta
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in residential & commercial concrete jobs. We handle anything from commerical projects to smaller projects like:
                  driveway and patio installations, concrete repair, slab construction, sidewalk and curb installations, foundation work, block retaining walls, stamped concrete & paver work.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#quote">
                    <Button>Get Free Quote</Button>
                  </Link>
                  <Link href="#services">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Concrete driveway installation"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 20 years of industry experience, we deliver quality concrete solutions for all your needs.
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
          </div>
        </section>
        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customer Reviews</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our satisfied customers in North Atlanta have to say about our work.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <TestimonialCarousel />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Concrete Pros</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With 20 years of experience in the concrete industry, we've built a reputation for quality workmanship
                  and exceptional customer service in North Atlanta, Georgia. Our team of skilled professionals is
                  dedicated to delivering superior concrete solutions for residential and commercial properties.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We take pride in our attention to detail, commitment to using high-quality materials, and ensuring
                  every project is completed on time and within budget. Our expertise spans from simple repairs to
                  complex installations, making us your one-stop solution for all concrete needs.
                </p>
              </div>
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Concrete professionals at work"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Photo Gallery</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  View our recent projects and see the quality of our work.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <ProjectGallery />
            </div>
          </div>
        </section>
        <section id="quote" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get a Free Quote</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today for a free, no-obligation quote on your concrete project.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form action="https://formspree.io/f/maneyrde" method="POST" className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Name"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="Email"
                      type="email"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      placeholder="Phone"
                      type="tel"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="sr-only">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      placeholder="Project Details"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-background text-primary hover:bg-background/90">
                    Submit
                  </Button>
                </form>
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

