"use client";
import { useState } from "react";
import Image from "next/image";<span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Python</span>
import PersonalPortfolioModal from "./PersonalPortfolioModal";

export default function PersonalPortfolioProjectCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div onClick={() => setOpen(true)} className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
            <h3 className = "text-slate-900 mb-2 text-lg font-bold font-montserrat">Personal Portfolio</h3>
            <Image
                src={"/PersonalPortfolio/Home.png"}
                alt={"HomePage"}
                width={1000}
                height={1000}
            />
            <p className = "mt-2 text-sm text-gray-600">
An interactive portfolio showcasing projects, experience, and skills with responsive, animated project cards, searchable/filterable views, and detailed modal previews. Focused on clarity and accessibility, it delivers fast navigation, and convenient contact/resume access
           </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">React</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">TypeScript</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Tailwind CSS</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Next.js</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Vercel</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        {open && <PersonalPortfolioModal onClose={() => setOpen(false)} />}
        </>
    )
}