"use client"

import { useDropzone } from "react-dropzone"
import { UploadCloud, ImageIcon } from "lucide-react"

interface Props {
  onFile: (file: File) => void
}

export default function UploadBox({ onFile }: Readonly<Props>) {

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFile(acceptedFiles[0])
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }
  })

  return (

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
        Upload your image
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        Drag & drop or click to browse
      </p>

      <div className="flex justify-center gap-3 mt-6 text-xs text-gray-400">

        <span className="flex items-center gap-1">
          <ImageIcon size={14} /> JPG
        </span>

        <span>PNG</span>

        <span>WEBP</span>

      </div>

    </div>

  )
}