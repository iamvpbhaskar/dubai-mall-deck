"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const words1 = ["THE", "WORLD"];
const words2 = ["COMES", "HERE"];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1100);
    const t3 = setTimeout(() => setPhase(3), 1800);
    const t4 = setTimeout(() => setPhase(4), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const scrollDown = () => document.querySelector("#why")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#080808]">

      {/* ── BACKGROUND: video with Dubai skyline sources ── */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 origin-center">
        {/* Fallback poster — fades out once video starts playing */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai Mall aerial"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoPlaying ? "opacity-0" : "opacity-100"}`}
        />
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="auto"
          onPlaying={() => setVideoPlaying(true)}
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-125"
        >
          <source src="https://videos.pexels.com/video-files/29153186/29153186-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/31257754/31257754-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/26493151/26493151-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/7168742/7168742-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>

        {/* Rich shadow & depth layers */}
        {/* Top shadow - dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-[#000000]/40 to-transparent" />
        
        {/* Side shadows - cinematic framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 via-transparent to-[#000000]/70" />
        
        {/* Bottom rich gradient with gold tint */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#000000]/95 via-[#1a1410]/60 to-transparent" />
        
        {/* Diagonal shadow overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/50 via-transparent to-[#000000]/40" />
        
        {/* Gold accent glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#c9a84c]/8 via-[#c9a84c]/2 to-transparent blur-2xl" />
        
        {/* Subtle radial shadow from center */}
        <div className="absolute inset-0 bg-radial-gradient opacity-30" style={{
          backgroundImage: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
        }} />
      </motion.div>

      {/* ── FILM GRAIN ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* ── CONTENT ── */}
      <motion.div style={{ opacity: contentOpacity }}
        className="relative z-10 text-center px-3 sm:px-6 max-w-6xl mx-auto w-full">

        {/* Background glow effect behind content */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/30 via-transparent to-[#000000]/50 rounded-full" />
        </div>

        {/* Eyebrow */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }} className="flex items-center justify-center gap-4 mb-10">
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }} className="h-px w-16 bg-[#c9a84c] origin-left" />
              <span className="text-[#c9a84c] text-[10px] tracking-[0.6em] uppercase font-light">
                Dubai, United Arab Emirates
              </span>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }} className="h-px w-16 bg-[#c9a84c] origin-right" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Headline — word stagger */}
        <h1 className="text-[clamp(2rem,8vw,10rem)] font-black leading-[0.9] tracking-[-0.02em] uppercase drop-shadow-2xl" style={{
          textShadow: "0 20px 40px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.6), 2px 2px 4px rgba(201,168,76,0.3)"
        }}>
          <div className="flex justify-center gap-[0.15em] mb-2">
            {words1.map((word, i) => (
              <AnimatePresence key={word}>
                {phase >= 1 && (
                  <motion.span
                    initial={{ opacity: 0, y: 60, skewY: 4 }}
                    animate={{ opacity: 1, y: 0, skewY: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-white"
                  >{word}</motion.span>
                )}
              </AnimatePresence>
            ))}
          </div>
          <div className="flex justify-center gap-[0.15em]">
            {words2.map((word, i) => (
              <AnimatePresence key={word}>
                {phase >= 2 && (
                  <motion.span
                    initial={{ opacity: 0, y: 60, skewY: 4 }}
                    animate={{ opacity: 1, y: 0, skewY: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block gold-text"
                  >{word}</motion.span>
                )}
              </AnimatePresence>
            ))}
          </div>
        </h1>

        {/* Sub */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-8 text-white/50 text-sm md:text-base tracking-[0.35em] uppercase drop-shadow-lg"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.7)" }}>
              100 Million Visitors &nbsp;·&nbsp; One Address
            </motion.p>
          )}
        </AnimatePresence>

        {/* Stats + CTAs */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}>
              <div className="mt-12 flex items-center justify-center gap-6 md:gap-16">
                {[
                  { val: "#1", label: "Most Visited" },
                  { val: "1,200+", label: "Retail Stores" },
                  { val: "5.9M sqft", label: "Leasable Space" },
                ].map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.2 }}
                    className="text-center drop-shadow-lg"
                    style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}>
                    <div className="text-xl md:text-3xl font-bold text-[#c9a84c]">{s.val}</div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-white/35 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-9 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.35em] uppercase font-bold hover:bg-[#e8c97a] transition-colors duration-300 shadow-2xl hover:shadow-[0_20px_40px_rgba(201,168,76,0.4)]">
                  Partner With Us
                </motion.button>
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.querySelector("#retail")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-9 py-4 border border-white/25 text-white text-xs tracking-[0.35em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(201,168,76,0.2)]">
                  Lease Retail Space
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {phase >= 4 && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            onClick={scrollDown} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/25">Scroll</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Corner accents */}
      <div className="absolute top-24 left-8 w-8 h-8 border-l border-t border-[#c9a84c]/20" />
      <div className="absolute top-24 right-8 w-8 h-8 border-r border-t border-[#c9a84c]/20" />
      <div className="absolute bottom-16 left-8 w-8 h-8 border-l border-b border-[#c9a84c]/20" />
      <div className="absolute bottom-16 right-8 w-8 h-8 border-r border-b border-[#c9a84c]/20" />
    </section>
  );
}
