import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6">
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up-delay-1">
          Xavier McKenzie.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-up-delay-2">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 animate-fade-up-delay-3">
          I'm a computer science student passionate about building exceptional digital 
          experiences. Currently focused on learning full-stack development and creating 
          projects that make a difference.
        </p>
        <div className="flex gap-4 animate-fade-up-delay-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-foreground rounded font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-slow">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;
