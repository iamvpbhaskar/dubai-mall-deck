"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";

const attractions = [
  {
    id: "aquarium",
    name: "Dubai Aquarium",
    tag: "World Record",
    desc: "The world's largest suspended aquarium — 10 million litres, 33,000 aquatic animals, and a walk-through tunnel.",
    stat: "33,000",
    statLabel: "Aquatic Animals",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    color: "#0a4a6e",
  },
  {
    id: "icerink",
    name: "Dubai Ice Rink",
    tag: "Olympic Size",
    desc: "An Olympic-sized ice rink in the heart of the desert. Year-round skating, shows, and corporate events.",
    stat: "Olympic",
    statLabel: "Standard Size",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    color: "#0a2a4e",
  },
  {
    id: "vr",
    name: "VR Park",
    tag: "Next-Gen",
    desc: "Dubai's largest virtual reality theme park — 18 immersive experiences across 7,000 sq ft.",
    stat: "18",
    statLabel: "VR Experiences",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    color: "#2a0a4e",
  },
  {
    id: "fountain",
    name: "Dubai Fountain",
    tag: "World's Largest",
    desc: "The world's largest choreographed fountain system. 275 metres of water, light, and music.",
    stat: "275m",
    statLabel: "Fountain Length",
    img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&q=80",
    color: "#0a3a2e",
  },
];

export default function AttractionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="attractions" ref={ref} className="relative bg-[#080808] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Attractions & Entertainment</p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.95]">
            Beyond<br /><span className="gold-text">Shopping</span>
          </h2>
          <GoldDivider className="mt-8 max-w-xs mx-auto" />
        </FadeIn>

        {/* ── VIDEO FEATURE ── */}
        <FadeIn className="mb-6 md:mb-8">
          <div className="relative overflow-hidden h-[300px] md:h-[480px] group">
            {/* Video with poster fallback */}
            <video
              ref={videoRef}
              autoPlay muted loop playsInline preload="none"
              poster="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1400&q=80"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              {/* Dubai Fountain / Burj Khalifa night show — Pexels free license */}
              <source src="https://videos.pexels.com/video-files/29773587/29773587-hd_1920_1080_25fps.mp4" type="video/mp4" />
              <source src="https://videos.pexels.com/video-files/20242130/20242130-hd_1920_1080_25fps.mp4" type="video/mp4" />
              <source src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />

            {/* Play badge */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/60">Live Experience</span>
            </div>

            <div className="absolute inset-0 flex items-end px-8 md:px-14 pb-10 md:pb-14">
              <div>
                <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-3">World-Class Entertainment</p>
                <h3 className="text-2xl md:text-4xl font-bold max-w-lg leading-tight">
                  4 World Records.<br />One Address.
                </h3>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Attraction rows */}
        <div className="space-y-3 mb-16 md:mb-24">
          {attractions.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative overflow-hidden h-[180px] md:h-[260px] cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.img} alt={a.name} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/70 to-[#080808]/20" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 20% 50%, ${a.color}, transparent 60%)` }} />

              <div className="absolute inset-0 flex items-center px-6 md:px-14">
                <div className="flex items-center gap-6 md:gap-12 w-full">
                  <div className="hidden md:block text-center w-24 flex-shrink-0">
                    <div className="text-3xl lg:text-4xl font-bold text-[#c9a84c] leading-none">{a.stat}</div>
                    <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase mt-1">{a.statLabel}</div>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-[#c9a84c]/20 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase">{a.tag}</span>
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mt-1 mb-2">{a.name}</h3>
                    <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {a.desc}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-10 h-10 border border-white/10 group-hover:border-[#c9a84c] transition-colors duration-300 flex-shrink-0">
                    <span className="text-white/30 group-hover:text-[#c9a84c] transition-colors">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parallax stats banner */}
        <div className="relative overflow-hidden h-[240px] md:h-[300px]">
          <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80"
              alt="Dubai skyline" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#080808]/75" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FadeIn>
              <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase text-center mb-6">The Numbers</p>
              <div className="flex gap-8 md:gap-20 justify-center">
                {[
                  { val: "4", label: "World Records" },
                  { val: "12M+", label: "Entertainment Visits/Year" },
                  { val: "365", label: "Days of Programming" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl md:text-5xl font-bold text-white">{s.val}</div>
                    <div className="text-[10px] md:text-xs text-white/40 tracking-[0.2em] uppercase mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}
