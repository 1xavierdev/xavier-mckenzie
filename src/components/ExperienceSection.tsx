import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Software Engineering Intern",
    company: "CGI",
    location: "Hartford, CT",
    period: "Jun 2026 – Present",
    highlights: [
      "Led Agile/Scrum delivery for a 3-engineer team building an AI-powered AWS Infrastructure Clone Agent on AWS Lambda and Bedrock Agents, owning the backlog across four two-week sprints.",
      "Built and shipped a Bedrock Agent automation pipeline in Python and boto3 on AWS Lambda that snapshot-mirrors S3 buckets to Google Cloud and Azure for disaster-recovery failover, now running in production.",
      "Diagnosed and resolved an IAM/UNIX permission issue by tracing role-assumption errors through CloudTrail, unblocking an FSx for NetApp ONTAP workstream that had been stuck since April, within my first two weeks.",
      "Designed an automated QA agent that replaced manual, file-by-file testing with a suite run against every Bedrock-deployed resource, syncing pass/fail status directly to Jira.",
      "Co-authored a technical white paper and presented cloud-native data fabric architecture to senior leadership.",
    ],
    tech: ["AWS Lambda", "Bedrock", "Python", "boto3", "Terraform", "Jira", "Agile"],
  },
  {
    role: "Direct Support Worker",
    company: "Connecticut Dept. of Developmental Services",
    location: "Hartford, CT",
    period: "Aug 2025 – Present",
    highlights: [
      "Support individuals with developmental disabilities, refining behavior and transition plans and escalating clinical observations to nursing staff.",
    ],
    tech: [],
  },
  {
    role: "Academic Support Assistant",
    company: "Manchester Community College",
    location: "Manchester, CT",
    period: "Jan 2023 – May 2023",
    highlights: [
      "Guided students through academic resources and coordinated scheduling across departments.",
    ],
    tech: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="kicker mb-3">02 / Experience</p>
        <h2 className="section-title mb-10">Where I've worked</h2>

        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.company} className="brut p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--ink))]">
                    <Briefcase size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {job.role} <span className="text-primary">@ {job.company}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{job.period}</span>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {job.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
