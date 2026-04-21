"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";

const stats = [
  { end: 100, suffix: "M+", label: "Annual Visitors", sub: "More than France's entire tourism" },
  { end: 1200, suffix: "+", label: "Retail Stores", sub: "Across 5.9M sq ft of leasable space" },
  { end: 200, suffix: "+", label: "F&B Outlets", sub: "From street food to Michelin stars" },
  { end: 160, suffix: "+", label: "Countries Represented", sub: "A truly global audience" },
];

const pillars = [
  {
    title: "Unmatched Footfall",
    body: "The Dubai Mall consistently ranks as the world's most visited destination — surpassing the Eiffel Tower and Times Square.",
  },
  {
    title: "Premium Demographics",
    body: "Average visitor spend exceeds global retail benchmarks. 60% of visitors are international tourists with high purchasing power.",
  },
  {
    title: "Media Amplification",
    body: "Every activation reaches beyond the mall. Our digital ecosystem delivers 500M+ annual impressions across social and broadcast.",
  },
  {
    title: "Year-Round Platform",
    body: "365 days of programming — from global fashion weeks to record-breaking events — keeps the audience engaged and returning.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="relative bg-[#080808] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">The Opportunity</p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.95]">
            Why This<br />
            <span className="gold-text">Property</span>
          </h2>
          <GoldDivider className="mt-8 max-w-xs mx-auto" />
        </FadeIn>

        {/* Stats grid — each cell animates independently, no wrapper breaking the grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 mb-20 md:mb-24 border border-white/[0.06]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="p-4 md:p-8 lg:p-12 text-center border-r border-b border-white/[0.06] last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="text-[clamp(2rem,4vw,4rem)] font-bold gold-text leading-none tabular-nums">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-white text-xs md:text-sm font-semibold mt-3 tracking-wide">{s.label}</div>
              <div className="text-white/40 text-[10px] md:text-xs mt-2 leading-relaxed">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 border border-white/[0.06]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-6 md:p-10 lg:p-14 border-r border-b border-white/[0.06] odd:border-r-0 md:odd:border-r md:[&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 group hover:bg-white/[0.02] transition-colors duration-300 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-transparent group-hover:bg-[#c9a84c] transition-colors duration-300" />
              <div className="text-[#c9a84c] text-sm md:text-lg mb-4 font-mono">0{i + 1}</div>
              <h3 className="text-lg md:text-xl font-bold tracking-wide mb-3">{p.title}</h3>
              <p className="text-white/50 leading-relaxed text-xs md:text-sm">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Global reach visual */}
        <FadeIn className="mt-20 md:mt-24 text-center" delay={0.2}>
          <div className="relative py-12">
            <div
              aria-hidden="true"
              className="text-[clamp(5rem,18vw,16rem)] font-black text-white/[0.025] leading-none select-none uppercase tracking-tighter pointer-events-none"
            >
              Global
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-3">Reach</p>
                <p className="text-white text-lg md:text-2xl lg:text-4xl font-bold">Every Continent.<br />One Mall.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
