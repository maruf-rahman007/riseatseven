import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import TopStrip from "@/components/TopStip";
import MovingLogos from "@/components/MovingLOgos";

export default function Home() {
  return (
    <main className="w-full bg-[#f2f2f2] min-h-screen">
      <TopStrip />
      <Hero />
      <MovingLogos/>
      
      <FeaturedWork />
      <Services />
      <Footer />
    </main>
  );
}
