import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    emoji: "💊",
    title: "Medicine Reminder System",
    description:
      "A Java application that helps users manage medication schedules. It uses Binary Search Trees for efficient storage and lookup and Queues to manage reminder notifications — with add/remove, scheduling, and dosage-history tracking.",
    tech: ["Java", "Binary Search Trees", "Queues", "OOP"],
    github: "https://github.com/1xavierdev",
    live: "",
  },
  {
    emoji: "🏨",
    title: "Hotel Reservation System",
    description:
      "A hotel booking system built on solid object-oriented principles. Users can search available rooms, make and manage reservations, and handle check-in / check-out, with data persisted between sessions.",
    tech: ["Java", "OOP", "File I/O", "Data Structures"],
    github: "https://github.com/1xavierdev",
    live: "",
  },
];

const otherProjects = [
  {
    title: "Personal Finance Tracker",
    description: "Tracks income, expenses, and savings goals with simple budget analysis.",
    tech: ["Python", "File I/O"],
    github: "https://github.com/1xavierdev",
  },
  {
    title: "Portfolio Website",
    description: "This site — hand-built with React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/1xavierdev/xavier-mckenzie",
  },
  {
    title: "Algorithm Implementations",
    description: "A growing collection of sorting, searching, and graph algorithms.",
    tech: ["Java", "Python", "Algorithms"],
    github: "https://github.com/1xavierdev",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/40 border-y-2 border-ink">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">04 — Projects</p>
        <h2 className="section-title mb-10">Things I've built</h2>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {featuredProjects.map((project) => (
            <div key={project.title} className="brut brut-hover flex flex-col overflow-hidden">
              <div className="flex items-center justify-between border-b-2 border-ink bg-card px-5 py-3">
                <span className="text-2xl">{project.emoji}</span>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub repo">
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Live site">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="font-mono text-xs text-accent mb-1">Featured</p>
                <h3 className="font-display text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other */}
        <h3 className="font-display text-lg font-semibold mb-6">More projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="brut brut-hover p-5 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <Github className="text-primary" size={24} />
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
