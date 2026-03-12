"use client"

import { SeoData } from "@/types/seo"
import { Copy, Download } from "lucide-react"
import CountUp from "react-countup"

interface Props {
    data: SeoData | null
}

export default function SeoResult({ data }: Readonly<Props>) {

    if (!data) return null

    const { seo, optimization } = data

    const copy = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    return (

        <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="font-semibold mb-4">
                Resultado SEO
            </h2>

            {/* TITLE */}

            <div className="mb-4">

                <label htmlFor="title" className="text-sm font-medium">
                    Title
                </label>

                <div className="flex gap-2">

                    <input
                        id="title"
                        value={seo.title}
                        readOnly
                        className="w-full border rounded p-2"
                    />

                    <button
                        onClick={() => copy(seo.title)}
                        className="bg-gray-100 px-3 rounded hover:bg-gray-200"
                    >
                        <Copy size={16} />
                    </button>

                </div>

            </div>

            {/* DESCRIPTION */}

            <div className="mb-4">

                <label htmlFor="description" className="text-sm font-medium">
                    Description
                </label>

                <div className="flex gap-2">

                    <textarea
                        id="description"
                        value={seo.description}
                        readOnly
                        rows={3}
                        className="w-full border rounded p-2"
                    />

                    <button
                        onClick={() => copy(seo.description)}
                        className="bg-gray-100 px-3 rounded hover:bg-gray-200"
                    >
                        <Copy size={16} />
                    </button>

                </div>

            </div>

            {/* ALT */}

            <div className="mb-4">

                <label htmlFor="altText" className="text-sm font-medium">
                    ALT Text
                </label>

                <div className="flex gap-2">

                    <input
                        id="altText"
                        value={seo.alt_text}
                        readOnly
                        className="w-full border rounded p-2"
                    />

                    <button
                        onClick={() => copy(seo.alt_text)}
                        className="bg-gray-100 px-3 rounded hover:bg-gray-200"
                    >
                        <Copy size={16} />
                    </button>

                </div>

            </div>

            {/* OPTIMIZATION */}

            <div className="border-t pt-4 mt-4 text-sm space-y-1">

                <p>
                    Original: {optimization.original.bytes} bytes
                </p>

                <p>
                    Optimizado: {optimization.optimized.bytes} bytes
                </p>

                <p className="text-green-600 font-semibold">

                    Ahorro:

                    <CountUp
                        end={optimization.savings.percent}
                        duration={1.5}
                        decimals={2}
                        suffix="%"
                    />

                </p>

                <a
                    href={data.url}
                    download
                    target="_blank"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg mt-6 hover:bg-indigo-700 transition"
                >

                    <Download size={16} />

                    Download optimized image

                </a>
            </div>


        </div>

    )
}