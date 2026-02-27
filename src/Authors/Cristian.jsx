import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import authors from '../data/author';
import Footer from "../components/Footer";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaPhp,
  FaJava,
  FaReact,
  FaLaravel
} from "react-icons/fa";

// Iconos
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaLinkedin, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { SiDart, SiKotlin, SiFirebase, SiFigma, SiDjango, SiFlutter, SiLaravel, SiReact, SiPhp, SiJavascript } from "react-icons/si";

const Cristian = () => {
  const cristian = authors.find(author => author.slug === 'cristian');

  useEffect(() => {
    if (cristian) document.title = `Portafolio | ${cristian.name}`;
  }, [cristian]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!cristian) return <div className="text-white text-center py-20">Autor no encontrado</div>;



  const webSkills = [
    { name: "HTML", icon: <FaHtml5 />, hoverColor: "hover:text-[#E34F26]" },
    { name: "CSS", icon: <FaCss3Alt />, hoverColor: "hover:text-[#1572B6]" },
    { name: "Bootstrap", icon: <FaBootstrap />, hoverColor: "hover:text-[#7952B3]" },
    { name: "JavaScript", icon: <FaJs />, hoverColor: "hover:text-[#F7DF1E]" },
    { name: "PHP", icon: <FaPhp />, hoverColor: "hover:text-[#777BB4]" },
  ];

  const mobileSkills = [
    { name: "Flutter", icon: <SiFlutter />, hoverColor: "hover:text-[#02569B]" },
    { name: "Dart", icon: <SiDart />, hoverColor: "hover:text-[#0175C2]" },
    { name: "Java", icon: <FaJava />, hoverColor: "hover:text-[#007396]" },
    { name: "Kotlin", icon: <SiKotlin />, hoverColor: "hover:text-[#7F52FF]" },
    { name: "Firebase", icon: <SiFirebase />, hoverColor: "hover:text-[#FFCA28]" },
    { name: "Figma", icon: <SiFigma />, hoverColor: "hover:text-[#F24E1E]" },
  ];

  const frameworks = [
    { name: "Laravel", icon: <FaLaravel />, hoverColor: "hover:text-[#FF2D20]" },
    { name: "React", icon: <FaReact />, hoverColor: "hover:text-[#61DAFB]" },
    { name: "Django", icon: <SiDjango />, hoverColor: "hover:text-[#092E20]" },
  ];
  // Proyectos 
  const proyectosWeb = [
    { img: "/authors/cristian/proyectos/proyecto1.png", link: "https://github.com/CristianParadaLopez/virtualmoda", titulo: "Virtual Fashion" },
    { img: "/authors/cristian/proyectos/proyecto2.png", link: "https://github.com/CristianParadaLopez/sistema-punto-de-venta", titulo: "Sistema de Farmacia" },
    { img: "/authors/cristian/proyectos/proyecto3.jpg", link: "https://github.com/CristianParadaLopez/Ecommerce-paypal-con-django", titulo: "Ecommerce Paypal" },
    { img: "/authors/cristian/proyectos/proyecto4.png", link: "https://github.com/CristianParadaLopez/Restaurante-laravel-11", titulo: "Dalezius Restaurante" },
    { img: "/authors/cristian/proyectos/proyecto5.png", link: "#", titulo: "GinePlus SPV" }

  ];

  const proyectosMoviles = [
    { img: "/authors/cristian/proyectos/proyecto7.png", link: "https://appetize.io/app/b_qygxqdvica4wwovzltoddi2xte", titulo: "NutriSCAN AI", desc: "IA con Gemini y Flutter para nutrición." },
    { img: "/authors/cristian/proyectos/proyecto6.png", link: "https://appetize.io/app/b_fdru6yjal64zkhpc7mroie46xe", titulo: "Transforma App", desc: "App nativa en Java para FUSALMO." }
  ];

  const fullStackItems = [
    { nombre: "Laravel", icon: <SiLaravel />, color: "hover:text-[#FF2D20]" },
    { nombre: "Django", icon: <SiDjango />, color: "hover:text-[#092E20]" },
    { nombre: "Flutter", icon: <SiFlutter />, color: "hover:text-[#02569B]" },
    { nombre: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
    { nombre: "Firebase", icon: <SiFirebase />, color: "hover:text-[#FFCA28]" },
    { nombre: "PHP", icon: <SiPhp />, color: "hover:text-[#777BB4]" },
    { nombre: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E]" },
    { nombre: "Kotlin", icon: <SiKotlin />, color: "hover:text-[#7F52FF]" },
    { nombre: "Figma", icon: <SiFigma />, color: "hover:text-[#F24E1E]" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_lv0sqre", "template_75cpuzc", { ...formData, to_email: cristian.contact.email, to_name: cristian.name }, "tsS_zRPGc6SdgkNoL")
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

  return (
    <div className="bg-black text-gray-200 min-h-screen selection:bg-[#DE3642] selection:text-white">

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Perfil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group contenedor-circular-animado"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#DE3642] to-[#ff6b75] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={cristian.image}
                alt={cristian.name}
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-black shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-3">
                <a href={cristian.contact.github} target="_blank" className="bg-[#1a1a1a] p-3 rounded-full border border-white/10 text-white hover:text-[#DE3642] hover:scale-110 transition-all shadow-xl">
                  <FaGithub size={20} />
                </a>
                <a href="https://sv.linkedin.com/in/cristian-alexander-parada-l%C3%B3pez-40a504371" target="_blank" className="bg-[#1a1a1a] p-3 rounded-full border border-white/10 text-white hover:text-[#0077B5] hover:scale-110 transition-all shadow-xl">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>

            {/* Info Principal */}
            <div className="flex-1 text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 rounded-full border border-[#DE3642]/40 text-[#DE3642] text-sm font-bold mb-4 uppercase tracking-tighter"
              >
                Full Stack Developer | Mobile Specialist
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter"
              >
                HOLA, SOY <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE3642] via-white to-gray-500 uppercase">{cristian.name}</span>
              </motion.h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed font-light">
                {cristian.about} Especializado en crear ecosistemas digitales escalables y aplicaciones móviles con integración de IA.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-xl">
                  <FaGraduationCap className="text-[#DE3642]" />
                  <span className="text-sm">Ciencias de la Computación (5to año)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-xl">
                  <FaMapMarkerAlt className="text-[#DE3642]" />
                  <span className="text-sm">El Salvador</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="/CV/CV_Cristian_Parada.pdf" download className='group flex items-center gap-3 bg-[#DE3642] px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(222,54,66,0.3)]'>
                  <span className="font-black uppercase tracking-widest text-sm">Descargar CV</span>
                </a>
                <a href="https://cristianparadalopez.github.io/Portafolio/" target="_blank" className='group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:border-[#DE3642]/50 transition-all duration-300'>
                  <span className="font-black uppercase tracking-widest text-sm text-white">Ver Portafolio Web</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SCROLL */}
      <section className="py-10 bg-[#050505] border-y border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico</h2>
          <div className="w-20 h-1 bg-[#DE3642] mx-auto"></div>
        </div>
        <div className="w-full overflow-hidden relative">
          <div className="flex w-max flex-nowrap animate-infinite-scroll py-4 whitespace-nowrap">
            {[...fullStackItems, ...fullStackItems].map((tech, index) => (
              <div key={index} className="flex items-center gap-4 mx-12 group transition-all">
                <span className={`text-5xl text-gray-600 transition-colors duration-300 ${tech.color}`}>
                  {tech.icon}
                </span>
                <span className="text-4xl font-black text-white/10 uppercase tracking-tighter group-hover:text-white/40 transition-colors">
                  {tech.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(222,54,66,0.05)_0%,transparent_70%)] pointer-events-none"></div>

        <div className=" max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: "Desarrollo Web",
                desc: "Sistemas integrales con arquitecturas escalables y alto rendimiento.",
                skills: webSkills,
                icon: "bx-code-block",
                accent: "from-[#DE3642]/20 to-transparent"
              },
              {
                title: "Desarrollo Móvil",
                desc: "Apps nativas e híbridas enfocadas en una experiencia de usuario fluida.",
                skills: mobileSkills,
                icon: "bx-mobile-vibration",
                accent: "from-blue-500/10 to-transparent"
              },
              {
                title: "Ecosistema & Logic",
                desc: "Dominio de frameworks modernos para soluciones backend y frontend.",
                skills: frameworks,
                icon: "bx-desktop",
                accent: "from-purple-500/10 to-transparent"
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -12 }}
                className=" card-animada relative group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#DE3642]/40 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#DE3642]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#DE3642] transition-all duration-500">
                    <i className={`bx ${category.icon} text-3xl text-[#DE3642] group-hover:text-white`}></i>
                  </div>

                  <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic">
                    {category.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                    {category.desc}
                  </p>

                  <div className="flex flex-wrap justify-start gap-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className={` flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/5 
                  transition-all duration-300 group/skill hover:border-[#DE3642]/50 hover:bg-black/60 shadow-lg`}
                      >
                        <span className={`text-lg text-gray-400 transition-colors duration-300 ${skill.hoverColor.replace('hover:', 'group-hover/skill:')}`}>
                          {skill.icon}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter">Sistemas Realizados</h2>
              <div className="w-24 h-2 bg-[#DE3642] mt-4"></div>
            </div>
            <p className="text-gray-500 max-w-md">Una selección de aplicaciones web y móviles desarrolladas con arquitectura escalable.</p>
          </div>

          {/* Web Projects */}
          <div className="mb-20">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 justify-center">
              <i className='bx bx-laptop text-[#DE3642]'></i> Sistemas & Web
            </h3>
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

          {/* Mobile */}
          <div className="bg-[#050505] rounded-[3rem] p-12 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
              <FaMobileAlt className="text-[#DE3642]" /> Mobile Apps Showcase
            </h3>
            <div className="flex flex-wrap justify-center gap-16">
              {proyectosMoviles.map((app, index) => (
                <div key={index} className="relative group">
                  <div className="w-[280px] h-[560px] bg-[#111] rounded-[3rem] border-[8px] border-[#1a1a1a] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:shadow-[#DE3642]/20 group-hover:border-[#DE3642]/30 transition-all duration-500">
                    <img src={app.img} alt={app.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center">
                      <h4 className="text-2xl font-bold text-white mb-4">{app.titulo}</h4>
                      <p className="text-gray-400 text-sm mb-8">{app.desc}</p>
                      <a href={app.link} className="bg-[#DE3642] text-white p-4 rounded-full hover:scale-110 transition-transform shadow-lg">
                        <FaGithub size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-black rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <i className='bx bx-paint-roll text-[180px] text-[#DE3642]'></i>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 italic uppercase tracking-tighter">¿Hablamos?</h2>
              <p className="text-gray-400">¿Interesado en mi trabajo? ¡Envíame un mensaje!</p>
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
                placeholder="Cuéntame sobre tu idea..."
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

export default Cristian;