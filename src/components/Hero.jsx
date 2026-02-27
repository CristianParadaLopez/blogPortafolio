const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] lg:min-h-[90vh] overflow-hidden px-6 text-center">
      
      {/* CONTENIDO CENTRADO */}
      <div data-aos="fade-up" className="max-w-4xl z-20 relative">
        <span className="text-[#DE3642] font-bold tracking-[0.5em] text-xs sm:text-sm uppercase mb-4 block">
          Proyecto Grupal de Computación
        </span>
        
        <h1 className='text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter my-6 leading-none'>
          BLOG<span className="text-[#DE3642]">.</span><br /> 
          <span className="text-gray-400 opacity-80">PORTAFOLIO</span>
        </h1>
        
        <p className='text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12'>
          Explora la intersección entre la creatividad humana y la Inteligencia Artificial. 
          Artículos, código y la visión de futuro de nuestro equipo de desarrollo.
        </p>
        
        <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
          <a href="#articulos" className="w-full sm:w-auto bg-[#DE3642] text-white py-4 px-10 rounded-full font-bold hover:shadow-[0_0_30px_rgba(222,54,66,0.6)] hover:scale-105 transition-all duration-300">
            Explorar Artículos
          </a>
          <a href="https://github.com/CristianParadaLopez/blogPortafolio" target="_blank" className='w-full sm:w-auto border border-white/20 py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2'>
            Ver Repositorio <i className='bx bxl-github text-xl'></i>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;