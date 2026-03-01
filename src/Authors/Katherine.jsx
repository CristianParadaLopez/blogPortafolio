import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import authors from '../data/author';
import Footer from "../components/Footer";

// Iconos
import { FaGithub, FaMapMarkerAlt, FaGraduationCap, FaServer, FaNetworkWired, FaLinux } from "react-icons/fa";

const Katherine = () => {
  const katherine = authors.find(author => author.slug === 'katherine');

  useEffect(() => {
    if (katherine) document.title = `Portafolio | ${katherine.name}`;
  }, [katherine]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!katherine) return <div className="text-white text-center py-20">Autor no encontrado</div>;

  const proyectosWeb = [
    { img: "/authors/luis/proyectos/proyecto9.png", link: "#", titulo: "SportHub", desc: "Plataforma de inventario de articulos de deportes" },
    { img: "/authors/luis/proyectos/proyecto10.png", link: "#", titulo: "App Móvil", desc: "App de habitos saludables" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_lv0sqre", "template_75cpuzc", { ...formData, to_email: katherine.contact.email, to_name: katherine.name }, "tsS_zRPGc6SdgkNoL")
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

  // Stack
  const infraStack = [
    { nombre: "Proxmox", icon: "bx-server", color: "hover:text-[#E57024]" },
    { nombre: "Linux/Ubuntu", icon: "bxl-tux", color: "hover:text-[#FCC624]" },
    { nombre: "Redes", icon: "bx-git-branch", color: "hover:text-[#DE3642]" },
    { nombre: "Packet Tracer", icon: "bx-broadcast", color: "hover:text-[#00B4E5]" },
    { nombre: "React", icon: "bxl-react", color: "hover:text-[#61DAFB]" },
    { nombre: "Laravel", icon: "bxl-laravel", color: "hover:text-[#FF2D20]" },
    { nombre: "PHP", icon: "bxl-php", color: "hover:text-[#777BB4]" },
    { nombre: "MySQL", icon: "bxl-mysql", color: "hover:text-[#4479A1]" },
  ];

  return (
    <div className="bg-black text-gray-200 min-h-screen selection:bg-[#DE3642] selection:text-white">

      {/* HERO */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Perfil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group contenedor-circular-animado"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#DE3642] to-orange-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={katherine.image}
                alt={katherine.name}
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-black shadow-2xl"
              />
              <a href={katherine.contact.github} target="_blank" rel="noreferrer">
                <div className="absolute bottom-5 right-5 bg-[#DE3642] p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <i className="bx bxl-github text-white text-2xl"></i>
                </div>
              </a>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 rounded-full border border-[#DE3642]/40 text-[#DE3642] text-sm font-medium mb-4 uppercase tracking-widest"
              >
                Backend & Network Infrastructure
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{katherine.name}</span>
              </motion.h1>
              <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
                {katherine.about} Enfocada en la administración de servidores, virtualización con Proxmox y el despliegue de infraestructuras de red seguras.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaGraduationCap className="text-[#DE3642]" />
                  <span>C. de la Computación</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaMapMarkerAlt className="text-[#DE3642]" />
                  <span>El Salvador</span>
                </div>
                
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="/CV/CV_Katherine.pdf" download className='group flex items-center gap-3 bg-[#DE3642] px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(222,54,66,0.3)]'>
                  <span className="font-black uppercase tracking-widest text-sm">Descargar CV</span>
                </a>
                </div>
                <br />

              <div className="flex justify-center lg:justify-start">
                <div className="flex gap-4">
                  <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest text-white italic">
                    Infraestructura & Código
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-2 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 italic uppercase tracking-tighter">Herramientas & Tecnologías</h2>
            <div className="w-20 h-1 bg-[#DE3642] mx-auto"></div>
          </div>

          <div className="w-full overflow-hidden mb-20 mt-10 relative">
            <div className="absolute inset-0 z-10 pointer-events-none [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"></div>

            <div className="flex w-max flex-nowrap">
              <div className="flex items-center animate-infinite-scroll py-4 whitespace-nowrap">
                {[...infraStack, ...infraStack].map((tech, index) => (
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
              { title: "Servidores & OS", skills: ["Proxmox", "Linux Ubuntu", "Debian"], icon: "bx-server" },
              { title: "Networking", skills: ["Packet Tracer", "VLANs", "Subnetting"], icon: "bx-network-chart" },
              { title: "Backend Dev", skills: ["Laravel", "PHP", "MySQL", "Firebase"], icon: "bx-terminal" }
            ].map((item, idx) => (
              <motion.div whileHover={{ y: -5 }} key={idx} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#DE3642]/30 transition-all">
                <i className={`bx ${item.icon} text-4xl text-[#DE3642] mb-6`}></i>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-[10px] uppercase font-bold tracking-wider">
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
            <h2 className="text-3xl font-bold text-white mb-4 italic uppercase tracking-tighter">Proyectos Realizados</h2>
            <div className="w-20 h-1 bg-[#DE3642] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosWeb.map((proyecto, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-white/5 h-[400px]">
                <img src={proyecto.img} alt={proyecto.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                  <h6 className="text-white font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{proyecto.titulo}</h6>
                  <p className="text-gray-300 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{proyecto.desc}</p>
                  <a href={proyecto.link} className="inline-block w-max bg-[#DE3642] text-white px-8 py-3 rounded-full text-sm font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    Ver Detalles <i className='bx bx-right-arrow-alt ml-2'></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-black rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <i className='bx bx-network-chart text-[180px] text-[#DE3642]'></i>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 italic uppercase tracking-tighter">Contacto</h2>
              <p className="text-gray-400">¿Buscas optimizar tu infraestructura o desarrollar un backend sólido? Escríbeme.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#DE3642] outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Tu correo"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#DE3642] outline-none transition-all"
                />
              </div>
              <textarea
                placeholder="Detalla tu proyecto o consulta técnica..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="4"
                className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#DE3642] outline-none transition-all resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#DE3642] py-5 rounded-2xl text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(222,54,66,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? "Enviando..." : <>Enviar Mensaje <i className='bx bx-paper-plane'></i></>}
              </button>
              {success && <p className="text-green-400 text-center font-bold">✅ ¡Mensaje enviado con éxito!</p>}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Katherine;