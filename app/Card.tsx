'use client'
import Image from "next/image";
import NavIcon from "./HoverLabel";
import Link from 'next/link';

export default function Card() {
    return(
        <div className="bg-black rounded-full items-center inline-flex h-12 w-60 p-4 gap-6 px-6 py-3">
            <Link href = "/">
                <NavIcon src = "/main.png" alt = "Main" label = "Home" />
            </Link>
            <Link href = "/projects">
                <NavIcon src = "/projects.png" alt = "Projects" label = "Projects" />
            </Link>
            <Link href = "/experience">
                <NavIcon src = "/experience.png" alt = "Experience" label = "Experience" />
            </Link>
            <Link href = "/resume">
                <NavIcon src = "/resumes.png" alt = "Resumes" label = "Resume" />
            </Link>
        </div>
    )
}