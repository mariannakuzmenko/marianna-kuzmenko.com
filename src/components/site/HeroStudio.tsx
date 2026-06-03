import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, TrendingUp, Search, Layers, Code2 } from "lucide-react";

interface HeroStudioProps {
  eyebrow: string;
  titleParts: { plain: string; accent: string; tail?: string };
  lead: string;
  metaTags: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  browserImage: string;
  browserImageAlt: string;
  boardImages: string[];
}

/**
 * Premium immersive hero — a layered "digital studio" scene.
 * Browser mockup + Figma-style design board + code snippet + analytics widget,
 * with subtle mouse-parallax depth. Uses semantic tokens only.
 */
export const HeroStudio = (p: HeroStudioProps) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setMx(x);
        setMy(y);
      });
    };
    const onLeave = () => {
      setMx(0);
      setMy(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const par = (depth: number) => ({
    transform: `translate3d(${mx * depth}px, ${my * depth}px, 0)`,
    transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)",
  });

  return (
    <section className="relative overflow-hidden">
      {/* Atmospheric gradient field */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,hsl(var(--sky)/0.55),transparent_60%)]" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-50 bg-[hsl(var(--rose)/0.30)]" />
        <div className="absolute bottom-0 -left-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-50 bg-[hsl(var(--sky)/0.55)]" />
        {/* fine grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)/0.7) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-editorial pt-8 md:pt-14 pb-20 md:pb-28">
        {/* Top meta strip */}
        <div className="flex items-center justify-between gap-4 mb-10 md:mb-14 reveal">
          <p className="eyebrow">{p.eyebrow}</p>
          <div className="hidden md:flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
            Studio · Available 2026
          </div>
        </div>

        {/* Editorial headline */}
        <div className="reveal-stagger max-w-[18ch]">
          <h1 className="font-display tracking-[-0.02em] leading-[0.92] text-[clamp(2.6rem,8.2vw,7.5rem)] reveal-line">
            <span className="block">{p.titleParts.plain}</span>
            <span className="block italic text-rose">{p.titleParts.accent}</span>
            {p.titleParts.tail && <span className="block">{p.titleParts.tail}</span>}
          </h1>
        </div>

        {/* Sub row: lead + disciplines */}
        <div className="mt-10 grid grid-cols-12 gap-6 md:gap-10 items-end reveal">
          <p className="col-span-12 md:col-span-6 lg:col-span-5 text-base md:text-lg leading-relaxed text-foreground/80">
            {p.lead}
          </p>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <ul className="grid grid-cols-3 gap-3 md:gap-5">
              {[
                { k: "UX/UI", icon: Layers },
                { k: "Develop", icon: Code2 },
                { k: "SEO", icon: Search },
              ].map(({ k, icon: Icon }) => (
                <li
                  key={k}
                  className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md px-3 py-3 md:px-4 md:py-4 flex items-center gap-2 md:gap-3 shadow-soft"
                >
                  <span className="w-8 h-8 rounded-xl bg-rose-soft flex items-center justify-center">
                    <Icon size={15} strokeWidth={1.6} className="text-rose" />
                  </span>
                  <span className="font-display text-base md:text-lg">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 reveal">
          <Link to={p.ctaPrimaryHref} className="btn-pink btn-press">
            {p.ctaPrimary} <ArrowUpRight size={16} />
          </Link>
          <a href={p.ctaSecondaryHref} className="btn-ghost-soft btn-press">
            {p.ctaSecondary} <ArrowRight size={16} />
          </a>
          <div className="hidden md:flex items-center gap-2 ml-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            Nürnberg · DACH · International
          </div>
        </div>

        {/* The Stage — immersive layered scene */}
        <div
          ref={stageRef}
          className="relative mt-14 md:mt-20 reveal"
          style={{ perspective: "1600px" }}
        >
          {/* Tag chips along the rail */}
          <div className="absolute -top-6 left-0 right-0 flex items-center justify-between text-[10px] md:text-xs tracking-[0.22em] uppercase text-muted-foreground/80 px-2">
            <span>// the_studio.tsx</span>
            <span>v.2026 — soft luxury build</span>
          </div>

          <div className="relative h-[560px] sm:h-[620px] md:h-[680px] lg:h-[760px]">
            {/* Layer 1 — Browser mockup (featured project) */}
            <div
              className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-[92%] md:w-[78%] lg:w-[70%] z-20"
              style={par(-14)}
            >
              <div className="rounded-2xl md:rounded-[28px] overflow-hidden border border-border/70 bg-card shadow-[0_60px_140px_-40px_hsl(220_40%_25%_/_0.45)]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-background/80 backdrop-blur">
                  <span className="w-2.5 h-2.5 rounded-full bg-[hsl(0_60%_70%)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[hsl(45_70%_70%)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[hsl(140_45%_65%)]" />
                  <div className="mx-auto text-[11px] md:text-xs text-muted-foreground font-mono tracking-tight px-3 py-1 rounded-full bg-muted/70 border border-border/60">
                    mariannakuzmenko.studio / featured
                  </div>
                </div>
                <div className="aspect-[16/10] w-full bg-muted/40">
                  <img
                    src={p.browserImage}
                    alt={p.browserImageAlt}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Layer 2a — Figma-style design board (top-left) */}
            <div
              className="absolute top-0 left-0 md:left-[-2%] w-[58%] sm:w-[48%] md:w-[38%] lg:w-[32%] z-30 hidden sm:block"
              style={par(22)}
            >
              <div className="rounded-2xl border border-border/70 bg-card/95 backdrop-blur-xl shadow-card p-3 md:p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] md:text-xs tracking-[0.18em] uppercase text-muted-foreground">
                    Design · Components
                  </span>
                  <span className="w-2 h-2 rounded-full bg-rose" />
                </div>
                {/* type system */}
                <div className="space-y-1.5 mb-3">
                  <div className="font-display text-2xl md:text-3xl leading-none">Aa</div>
                  <div className="text-[10px] md:text-[11px] text-muted-foreground font-mono">
                    Fraunces · Display / 64–96
                  </div>
                </div>
                {/* color tokens */}
                <div className="flex gap-1.5 mb-3">
                  {[
                    "hsl(var(--rose))",
                    "hsl(var(--sky))",
                    "hsl(var(--sky-deep))",
                    "hsl(var(--highlight))",
                    "hsl(var(--ink))",
                  ].map((c, i) => (
                    <span
                      key={i}
                      className="h-6 flex-1 rounded-md border border-border/60"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                {/* wireframe lines */}
                <div className="space-y-1.5">
                  <div className="h-2 rounded-full bg-foreground/15 w-[80%]" />
                  <div className="h-2 rounded-full bg-foreground/10 w-[60%]" />
                  <div className="h-2 rounded-full bg-foreground/10 w-[70%]" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  <div className="aspect-square rounded-lg bg-rose-soft" />
                  <div className="aspect-square rounded-lg bg-[hsl(var(--sky)/0.6)]" />
                  <div className="aspect-square rounded-lg bg-muted" />
                </div>
              </div>
            </div>

            {/* Layer 2b — Project tile (bottom-right) */}
            <div
              className="absolute bottom-2 right-0 md:right-[-2%] w-[44%] sm:w-[38%] md:w-[30%] lg:w-[26%] z-30"
              style={par(28)}
            >
              <div className="rounded-2xl overflow-hidden border border-border/70 bg-card shadow-card">
                <div className="aspect-[9/12] w-full bg-muted/40">
                  <img
                    src={p.boardImages[0]}
                    alt="Project preview"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-3 py-2.5 flex items-center justify-between">
                  <span className="text-[10px] md:text-xs tracking-[0.16em] uppercase text-muted-foreground">
                    Case · UX
                  </span>
                  <ArrowUpRight size={14} className="text-rose" />
                </div>
              </div>
            </div>

            {/* Layer 3 — Code snippet (bottom-left) */}
            <div
              className="absolute bottom-6 md:bottom-10 left-2 md:left-[6%] w-[64%] sm:w-[46%] md:w-[36%] lg:w-[30%] z-40"
              style={par(36)}
            >
              <div className="rounded-2xl border border-border/70 bg-[hsl(var(--ink))] text-[hsl(var(--paper))] shadow-[0_40px_90px_-30px_hsl(220_50%_15%_/_0.55)] overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[hsl(0_60%_70%)]" />
                  <span className="w-2 h-2 rounded-full bg-[hsl(45_70%_70%)]" />
                  <span className="w-2 h-2 rounded-full bg-[hsl(140_45%_65%)]" />
                  <span className="ml-2 text-[10px] font-mono opacity-60">Hero.tsx</span>
                </div>
                <pre className="text-[10px] md:text-[11px] leading-relaxed font-mono p-3 md:p-4 overflow-hidden">
{`export const Hero = () => (
  <section className="studio">
    <h1>Design.
      Develop.
      Rank.</h1>
    <Browser src={featured} />
  </section>
);`}
                </pre>
              </div>
            </div>

            {/* Layer 4 — Analytics widget (top-right) */}
            <div
              className="absolute top-[42%] right-2 md:right-[4%] w-[44%] sm:w-[34%] md:w-[26%] lg:w-[22%] z-40"
              style={par(42)}
            >
              <div className="rounded-2xl border border-border/70 bg-card/95 backdrop-blur-xl shadow-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                    Organic · 30d
                  </span>
                  <TrendingUp size={14} className="text-rose" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl md:text-4xl">+248%</span>
                  <span className="text-xs text-muted-foreground">visibility</span>
                </div>
                {/* sparkline */}
                <svg viewBox="0 0 120 40" className="mt-3 w-full h-10">
                  <defs>
                    <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--rose))" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="hsl(var(--rose))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,32 L12,28 L24,30 L36,22 L48,24 L60,18 L72,20 L84,12 L96,14 L108,6 L120,8 L120,40 L0,40 Z"
                    fill="url(#spark)"
                  />
                  <path
                    d="M0,32 L12,28 L24,30 L36,22 L48,24 L60,18 L72,20 L84,12 L96,14 L108,6 L120,8"
                    fill="none"
                    stroke="hsl(var(--rose))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-3 space-y-1.5">
                  {[
                    ["webdesign nürnberg", "#2"],
                    ["seo agentur bayern", "#4"],
                    ["ux ui design dach", "#6"],
                  ].map(([k, r]) => (
                    <div key={k} className="flex items-center justify-between text-[10px] md:text-[11px]">
                      <span className="text-muted-foreground truncate pr-2">{k}</span>
                      <span className="font-mono text-rose">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating tags */}
            <div className="hidden md:block absolute top-[6%] right-[36%] z-30">
              <span className="floating-tag">Strategy · Design · Code · SEO</span>
            </div>

            {/* Meta tags ribbon (bottom) */}
            <div className="absolute bottom-[-2px] left-0 right-0 flex flex-wrap items-center justify-center gap-2 md:gap-3 z-30">
              {p.metaTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs tracking-[0.16em] uppercase text-muted-foreground/80 px-3 py-1 rounded-full bg-background/70 border border-border/60 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
