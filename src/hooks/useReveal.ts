import { useEffect } from "react";

export const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // Staggered text reveal
    const staggerEls = document.querySelectorAll<HTMLElement>(".reveal-stagger");
    const staggerIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const children = e.target.querySelectorAll<HTMLElement>(".reveal-line");
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add("in"), i * 120);
            });
            staggerIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    staggerEls.forEach((el) => staggerIO.observe(el));

    // Personal touch whispers
    const whispers = document.querySelectorAll<HTMLElement>(".whisper");
    const whisperIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("whisper-visible");
            setTimeout(() => {
              e.target.classList.add("whisper-fade");
            }, 3500);
            whisperIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    whispers.forEach((el) => whisperIO.observe(el));

    return () => {
      io.disconnect();
      staggerIO.disconnect();
      whisperIO.disconnect();
    };
  }, []);
};
