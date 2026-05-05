"use client";

import Link from "next/link";

export default function MovingLogos() {
    const logos = [
        "/logos/google.svg",
        "/logos/redbull.png",
        "/logos/spotify.svg",
        "/logos/netflix.svg",
        "/logos/amazon.svg",
        "/logos/reddit.svg",
        "/logos/tiktok.svg",
        "/logos/youtube.svg",
    ];

    const duplicated = [...logos, ...logos];

    return (
        <>
            {/* ============================================== */}
            {/* MOVING LOGOS SECTION                          */}
            {/* ============================================== */}
            <section className="relative w-full overflow-hidden px-4 lg:px-10 py-10 lg:py-20">

                <div className="grid grid-cols-12 w-full items-center gap-y-6">

                    {/* LEFT TITLE */}
                    <div className="col-span-12 md:col-span-3 lg:col-span-2">
                        <h2 className="text-xs lg:text-sm font-black text-gray-900">
                            The agency behind ...
                        </h2>
                    </div>

                    {/* MARQUEE */}
                    <div className="col-span-12 md:col-span-9 lg:col-span-10 relative overflow-hidden">

                        <div
                            className="
                                flex w-max gap-10 lg:gap-20
                                animate-[marquee_45s_linear_infinite]
                            "
                        >
                            {duplicated.map((logo, index) => (
                                <div
                                    key={index}
                                    className="w-16 lg:w-28 flex-shrink-0 flex items-center justify-center"
                                >
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="w-full h-auto object-contain opacity-80"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* LEFT MASK */}
                        <div className="absolute left-0 top-0 h-full w-16 lg:w-32 pointer-events-none 
                            [mask-image:linear-gradient(to_right,black,transparent)] bg-auto" />

                        {/* RIGHT MASK */}
                        <div className="absolute right-0 top-0 h-full w-16 lg:w-32 pointer-events-none 
                            [mask-image:linear-gradient(to_left,black,transparent)] bg-auto" />

                    </div>
                </div>
            </section>

            {/* ============================================== */}
            {/* DRIVING DEMAND & DISCOVERY SECTION            */}
            {/* ============================================== */}
            <section className="w-full py-10 lg:py-14">

                {/* MOBILE LAYOUT */}
                <div className="lg:hidden flex flex-col gap-6 px-4">
                    <h2 className="text-5xl sm:text-6xl font-bold text-black tracking-tight leading-[1.05]">
                        Driving Demand
                        <br />
                        <span className="inline-flex items-center gap-3 flex-wrap">
                            & Discovery
                            <span className="inline-block w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden align-middle">
                                <img
                                    src="/demand.webp"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </span>
                        </span>
                    </h2>

                    <p className="text-base leading-relaxed text-black font-semibold">
                        A global team of search-first content marketers engineering
                        semantic relevancy & category signals for both the internet and
                        people
                    </p>

                    <div className="flex flex-col items-center gap-3 mt-2">
                        <Link
                            href="#"
                            className="w-full text-center bg-white px-8 py-4 rounded-full text-black font-medium shadow-sm"
                        >
                            Our Story ↗
                        </Link>
                        <Link
                            href="#"
                            className="text-black font-medium py-2"
                        >
                            Our Services ↗
                        </Link>
                    </div>
                </div>

                {/* DESKTOP LAYOUT - Full width, left text + right heading */}
                <div className="hidden lg:grid grid-cols-12 gap-62 items-start px-10">

                    {/* LEFT TEXT */}
                    <div className="col-span-4">
                        <p className="text-lg leading-relaxed text-black max-w-md font-semibold">
                            A global team of search-first content marketers engineering
                            semantic relevancy & category signals for both the internet and
                            people
                        </p>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-span-8">

                        <h2 className="text-7xl xl:text-8xl font-bold text-black tracking-tight leading-[1.05]">

                            Driving Demand & <br />

                            <span className="inline-flex items-center gap-6">
                                Discovery

                                {/* INLINE IMAGE */}
                                <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-2xl overflow-hidden">
                                    <img
                                        src="/demand.webp"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </span>

                        </h2>

                        {/* BUTTONS */}
                        <div className="flex items-center gap-6 mt-12">

                            <Link
                                href="#"
                                className="bg-white px-8 py-4 rounded-full text-black font-medium transition hover:scale-105"
                            >
                                Our Story ↗
                            </Link>

                            <Link
                                href="#"
                                className="text-black font-medium hover:underline"
                            >
                                Our Services ↗
                            </Link>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}