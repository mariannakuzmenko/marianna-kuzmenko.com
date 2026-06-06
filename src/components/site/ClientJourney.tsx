import { useState } from "react";
import { Compass, PenTool, Code2, Rocket, TrendingUp, ChevronDown } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

export const ClientJourney = () => {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  const t = pick(
    lang,
    {
      eyebrow: "Client Journey",
      title: "Vom ersten Gespräch",
      titleItalic: "zum messbaren Wachstum.",
      lead: "Ein klarer, transparenter Prozess. Jede Phase mit definierten Ergebnissen, ruhiger Kommunikation und ohne Überraschungen.",
      steps: [
        { icon: Compass, label: "01 · Strategie", title: "Strategie & Positionierung", desc: "Wir definieren Ziele, Zielgruppe, Markenkern und Suchintention. Du bekommst ein Strategiedokument, das die Grundlage für jede Designentscheidung ist." },
        { icon: PenTool, label: "02 · UX/UI Design", title: "UX/UI Design", desc: "Wireframes, Inhaltsdramaturgie und das visuelle System entstehen. Ich präsentiere in zwei Runden — du bekommst ein klares Konzept ohne Rate-Schleifen." },
        { icon: Code2, label: "03 · Entwicklung", title: "Entwicklung", desc: "Sauberes, semantisches Frontend. Performance-optimiert, responsive, barrierearm. Du bekommst eine Vorschau-Umgebung mit Live-Updates." },
        { icon: Rocket, label: "04 · Launch", title: "Launch", desc: "Domain-Setup, Analytics, Cookie-Banner, SEO-Basis und finale QA. Ich begleite den Launch persönlich und übergebe eine vollständige Dokumentation." },
        { icon: TrendingUp, label: "05 · Wachstum", title: "Wachstum & SEO", desc: "Nach dem Launch beginnt die eigentliche Arbeit: Content-Aufbau, Ranking-Monitoring und kontinuierliche Optimierung — auf Wunsch monatlich." },
      ],
    },
    {
      eyebrow: "Client Journey",
      title: "From first conversation",
      titleItalic: "to measurable growth.",
      lead: "A clear, transparent process. Each phase with defined outcomes, calm communication and no surprises.",
      steps: [
        { icon: Compass, label: "01 · Strategy", title: "Strategy & Positioning", desc: "We define goals, audience, brand core and search intent. You receive a strategy document that informs every design decision." },
        { icon: PenTool, label: "02 · UX/UI Design", title: "UX/UI Design", desc: "Wireframes, content choreography and the visual system. I present in two rounds — you get a clear concept without guesswork." },
        { icon: Code2, label: "03 · Development", title: "Development", desc: "Clean, semantic frontend. Performance-tuned, responsive, accessible. You get a preview environment with live updates." },
        { icon: Rocket, label: "04 · Launch", title: "Launch", desc: "Domain setup, analytics, cookie banner, SEO foundation and final QA. I oversee the launch personally and hand over full documentation." },
        { icon: TrendingUp, label: "05 · Growth", title: "Growth & SEO", desc: "After launch the real work begins: content, ranking monitoring and continuous optimization — monthly on request." },
      ],
    },
  );

  return (
    <section className="container-editorial py-24">
      <div className="grid grid-cols-12 gap-8 items-end mb-14 reveal-stagger">
        <div className="col-span-12 md:col-span-7">
          <p className="eyebrow mb-4 reveal-line">{t.eyebrow}</p>
          <h2 className="display-lg reveal-line">
            {t.title}
            <br />
            <span className="italic text-rose">{t.titleItalic}</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
          <p className="text-muted-foreground leading-relaxed">{t.lead}</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 lg:col-span-8 reveal">
          {t.steps.map((step, i) => {
            const Icon = step.icon;
            const isOpen = open === i;
            return (
              <div key={step.title} className="journey-step">
                <span className="marker-dot" />
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={1.6} className="text-rose" />
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-1">{step.label}</p>
                        <h3 className="font-display text-2xl group-hover:text-rose transition-colors">{step.title}</h3>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`mt-2 shrink-0 text-muted-foreground transition-transform duration-500 ${isOpen ? "rotate-180 text-rose" : ""}`}
                    />
                  </div>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground leading-relaxed pt-4 pr-6 max-w-xl">{step.desc}</p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="col-span-12 lg:col-span-4 reveal" style={{ transitionDelay: "120ms" }}>
          <div className="glass-panel p-7 sticky top-28">
            <p className="eyebrow mb-3">{lang === "de" ? "Bereit?" : "Ready?"}</p>
            <h3 className="font-display text-2xl mb-3">
              {lang === "de" ? "Lass uns deine Website planen." : "Let's plan your website."}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {lang === "de"
                ? "30 Minuten Erstgespräch — unverbindlich, persönlich und mit konkreten ersten Empfehlungen."
                : "30-minute intro call — no obligation, personal, with concrete first recommendations."}
            </p>
            <a href=path("inquiry") className="btn-cta w-full">
              {lang === "de" ? "Beratung anfragen" : "Request a Consultation"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
