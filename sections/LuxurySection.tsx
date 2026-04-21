"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function LuxurySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="luxury" ref={ref} className="relative bg-[#080808] py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <FadeIn>
              <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6">Luxury Segment</p>
              <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-bold uppercase leading-tight">
                Where Luxury<br />
                <span className="gold-text">Lives</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/50 mt-8 leading-relaxed text-base max-w-md">
                The Dubai Mall's luxury corridor is home to the world's most coveted brands. A curated environment where architecture, service, and clientele align at the highest level.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { val: "350+", label: "Luxury Brands" },
                  { val: "60%", label: "International Clientele" },
                  { val: "3x", label: "Avg. Dwell Time vs. Competitors" },
                  { val: "#1", label: "Luxury Retail Destination, MENA" },
                ].map((s) => (
                  <div key={s.label} className="border-l-2 border-[#c9a84c]/30 pl-4">
                    <div className="text-2xl font-bold text-[#c9a84c]">{s.val}</div>
                    <div className="text-xs text-white/40 mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: parallax images */}
          <div className="relative h-[380px] md:h-[560px] overflow-hidden">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[65%] h-[70%] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
                alt="Luxury fashion"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/10 to-transparent" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[55%] h-[60%] overflow-hidden border-2 border-[#c9a84c]/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                alt="Luxury watch"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Gold accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#c9a84c]/30 rotate-45" />
          </div>
        </div>

        {/* Full-width luxury quote */}
        <FadeIn className="mt-32 text-center" delay={0.1}>
          <div className="relative">
            <div className="text-[clamp(1.5rem,4vw,3.5rem)] font-light italic text-white/80 leading-relaxed max-w-4xl mx-auto">
              "The Dubai Mall is not just a shopping destination — it is a statement of what the world's most ambitious retail experience looks like."
            </div>
            <div className="mt-6 text-[#c9a84c] text-xs tracking-[0.4em] uppercase">— Emaar Properties</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
