"use client";

export default function CampusCraveContent() {
  return (
    <div className="space-y-8">
      <img
        src="/CampusCrave/Page.png"
        className="rounded-xl border"
        alt="CampusCrave marketplace page"
      />

      <div>
        <h2 className="text-3xl font-bold font-montserrat">CampusCrave</h2>
        <p className="mt-3 text-gray-600">
          CampusCrave is a student-run food marketplace built for Georgia Tech
          students to discover homemade meals, reserve orders, and sell food
          locally on campus. The platform handles everything from account
          creation and seller verification to order tracking and real-time
          status updates — turning informal student food exchanges into a
          structured, trust-based experience.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "MySQL",
          "Cloudinary",
        ].map((tech) => (
          <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold font-poppins">
          What It Supports
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              title: "Meal Discovery & Browsing",
              desc: "A marketplace-style browse page lets students filter listings by location and price, with each card showing a photo, price badge, and pickup spot.",
            },
            {
              title: "Seller Verification Flow",
              desc: "Students apply for seller status by submitting their name, student ID, and a pledge to food safety guidelines. Verified sellers get access to a dedicated seller portal.",
            },
            {
              title: "Listing Management",
              desc: "Verified sellers can create, edit, and manage meal listings — including title, description, ingredients, price, pickup location, and a Cloudinary-hosted photo.",
            },
            {
              title: "Reservation & Order Tracking",
              desc: "Buyers reserve meals in one tap. Orders move through a defined status lifecycle: Reserved → Confirmed → Preparing → Ready for Pickup → Completed, with cancellation supported on both sides.",
            },
            {
              title: "Seller Order Dashboard",
              desc: "Sellers see incoming reservations and can advance or cancel orders. Buyers have a matching view to track everything they've reserved, active and past.",
            },
            {
              title: "Email Verification & Auth",
              desc: "Registration triggers a verification email via Gmail SMTP. JWT tokens are issued as HttpOnly cookies, keeping sessions stateless and secure.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
            >
              <h4 className="mb-1 font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xl font-semibold font-poppins">
          Project Context
        </h3>
        <p className="text-gray-600">
          The idea comes from a common campus gap: students often want
          affordable, homemade, nearby food, while other students have the
          ability to cook and sell meals but lack a dedicated place to reach
          buyers. CampusCrave turns that exchange into a structured marketplace
          — with verified sellers, photo listings, campus pickup locations, and
          a full order pipeline — built entirely around the constraints of
          college life.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-semibold font-poppins">
          Technical Implementation
        </h3>
        <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-4">
          {[
            {
              label: "Frontend",
              color: "emerald",
              desc: "Built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The app uses the App Router with distinct route groups for buyers, sellers, and auth flows, including pages for browsing, listing detail, order tracking, and the seller dashboard.",
            },
            {
              label: "Backend",
              color: "blue",
              desc: "A Spring Boot 3 REST API with Spring Security handles authentication, listing management, and reservations. JWT tokens are issued as HttpOnly cookies and validated through a custom filter on every protected route. Input validation, CORS, and a global exception handler are all configured.",
            },
            {
              label: "Database",
              color: "amber",
              desc: "MySQL stores users, listings, and reservations via Spring Data JPA. The reservation model tracks status as an enum with eight possible states and timestamps for creation and last update.",
            },
            {
              label: "Media",
              color: "violet",
              desc: "Listing photos are uploaded and served through Cloudinary, keeping image storage out of the database and making URLs directly usable in the frontend without additional serving logic.",
            },
          ].map(({ label, color, desc }) => (
            <>
              <span
                key={`${label}-badge`}
                className={`mt-0.5 h-fit whitespace-nowrap rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium
                  ${color === "emerald" ? "border-emerald-200 bg-emerald-50 text-emerald-600" : ""}
                  ${color === "blue" ? "border-blue-200 bg-blue-50 text-blue-600" : ""}
                  ${color === "amber" ? "border-amber-200 bg-amber-50 text-amber-600" : ""}
                  ${color === "violet" ? "border-violet-200 bg-violet-50 text-violet-600" : ""}
                `}
              >
                {label}
              </span>
              <p
                key={`${label}-desc`}
                className="text-sm leading-relaxed text-gray-600"
              >
                {desc}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}