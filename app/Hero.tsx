'use client';

import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import RotatingText from "./RotatingText";
import Card from "./Card";

function Hero() {
    return (
        <section className = "relative min-h-screen overflow-hidden">
            <div className = "absolute inset-0 -z-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200">
                <GravityStarsBackground 
                    starsCount = {125}
                    glowIntensity = {29}
                    starsSize = {4}
                    movementSpeed = {0.75}
                    gravityStrength={100}
                    starsInteraction={true}
                />
            </div>
            <div className="relative z-10 flex flex-col min-h-screen">
                <div className="flex justify-center pt-12">
                    <Card />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-7"> 
                    <h1 className="text-8xl text-slate-900 font-montserrat font-bold mb-4">
                        Keshav Sheth's Portfolio
                    </h1>
                    <h2 className="text-5xl text-slate-900 font-inter mb-4">
                        I'm a{" "}
                        <span className="font-semibold font-poppins">
                            <RotatingText
                                text={[
                                    "Computer Engineer",
                                    "Software Engineer",
                                    "Previous SWE @ Verizon",
                                    "Team Lead @ Smart Stadium",
                                ]}
                            />
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default Hero;
