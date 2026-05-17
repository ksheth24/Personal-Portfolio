"use client";
import { useState } from "react";
import Image from "next/image";<span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Python</span>
import MastermindModal from "./MastermindModal";

export default function MastermindProjectCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div onClick={() => setOpen(true)} className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
            <h3 className = "text-slate-900 mb-2 text-lg font-bold font-montserrat">Embedded AI/ML Mastermind Solver</h3>
            <Image
                src={"/Mastermind/homescreen.png"}
                alt={"HomePage"}
                width={1000}
                height={1000}
            />
            <p className = "mt-2 text-sm text-gray-600">
            A real-time embedded AI system that solves Mastermind. The system runs entirely on an ESP32, combining wireless communication, machine learning, interrupts, and hardware-aware C++ design.            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">C++</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">ESP32</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">FreeRTOS</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">NimBLE</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Bluetooth</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Edge Impulse</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">TinyML</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Interrupts</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        {open && <MastermindModal onClose={() => setOpen(false)} />}
        </>
    )
}