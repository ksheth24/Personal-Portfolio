"use client";
export default function HospitalContent() {
    return (
      <div className="space-y-10">
  
        <img
          src="/HPSOfficial.png"
          className="rounded-xl border"
          alt="Hospital homepage"
        />
  
        {/* TITLE */}
        <div>
        <div className = "flex flex-row space-x-5">
          <h2 className="text-3xl font-bold font-montserrat">
            Hospital Mangement System
          </h2>
          <a
            href="https://github.com/ksheth24/HospitalManagement"
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
            A full-stack hospital management platform designed to
            streamline patient intake, medical staff workflows,
            and secure hospital record management.
          </p>
        </div>
  
        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {[
            "Flask",
            "REST APIs",
            "React",
            "Node.js",
            "MySQL",
            "SQL Database Design",
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
          <h3 className="mb-3 text-xl font-semibold font-poppins">Tech Stack</h3>
          <div className = "flex flex-row space-x-2">
            <p className = "font-semibold"> Backend: </p>
            <p>  Python, Flask, MySQL (Locally Hosted), RESTful APIs </p>
          </div>
          <div className = "flex flex-row space-x-2">
            <p className = "font-semibold"> Frontend: </p>
            <p>  React, Node.js, JavaScript, CSS </p>
          </div>
        </div>
          
        {/* FEATURES */}
        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Patient intake and visit tracking</li>
            <li>Medical staff workflow management</li>
            <li>Normalized relational database schema</li>
            <li>RESTful backend for scalable frontend integration</li>
          </ul>
        </div>
  
        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Database Design</h3>
          <p className="mb-4 text-gray-600">
            The backend MySQL store was build in a staged process, stemming from EERD diagramming
            uesd to maintain clear relationships within the hospital system.
            <img
                 src="/EERD.png"
                className="rounded-xl border"
                alt="Hospital homepage"
            />
            The following steps included schema mapping, as well as normalization and table creation with strict
            foreign-key relationships to maintain data integrity
            across patients, visits, staff, and medical records.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins">Use Cases </h3>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <p className="font-bold">Views</p>
            <li> Get an overview of patient room assignments: displays key relationships between patients, and their medical staff, and the departments overseeing their care.</li>
            <li>View an overview of patients appointments along with recorded symptoms.</li>
            <li>See detailed information about medical staff.</li>
            <li>Fetch information about every department in the hospital.</li>
            <li>View of the outstanding charges for all the patients in the hospital.</li>
          </ul>
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <p className="font-bold">Stored Procedures</p>
            <li> Add a new patient to the management system.</li>
            <li>Record a new symptom for a patient, which will be used in an appointment.</li>
            <li>Book a new appointment for a patient at a specific time and date.</li>
            <li>Place a new order (lab work or perscription) for a patient as ordered by their doctor.</li>
            <li>Add a staff member to a department.</li>
            <li>Add funds to an existing patient.</li>
            <li>Assign a nurse to a room, ensuring they are not over-booked.</li>
            <li>Assign a patient to a room in the hospital, and ensures that the room is currently unoccupied.</li>
            <li>Assign a doctor to an existing appointment.</li>
            <li>Assign a staff member as the manager of a department.</li>
            <li>Remove a patient from a given room.</li>
            <li>Remove a patient from the hospital management system.</li>
            <li>Remove a staff member from a department.</li>
            <li>Complete an appointment given its date, time, and patient SSN.</li>
            <li>Complete an appointment given its date, time, and patient SSN.</li>
          </ul>
        </div>

        
      </div>
    );
  }
  