"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Digital PR",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=ca4a2c3891fedbd3ca3a3d46af0e6362",
    },
    {
        title: "Organic Social & Content",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=3015fd51b8e01339805f2d2c04aed3cb",
    },
    {
        title: "Search & Growth Strategy",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=942bb2a9f226a995cdd5b25d64509705",
    },
    {
        title: "Content Experience",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=f06af03bd1b7577056129b56b67c0ad2",
    },
    {
        title: "Data & Insights",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=91982a1f6ee17fb2964a4bc7a76167f0",
    },
    {
        title: "Onsite SEO",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=146948423396731ebd58e4755e3d773a",
    },
];

export default function Services() {
    return (
        <>
            <section className="w-full bg-[#f2f2f2] text-black py-14 px-4">
      <div className="mx-4">

        {/* ✅ HEADER ROW (unchanged) */}
        <div className="grid grid-cols-12 border-b border-neutral-300 pb-10 mb-10">
          <div className="col-span-12 md:col-span-9">
            <h2 className="flex items-center flex-wrap text-6xl md:text-8xl tracking-tight">
              <span>Our</span>

              <span className="mx-4 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden">
                <img
                  src="service1.png"
                  className="w-full h-full object-cover"
                />
              </span>

              <span>Services</span>
            </h2>
          </div>

          <div className="hidden md:flex md:col-span-3 justify-end items-center">
            <a
              href="#"
              className="group relative px-6 py-3 bg-white rounded-full border border-neutral-300 overflow-hidden"
            >
              <div className="relative h-6 overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-6">
                  View All Services ↗
                </div>
                <div className="absolute top-0 left-0 translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
                  View All Services ↗
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ✅ MOBILE VERSION */}
        <div className="md:hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border-b border-neutral-300"
            >
              <a
                href="#"
                className="group flex items-center gap-4 py-6 relative"
              >
                {/* Small Image */}
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Arrow (slides in like original) */}
                <div className="absolute left-16 opacity-0 -translate-x-4 
                                group-hover:translate-x-0 
                                group-hover:opacity-100
                                transition-all duration-300 text-xl">
                  ↗
                </div>

                {/* Title */}
                <h3 className="text-3xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-6">
                  {service.title}
                </h3>
              </a>
            </div>
          ))}

          {/* ✅ Mobile Button (matches original placement) */}
          <div className="mt-8">
            <a
              href="#"
              className="group relative w-full flex justify-center px-6 py-3 bg-white rounded-full border border-neutral-300 overflow-hidden"
            >
              <div className="relative h-6 overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-6">
                  View All Services ↗
                </div>
                <div className="absolute top-0 left-0 translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
                  View All Services ↗
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ✅ DESKTOP VERSION (UNCHANGED) */}
        <div className="hidden md:grid grid-cols-12 gap-x-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="col-span-12 md:col-span-6 border-b border-neutral-300"
            >
              <a
                href="#"
                className="group relative block py-10 px-6 overflow-hidden
                transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
                rounded-none group-hover:rounded-[60px]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition-all duration-500 
                  rounded-[60px] overflow-hidden">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover scale-100 
                    group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 flex items-center">
                  <div className="absolute left-0 -translate-x-10 opacity-0 
                    group-hover:translate-x-0 
                    group-hover:opacity-100 
                    transition-all duration-300 text-white text-3xl">
                    ↗
                  </div>

                  <h3
                    className="text-4xl md:text-5xl font-semibold tracking-tight 
                    transition-all duration-300 
                    group-hover:text-white 
                    group-hover:translate-x-12"
                  >
                    {service.title}
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
        </>
    );
}