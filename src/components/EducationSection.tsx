import { GraduationCap, Award, Users, Rocket, BookOpen } from "lucide-react";

/*
  Xavier — the achievements below are written from what's on your current site.
  Swap in real specifics anytime (GPA, Dean's List semesters, hackathon placements,
  scholarships, leadership roles). Just edit the `achievements` array.
*/
const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Discrete Mathematics",
  "Computer Organization",
  "Software Engineering",
  "Web Development",
];

const achievements = [
  {
    icon: Users,
    title: "ColorStack Member",
    detail: "Active in a national community of Black & Latinx Computer Science students.",
  },
  {
    icon: Award,
    title: "NSBE Member",
    detail: "National Society of Black Engineers — networking, mentorship, and professional growth.",
  },
  {
    icon: Rocket,
    title: "Shipped 5+ Projects",
    detail: "Built and published personal projects across Java, Python, and the web stack.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/40 border-y-2 border-ink">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">02 — Education &amp; Achievements</p>
        <h2 className="section-title mb-10">Where I'm learning &amp; what I've earned</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="brut p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--ink))]">
                <GraduationCap size={24} />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">Central Connecticut State University</h3>
                <p className="text-muted-foreground">B.S. in Computer Science — Software Engineering concentration</p>
                <p className="mt-1 font-mono text-sm text-primary">Expected Spring 2027</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="kicker mb-3"><BookOpen size={13} className="text-accent" /> Relevant coursework</p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
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
