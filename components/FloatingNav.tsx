"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero",         label: "Home" },
  { id: "why",          label: "Why Dubai Mall" },
  { id: "leasing",      label: "Leasing" },
  { id: "retail",       label: "Retail" },
  { id: "luxury",       label: "Luxury" },
  { id: "dining",       label: "Dining" },
  { id: "attractions",  label: "Attractions" },
  { id: "events",       label: "Events" },
  { id: "sponsorship",  label: "Sponsorship" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after hero loads
    const t = setTimeout(() => setVisible(true), 2600);

    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => { clearTimeout(t); observers.forEach((o) => o.disconnect()); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3 hidden md:flex"
        >
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center gap-3 group"
              aria-label={`Navigate to ${label}`}
            >
              {/* Label tooltip */}
              <AnimatePresence>
                {hovered === id && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] whitespace-nowrap"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Dot */}
              <motion.div
                animate={{
                  width: active === id ? 24 : 6,
                  backgroundColor: active === id ? "#c9a84c" : "rgba(255,255,255,0.25)",
                }}
                transition={{ duration: 0.3 }}
                className="h-px rounded-full"
              />
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
