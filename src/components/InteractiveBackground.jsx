import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ x, y }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-40 bg-[#DE3642]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />      
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#de3642] rounded-full blur-[120px] opacity-10 animate-pulse" />
    </div>
  );
};

export default InteractiveBackground;