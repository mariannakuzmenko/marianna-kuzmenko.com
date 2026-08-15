import { useEffect, useRef, useState } from "react";

interface MockupShowcaseProps {
  /** Device mockup photographs — shown directly, never inside another device frame. */
  screens: string[];
  alt?: string;
  className?: string;
  interval?: number;
}

/**
 * Soft editorial showcase for project mockup photography.
 * Cross-fades images inside a light glass frame with a gentle tilt on hover.
 * Deliberately renders no laptop chrome — the images already contain devices.
 */
export const MockupShowcase = ({
  screens,
  alt = "Projektvorschau",
  className = "",
  interval = 4200,
}: MockupShowcaseProps) => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screens.length <= 1) return;
    const id = setInterval(() => setActive((a) => (a + 1) % screens.length), interval);
    return () => clearInterval(id);
  }, [screens.length, interval]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative w-full rounded-[1.75rem] overflow-hidden shadow-soft bg-background/60 transition-transform duration-500 ease-out ${className}`}
    >
      <div className="relative w-full aspect-[4/3]">
        {screens.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MockupShowcase;
