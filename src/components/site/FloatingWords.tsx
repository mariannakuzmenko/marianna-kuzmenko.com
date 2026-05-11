import { useEffect, useRef } from "react";

/**
 * Cinematic floating typography layer.
 * Large editorial words drift slowly across the background at varying depths.
 * Reacts very subtly to scroll. Pointer-events disabled.
 */

type Word = {
  text: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  depth: 1 | 2 | 3; // 1 = closest, 3 = farthest
  tint?: "white" | "blue" | "rose";
  delay?: string;
  duration?: string;
  italic?: boolean;
};

const WORDS: Word[] = [
  { text: "WEB DEVELOPMENT", top: "8%",  left: "-4%",  size: "clamp(3rem, 9vw, 9rem)",  depth: 2, tint: "white", delay: "0s",   duration: "26s" },
  { text: "strategy",        top: "22%", right: "-2%", size: "clamp(3rem, 11vw, 11rem)", depth: 1, tint: "rose",  delay: "-6s",  duration: "32s", italic: true },
  { text: "SEO",             top: "44%", left: "6%",   size: "clamp(4rem, 14vw, 14rem)", depth: 3, tint: "blue",  delay: "-12s", duration: "40s" },
  { text: "UX / UI",         top: "60%", right: "8%",  size: "clamp(3rem, 10vw, 10rem)", depth: 2, tint: "white", delay: "-3s",  duration: "30s" },
  { text: "digital experience", top: "78%", left: "-6%", size: "clamp(3rem, 11vw, 11rem)", depth: 1, tint: "white", delay: "-18s", duration: "36s", italic: true },
  { text: "MODERN WEBSITES", top: "92%", right: "-4%", size: "clamp(3rem, 9vw, 9rem)",   depth: 3, tint: "blue",  delay: "-9s",  duration: "44s" },
  { text: "craft",           top: "150%", left: "10%", size: "clamp(4rem, 13vw, 13rem)", depth: 2, tint: "rose",  delay: "-15s", duration: "34s", italic: true },
  { text: "EDITORIAL",       top: "172%", right: "-2%", size: "clamp(3rem, 10vw, 10rem)", depth: 3, tint: "white", delay: "-2s",  duration: "38s" },
  { text: "atmosphere",      top: "210%", left: "-3%", size: "clamp(3rem, 12vw, 12rem)", depth: 1, tint: "white", delay: "-20s", duration: "30s", italic: true },
  { text: "PERFORMANCE",     top: "240%", right: "5%", size: "clamp(2.5rem, 8vw, 8rem)", depth: 2, tint: "blue",  delay: "-7s",  duration: "42s" },
  { text: "design",          top: "275%", left: "8%",  size: "clamp(4rem, 14vw, 14rem)", depth: 3, tint: "rose",  delay: "-11s", duration: "36s", italic: true },
  { text: "VISION",          top: "310%", right: "-5%", size: "clamp(3rem, 10vw, 10rem)", depth: 1, tint: "white", delay: "-4s",  duration: "32s" },
];

export const FloatingWords = () => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const el = layerRef.current;
        if (el) {
          // Subtle scroll parallax for the whole layer + per-depth via CSS vars
          el.style.setProperty("--scroll-y", `${y}px`);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={layerRef} className="floating-words" aria-hidden="true">
      {WORDS.map((w, i) => (
        <span
          key={i}
          className={`fw-word fw-depth-${w.depth} fw-tint-${w.tint ?? "white"} ${w.italic ? "fw-italic" : ""}`}
          style={{
            top: w.top,
            left: w.left,
            right: w.right,
            fontSize: w.size,
            animationDelay: w.delay,
            animationDuration: w.duration,
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
};
