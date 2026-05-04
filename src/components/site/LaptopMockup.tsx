import { useEffect, useRef, useState } from "react";

interface LaptopMockupProps {
  screens: string[];
  alt?: string;
  className?: string;
  interval?: number;
}

/**
 * Soft, premium laptop mockup with rotating screens and gentle tilt on hover.
 */
export const LaptopMockup = ({ screens, alt = "Projektvorschau", className = "", interval = 3800 }: LaptopMockupProps) => {
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
    el.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <div className={`mockup-floating ${className}`}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="laptop-mockup transition-transform duration-500 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Screen */}
        <div className="laptop-screen">
          <div className="laptop-bar">
            <span /><span /><span />
          </div>
          <div className="laptop-content">
            {screens.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${active === i ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        {/* Base */}
        <div className="laptop-base" />
        <div className="laptop-shadow" />
      </div>
    </div>
  );
};
