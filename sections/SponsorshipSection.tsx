"use client";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";
import SponsorshipModule from "@/modules/SponsorshipModule";

export default function SponsorshipSection() {
  return (
    <section id="sponsorship" className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#c9a84c]/4 blur-[120px] pointer-events-none rounded-full" />
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Brand Partnerships</p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.95]">
            Sponsor the<br />
            <span className="gold-text">World Stage</span>
          </h2>
          <GoldDivider className="mt-8 max-w-xs mx-auto" />
          <p className="text-white/40 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
            Align your brand with the world&apos;s most visited destination. 100 million annual visitors, 500M+ media impressions, and an audience that represents the global premium consumer.
          </p>
        </FadeIn>

        {/* Video banner */}
        <FadeIn className="mb-16 md:mb-20">
          <div className="relative overflow-hidden h-[220px] md:h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
              alt="Brand partnership" loading="lazy"
              className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div>
                <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-3">The Opportunity</p>
                <h3 className="text-2xl md:text-4xl font-bold max-w-lg leading-tight">
                  Your brand. 100 million eyes.<br />Every single year.
                </h3>
              </div>
            </div>
          </div>
        </FadeIn>

        <SponsorshipModule />

      </div>
    </section>
  );
}
