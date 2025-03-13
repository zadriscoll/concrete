"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const containerWidth = rect.width

    const newPosition = (x / containerWidth) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const containerWidth = rect.width

    const newPosition = (x / containerWidth) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full overflow-hidden rounded-lg cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full width) */}
      <div className="absolute inset-0 h-full w-full">
        <Image src={afterImage || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" />
      </div>

      {/* Before image (clipped) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeAlt} fill className="object-cover" />
      </div>

      {/* Slider control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5L3 10L8 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 5L21 10L16 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 text-xs text-white rounded">Before</div>
      <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 text-xs text-white rounded">After</div>
    </div>
  )
}

