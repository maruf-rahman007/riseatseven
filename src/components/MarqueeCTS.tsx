"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const items = [
  {
    text: "Chasing Consumers",
    image: "/ctaconsumers.png",
  },
  {
    text: "Not Algorithms",
    image: "/algorithmscta.png",
  },
];

export default function MarqueeCTA() {
  const [hovering, setHovering] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring cursor
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    mouseX.set(e.clientX - 100);
    mouseY.set(e.clientY - 40);
  }

  return (
    <>
        <section className="w-full py-20 bg-[#f3f3f3] overflow-hidden relative">

      {/* ✅ Custom Cursor */}
      {hovering && (
        <motion.div
          style={{ left: springX, top: springY }}
          className="fixed z-50 pointer-events-none"
        >
          <div className="bg-[#ade8ce] text-black px-6 py-3 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
            Send Us Your Brief
            <span className="rotate-45">↗</span>
          </div>
        </motion.div>
      )}

      <Link
        href="/contact"
        className="block w-full relative overflow-hidden"
      >
        <div
          className="w-[140vw] -ml-[20vw]"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-20%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center gap-x-8 px-6 pb-6 lg:gap-x-14 lg:px-10"
              >
                {/* ✅ MASSIVE TEXT */}
                <h2
                  className="flex-1 font-semibold tracking-tight text-[#111]
                             text-[18vw] leading-[0.85]
                             md:text-[14vw]
                             lg:text-[11vw]
                             xl:text-[12vw]"
                >
                  {item.text}
                </h2>

                {/* ✅ Square Image */}
                <div
                  className="relative shrink-0 
                             w-[22vw] 
                             md:w-[16vw] 
                             lg:w-[12vw] 
                             rounded-2xl lg:rounded-3xl 
                             overflow-hidden"
                >
                  <div className="relative w-full pt-[100%]">
                    <img
                      src={item.image}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Link>
    </section>
    </>
  );
}