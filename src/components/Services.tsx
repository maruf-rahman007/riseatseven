"use client";

import { motion } from "framer-motion";

const services = [
    "SEO",
    "Digital PR",
    "Paid Media",
    "Organic Social",
    "Creative",
    "Data & Strategy",
];

export default function Services() {
    return (
        <section className="bg-[#f2f2f2] text-black w-full py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

                {/* Left Side: Sticky Text */}
                <div className="w-full md:w-1/3">
                    <div className="sticky top-32">
                        <h2 className="text-[#0a0a0a] uppercase tracking-widest text-sm font-semibold mb-6">Our Services</h2>
                        <p className="text-2xl md:text-4xl font-light leading-tight">
                            We connect brand with performance, driving demand and discovery across all channels.
                        </p>
                    </div>
                </div>

                {/* Right Side: Services List */}
                <div className="w-full md:w-2/3">
                    <div className="flex flex-col space-y-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group border-b border-neutral-300 pb-8 flex justify-between items-center cursor-pointer"
                            >
                                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter group-hover:-translate-y-2 transition-transform duration-300">
                                    {service}
                                </h3>
                                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#ade8ce] transition-all duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45 group-hover:rotate-0 transition-transform duration-300"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
