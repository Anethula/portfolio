import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/futuristic-moon-background.jpg")', y: reducedMotion ? 0 : y, scale: reducedMotion ? 1 : scale, opacity: reducedMotion ? 1 : opacity }} />
      <div className="lunar-pointer" />
      <div className="lunar-stars" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/35 to-primary" />
    </div>
  );
};
export default ParallaxBackground;
