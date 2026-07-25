import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/85 backdrop-blur-md border-b-2 border-ink" : "border-b-2 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border-2 border-ink bg-primary text-primary-foreground text-sm shadow-[2px_2px_0_0_hsl(var(--ink))]">
            XM
          </span>
          <span className="hidden sm:inline">Xavier McKenzie</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <a key={item.name} href={item.href} className="nav-link">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}.</span> {item.name}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-sm font-mono">
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b-2 border-ink">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost !py-2 text-sm font-mono">
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
