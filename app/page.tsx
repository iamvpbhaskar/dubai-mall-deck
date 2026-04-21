import NavBar from "@/components/NavBar";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import PunchLine from "@/components/PunchLine";
import HeroSection from "@/sections/HeroSection";
import WhySection from "@/sections/WhySection";
import RetailSection from "@/sections/RetailSection";
import LuxurySection from "@/sections/LuxurySection";
import DiningSection from "@/sections/DiningSection";
import AttractionsSection from "@/sections/AttractionsSection";
import EventsSection from "@/sections/EventsSection";
import SponsorshipSection from "@/sections/SponsorshipSection";
import LeasingSection from "@/sections/LeasingSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <FloatingNav />
      <main>
        <HeroSection />

        <WhySection />

        <PunchLine
          line1="This is where the world gathers."
          line2="Your brand belongs here."
          cta={{ label: "Explore Leasing", href: "#leasing" }}
        />

        <LeasingSection />

        <RetailSection />

        <PunchLine
          line1="1,200 brands. One address."
          line2="The most coveted retail real estate on earth."
          dark={false}
        />

        <LuxurySection />

        <DiningSection />

        <PunchLine
          line1="Every meal. Every moment."
          line2="An experience worth returning for."
          dark={true}
        />

        <AttractionsSection />

        <PunchLine
          line1="4 world records. 12 million entertainment visits."
          line2="There is nowhere else like this."
          cta={{ label: "Host Your Event", href: "#events" }}
          dark={false}
        />

        <EventsSection />

        <PunchLine
          line1="100 million eyes. Every year."
          line2="Make your brand impossible to ignore."
          cta={{ label: "View Sponsorship Tiers", href: "#sponsorship" }}
          dark={true}
        />

        <SponsorshipSection />
      </main>
      <Footer />
    </>
  );
}
