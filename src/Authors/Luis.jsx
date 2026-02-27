import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import authors from '../data/author';
import Footer from "../components/Footer";

// Iconos (Asegúrate de tener instalados react-icons y boxicons en el index.html)
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaJava } from "react-icons/fa";
import { SiFirebase, SiFigma, SiCisco, SiMysql } from "react-icons/si";

const Luis = () => {
  const luis = authors.find(author => author.slug === 'luis');

  useEffect(() => {
    if (luis) {
      document.title = `Portafolio | ${luis.name}`;
    }
  }, [luis]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!luis) return <div className="text-white text-center py-20">Autor no encontrado</div>;
  const proyectosWeb = [
    { img: "/authors/luis/proyectos/proyecto9.png", link: "#", titulo: "Virtual Fashion" },
    { img: "/authors/luis/proyectos/proyecto10.png", link: "#", titulo: "Sistema de Farmacia" },
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Ajusta estos IDs con tus credenciales de EmailJS
    emailjs.send(
        "service_lv0sqre", 
        "template_75cpuzc", 
        {
          ...formData,
          to_email: luis.contact.email,
          to_name: luis.name
        },
        "tsS_zRPGc6SdgkNoL"
      )
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
    <div className="font-sans">
      {/* HERO + SOBRE MI */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 gap-12 max-w-7xl mx-auto">
        
        {/* Perfil */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
          <img
            src={luis.image}
            alt={luis.name}
            className="w-[180px] h-[180px] rounded-full object-cover mb-6 shadow-lg border-4 border-[#DE3642]"
          />

          <h1 className="text-4xl sm:text-5xl font-bold font-[Rubik_Dirt] mb-4">
            Hola, soy {luis.name}
          </h1>

          <h3 className="text-xl text-[#DE3642] font-semibold">
            {luis.role}
          </h3>
          
          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-12'>
          </div>
          <a 
        href="https://github.com/luisamaya1518-rgb" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center text-3xl text-gray-400 hover:text-[#DE3642] transition-all duration-300 hover:scale-110"
        title="Visitar mi GitHub"
      >
        <i className='bx bxl-github'></i>
      </a>
        </div>
        

        {/* Sobre mí */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 max-w-xl">
          <h2 className="text-3xl font-bold mb-6 font-[Rubik_Dirt] text-center lg:text-left">
            Sobre mí
          </h2>

          <p className="text-lg leading-relaxed mb-8 text-center lg:text-left">
            {luis.about}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-[#1a1a1a] p-4 rounded-xl border-l-4 border-[#DE3642]">
              <h4 className="font-bold text-[#DE3642]">🎓 Especialidad</h4>
              <p className="text-gray-400">Desarrollo Web</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl border-l-4 border-[#DE3642]">
              <h4 className="font-bold text-[#DE3642]">📍 Ubicación</h4>
              <p className="text-gray-400">Apopa</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 text-center lg:text-left">
              Tecnologías Clave
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-4xl text-gray-400">
              <i title="MySQL" className='bx bxl-postgresql hover:text-[#336791] transition-all duration-300 hover:scale-110'></i>
              <i title="JavaScript" className='bx bxl-javascript hover:text-[#F7DF1E] transition-all duration-300 hover:scale-110'></i>
              <i title="React" className='bx bxl-react hover:text-[#61DAFB] transition-all duration-300 hover:scale-110'></i>
              <i title="Java" className='bx bxl-java hover:text-[#ED8B00] transition-all duration-300 hover:scale-110'></i>
              <i title="Cisco" className='bx bx-network-chart hover:text-[#049FD9] transition-all duration-300 hover:scale-110'></i>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA / HABILIDADES */}
      <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {/* Columna 1 */}
          <div className="p-6 border border-gray-200 rounded-lg hover:border-[#DE3642] hover:shadow-[0_0_20px_rgba(222,54,66,0.2)] hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold mb-3">Web & Soft</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {luis.skills.web.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold">{s}</span>
              ))}
            </div>
          </div>

          {/* Columna 2 */}
          <div className="p-6  border border-gray-200 rounded-lg hover:border-[#DE3642] hover:shadow-[0_0_20px_rgba(222,54,66,0.2)] hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold mb-3">Redes</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {luis.skills.redes.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold">{s}</span>
              ))}
            </div>
          </div>

          {/* Columna 3 */}
          <div className="p-6  border border-gray-200 rounded-lg hover:border-[#DE3642] hover:shadow-[0_0_20px_rgba(222,54,66,0.2)] hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold mb-3">Bases de Datos</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {luis.skills.Database.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 font-[Rubik_Dirt] text-center italic">
            Portafolio de Proyectos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectosWeb.map((proyecto, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500">
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

      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-6 bg-[#0f0f1a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#DE3642]/20 blur-[120px] rounded-full"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[Rubik_Dirt] text-white">¡Contactame!</h2>
            <p className="text-gray-400">¿Interesado en trabajar conmigo? Envíame un mensaje.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-[#DE3642] outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-[#DE3642] outline-none transition-all"
                />
              </div>

              <textarea
                name="message"
                placeholder="Cuéntame sobre tu propuesta..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-[#DE3642] outline-none transition-all"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#DE3642] py-4 rounded-xl text-white font-bold hover:bg-[#c12e38] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? "Enviando..." : (
                  <>
                    Enviar Mensaje 
                    <i className='bx bx-send group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'></i>
                  </>
                )}
              </button>

              <AnimatePresence>
                {success && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-green-400 text-center font-medium mt-2"
                  >
                    ✅ ¡Mensaje enviado con éxito!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Luis;