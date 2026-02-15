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
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SiDart, SiKotlin, SiFirebase, SiFigma, SiDjango, SiFlutter } from "react-icons/si";

const Cristian = () => {
  useEffect(() => {
    document.title = "Portafolio | Cristian Parada";
  }, []);

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

  const proyectosWeb = [
    { img: "/authors/cristian/proyectos/proyecto1.png", link: "#", titulo: "Virtual Fashion" },
    { img: "/authors/cristian/proyectos/proyecto2.png", link: "#", titulo: "Sistema de Farmacia" },
    { img: "/authors/cristian/proyectos/proyecto3.jpg", link: "#", titulo: "Ecommerce Paypal" },
    { img: "/authors/cristian/proyectos/proyecto4.png", link: "#", titulo: "Dalezius Restaurante" },
    { img: "/authors/cristian/proyectos/proyecto5.png", link: "#", titulo: "GinePlus SPV" }

  ];

  const proyectosMoviles = [
    { img: "/authors/cristian/proyectos/proyecto6.png", link: "https://appetize.io/app/b_fdru6yjal64zkhpc7mroie46xe", titulo: "App Gestión Tareas" },
    { img: "/authors/cristian/proyectos/proyecto7.png", link: "https://appetize.io/app/b_qygxqdvica4wwovzltoddi2xte", titulo: "App IA Integrada" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lv0sqre",
        "template_75cpuzc",
        {
          ...formData,
          to_email: "paradalopezcristianalexander@gmail.com",
          to_name: "Cristian"
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
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 gap-12">
  
  {/* Perfil */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
    <img
      src="/authors/cristian/cristian.jpg"
      alt="Cristian"
      className="w-[180px] h-[180px] rounded-full object-cover mb-6 shadow-lg lg:self-center border-4 border-[#DE3642]"
    />

    <h1 className="text-4xl sm:text-5xl font-bold font-[Rubik_Dirt] mb-4">
      Hola, soy Cristian Parada
    </h1>

    <h3 className="text-xl text-[#DE3642] font-semibold">
      Desarrollador Full Stack | Web & Mobile Apps
    </h3>
    
    <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-12'>
      {/* Botón CV */}
      <a 
        href="/CV/CV_Cristian_Parada.pdf"
        download="CV_Cristian_Parada.pdf" 
        className='flex items-center gap-2 border border-[#2a2a2a] py-2 px-5 rounded-full transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#DE3642]'
      >
        <i className="bx bxs-file-pdf text-xl"></i> 
        <span className="font-medium">Descargar CV</span>
      </a>

      {/* Botón Portafolio */}
      <a href="https://cristianparadalopez.github.io/Portafolio/" className='flex items-center gap-2 border border-[#2a2a2a] py-2 px-5 rounded-full bg-gray-300 text-black hover:bg-[#1a1a1a] hover:text-[#DE3642] shadow-md transition-all duration-300'>
        <i className="bx bx-folder-open text-xl"></i> 
        <span className="font-medium">Portafolio</span>
      </a>

      {/* Icono GitHub */}
      <a 
        href="https://github.com/CristianParadaLopez/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center text-3xl text-gray-400 hover:text-[#DE3642] transition-all duration-300 hover:scale-110"
        title="Visitar mi GitHub"
      >
        <i className='bx bxl-github'></i>
      </a>
      <a href="https://sv.linkedin.com/in/cristian-alexander-parada-l%C3%B3pez-40a504371" 
        className="flex items-center justify-center text-3xl text-gray-400 hover:text-[#DE3642] transition-all duration-300 hover:scale-110"
        title="Visitar mi Linkedin">
        <i className='bx bxl-linkedin'></i>
      </a>
    </div>
  </div>

  {/* Sobre mí */}
  <div className="mt-12 lg:mt-0 lg:w-1/2 max-w-xl">
    <h2 className="text-3xl font-bold mb-6 font-[Rubik_Dirt] text-center lg:text-left">
      Sobre mí
    </h2>

    <p className="text-lg leading-relaxed mb-8 text-center lg:text-left">
      Estudiante de 5to año de Licenciatura en Ciencias de la Computación,
      con formación técnica. Apasionado por transformar ideas en código funcional, 
      ya sea en el bolsillo del usuario o en su navegador.
    </p>

    {/* SECCIÓN DE SKILLS  */}
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="bg-[#1a1a1a] p-4 rounded-xl border-l-4 border-[#DE3642]">
        <h4 className="font-bold text-[#DE3642]">🎓 Educación</h4>
        <p className="text-gray-400">Ciencias de la Computación (5to año)</p>
      </div>
      <div className="bg-[#1a1a1a] p-4 rounded-xl border-l-4 border-[#DE3642]">
        <h4 className="font-bold text-[#DE3642]">📍 Ubicación</h4>
        <p className="text-gray-400">El Salvador</p>
      </div>
    </div>

    {/* ICONOS DE TECNOLOGÍAS*/}
    <div className="mt-8">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 text-center lg:text-left">
        Stack Tecnológico Principal
      </p>
  
  {/* Contenedor de iconos con Hover dinámico */}
  <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-4xl text-gray-400">
    
    {/* PHP & LARAVEL (Tus fuertes en Backend) */}
    <i title="PHP" className='bx bxl-php hover:text-[#777BB4] transition-all duration-300 hover:scale-110'></i>

    {/* JAVASCRIPT & REACT */}
    <i title="JavaScript" className='bx bxl-javascript hover:text-[#F7DF1E] transition-all duration-300 hover:scale-110'></i>
    <i title="React" className='bx bxl-react hover:text-[#61DAFB] transition-all duration-300 hover:scale-110'></i>
    
    {/* MOBILE (Flutter, Dart, Java) */}
    <i title="Flutter" className='bx bxl-flutter hover:text-[#02569B] transition-all duration-300 hover:scale-110'></i>
    {/* Nota: Boxicons a veces no tiene el logo de Dart exacto, muchos usan bxl-google o bxl-flutter alternativo */}
    <i title="Java" className='bx bxl-java hover:text-[#ED8B00] transition-all duration-300 hover:scale-110'></i>
        
    {/* DATABASE */}
    <i title="Firebase" className='bx bxl-firebase hover:text-[#FFCA28] transition-all duration-300 hover:scale-110'></i>
  </div>
</div>
  </div>
</section>
      {/* EXPERIENCIA */}
      <section className=" py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          {/* Web */}
          <div className="p-6 border border-gray-300 rounded-lg
                hover:border-[#DE3642]
                hover:shadow-[0_0_20px_rgba(222,54,66,0.6)]
                hover:scale-105
                transition-all duration-300">
            <h4 className="text-xl font-bold mb-3">Desarrollo Web</h4>
            <p className="mb-4">
              Creación de sitios y sistemas web completos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            {webSkills.map((skill, index) => (
                <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
                  transition-all duration-300 group
                  hover:border-[#DE3642] hover:shadow-[0_0_15px_rgba(222,54,66,0.3)]
                  ${skill.hoverColor}`}
                >
                <span className="text-xl">
                    {skill.icon}
                </span>
                <span className="text-sm font-medium">
                    {skill.name}
                </span>
                </div>
            ))}
            </div>
          </div>

          {/* Móvil */}
          <div className="p-6 border border-gray-300 rounded-lg
                hover:border-[#DE3642]
                hover:shadow-[0_0_20px_rgba(222,54,66,0.6)]
                hover:scale-105
                transition-all duration-300">
            <h4 className="text-xl font-bold mb-3">Desarrollo Móvil</h4>
            <p className="mb-4">
              Desarrollo de apps móviles modernas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            {mobileSkills.map((skill, index) => (
                <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
                  transition-all duration-300 group
                  hover:border-[#DE3642] hover:shadow-[0_0_15px_rgba(222,54,66,0.3)]
                  ${skill.hoverColor}`}
                >
                <span className="text-xl">
                    {skill.icon}
                </span>
                <span className="text-sm font-medium">
                    {skill.name}
                </span>
                </div>
            ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="p-6 border border-gray-300 rounded-lg
                hover:border-[#DE3642]
                hover:shadow-[0_0_20px_rgba(222,54,66,0.6)]
                hover:scale-105
                transition-all duration-300">
            <h4 className="text-xl font-bold mb-3">Frameworks</h4>
            <p className="mb-4">
              Trabajo con frameworks modernos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((fw, index) => (
                <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
                  transition-all duration-300 group
                  hover:border-[#DE3642] hover:shadow-[0_0_15px_rgba(222,54,66,0.3)]
                  ${fw.hoverColor}`}
                >
                <span className="text-xl">
                    {fw.icon}
                </span>
                <span className="text-sm font-medium">
                    {fw.name}
                </span>
                </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROYECTOS MIXTOS */}
      <section id="proyectos" className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 font-[Rubik_Dirt] text-center italic">
            Mis proyectos recientes
          </h2>

          {/* GRILLA WEB */}
          <div className="mb-20">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 justify-center">
              <i className='bx bx-laptop text-[#DE3642]'></i> Sistemas & Web
            </h3>
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

          {/* GRILLA MÓVIL */}
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-xl font-bold mb-8 flex items-center justify-center gap-2">
              <i className='bx bx-mobile-alt text-[#DE3642]'></i> Aplicaciones Móviles
            </h3>
            <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
              {proyectosMoviles.map((app, index) => (
                <div 
                  key={index} 
                  className="group relative w-[240px] h-[480px] bg-[#1a1a1a] rounded-[2.5rem] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#2a2a2a] rounded-b-xl z-20"></div>
                  <img
                    src={app.img} 
                    alt={app.titulo} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                  <div className="absolute inset-0 bg-[#DE3642]/80 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-white font-bold text-lg mb-4">{app.titulo}</h4>
                    <a href={app.link} className="bg-white text-black p-3 rounded-full text-xl shadow-lg">
                      <i className='bx bx-link-external'></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-6 bg-[#0f0f1a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#DE3642]/20 blur-[120px] rounded-full"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[Rubik_Dirt] text-white">¡Hablemos!</h2>
            <p className="text-gray-400">¿Tienes un proyecto en mente? Envíame un mensaje directo.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl"
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
                placeholder="¿En qué puedo ayudarte?"
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
                {loading ? (
                  "Enviando..."
                ) : (
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
                    ✅ ¡Mensaje enviado con éxito! Te responderé pronto.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Cristian;