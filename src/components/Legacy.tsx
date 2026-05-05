"use client";

import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { useRef } from "react";

const cards = [
    {
        id: "pioneers",
        title: "Pioneers",
        text: "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it. We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
        bg: "bg-black",
        textColor: "text-white",
        rotateStart: 4,
    },
    {
        id: "awards",
        title: "Award Winning",
        text: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
        bg: "bg-[#ade8ce]",
        textColor: "text-black",
        rotateStart: 8,
    },
    {
        id: "speed",
        title: "Speed",
        text: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
        image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c",
        bg: "bg-white",
        textColor: "text-black",
        rotateStart: 12,
    },
];

export default function LegacyDesktop() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const smooth = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
    });

    return (
        <div ref={ref} className="hidden lg:block relative h-[300vh]">
            <p className="flex flex-col items-center font-bold text-2xl">Legacy In The Making</p>

            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {cards.map((card, i) => {

                    // Each card gets its own scroll segment
                    const start = i * 0.33;
                    const end = start + 0.33;

                    // Vertical movement
                    const y = useTransform(
                        smooth,
                        [start, end],
                        ["0%", "-100%"]
                    );

                    // Counter rotation during exit
                    const rotate = useTransform(
                        smooth,
                        [start, end],
                        [0, -card.rotateStart * 8] // dramatic tilt on exit
                    );

                    return (
                        <motion.div
                            key={card.id}
                            style={{
                                y,
                                rotate,
                                zIndex: cards.length - i,
                            }}
                            className="absolute flex items-center justify-center w-full h-full"
                        >
                            <LegacyCard
                                title={card.title}
                                text={card.text}
                                image={card.image}
                                bg={card.bg}
                                textColor={card.textColor}
                                rotate={card.rotateStart}
                            />
                        </motion.div>
                    );
                })}

            </div>
        </div>
    );
}

function LegacyCard({
    title,
    text,
    image,
    bg,
    textColor,
    rotate,
}: {
    title: string;
    text: string;
    image: string;
    bg: string;
    textColor: string;
    rotate: number;
}) {
    return (
        <div
            className="w-full max-w-lg xl:max-w-xl 4xl:max-w-2xl"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <div
                className={`w-full grid p-7 rounded-2xl 
                    lg:items-center lg:rounded-3xl lg:aspect-square 
                    xl:py-10 xl:px-14 ${bg}`}
            >
                <div className="col-start-1 row-start-1 flex flex-col text-center lg:items-center gap-y-3 md:gap-y-5">

                    {/* ✅ Image */}
                    <div
                        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden
                       lg:aspect-square lg:rounded-2xl lg:w-48
                       4xl:w-56"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* ✅ Text Block */}
                    <div className="flex flex-col items-center gap-y-4">

                        <h2
                            className={`text-3xl lg:text-5xl xl:text-6xl 3xl:text-7xl 
                          font-medium tracking-tight ${textColor}`}
                        >
                            {title}
                        </h2>

                        <div className="w-full">
                            <p
                                className={`text-sm lg:text-base leading-normal 
                            ${textColor}`}
                            >
                                {text}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}