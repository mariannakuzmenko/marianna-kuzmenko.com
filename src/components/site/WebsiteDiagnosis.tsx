import { useMemo, useState } from "react";
import { Gauge, Palette, Search, MousePointer2, ArrowUpRight, Sparkles } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

interface Metric { key: string; icon: typeof Gauge; label: string; question: string }

export const WebsiteDiagnosis = () => {
  const { lang } = useLang();
  const [scores, setScores] = useState<Record<string, number>>({ design: 6, speed: 6, seo: 5, ux: 6 });
  const [submitted, setSubmitted] = useState(false);

  const t = pick(
    lang,
    {
      eyebrow: "Website Diagnose",
      title: "Wie effektiv",
      titleItalic: "ist deine Website?",
      lead: "Bewerte vier Kernbereiche deiner aktuellen Website. Du bekommst sofort eine Einschätzung — und eine persönliche Empfehlung.",
      metrics: [
        { key: "design", icon: Palette, label: "Design", question: "Wie hochwertig wirkt deine Website?" },
        { key: "speed", icon: Gauge, label: "Speed", question: "Wie schnell lädt deine Website?" },
        { key: "seo", icon: Search, label: "SEO", question: "Wie sichtbar bist du in Google?" },
        { key: "ux", icon: MousePointer2, label: "UX", question: "Wie intuitiv ist die Nutzerführung?" },
      ] as Metric[],
      lowLabel: "Schwach",
      highLabel: "Stark",
      calculate: "Auswerten",
      again: "Neu bewerten",
      resultEyebrow: "Dein Ergebnis",
      tier: {
        low: { name: "Erheblicher Optimierungsbedarf", desc: "Deine Website lässt jeden Tag potenzielle Kund:innen verlieren. Ein Redesign mit klarer Strategie würde messbare Wirkung zeigen." },
        mid: { name: "Solide — mit klarem Potenzial", desc: "Die Basis steht, aber Design, SEO oder Conversion-Pfad lassen sich deutlich schärfen. Ein gezieltes Refresh würde reichen." },
        high: { name: "Sehr gut — Feinschliff lohnt sich", desc: "Deine Website ist auf einem starken Niveau. Mit gezielten SEO- und UX-Anpassungen ist noch mehr drin." },
      },
      cta: "Kostenlosen Website-Review anfragen",
    },
    {
      eyebrow: "Website Diagnosis",
      title: "How effective",
      titleItalic: "is your website?",
      lead: "Rate four core areas of your current site. You get an instant assessment — and a personal recommendation.",
      metrics: [
        { key: "design", icon: Palette, label: "Design", question: "How premium does your site feel?" },
        { key: "speed", icon: Gauge, label: "Speed", question: "How fast does it load?" },
        { key: "seo", icon: Search, label: "SEO", question: "How visible are you in Google?" },
        { key: "ux", icon: MousePointer2, label: "UX", question: "How intuitive is the user flow?" },
      ] as Metric[],
      lowLabel: "Weak",
      highLabel: "Strong",
      calculate: "Get Result",
      again: "Re-evaluate",
      resultEyebrow: "Your result",
      tier: {
        low: { name: "Significant room to grow", desc: "Your site is leaving inquiries on the table. A redesign with a clear strategy would have a measurable impact." },
        mid: { name: "Solid — with clear potential", desc: "The foundation is there, but design, SEO or conversion can be sharpened. A targeted refresh would be enough." },
        high: { name: "Strong — refinement worth it", desc: "Your site is performing well. Focused SEO and UX tuning can still unlock more." },
      },
      cta: "Request a Free Website Review",
    },
  );

  const total = useMemo(() => Math.round(((scores.design + scores.speed + scores.seo + scores.ux) / 40) * 100), [scores]);
  const tier = total < 50 ? t.tier.low : total < 80 ? t.tier.mid : t.tier.high;

  return (
    <section className="container-editorial py-24" id="diagnose">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-5 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.eyebrow}</p>
          <h2 className="display-lg reveal-line">
            {t.title}
            <br />
            <span className="italic text-rose">{t.titleItalic}</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md reveal-line">{t.lead}</p>
          <div className="mt-8 reveal-line">
            <span className="availability-pill">
              <span className="pulse-dot" />
              {lang === "de" ? "Verfügbar für neue Projekte" : "Available for new projects"}
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 reveal">
          <div className="panel-white">
            {!submitted ? (
              <>
                <div className="space-y-7">
                  {t.metrics.map((m) => {
                    const Icon = m.icon;
                    const v = scores[m.key];
                    return (
                      <div key={m.key}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-xl bg-rose-soft flex items-center justify-center">
                              <Icon size={16} strokeWidth={1.6} className="text-rose" />
                            </span>
                            <div>
                              <p className="text-sm font-medium">{m.label}</p>
                              <p className="text-xs text-muted-foreground">{m.question}</p>
                            </div>
                          </div>
                          <span className="font-mono text-sm tabular-nums text-rose">{v}/10</span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={10}
                          value={v}
                          onChange={(e) => setScores((s) => ({ ...s, [m.key]: Number(e.target.value) }))}
                          className="w-full accent-[hsl(var(--rose))]"
                          aria-label={m.label}
                        />
                        <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70 mt-1">
                          <span>{t.lowLabel}</span><span>{t.highLabel}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={() => setSubmitted(true)} className="btn-cta">
                    {t.calculate} <Sparkles size={16} />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-2">
                <p className="eyebrow mb-4">{t.resultEyebrow}</p>
                <div className="relative inline-flex items-center justify-center w-40 h-40 mb-6">
                  <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(var(--rose-soft))" strokeWidth="6" />
                    <circle
                      cx="50" cy="50" r="44" fill="none"
                      stroke="hsl(var(--rose))" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray={`${(total / 100) * 276.46} 276.46`}
                      style={{ transition: "stroke-dasharray 1.2s ease" }}
                    />
                  </svg>
                  <div className="text-center">
                    <p className="font-display text-5xl">{total}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">/ 100</p>
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-3">{tier.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">{tier.desc}</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="#kontakt" className="btn-cta">{t.cta} <ArrowUpRight size={16} /></a>
                  <button onClick={() => setSubmitted(false)} className="btn-cta-outline">{t.again}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
