"use client"

import { HistoryItem } from "@/types/history"

interface Props {
  items: HistoryItem[]
}

export default function History({ items }: Readonly<Props>) {

  if (items.length === 0) return null

  return (

    <section className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-6">
        Imagenes optimizadas recientes
      </h2>

      <div className="grid grid-cols-6 gap-4">

        {items.map((item, i) => (

          <div
            key={i + 2}
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >

            <img
              alt="Vista previa optimizada"
              src={item.optimized}
              className="w-full h-24 object-cover"
            />

          </div>

        ))}

      </div>

    </section>

  )
}