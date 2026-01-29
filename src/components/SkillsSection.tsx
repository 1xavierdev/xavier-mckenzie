const skills = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C"] },
  { category: "Frontend", items: ["React", "HTML/CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Tools & Other", items: ["Git", "GitHub", "VS Code", "Linux", "Data Structures", "Algorithms"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-card border border-border rounded-lg p-6 card-hover glow-border"
            >
              <h3 className="text-primary font-mono text-sm mb-4">
                {`// ${skillGroup.category}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
