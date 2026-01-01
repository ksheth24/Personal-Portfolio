import Card from "../Card";

interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "Verizon",
        role: "Software Engineering Intern",
        date: "Jun 2025 - Aug 2025",
        description: [
            "Deployed Agentic AI framework (kagent) on AWS EKS (Kubernetes) to provide platform engineers with real-time cluster insights & analytics, improving troubleshooting speed by >60% for Verizon’s API gateway ",
            "Engineered a custom Model Context Protocol (MCP) in Python (FastAPI) to expose Verizon microservices to AI Agents via Server-Sent Events (SSE) ",
            "Developed a Flask-based microservice leveraging Verizon’s internal SMTP server, enabling AI Agents to send emails for early issue detection & incident resolution ",
            "Integrated Agent-to-Agent (A2A) communication with a custom Python Slack Bolt app, allowing engineers to query and interact with Kubernetes clusters directly from Slack ",
            "Dockerized & deployed these 3 production-ready applications to Kubernetes, allowing for direct interaction with AI Agent",
        ],
        technologies: ["Agentic AI", "MCP", "Kubernetes", "Docker", "Flask", "FastAPI", "Python", "EC2"],
    },
    {
        company: "Smart Stadium",
        role: "Applications Team Lead",
        date: "Jan 2025 - Present",
        description: [
            "Team lead for 12-person app development team; conduct code reviews, coordinate agile workflow, execute feature planning ",
            "Working on full stack integration for SwiftUI iOS app that uses sensors & stadium analytics to improve engagement for 50,000+ fans during Georgia Tech football game day",
            "Oversee SwiftUI iOS development lifecycle, managing feature planning, frontend-backend contract ",
            "Utilizing SpringBoot to develop REST APIs for user authentication, registration, profiles, and a new prediction game feature",
            "Built and tested a transactional message-delivery API with JWT-based authentication and relational integrity validation, resolving cross-table foreign-key issues and enhancing user communication reliability by 30%",
            "Implementing new Prediction Game feature to boost fan engagement: creating entity, repository, and controller layers to support RESTful access and refactoring backend databases to handle user inputs ",
        ],
        technologies: ["SpringBoot", "Java", "MySQL", "REST APIs", "Postman", "System Architecture Design", "Project Management"],
    },
    {
        company: "Georgia Tech School of Electrical and Computer Engineering",
        role: "Computer Architecture TA",
        date: "Sept 2025 - Present",
        description: [
            "Led office hours to guide students through C programming, assembly debugging, Linux development tools, and performance optimization",
            "Supported students in design-oriented projects involving RISC-V, Mbed/uLCD hardware, and debugging in VS Code",
            "Worked with team of ~20 TAs to grade C & RISC-V assignments, tests, and projects ",
        ],
        technologies: ["C", "C++", "RISC-V", "Assembly Programming", "Embedded Systems"],
    },
];

function ExperienceCard() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200">
            <div className="flex justify-center pt-12">
                <Card />
            </div>
            
            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-7xl text-slate-900 font-montserrat font-bold mb-4">
                        My Experience
                    </h1>
                    <p className="text-xl text-slate-700 font-poppins">
                        A journey through my professional career
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-sky-400 to-blue-300 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex items-start gap-8">
                                {/* Timeline dot */}
                                <div className="hidden md:flex relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 shadow-lg flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    </div>
                                </div>

                                {/* Experience Card */}
                                <div className="flex-1 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-8 ring-1 ring-black/10">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h2 className="text-3xl font-montserrat font-bold text-slate-900 mb-1">
                                                {exp.role}
                                            </h2>
                                            <h3 className="text-xl font-poppins font-semibold text-blue-600">
                                                {exp.company}
                                            </h3>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-poppins font-semibold text-sm">
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {exp.description.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700 font-poppins">
                                                <span className="text-blue-500 mt-1.5">▸</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                                        {exp.technologies.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-poppins font-semibold text-neutral-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceCard;
