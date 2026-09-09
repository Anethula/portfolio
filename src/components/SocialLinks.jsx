import { mySocials } from "../constants";

const paths = {
  Email: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2 8 6 8-6H4Zm16 12V8.5l-8 6-8-6V18h16Z",
  LinkedIn: "M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8v-4.64c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.72H9.51V9.2h2.83v1.3h.04c.4-.76 1.36-1.56 2.8-1.56 3 0 3.57 1.98 3.57 4.55v5.26Z",
  GitHub: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  Devpost: "M6 2h12l6 10-6 10H6L0 12 6 2Zm2 5v10h4a5 5 0 0 0 0-10H8Zm3 2.5h1a2.5 2.5 0 0 1 0 5h-1v-5Z",
};

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social profiles">
      {mySocials.map(({ name, href }) => {
        const icon = <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d={paths[name]} /></svg>;
        return href ? (
          <a key={name} className="social-link" href={href} target={name === "Email" ? undefined : "_blank"} rel={name === "Email" ? undefined : "noopener noreferrer"} aria-label={name === "Email" ? "Email Arnav" : `${name} (opens in a new tab)`} title={name}>{icon}</a>
        ) : (
          <span key={name} className="social-link social-link-pending" aria-label={`${name} profile coming soon`} title={`${name} profile coming soon`}>{icon}</span>
        );
      })}
    </div>
  );
}
