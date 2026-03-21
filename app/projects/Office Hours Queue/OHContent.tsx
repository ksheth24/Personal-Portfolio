"use client";
export default function OHContent() {
    return (
      <div className="space-y-10">
  
        <img
          src="/OHQueue/TAPage.png"
          className="rounded-xl border"
          alt="homepage"
        />
  
        {/* TITLE */}
        <div>
        <div className = "flex flex-row space-x-5 ">
          <h2 className="text-3xl font-bold font-montserrat">
            ECE 2035 Office Hours Queue
          </h2>
          <a
            href="https://github.com/ksheth24/oh-queue-backend"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <img
              src = "/GitHub.png"
              className = "w-10 "
              alt = "githublogo"
            />
          </a>
          </div>
          <p className="mt-3 text-gray-600">
Full-stack queue management system for ECE 2035 office hours, which is the class I TA for. Ensures efficient student support through real-time queue tracking and TA-student interaction.
</p>
        </div>
  
        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {[
            "REST APIs",
            "SpringBoot",
            "SQL Database Design",
            "AWS RDS",
            "AWS Elastic Beanstalk",
            "React",
            "Tailwind CSS", 
            "Next.js"
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        

        {/* Problem I'm Solving 🛠️*/}
        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Problem I'm Solving 🛠️</h3>
          <p className="mb-4 text-gray-600">
            As a TA for ECE 2035, I noticed that managing office hours was challenging due to the lack of an organized system that ensures students 
            got the help they needed in a timely manner. Often students would arrive and find long wait times, leading to frustration and decreased productivity.
            The initial solution to this issue was creating a simple sign-in sheet using Google Forms, but this proved to be inefffective as it was difficult to track real-time updates and manage the queue efficiently.
            Furthermore, the interface students used to sign in was not user-friendly, leading to confusion and errors. For instance, students couldn't see what place they were in the queue. Below is a snapshot of the sign-in sheet that was used initially.
          </p>
          <img
                 src="/OHQueue/OriginalSolution.png"
                className="rounded-xl border"
                alt="Original Solution"
            />
        </div>
        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins ">Queue Management System Demo 🎥</h3>
          <p className="mb-4 text-gray-600">
            Below is a demo of the new and improved Office Hours Queue Management System that I developed to address these challenges. Students can <strong>easily join the queue</strong> and see how many people are in the queue, allowing them to<strong> gauge their expected wait time</strong>. TAs can <strong>efficiently manage the queue</strong>, call on students, and mark questions as resolved.
          </p>
          <iframe
  className="rounded-xl w-full aspect-video"
  src="https://www.youtube.com/embed/KB9wMeSZ7M4"
  title="OHQueue Demo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
        </div>
<div>
  <h3 className="mb-4 text-xl font-semibold font-poppins">Technical Implementation ⚙️</h3>
  <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
    {[
      { label: "Backend",        color: "blue",   desc: <>Built with <strong>SpringBoot</strong> and <strong>REST APIs</strong> using a three-tier layered architecture. The <strong>controller layer</strong> handles API requests, the <strong>service layer</strong> contains business logic, and the <strong>database layer</strong> manages SQL queries and persistence. Custom APIs handle queue operations — joining, sizing, fetching details, and updating question status.</> },
      { label: "Database",       color: "orange", desc: <>Powered by a locally hosted <strong>MySQL</strong> data store that persists all queue details for office hour analytics. A custom view surfaces queue information directly on the TA dashboard.</> },
      { label: "AWS Deployment", color: "yellow", desc: <>Database deployed to <strong>AWS RDS</strong> and the SpringBoot backend to <strong>AWS Elastic Beanstalk</strong> for on-demand access by ECE 2035 students. CI pipeline via <strong>GitHub Actions</strong> currently in progress.</> },
    ].map(({ label, color, desc }) => (
      <>
        <span key={label + "-badge"} className={`mt-0.5 h-fit rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium whitespace-nowrap
          ${color === "blue"   ? "border-blue-200 text-blue-600 bg-blue-50"         : ""}
          ${color === "orange" ? "border-orange-200 text-orange-600 bg-orange-50"   : ""}
          ${color === "yellow" ? "border-yellow-200 text-yellow-600 bg-yellow-50"   : ""}
        `}>{label}</span>
        <p key={label + "-desc"} className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </>
    ))}
  </div>
</div>
      </div>
    );
  }
  