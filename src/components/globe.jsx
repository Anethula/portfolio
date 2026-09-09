import createGlobe from "cobe";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export function Globe() {
  const canvasRef = useRef(null);
  const pointer = useRef(null);
  const rotation = useRef(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    let width = canvas.offsetWidth;
    let phi = 6;
    let previousTime = performance.now();
    const observer = new ResizeObserver(() => { width = canvas.offsetWidth; });
    observer.observe(canvas);
    const globe = createGlobe(canvas, {
      width: width * 2, height: width * 2, devicePixelRatio: 2,
      phi, theta: 0.35, dark: 1, diffuse: 0.4, mapSamples: 16000,
      mapBrightness: 1.2, baseColor: [0.25, 0.38, 0.5],
      markerColor: [1, 1, 1], glowColor: [0.18, 0.28, 0.4],
      // One regional marker: New Jersey / New York metropolitan area.
      markers: [{ location: [40.7128, -74.006], size: 0.075 }],
      onRender: (state) => {
        const time = performance.now();
        const delta = Math.min(time - previousTime, 50);
        previousTime = time;
        if (pointer.current === null && !reducedMotion) phi += delta * 0.00015;
        state.phi = phi + rotation.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    return () => { observer.disconnect(); globe.destroy(); };
  }, [reducedMotion]);

  return (
    <canvas ref={canvasRef} className="timezone-globe" role="img" aria-label="Rotating globe marking the New Jersey and New York metropolitan area"
      onPointerDown={(event) => { pointer.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }}
      onPointerMove={(event) => { if (pointer.current !== null) { rotation.current += (event.clientX - pointer.current) / 250; pointer.current = event.clientX; } }}
      onPointerUp={() => { pointer.current = null; }} onPointerCancel={() => { pointer.current = null; }} onLostPointerCapture={() => { pointer.current = null; }}
    />
  );
}
