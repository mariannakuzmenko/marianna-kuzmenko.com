import { useEffect, useRef } from "react";

interface FloatingTypographyBandProps {
  items: string[];
  height?: string; // tailwind height utility e.g. "h-[60vh]"
}

/**
 * In-flow cinematic band that replaces the old marquee.
 * Renders large editorial words floating at varying depth + opacity.
 * Reacts subtly to scroll progress through the band.
 */
export const FloatingTypographyBand = ({
  items,
  height = "h-[55vh] md:h-[65vh]",
}: FloatingTypographyBandProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when top of band hits bottom of viewport, 1 when bottom hits top
        const total = rect.height + vh;
        const passed = vh - rect.top;
        const p = Math.max(0, Math.min(1, passed / total));
        el.style.setProperty("--band-progress", String(p));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pre-arrange words across the band — alternating depth & alignment
  const layouts = items.map((text, i) => {
    const depth = ((i % 3) + 1) as 1 | 2 | 3;
    const tints = ["white", "rose", "blue", "white"] as const;
    const tint = tints[i % tints.length];
    const align = i % 2 === 0 ? "left" : "right";
    const italic = i % 3 === 1;
    const top = `${8 + (i * 78) / Math.max(items.length, 1)}%`;
    const sizes = [
      "clamp(3rem, 10vw, 10rem)",
      "clamp(4rem, 13vw, 13rem)",
      "clamp(2.75rem, 8vw, 8rem)",
      "clamp(3.5rem, 12vw, 12rem)",
    ];
    const size = sizes[i % sizes.length];
    const duration = `${24 + (i * 4) % 18}s`;
    const delay = `-${(i * 3) % 20}s`;
    return { text, depth, tint, align, italic, top, size, duration, delay };
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative w-full ${height} overflow-hidden floating-band`}
    >
      <div className="absolute inset-0 floating-band-haze" />
      {layouts.map((l, i) => (
        <span
          key={i}
          className={`fw-word fw-depth-${l.depth} fw-tint-${l.tint} ${
            l.italic ? "fw-italic" : ""
          } fw-band`}
          style={{
            top: l.top,
            ...(l.align === "left" ? { left: "-2%" } : { right: "-2%" }),
            fontSize: l.size,
            animationDuration: l.duration,
            animationDelay: l.delay,
          }}
        >
          {l.text}
        </span>
      ))}
    </div>
  );
};
