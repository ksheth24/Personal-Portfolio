"use client";
import { useState } from "react";
import Image from "next/image";
import AgentModal from "./AgentModal";

export default function TPAgentProjectCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div onClick={() => setOpen(true)} className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
            <h3 className = "font-montserrat text-slate-900 mb-2 text-lg font-bold">AI Travel Agent</h3>
            <Image
                src={"/TPAgentProject.png"}
                alt={"TPAgent"}
                width={1000}
                height={1000}
            />
            <p className = "mt-2 text-sm text-gray-600">
                An intelligent travel planning agent that creates personalized itineraries, emails trip plans to users, and marks destinations and routes on Google Maps. Streamlines trip planning from generation to real-world navigation.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">React</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">TypeScript</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Node.js</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Agentic AI</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">OpenAI API</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Agent Tooling</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        {open && <AgentModal onClose={() => setOpen(false)} />}
        </>
    )
}