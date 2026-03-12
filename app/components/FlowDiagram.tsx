"use client"

import { motion } from "framer-motion"
import { Upload, Brain, FileText, Zap, Globe } from "lucide-react"

const steps = [

  {
    title: "Subir",
    desc: "Cargas tu imagen",
    icon: Upload
  },

  {
    title: "Vision IA",
    desc: "Detecta elementos",
    icon: Brain
  },

  {
    title: "SEO automatico",
    desc: "Genera metadatos",
    icon: FileText
  },

  {
    title: "Optimizador",
    desc: "Comprime + WebP",
    icon: Zap
  },

  {
    title: "Lista para CDN",
    desc: "Entrega rapida",
    icon: Globe
  }

]

export default function FlowDiagram() {

  return (

    <section
      id="how"
      className="py-28 bg-white"
    >

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">

          Como funciona NubeBoost

        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

          {/* animated pipeline line */}

          <motion.div
            className="absolute hidden md:block top-10 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          />

          {steps.map((step, index) => {

            const Icon = step.icon

            return (

              <motion.div
                key={index + 1}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white border rounded-xl shadow p-6 w-56 text-center"
              >

                <div className="flex justify-center mb-4">

                  <div className="bg-indigo-100 p-3 rounded-lg">

                    <Icon
                      size={24}
                      className="text-indigo-600"
                    />

                  </div>

                </div>

                <h3 className="font-semibold">

                  {step.title}

                </h3>

                <p className="text-sm text-gray-500">

                  {step.desc}

                </p>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>

  )
}