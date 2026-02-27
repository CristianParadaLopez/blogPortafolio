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

const Katherine = () => {

  useEffect(() => {
    document.title = "Portafolio | Katherine De León";
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
    { img: "/authors/luis/proyectos/proyecto9.png", link: "#", titulo: "Virtual Fashion" },
    { img: "/authors/luis/proyectos/proyecto10.png", link: "#", titulo: "Sistema de Farmacia" },
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

    emailjs.send(
      "service_lv0sqre",
      "template_75cpuzc",
      {
        ...formData,
        to_email: "katherinealexandra2018@gmail.com",
        to_name: "Katherine"
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

      {/* HERO */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8 gap-12">

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
          <img
            src="/authors/katherine/katherine.jpg"
            alt="Katherine"
            className="w-[180px] h-[180px] rounded-full object-cover mb-6 shadow-lg border-4 border-[#DE3642]"
          />

          <h1 className="text-4xl sm:text-5xl font-bold font-[Rubik_Dirt] mb-4">
            Hola, soy Katherine De León
          </h1>

          <h3 className="text-xl text-[#DE3642] font-semibold">
            Desarrolladora Web & Mobile Apps
          </h3>

          <a 
        href="https://github.com/ViviLeech" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center text-3xl text-gray-400 hover:text-[#DE3642] transition-all duration-300 hover:scale-110"
        title="Visitar mi GitHub"
      >
        <i className='bx bxl-github'></i>
      </a>

        </div>

        {/* SOBRE MÍ */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 max-w-xl">
          <h2 className="text-3xl font-bold mb-6 font-[Rubik_Dirt]">
            Sobre mí
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            Estudiante de tercer año de Licenciatura en Ciencias de la Computación, 
            apasionada por el desarrollo y diseño, con experiencia en  desarrollo frontend.
          </p>
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
      <section id="contacto" className="py-20 px-6 bg-[#0f0f1a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-[Rubik_Dirt] text-white">¡Hablemos!</h2>
            <p className="text-gray-400">¿Tienes un proyecto en mente? Envíame un mensaje directo.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 rounded-xl bg-black/40 border border-white/10 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 rounded-xl bg-black/40 border border-white/10 text-white"
            />

            <textarea
              name="message"
              placeholder="¿En qué puedo ayudarte?"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-4 rounded-xl bg-black/40 border border-white/10 text-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#DE3642] py-4 rounded-xl text-white font-bold"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {success && (
              <p className="text-green-400 text-center font-medium mt-2">
                ✅ ¡Mensaje enviado con éxito! Te responderé pronto.
              </p>
            )}

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Katherine;