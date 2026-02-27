import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

const CategoryDetail = () => {
  const { categorySlug } = useParams();

  // Filtrar posts por el slug de la categoría
  const filteredPosts = posts.filter((post) => post.categorySlug === categorySlug);
  
  // Obtener el nombre bonito de la categoría (usando el primer post encontrado)
  const categoryName = filteredPosts.length > 0 ? filteredPosts[0].category : categorySlug;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
        <div className="mb-12">
          <Link to="/categorias" className="text-[#DE3642] text-sm font-bold uppercase tracking-widest hover:underline">
            ← Volver a categorías
          </Link>
          <h1 className="text-5xl font-black mt-4 uppercase">
            Artículos de <span className="text-[#DE3642]">{categoryName}</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Mostrando {filteredPosts.length} artículos encontrados
          </p>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-500">No hay artículos en esta categoría todavía.</h2>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CategoryDetail;