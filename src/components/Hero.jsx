import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen overflow-hidden">

      {/* MODELO 3D */}
      <div className="
        w-full 
        h-[350px] 
        sm:h-[400px] 
        lg:h-auto 
        lg:w-1/2 
        lg:absolute 
        lg:right-0 
        lg:top-0
      ">
        <Spline scene="https://prod.spline.design/I32lPxOxVLUBBrqn/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* TEXTO */}
      <div
        data-aos="fade-right"
        className="
          max-w-xl 
          ml-[5%] 
          z-10 
          mt-10 
          lg:mt-0
        "
      >
        {/* Caja */}

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          BLOG<br /> Portafolio
        </h1>

        <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[30rem]'>
          Bienvenidos a nuestro blog/portafolio, un espacio donde compartimos conocimientos, experiencias y proyectos relacionados con el desarrollo web y la tecnología. Aquí encontrarás artículos, tutoriales y recursos para inspirarte y ayudarte en tu camino como desarrollador.
        </p>

        <div className='flex gap-4 mt-12'>
          <a href="#" className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#DE3642]'>
            Repositorio del blog <i className='bx bxl-github '></i>
          </a>

          <a href="#" className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full bg-gray-300 text-black hover:bg-[#1a1a1a] hover:text-[#DE3642]'>
            Get Started
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
