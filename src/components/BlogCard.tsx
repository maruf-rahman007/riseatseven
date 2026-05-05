"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Badge } from "./Badge";
import type { BlogPost } from "../types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  // Target = where the mouse is. Current = where the circle is now (animated toward target).
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // Only state we keep — toggles blur + circle visibility (rare changes)
  const [active, setActive] = useState(false);

  // rAF loop with linear interpolation (lerp) for buttery smooth follow
  const animate = () => {
    const ease = 0.18; // 0 = no movement, 1 = instant. 0.15–0.25 feels great.
    current.current.x += (target.current.x - current.current.x) * ease;
    current.current.y += (target.current.y - current.current.y) * ease;

    if (circleRef.current) {
      circleRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
    }

    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    target.current.x = e.clientX - rect.left;
    target.current.y = e.clientY - rect.top;
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Snap circle instantly to entry point (no slide-in from corner)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.current = { x, y };
    current.current = { x, y };
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <a
      href={post.href}
      className="group block w-full transition-transform duration-500 ease-smooth hover:-translate-y-2"
    >
      {/* Image area */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-square rounded-2xl lg:rounded-3xl overflow-hidden cursor-none"
      >
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-30">
          <Badge variant="dark">{post.category}</Badge>
        </div>

        {/* Image — blurs on hover */}
        <img
          src={post.image}
          alt={post.imageAlt}
          className="absolute inset-0 w-full h-full object-cover transition-[filter,transform] duration-500 ease-smooth"
          style={{
            filter: active ? "blur(15px)" : "blur(0px)",
            transform: active ? "scale(1.1)" : "scale(1)",
          }}
        />

        {/* Mint cursor circle — animated via rAF, NOT React state */}
        <div
          ref={circleRef}
          className="absolute top-0 left-0 z-20 pointer-events-none w-24 h-24 rounded-full bg-[#A8F0D6] flex items-center justify-center will-change-transform"
          style={{
            opacity: active ? 1 : 0,
            transition: "opacity 250ms ease",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-grey-900"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-1 mt-5">
        <Badge variant="light" avatar={post.author.avatar}>
          {post.author.name}
        </Badge>
        <Badge variant="light" icon={<span>⏱</span>}>
          {post.readTime}
        </Badge>
      </div>

      <h3 className="mt-3 text-grey-900 text-2xl xl:text-3xl leading-none font-sans-primary font-medium tracking-tight text-balance">
        {post.title}
      </h3>
    </a>
  );
}