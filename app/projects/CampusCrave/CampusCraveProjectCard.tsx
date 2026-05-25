"use client";

import { useState } from "react";
import Image from "next/image";
import { Crown } from "lucide-react";
import CampusCraveModal from "./CampusCraveModal";

export default function CampusCraveProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-amber-200/70 shadow-lg p-6 ring-1 ring-amber-200/50"
      >
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="flex items-center gap-2 text-slate-900 text-lg font-bold font-montserrat">
            Campus Crave
            <Crown
              aria-label="Featured new project"
              className="h-4 w-4 text-amber-500"
              strokeWidth={2.2}
            />
          </h3>
          <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-700">
            New
          </span>
        </div>
        <Image
          src="/CampusCrave/Page.png"
          alt="Campus Crave"
          width={1000}
          height={1000}
        />
        <p className="mt-2 text-sm text-gray-600">
          CampusCrave connects Georgia Tech student chefs with hungry students
          craving homemade food. It&apos;s a student-driven marketplace for
          discovering, ordering, and selling meals on campus. Fast, local, and
          built by students for students.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
          <span className="rounded-full bg-amber-100 px-3 py-1 font-bold text-amber-700">
            In Progress
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            Next.js
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            React
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            TypeScript
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            Tailwind CSS
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            Spring Boot
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            Spring Security
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            JWT
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            MySQL
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">
            Cloudinary
          </span>
        </div>
        <div className="pt-4 flex justify-end">
          <span className="text-sm text-neutral-500">Learn More -&gt;</span>
        </div>
      </div>
      {open && <CampusCraveModal onClose={() => setOpen(false)} />}
    </>
  );
}
