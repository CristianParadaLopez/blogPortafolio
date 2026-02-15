import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

const Contact = () => {
  const authors = [
    {
      id: "cristian",
      name: "Cristian",
      email: "paradalopezcristianalexander@gmail.com",
      image: "/authors/cristian/cristian.jpg"
    },
    {
      id: "katherine",
      name: "Katherine",
      email: "katherinealexandra2018@gmail.com",
      image: "/authors/katherine/katherine.jpg"
    },
    {
      id: "luis",
      name: "Luis",
      email: "luisamaya1518@gmail.com",
      image: "/authors/luis/luis.jpg"
    },
    {
      id: "tania",
      name: "Tania",
      email: "taniagcheztt@gmail.com",
      image: "/authors/tania/tania.jpg"
    },
    {
      id: "eunice",
      name: "Eunice",
      email: "eu.martinez.127@gmail.com",
      image: "/authors/e/e.jpg"
    }
  ];

  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAuthor) return;

    setLoading(true);

    emailjs
      .send(
        "service_lv0sqre",
        "template_75cpuzc",
        {
          ...formData,
          to_email: selectedAuthor.email,
          to_name: selectedAuthor.name
        },
        "tsS_zRPGc6SdgkNoL"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        alert("Error al enviar mensaje");
      });
  };

 return (
  <>
<section className="min-h-screen flex flex-col items-center px-6 py-16 relative">

      <AnimatePresence mode="wait">

        {!selectedAuthor ? (
          <>
            {/* TÍTULO FUERA DEL ORBIT */}
            <motion.h1
              key="title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-white to-[#DE3642] bg-clip-text "
            >
              ¿A cuál programador quieres contactar?
            </motion.h1>

            {/* ORBIT CONTAINER */}
            <motion.div
                key="orbit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full max-w-[500px] aspect-square flex items-center justify-center mx-auto"
                >

              {authors.map((author, index) => {
                const angle = (index / authors.length) * 2 * Math.PI;

                // Radio responsive sin usar window
                const radius =
                  window.innerWidth < 640
                    ? 100
                    : window.innerWidth < 768
                    ? 140
                    : 180;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={author.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedAuthor(author)}
                    className="absolute top-1/2 left-1/2 cursor-pointer group"
                    style={{
                      x,
                      y,
                      translateX: "-50%",
                      translateY: "-50%"
                    }}
                  >
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_40px_#DE3642]">

                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover"
                      />
                    </div>

                    <p className="text-center mt-3 text-xs sm:text-sm group-hover:text-[#DE3642] transition">
                      {author.name}
                    </p>
                  </motion.div>
                );
              })}

              {/* CENTRO DECORATIVO */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-[#DE3642]/30 to-transparent blur-2xl absolute"></div>

            </motion.div>
          </>
        ) : (
          /* FORMULARIO */
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-3xl"
          >
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold">
                Contactando a {selectedAuthor.name}
              </h1>

              <button
                onClick={() => {
                  setSelectedAuthor(null);
                  setSuccess(false);
                }}
                className="text-sm text-gray-400 mt-3 hover:text-[#DE3642]"
              >
                Cambiar programador
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl"
            >
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-4 rounded bg-black/40 border border-white/10 focus:border-[#DE3642] outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 rounded bg-black/40 border border-white/10 focus:border-[#DE3642] outline-none transition"
              />

              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-4 rounded bg-black/40 border border-white/10 focus:border-[#DE3642] outline-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#DE3642] py-3 rounded-full text-white hover:scale-105 transition-transform"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>

              {success && (
                <p className="text-green-400 text-center">
                  ✅ Mensaje enviado correctamente
                </p>
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
