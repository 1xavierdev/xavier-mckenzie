import { Code2, Dumbbell, Users } from "lucide-react";

const facts = [
  { icon: Code2, label: "Focus", value: "Full-stack development" },
  { icon: Users, label: "Communities", value: "ColorStack · NSBE" },
  { icon: Dumbbell, label: "Outside code", value: "Fitness & personal growth" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">01 — About</p>
        <h2 className="section-title mb-10">Who I am</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Xavier — a Computer Science student at{" "}
              <span className="text-foreground font-medium">Central Connecticut State University</span>,
              concentrating in Software Engineering and graduating in{" "}
              <span className="text-foreground font-medium">Spring 2027</span>. My path into tech
              started with a simple question — <em>how does software actually work?</em> — and I've
              been building ever since to find out.
            </p>
            <p>
              Today I spend most of my time growing as a full-stack developer, working with
              React, Node.js, Java, and Python. I care about writing code that's readable and
              reliable, and I like the part of the job where a vague idea slowly becomes a real,
              working application.
            </p>
            <p>
              Away from the keyboard, I'm into fitness and personal growth, and I stay active with{" "}
              <span className="text-foreground font-medium">ColorStack</span> and the{" "}
              <span className="text-foreground font-medium">National Society of Black Engineers (NSBE)</span>,
              where I connect with other engineers and keep learning from the community.
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
