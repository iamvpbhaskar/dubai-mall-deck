"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import GoldDivider from "@/components/GoldDivider";

const brands = [
  "Louis Vuitton", "Gucci", "Chanel", "Hermès", "Prada",
  "Dior", "Rolex", "Cartier", "Burberry", "Versace",
  "Apple", "Tesla", "Zara", "H&M", "Uniqlo",
  "Nike", "Adidas", "Lululemon", "Sephora", "MAC",
  "Tiffany & Co.", "Bulgari", "Valentino", "Balenciaga", "Fendi",
];

const categories = [
  { name: "Luxury & Fashion", count: "350+", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80" },
  { name: "Beauty & Wellness", count: "120+", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
  { name: "Electronics & Tech", count: "80+", img: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&q=80" },
  { name: "Sports & Lifestyle", count: "90+", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80" },
];

export default function RetailSection() {
  return (
    <section id="retail" className="relative bg-[#0a0a0a] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="mb-20">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Retail Universe</p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-tight max-w-2xl">
            1,200+ Brands.<br />
            <span className="gold-text">One Destination.</span>
          </h2>
          <GoldDivider className="mt-8 max-w-xs" />
        </FadeIn>

        {/* Category cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.img}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[#c9a84c] text-2xl font-bold">{cat.count}</div>
                <div className="text-white text-sm font-semibold tracking-wide mt-1">{cat.name}</div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border border-[#c9a84c]/0 group-hover:border-[#c9a84c] transition-all duration-300 rotate-45" />
            </motion.div>
          ))}
        </div>

        {/* Brand marquee */}
        <FadeIn className="mb-6">
          <p className="text-white/30 text-xs tracking-[0.4em] uppercase text-center mb-8">Featured Brands</p>
        </FadeIn>

        <div className="relative overflow-hidden h-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap absolute top-0 left-0"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-white/20 text-sm tracking-[0.3em] uppercase hover:text-[#c9a84c] transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Leasing CTA */}
        <FadeIn className="mt-24 text-center" delay={0.2}>
          <div className="border border-white/10 p-12 md:p-16 relative group hover:border-[#c9a84c]/30 transition-colors duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-4">
              <div className="w-2 h-2 rotate-45 bg-[#c9a84c]" />
            </div>
            <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-4">Leasing Opportunities</p>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Space</h3>
            <p className="text-white/50 max-w-lg mx-auto mb-8 leading-relaxed">
              Premium retail units across all categories. From flagship stores to pop-up concepts — we have the right space for your brand.
            </p>
            <button
              onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-[#c9a84c] text-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e8c97a] transition-all duration-300 hover:scale-105"
            >
              Enquire About Leasing
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
