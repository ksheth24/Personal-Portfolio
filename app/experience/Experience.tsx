import { BriefcaseBusiness, CalendarDays, CheckCircle2, Code2 } from "lucide-react";
import Image from "next/image";
import Card from "../Card";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  type: string;
  focus: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Goldman Sachs",
    role: "Software Engineering Intern",
    date: "Jun 2026 - Present",
    type: "Internship",
    focus: "Incoming Summer 2026",
    description: ["Incoming Summer 2026."],
    technologies: ["Software Engineering"],
  },
  {
    company: "Verizon",
    role: "Software Engineering Intern",
    date: "Jun 2025 - Aug 2025",
    type: "Internship",
    focus: "Agentic AI infrastructure",
    description: [
      "Deployed an Agentic AI framework with kagent on AWS EKS to give platform engineers real-time Kubernetes cluster insights, improving troubleshooting speed by more than 60% for Verizon's API gateway.",
      "Engineered a custom Model Context Protocol server in Python and FastAPI to expose Verizon microservices to AI agents through Server-Sent Events.",
      "Developed a Flask microservice using Verizon's internal SMTP server so AI agents could send emails for early issue detection and incident resolution.",
      "Integrated Agent-to-Agent communication with a custom Python Slack Bolt app, letting engineers query and interact with Kubernetes clusters directly from Slack.",
      "Dockerized and deployed three production-ready applications to Kubernetes for direct interaction with the AI agent workflow.",
    ],
    technologies: [
      "Agentic AI",
      "MCP",
      "Kubernetes",
      "Docker",
      "Flask",
      "FastAPI",
      "Python",
      "EC2",
    ],
  },
  {
    company: "Smart Stadium",
    role: "Applications Team Lead",
    date: "Jan 2025 - Present",
    type: "Leadership",
    focus: "Mobile app and backend systems",
    description: [
      "Led end-to-end development of a full-stack SwiftUI iOS app from planning to beta release, architecting systems to support 50,000+ concurrent game-day users ",
      "Planned and delivered a major release for the Georgia Tech Alumni Association adding 21 features, improving scalability and user engagement ",
      "Designed and implemented Spring Boot REST APIs for authentication, user profiles, messaging, and prediction systems ",
      "Built a transactional messaging system with JWT auth, enabling group chat, read receipts, and reliable delivery guarantees, improving communication reliability ",
      "Refactored relational data models to support social features and high-throughput user interactions ",
      "Defining integration workflows with ML systems to support real-time game-day personalization ",
    ],
    technologies: [
      "Spring Boot",
      "Java",
      "MySQL",
      "REST APIs",
      "Postman",
      "System Design",
      "Project Management",
    ],
  },
  {
    company: "Georgia Tech School of Electrical and Computer Engineering",
    role: "Computer Architecture TA",
    date: "Sept 2025 - Present",
    type: "Teaching",
    focus: "Systems, C, and computer architecture",
    description: [
      "Lead office hours to guide students through C programming, assembly debugging, Linux development tools, and performance optimization.",
      "Support students in design-oriented projects involving RISC-V, Mbed and uLCD hardware, and debugging in VS Code.",
      "Work with a team of about 20 TAs to grade C and RISC-V assignments, tests, and projects.",
    ],
    technologies: ["C", "C++", "RISC-V", "Assembly", "Embedded Systems"],
  },
];

function ExperienceCard() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#e0f2fe_45%,#dbeafe_100%)] pb-24">
      <div className="flex justify-center pt-12">
        <Card />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur">
              <BriefcaseBusiness className="h-4 w-4 text-sky-700" />
              Experience
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight text-slate-950 font-montserrat sm:text-6xl">
              Engineering work across AI, backend systems, and teaching.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 font-poppins">
              A focused look at the teams I have worked with, the systems I have
              helped build, and the technical areas I keep coming back to.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-white/50 blur-sm" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-3 shadow-xl ring-1 ring-slate-900/5 backdrop-blur">
              <Image
                src="/Experience/me.png"
                alt="Keshav Sheth"
                width={700}
                height={900}
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-slate-300 md:block" />

          <div className="space-y-7">
            {experiences.map((exp, index) => (
              <article key={exp.company} className="relative md:pl-12">
                <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm md:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-700" />
                </div>

                <div className="group overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-lg ring-1 ring-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="grid gap-0 lg:grid-cols-[0.95fr_1.55fr]">
                    <div className="border-b border-slate-200 bg-slate-950 p-7 text-white lg:border-b-0 lg:border-r">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100">
                          {exp.type}
                        </span>
                        <span className="text-sm text-slate-300">0{index + 1}</span>
                      </div>

                      <h2 className="text-2xl font-bold leading-tight font-montserrat">
                        {exp.role}
                      </h2>
                      <p className="mt-2 text-lg font-semibold text-sky-200 font-poppins">
                        {exp.company}
                      </p>

                      <div className="mt-6 space-y-3 text-sm text-slate-300">
                        <p className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-sky-300" />
                          {exp.date}
                        </p>
                        <p className="flex items-start gap-2">
                          <Code2 className="mt-0.5 h-4 w-4 text-sky-300" />
                          <span>{exp.focus}</span>
                        </p>
                      </div>
                    </div>

                    <div className="p-7">
                      <ul className="space-y-3">
                        {exp.description.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-6 text-slate-700 font-poppins"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceCard;
