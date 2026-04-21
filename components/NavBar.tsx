"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Why Dubai Mall", href: "#why" },
  { label: "Leasing", href: "#leasing" },
  { label: "Retail", href: "#retail" },
  { label: "Luxury", href: "#luxury" },
  { label: "Dining", href: "#dining" },
  { label: "Attractions", href: "#attractions" },
  { label: "Events", href: "#events" },
  { label: "Sponsorship", href: "#sponsorship" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/92 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo — fixed width so it never gets squeezed */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex flex-col leading-none flex-shrink-0"
          >
            <span className="text-[9px] tracking-[0.4em] text-[#c9a84c] uppercase font-light">The</span>
            <span className="text-base lg:text-lg font-bold tracking-[0.12em] uppercase text-white whitespace-nowrap">
              Dubai Mall
            </span>
          </button>

          {/* Desktop links — only visible on lg+ */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[10px] xl:text-[11px] tracking-[0.15em] xl:tracking-[0.18em] uppercase text-white/55 hover:text-[#c9a84c] transition-colors duration-300 whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA — lg shows short label, xl shows full */}
          <button
            onClick={() => scrollTo("#events")}
            className="hidden lg:block flex-shrink-0 px-3 py-1.5 text-[9px] xl:text-[10px] tracking-[0.2em] uppercase border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300 whitespace-nowrap"
          >
            <span className="lg:hidden xl:inline">Partner With Us</span>
            <span className="hidden lg:inline xl:hidden">Partner</span>
          </button>

          {/* Hamburger — visible below lg */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 relative z-[60] flex-shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile / tablet full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-[#080808]/98 backdrop-blur-sm flex flex-col items-center justify-center gap-6 px-8"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#c9a84c] transition-colors duration-300 group"
            >
              <span className="block w-5 h-px bg-white/60 group-hover:bg-[#c9a84c] rotate-45 absolute transition-colors duration-300" />
              <span className="block w-5 h-px bg-white/60 group-hover:bg-[#c9a84c] -rotate-45 absolute transition-colors duration-300" />
            </button>

            {/* Logo in menu */}
            <div className="mb-4 text-center">
              <span className="text-[10px] tracking-[0.4em] text-[#c9a84c] uppercase block">The</span>
              <span className="text-2xl font-bold tracking-[0.15em] uppercase text-white">Dubai Mall</span>
            </div>

            <div className="w-12 h-px bg-[#c9a84c]/40 mb-2" />

            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                onClick={() => scrollTo(l.href)}
                className="text-xl tracking-[0.25em] uppercase text-white/75 hover:text-[#c9a84c] transition-colors duration-200"
              >
                {l.label}
              </motion.button>
            ))}

            <div className="w-12 h-px bg-[#c9a84c]/40 mt-2" />

            <button
              onClick={() => scrollTo("#events")}
              className="mt-2 px-10 py-3.5 border border-[#c9a84c] text-[#c9a84c] tracking-[0.25em] uppercase text-sm hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
            >
              Partner With Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
