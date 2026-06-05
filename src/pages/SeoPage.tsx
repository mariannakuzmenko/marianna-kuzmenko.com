import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { IconCard } from "@/components/site/IconCard";
import { ProcessStep } from "@/components/site/ProcessStep";
import { ConversionCta } from "@/components/site/ConversionCta";
import { Link } from "react-router-dom";
import {
  Wrench,
  FileText,
  Network,
  Target,
  User,
  Building2,
  MapPin,
  ArrowRight,
  Gauge,
  Layers,
  MousePointer2,
  Check,
  X as XIcon,
  Sprout,
  LineChart,
  Trophy,
  AlertTriangle,
} from "lucide-react";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const SeoPage = () => {
  const { lang, path } = useLang();
  const t = pick(lang,
    {
      seoTitle: "SEO Optimierung für Websites — SEO Freelancer Deutschland",
      seoDesc: "Nachhaltige SEO Optimierung für Selbstständige und kleine Unternehmen. Technisches SEO, On-Page Optimierung, Keyword-Strategie aus Deutschland.",
      eye: "04 — SEO",
      h1A: "SEO,",
      h1B: "die ",
      h1Accent: "bleibt.",
      lead1a: "SEO ist mehr als Keywords. Es geht darum, ",
      leadMark: "gefunden zu werden",
      lead1b: " — von den richtigen Menschen.",
      whatEye: "Was ich mache",
      whatA: "Vier",
      whatB: "Hebel.",
      levers: [
        { title: "Technisches SEO", desc: "Crawlbarkeit, Indexierung, Performance, Core Web Vitals, Schema." },
        { title: "On-Page Optimierung", desc: "Meta, Headings, interne Verlinkung, semantische Auszeichnung." },
        { title: "Struktur & Inhalte", desc: "Informationsarchitektur, die Nutzer und Suchmaschinen verstehen." },
        { title: "Keyword-Strategie", desc: "Recherche mit Intent. Keine Keyword-Listen ohne Strategie." },
      ],
      approachEye: "Mein Ansatz",
      approach1: "Keine Tricks.",
      approach2: "Keine kurzfristigen Hacks.",
      approach3a: "Sondern ",
      approach3Accent: "nachhaltige Optimierung",
      approach3b: ", die langfristig funktioniert.",
      stepsEye: "So gehe ich vor",
      stepsA: "Schritt",
      stepsB: "für Schritt.",
      steps: [
        { title: "Audit", desc: "Was ist da? Was bremst?", detail: "Ehrliche Bestandsaufnahme — technisch, inhaltlich, strategisch." },
        { title: "Strategie", desc: "Welche Keywords mit Intent?", detail: "Themen statt Wortlisten. Was suchen deine Wunschkunden wirklich?" },
        { title: "Umsetzung", desc: "On-Page, Inhalte, Struktur.", detail: "Sauberes Handwerk: Meta, semantische Tags, interne Verlinkung." },
        { title: "Monitoring", desc: "Messen, lernen, nachschärfen.", detail: "SEO ist kein Schalter. Wir bleiben dran und justieren." },
      ],
      forEye: "Für wen",
      forA: "Passend",
      forB: "für...",
      audiences: [
        { title: "Selbstständige", desc: "Solopreneure, Coaches, Berater — die online gefunden werden müssen." },
        { title: "Kleine Unternehmen", desc: "KMUs, die organischen Traffic statt teurer Ads wollen." },
        { title: "Lokale Businesses", desc: "Local SEO für regionale Sichtbarkeit und echte Kundschaft in Deutschland." },
      ],
      seoWork: "SEO-Projekte ansehen",
    },
    {
      seoTitle: "SEO Optimization — Freelance SEO Specialist · Marianna Kuzmenko",
      seoDesc: "Sustainable SEO for businesses, freelancers and creative studios. Technical SEO, on-page optimization, keyword strategy — built into the website from day one.",
      eye: "04 — SEO",
      h1A: "SEO",
      h1B: "that ",
      h1Accent: "lasts.",
      lead1a: "SEO is more than keywords. It’s about being ",
      leadMark: "found",
      lead1b: " — by the right people.",
      whatEye: "What I do",
      whatA: "Four",
      whatB: "levers.",
      levers: [
        { title: "Technical SEO", desc: "Crawlability, indexing, performance, Core Web Vitals, schema." },
        { title: "On-Page Optimization", desc: "Meta, headings, internal links, semantic markup." },
        { title: "Structure & Content", desc: "Information architecture that users and search engines both understand." },
        { title: "Keyword Strategy", desc: "Research with intent. No keyword lists without a plan." },
      ],
      approachEye: "My approach",
      approach1: "No tricks.",
      approach2: "No short-term hacks.",
      approach3a: "Just ",
      approach3Accent: "sustainable optimization",
      approach3b: " that works long-term.",
      stepsEye: "How I work",
      stepsA: "Step",
      stepsB: "by step.",
      steps: [
        { title: "Audit", desc: "What’s there? What’s slowing it down?", detail: "An honest baseline — technical, content, strategy." },
        { title: "Strategy", desc: "Which keywords with intent?", detail: "Topics over wordlists. What do your ideal customers actually search for?" },
        { title: "Execution", desc: "On-page, content, structure.", detail: "Quiet craftsmanship: meta, semantic tags, internal links." },
        { title: "Monitoring", desc: "Measure, learn, refine.", detail: "SEO isn’t a switch. We stay with it and adjust." },
      ],
      forEye: "Who it’s for",
      forA: "A fit",
      forB: "for…",
      audiences: [
        { title: "Independents", desc: "Solopreneurs, coaches, consultants who need to be found online." },
        { title: "Small businesses", desc: "SMEs that want organic traffic instead of expensive ads." },
        { title: "Local businesses", desc: "Local SEO for regional visibility and real walk-in customers." },
      ],
      seoWork: "View SEO projects",
    }
  );

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("seo")}
        pathDe={ROUTES.seo.de}
        pathEn={ROUTES.seo.en}
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">{t.eye}</p>
        <h1 className="display-xl relative">
          {t.h1A}<br />
          <span className="italic">{t.h1B}</span>
          <span className="text-rose">{t.h1Accent}</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl leading-relaxed font-display">
              {t.lead1a}<span className="marker">{t.leadMark}</span>{t.lead1b}
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">{t.whatEye}</p>
            <h2 className="display-lg">{t.whatA}<br /><span className="italic text-rose">{t.whatB}</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IconCard icon={Wrench} title={t.levers[0].title} desc={t.levers[0].desc} index={0} />
          <IconCard icon={FileText} title={t.levers[1].title} desc={t.levers[1].desc} variant="blue" index={1} />
          <IconCard icon={Network} title={t.levers[2].title} desc={t.levers[2].desc} variant="pink" index={2} />
          <IconCard icon={Target} title={t.levers[3].title} desc={t.levers[3].desc} index={3} />
        </div>
      </section>

      <section className="container-editorial py-28">
        <div className="card-soft p-10 md:p-20 relative overflow-hidden" style={{ background: "var(--gradient-rose)" }}>
          <div className="grid grid-cols-12 gap-6 relative">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">{t.approachEye}</p>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-4 font-display text-3xl md:text-5xl leading-[1.1]">
              <p className="reveal">{t.approach1}</p>
              <p className="reveal italic" style={{ transitionDelay: "120ms" }}>{t.approach2}</p>
              <p className="reveal" style={{ transitionDelay: "240ms" }}>
                {t.approach3a}<span className="underline decoration-foreground decoration-2 underline-offset-8">{t.approach3Accent}</span>{t.approach3b}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial py-28">
        <div className="mb-16">
          <p className="eyebrow mb-4">{t.stepsEye}</p>
          <h2 className="display-lg">{t.stepsA}<br /><span className="italic">{t.stepsB}</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((s, i) => {
            const Icon = [Wrench, Target, FileText, Network][i];
            return (
              <ProcessStep key={i} n={`0${i + 1}`} icon={Icon} title={s.title} desc={s.desc} detail={s.detail} index={i} />
            );
          })}
        </div>
      </section>

      <section className="container-editorial py-28">
        <p className="eyebrow mb-4">{t.forEye}</p>
        <h2 className="display-lg mb-12">{t.forA}<br /><span className="italic text-rose">{t.forB}</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <IconCard icon={User} title={t.audiences[0].title} desc={t.audiences[0].desc} index={0} />
          <IconCard icon={Building2} title={t.audiences[1].title} desc={t.audiences[1].desc} variant="blue" index={1} />
          <IconCard icon={MapPin} title={t.audiences[2].title} desc={t.audiences[2].desc} variant="pink" index={2} />
        </div>

        <div className="mt-12">
          <Link to={path("work")} className="btn-ghost-soft">
            {t.seoWork} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SeoPage;
