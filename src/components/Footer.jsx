import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-[#1f1f1f] bg-black text-gray-400">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo + descripción */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            BLOG GRUPO PERU
          </h2>
          <p className="text-sm leading-relaxed">
            Plataforma digital profesional que combina blog temático 
            con portfolio interactivo desarrollado con Inteligencia Artificial.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-white text-lg font-medium mb-4">
            Navegación
          </h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-[#DE3642] transition-colors">Inicio</a></li>
            <li><a href="/categorias" className="hover:text-[#DE3642] transition-colors">Categorías</a></li>
            <li><a href="/contacto" className="hover:text-[#DE3642] transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-white text-lg font-medium mb-4">
            Síguenos
          </h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[#DE3642] transition-colors">
              <i className='bx bxl-github'></i>
            </a>
            <a href="#" className="hover:text-[#DE3642] transition-colors">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="#" className="hover:text-[#DE3642] transition-colors">
              <i className='bx bxl-instagram'></i>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#1f1f1f] text-center py-6 text-sm">
        © {new Date().getFullYear()} Grupo Perú — Todos los derechos reservados
      </div>

    </footer>
  )
}

export default Footer
