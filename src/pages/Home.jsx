import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import posts from "../data/posts";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
          Últimos Artículos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
