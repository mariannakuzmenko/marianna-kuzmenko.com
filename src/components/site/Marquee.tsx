interface MarqueeProps {
  items: string[];
}

export const Marquee = ({ items }: MarqueeProps) => {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="marquee py-10 border-y border-border" style={{ background: "var(--gradient-soft)" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl whitespace-nowrap flex items-center gap-12 italic text-foreground/80">
            {item}
            <span className="text-rose not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
