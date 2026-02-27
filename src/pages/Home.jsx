import { Link } from "react-router-dom"; // Importante para el enlace
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import posts from "../data/posts";

const Home = () => {
  // Solo tomamos los primeros 6 artículos
  const latestPosts = posts.slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Sección de artículos */}
      <section 
        id="articulos" 
        className="relative z-20 border-t border-white/5 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase tracking-tighter">
              Últimos <span className="text-[#DE3642]">Artículos</span>
            </h2>
            <div className="h-1 w-20 bg-[#DE3642] mt-4 rounded-full"></div>
          </div>

          {/* Grid limitado a 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {latestPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>

          {/* Botón Explorar Más - UX/UI Mejorado */}
          <div className="mt-20 flex justify-center">
            <Link 
              to="/categorias"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-white/10 rounded-full text-white font-bold overflow-hidden transition-all hover:border-[#DE3642]/50"
            >
              {/* Efecto de brillo al pasar el mouse */}
              <div className="absolute inset-0 bg-[#DE3642] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
              
              <span className="relative uppercase tracking-widest text-xs">
                Explorar más temas
              </span>
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;