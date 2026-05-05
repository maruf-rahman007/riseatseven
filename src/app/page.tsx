import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import TopStrip from "@/components/TopStip";
import MovingLogos from "@/components/MovingLOgos";
import MarqueeCTA from "@/components/MarqueeCTS";
import LegacyDesktop from "@/components/Legacy";
import WhatsNew from "@/components/WhatsNew";
import ReadyToRise from "@/components/ReadyToRise";

export default function Home() {
  return (
    <main className=" bg-[#f2f2f2]">
      <TopStrip />
      <Hero />
      <MovingLogos/>
      
      <FeaturedWork />
      <Services />
      <MarqueeCTA/>
      <LegacyDesktop/>
      <WhatsNew/>
      <div className="p-20" />
      <ReadyToRise text="Ready to Rise at Seven?" />
      <div className="p-18" />
      <Footer />
    </main>
  );
}
