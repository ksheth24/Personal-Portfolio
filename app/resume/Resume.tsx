import Card from "../Card";


function ResumeCard() {
    return (
        <section className = "flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200">
            <div className="flex justify-center pt-12">
                <Card />
            </div>
            <div className = "mx-auto max-w-7x1 grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-8 px-6 py-12">
                <div className="items-center flex-col space-y-6">
                    <div> 
                        <h1 className="text-7xl text-slate-900 font-sans mb-4 font-montserrat font-bold">
                            My Resume
                        </h1>
                    </div>
                    <div className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
                        <div className = "flex flex-row"> 
                            <h3 className = "mb-2 text-lg font-semibold font-poppins">Email </h3>
                        </div>
                        <p className = "text-gray-600">
                            keshavsheth11@gmail.com
                        </p>
                    </div>

                    <div className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
                        <h3 className = "mb-2 text-lg font-semibold font-poppins">Phone Number </h3>
                        <p className = "text-gray-600">
                            973-727-6385
                        </p>
                    </div>

                    <div className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
                        <h3 className = "mb-2 text-lg font-semibold font-poppins">LinkedIn</h3>
                        <a
                            href="https://www.linkedin.com/in/keshav-sheth/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600"
                        >
                           https://www.linkedin.com/in/keshav-sheth/
                        </a>
                    </div>

                    <div className="hover:shadow-md transiton-shadow hover:bg-gray-100 rounded-2xl bg-white backdrop-blur-md border border-white/70 shadow-lg p-6 ring-1 ring-black/10">
                        <h3 className = "mb-2 text-lg font-semibold font-poppins">GitHub</h3>
                        <a
                            href="https://github.com/ksheth24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600"
                        >
                           https://github.com/ksheth24
                        </a>
                    </div>

                </div>
                <div className = "overflow-hidden bg-neutral-900 rounded-2xl shadow-xl border w-[60vw] h-[80vh] ring-1 ring-black/10 p-2">
                    <embed 
                        src = "/File.pdf"
                        type = "application/pdf"
                        className = "w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default ResumeCard;
