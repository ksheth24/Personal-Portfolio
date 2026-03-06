"use client";
export default function AgentContent() {
    return (
      <div className="space-y-5">
  
        <img
          src="/TPAgentProject.png"
          className="rounded-xl border"
          alt="Agent homepage"
        />
        {/* TITLE */}
        <div>
          <div className = "flex flex-row space-x-5">
          <h2 className="text-3xl font-bold font-montserrat">
            AI Travel Agent
          </h2>
          <a
            href="https://github.com/ksheth24/cf_ai_trip_agent"
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
          An intelligent travel planning agent that <strong> creates personalized itineraries, emails trip plans to users, and marks destinations and routes on Google Maps</strong>. Streamlines trip planning from generation to real-world navigation.
          </p>
        </div>
        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Agentic AI",
            "OpenAI API",
            "Agent Tooling",
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
          <div>
            <h3 className="mb-4 text-xl font-semibold font-poppins">Key Features ⭐</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">AI Chat Interface</h4>
                  <p className="text-sm text-gray-600">
                    Interactive chat interface that communicates with the AI travel planning agent.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">State & Chat History</h4>
                  <p className="text-sm text-gray-600">
                    Maintains conversation state and stores past chat interactions.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Responsive UI</h4>
                  <p className="text-sm text-gray-600">
                    Modern interface designed to work smoothly across devices and screen sizes.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">AI Trip Planning</h4>
                  <p className="text-sm text-gray-600">
                    Generates personalized travel itineraries based on user preferences and trip details.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Email Itineraries</h4>
                  <p className="text-sm text-gray-600">
                    Sends generated trip plans directly to you and your travel companions.
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold">Google Maps Integration</h4>
                  <p className="text-sm text-gray-600">
                    Provides Google Maps links for restaurants, activities, and travel routes.
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div>
  <h3 className="mb-3 text-xl font-semibold font-poppins">Custom Tools Created 🛠️</h3>
  <div className="flex flex-col gap-3">
    {[
      { name: "Plan Trip", api: "OpenAI API", color: "violet", desc: "Generates a day-by-day itinerary with activities and restaurant picks based on your dates, destination, and interests." },
      { name: "Send Email", api: "SendGrid API", color: "rose", desc: "Sends the generated itinerary to any number of travel buddies via SendGrid, dispatched from keshavsheth11@gmail.com." },
      { name: "Generate Map Links", api: "Google Maps", color: "emerald", desc: "Parses the itinerary and generates a unique Google Maps link for every activity and restaurant." },
    ].map((t) => (
      <div key={t.name} className="flex gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
        <div className="shrink-0 pt-0.5">
          <span className={`rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium
            ${t.color === "violet" ? "border-violet-200 text-violet-600 bg-violet-50" : ""}
            ${t.color === "rose"   ? "border-rose-200 text-rose-600 bg-rose-50"       : ""}
            ${t.color === "emerald"? "border-emerald-200 text-emerald-600 bg-emerald-50" : ""}
          `}>{t.api}</span>
        </div>
        <div>
          <p className="mb-0.5 font-semibold text-gray-900">{t.name}</p>
          <p className="text-sm text-gray-600">{t.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    );

    
  }
  
  