"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";

const dining = [
  {
    name: "The Waterfront",
    type: "Fine Dining",
    desc: "Panoramic views of the Burj Khalifa fountain with curated tasting menus.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    name: "Global Kitchen",
    type: "World Cuisine",
    desc: "200+ restaurants spanning every continent — from Tokyo ramen to Parisian bistros.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    name: "The Food Court",
    type: "Casual Dining",
    desc: "A curated food hall experience with 50+ concepts under one spectacular roof.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },
];

export default function DiningSection() {
  return (
    <section id="dining" className="relative bg-[#0d0d0d] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Dining & Lifestyle</p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.95]">
            Food as an<br />
            <span className="gold-text">Experience</span>
          </h2>
          <GoldDivider className="mt-8 max-w-xs mx-auto" />
          <p className="text-white/40 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            200+ dining concepts. From street food to Michelin-starred. Every meal is a destination.
          </p>
        </FadeIn>

        {/* Dining cards — fixed: gradient overlay on the card root, not inside aspect wrapper */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-24">
          {dining.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient always on top of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-2">{d.type}</div>
                <h3 className="text-xl font-bold mb-2">{d.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width feature banner */}
        <FadeIn>
          <div className="relative overflow-hidden h-[380px] md:h-[480px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80"
              alt="Restaurant ambiance"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/60 to-[#080808]/10" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
              <div className="max-w-lg">
                <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Signature Experience</p>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Dinner with a<br />View of the World
                </h3>
                <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
                  The Dubai Fountain — the world's largest choreographed fountain — performs nightly, visible from our waterfront dining terrace.
                </p>
                <div className="flex gap-10">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#c9a84c]">200+</div>
                    <div className="text-xs text-white/40 tracking-[0.2em] uppercase mt-1">Restaurants</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#c9a84c]">30+</div>
                    <div className="text-xs text-white/40 tracking-[0.2em] uppercase mt-1">Cuisines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
