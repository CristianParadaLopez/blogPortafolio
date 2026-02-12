import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown si se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cerrar mobile menu al navegar
  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative z-50 bg-black">

      {/* LOGO */}
      <Link 
        to="/" 
        onClick={closeAll}
        className="text-3xl md:text-4xl font-light"
      >
        BLOG GRUPO PERÚ
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-10">

        <Link to="/" onClick={closeAll} className="hover:text-[#DE3642] transition-colors">
          Inicio
        </Link>

        {/* DROPDOWN AUTORES */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-[#DE3642] flex items-center gap-1 transition-colors"
          >
            Integrantes
            <i
              className={`bx bx-chevron-down transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            ></i>
          </button>

          {dropdownOpen && (
            <div className="absolute top-10 left-0 bg-[#111] border border-[#222] shadow-xl rounded-xl p-4 flex flex-col gap-3 min-w-[160px]">

              {["cristian", "ana", "luis", "maria", "diego"].map((author) => (
                <Link
                  key={author}
                  to={`/autor/${author}`}
                  onClick={closeAll}
                  className="capitalize hover:text-[#DE3642] transition-colors"
                >
                  {author}
                </Link>
              ))}

            </div>
          )}
        </div>

        <Link to="/categorias/react" onClick={closeAll} className="hover:text-[#DE3642] transition-colors">
          Categorías
        </Link>

        <Link to="/about" onClick={closeAll} className="hover:text-[#DE3642] transition-colors">
          Acerca de
        </Link>

        <Link to="/contacto" onClick={closeAll} className="hover:text-[#DE3642] transition-colors">
          Contacto
        </Link>

      </nav>

      {/* MOBILE BUTTON */}
      <button 
        onClick={() => setMobileOpen(!mobileOpen)} 
        className="md:hidden text-3xl"
      >
        <i className={mobileOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
      </button>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed top-16 bottom-0 right-0 left-0 bg-black backdrop-blur-md p-10 md:hidden z-40">

          <nav className="flex flex-col gap-8 text-center text-xl">

            <Link to="/" onClick={closeAll}>Inicio</Link>
            <Link to="/categorias/react" onClick={closeAll}>Categorías</Link>
            <Link to="/autor/cristian" onClick={closeAll}>Autores</Link>
            <Link to="/about" onClick={closeAll}>Acerca de</Link>
            <Link to="/contacto" onClick={closeAll}>Contacto</Link>

          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
