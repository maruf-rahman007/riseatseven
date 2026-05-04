"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <section className="px-4 mt-4">
            <div className="relative min-h-[95vh] w-full rounded-[32px] overflow-hidden">

                {/* ✅ Background */}
                <img
                    src="/hero.webp"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-125 blur-[22px]"
                />

                {/* ✅ Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

                {/* ✅ NAVBAR */}
                <div className="relative z-20 flex items-center justify-between px-10 pt-10 pb-6">

                    <Link
                        href="/"
                        className="text-white text-[23px] md:text-[26px] font-[500] tracking-[-0.015em]"
                    >
                        Rise at Seven°
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 text-white text-sm font-semibold">

                        {/* ================= SERVICES ================= */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveMenu("services")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Link
                                href="#"
                                className="px-4 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black"
                            >
                                Services +
                            </Link>

                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-6
                                w-[850px] bg-white text-black rounded-3xl p-12 shadow-2xl
                                transition-all duration-300
                                ${activeMenu === "services"
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 translate-y-4 invisible"
                                    }`}
                            >
                                <div className="grid grid-cols-2 gap-16">
                                    <div>
                                        <h4 className="text-gray-500 mb-6 text-sm">Core Services</h4>
                                        <ul className="space-y-4 text-xl font-semibold">
                                            <li>Search & Growth Strategy</li>
                                            <li>Onsite SEO</li>
                                            <li>Content Experience</li>
                                            <li>B2B Marketing</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="space-y-4 text-xl font-semibold mt-8">
                                            <li>Digital PR</li>
                                            <li>Social Media & Campaigns</li>
                                            <li>Data & Insights</li>
                                            <li>Social SEO/Search</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= INTERNATIONAL ================= */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveMenu("international")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Link
                                href="#"
                                className="px-4 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black"
                            >
                                International +
                            </Link>

                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-6
                                w-[750px] bg-white text-black rounded-3xl p-12 shadow-2xl
                                transition-all duration-300
                                ${activeMenu === "international"
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 translate-y-4 invisible"
                                    }`}
                            >
                                <ul className="space-y-6 text-2xl font-semibold">
                                    <li>US Digital PR</li>
                                    <li>Spain Digital PR</li>
                                    <li>Germany Digital PR</li>
                                    <li>Netherlands Digital PR</li>
                                </ul>
                            </div>
                        </div>

                        {/* ================= ABOUT ================= */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveMenu("about")}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <Link
                                href="#"
                                className="px-4 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black"
                            >
                                About +
                            </Link>

                            <div
                                className={`absolute left-1/2 -translate-x-1/2 top-full mt-6
                                w-[700px] bg-white text-black rounded-3xl p-12 shadow-2xl
                                transition-all duration-300
                                ${activeMenu === "about"
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 translate-y-4 invisible"
                                    }`}
                            >
                                <ul className="space-y-6 text-2xl font-semibold">
                                    <li>About Us</li>
                                    <li>Meet The Risers</li>
                                    <li>Culture</li>
                                    <li>Testimonials</li>
                                </ul>
                            </div>
                        </div>

                        {/* SIMPLE LINKS */}
                        {["Work", "Careers", "Blog", "Webinar"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="px-4 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <Link
                        href="#"
                        className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium"
                    >
                        Get In Touch ↗
                    </Link>
                </div>

                {/* ✅ HERO CONTENT */}
                <div className="relative z-10 flex flex-col items-center pt-24 text-white text-center px-6">

                    {/* ✅ Awards Section */}
                    <div className="flex flex-col items-center justify-center mb-6">

                        <div className="uppercase text-xs font-bold leading-tight tracking-tight max-w-[13rem] text-center mb-3 text-white">
                            #1 Most recommended content marketing agency
                        </div>

                        {/* ✅ Important: Added px-3 so laurels don’t get clipped */}
                        <div className="flex items-center gap-x-2">

                            {/* LEFT LAUREL */}
                            <svg
                                viewBox="0 0 28 38"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 text-white"
                            >
                                <path
                                    fill="currentColor"
                                    d="M25.826 36.2423C24.1628 35.2302 22.3284 34.9354 20.4357 34.7259C19.6852 34.6204 18.9236 34.4691 18.193 34.2705C17.3545 34.0474 16.5347 33.7576 15.7419 33.4062L16.4438 31.9431C17.2169 30.332 16.5375 28.3991 14.9263 27.6261L14.0759 29.3985C13.5361 30.5234 13.7046 31.805 14.4037 32.7394C13.3196 32.1373 12.3026 31.4146 11.3802 30.5845L12.6328 29.1752C13.8199 27.8396 13.6998 25.7945 12.364 24.6072L11.0579 26.0765C10.0602 27.199 9.98609 28.8225 10.7806 30.0168C10.6575 29.8939 10.5358 29.7692 10.4166 29.6422C9.49052 28.6654 8.6932 27.5814 8.02681 26.4223L9.41226 25.5441C10.9217 24.5875 11.3698 22.5885 10.4131 21.0791L8.75281 22.1315C7.7684 22.7554 7.23555 23.8229 7.24942 24.9087C6.7712 23.8595 6.39118 22.7641 6.11088 21.6429L7.61991 21.1998C9.33444 20.6962 10.3162 18.8982 9.81266 17.1835L7.92644 17.7374C6.85358 18.0523 6.06774 18.8744 5.75319 19.8655C5.57825 18.727 5.50281 17.5732 5.52904 16.4239L7.2633 16.4128C9.05024 16.4013 10.4897 14.9435 10.4782 13.1565L8.5124 13.1691C7.23035 13.1773 6.12736 13.93 5.61055 15.0146C5.73 13.7312 5.98818 12.4645 6.37211 11.2376L8.06062 11.7101C9.78144 12.1916 11.5669 11.1871 12.0486 9.46623L10.1554 8.93641C8.90673 8.58696 7.62424 9.02009 6.83038 9.94142C7.30904 8.72939 7.91213 7.56635 8.62664 6.47593L10.1355 7.40528C11.6568 8.34265 13.6501 7.86898 14.5873 6.3476L12.9135 5.31658C11.788 4.62331 10.4045 4.70222 9.38126 5.40589C9.87033 4.76053 10.4008 4.14639 10.9692 3.56888C11.3054 3.84679 11.7648 3.98423 12.2801 3.86023C12.6898 3.7616 13.1 3.57083 13.4724 3.24067C15.26 1.65751 15.26 0.0708753 15.26 0.0708753C13.0683 -0.225683 11.698 0.452629 10.855 1.28334C10.1931 1.93542 10.3013 2.86694 10.8194 3.42667Z"
                                />
                            </svg>

                            {/* AWARDS */}
                            <div className="w-12 aspect-[20/9] relative">
                                <img src="/awards/global-search.png" alt="" className="w-full h-full object-contain" />
                            </div>

                            <div className="w-12 aspect-[20/9] relative">
                                <img src="/awards/drum.png" alt="" className="w-full h-full object-contain" />
                            </div>

                            <div className="w-12 aspect-[20/9] relative">
                                <img src="/awards/uk-social.png" alt="" className="w-full h-full object-contain" />
                            </div>

                            <div className="w-12 aspect-[20/9] relative hidden lg:inline-flex">
                                <img src="/awards/content-awards.png" alt="" className="w-full h-full object-contain" />
                            </div>

                            {/* RIGHT LAUREL (mirrored) */}
                            <svg
                                viewBox="0 0 28 38"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 text-white -scale-x-100"
                            >
                                <path
                                    fill="currentColor"
                                    d="M25.826 36.2423C24.1628 35.2302 22.3284 34.9354 20.4357 34.7259C19.6852 34.6204 18.9236 34.4691 18.193 34.2705C17.3545 34.0474 16.5347 33.7576 15.7419 33.4062L16.4438 31.9431C17.2169 30.332 16.5375 28.3991 14.9263 27.6261L14.0759 29.3985C13.5361 30.5234 13.7046 31.805 14.4037 32.7394C13.3196 32.1373 12.3026 31.4146 11.3802 30.5845L12.6328 29.1752C13.8199 27.8396 13.6998 25.7945 12.364 24.6072L11.0579 26.0765C10.0602 27.199 9.98609 28.8225 10.7806 30.0168C10.6575 29.8939 10.5358 29.7692 10.4166 29.6422C9.49052 28.6654 8.6932 27.5814 8.02681 26.4223L9.41226 25.5441C10.9217 24.5875 11.3698 22.5885 10.4131 21.0791L8.75281 22.1315C7.7684 22.7554 7.23555 23.8229 7.24942 24.9087C6.7712 23.8595 6.39118 22.7641 6.11088 21.6429L7.61991 21.1998C9.33444 20.6962 10.3162 18.8982 9.81266 17.1835L7.92644 17.7374C6.85358 18.0523 6.06774 18.8744 5.75319 19.8655C5.57825 18.727 5.50281 17.5732 5.52904 16.4239L7.2633 16.4128C9.05024 16.4013 10.4897 14.9435 10.4782 13.1565L8.5124 13.1691C7.23035 13.1773 6.12736 13.93 5.61055 15.0146C5.73 13.7312 5.98818 12.4645 6.37211 11.2376L8.06062 11.7101C9.78144 12.1916 11.5669 11.1871 12.0486 9.46623L10.1554 8.93641C8.90673 8.58696 7.62424 9.02009 6.83038 9.94142C7.30904 8.72939 7.91213 7.56635 8.62664 6.47593L10.1355 7.40528C11.6568 8.34265 13.6501 7.86898 14.5873 6.3476L12.9135 5.31658C11.788 4.62331 10.4045 4.70222 9.38126 5.40589C9.87033 4.76053 10.4008 4.14639 10.9692 3.56888C11.3054 3.84679 11.7648 3.98423 12.2801 3.86023C12.6898 3.7616 13.1 3.57083 13.4724 3.24067C15.26 1.65751 15.26 0.0708753 15.26 0.0708753C13.0683 -0.225683 11.698 0.452629 10.855 1.28334C10.1931 1.93542 10.3013 2.86694 10.8194 3.42667Z"
                                />
                            </svg>

                        </div>
                    </div>

                    {/* ✅ HEADLINE */}
                    <div>

                        <h1 className="text-[150px] leading-[0.9] font-semibold tracking-[-0.05em]">
                            We Create
                        </h1>

                        <h1 className="text-[150px] leading-[0.9] font-semibold tracking-[-0.05em] flex items-center justify-center gap-8 mt-2">
                            Category
                            <div className="w-32 h-32 rounded-xl overflow-hidden">
                                <img
                                    src="/inline.webp"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            Leaders
                        </h1>

                        <p className="mt-6 text-3xl font-semibold text-white/80">
                            on every searchable platform
                        </p>
                    </div>

                    {/* ✅ Platforms */}
                    <div className="w-full flex justify-center relative overflow-hidden z-0 mt-12 gap-x-14">

                        {[
                            "google.png",
                            "chatgpt.png",
                            "gemini.png",
                            "tiktok.png",
                            "youtube.png",
                            "pinterest.png",
                            "giphy.png",
                            "reddit.png",
                            "amazon.png",
                        ].map((logo, index) => (
                            <div key={index} className="w-20 aspect-[20/9] relative">
                                <img
                                    src={`/platforms/${logo}`}
                                    alt=""
                                    className="w-full h-full object-contain object-center absolute inset-0 opacity-70"
                                />
                            </div>
                        ))}

                    </div>
                </div>

                {/* ✅ Bottom Left */}
                <div className="absolute bottom-4 left-10 text-md text-white/80 max-w-md">
                    Organic media planners creating, distributing & optimising
                    search-first content for SEO, Social, PR, AI and LLM search
                </div>

                {/* ✅ Bottom Right */}
                <div className="absolute bottom-4 right-10 text-md text-white/80 text-right">
                    4 Global Offices serving <br />
                    UK, USA (New York) & EU
                </div>

            </div>
        </section>
    );
}