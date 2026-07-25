import { Mail, Github, Linkedin } from "lucide-react";

const EMAIL = "xmckenzie209@gmail.com";

const socialLinks = [
  { icon: Github, href: "https://github.com/1xavierdev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/xavier-mckenzie", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="kicker justify-center mb-3">05 — Contact</p>
        <h2 className="section-title text-4xl md:text-5xl mb-6">Let's build something</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          I'm currently looking for a{" "}
          <span className="text-foreground font-medium">Summer 2026 software engineering internship</span>,
          and I'm always happy to connect with other developers and people in the industry. If you have
          an opportunity, want to collaborate, or just want to say hi — my inbox is open.
        </p>

        <a href={`mailto:${EMAIL}`} className="btn-primary text-base">
          <Mail size={18} /> Say hello
        </a>

        <div className="mt-12 flex justify-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink bg-card shadow-[2px_2px_0_0_hsl(var(--ink))] transition-all duration-150 hover:-translate-y-0.5 hover:text-primary"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
