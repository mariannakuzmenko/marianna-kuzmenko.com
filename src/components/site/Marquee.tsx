interface MarqueeProps {
  items: string[];
}

export const Marquee = ({ items }: MarqueeProps) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee py-8 border-y border-foreground/15 bg-foreground text-background overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl whitespace-nowrap flex items-center gap-16">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
