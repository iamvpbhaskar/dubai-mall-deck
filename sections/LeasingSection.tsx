"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";

const paths = [
  {
    id: "luxury",
    label: "Luxury Flagship",
    tag: "Boulevard Level",
    size: "2,000–15,000 sqft",
    desc: "The most prestigious retail addresses in the Middle East. Join Louis Vuitton, Chanel, and Hermès on the Boulevard.",
    features: ["Prime boulevard frontage", "Double-height ceilings", "Dedicated VIP entrance", "Concierge services", "Exclusive clientele access"],
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
    color: "#c9a84c",
  },
  {
    id: "midtier",
    label: "Premium Retail",
    tag: "Main Atrium",
    size: "500–5,000 sqft",
    desc: "High-traffic zones with maximum visibility. Ideal for established brands seeking scale and footfall.",
    features: ["Atrium & main mall frontage", "High footfall corridors", "Flexible fit-out options", "Anchor tenant adjacency", "Digital display integration"],
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    color: "#a0a0a0",
  },
  {
    id: "fnb",
    label: "F&B Concept",
    tag: "Dining District",
    size: "300–3,000 sqft",
    desc: "From waterfront fine dining to casual concepts. Position your brand in the world's most visited dining destination.",
    features: ["Waterfront & fountain views", "Outdoor terrace options", "Full kitchen infrastructure", "Delivery integration", "Event catering rights"],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    color: "#c97a4c",
  },
  {
    id: "popup",
    label: "Pop-Up & Kiosk",
    tag: "Flexible Terms",
    size: "50–500 sqft",
    desc: "Test, launch, or activate. Short-term formats with maximum flexibility and immediate access to 100M visitors.",
    features: ["1-week to 12-month terms", "Turnkey setup available", "Prime seasonal locations", "Launch event support", "Performance analytics"],
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    color: "#4ca8c9",
  },
];

export default function LeasingSection() {
  const [active, setActive] = useState("luxury");
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", category: "", size: "", message: "" });

  const current = paths.find((p) => p.id === active)!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/leasing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setForm({ name: "", company: "", email: "", category: "", size: "", message: "" });
    } catch (err) {
      setError("Failed to submit enquiry. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="leasing" className="relative bg-[#080808] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Leasing Paths</p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.95]">
            Find Your<br />
            <span className="gold-text">Space</span>
          </h2>
          <GoldDivider className="mt-8 max-w-xs mx-auto" />
          <p className="text-white/40 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            From luxury flagships to pop-up concepts — every format, every category, every ambition.
          </p>
        </FadeIn>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {paths.map((p) => (
            <button key={p.id} onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 text-xs tracking-[0.25em] uppercase border transition-all duration-300 ${
                active === p.id
                  ? "bg-[#c9a84c] text-black border-[#c9a84c] font-bold"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}>
              {p.label}
            </button>
          ))}
        </div>

        {/* Active path detail */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-0 border border-white/[0.06]">

            {/* Image */}
            <div className="relative h-[280px] md:h-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={current.img} alt={current.label} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/60 md:bg-gradient-to-l" />
              <div className="absolute top-6 left-6 px-3 py-1.5 border text-[10px] tracking-[0.3em] uppercase"
                style={{ borderColor: current.color, color: current.color }}>
                {current.tag}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 bg-[#0a0a0a]">
              <div className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-2">{current.size}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{current.label}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{current.desc}</p>
              <GoldDivider className="mb-6" />
              <ul className="space-y-2.5 mb-8">
                {current.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => { setForm(f => ({ ...f, category: current.label })); setShowForm(true); }}
                className="px-8 py-3.5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e8c97a] transition-colors duration-300 w-full md:w-auto">
                Enquire About This Space
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats row */}
        <FadeIn className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.06]">
            {[
              { val: "1,200+", label: "Total Units" },
              { val: "5.9M sqft", label: "Leasable Area" },
              { val: "98%", label: "Occupancy Rate" },
              { val: "100M+", label: "Annual Footfall" },
            ].map((s) => (
              <div key={s.label} className="p-8 text-center border-r border-white/[0.06] last:border-r-0 hover:bg-white/[0.02] transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-[#c9a84c]">{s.val}</div>
                <div className="text-xs text-white/40 tracking-[0.2em] uppercase mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Leasing enquiry modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/95 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}>
            <motion.div initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 40 }}
              className="bg-[#111] border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {!submitted ? (
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-1">Leasing Enquiry</p>
                      <h3 className="text-xl font-bold">{form.category}</h3>
                    </div>
                    <button onClick={() => setShowForm(false)} className="text-white/40 hover:text-white text-2xl leading-none">×</button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Brand *</label>
                        <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="Brand name" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="email@brand.com" />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Desired Size</label>
                      <input value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors" placeholder="e.g. 1,000 sqft" />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Tell Us More</label>
                      <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                        placeholder="Brand concept, timeline, requirements..." />
                    </div>
                    <button type="submit"
                      className="w-full py-4 bg-[#c9a84c] text-black text-xs tracking-[0.4em] uppercase font-bold hover:bg-[#e8c97a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}>
                      {loading ? "Submitting..." : "Submit Enquiry"}
                    </button>
                    {error && <p className="text-red-400 text-xs text-center mt-2">{error}</p>}
                  </form>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-14 h-14 border-2 border-[#c9a84c] rotate-45 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-[#c9a84c] text-xl -rotate-45">✓</span>
                  </div>
                  <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-3">Enquiry Sent</p>
                  <h3 className="text-2xl font-bold mb-3">We&apos;ll Be In Touch</h3>
                  <p className="text-white/50 text-sm mb-6">Our leasing team will contact you within 24 hours.</p>
                  <button onClick={() => { setShowForm(false); setSubmitted(false); }}
                    className="px-6 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.3em] uppercase hover:bg-[#c9a84c] hover:text-black transition-all">
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
