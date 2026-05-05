"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react";

interface ReadyToRiseProps {
  text?: string;
}

export default function ReadyToRise({
  text = "Ready to Rise at Seven?",
}: ReadyToRiseProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    mass: 0.3,
  });

  // Whole heading slides right → left
  const x = useTransform(smoothProgress, [0, 1], ["100vw", "-200vw"]);

  // Build characters with letter index (skipping spaces)
  const chars: { char: string; index: number; isSpace: boolean }[] = [];
  let letterIdx = 0;
  for (const ch of text) {
    if (ch === " ") {
      chars.push({ char: " ", index: -1, isSpace: true });
    } else {
      chars.push({ char: ch, index: letterIdx, isSpace: false });
      letterIdx++;
    }
  }
  const totalLetters = letterIdx;

  return (
    <section
      ref={triggerRef}
      className="relative h-[35vh] lg:h-[50vh] flex items-center overflow-hidden bg-background m-0 p-0"
    >
      <motion.h2
        style={{ x }}
        className="shrink-0 text-[28vw] lg:text-[16vw] 4xl:text-[14vw] font-medium tracking-tight leading-none whitespace-nowrap text-grey-900 will-change-transform"
        aria-label={text}
      >
        {chars.map((item, i) =>
          item.isSpace ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <Letter
              key={i}
              char={item.char}
              index={item.index}
              total={totalLetters}
              progress={smoothProgress}
            />
          )
        )}
      </motion.h2>
    </section>
  );
}

/* ---------- Each letter falls instantly when it enters the viewport ---------- */
function Letter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // 👇 INSTANT FALL: tiny animation window, fires the moment letter enters
  const animWindow = 0.05;     // each letter lands in only 5% of scroll (snappy)
  const totalStagger = 0.55;   // spread across most of the scroll

  // Start very early (almost from scroll 0) so first letter falls immediately
  const start = (index / Math.max(1, total - 1)) * totalStagger;
  const end = Math.min(start + animWindow, 1);

  // Falls from above (-60%) → resting (0%)
  const y = useTransform(progress, [start, end], ["-60%", "0%"]);
  // Slight tilt: 10deg → 0deg
  const rotate = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.span
      style={{
        y,
        rotate,
        display: "inline-block",
        transformOrigin: "50% 50%",
      }}
    >
      {char}
    </motion.span>
  );
}