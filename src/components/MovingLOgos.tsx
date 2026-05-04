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
            <section className="relative w-full overflow-hidden px-10 py-20">

            <div className="grid grid-cols-12 w-full items-center">

                {/* LEFT TITLE */}
                <div className="col-span-12 md:col-span-3 lg:col-span-2">
                    <h2 className="text-sm font-black text-gray-900">
                        The agency behind ...
                    </h2>
                </div>

                {/* MARQUEE */}
                <div className="col-span-12 md:col-span-9 lg:col-span-10 relative overflow-hidden">

                    <div
                        className="
              flex w-max gap-20
              animate-[marquee_45s_linear_infinite]
            "
                    >
                        {duplicated.map((logo, index) => (
                            <div
                                key={index}
                                className="w-24 lg:w-28 flex-shrink-0 flex items-center justify-center"
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
                    <div className="absolute left-0 top-0 h-full w-32 pointer-events-none 
  [mask-image:linear-gradient(to_right,black,transparent)] bg-auto" />

                    {/* RIGHT MASK */}
                    <div className="absolute right-0 top-0 h-full w-32 pointer-events-none 
  [mask-image:linear-gradient(to_left,black,transparent)] bg-auto" />

                </div>
            </div>
        </section>

        <section className="w-full py-14 px-2 lg:px-2">

      <div className="max-w-[1600px] mx-10 grid grid-cols-12 gap-62 items-start">

        {/* LEFT TEXT */}
        <div className="col-span-12 lg:col-span-4">
          <p className="text-lg leading-relaxed text-black max-w-lg font-semibold">
            A global team of search-first content marketers engineering
            semantic relevancy & category signals for both the internet and
            people
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-12 lg:col-span-8">

          <h2 className="text-8xl font-bold text-black tracking-tight">

            Driving Demand & <br />

            <span className="inline-flex items-center gap-6">
              Discovery

              {/* INLINE IMAGE */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden">
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
