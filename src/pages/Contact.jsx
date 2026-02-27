import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const authors = [
    { id: "cristian", name: "Cristian", email: "paradalopezcristianalexander@gmail.com", image: "/authors/cristian/cristian.jpg" },
    { id: "katherine", name: "Katherine", email: "katherinealexandra2018@gmail.com", image: "/authors/katherine/katherine.jpg" },
    { id: "luis", name: "Luis", email: "luisamaya1518@gmail.com", image: "/authors/luis/luis.jpg" },
    { id: "tania", name: "Tania", email: "taniagcheztt@gmail.com", image: "/authors/tania/tania.jpg" },
    { id: "eunice", name: "Eunice", email: "eu.martinez.127@gmail.com", image: "/authors/e/e.jpg" }
  ];

  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!selectedAuthor) {
      const interval = setInterval(() => {
        setRotation((prev) => prev + 0.2);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [selectedAuthor]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAuthor) return;
    setLoading(true);

    emailjs.send(
        "service_lv0sqre",
        "template_75cpuzc",
        { ...formData, to_email: selectedAuthor.email, to_name: selectedAuthor.name },
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
    <>
      <section className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-16 relative overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          {!selectedAuthor ? (
            <motion.div
              key="selection-step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col items-center"
            >
              {/* TÍTULO CORREGIDO (Sin cortes) */}
              <div className="max-w-4xl w-full px-4 mb-12 sm:mb-20">
                <motion.h1 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-center py-4 leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                >
                  ¿A quién quieres <span className="text-[#DE3642]">contactar</span>?
                </motion.h1>
              </div>

              {/* CONTENEDOR DE ÓRBITA RE-CENTRADO */}
              <div className="relative w-full flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
                
                {/* Círculo guía visual */}
                <div className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] border border-white/5 rounded-full z-0" />

                {authors.map((author, index) => {
                  const angle = (index / authors.length) * 2 * Math.PI + (rotation * Math.PI) / 180;
                  
                  // Radio responsive ajustado para que no se salga en móviles
                  const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 180;
                  
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={author.id}
                      onClick={() => setSelectedAuthor(author)}
                      className="absolute cursor-pointer z-20"
                      style={{ 
                        left: '50%',
                        top: '50%',
                        x: x, 
                        y: y, 
                        translateX: "-50%", 
                        translateY: "-50%" 
                      }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <div className="group relative flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full p-0.5 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-md border border-white/10 group-hover:border-[#DE3642] transition-all duration-500 shadow-2xl overflow-hidden">
                          <img
                            src={author.image}
                            alt={author.name}
                            className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <p className="mt-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-[#DE3642] transition-colors">
                          {author.name}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

                {/* NÚCLEO CENTRAL (Icono Correo) */}
                <div className="relative flex items-center justify-center z-10">
                  <div className="absolute w-20 h-20 sm:w-32 sm:h-32 bg-[#DE3642]/10 blur-[50px] rounded-full" />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#DE3642] text-3xl sm:text-4xl"
                  >
                    <i className='bx bx-envelope'></i>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* FORMULARIO (Se mantiene igual, ya funcionaba bien) */
            <motion.div
              key="form-step"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-xl"
            >
              <div className="flex items-center gap-6 mb-12">
                <button
                  onClick={() => { setSelectedAuthor(null); setSuccess(false); }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#DE3642] hover:border-[#DE3642] transition-all group"
                >
                  <i className='bx bx-arrow-back text-xl'></i>
                </button>
                <div>
                  <h2 className="text-2xl font-bold">Mensaje para {selectedAuthor.name}</h2>
                  <p className="text-gray-500 text-sm">Developer Team</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-[#DE3642] focus:bg-white/10 transition-all"
                      placeholder="Ej. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-[#DE3642] focus:bg-white/10 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-[#DE3642] focus:bg-white/10 transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#DE3642] text-white font-bold rounded-2xl hover:shadow-[0_10px_30px_rgba(222,54,66,0.3)] disabled:opacity-50 transition-all"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </div>
                  ) : "Enviar Mensaje Directo"}
                </button>

                {success && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 text-center text-sm"
                  >
                    🚀 ¡Mensaje enviado con éxito a {selectedAuthor.name}!
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </>
  );
};

export default Contact;