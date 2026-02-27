import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

const PostCard = ({ title, excerpt, image, author, authorSlug, category, slug, date }) => {
  return (
    <article className="group bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-[#DE3642]/50 transition-all duration-500 flex flex-col shadow-xl">
      <div className="relative h-60 overflow-hidden">
    <Link 
      to={`/categorias/${category}`} 
      className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-[#DE3642] text-[10px] font-bold px-3 py-1 rounded-full border border-[#DE3642]/30 hover:bg-[#DE3642] hover:text-white transition-colors"
    >
      {category}
    </Link>
    <Link to={`/blog/${slug}`}>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    </Link>
  </div>

      <div className="p-8 flex flex-col flex-grow">
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#DE3642] transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mt-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-auto pt-6 flex justify-between items-center border-t border-white/5 text-[11px] uppercase tracking-widest">
          <Link to={`/autor/${authorSlug}`} className="text-gray-400 hover:text-white transition-colors">
            {author}
          </Link>
          <span className="text-gray-600">{date}</span>
        </div>
      </div>
    </article>
  );
};
export default PostCard;
