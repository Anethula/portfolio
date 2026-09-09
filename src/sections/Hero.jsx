import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Bounds, Center, Float } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { Suspense } from "react";
import SocialLinks from "../components/SocialLinks";
import Loader from "../components/Loader";

const Hero = () => {
  const reducedMotion = useReducedMotion();
  return (
    <section id="home" onPointerMove={(event) => {
      if (event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    }} className="relative isolate grid min-h-svh items-center overflow-hidden c-space lg:grid-cols-[1.2fr_1fr]">
      <ParallaxBackground />
      <div className="hero-copy"><HeroText /><SocialLinks /></div>
      <figure className="relative z-0 h-[min(45svh,420px)] min-h-[280px] w-full lg:mt-16 lg:h-[65svh] lg:max-h-[680px]" aria-label="Animated toy robot">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 6, 4]} intensity={1.4} />
          <hemisphereLight intensity={0.6} groundColor="#1a1a1a" />
          <Suspense fallback={<Loader />}>
            {/* Fit the actual model bounds whenever the viewing area resizes. */}
            <Bounds fit clip observe margin={1.25} maxDuration={0}>
              <Float speed={reducedMotion ? 0 : 1.5} rotationIntensity={reducedMotion ? 0 : 0.15} floatIntensity={reducedMotion ? 0 : 0.2}>
                <Center>
                  <Astronaut />
                </Center>
              </Float>
            </Bounds>
          </Suspense>
        </Canvas>
      </figure>
      <a href="#about" className="explore-link"><span className="scroll-orbit" aria-hidden="true">↓</span> Explore my universe</a>
    </section>
  );
};

export default Hero;
