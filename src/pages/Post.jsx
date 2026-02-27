import { useParams, Link, useNavigate } from "react-router-dom";
import posts from "../data/posts";
import authors from "../data/author"; 
import Footer from "../components/Footer";
import Comments from "../components/Comments";

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);
  
  const authorData = authors.find((a) => a.slug === post?.authorSlug);

  if (!post) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-gray-400 mb-8">Lo sentimos, el artículo que buscas no existe o fue movido.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="px-8 py-3 bg-[#DE3642] text-white rounded-full font-bold hover:bg-red-700 transition-colors"
        >
          Volver al Blog
        </button>
      </section>
    );
  }

  return (
    <>
      <article className="min-h-screen bg-[#050505] text-white">
        <header className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-5xl mx-auto">
            <Link 
              to={`/categorias/${post.categorySlug}`}
              className="inline-block bg-[#DE3642] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6"
            >
              {post.category}
            </Link>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-300">
              <Link to={`/autor/${post.authorSlug}`} className="hover:text-[#DE3642] transition-colors flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border border-white/20">
                   {authorData?.image ? (
                     <img 
                       src={authorData.image} 
                       alt={authorData.name} 
                       className="w-full h-full object-cover"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center bg-[#DE3642] text-white font-bold">
                       {post.author.charAt(0)}
                     </div>
                   )}
                </span>
                <span className="font-medium">{post.author}</span>
              </Link>
              <span className="text-gray-600">•</span>
              <time className="text-sm italic">{post.date}</time>
            </div>
          </div>
        </header>

        <section className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose prose-invert prose-red max-w-none">
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 border-l-4 border-[#DE3642] pl-6 italic">
              {post.excerpt}
            </p>

            <div className="text-gray-300 leading-[1.8] text-lg space-y-8">
              {(post.content || post.excerpt).split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <hr className="my-16 border-white/10" />
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 mb-20">
            <img 
              src={authorData?.image} 
              alt={post.author} 
              className="w-20 h-20 rounded-full object-cover border-2 border-[#DE3642]"
            />
            <div className="text-center md:text-left">
              <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Escrito por</h4>
              <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{authorData?.about}</p>
              <Link to={`/autor/${post.authorSlug}`} className="text-[#DE3642] text-sm font-bold hover:underline italic">
                Ver perfil completo y proyectos →
              </Link>
            </div>
          </div>

          <Comments postSlug={post.slug} />
        </section>
      </article>

      <Footer />
    </>
  );
};

export default Post;