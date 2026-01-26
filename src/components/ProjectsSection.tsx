import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Project One",
    description:
      "A full-stack web application that helps users manage their tasks efficiently. Built with modern technologies and best practices in mind.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "An AI-powered application that analyzes data and provides insights. Features a clean dashboard with interactive visualizations.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const otherProjects = [
  {
    title: "CLI Tool",
    description: "A command-line tool that automates repetitive development tasks.",
    tech: ["Python", "Click"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Template",
    description: "A clean and minimal portfolio template for developers.",
    tech: ["React", "Tailwind"],
    github: "https://github.com",
  },
  {
    title: "API Wrapper",
    description: "A TypeScript wrapper for a popular third-party API.",
    tech: ["TypeScript", "Axios"],
    github: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Featured Projects</h2>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden card-hover">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <div className="bg-card border border-border rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 card-hover glow-border group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={40} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
