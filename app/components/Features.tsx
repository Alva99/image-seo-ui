export default function Features() {

  const features = [

    {
      title: "SEO con IA",
      desc: "Crea titulo, texto ALT y descripcion de forma automatica."
    },

    {
      title: "Compresion inteligente",
      desc: "Reduce el peso de la imagen sin perder calidad."
    },

    {
      title: "Entrega rapida por CDN",
      desc: "Publica imagenes optimizadas listas para cargar veloz."
    }

  ]

  return (

    <section id="features" className="max-w-6xl mx-auto py-20">

      <h2 className="text-3xl font-bold text-white text-center mb-12">

        Por que elegir NubeBoost?

      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((f, i) => (

          <div key={i + 1} className="bg-white p-6 rounded-xl shadow">

            <h3 className="font-semibold text-lg mb-2">
              {f.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {f.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}