import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";

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
              <Link to={path("work")} className="btn-pink mt-12">
                {t.viewWork}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Webentwicklung;
