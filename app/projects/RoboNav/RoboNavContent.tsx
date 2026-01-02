"use client";
export default function RoboNavContent() {
    return (
      <div className="space-y-10">
  
        <img
          src="/RoboNav/dashboard.png"
          className="rounded-xl border"
          alt="dashboard"
        />
  
        {/* TITLE */}
        <div>
        <div className = "flex flex-row space-x-5">
          <h2 className="text-3xl font-bold font-montserrat">
            Autonomous Navigation Dashboard
          </h2>
          </div>
          <p className="mt-3 text-gray-600">
          A lightweight React dashboard for monitoring and controlling the University Rover Challenge vehicle. It provides real-time telemetry, navigation, and control interfaces for testing and operation.          </p>
        </div>
  
        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {[
            "ROS2",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Material UI",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Project Context</h3>
          <p>
            The University Rover Challenge is a competition organized by the University Rover Challenge (URC) Foundation. The challenge is to develop a rover that can navigate autonomously to a destination and perform a task. 
            I worked on this project as a part of the Sensors & Teleoperations team of Georgia Tech RoboNav in preparation for the 2025 competition. The original dashboard that 
            was used to telepoerate the rover did not offer a personalized interface for the team to control the rover. We decided to develop a new dashboard that would be more user-friendly and would allow for more 
            control over the rover. 
          </p>
        </div>
          
        {/* FEATURES */}
        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
<li>Telemetry: IMU, GPS coordinates, and status heartbeats </li>
<li>Navigation: map view, waypoints, and coordinate display</li>
<li>Control Panel: modes, gamepad input, and host settings</li>
<li>Info Panels: command velocities and system status</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Collaborators</h3>
          <p>
            I worked in a team of 3 engineers in the Sensors & Telepoerations team of Georgia Tech RoboNav to develop this dashboard.
          </p>
        </div>
      </div>
    );
  }
  