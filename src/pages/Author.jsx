import { useParams } from "react-router-dom";
import posts from "../data/posts";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

const Author = () => {
  const { authorSlug } = useParams();

  const authorPosts = posts.filter(
    (post) => post.authorSlug === authorSlug
  );

  if (authorPosts.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">Autor no encontrado</h2>
      </section>
    );
  }

  const authorName = authorPosts[0].author;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 min-h-screen">

        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {authorName}
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Desarrollador apasionado por la tecnología, el diseño moderno y la Inteligencia Artificial.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-10">
          Artículos publicados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {authorPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Author;
