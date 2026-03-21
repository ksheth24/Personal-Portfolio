"use client";

export default function HospitalContent() {

  const views = [
    "Get an overview of patient room assignments showing relationships between patients, staff, and departments.",
    "View patient appointments alongside recorded symptoms.",
    "See detailed information about medical staff.",
    "Fetch information about every department in the hospital.",
    "View outstanding patient charges across the hospital."
  ];

  const procedures = [
    "Add a new patient to the system.",
    "Record a new symptom for a patient.",
    "Book a new appointment for a patient.",
    "Place a new order (lab work or prescription) for a patient.",
    "Add a staff member to a department.",
    "Add funds to a patient account.",
    "Assign a nurse to a room without overbooking.",
    "Assign a patient to an available hospital room.",
    "Assign a doctor to an existing appointment.",
    "Assign a department manager.",
    "Remove a patient from a room.",
    "Remove a patient from the system.",
    "Remove a staff member from a department.",
    "Complete an appointment using date, time, and patient SSN."
  ];

  return (
    <div className="space-y-10">

      <img
        src="/HPSOfficial.png"
        className="rounded-xl border"
        alt="Hospital homepage"
      />

      {/* TITLE */}
      <div>
        <div className="flex flex-row space-x-5 items-center">
          <h2 className="text-3xl font-bold font-montserrat">
            Hospital Management System
          </h2>

          <a
            href="https://github.com/ksheth24/HospitalManagement"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/GitHub.png"
              className="w-10 hover:scale-110 transition"
              alt="githublogo"
            />
          </a>
        </div>

        <p className="mt-3 text-gray-600">
          A full-stack hospital management platform designed to
          streamline patient intake, medical staff workflows,
          and secure hospital record management.
        </p>
      </div>

      {/* FEATURES */}
      <div>
        <h3 className="mb-4 text-xl font-semibold font-poppins">
          Key Features ⭐
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold">
              Patient intake and visit tracking
            </h4>
            <p className="text-sm text-gray-600">
              Registers new patients and logs symptoms and treatments,
              giving staff a full picture of each patient's care timeline.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold">
              Medical staff workflow management
            </h4>
            <p className="text-sm text-gray-600">
              Manages doctor and nurse assignments, schedules, and
              patient loads to keep clinical operations running smoothly.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold">
              Normalized relational database schema
            </h4>
            <p className="text-sm text-gray-600">
              Built on a fully normalized MySQL schema to eliminate
              redundancy and maintain strong data integrity.
            </p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <h4 className="font-semibold">RESTful backend</h4>
            <p className="text-sm text-gray-600">
              Flask-powered API layer separating business logic
              from the frontend with reliable CRUD operations.
            </p>
          </div>

        </div>
      </div>

      <div>
        <h3 className="mb-6 text-xl font-semibold font-poppins">
          Database Design 🧱
        </h3>
        <p className="mt-3 text-gray-600">
          The backend <strong>MySQL store </strong>was build in a staged process, stemming from <strong>EERD diagramming </strong>used to maintain clear relationships within the hospital system.
        </p>
        <img
          src = "/EERD.png"
          className = "w-200 mx-auto rounded-xl"
          alt = "Home Page"
        />
        <p className="mt-3 text-gray-600">
          The following steps included <strong>schema mapping</strong>, as well as <strong>normalization </strong>and table creation with <strong>strict foreign-key relationships </strong>to maintain <strong>data integrity </strong>across patients, visits, staff, and medical records.
        </p>
      </div>

      {/* USE CASES */}
      <div>
        <h3 className="mb-6 text-xl font-semibold font-poppins">
          Use Cases 👥
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {/* VIEWS CARD */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              👁 Views
            </h4>

            <ul className="space-y-3">
              {views.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
                  <span className="text-blue-500 mt-[2px]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PROCEDURES CARD */}
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              ⚙️ Stored Procedures
            </h4>

            <ul className="space-y-3">
              {procedures.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
                  <span className="text-green-500 mt-[2px]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

              <div>
          <h3 className="mb-3 text-xl font-semibold font-poppins ">Hospital Management System Demo 🎥</h3>
          <p className="mb-4 text-gray-600">
            Below is a demo of the new and improved Hospital Management System that I developed.
          </p>
          <iframe
  className="rounded-xl w-full aspect-video"
  src="https://www.youtube.com/embed/R8Y-ZJivDdA?si=JTLR-A6oU1raoUHM"
  title="Hospital Management System"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
        </div>

    </div>
  );
}