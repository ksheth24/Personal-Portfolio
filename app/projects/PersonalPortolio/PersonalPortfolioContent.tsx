"use client";
export default function PersonalPortfolioContent() {
    return (
      <div className="space-y-10">
  
        <img
          src="/PersonalPortfolio/Home.png"
          className="rounded-xl border"
          alt="homepage"
        />
  
        {/* TITLE */}
        <div>
        <div className = "flex flex-row space-x-5">
          <h2 className="text-3xl font-bold font-montserrat">
            Personal Portfolio
          </h2>
          <a
            href="https://github.com/ksheth24/Personal-Portfolio"
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
An interactive portfolio showcasing projects, experience, and skills with responsive, animated project cards, searchable/filterable views, and detailed modal previews. Focused on clarity and accessibility, it delivers fast navigation, and convenient contact/resume access          
</p>
        </div>
  
        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Next.js",
            "Vercel"
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
          
        {/* FEATURES */}
        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
<li>
  <span className="font-bold">Sleek Home Screen</span>{" "}
Hero section with a short introduction, rotating highlight text, and quick links to projects and resume; sets the visual tone and primary call-to-action. Emphasis on ease of navigation between pages. 
</li>
<img
  src = "/PersonalPortfolio/Home.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "Home Page"
/>

<li>
  <span className="font-bold">
    Projects Overview
  </span>{" "}
Grid of interactive project cards with short summaries and affordances to open detailed views. Each project overview is accompanied with details on technologies used.
</li>
<img
  src = "/PersonalPortfolio/ProjectsPage.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "Projects Page"
/>
<li>
  <span className="font-bold">
    Project Details
  </span>{" "}
  Expanded project presentation that users can navigate to from the projects page with key features, screenshots, and links (demo / repo); used for in-depth context without leaving the projects list.
</li>
<img
  src = "/PersonalPortfolio/ProjectDetail.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>
<li className="">
  <span className="font-bold">
    Experience Page
  </span>{" "}
  Chronological timeline or list of roles and accomplishments with company/project highlights and concise impact statements.
</li>
<img
  src = "/PersonalPortfolio/Experience.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>

<li className="">
  <span className="font-bold">
    Resume/Contact Page
  </span>{" "}
Printable / downloadable resume view plus a concise summary of skills and certifications; includes a clear download or open-resume action.
</li>
<img
  src = "/PersonalPortfolio/Resume.png"
  className = "w-200 mx-auto rounded-xl"
  alt = "MoviePage"
/>
          </ul>
        </div>
      </div>
    );
  }
  