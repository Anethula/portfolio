import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { myProjects } from "../constants";

const Projects = () => {
  const track = useRef(null);
  const dialog = useRef(null);
  const drag = useRef(null);
  const dragged = useRef(false);
  const resumeAt = useRef(0);
  const focus = useRef(false);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = track.current;
    if (paused || reducedMotion || selected) return;
    let frame;
    let previous = 0;
    let position = element.scrollLeft;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(element);
    const tick = (time) => {
      const delta = previous ? Math.min(time - previous, 48) : 0;
      previous = time;
      if (visible && !document.hidden && !drag.current && !focus.current && time >= resumeAt.current) {
        const loopWidth = element.children[myProjects.length].offsetLeft - element.children[0].offsetLeft;
        position = (position + delta * 0.035) % loopWidth;
        element.scrollLeft = position;
      } else {
        position = element.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [paused, reducedMotion, selected]);

  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    modal.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const move = (direction) => {
    resumeAt.current = performance.now() + 1800;
    const element = track.current;
    const width = element.firstElementChild.getBoundingClientRect().width + 24;
    if (direction < 0 && element.scrollLeft < 1 && !reducedMotion) element.scrollLeft = element.children[myProjects.length].offsetLeft - element.children[0].offsetLeft;
    element.scrollBy({ left: direction * width, behavior: reducedMotion ? "instant" : "smooth" });
  };

  const startDrag = (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    dragged.current = false;
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, scroll: track.current.scrollLeft };
  };
  const moveDrag = (event) => {
    const start = drag.current;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    if (!dragged.current && (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(event.clientY - start.y))) return;
    dragged.current = true;
    track.current.setPointerCapture(event.pointerId);
    track.current.classList.add("is-dragging");
    track.current.scrollLeft = start.scroll - dx;
  };
  const endDrag = (event) => {
    if (drag.current?.id !== event.pointerId) return;
    if (track.current.hasPointerCapture(event.pointerId)) track.current.releasePointerCapture(event.pointerId);
    track.current.classList.remove("is-dragging");
    drag.current = null;
    resumeAt.current = performance.now() + 1200;
  };

  return (
    <section id="work" className="projects-section" aria-label="Selected projects">
      <div className="c-space flex flex-wrap items-end justify-between gap-6">
        <div><p className="orbital-label">Things I have built</p><h2 className="text-heading">My Selected Projects</h2></div>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous projects">←</button>
          {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play project carousel" : "Pause project carousel"} aria-pressed={paused}>{paused ? "Play" : "Pause"}</button>}
          <button type="button" onClick={() => move(1)} aria-label="Next projects">→</button>
        </div>
      </div>
      <p className="c-space mt-4 text-neutral-400">Drag to explore, or let the projects glide past. Select a thumbnail for details.</p>
      <div ref={track} className="project-track" aria-label="Project thumbnails" tabIndex={0}
        onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag}
        onPointerLeave={() => { if (!dragged.current) drag.current = null; }}
        onClickCapture={(event) => { if (dragged.current && event.detail > 0) { event.preventDefault(); event.stopPropagation(); } }}
        onFocusCapture={(event) => { focus.current = event.target.matches(":focus-visible"); }}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) focus.current = false; }}
        onWheel={() => { resumeAt.current = performance.now() + 1800; }}>
        {(reducedMotion ? myProjects : [...myProjects, ...myProjects]).map((project, index) => (
          <button type="button" className="project-thumbnail" key={`${project.id}-${index}`} tabIndex={index >= myProjects.length ? -1 : 0} aria-hidden={index >= myProjects.length ? true : undefined} onClick={() => setSelected(project)}>
            <img src={project.image} alt="" loading="lazy" draggable="false" />
            <span className="project-index">{String(index % myProjects.length + 1).padStart(2, "0")} / {String(myProjects.length).padStart(2, "0")}</span>
            <span className="project-caption"><span className="project-tags">{project.tags.slice(0, 3).map((tag) => tag.name).join(" · ")}</span><span className="project-title">{project.title}</span><span className="project-open">Explore project ↗</span></span>
          </button>
        ))}
      </div>
      {selected && <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        <div className="project-dialog-content">
          <button type="button" className="dialog-close" onClick={() => setSelected(null)} aria-label="Close project details" autoFocus>×</button>
          <img src={selected.image} alt={selected.title} className="w-full aspect-video object-cover" />
          <div className="p-6 sm:p-8"><p className="orbital-label">{selected.tags.map((tag) => tag.name).join(" · ")}</p><h3 id="project-title" className="text-2xl font-bold mt-3">{selected.title}</h3><p className="mt-4 text-neutral-300">{selected.description}</p><ul className="mt-5 space-y-3 list-disc pl-5 text-neutral-400">{selected.subDescription.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          {selected.href && <a className="inline-block mt-6 text-aqua" href={selected.href} target="_blank" rel="noopener noreferrer">View project ↗</a>}</div>
        </div>
      </dialog>}
    </section>
  );
};
export default Projects;
