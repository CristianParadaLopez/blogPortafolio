import { Link } from "react-router-dom";
import posts from "../data/posts";
import Footer from "../components/Footer";

const Category = () => {
  const categories = Array.from(new Set(posts.map(p => p.categorySlug)))
    .map(slug => {
      const post = posts.find(p => p.categorySlug === slug);
      return { name: post.category, slug: post.categorySlug };
    });

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-black mb-4">Explorar <span className="text-[#DE3642]">Temas</span></h1>
          <p className="text-gray-400">Selecciona una categoría para filtrar los artículos</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/categorias/${cat.slug}`}
              className="group relative h-64 rounded-3xl overflow-hidden border border-white/10 hover:border-[#DE3642]/50 transition-all bg-[#0f0f0f]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <span className="text-xs tracking-[0.3em] text-[#DE3642] font-bold uppercase mb-2">Topic</span>
                <h2 className="text-3xl font-bold text-white uppercase group-hover:tracking-wider transition-all duration-300">{cat.name}</h2>
                <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Explorar contenido →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;