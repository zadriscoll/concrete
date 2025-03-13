"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  id: number
  name: string
  location: string
  rating: number
  text: string
  project: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "Alpharetta, GA",
    rating: 5,
    text: "Concrete Pros transformed my cracked, uneven driveway into a beautiful, smooth surface that has significantly improved my home's curb appeal. Their team was professional, efficient, and completed the job ahead of schedule. I couldn't be happier with the results!",
    project: "Driveway Replacement",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Roswell, GA",
    rating: 5,
    text: "We hired Concrete Pros to install a stamped concrete patio in our backyard, and the results exceeded our expectations. Their attention to detail and craftsmanship is outstanding. The team was courteous and kept the work area clean throughout the project.",
    project: "Stamped Concrete Patio",
  },
  {
    id: 3,
    name: "David Thompson",
    location: "Sandy Springs, GA",
    rating: 4,
    text: "The retaining wall Concrete Pros built for us not only solved our erosion issues but also added a beautiful feature to our landscaping. Their knowledge and expertise were evident from the initial consultation through project completion.",
    project: "Retaining Wall Installation",
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    location: "Marietta, GA",
    rating: 5,
    text: "After getting quotes from several contractors, we chose Concrete Pros for our pool deck renovation. Their pricing was competitive, and the quality of work was exceptional. The non-slip finish they applied has made our pool area much safer for our children.",
    project: "Pool Deck Renovation",
  },
  {
    id: 5,
    name: "Robert Wilson",
    location: "Dunwoody, GA",
    rating: 5,
    text: "I've used Concrete Pros for multiple projects over the years, and they consistently deliver excellent results. Their 20 years of experience in the industry really shows in their work quality and problem-solving abilities. Highly recommended!",
    project: "Multiple Concrete Projects",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic text-gray-700 dark:text-gray-300">"{testimonial.text}"</p>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={handlePrevious} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            className={`w-2 h-2 p-0 rounded-full ${activeIndex === index ? "bg-primary" : "bg-gray-300"}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

