import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <>

      {/* MAIN FLOATING NAV */}
      <div className="fixed top-[72px] left-0 w-full z-40 px-4">
        <div className="mx-auto max-w-[1840px] rounded-[32px] 
                        bg-white/10 backdrop-blur-xl 
                        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                        px-10 py-6 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-white text-[26px] font-semibold tracking-[-0.02em]"
          >
            Rise at Seven°
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden xl:flex items-center gap-12 text-white text-[15px] font-medium">
            <Link href="#">Services +</Link>
            <Link href="#">International +</Link>
            <Link href="#">About +</Link>
            <Link href="#">Work</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Webinar</Link>
          </nav>

          {/* CTA */}
          <Link
            href="#"
            className="bg-white text-black px-7 py-3.5 rounded-full 
                       font-medium flex items-center gap-2 
                       hover:scale-105 transition-transform duration-300"
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}