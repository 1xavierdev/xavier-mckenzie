const skills = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C"] },
  { category: "Frontend", items: ["React", "HTML / CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Tools & CS Core", items: ["Git", "GitHub", "VS Code", "Linux", "Data Structures", "Algorithms"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">03 — Skills</p>
        <h2 className="section-title mb-10">Tools I work with</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="brut brut-hover p-6">
              <h3 className="font-mono text-sm text-accent mb-4">{`// ${group.category}`}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
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
