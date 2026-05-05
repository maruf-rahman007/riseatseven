import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children?: ReactNode;
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Button({
  href = "#",
  children = "Explore More Thoughts",
}: ButtonProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-x-2 bg-white text-grey-900 ring-1 ring-grey-900/5 px-6 py-3 rounded-3xl text-base font-medium font-sans-primary tracking-tight overflow-hidden transition-all duration-300 hover:rounded-xl"
    >
      <div className="relative overflow-hidden h-6">
        <div className="flex items-center gap-x-2 transition-transform duration-300 group-hover:-translate-y-6">
          <span>{children}</span>
          <ArrowIcon />
        </div>
        <div className="flex items-center gap-x-2 absolute top-0 left-0 translate-y-6 transition-transform duration-300 group-hover:translate-y-0">
          <span>{children}</span>
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
}