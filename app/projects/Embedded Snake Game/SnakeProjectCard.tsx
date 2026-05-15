"use client";
import { useState } from "react";
import Image from "next/image";
import SnakeModal from "./SnakeModal";

export default function SnakeProjectCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div onClick={() => setOpen(true)} className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
            <h3 className = "text-slate-900 mb-2 text-lg font-bold font-montserrat">Embedded Snake Game</h3>
            <Image
                src={"/SnakeGame/homescreen.png"}
                alt={"HPS"}
                width={1000}
                height={1000}
            />
            <p className = "mt-2 text-sm text-gray-600">
A fully playable Snake game built in C++ and deployed directly onto an NXP LPC1768
          ARM Cortex-M3 microcontroller using the Mbed OS framework — covering peripheral
          interfacing, real-time game logic, and custom data structures under tight hardware constraints.            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">C++</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">C</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">Mbed MCU</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">SPI</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">UART</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">PWM</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-bold">GPIO</span>
            </div>
            <div className="pt-4 flex justify-end">
                <span className="text-sm text-neutral-500">Learn More → </span>
            </div>
        </div>
        {open && <SnakeModal onClose={() => setOpen(false)} />}
        </>
    )
}