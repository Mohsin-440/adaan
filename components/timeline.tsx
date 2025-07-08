import React from "react"

const milestones = [
    {
        year: "2015",
        title: "Founded AITC",
        description: "Addaan International Trading Company (AITC) is established as a provider of mining and exploration solutions in Saudi Arabia.",
        color: "#219AD3",
        align: "left",
    },
    {
        year: "2017",
        title: "Desco Drilling Rigs Partnership",
        description: "Became the sole agent for Desco rigs, supplying advanced drilling equipment.",
        color: "#515250",
        align: "right",
    },
    {
        year: "2019",
        title: "IMDEX Distributor",
        description: "Expanded portfolio by becoming a trusted distributor of IMDEX, a global leader in drilling fluids and data solutions.",
        color: "#219AD3",
        align: "left",
    },
    {
        year: "2020-2021",
        title: "Local Core Tray Manufacturing",
        description: "Launched locally manufactured core trays, approved by Ma'aden, supporting Vision 2030.",
        color: "#515250",
        align: "right",
    },
    {
        year: "2025",
        title: "CR Mining Partnership",
        description: "Partnered with CR Mining to provide high-performance GET, cast lips, and digital solutions.",
        color: "#219AD3",
        align: "left",
    },
]

export default function Timeline() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center mb-12">
                    <div className="w-16 h-16 bg-mining-gray rounded-full flex items-center justify-center mr-6">
                        <span className="text-white text-2xl font-bold">LOGO</span>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-mining-gray mb-1">Company Milestones</h2>
                        <p className="text-mining-gray/70">A journey of innovation and partnership</p>
                    </div>
                </div>

                <div className="relative">
                    {/* Vertical timeline line (desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-0">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                            >
                                {/* Left-aligned card */}
                                {milestone.align === "left" && (
                                    <div className="w-full md:w-1/2 lg:w-5/12 md:pr-8 mb-4 md:mb-0">
                                        <div
                                            className="relative bg-white p-6 rounded-xl shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                            style={{ borderColor: milestone.color }}
                                        >
                                            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                                                <div
                                                    className="w-6 h-6 rounded-full border-4 border-white"
                                                    style={{ backgroundColor: milestone.color }}
                                                />
                                            </div>
                                            <div className="text-mining-blue font-bold text-lg mb-1">{milestone.year}</div>
                                            <h3 className="text-mining-gray font-semibold text-xl mb-2">{milestone.title}</h3>
                                            <p className="text-mining-gray/70 text-base">{milestone.description}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Year (mobile) */}
                                <div className="md:hidden flex items-center justify-center w-full mb-4">
                                    <div
                                        className="w-5 h-5 rounded-full border-4 border-white mr-4"
                                        style={{ backgroundColor: milestone.color }}
                                    />
                                    <div className="text-mining-blue font-bold text-lg">{milestone.year}</div>
                                </div>

                                {/* Right-aligned card */}
                                {milestone.align === "right" && (
                                    <div className="w-full md:w-1/2 lg:w-5/12 md:pl-8">
                                        <div
                                            className="relative bg-white p-6 rounded-xl shadow-lg border-r-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                            style={{ borderColor: milestone.color }}
                                        >
                                            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden md:block">
                                                <div
                                                    className="w-6 h-6 rounded-full border-4 border-white"
                                                    style={{ backgroundColor: milestone.color }}
                                                />
                                            </div>
                                            <div className="text-mining-blue font-bold text-lg mb-1">{milestone.year}</div>
                                            <h3 className="text-mining-gray font-semibold text-xl mb-2">{milestone.title}</h3>
                                            <p className="text-mining-gray/70 text-base">{milestone.description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}