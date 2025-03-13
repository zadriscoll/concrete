import type { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // Dynamically get the icon component from lucide-react
  const IconComponent = (Icons as Record<string, LucideIcon>)[icon] || Icons.Layout

  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <IconComponent className="h-6 w-6" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

