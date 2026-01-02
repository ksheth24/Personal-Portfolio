"use client";
import { useState } from "react";
import Image from "next/image";<span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Python</span>
import RoboNavModal from "./RoboNavModal";

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
            A lightweight React dashboard for monitoring and controlling the University Rover Challenge vehicle. It provides real-time telemetry, navigation, and control interfaces for testing and operation.            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">ROS2</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">React</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">TypeScript</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Tailwind CSS</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Material UI</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        {open && <RoboNavModal onClose={() => setOpen(false)} />}
        </>
    )
}