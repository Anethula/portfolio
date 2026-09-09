const labels = {
  aws: "AWS", azure: "Azure", cplusplus: "C++", css3: "CSS", databricks: "Databricks",
  docker: "Docker", gcp: "Google Cloud", git: "Git", github: "GitHub", html5: "HTML",
  java: "Java", javascript: "JavaScript", langchain: "LangChain", microsoft: "Microsoft",
  python: "Python", react: "React", snowflake: "Snowflake", sql: "SQL", supabase: "Supabase",
  tailwindcss: "Tailwind CSS", visualstudiocode: "VS Code", vitejs: "Vite",
};
// Discover only active logos; the discarded assets folder is never included.
const logos = Object.keys(import.meta.glob("/public/assets/logos/*.{svg,png,webp,jpg,jpeg}"))
  .map((path) => {
    const filename = path.split("/").pop();
    const name = filename.replace(/\.[^.]+$/, "");
    return { src: `${import.meta.env.BASE_URL}${path.replace("/public/", "")}`, name: labels[name] ?? name };
  }).sort((a, b) => a.name.localeCompare(b.name));

export function Frameworks() {
  return (
    <ul className="tech-logo-grid">
      {logos.map(({ src, name }) => (
        <li key={src} className="tech-logo" title={name}>
          <img src={src} alt="" loading="lazy" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
