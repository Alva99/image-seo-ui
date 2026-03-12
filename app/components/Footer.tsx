export default function Footer() {

  return (

    <footer className="bg-black text-gray-400 mt-20">

      <div className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-10">

        <div>

          <h3 className="text-white font-bold mb-3">
            NubeBoost
          </h3>

          <p className="text-sm">
            Plataforma para optimizar imagenes y su SEO con IA.
          </p>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-3">
            Producto
          </h4>

          <ul className="text-sm space-y-2">

            <li>Funciones</li>
            <li>API</li>
            <li>Precios</li>

          </ul>

        </div>

        <div>

          <h4 className="text-white font-semibold mb-3">
            Empresa
          </h4>

          <ul className="text-sm space-y-2">

            <li>Nosotros</li>
            <li>Contacto</li>

          </ul>

        </div>

      </div>

      <div className="text-center text-xs pb-6">

        © 2026 NubeBoost. Todos los derechos reservados.

      </div>

    </footer>

  )
}