"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import BlogCard from "./BlogCard";

import type { BlogPost } from "../types";
import { blogPosts } from "@/lib/blogposts";

export default function WhatsNew() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  // Show only first 3 on desktop grid
  const desktopPosts = blogPosts.slice(0, 3);

  return (
    <section className="w-full pb-12 xl:pb-24 bg-background">
      <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
        {/* Header */}
        <div className="col-span-12 px-4 md:px-7">
          <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-5 gap-x-5 items-end">
            <div className="col-span-12 md:col-span-9">
              <AnimatedHeading
                word1="What's"
                word2="New"
                inlineImage="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
              />
            </div>
            <div className="hidden md:flex md:col-span-3 justify-end">
              <Button href="/blog">Explore More Thoughts</Button>
            </div>
          </div>
        </div>

        {/* ============ MOBILE: horizontal scroll carousel ============ */}
        <div className="col-span-12 lg:hidden">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto pb-2 px-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {blogPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                className="shrink-0 snap-start py-2 w-[85vw] max-w-[418px]"
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Progress bar — mobile only */}
          <div className="px-4 mt-5 py-3">
            <div className="w-full h-0.5 bg-grey-200 relative overflow-hidden rounded-full">
              <div
                className="absolute inset-y-0 left-0 w-full bg-grey-900 transition-transform duration-300 ease-smooth origin-left"
                style={{ transform: `scaleX(${Math.max(0.1, progress)})` }}
              />
            </div>
          </div>
        </div>

        {/* ============ DESKTOP: 3-column grid ============ */}
        <div className="hidden lg:block col-span-12 px-7">
          <div className="grid grid-cols-3 gap-5">
            {desktopPosts.map((post: BlogPost) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Mobile button */}
        <div className="col-span-12 md:hidden px-4">
          <Button href="/blog">Explore More Thoughts</Button>
        </div>
      </div>
    </section>
  );
}