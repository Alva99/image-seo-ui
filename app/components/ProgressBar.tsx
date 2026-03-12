"use client"

interface Props {
  progress: number
}

export default function ProgressBar({ progress }: Readonly<Props>) {

  return (

    <div className="w-full bg-gray-200 rounded-full h-3 mt-6 overflow-hidden">

      <div
        className="bg-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />

    </div>

  )
}