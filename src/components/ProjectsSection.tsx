import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    emoji: "🛡️",
    title: "S3 Public-Access Misconfiguration Detector",
    status: "In Progress",
    description:
      "An automated scanner that detects public S3 bucket misconfigurations and fires real-time SNS alerts. It's designed with auto-remediation behind dry-run guardrails to prevent unintended production changes, and deploys through modular, reusable Terraform.",
    tech: ["Python", "boto3", "AWS Lambda", "EventBridge", "SNS", "Terraform"],
    github: "https://github.com/1xavierdev",
    live: "",
  },
  {
    emoji: "💊",
    title: "Medicine Reminder System",
    status: "Featured",
    description:
      "A Java desktop app for managing medication schedules, with a Binary Search Tree, queue, and linked list all implemented from scratch. Built with test-driven development to keep the data structures correct and reliable.",
    tech: ["Java", "Custom Data Structures", "TDD", "OOP"],
    github: "https://github.com/1xavierdev",
    live: "",
  },
];

const otherProjects = [
  {
    title: "Personal Portfolio Website",
    description: "This site. Designed and shipped with React and Node.js, deployed on Netlify.",
    tech: ["React", "Node.js", "Netlify"],
    github: "https://github.com/1xavierdev/xavier-mckenzie",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">05 / Projects</p>
        <h2 className="section-title mb-10">Things I've built</h2>

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
                <p className="font-mono text-xs text-accent mb-1">{project.status}</p>
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
