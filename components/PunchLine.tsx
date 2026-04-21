"use client";
import { motion } from "framer-motion";

interface Props {
  line1: string;
  line2: string;
  cta?: { label: string; href: string };
  dark?: boolean;
}

export default function PunchLine({ line1, line2, cta, dark = true }: Props) {
  return (
    <div className={`relative py-20 md:py-28 overflow-hidden ${dark ? "bg-[#080808]" : "bg-[#0d0d0d]"}`}>
      {/* Gold glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] bg-[#c9a84c]/4 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[clamp(1.8rem,4.5vw,4rem)] font-bold text-white/90 leading-tight">
            {line1}
          </p>
          <p className="text-[clamp(1.8rem,4.5vw,4rem)] font-bold gold-text leading-tight mt-1">
            {line2}
          </p>
        </motion.div>

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <button
              onClick={() => document.querySelector(cta.href)?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 border border-[#c9a84c]/50 text-[#c9a84c] text-xs tracking-[0.35em] uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            >
              {cta.label}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
