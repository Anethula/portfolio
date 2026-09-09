import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(18rem,auto)] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 portrait-card">
          <img
            src="/assets/arnav-portrait.jpg"
            alt="Arnav Nethula"
            className="portrait-image"
          />
          <div className="z-10">
            <p className="headtext">Hey, I&apos;m Arnav Nethula</p>
            <p className="subtext">
              I have extensive experience in backend and AI development  
              skills useful for Software Engineering and AI Roles
            </p>
          </div>
          <div className="portrait-shade" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="text-center text-3xl lg:text-4xl font-semibold text-gray-500 max-w-[18rem]">
              MY DEVELOPER DOMAIN
            </p>
            <Card style={{ rotate: "-12deg", top: "8%", left: "2%" }} text="Coding" containerRef={grid2Container} />
            <Card style={{ rotate: "12deg", top: "25%", right: "0%" }} text="Full Stack" containerRef={grid2Container} />
            <Card style={{ rotate: "-8deg", bottom: "8%", left: "0%" }} text="AI" containerRef={grid2Container} />
            <Card style={{ rotate: "10deg", bottom: "3%", right: "0%" }} text="Engineering" containerRef={grid2Container} />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 timezone-card">
          <div className="relative z-10 w-[55%]">
            <p className="headtext">Time Zone</p>
            <p className="timezone-location">New Jersey<br />New York metro area</p>
            <p className="timezone-label">Eastern Time · EST / EDT</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        <div className="about-highlights md:col-span-6">
          <article className="about-highlight opportunity-highlight">
            <h3>Open to Opportunities</h3>
            <p>I’m interested in software engineering, full-stack, and AI roles where I can turn complex problems into useful applications.</p>
            <a className="highlight-link" href="mailto:arnavnethula@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          </article>
          <article className="about-highlight" id="certifications">
            <h3>Certifications</h3>
            <ul className="certification-list">
              <li><img className="certification-badge-image" src="/assets/certifications/cloud_prac.webp" alt="AWS Certified Cloud Practitioner badge" loading="lazy" /><div><span className="certification-issuer">AWS Certified</span><h4>Cloud Practitioner</h4></div></li>
              <li><img className="certification-badge-image" src="/assets/certifications/ai_prac.webp" alt="AWS Certified AI Practitioner badge" loading="lazy" /><div><span className="certification-issuer">AWS Certified</span><h4>AI Practitioner</h4></div></li>
            </ul>
          </article>
          <article className="about-highlight research-highlight" id="research">
            <span className="orbital-label">AI Research · Co-author</span>
            <h3 className="research-title">Fairness Interventions at Runtime and Model-training</h3>
            <p>Developed the FIRM pipeline which explores how causal tracing, targeted fine-tuning, and runtime steering can work together to reduce bias in language models.</p>
            <a className="highlight-link" href="https://github.com/Zachbot168/Algoverse" target="_blank" rel="noopener noreferrer">Explore the code <span aria-hidden="true">↗</span></a>
          </article>
        </div>
        {/* Current technologies from the active logos folder. */}
        <div className="grid-default-color md:col-span-6">
          <p className="headtext">Tech Stack</p>
          <p className="subtext mb-6">Languages, frameworks, and tools I use to build backend systems and AI applications.</p>
          <Frameworks />
        </div>
      </div>
    </section>
  );
};

export default About;
