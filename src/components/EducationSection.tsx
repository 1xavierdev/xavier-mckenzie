import { GraduationCap, Award, Users, Cloud, BookOpen } from "lucide-react";

const schools = [
  {
    name: "Central Connecticut State University",
    degree: "B.S. in Computer Science, Software Engineering concentration",
    period: "Expected Dec 2027",
    location: "New Britain, CT",
  },
  {
    name: "Manchester Community College",
    degree: "A.A. in Computer Science",
    period: "2022 – 2025",
    location: "Manchester, CT",
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Software Engineering",
  "Discrete Mathematics",
  "Computer Organization",
  "Databases (SQL)",
];

const achievements = [
  {
    icon: Cloud,
    title: "SWE Intern at CGI",
    detail: "Shipping production AWS Bedrock automation and DevSecOps pipelines in Python.",
  },
  {
    icon: Award,
    title: "Dean's List",
    detail: "Recognized for academic performance in Fall 2022 and Fall 2023.",
  },
  {
    icon: Users,
    title: "ColorStack · NSBE",
    detail: "Active member of two communities of Black engineers and CS students.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/40 border-y-2 border-ink">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">03 / Education &amp; Achievements</p>
        <h2 className="section-title mb-10">Where I'm learning &amp; what I've earned</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {schools.map((s) => (
              <div key={s.name} className="brut p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--ink))]">
                    <GraduationCap size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.degree}</p>
                    <p className="mt-1 font-mono text-sm text-primary">{s.period}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="brut p-6">
              <p className="kicker mb-3"><BookOpen size={13} className="text-accent" /> Relevant coursework</p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {achievements.map((a) => (
              <div key={a.title} className="brut brut-hover p-5 flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-secondary">
                  <a.icon size={19} className="text-primary" />
                </span>
                <div>
                  <h4 className="font-display font-semibold">{a.title}</h4>
                  <p className="text-sm text-muted-foreground">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
