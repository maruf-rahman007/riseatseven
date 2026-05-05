"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  word1?: string;
  word2?: string;
  inlineImage: string;
}

export default function AnimatedHeading({
  word1 = "What's",
  word2 = "New",
  inlineImage,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const renderLetters = (word: string) =>
    word.split("").map((letter: string, i: number) => (
      <span key={i} className="inline-flex flex-col relative overflow-hidden">
        <span
          className="block relative transition-transform duration-700 ease-smooth"
          style={{
            transform: visible ? "translateY(0%)" : "translateY(100%)",
            transitionDelay: `${i * 40}ms`,
          }}
        >
          {letter}
        </span>
      </span>
    ));

  return (
    <h2
      ref={ref}
      aria-label={`${word1} ${word2}`}
      className="inline-flex flex-wrap items-center gap-x-3 text-grey-900 font-sans-primary font-medium tracking-tight text-6xl md:text-7xl 2xl:text-8xl leading-[0.9]"
    >
      <span className="inline-flex overflow-hidden leading-[0.9] pb-2">
        {renderLetters(word1)}
      </span>

      <span
        className="inline-block overflow-hidden bg-black/5 transition-all duration-1000 ease-smooth"
        style={{
          borderRadius: "15%",
          width: visible ? "clamp(50px, 7vw, 110px)" : "0px",
          height: visible ? "clamp(50px, 7vw, 110px)" : "0px",
          opacity: visible ? 1 : 0,
          transitionDelay: "300ms",
        }}
      >
        <img src={inlineImage} alt="" className="w-full h-full object-cover" />
      </span>

      <span className="inline-flex overflow-hidden leading-[0.9] pb-2">
        {renderLetters(word2)}
      </span>
    </h2>
  );
}