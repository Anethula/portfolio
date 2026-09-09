import { extraExperiences } from "../constants";

export default function ExtraExperiences() {
  return (
    <section id="extra-experiences" className="c-space extra-experiences">
      <p className="orbital-label">Beyond the code</p>
      <h2 className="text-heading">More About Me</h2>
      <p className="mt-4 max-w-xl text-neutral-400">College life, communities, and experiences beyond my professional work.</p>
      <div className="extra-grid">
        {extraExperiences.map((experience, index) => (
          <article className="extra-card" key={experience.title}>
            <span className="experience-number" aria-hidden="true">0{index + 1}</span>
            <span className="orbital-label">{experience.category}</span>
            <h3 className="mt-8 text-2xl font-medium">{experience.title}</h3>
            <p className="mt-3 text-neutral-400">{experience.description}</p>
            {experience.date && <p className="mt-6 text-sm text-aqua">{experience.date}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
