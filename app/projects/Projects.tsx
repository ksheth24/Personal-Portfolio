"use client"

import { useState } from "react";
import Card from "../Card";
import HPSProjectCard from "./HospitalManagementSystem/HPSProjectCard";
import TPAgentProjectCard from "./AI Travel Agent/TPAgentProjectCard";
import MovieStoreProjectCard from "./Movie Store/MovieStoreProjectCard";
import CampusCraveProjectCard from "./CampusCrave/CampusCraveProjectCard";
import RoboNavProjectCard from "./RoboNav/RoboNavProjectCard";
import PersonalPortfolioProjectCard from "./PersonalPortolio/PersonalPortfolioProjectCard";
import OHProjectCard from "./Office Hours Queue/OHProjectCard";

function ProjectsCard() {
    const [isHardware, setIsHardware] = useState(false);

    const segStyle = (active) => ({
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 16px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 500,
        whiteSpace: "nowrap",
        transition: "all 0.2s",
        cursor: "pointer",
        color: active ? "#000000" : "#64748b",
        background: active ? "white" : "transparent",
    });

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200 pb-24">

            {/* Top bar: segmented toggle pinned top-right */}
            <div className="flex justify-end px-6 pt-6">
                <div
                    onClick={() => setIsHardware(!isHardware)}
                    title="Switch project type"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        cursor: "pointer",
                        background: "#0f172a",
                        borderRadius: 999,
                        padding: 5,
                        gap: 2,
                    }}
                >
                    {/* Software segment */}
                    <div style={segStyle(!isHardware)}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <polyline
                                points="1,11 5,6 9,10 15,3"
                                stroke={!isHardware ? "#0f172a" : "#64748b"}
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Software
                    </div>

                    {/* Hardware segment */}
                    <div style={segStyle(isHardware)}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <rect x="2" y="2" width="5" height="5" rx="1" fill={isHardware ? "#0f172a" : "#64748b"} />
                            <rect x="9" y="2" width="5" height="5" rx="1" fill={isHardware ? "#0f172a" : "#64748b"} />
                            <rect x="2" y="9" width="5" height="5" rx="1" fill={isHardware ? "#0f172a" : "#64748b"} />
                            <rect x="9" y="9" width="5" height="5" rx="1" fill={isHardware ? "#0f172a" : "#64748b"} />
                        </svg>
                        Hardware
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="flex justify-center">
                <Card />
            </div>
            <div className="text-center py-17">
                <h1 className="text-center text-7xl text-slate-900 font-sans mb-4 font-montserrat font-bold">
                    My Projects
                </h1>
                <p className="text-xl text-slate-700 font-poppins text-center">
                    Building my skills and passions
                </p>
            </div>

            {/* Project grid */}
            {isHardware ? (
                <div className="flex flex-col items-center justify-center gap-4 pt-12 text-slate-500 font-poppins">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect x="6" y="6" width="15" height="15" rx="3" fill="#cbd5e1" />
                        <rect x="27" y="6" width="15" height="15" rx="3" fill="#cbd5e1" />
                        <rect x="6" y="27" width="15" height="15" rx="3" fill="#cbd5e1" />
                        <rect x="27" y="27" width="15" height="15" rx="3" fill="#cbd5e1" />
                    </svg>
                    <p className="text-lg font-medium text-slate-400">Hardware projects coming soon</p>
                    <p className="text-sm text-slate-400">Check back later!</p>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-6 pt-1 px-5">
                    <TPAgentProjectCard />
                    <HPSProjectCard />
                    <CampusCraveProjectCard />
                    <OHProjectCard />
                    <MovieStoreProjectCard />
                    <RoboNavProjectCard />
                    <PersonalPortfolioProjectCard />
                </div>
            )}
        </section>
    );
}

export default ProjectsCard;