import { useEffect, useState } from "react";

/**
 * Signature element: a soft glowing dot trailing a thin line down the right edge,
 * following scroll progress. Hidden on small screens.
 */
export const ScrollLine = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-line-wrap" aria-hidden="true">
      <div className="scroll-line-track" />
      <div className="scroll-line-fill" style={{ height: `${progress * 100}%` }} />
      <div className="scroll-line-dot" style={{ top: `${progress * 100}%` }} />
    </div>
  );
};
