"use client"

import { Sparkles } from "lucide-react"

export default function AIAnalyzing() {

  return (

    <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl flex items-center gap-3">

      <Sparkles className="text-indigo-600 animate-pulse" size={20} />

      <div>

        <p className="font-medium text-indigo-700">
          AI analyzing image
        </p>

        <p className="text-sm text-indigo-500">
          generating SEO metadata & optimizing compression
        </p>

      </div>

    </div>

  )
}