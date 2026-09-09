import SocialLinks from "../components/SocialLinks";
const Footer = () => (
  <footer className="flex flex-wrap items-center justify-between gap-5 py-8 text-sm text-neutral-400 c-space">
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
    <a href="#home" className="hover:text-white">Back to the moon ↑</a>
    <SocialLinks />
    <p>© {new Date().getFullYear()} Arnav Nethula</p>
  </footer>
);
export default Footer;
