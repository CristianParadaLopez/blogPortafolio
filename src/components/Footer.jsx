import 'boxicons/css/boxicons.min.css';
import authors from '../data/author';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/5 bg-black/70 text-gray-400">

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Identidad del Proyecto */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold text-white mb-4 tracking-tighter">
            BLOG<span className="text-[#DE3642]">.</span>PORTAFOLIO
          </h2>
          <p className="text-sm leading-relaxed text-gray-500">
            Un espacio donde convergen la Inteligencia Artificial y el desarrollo web moderno.
            Creado por mentes creativas para el mundo digital.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">
            Mapa del Sitio
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="hover:text-[#DE3642] transition-colors flex items-center gap-2">
                <i className='bx bx-chevron-right'></i> Inicio
              </Link>
            </li>
            <li>
              <Link to="/categorias" className="hover:text-[#DE3642] transition-colors flex items-center gap-2">
                <i className='bx bx-chevron-right'></i> Categorías
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-[#DE3642] transition-colors flex items-center gap-2">
                <i className='bx bx-chevron-right'></i> Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* El Equipo */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">
            Nuestro Equipo
          </h3>
          <p className="text-sm mb-4">
            Desarrollado por <span className="text-white font-medium">{authors.length} Integrantes</span> apasionados por el código.
          </p>

          <div className="flex -space-x-3 overflow-hidden">
            {authors.map((member) => (
              <div
                key={member.slug}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-black bg-[#1a1a1a] overflow-hidden border border-white/10 group relative"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  title={member.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">
            Social & Code
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/CristianParadaLopez/blogPortafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl hover:bg-[#DE3642] hover:text-white transition-all duration-300"
              title="Ver código en GitHub"
            >
              <i className='bx bxl-github'></i>
            </a>
            <a
              href="https://www.instagram.com/uluterana/?hl=es"
              className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white transition-all duration-300"
              title="Síguenos en Instagram"
            >
              <i className='bx bxl-instagram'></i>
            </a>
          </div>
          <p className="text-[10px] mt-4 uppercase tracking-widest text-gray-600">
            Actualizado: Febrero 2026
          </p>
        </div>

      </div>

      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DE3642] animate-pulse"></span>
            Hecho con <i className='bx bxs-heart text-[#DE3642] mx-1'></i> por el Grupo de Computación
          </div>
          <div className="text-gray-600">
            React + Tailwind + Vercel
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;