"use client";
import { useState } from "react";
import Image from "next/image";


export default function HPSProjectCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div onClick={() => setOpen(true)} className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
            <h3 className = "text-slate-900 mb-2 text-lg font-bold font-montserrat">Campus Crave</h3>
            <Image
                src={"/HPSProject.png"}
                alt={"HPS"}
                width={1000}
                height={1000}
            />
            <p className = "mt-2 text-sm text-gray-600">
                A full-stack hospital management platform designed to sreamline patient intake, medical staff workflows, and hospital record management
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Flask</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">REST APIs</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">React</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Node.js</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">JavaScript</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">CSS</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">SQL Database Design</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">MySQL</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        </>
    )
}