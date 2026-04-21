"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";
import EventsModule from "@/modules/EventsModule";

const pastEvents = [
  {
    name: "Dubai Fashion Week",
    year: "2024",
    attendees: "50,000+",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
  },
  {
    name: "Global Tech Summit",
    year: "2024",
    attendees: "12,000+",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
  },
  {
    name: "New Year Spectacular",
    year: "2024",
    attendees: "100,000+",
    img: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=500&q=80",
  },
];

const capStats = [
  { val: "500+", label: "Events Per Year" },
  { val: "10,000", label: "Max Capacity" },
  { val: "50K sqft", label: "Event Space" },
  { val: "500M+", label: "Media Impressions" },
];


export default function EventsSection() {
  return (
    <section id="events" className="relative bg-[#080808] py-24 md:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9a84c]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* â”€â”€ HEADER â”€â”€ */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Events &amp; Platform</p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.95]">
            Your Stage.<br />
            <span className="gold-text">Our Platform.</span>
          </h2>
          <GoldDivider className="mt-8 max-w-xs mx-auto" />
          <p className="text-white/40 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            From intimate brand activations to record-breaking spectacles â€” The Dubai Mall is the world&apos;s most powerful event platform.
          </p>
        </FadeIn>

        {/* â”€â”€ VIDEO HERO BLOCK â”€â”€ */}
        <FadeIn className="mb-16 md:mb-20">
          <div className="relative overflow-hidden h-[300px] md:h-[500px] group">
            {/* Real MP4 from Pexels CDN â€” crowd/concert footage */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&q=80"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source
                src="https://videos.pexels.com/video-files/1536614/1536614-uhd_2560_1440_24fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-[#c9a84c]/30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]">Event Venue</span>
            </div>

            {/* Copy */}
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-xl">
                <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">The World&apos;s Stage</p>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Your Brand Belongs<br />On This Stage
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
                  500+ events per year. 10,000 capacity. 500M+ media impressions. This is where the world gathers.
                </p>
                <button
                  onClick={() => document.getElementById("events-module")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-3.5 bg-[#c9a84c] text-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e8c97a] transition-colors duration-300"
                >
                  Book an Event
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* â”€â”€ PAST EVENTS GALLERY â”€â”€ */}
        <div className="grid md:grid-cols-3 gap-4 mb-16 md:mb-20">
          {pastEvents.map((ev, i) => (
            <motion.div
              key={ev.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden aspect-video"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ev.img}
                alt={ev.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-1">
                  {ev.year} Â· {ev.attendees}
                </div>
                <div className="text-white font-semibold">{ev.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* â”€â”€ CAPABILITY STATS â”€â”€ */}
        <FadeIn className="mb-16 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.06]">
            {capStats.map((s) => (
              <div
                key={s.label}
                className="p-8 text-center border-r border-b border-white/[0.06] last:border-r-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#c9a84c]">{s.val}</div>
                <div className="text-xs text-white/40 tracking-[0.2em] uppercase mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* â”€â”€ EVENTS MODULE â”€â”€ */}
        <div id="events-module">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-3">Book Your Event</p>
              <h3 className="text-3xl md:text-5xl font-bold">Choose Your Experience</h3>
            </div>
            <EventsModule />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
