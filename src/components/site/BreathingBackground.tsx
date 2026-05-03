import { useEffect, useState } from "react";

export const BreathingBackground = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // shift hue/position with scroll for "scroll transformation"
  const hueShift = scroll * 18;
  const yShift = scroll * 60;

  return (
    <div className="breathing-bg" aria-hidden="true">
      <div
        className="breathing-orb breathing-orb-1"
        style={{ transform: `translateY(${yShift}px)`, filter: `blur(110px) hue-rotate(${hueShift}deg)` }}
      />
      <div
        className="breathing-orb breathing-orb-2"
        style={{ transform: `translateY(${-yShift * 0.6}px)`, filter: `blur(110px) hue-rotate(${-hueShift}deg)` }}
      />
      <div
        className="breathing-orb breathing-orb-3"
        style={{ transform: `translateY(${yShift * 0.3}px)`, filter: `blur(120px) hue-rotate(${hueShift * 0.5}deg)` }}
      />
      <div className="breathing-orb breathing-orb-4" />
    </div>
  );
};

