"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
    { id: 1, name: "SIXT", year: "2023-2025" },
    { id: 2, name: "Dojo - B2B", year: "2021-2025" },
    { id: 3, name: "Magnet Trade - B2B", year: "2023-2024" },
    { id: 4, name: "Leading E Sim brand", year: "2023-2025" },
    { id: 5, name: "JD Sports", year: "2025" },
];

function ProjectItem({ project, index, total, scrollYProgress }: any) {
    const start = index / total;
    const end = (index + 1) / total;

    // WAAPI complains strictly if offsets exceed [0, 1] bounds, wait! Actually Framer motion
    // optimizes useTransform by sending it to WAAPI (Web Animations API) if the element is hardware accelerated.
    // WAAPI requires offsets to be between 0 and 1! If they are outside, it will throw:
    // "Failed to execute 'animate' on 'Element': Offsets must be monotonically non-decreasing."

    // Let's create an array strictly bounded inside [0, 1] that is always progressively increasing.
    // Since start is between 0 and 1, we map:
    const safeStart = Math.max(0, start - 0.05);
    const safeFadeInEnd = Math.max(safeStart + 0.01, start);

    // safe space inside end:
    const safeEnd = Math.min(1, end + 0.05);
    const safeFadeOutStart = Math.min(safeEnd - 0.01, end);

    const mapRanges = [safeStart, safeFadeInEnd, safeFadeOutStart, safeEnd];

    const opacity = useTransform(scrollYProgress, mapRanges, [0.3, 1, 1, 0.3]);

    return (
        <motion.div
            className="flex items-end space-x-6 cursor-pointer"
            style={{ opacity }}
        >
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter hover:text-[#ade8ce] hover:pl-4 transition-all duration-300">
                {project.name}
            </h3>
            <span className="text-sm font-mono opacity-50 mb-1">[{project.year}]</span>
        </motion.div>
    );
}


export default function FeaturedWork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="bg-black text-white w-full h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center px-6 max-w-7xl mx-auto">

                {/* Left Side: Client List */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center pr-8 space-y-6 z-10 pt-20 md:pt-0">
                    <h2 className="text-[#ade8ce] uppercase tracking-widest text-sm font-semibold mb-8">Featured Work</h2>
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            index={index}
                            total={projects.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>

                {/* Right Side: Image Scroll Area */}
                <div className="hidden md:flex w-1/2 h-[70vh] relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800">
                    <motion.div
                        className="absolute inset-0 flex flex-col w-full"
                        style={{
                            y: useTransform(scrollYProgress, [0, 1], ["0%", `-${100 * ((projects.length - 1) / projects.length)}%`])
                        }}
                    >
                        {projects.map((p, i) => (
                            <div key={i} className="h-full w-full shrink-0 flex items-center justify-center p-8">
                                <div className="w-full h-full bg-neutral-800 rounded-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-neutral-700 transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute bottom-6 left-6 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md">
                                        {p.name} Campaign
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
