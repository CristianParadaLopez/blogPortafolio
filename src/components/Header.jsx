import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Control del fondo al hacer scroll (Efecto Glassmorphism)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar dropdown de integrantes al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
  };

  const integrantes = ["tania", "luis", "katherine", "eunice", "cristian"];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
      ? "bg-black/90 backdrop-blur-lg border-b border-[#DE3642]/30 py-2" 
      : "bg-black py-4 border-b-4 border-[#DE3642]"
    }`}>
      <div className="max-w-screen-xl px-5 flex flex-wrap items-center justify-between mx-auto lg:px-20">
        
        {/* LOGO */}
        <Link 
          to="/" 
          onClick={closeAll}
          className="text-xl md:text-2xl font-bold tracking-tighter hover:text-[#DE3642] transition-colors"
        >
          BLOG<span className="font-light text-gray-400">/PORTAFOLIO</span>
        </Link>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 justify-center text-white md:hidden hover:bg-white/10 rounded-lg transition-colors"
        >
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-3xl`}></i>
        </button>

        {/* NAVEGACIÓN PRINCIPAL */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-500`}>
          <ul className="flex flex-col p-6 md:p-0 mt-4 md:flex-row md:items-center md:space-x-8 md:mt-0 bg-[#111] md:bg-transparent rounded-2xl border border-white/10 md:border-none shadow-2xl md:shadow-none">
            
            {/* INICIO */}
            <li className='my-2 md:my-0'>
              <Link to="/" onClick={closeAll} className="nav-link-custom">
                Inicio
                <span className="nav-underline"></span>
              </Link>
            </li>

            {/* DROPDOWN INTEGRANTES (Desktop & Mobile Adaptable) */}
            <li className="relative my-2 md:my-0" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="nav-link-custom flex items-center gap-1 w-full"
              >
                Integrantes
                <i className={`bx bx-chevron-down transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {dropdownOpen && (
                <div className="md:absolute top-full left-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl p-2 flex flex-col min-w-[160px] z-[60] shadow-xl">
                  {integrantes.map((author) => (
                    <Link
                      key={author}
                      to={`/autor/${author}`}
                      onClick={closeAll}
                      className="px-4 py-2 capitalize hover:bg-[#DE3642] hover:text-white rounded-lg transition-all text-sm"
                    >
                      {author}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* CATEGORÍAS */}
            <li className='my-2 md:my-0'>
              <Link to="/categorias" onClick={closeAll} className="nav-link-custom">
                Categorías
                <span className="nav-underline"></span>
              </Link>
            </li>

            {/* CONTACTO */}
            <li className='my-2 md:my-0'>
              <Link to="/contacto" onClick={closeAll} className="nav-link-custom">
                Contacto
                <span className="nav-underline"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ESTILOS CSS INYECTADOS PARA EL SUBRAYADO (Para no ensuciar el JSX) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link-custom {
          position: relative;
          display: block;
          padding: 0.5rem 0;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s;
        }
        .nav-link-custom:hover {
          color: white;
        }
        .nav-underline {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-underline {
            display: block;
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #DE3642;
            transition: all 0.3s;
            box-shadow: 0 0 8px #DE3642;
          }
          .nav-link-custom:hover .nav-underline {
            width: 100%;
          }
        }
      `}} />
    </nav>
  );
};

export default Header;