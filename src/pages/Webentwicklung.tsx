import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { ConversionCta } from "@/components/site/ConversionCta";

import { ProcessStep } from "@/components/site/ProcessStep";
import { IconCard } from "@/components/site/IconCard";
import { Link } from "react-router-dom";
import {
  Compass,
  PenTool,
  Code2,
  Search,
  Briefcase,
  Rocket,
  LayoutGrid,
  Globe,
  ArrowRight,
  Smartphone,
  Gauge,
  Accessibility,
  ShieldCheck,
  Check,
  X as XIcon,
  Layers,
  TestTube2,
  TrendingUp,
} from "lucide-react";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const Webentwicklung = () => {
  const { lang, path } = useLang();
  const t = pick(lang,
    {
      seoTitle: "Webentwicklung & Webdesign in Deutschland — Marianna Kuzmenko",
      seoDesc: "Moderne Websites für Unternehmen und Selbstständige in Deutschland. Webentwicklung, UX/UI Design und SEO Optimierung — alles aus einer Hand.",
      eye: "03 — Web Development",
      h1A: "Websites,",
      h1B: "die ",
      h1Accent: "leise",
      h1C: "funktionieren.",
      lead1a: "Ich entwickle ",
      leadAccent: "moderne Websites",
      lead1b: " für Unternehmen und Selbstständige in Deutschland. Von der ersten Idee bis zur fertigen Website — alles aus einer Hand.",
      services2eye: "Leistungen",
      services2A: "Was ich",
      services2B: "umsetze.",
      offers: [
        { title: "Business Websites", desc: "Repräsentative Webpräsenz für KMUs und etablierte Marken in Deutschland." },
        { title: "Landingpages", desc: "Conversion-optimierte Seiten für Kampagnen, Produkte und Launches." },
        { title: "Portfolio Websites", desc: "Editorial gestaltete Plattformen für Kreative und Selbstständige." },
        { title: "SEO-optimierte Seiten", desc: "Technisch sauber, semantisch korrekt, ranking-bereit ab Tag eins." },
      ],
      processEye: "Prozess",
      processA: "Vier Phasen,",
      processB: "ein klares Bild.",
      processLead: "Hover über jeden Schritt — er erzählt dir mehr.",
      steps: [
        { title: "Analyse & Struktur", desc: "Ziele, Zielgruppe, Wettbewerb, Keywords.", detail: "Wir starten mit einem klaren Bild: für wen, warum, womit. Das Fundament steht zuerst." },
        { title: "UX/UI Design", desc: "Nutzerflüsse, Wireframes, visuelles System.", detail: "Klar bevor schön. Erst die Struktur, dann die Atmosphäre — beides gemeinsam getestet." },
        { title: "Entwicklung", desc: "Sauberer Code in React. Performance & A11y.", detail: "Modular, schnell, wartbar. Keine zehn Plugins, kein Chaos im Maschinenraum." },
        { title: "SEO Integration", desc: "Technisches SEO, Inhalte, Struktur.", detail: "Sichtbarkeit ist eingebaut, nicht aufgesetzt. Du startest mit Fundament, nicht mit Hoffnung." },
      ],
      moreSeo: "Mehr über meinen SEO-Ansatz",
      resultEye: "Ergebnis",
      resultA: "Eine Website,",
      resultB: "die...",
      results: ["schnell lädt.", "gut aussieht.", "gefunden wird."],
      viewWork: "Projekte ansehen →",
    },
    {
      seoTitle: "Web Development & Web Design in Germany — Marianna Kuzmenko",
      seoDesc: "Modern websites for businesses and freelancers — designed, built and optimized for SEO from a single source. Based in Germany, working worldwide.",
      eye: "03 — Web Development",
      h1A: "Websites",
      h1B: "that ",
      h1Accent: "quietly",
      h1C: "perform.",
      lead1a: "I build ",
      leadAccent: "modern websites",
      lead1b: " for businesses, agencies and independents. From first idea to finished site — handled end-to-end.",
      services2eye: "Services",
      services2A: "What I",
      services2B: "build.",
      offers: [
        { title: "Business Websites", desc: "Confident web presence for SMEs and established brands in Europe and the US." },
        { title: "Landing Pages", desc: "Conversion-focused pages for campaigns, products and launches." },
        { title: "Portfolio Sites", desc: "Editorial platforms for creatives, studios and independents." },
        { title: "SEO-ready Sites", desc: "Technically clean, semantically correct, ranking-ready from day one." },
      ],
      processEye: "Process",
      processA: "Four phases,",
      processB: "one clear picture.",
      processLead: "Hover each step — it tells you more.",
      steps: [
        { title: "Analysis & Structure", desc: "Goals, audience, competition, keywords.", detail: "We start with a clear picture: for whom, why, with what. The foundation comes first." },
        { title: "UX/UI Design", desc: "User flows, wireframes, visual system.", detail: "Clear before pretty. Structure first, atmosphere second — both tested together." },
        { title: "Development", desc: "Clean React code. Performance & a11y.", detail: "Modular, fast, maintainable. No ten plugins, no chaos in the engine room." },
        { title: "SEO Integration", desc: "Technical SEO, content, structure.", detail: "Visibility is built in, not bolted on. You start with foundation, not hope." },
      ],
      moreSeo: "More on my SEO approach",
      resultEye: "Result",
      resultA: "A website",
      resultB: "that…",
      results: ["loads fast.", "looks right.", "gets found."],
      viewWork: "View work →",
    }
  );

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("web")}
        pathDe={ROUTES.web.de}
        pathEn={ROUTES.web.en}
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-blue animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">{t.eye}</p>
        <h1 className="display-xl relative">
          {t.h1A}<br />
          <span className="italic">{t.h1B}</span><span className="text-rose">{t.h1Accent}</span><br />
          <span className="italic">{t.h1C}</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl leading-relaxed font-display">
              {t.lead1a}<span className="marker">{t.leadAccent}</span>{t.lead1b}
            </p>
          </div>
        </div>
      </section>

      <div className="container-editorial py-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
        {["React", "TypeScript", "SEO", "Performance", "Accessibility", "Tailwind"].map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">{t.services2eye}</p>
            <h2 className="display-lg">{t.services2A}<br /><span className="italic">{t.services2B}</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IconCard icon={Briefcase} title={t.offers[0].title} desc={t.offers[0].desc} index={0} />
          <IconCard icon={Rocket} title={t.offers[1].title} desc={t.offers[1].desc} variant="blue" index={1} />
          <IconCard icon={LayoutGrid} title={t.offers[2].title} desc={t.offers[2].desc} variant="pink" index={2} />
          <IconCard icon={Globe} title={t.offers[3].title} desc={t.offers[3].desc} index={3} />
        </div>
      </section>

      <section className="container-editorial py-28 relative">
        <div className="mb-16">
          <p className="eyebrow mb-4">{t.processEye}</p>
          <h2 className="display-lg">
            {t.processA}<br />
            <span className="italic text-rose">{t.processB}</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl">{t.processLead}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((s, i) => {
            const Icon = [Compass, PenTool, Code2, Search][i];
            return (
              <ProcessStep
                key={i}
                n={`0${i + 1}`}
                icon={Icon}
                title={s.title}
                desc={s.desc}
                detail={s.detail}
                index={i}
              />
            );
          })}
        </div>

        <div className="mt-12">
          <Link to={path("seo")} className="btn-ghost-soft">
            {t.moreSeo} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="container-editorial py-28">
        <div className="card-soft p-10 md:p-16" style={{ background: "var(--gradient-sky)" }}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow mb-4">{t.resultEye}</p>
              <h2 className="display-lg">
                {t.resultA}<br />
                <span className="italic">{t.resultB}</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ul className="space-y-5 font-display text-3xl md:text-5xl">
                {t.results.map((r, i) => (
                  <li key={i} className="reveal flex items-baseline gap-5" style={{ transitionDelay: `${i * 150}ms` }}>
                    <span className="text-rose">→</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <Link to={path("work")} className="btn-cta mt-12">
                {t.viewWork} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Behind Every Great Website */}
      <section className="container-editorial py-20 md:py-28">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Hinter den Kulissen", "Behind the scenes")}</p>
          <h2 className="display-lg">
            {pick(lang, "Hinter jeder ", "Behind every ")}
            <span className="italic text-rose">{pick(lang, "großartigen Website.", "great website.")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            {pick(lang,
              "Webentwicklung ist weit mehr als das Erstellen von Seiten. Es sind fünf Disziplinen, die zusammenspielen — unsichtbar für den Nutzer, entscheidend für den Erfolg.",
              "Web development is far more than building pages. Five disciplines work together — invisible to the user, decisive for success."
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            { icon: Smartphone, t: pick(lang, "Responsive Entwicklung", "Responsive Development"), d: pick(lang, "Pixelgenau auf jedem Gerät — vom Smartphone bis zum 4K-Display.", "Pixel-perfect on every device — from phone to 4K display.") },
            { icon: Gauge, t: pick(lang, "Performance", "Performance"), d: pick(lang, "Schnelle Ladezeiten, optimierte Assets, Core Web Vitals im grünen Bereich.", "Fast load times, optimized assets, Core Web Vitals in the green.") },
            { icon: Accessibility, t: pick(lang, "Barrierefreiheit", "Accessibility"), d: pick(lang, "WCAG-konform — eine Website, die wirklich alle Menschen nutzen können.", "WCAG-compliant — a site truly usable for everyone.") },
            { icon: Search, t: pick(lang, "SEO Fundament", "SEO Foundation"), d: pick(lang, "Semantisches HTML, sauberes Markup, ranking-bereit ab Tag eins.", "Semantic HTML, clean markup, ranking-ready from day one.") },
            { icon: ShieldCheck, t: pick(lang, "Wartbarer Code", "Clean Code"), d: pick(lang, "Modular, dokumentiert, langfristig erweiterbar — kein technisches Schuldenmeer.", "Modular, documented, scalable long-term — no technical debt.") },
          ].map((it, i) => (
            <div key={i} className="panel-white reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--rose-soft))" }}>
                <it.icon size={20} className="text-rose" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl mb-2">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Development Quality Matters */}
      <section className="container-editorial py-20 md:py-28">
        <div className="card-soft p-8 md:p-16" style={{ background: "var(--gradient-sky)" }}>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow mb-4">{pick(lang, "Warum es zählt", "Why it matters")}</p>
              <h2 className="display-lg">
                {pick(lang, "Warum ", "Why ")}
                <span className="italic">{pick(lang, "Qualität ", "quality ")}</span>
                {pick(lang, "in der Entwicklung entscheidet.", "in development decides.")}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {pick(lang,
                  "Was im Code passiert, sieht der Nutzer nicht — aber er spürt es bei jedem Klick.",
                  "What happens in the code is invisible — but felt with every click."
                )}
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: pick(lang, "Nutzererlebnis", "User Experience"), d: pick(lang, "Flüssige Interaktionen schaffen Vertrauen ab der ersten Sekunde.", "Smooth interactions build trust from the first second.") },
                { t: pick(lang, "Vertrauen", "Trust"), d: pick(lang, "Eine technisch saubere Seite signalisiert Professionalität.", "A technically clean site signals professionalism.") },
                { t: pick(lang, "Geschwindigkeit", "Speed"), d: pick(lang, "Jede Sekunde Ladezeit kostet bis zu 7 % Conversion.", "Every second of load time costs up to 7% conversion.") },
                { t: pick(lang, "Sichtbarkeit", "Search Visibility"), d: pick(lang, "Google bevorzugt schnelle, semantische, mobile Seiten.", "Google favors fast, semantic, mobile-first sites.") },
                { t: pick(lang, "Conversion", "Conversion"), d: pick(lang, "Klare Struktur + Performance = mehr Anfragen.", "Clear structure + performance = more inquiries.") },
                { t: pick(lang, "Zukunftssicher", "Future-proof"), d: pick(lang, "Sauberer Code wächst mit deinem Unternehmen mit.", "Clean code grows with your business.") },
              ].map((it, i) => (
                <div key={i} className="rounded-2xl bg-white/80 backdrop-blur p-5 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <h4 className="font-display text-lg mb-1.5">{it.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Process Flow */}
      <section className="container-editorial py-20 md:py-28">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Der Weg zur Website", "The path")}</p>
          <h2 className="display-lg">
            {pick(lang, "Von der Strategie ", "From strategy ")}
            <span className="italic text-rose">{pick(lang, "zum Wachstum.", "to growth.")}</span>
          </h2>
        </div>
        <div className="relative flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-2">
          {[
            { icon: Compass, t: pick(lang, "Strategie", "Strategy") },
            { icon: Layers, t: pick(lang, "Struktur", "Structure") },
            { icon: Code2, t: pick(lang, "Entwicklung", "Development") },
            { icon: TestTube2, t: pick(lang, "Testing", "Testing") },
            { icon: Rocket, t: pick(lang, "Launch", "Launch") },
            { icon: TrendingUp, t: pick(lang, "Wachstum", "Growth") },
          ].map((step, i, arr) => (
            <div key={i} className="flex-1 flex lg:flex-col items-center gap-3 lg:gap-0">
              <div className="panel-white flex-1 w-full text-center !p-5 lg:!p-6">
                <div className="w-11 h-11 mx-auto rounded-full flex items-center justify-center mb-3" style={{ background: "hsl(var(--rose-soft))" }}>
                  <step.icon size={18} className="text-rose" strokeWidth={1.6} />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">{`0${i + 1}`}</p>
                <p className="font-display text-lg">{step.t}</p>
              </div>
              {i < arr.length - 1 && (
                <div className="text-rose/60 text-2xl lg:text-3xl shrink-0 lg:py-2" aria-hidden>
                  <span className="hidden lg:inline">→</span>
                  <span className="lg:hidden">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Without / With Professional Development */}
      <section className="container-editorial py-20 md:py-28">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Was steht auf dem Spiel?", "What's at stake?")}</p>
          <h2 className="display-lg">
            {pick(lang, "Was passiert, wenn man ", "What if you ")}
            <span className="italic text-rose">{pick(lang, "das ignoriert?", "ignore this?")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-3xl p-8 md:p-10 border border-border bg-white/60">
            <p className="eyebrow mb-5">{pick(lang, "Ohne professionelle Entwicklung", "Without professional development")}</p>
            <ul className="space-y-3">
              {[
                pick(lang, "Langsame, träge Website", "Slow, sluggish website"),
                pick(lang, "Schlechte mobile Erfahrung", "Poor mobile experience"),
                pick(lang, "Technische Probleme & Bugs", "Technical issues & bugs"),
                pick(lang, "Verlorene Anfragen und Umsatz", "Lost inquiries and revenue"),
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <XIcon size={12} strokeWidth={2.5} />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8 md:p-10 relative overflow-hidden" style={{ background: "var(--gradient-rose)" }}>
            <p className="eyebrow mb-5 !text-white/80">{pick(lang, "Mit professioneller Entwicklung", "With professional development")}</p>
            <ul className="space-y-3 text-white">
              {[
                pick(lang, "Bessere Performance", "Better performance"),
                pick(lang, "Erstklassige Nutzererfahrung", "Outstanding user experience"),
                pick(lang, "Stärkeres Vertrauen", "Stronger trust"),
                pick(lang, "Mehr qualifizierte Anfragen", "More qualified inquiries"),
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ConversionCta
        eyebrow={pick(lang, "Bereit?", "Ready?")}
        title={
          <>
            {pick(lang, "Lass uns ", "Let's ")}
            <span className="italic text-rose">{pick(lang, "dein Website-Projekt", "plan your website")}</span>
            {pick(lang, " planen.", " project.")}
          </>
        }
        lead={pick(lang,
          "Erzähl mir von deinem Vorhaben — ich melde mich innerhalb von 24 Stunden mit ersten Ideen und einer ehrlichen Einschätzung.",
          "Tell me about your project — I'll get back within 24 hours with first ideas and an honest take."
        )}
        primary={{ label: pick(lang, "Projekt starten", "Start your project"), href: path("inquiry") }}
        secondary={{ label: pick(lang, "Beratung anfragen", "Request a consultation"), href: "mailto:hello@mariannakuzmenko.de" }}
      />
    </Layout>
  );
};

export default Webentwicklung;
