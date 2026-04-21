import GoldDivider from "./GoldDivider";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <GoldDivider className="mb-12" />
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-xs tracking-[0.4em] text-[#c9a84c] uppercase block">The</span>
              <span className="text-2xl font-bold tracking-[0.15em] uppercase">Dubai Mall</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              The world's most visited destination. 100 million visitors. One address.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">Business</p>
            <ul className="space-y-2 text-sm text-white/40">
              {["Leasing", "Sponsorships", "Events", "Advertising", "Partnerships"].map((l) => (
                <li key={l} className="hover:text-[#c9a84c] cursor-pointer transition-colors">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-white/40">
              <li>Downtown Dubai, UAE</li>
              <li>leasing@thedubaimall.com</li>
              <li>events@thedubaimall.com</li>
              <li>+971 4 362 7500</li>
            </ul>
          </div>
        </div>
        <GoldDivider className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20 tracking-wide">
          <span>© 2024 Emaar Malls. All rights reserved.</span>
          <span className="tracking-[0.3em] uppercase text-[#c9a84c]/40">The World Comes Here</span>
        </div>
      </div>
    </footer>
  );
}
