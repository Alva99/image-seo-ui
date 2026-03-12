"use client"

import ReactCompareImage from "react-compare-image"

interface Props {
  original: string | null
  optimized: string | null
}

export default function ImageComparison({ original, optimized }: Readonly<Props>) {

  if (!original || !optimized) return null

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-semibold mb-4">
        Before / After
      </h2>

      <ReactCompareImage
        leftImage={original}
        rightImage={optimized}
        sliderLineColor="#6366F1"
      />

    </div>

  )
}