import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import InteractiveBackground from "./components/InteractiveBackground";

// Lazy Loading
const Home = lazy(() => import("./pages/Home"));
const Post = lazy(() => import("./pages/Post"));
const Author = lazy(() => import("./pages/Author"));
const Category = lazy(() => import("./pages/Category"));
const CategoryDetail = lazy(() => import("./components/CategoryDetail"));
const Contact = lazy(() => import("./pages/Contact"));

const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black">
    <div className="w-10 h-10 border-4 border-[#DE3642] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <Header />

      {/* FONDO INTERACTIVO GLOBAL */}
      {/* Se mantiene visible en Home, pero z-0 permite que el texto z-10 esté encima */}
      <div className={`fixed inset-0 transition-opacity duration-1000 z-0 ${isHome ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <InteractiveBackground />
      </div>

      <div className="relative z-10 pt-20 md:pt-28">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Category />} />
            <Route path="/categorias/:categorySlug" element={<CategoryDetail />} />
            <Route path="/blog/:slug" element={<Post />} />
            <Route path="/autor/:authorSlug" element={<Author />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </main>
  );
}