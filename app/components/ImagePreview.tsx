interface Props {
  src: string | null
}

export default function ImagePreview({ src }: Readonly<Props>) {

  if (!src) return null

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-semibold mb-4">
        Vista previa
      </h2>

      <img
        src={src}
        className="rounded-lg border w-full object-contain"
        alt="preview"
      />

    </div>

  )
}