"use client"

import { motion } from "framer-motion"

export default function ResultsShowcase() {

    return (

        <section
            id="demo"
            className="py-24 bg-gray-50"
        >

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-16">

                    Resultados reales de optimizacion

                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* IMAGE COMPARISON MOCK */}

                    <div className="bg-white rounded-xl shadow p-4">

                        <img
                            alt="demostracion"
                            src="/demo-before-after.png"
                            className="rounded-lg"
                        />

                    </div>

                    {/* BENCHMARK */}

                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">

                            Sitios mas rapidos con imagenes optimizadas

                        </h3>

                        <p className="text-gray-600">

                            NubeBoost reduce el peso de tus imagenes y crea
                            metadatos SEO de forma automatica.

                        </p>

                        {/* METRICS */}

                        <div className="space-y-4">

                            <Metric
                                label="Tamano original"
                                value="120 KB"
                            />

                            <Metric
                                label="Tamano optimizado"
                                value="38 KB"
                            />

                            <Metric
                                label="Savings"
                                value="68%"
                                highlight
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

function Metric({ label, value, highlight }: any) {

    return (

        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-between bg-white rounded-lg p-4 shadow"
        >

            <span className="text-gray-600">

                {label}

            </span>

            <span
                className={`font-semibold ${highlight ? "text-indigo-600" : ""}`}
            >

                {value}

            </span>

        </motion.div>

    )
}