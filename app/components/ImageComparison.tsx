"use client"

import { useRef, useState } from "react"

interface Props {
  original: string | null
  optimized: string | null
}

export default function ImageComparison({ original, optimized }: Readonly<Props>) {

  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)

  if (!original || !optimized) return null

  const updatePosition = (clientX: number) => {

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const percent = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, percent)))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons !== 1) return
    updatePosition(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-semibold mb-4">
        Antes / Después
      </h2>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg select-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-label="Image comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
      >

        {/* Optimized Image */}
        <img
        alt="imagen_optimized"
          src={optimized}
          className="w-full block"
        />

        {/* Original Image */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            alt="imagen_original"
            src={original}
            className="w-full block"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-indigo-500 cursor-ew-resize"
          style={{ left: `${position}%` }}
        />

      </div>

    </div>

  )
}