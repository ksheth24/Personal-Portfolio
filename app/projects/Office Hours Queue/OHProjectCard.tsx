"use client";
import { useState } from "react";
import Image from "next/image";<span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Python</span>
import OHModal from "./OHModal";

export default function OHProjectCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div onClick={() => setOpen(true)} className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
            <h3 className = "text-slate-900 mb-2 text-lg font-bold font-montserrat">ECE 2035 Office Hours Queue</h3>
            <Image
                src={"/OHQueue/TAPage.png"}
                alt={"HomePage"}
                width={1000}
                height={1000}
            />
            <p className = "mt-2 text-sm text-gray-600">
Full-stack queue management system for ECE 2035 office hours, which is the class I TA for. Ensures efficient student support through real-time queue tracking and TA-student interaction.
           </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">REST APIs</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">SpringBoot</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">SQL Database Design</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">React</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Tailwind CSS</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Next.js</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        {open && <OHModal onClose={() => setOpen(false)} />}
        </>
    )
}