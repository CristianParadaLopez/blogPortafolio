import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Post from "./pages/Post";
import Author from "./pages/Author";

import Header from "./components/header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 10,
      once: true,
    });
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Fondo */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#DE3642] -rotate-[30deg] -z-10"></div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:categoryName" element={<Category />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/autor/:authorSlug" element={<Author />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

    </main>
  );
}
