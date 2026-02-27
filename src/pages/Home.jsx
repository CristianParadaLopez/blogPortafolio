import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import posts from "../data/posts";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Sección de artículos con fondo sólido para tapar el orbe al bajar */}
      <section 
        id="articulos" 
        className="relative z-20 border-t border-white/5 py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Últimos Artículos
            </h2>
            <div className="h-1 w-20 bg-[#DE3642] mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;