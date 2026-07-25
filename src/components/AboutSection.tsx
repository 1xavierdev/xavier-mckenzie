import { Cloud, Users, GitBranch } from "lucide-react";

const facts = [
  { icon: Cloud, label: "Focus", value: "Cloud, AI & DevSecOps" },
  { icon: GitBranch, label: "Currently", value: "SWE Intern at CGI" },
  { icon: Users, label: "Communities", value: "ColorStack · NSBE" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">01 / About</p>
        <h2 className="section-title mb-10">Who I am</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Xavier, a software engineer and Computer Science student at{" "}
              <span className="text-foreground font-medium">Central Connecticut State University</span>,
              concentrating in Software Engineering and graduating in{" "}
              <span className="text-foreground font-medium">December 2027</span>. I started my degree
              at Manchester Community College, earned my associate's, and made the Dean's List along the way.
            </p>
            <p>
              These days I'm a{" "}
              <span className="text-foreground font-medium">Software Engineering Intern at CGI</span>, where I
              work across AWS building Bedrock agent automation, disaster-recovery pipelines, and DevSecOps
              tooling in Python. I've shipped code that runs in production, traced tricky IAM and permission
              bugs through CloudTrail, and presented cloud architecture to senior leadership.
            </p>
            <p>
              What I enjoy most is the moment a messy infrastructure problem becomes a clean, automated system
              that just works. Outside of that, I stay active with{" "}
              <span className="text-foreground font-medium">ColorStack</span> and the{" "}
              <span className="text-foreground font-medium">National Society of Black Engineers (NSBE)</span>,
              and I'm always learning from that community.
            </p>
          </div>

          <div className="space-y-4">
            {facts.map((f) => (
              <div key={f.label} className="brut brut-hover p-4 flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-secondary">
                  <f.icon size={18} className="text-primary" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{f.label}</p>
                  <p className="font-medium">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
