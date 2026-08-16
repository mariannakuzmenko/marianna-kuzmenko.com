import { useEffect, useRef, useState } from "react";
import { useLang, pick } from "@/i18n/LanguageContext";

type Stat = { value: number; suffix?: string; label: string };

const useCountUp = (target: number, active: boolean, duration = 1400) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
};

const StatCard = ({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) => {
  const n = useCountUp(stat.value, active);
  return (
    <div
      className="reveal card-soft text-center bg-background/70 backdrop-blur"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-display text-4xl md:text-6xl leading-none">
        {n}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-3 text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-mono">
        {stat.label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const t = pick(
    lang,
    {
      eyebrow: "In Zahlen",
      titleA: "Substanz statt",
      titleB: "Versprechen.",
      lead:
        "Ein paar Zahlen, die zeigen, worauf meine Arbeit basiert — echte Projekte, echte Kund:innen, echte Ergebnisse.",
      stats: [
        { value: 40, suffix: "+", label: "Projekte umgesetzt" },
        { value: 30, suffix: "+", label: "Zufriedene Kund:innen" },
        { value: 8, suffix: "+", label: "Jahre Erfahrung" },
        { value: 12, suffix: "+", label: "Branchen betreut" },
        { value: 6, suffix: "+", label: "Länder" },
      ] as Stat[],
    },
    {
      eyebrow: "By the numbers",
      titleA: "Substance over",
      titleB: "promises.",
      lead: "A few numbers that reflect what my work is built on — real projects, real clients, real outcomes.",
      stats: [
        { value: 40, suffix: "+", label: "Projects delivered" },
        { value: 30, suffix: "+", label: "Happy clients" },
        { value: 8, suffix: "+", label: "Years of experience" },
        { value: 12, suffix: "+", label: "Industries served" },
        { value: 6, suffix: "+", label: "Countries" },
      ] as Stat[],
    },
  );

  return (
    <section className="container-editorial py-24 md:py-16 md:py-20" ref={ref}>
      <div className="card-soft p-8 md:p-14" style={{ background: "var(--gradient-soft)" }}>
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="display-lg">
              {t.titleA}
              <br />
              <span className="italic text-rose">{t.titleB}</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">{t.lead}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {t.stats.map((s, i) => (
            <StatCard key={i} stat={s} active={active} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};
