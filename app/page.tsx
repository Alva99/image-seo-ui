"use client"

import { useState } from "react"
import Image from "next/image"

import { SeoData } from "@/types/seo"
import { HistoryItem } from "@/types/history"

import { uploadImage } from "./services/api"

import UploadBox from "./components/UploadBox"
import ProgressBar from "./components/ProgressBar"
import ImagePreview from "./components/ImagePreview"
import SeoResult from "./components/SeoResult"
import SkeletonResult from "./components/SkeletonResult"
import AIAnalyzing from "./components/AIAnalyzing"
import ImageComparison from "./components/ImageComparison"
import History from "./components/History"

export default function Page() {

  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<SeoData | null>(null)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [optimizedUrl, setOptimizedUrl] = useState<string | null>(null)

  const [history, setHistory] = useState<HistoryItem[]>([])

  const handleFile = async (file: File) => {

    const localPreview = URL.createObjectURL(file)

    setPreview(localPreview)
    setLoading(true)
    setProgress(0)

    try {

      const data = await uploadImage(
        file,
        (progressEvent) => {

          const percent = Math.round(
            (progressEvent.loaded * 100) /
            progressEvent.total
          )

          setProgress(percent)

        }
      )

      setResult(data)
      setOptimizedUrl(data.url)

      // guardar en historial
      setHistory(prev => [
        { preview: localPreview, optimized: data.url },
        ...prev
      ].slice(0, 12))

    } catch (error) {

      console.error("Upload error:", error)

    }

    setLoading(false)
  }

  return (

    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-10">

      {/* HEADER */}

      <div className="flex items-center gap-4 mb-10">

        <Image
          src="/logo_app.png"
          alt="NubeBoost"
          width={80}
          height={80}
        />

        <div>

          <h1 className="text-3xl font-bold">
            NubeBoost Image SEO
          </h1>

          <p className="text-gray-500 text-sm">
            AI powered image optimization
          </p>

        </div>

      </div>

      {/* UPLOAD */}

      <UploadBox onFile={handleFile} />

      {loading && <ProgressBar progress={progress} />}

      {/* MAIN GRID */}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">

        {/* LEFT COLUMN */}

        <div className="space-y-6">

          <ImagePreview src={preview} />

          <ImageComparison
            original={preview}
            optimized={optimizedUrl}
          />

        </div>

        {/* RIGHT COLUMN */}

        <div className="space-y-6">

          {loading && <AIAnalyzing />}

          {loading && <SkeletonResult />}

          {!loading && result && (
            <SeoResult data={result} />
          )}

        </div>

      </div>

      {/* HISTORY */}

      <div className="mt-16">

        <History items={history} />

      </div>

    </main>

  )
}