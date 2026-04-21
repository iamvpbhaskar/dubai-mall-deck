export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
    </div>
  );
}
