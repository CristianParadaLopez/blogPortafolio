import { useParams } from "react-router-dom";
import posts from "../data/posts";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

const Category = () => {
  const { categoryName } = useParams();

  const filteredPosts = posts.filter(
    (post) =>
      post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 min-h-screen">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center capitalize">
          Categoría: {categoryName}
        </h2>

        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-400">
            No hay artículos en esta categoría.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}

      </section>

      <Footer />
    </>
  );
};

export default Category;
