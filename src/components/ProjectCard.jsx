// components/ProjectCard.jsx
export const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
      <div className="relative h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <button className="bg-[#DE3642] text-white px-6 py-2 rounded-full font-bold text-sm">Más Info</button>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-lg text-white">{project.title}</h4>
        <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">Proyecto Destacado</p>
      </div>
    </div>
  );
};