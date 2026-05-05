"use client";

import type { ReactNode } from "react";
import type { BadgeVariant } from "../types";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  avatar?: string;
}

export function Badge({
  children,
  variant = "dark",
  icon,
  avatar,
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    dark: "text-white bg-white/20 backdrop-blur-md",
    light: "text-grey-900 bg-white",
  };

  return (
    <div
      className={`inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1.5 min-h-7 xl:min-h-8 xl:text-base ${variants[variant]}`}
    >
      {avatar && (
        <span className="-ml-1.5 w-5 h-5 rounded-full overflow-hidden">
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        </span>
      )}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </div>
  );
}