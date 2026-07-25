import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-5 gap-10 items-center">
        {/* Left: intro */}
        <div className="md:col-span-3">
          <p className="kicker mb-5 animate-fade-up">Computer Science · Class of 2027</p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight animate-fade-up-1">
            Xavier
            <br />
            McKenzie
          </h1>

          <p className="mt-5 text-xl md:text-2xl font-display text-muted-foreground animate-fade-up-2">
            I build software that solves real problems.
          </p>

          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed animate-fade-up-3">
            I'm a Computer Science student at Central Connecticut State University with a
            Software Engineering concentration, focused on full-stack development in Java,
            Python, and React. I like turning messy ideas into clean, working software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-4">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground animate-fade-up-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-mono">
              <MapPin size={15} /> Connecticut, USA
            </span>
            <a href="https://github.com/1xavierdev" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/xavier-mckenzie" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right: terminal-style card */}
        <div className="md:col-span-2 animate-fade-up-3">
          <div className="brut overflow-hidden">
            <div className="flex items-center gap-1.5 border-b-2 border-ink px-4 py-2.5 bg-secondary">
              <span className="h-3 w-3 rounded-full border-2 border-ink bg-accent" />
              <span className="h-3 w-3 rounded-full border-2 border-ink bg-primary" />
              <span className="h-3 w-3 rounded-full border-2 border-ink bg-card" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">xavier@dev ~ %</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p><span className="text-accent">const</span> xavier = {"{"}</p>
              <p className="pl-4">role: <span className="text-primary">"CS Student + SWE"</span>,</p>
              <p className="pl-4">school: <span className="text-primary">"CCSU '27"</span>,</p>
              <p className="pl-4">focus: <span className="text-primary">"Full-Stack"</span>,</p>
              <p className="pl-4">stack: [<span className="text-primary">"Java"</span>, <span className="text-primary">"Python"</span>, <span className="text-primary">"React"</span>],</p>
              <p className="pl-4">status: <span className="text-primary">"Open to Summer '26"</span>,</p>
              <p>{"}"};</p>
              <p className="mt-3 text-muted-foreground">// building, one commit at a time<span className="animate-blink">▌</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
