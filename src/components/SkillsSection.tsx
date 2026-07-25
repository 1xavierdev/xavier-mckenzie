const skills = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "C"] },
  { category: "Cloud & AI", items: ["AWS Lambda", "S3", "Bedrock Agents", "EventBridge", "SNS", "IAM", "Terraform", "DevSecOps", "CI/CD", "REST APIs", "LLM Automation"] },
  { category: "Frameworks", items: ["React", "Node.js", "HTML", "CSS"] },
  { category: "Developer Tools", items: ["Git / GitHub", "MySQL", "Jira", "Agile / Scrum"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">04 / Skills</p>
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
