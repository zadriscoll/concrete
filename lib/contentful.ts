import { createClient } from "contentful"

// Use environment variables for Contentful credentials
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Testimonial type definition
export type Testimonial = {
  id: string
  name: string
  location: string
  rating: number
  text: string
  project: string
}

// Service type definition
export type Service = {
  id: string
  title: string
  description: string
  icon: string
}

// Hero content type definition
export type HeroContent = {
  title: string
  subtitle: string
}

// About content type definition
export type AboutContent = {
  title: string
  description: string[]
  imageUrl: string
}

// Fetch testimonials from Contentful
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const entries = await client.getEntries({
      content_type: "testimonial",
      order: "fields.name",
    })

    return entries.items.map((item) => {
      const fields = item.fields as any
      return {
        id: item.sys.id,
        name: fields.name || "",
        location: fields.location || "",
        rating: fields.rating || 5,
        text: fields.text || "",
        project: fields.project || "",
      }
    })
  } catch (error) {
    console.error("Error fetching testimonials from Contentful:", error)
    // Return fallback data if Contentful fetch fails
    return [
      {
        id: "1",
        name: "Michael Johnson",
        location: "Alpharetta, GA",
        rating: 5,
        text: "Concrete Pros transformed my cracked, uneven driveway into a beautiful, smooth surface that has significantly improved my home's curb appeal. Their team was professional, efficient, and completed the job ahead of schedule. I couldn't be happier with the results!",
        project: "Driveway Replacement",
      },
      {
        id: "2",
        name: "Sarah Williams",
        location: "Roswell, GA",
        rating: 5,
        text: "We hired Concrete Pros to install a stamped concrete patio in our backyard, and the results exceeded our expectations. Their attention to detail and craftsmanship is outstanding. The team was courteous and kept the work area clean throughout the project.",
        project: "Stamped Concrete Patio",
      },
      {
        id: "3",
        name: "David Thompson",
        location: "Sandy Springs, GA",
        rating: 4,
        text: "The retaining wall Concrete Pros built for us not only solved our erosion issues but also added a beautiful feature to our landscaping. Their knowledge and expertise were evident from the initial consultation through project completion.",
        project: "Retaining Wall Installation",
      },
    ]
  }
}

// Fetch services from Contentful
export async function getServices(): Promise<Service[]> {
  try {
    const entries = await client.getEntries({
      content_type: "service",
      order: "fields.title",
    })

    return entries.items.map((item) => {
      const fields = item.fields as any
      return {
        id: item.sys.id,
        title: fields.title || "",
        description: fields.description || "",
        icon: fields.icon || "layout",
      }
    })
  } catch (error) {
    console.error("Error fetching services from Contentful:", error)
    // Return fallback data if Contentful fetch fails
    return [
      {
        id: "1",
        title: "Driveways & Patios",
        description:
          "Custom concrete driveways and patios built to last with premium materials and expert craftsmanship.",
        icon: "layout",
      },
      {
        id: "2",
        title: "Concrete Repair",
        description:
          "Professional concrete repair services to fix cracks, spalling, and other damage to restore your concrete surfaces.",
        icon: "tool",
      },
      {
        id: "3",
        title: "Retaining Walls",
        description:
          "Sturdy retaining walls that prevent soil erosion and add beautiful landscaping features to your property.",
        icon: "layers",
      },
    ]
  }
}

// Fetch hero content from Contentful
export async function getHeroContent(): Promise<HeroContent> {
  try {
    const entries = await client.getEntries({
      content_type: "heroSection",
      limit: 1,
    })

    if (entries.items.length > 0) {
      const fields = entries.items[0].fields as any
      return {
        title: fields.title || "",
        subtitle: fields.subtitle || "",
      }
    }

    // Return fallback data if no entries found
    return {
      title: "Concrete Driveways, Patios & More!",
      subtitle: "Just Concrete Pros",
    }
  } catch (error) {
    console.error("Error fetching hero content from Contentful:", error)
    // Return fallback data if Contentful fetch fails
    return {
      title: "Concrete Driveways, Patios & More!",
      subtitle: "Just Concrete Pros",
    }
  }
}

// Fetch about content from Contentful
export async function getAboutContent(): Promise<AboutContent> {
  try {
    const entries = await client.getEntries({
      content_type: "aboutSection",
      limit: 1,
    })

    if (entries.items.length > 0) {
      const fields = entries.items[0].fields as any
      const imageUrl = fields.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : "/images/team.jpg"

      return {
        title: fields.title || "",
        description: Array.isArray(fields.description) ? fields.description : [fields.description || ""],
        imageUrl,
      }
    }

    // Return fallback data if no entries found
    return {
      title: "About Concrete Pros",
      description: [
        "With 20 years of experience in the concrete industry, we've built a reputation for quality workmanship and exceptional customer service in North Atlanta, Georgia. Our team of skilled professionals is dedicated to delivering superior concrete solutions for residential and commercial properties.",
        "We take pride in our attention to detail, commitment to using high-quality materials, and ensuring every project is completed on time and within budget. Our expertise spans from simple repairs to complex installations, making us your one-stop solution for all concrete needs.",
      ],
      imageUrl: "/images/team.jpg",
    }
  } catch (error) {
    console.error("Error fetching about content from Contentful:", error)
    // Return fallback data if Contentful fetch fails
    return {
      title: "About Concrete Pros",
      description: [
        "With 20 years of experience in the concrete industry, we've built a reputation for quality workmanship and exceptional customer service in North Atlanta, Georgia. Our team of skilled professionals is dedicated to delivering superior concrete solutions for residential and commercial properties.",
        "We take pride in our attention to detail, commitment to using high-quality materials, and ensuring every project is completed on time and within budget. Our expertise spans from simple repairs to complex installations, making us your one-stop solution for all concrete needs.",
      ],
      imageUrl: "/images/team.jpg",
    }
  }
}

