"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { projects } from "@/lib/projects";


export default function FeaturedWork() {
    const containerRef = useRef(null);
    const [active, setActive] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Convert scroll to index
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            projects.length - 1,
            Math.floor(latest * projects.length)
        );
        setActive(index);
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${68 * (projects.length - 1)}%`]
    );

    return (
        <>
            <section
                ref={containerRef}
                className="relative bg-black text-white h-[600vh]"
            >

                <div className="sticky top-0 h-screen grid grid-cols-12 gap-10 px-12">

                    {/* LEFT SIDE */}
                    <div className="col-span-6 flex flex-col justify-center space-y-6">
                        <h2 className="pb-8 font-bold text-2xl">Featured Work</h2>
                        {projects.map((p, i) => (
                            <motion.div
                                key={p.id}
                                animate={{
                                    opacity: active === i ? 1 : 0.3,
                                    x: active === i ? 20 : 0,
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-6xl font-semibold tracking-tight">
                                    {p.name}
                                </h2>
                                <div className="text-sm opacity-60">[{p.year}]</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-span-6 relative overflow-hidden rounded-3xl">
                        <motion.div
                            style={{ y }}
                            className="absolute inset-0 flex flex-col"
                        >
                            {projects.map((p) => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center mt-3 lg:mt-7 pb-12 bg-[#f2f2f2]">
                <a
                    href="#"
                    className="w-full md:w-auto group inline-flex shrink-0 justify-center items-center gap-x-2 
    relative overflow-hidden border border-transparent bg-white text-[#1a1a1a]
    px-6 py-3 rounded-[999px] font-medium text-base leading-tight tracking-tight
    transition-all duration-300 hover:rounded-xl"
                >
                    <div className="relative overflow-hidden h-6">
                        {/* Default text */}
                        <div className="transition-transform duration-300 group-hover:-translate-y-6">
                            <div className="flex items-center gap-x-2">
                                <span>Explore Our Work</span>
                                <span
                                    className="inline-block text-xs mt-1 transition-transform"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </div>
                        </div>

                        {/* Hover text */}
                        <div className="absolute top-0 left-0 translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
                            <div className="flex items-center gap-x-2">
                                <span>Explore Our Work</span>
                                <span
                                    className="inline-block text-xs mt-1 transition-transform"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

function ProjectCard({ project }: any) {
    return (
        <div className="h-screen w-full p-4">

            {/* Rounded container */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden group shadow-2xl">

                {/* Image */}
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 right-6 inline-flex items-center bg-white/20 backdrop-blur px-4 py-2 rounded-full text-black">
                    {project.category}
                </div>

                {/* Overlay */}
                <div
                    className="absolute inset-0 flex flex-col justify-between p-10 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: project.color }}
                >
                    <h3 className="text-4xl font-semibold text-black">
                        {project.description}
                    </h3>
                </div>

            </div>
        </div>
    );
}