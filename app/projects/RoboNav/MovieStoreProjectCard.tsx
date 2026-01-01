"use client";
import { useState } from "react";
import Image from "next/image";<span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Python</span>

export default function RoboNavProjectCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div onClick={() => setOpen(true)} className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
            <h3 className = "text-slate-900 mb-2 text-lg font-bold font-montserrat">Autonomous Navigation Dashboard</h3>
            <Image
                src={"/RoboNav/dashboard.png"}
                alt={"dashboard"}
                width={1000}
                height={1000}
            />
            <p className = "mt-2 text-sm text-gray-600">
            Movie Store is a full-stack Django app for browsing movies, writing reviews, and buying films via a simple shopping cart.            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Django</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Python</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">MySQL</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        </>
    )
}