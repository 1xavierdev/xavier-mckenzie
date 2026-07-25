import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-ink px-6 py-8">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          Designed &amp; built by <span className="text-foreground font-medium">Xavier McKenzie</span> ·
          © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/1xavierdev" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/xaviermckenzie" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:x.mckenzie@my.ccsu.edu" className="hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
