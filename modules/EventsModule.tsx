"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  eventType: string;
  attendees: string;
  date: string;
  message: string;
}

const eventTypes = [
  {
    id: "corporate",
    name: "Corporate Events",
    icon: "◈",
    capacity: "Up to 5,000",
    desc: "Product launches, conferences, AGMs, and brand activations in world-class venues.",
    features: ["Dedicated event manager", "AV & production support", "Catering partnerships", "Media coverage"],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: "fashion",
    name: "Fashion & Lifestyle",
    icon: "◈",
    capacity: "Up to 2,000",
    desc: "Runway shows, brand launches, and lifestyle activations in premium retail environments.",
    features: ["Runway setup", "Backstage facilities", "VIP lounges", "Press & media access"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "entertainment",
    name: "Entertainment & Live",
    icon: "◈",
    capacity: "Up to 10,000",
    desc: "Concerts, performances, and live experiences with the Burj Khalifa as your backdrop.",
    features: ["Outdoor & indoor stages", "Full production rig", "Fountain show integration", "Broadcast-ready"],
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
  },
  {
    id: "exhibition",
    name: "Exhibitions & Expos",
    icon: "◈",
    capacity: "Up to 50,000 sq ft",
    desc: "Large-scale exhibitions and trade shows in dedicated halls with full logistics support.",
    features: ["Modular booth systems", "Loading dock access", "Security & crowd management", "Ticketing integration"],
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
  },
];

export default function EventsModule() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "", company: "", email: "", phone: "",
    eventType: "", attendees: "", date: "", message: "",
  });

  const selectedEvent = eventTypes.find((e) => e.id === selected);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setForm({ name: "", company: "", email: "", phone: "", eventType: "", attendees: "", date: "", message: "" });
    } catch (err) {
      setError("Failed to submit enquiry. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16">
      {/* Event type grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {eventTypes.map((evt, i) => (
          <motion.div
            key={evt.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelected(selected === evt.id ? null : evt.id)}
            className={`group relative overflow-hidden cursor-pointer border transition-all duration-300 ${
              selected === evt.id
                ? "border-[#c9a84c]"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={evt.img}
                alt={evt.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-1">{evt.capacity}</div>
                  <h4 className="text-lg font-bold">{evt.name}</h4>
                </div>
                <motion.div
                  animate={{ rotate: selected === evt.id ? 45 : 0 }}
                  className="text-[#c9a84c] text-xl mt-1"
                >
                  +
                </motion.div>
              </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {selected === evt.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden border-t border-[#c9a84c]/20"
                >
                  <div className="p-6 pt-4">
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{evt.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {evt.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-white/50">
                          <div className="w-1 h-1 bg-[#c9a84c] rounded-full flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setForm(f => ({ ...f, eventType: evt.name })); setShowForm(true); }}
                      className="mt-5 w-full py-3 bg-[#c9a84c] text-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e8c97a] transition-colors"
                    >
                      Book This Space
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Booking form modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/95 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              className="bg-[#111] border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {!submitted ? (
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-2">Event Enquiry</p>
                      <h3 className="text-2xl font-bold">Host Your Event</h3>
                      {form.eventType && (
                        <p className="text-white/40 text-sm mt-1">{form.eventType}</p>
                      )}
                    </div>
                    <button onClick={() => setShowForm(false)} className="text-white/40 hover:text-white text-2xl leading-none">×</button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition-colors"
                          placeholder="[Your Name]"
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Company *</label>
                        <input
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition-colors"
                          placeholder="[Company Name]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition-colors"
                          placeholder="[email@company.com]"
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Phone</label>
                        <input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition-colors"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Event Type</label>
                        <select
                          value={form.eventType}
                          onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors"
                        >
                          <option value="" className="bg-[#111]">Select type</option>
                          {eventTypes.map((e) => (
                            <option key={e.id} value={e.name} className="bg-[#111]">{e.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Expected Attendees</label>
                        <input
                          value={form.attendees}
                          onChange={(e) => setForm({ ...form, attendees: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition-colors"
                          placeholder="e.g. 500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a84c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">Tell Us About Your Event</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                        placeholder="Describe your vision..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#c9a84c] text-black text-xs tracking-[0.4em] uppercase font-bold hover:bg-[#e8c97a] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Enquiry"}
                    </button>
                    {error && <p className="text-red-400 text-xs text-center mt-2">{error}</p>}
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <div className="w-16 h-16 border-2 border-[#c9a84c] rotate-45 mx-auto mb-8 flex items-center justify-center">
                    <span className="text-[#c9a84c] text-2xl -rotate-45">✓</span>
                  </div>
                  <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Enquiry Received</p>
                  <h3 className="text-3xl font-bold mb-4">Thank You</h3>
                  <p className="text-white/50 leading-relaxed mb-8">
                    Our events team will be in touch within 24 hours to discuss your vision.
                  </p>
                  <button
                    onClick={() => { setShowForm(false); setSubmitted(false); }}
                    className="px-8 py-3 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.3em] uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
