"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { UploadCloud, ImageIcon, Send } from "lucide-react"

interface Props {
  onSubmit: (file: File, describe?: string) => void
  loading?: boolean
}

export default function UploadBox({ onSubmit, loading = false }: Readonly<Props>) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [describe, setDescribe] = useState("")

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0])
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }
  })

  const handleSubmit = () => {
    if (!selectedFile || loading) return
    const normalizedDescribe = describe.trim()
    onSubmit(selectedFile, normalizedDescribe || undefined)
  }

  return (

    <div className="space-y-4">

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition
      ${isDragActive
        ? "border-indigo-500 bg-indigo-50"
        : "border-gray-300 bg-white hover:border-indigo-400"
      }`}

      >

        <input {...getInputProps()} />

        <UploadCloud className="mx-auto text-indigo-500 mb-4" size={40} />

        <h3 className="text-lg font-semibold">
          Sube tu imagen
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Arrastra y suelta o haz clic para elegir
        </p>

        {selectedFile && (
          <p className="text-xs text-indigo-700 mt-2">
            Archivo seleccionado: {selectedFile.name}
          </p>
        )}

        <div className="flex justify-center gap-3 mt-6 text-xs text-gray-400">

          <span className="flex items-center gap-1">
            <ImageIcon size={14} /> JPG
          </span>

          <span>PNG</span>

          <span>WEBP</span>

        </div>

      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <label htmlFor="describe" className="text-sm font-medium text-gray-700 block mb-2">
          Descripcion del producto (opcional)
        </label>

        <textarea
          id="describe"
          value={describe}
          onChange={(event) => setDescribe(event.target.value)}
          placeholder="Ej: Zapatos de color azul para deporte"
          rows={3}
          className="w-full border rounded p-2 text-sm"
        />

        <p className="text-xs text-gray-500 mt-2">
          Selecciona la imagen y luego presiona el boton para enviar. La descripcion es opcional.
        </p>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!selectedFile || loading}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        {loading ? "Procesando..." : "Enviar analisis"}
      </button>

    </div>

  )
}