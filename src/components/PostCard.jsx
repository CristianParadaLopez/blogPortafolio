import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

const PostCard = ({ 
  title, 
  excerpt, 
  image, 
  author, 
  authorSlug, 
  category, 
  slug, 
  date 
}) => {
  return (
    <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#DE3642] transition-all duration-500 group">

      {/* Imagen */}
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">

        {/* Categoría */}
        <Link
          to={`/categorias/${category}`}
          className="text-xs uppercase tracking-widest text-[#DE3642] font-semibold hover:underline"
        >
          {category}
        </Link>

        {/* Título */}
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold text-white mt-3 group-hover:text-[#DE3642] transition-colors duration-300">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Footer card */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <Link
            to={`/autor/${authorSlug}`}
            className="hover:text-[#DE3642] transition-colors"
          >
            By {author}
          </Link>
          <span>{date}</span>
        </div>

      </div>
    </div>
  )
}

export default PostCard;
