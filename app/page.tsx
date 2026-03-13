"use client"

import { useState } from "react"

import { SeoData } from "@/types/seo"

import { uploadImage } from "./services/api"

import UploadBox from "./components/UploadBox"
import ProgressBar from "./components/ProgressBar"
import ImagePreview from "./components/ImagePreview"
import SeoResult from "./components/SeoResult"
import SkeletonResult from "./components/SkeletonResult"
import AIAnalyzing from "./components/AIAnalyzing"

import Header from "./components/Header"
import FlowDiagram from "./components/FlowDiagram"
import ResultsShowcase from "./components/ResultsShowcase"
import Footer from "./components/Footer"

import Mission from "./components/Mission"
import Vision from "./components/Vision"
import Objective from "./components/Objective"

export default function Page() {

  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<SeoData | null>(null)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const handleSubmit = async (file: File, describe?: string) => {

    const localPreview = URL.createObjectURL(file)

    setPreview(localPreview)
    setResult(null)
    setLoading(true)
    setProgress(0)
    setUploadError(null)

    try {

      const data = await uploadImage(
        file,
        describe,
        (progressEvent) => {
          if (!progressEvent.total) {
            return
          }

          const percent = Math.round(
            (progressEvent.loaded * 100) /
            progressEvent.total
          )

          setProgress(percent)

        }
      )

      setResult(data)

    } catch (error: unknown) {

      const message = error instanceof Error
        ? error.message
        : "No fue posible subir la imagen. Intenta nuevamente."

      setUploadError(message)
      console.error("Upload error:", error)

    }

    setLoading(false)

  }

  return (

    <>
      <Header />

      {/* HERO + DEMO */}

      <main className="bg-gradient-to-b from-white to-gray-100 pt-28">
        <section className="max-w-6xl mx-auto px-6 py-20">

          <div className="text-center mb-14">

            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              Impulsado por IA
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">

              SEO de imagenes con IA

            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">

              Genera titulos, descripciones y versiones optimizadas de tus
              imagenes en segundos.

            </p>

          </div>

          {/* Upload tool */}

          <div id="upload">
            <UploadBox onSubmit={handleSubmit} loading={loading} />
          </div>

          {uploadError && (
            <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              {uploadError}
            </p>
          )}

          {loading && <ProgressBar progress={progress} />}

          {/* DEMO RESULT */}

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-12">

            {/* IMAGE PREVIEW */}

            <div className="space-y-6">

              <ImagePreview src={preview} />

            </div>

            {/* SEO RESULT */}

            <div className="space-y-6">

              {loading && <AIAnalyzing />}

              {loading && <SkeletonResult />}

              {!loading && result && (
                <SeoResult data={result} />
              )}

            </div>

          </div>

        </section>

      </main>

      {/* PIPELINE */}

      <FlowDiagram />


      {/* RESULTS SHOWCASE */}
      <ResultsShowcase />

      {/* FEATURES */}

      {/* <Features /> */}

      <Objective />

      <Mission />

      <Vision />

      {/* FOOTER */}

      <Footer />

    </>

  )
}