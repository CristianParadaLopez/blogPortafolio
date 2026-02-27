import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import authors from '../data/author';
import Footer from "../components/Footer";

// Iconos
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

const Luis = () => {
  const luis = authors.find(author => author.slug === 'luis');

  useEffect(() => {
    if (luis) document.title = `Portafolio | ${luis.name}`;
  }, [luis]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!luis) return <div className="text-white text-center py-20">Autor no encontrado</div>;

  const proyectosWeb = [
    { img: "/authors/luis/proyectos/proyecto9.png", link: "#", titulo: "Virtual Fashion", desc: "Plataforma de e-commerce enfocada en tendencias digitales." },
    { img: "/authors/luis/proyectos/proyecto10.png", link: "#", titulo: "Sistema de Farmacia", desc: "Control de inventario y ventas con reportes en tiempo real." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_lv0sqre", "template_75cpuzc", { ...formData, to_email: luis.contact.email, to_name: luis.name }, "tsS_zRPGc6SdgkNoL")
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(() => {
        setLoading(false);
        alert("Error al enviar mensaje");
      });
  };
const techIcons = [
  { nombre: "PHP", icon: "bxl-php", color: "hover:text-[#777BB4]" },
  { nombre: "Python", icon: "bxl-python", color: "hover:text-[#3776AB]" },
  { nombre: "MySQL", icon: "bxl-postgresql", color: "hover:text-[#336791]" },
  { nombre: "Firebase", icon: "bxl-firebase", color: "hover:text-[#FFCA28]" },
  { nombre: "Cisco", icon: "bx-network-chart", color: "hover:text-[#049FD9]" },
  { nombre: "Laravel", icon: "bxl-tailwind-css", color: "hover:text-[#FF2D20]" }, // Usando boxicons
  { nombre: "Kotlin", icon: "bxl-android", color: "hover:text-[#7F52FF]" },
];
  return (
    <div className="bg-black text-gray-200 min-h-screen selection:bg-[#DE3642] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Profile Image & Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group contenedor-circular-animado"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#DE3642] to-[#ff6b75] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={luis.image}
                alt={luis.name}
                className=" relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-black shadow-2xl"
              />
              <a href="https://github.com/luisamaya1518-rgb">
              <div className="absolute bottom-5 right-5 bg-[#DE3642] p-3 rounded-full shadow-lg">
                <FaGithub className="text-white text-2xl" />
              </div>
               </a>
            </motion.div>

            {/* Right: Info */}
            <div className="flex-1 text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 rounded-full border border-[#DE3642]/40 text-[#DE3642] text-sm font-medium mb-4"
              >
                Disponible para proyectos
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{luis.name}</span>
              </motion.h1>
              <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
                {luis.about}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaGraduationCap className="text-[#DE3642]" />
                  <span>Desarrollo Web</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaMapMarkerAlt className="text-[#DE3642]" />
                  <span>El Salvador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS - Bento Grid Style */}
      <section className="py-2 bg-[#050505]">
        <div className=" max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico</h2>
            <div className="w-20 h-1 bg-[#DE3642] mx-auto"></div>
          </div>
          {/* --- PARTE 1: SCROLL INFINITO --- */}
            <div className="w-full overflow-hidden mb-20 mt-10 relative">
              {/* Máscara de desvanecimiento en los bordes */}
              <div className="absolute inset-0 z-10 pointer-events-none [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"></div>
              
              <div className="flex w-max flex-nowrap"> {/* w-max es clave aquí */}
                <div className="flex items-center animate-infinite-scroll py-4 whitespace-nowrap">
                  {/* Triplicamos el contenido para asegurar que no haya huecos blancos */}
                  {[...techIcons, ...techIcons, ...techIcons].map((tech, index) => (
                    <div key={index} className="flex items-center gap-4 mx-12 group transition-all">
                      <i className={`bx ${tech.icon} text-5xl text-gray-500/40 ${tech.color} transition-colors duration-300`}></i>
                      <span className="text-3xl font-black text-white/10 uppercase tracking-tighter group-hover:text-white/30 transition-colors">
                        {tech.nombre}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend & Soft", skills: luis.skills.web, icon: "bx-code-alt" },
              { title: "Redes & Infra", skills: luis.skills.redes, icon: "bx-network-chart" },
              { title: "Bases de Datos", skills: luis.skills.Database, icon: "bx-data" }
            ].map((item, idx) => (
              <motion.div  
                whileHover={{ y: -5 }}
                key={idx}
                className="card-animada p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#DE3642]/30 transition-all"
              >
                <i className={`bx ${item.icon} text-4xl text-[#DE3642] mb-6`}></i>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-xs hover:bg-[#DE3642]/10 hover:text-[#DE3642] transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Portafolio de Proyectos</h2>
            <div className="w-20 h-1 bg-[#DE3642] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectosWeb.map((proyecto, index) => (
                <div key={index} className="card-animada group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={proyecto.img} 
                      alt={proyecto.titulo} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay informativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h6 className="text-white font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{proyecto.titulo}</h6>
                    <a 
                      href={proyecto.link} 
                      className="inline-block w-max bg-[#DE3642] text-white px-4 py-2 rounded-lg text-sm font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
                    >
                      Ver Proyecto <i className='bx bx-right-arrow-alt'></i>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-black rounded-[2rem] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <FaEnvelope size={120} className="text-[#DE3642]" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 italic uppercase tracking-tighter">¿Hablamos?</h2>
              <p className="text-gray-400">¿Interesado en trabajar conmigo? Envíame un mensaje.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#DE3642] focus:ring-1 focus:ring-[#DE3642] outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#DE3642] focus:ring-1 focus:ring-[#DE3642] outline-none transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#DE3642] focus:ring-1 focus:ring-[#DE3642] outline-none transition-all"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#DE3642] py-5 rounded-2xl text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(222,54,66,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? "Procesando..." : (
                  <>Enviar Propuesta <i className='bx bx-paper-plane'></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Luis;