import { Mail, Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/1xavierdev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/xavier-mckenzie", label: "LinkedIn" },
  { icon: Mail, href: "mailto:xaviermckenzie@example.com", label: "Email" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-primary font-mono text-sm mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-10">
          I'm currently seeking a Summer 2026 software engineering internship and always 
          open to connecting with fellow developers and industry professionals. Whether 
          you have an opportunity, want to collaborate on a project, or just want to say 
          hi, feel free to reach out!
        </p>
        
        <a
          href="mailto:xaviermckenzie@example.com"
          className="inline-block px-8 py-4 border border-primary text-primary rounded font-mono hover:bg-primary/10 transition-colors mb-12"
        >
          Say Hello
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
