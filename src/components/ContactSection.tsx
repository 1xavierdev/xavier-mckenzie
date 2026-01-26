import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-primary font-mono text-sm mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-10">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question, want to collaborate on a project, or just 
          want to say hi, I'll try my best to get back to you!
        </p>
        
        <a
          href="mailto:your.email@example.com"
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
