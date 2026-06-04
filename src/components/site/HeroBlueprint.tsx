import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, TrendingUp, Layers, Code2, Search, type LucideIcon } from "lucide-react";

interface HeroBlueprintProps {
  eyebrow: string;
  titleParts: { l1: string; l2: string; l3: string };
  lead: string;
  metaTags: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  zoneLabels: { design: string; develop: string; growth: string };
  flowLabels: { idea: string; design: string; build: string; grow: string };
}

/**
 * DIGITAL BLUEPRINT — Hero.
 * A premium technical blueprint of a website being built in real time.
 * Three connected zones: UX/UI Design · Development · SEO & Strategy.
 * Center stage features an editorial headline integrated into the schematic.
 */
export const HeroBlueprint = (p: HeroBlueprintProps) => {
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

  const par = (depth: number): React.CSSProperties => ({
    transform: `translate3d(${mx * depth}px, ${my * depth}px, 0)`,
    transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
  });

  return (
    <section className="relative overflow-hidden" aria-label="Digital Blueprint">
      {/* Atmospheric field */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,hsl(var(--sky)/0.45),transparent_60%)]" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 bg-[hsl(var(--rose)/0.25)]" />
        <div className="absolute bottom-0 -left-40 w-[640px] h-[640px] rounded-full blur-3xl opacity-40 bg-[hsl(var(--sky)/0.45)]" />
        {/* technical grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)/0.7) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 45%, black 35%, transparent 78%)",
          }}
        />
      </div>

      <div className="container-editorial pt-8 md:pt-12 pb-20 md:pb-28">
        {/* Top meta strip */}
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-12 reveal">
          <p className="eyebrow">{p.eyebrow}</p>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono tracking-[0.22em] uppercase text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
            BLUEPRINT · v.2026
          </div>
        </div>

        {/* Flow ribbon: Idea → Design → Build → Grow */}
        <div className="mb-8 md:mb-10 reveal">
          <div className="flex flex-wrap items-center gap-x-3 md:gap-x-5 gap-y-2 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
            {[p.flowLabels.idea, p.flowLabels.design, p.flowLabels.build, p.flowLabels.grow].map(
              (label, i, arr) => (
                <span key={label} className="flex items-center gap-3">
                  <span className="text-foreground/70">0{i + 1}</span>
                  <span>{label}</span>
                  {i < arr.length - 1 && (
                    <span aria-hidden className="hidden md:inline-block h-px w-10 bg-foreground/25" />
                  )}
                </span>
              )
            )}
          </div>
        </div>

        {/* THE BLUEPRINT STAGE */}
        <div ref={stageRef} className="relative reveal" style={{ perspective: "1800px" }}>
          {/* Blueprint frame */}
          <div className="relative rounded-[28px] border border-border/70 bg-card/40 backdrop-blur-xl shadow-[0_60px_140px_-50px_hsl(220_40%_25%_/_0.35)] overflow-hidden">
            {/* Corner ticks */}
            {(["tl", "tr", "bl", "br"] as const).map((c) => (
              <span
                key={c}
                aria-hidden
                className={[
                  "absolute w-5 h-5 border-rose/70",
                  c === "tl" && "top-3 left-3 border-t border-l",
                  c === "tr" && "top-3 right-3 border-t border-r",
                  c === "bl" && "bottom-3 left-3 border-b border-l",
                  c === "br" && "bottom-3 right-3 border-b border-r",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            ))}

            {/* Blueprint header */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-border/50 bg-background/40 font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              <span>// blueprint.live</span>
              <span className="hidden sm:inline">marianna · studio</span>
              <span>
                <span className="text-rose">●</span> drawing
              </span>
            </div>

            {/* Connecting SVG flow lines — desktop only */}
            <svg
              aria-hidden
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            >
              <defs>
                <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--rose))" stopOpacity="0.0" />
                  <stop offset="30%" stopColor="hsl(var(--rose))" stopOpacity="0.55" />
                  <stop offset="70%" stopColor="hsl(var(--rose))" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="hsl(var(--rose))" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* horizontal spine */}
              <path
                d="M 60 300 C 300 300, 320 300, 500 300 S 700 300, 940 300"
                fill="none"
                stroke="url(#flowLine)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                className="bp-draw"
              />
              {/* zone-to-headline tethers */}
              <path
                d="M 220 180 Q 320 220, 420 290"
                fill="none"
                stroke="hsl(var(--foreground) / 0.25)"
                strokeWidth="1"
                strokeDasharray="3 5"
                className="bp-draw"
              />
              <path
                d="M 780 180 Q 680 220, 580 290"
                fill="none"
                stroke="hsl(var(--foreground) / 0.25)"
                strokeWidth="1"
                strokeDasharray="3 5"
                className="bp-draw"
              />
              <path
                d="M 500 470 L 500 380"
                fill="none"
                stroke="hsl(var(--foreground) / 0.25)"
                strokeWidth="1"
                strokeDasharray="3 5"
                className="bp-draw"
              />
            </svg>

            {/* Grid: 3 zones around centered headline */}
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 p-5 md:p-8 lg:p-10">
              {/* ZONE 1 — UX/UI DESIGN (top-left) */}
              <div className="md:col-span-4 md:row-start-1" style={par(14)}>
                <ZoneCard
                  index="01"
                  label={p.zoneLabels.design}
                  icon={Layers}
                >
                  {/* type system */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-display text-3xl md:text-4xl leading-none">Aa</div>
                      <div className="text-[10px] text-muted-foreground font-mono mt-1">
                        Fraunces · 64–96
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-sans text-xl leading-none text-foreground/80">Aa</div>
                      <div className="text-[10px] text-muted-foreground font-mono mt-1">
                        Inter · 14–18
                      </div>
                    </div>
                  </div>
                  {/* color tokens */}
                  <div className="flex gap-1.5">
                    {[
                      "hsl(var(--rose))",
                      "hsl(var(--sky))",
                      "hsl(var(--sky-deep))",
                      "hsl(var(--highlight))",
                      "hsl(var(--ink))",
                    ].map((c, i) => (
                      <span
                        key={i}
                        className="h-5 flex-1 rounded-md border border-border/60"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  {/* wireframe */}
                  <div className="rounded-lg border border-border/60 bg-background/60 p-2.5 space-y-1.5">
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    </div>
                    <div className="h-2 rounded-full bg-foreground/15 w-[78%]" />
                    <div className="h-2 rounded-full bg-foreground/10 w-[55%]" />
                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                      <div className="aspect-square rounded-md bg-rose-soft" />
                      <div className="aspect-square rounded-md bg-[hsl(var(--sky)/0.5)]" />
                      <div className="aspect-square rounded-md bg-muted" />
                    </div>
                  </div>
                </ZoneCard>
              </div>

              {/* CENTER — Headline integrated into blueprint */}
              <div className="md:col-span-4 md:row-start-1 flex items-center justify-center">
                <div className="relative w-full text-center px-2 py-6 md:py-2">
                  {/* Crosshair */}
                  <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/10" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10" />
                  </div>

                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
                    ◇ Center · Concept
                  </p>
                  <h1 className="font-display tracking-[-0.02em] leading-[0.95] text-[clamp(2rem,5.4vw,4.6rem)]">
                    <span className="block">{p.titleParts.l1}</span>
                    <span className="block italic text-rose">{p.titleParts.l2}</span>
                    <span className="block">{p.titleParts.l3}</span>
                  </h1>
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground mt-4">
                    Marianna Kuzmenko · Studio
                  </p>
                </div>
              </div>

              {/* ZONE 3 — SEO & GROWTH (top-right) */}
              <div className="md:col-span-4 md:row-start-1" style={par(14)}>
                <ZoneCard
                  index="03"
                  label={p.zoneLabels.growth}
                  icon={Search}
                  align="right"
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="font-display text-3xl md:text-4xl leading-none">+248%</div>
                      <div className="text-[10px] text-muted-foreground font-mono mt-1">
                        Organic · 30d
                      </div>
                    </div>
                    <TrendingUp size={16} className="text-rose" />
                  </div>
                  {/* sparkline */}
                  <svg viewBox="0 0 120 38" className="w-full h-10">
                    <defs>
                      <linearGradient id="bpSpark" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--rose))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--rose))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,30 L12,26 L24,28 L36,20 L48,22 L60,16 L72,18 L84,10 L96,12 L108,4 L120,6 L120,38 L0,38 Z"
                      fill="url(#bpSpark)"
                    />
                    <path
                      d="M0,30 L12,26 L24,28 L36,20 L48,22 L60,16 L72,18 L84,10 L96,12 L108,4 L120,6"
                      fill="none"
                      stroke="hsl(var(--rose))"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* keyword clusters */}
                  <div className="space-y-1.5">
                    {[
                      ["webdesign nürnberg", "#2"],
                      ["seo agentur bayern", "#4"],
                      ["ux/ui dach", "#6"],
                    ].map(([k, r]) => (
                      <div key={k} className="flex items-center justify-between text-[10px] md:text-[11px]">
                        <span className="text-muted-foreground truncate pr-2 font-mono">{k}</span>
                        <span className="font-mono text-rose">{r}</span>
                      </div>
                    ))}
                  </div>
                  {/* metric chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["LCP 1.2s", "CLS 0.01", "A11y 98"].map((m) => (
                      <span
                        key={m}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-border/60 bg-background/60 text-muted-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </ZoneCard>
              </div>

              {/* ZONE 2 — DEVELOPMENT (bottom, full width) */}
              <div className="md:col-span-12 md:row-start-2" style={par(10)}>
                <ZoneCard index="02" label={p.zoneLabels.develop} icon={Code2}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* code fragment */}
                    <div className="rounded-lg bg-[hsl(var(--ink))] text-[hsl(var(--paper))] border border-white/10 overflow-hidden">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(0_60%_70%)]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(45_70%_70%)]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(140_45%_65%)]" />
                        <span className="ml-1 text-[9px] font-mono opacity-60">Hero.tsx</span>
                      </div>
                      <pre className="text-[9.5px] md:text-[10px] leading-relaxed font-mono p-3 m-0 overflow-hidden">
{`<Section grid="12">
  <Headline>Design.</Headline>
  <Headline>Develop.</Headline>
  <Headline>Grow.</Headline>
</Section>`}
                      </pre>
                    </div>

                    {/* component tree */}
                    <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        components/
                      </div>
                      <ul className="text-[10.5px] font-mono space-y-1 text-foreground/80">
                        <li>├ &lt;Layout/&gt;</li>
                        <li>├ &lt;Hero/&gt;</li>
                        <li>│  ├ &lt;Headline/&gt;</li>
                        <li>│  └ &lt;CTA/&gt;</li>
                        <li>└ &lt;Section/&gt;</li>
                      </ul>
                    </div>

                    {/* responsive breakpoints */}
                    <div className="rounded-lg border border-border/60 bg-background/60 p-3">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        responsive
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "sm", w: "30%", px: "640" },
                          { name: "md", w: "55%", px: "768" },
                          { name: "lg", w: "80%", px: "1024" },
                          { name: "xl", w: "100%", px: "1280" },
                        ].map((b) => (
                          <div key={b.name} className="flex items-center gap-2">
                            <span className="text-[10px] font-mono w-6 text-muted-foreground">
                              {b.name}
                            </span>
                            <span className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                              <span
                                className="block h-full bg-rose/70 rounded-full"
                                style={{ width: b.w }}
                              />
                            </span>
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {b.px}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ZoneCard>
              </div>
            </div>

            {/* Bottom blueprint footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 md:px-6 py-3 border-t border-border/50 bg-background/40 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              <span>scale 1:1 · units rem</span>
              <span className="hidden sm:inline">3 zones connected</span>
              <span>auto-sync · live</span>
            </div>
          </div>
        </div>

        {/* Lead + CTA row */}
        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10 items-start reveal">
          <p className="col-span-12 md:col-span-6 lg:col-span-5 text-base md:text-lg leading-relaxed text-foreground/80">
            {p.lead}
          </p>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7 flex flex-wrap gap-3 md:gap-4 md:justify-end">
            <Link to={p.ctaPrimaryHref} className="btn-pink btn-press">
              {p.ctaPrimary} <ArrowUpRight size={16} />
            </Link>
            <a href={p.ctaSecondaryHref} className="btn-ghost-soft btn-press">
              {p.ctaSecondary} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Meta tags ribbon */}
        <div className="mt-8 flex flex-wrap items-center gap-2 md:gap-3 reveal">
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

      {/* Inline blueprint line-drawing animation */}
      <style>{`
        .bp-draw {
          stroke-dasharray: 6 8;
          stroke-dashoffset: 240;
          animation: bp-draw 2.4s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes bp-draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bp-draw { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

/* ---------- Internal zone card ---------- */
interface ZoneCardProps {
  index: string;
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  align?: "left" | "right";
  children: React.ReactNode;
}
const ZoneCard = ({ index, label, icon: Icon, align = "left", children }: ZoneCardProps) => (
  <div className="rounded-2xl border border-border/70 bg-card/85 backdrop-blur-md shadow-soft p-4 md:p-5 h-full flex flex-col gap-3">
    <div
      className={`flex items-center gap-2 ${
        align === "right" ? "md:flex-row-reverse md:text-right" : ""
      }`}
    >
      <span className="w-8 h-8 rounded-xl bg-rose-soft flex items-center justify-center shrink-0">
        <Icon size={14} strokeWidth={1.6} className="text-rose" />
      </span>
      <div className={align === "right" ? "md:text-right" : ""}>
        <div className="text-[9px] font-mono tracking-[0.22em] uppercase text-muted-foreground leading-none">
          Zone {index}
        </div>
        <div className="font-display text-base md:text-lg leading-tight">{label}</div>
      </div>
    </div>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);
