import { useParams } from "react-router-dom";
import posts from "../data/posts";
import Footer from "../components/Footer";
import Comments from "../components/Comments";


const Post = () => {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">Artículo no encontrado</h2>
      </section>
    );
  }

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-24 min-h-screen">

        {/* Imagen */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-2xl mb-10"
        />

        {/* Categoría */}
        <p className="text-sm text-[#DE3642] uppercase tracking-widest">
          {post.category}
        </p>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold my-6">
          {post.title}
        </h1>

        {/* Autor y fecha */}
        <div className="text-gray-400 mb-8">
          Por {post.author} — {post.date}
        </div>

        {/* Contenido */}
        <p className="text-gray-300 leading-relaxed text-lg mb-12">
          {post.content || post.excerpt}
        </p>

        {/* SISTEMA DE COMENTARIOS */}
        <p className="text-gray-300 leading-relaxed text-lg">
          {post.excerpt}
        </p>

       
        <Comments postSlug={post.slug} />

      </section>

      <Footer />
    </>
  );
};

export default Post;
