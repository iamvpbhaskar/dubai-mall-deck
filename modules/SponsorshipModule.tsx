"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoldDivider from "@/components/GoldDivider";

const tiers = [
  {
    id: "title",
    name: "Title Partner",
    price: "AED 5M+",
    tag: "Exclusive",
    color: "#c9a84c",
    desc: "The highest level of brand integration. Your name becomes synonymous with The Dubai Mall.",
    benefits: [
      "Naming rights on a major venue or wing",
      "Permanent digital & physical signage",
      "Exclusive category rights",
      "VIP access to all events",
      "Co-branded campaigns with 500M+ reach",
      "Dedicated activation space year-round",
      "Executive hospitality suite",
      "Annual strategy sessions with leadership",
    ],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    id: "presenting",
    name: "Presenting Sponsor",
    price: "AED 1M–5M",
    tag: "Premium",
    color: "#a0a0a0",
    desc: "Lead sponsorship of a signature event, attraction, or seasonal campaign.",
    benefits: [
      "Lead billing on sponsored property",
      "Premium digital display network",
      "Event activation rights",
      "Social media co-promotion",
      "Audience data & analytics reports",
      "VIP event access (20 passes)",
      "Press & media inclusion",
      "Quarterly performance reviews",
    ],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: "associate",
    name: "Associate Partner",
    price: "AED 250K–1M",
    tag: "Flexible",
    color: "#8a7a5a",
    desc: "Targeted brand presence tied to specific zones, events, or seasonal moments.",
    benefits: [
      "Zone or category sponsorship",
      "Digital display placements",
      "Event co-branding",
      "Social media mentions",
      "Audience demographic reports",
      "VIP event access (8 passes)",
      "Branded content opportunities",
      "Activation space (select dates)",
    ],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

const audienceData = [
  { label: "Annual Visitors", val: "100M+" },
  { label: "Avg. Household Income", val: "Top 20%" },
  { label: "International Visitors", val: "60%" },
  { label: "Age 25–44", val: "58%" },
  { label: "Social Impressions/Year", val: "500M+" },
  { label: "Dwell Time", val: "3.2 hrs" },
];

export default function SponsorshipModule() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tierName, setTierName] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", budget: "", message: "" });

  const open = (tier: string) => { setTierName(tier); setShowForm(true); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/sponsorship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tier: tierName }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setForm({ name: "", company: "", email: "", budget: "", message: "" });
    } catch (err) {
      setError("Failed to submit enquiry. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12">
      {/* Audience data strip */}
      <div className="grid grid-cols-3 md:grid-cols-6 border border-white/[0.06] mb-12">
        {audienceData.map((d) => (
          <div key={d.label} className="p-5 text-center border-r border-white/[0.06] last:border-r-0">
            <div className="text-xl md:text-2xl font-bold text-[#c9a84c]">{d.val}</div>
            <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase mt-1">{d.label}</div>
          </div>
        ))}
      </div>

      {/* Tier cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelected(selected === tier.id ? null : tier.id)}
            className={`group cursor-pointer border transition-all duration-300 ${
              selected === tier.id ? "border-[#c9a84c]" : "border-white/10 hover:border-white/30"
            }`}
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tier.img} alt={tier.name} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
              <div className="absolute top-3 left-3 px-2 py-1 text-[9px] tracking-[0.3em] uppercase border"
                style={{ borderColor: tier.color, color: tier.color }}>
                {tier.tag}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: tier.color }}>
                    {tier.price}
                  </div>
                  <h4 className="text-lg font-bold">{tier.name}</h4>
                </div>
                <motion.div animate={{ rotate: selected === tier.id ? 45 : 0 }}
                  className="text-[#c9a84c] text-xl mt-1">+</motion.div>
              </div>
            </div>

            {/* Expanded */}
            <AnimatePresence>
              {selected === tier.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden border-t border-[#c9a84c]/20"
                >
                  <div className="p-6 pt-4">
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{tier.desc}</p>
                    <GoldDivider className="mb-4" />
                    <ul className="space-y-2 mb-5">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-white/50">
                          <div className="w-1 h-1 bg-[#c9a84c] rounded-full mt-1.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => { e.stopPropagation(); open(tier.name); }}
                      className="w-full py-3 bg-[#c9a84c] text-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e8c97a] transition-colors"
                    >
                      Enquire Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Enquiry modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/95 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}>
            <motion.div initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 40 }}
              className="bg-[#111] border border-white/10 w-full max-w-lg">
              {!submitted ? (
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-1">Sponsorship Enquiry</p>
                      <h3 className="text-xl font-bold">{tierName}</h3>
                    </div>
                    <button onClick={() => setShowForm(false)} className="text-white/40 hover:text-white text-2xl leading-none">×</button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors"
                          placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Company *</label>
                        <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors"
                          placeholder="Company" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors"
                        placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Budget Range</label>
                      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors">
                        <option value="">Select range</option>
                        <option>AED 250K – 1M</option>
                        <option>AED 1M – 5M</option>
                        <option>AED 5M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Your Vision</label>
                      <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                        placeholder="Tell us about your brand and goals..." />
                    </div>
                    <button type="submit"
                      className="w-full py-4 bg-[#c9a84c] text-black text-xs tracking-[0.4em] uppercase font-bold hover:bg-[#e8c97a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
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
                  <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-3">Received</p>
                  <h3 className="text-2xl font-bold mb-3">Thank You</h3>
                  <p className="text-white/50 text-sm mb-6">Our partnerships team will contact you within 48 hours.</p>
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
    </div>
  );
}
