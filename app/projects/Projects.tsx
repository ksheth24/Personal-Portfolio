import Card from "../Card";
import HPSProjectCard from "./HospitalManagementSystem/HPSProjectCard";
import TPAgentProjectCard from "./AI Travel Agent/TPAgentProjectCard";
import MovieStoreProjectCard from "./Movie Store/MovieStoreProjectCard";
import CampusCraveProjectCard from "./CampusCrave/CampusCraveProjectCard";

function ProjectsCard() {
    return (
        <section className = "relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200">
            <div className="flex justify-center pt-12">
                <Card />
            </div>
            <div className = "text-center py-17">
                <h1 className = "text-center text-7xl text-slate-900 font-sans mb-4 font-montserrat font-bold">My Projects</h1>
                <p className="text-xl text-slate-700 font-poppins text-center">
                        Developing my skills and passions
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 pt-1 px-5">
                <TPAgentProjectCard />
                <HPSProjectCard />
                <MovieStoreProjectCard />
                <CampusCraveProjectCard />
            </div>
        </section>
    );
}

export default ProjectsCard;
