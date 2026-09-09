import { MotionConfig, motion, useReducedMotion } from "motion/react";
import ExtraExperiences from "./sections/ExtraExperiences";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  const reducedMotion = useReducedMotion();
  const reveal = {
    initial: reducedMotion ? false : { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  };
  return (
    <MotionConfig reducedMotion="user">
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <motion.div {...reveal}><About /></motion.div>
      <Projects />
      <motion.div {...reveal}><Experiences /></motion.div>
      <motion.div {...reveal}><ExtraExperiences /></motion.div>
      <motion.div {...reveal}><Contact /></motion.div>
      <Footer/>
    </div>
    </MotionConfig>
  );
};

export default App;
