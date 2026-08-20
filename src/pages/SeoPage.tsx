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
  ArrowUpRight,
  Eye,
  ShieldCheck,
  MessageSquare,
  Infinity as InfinityIcon,
  Mail,
} from "lucide-react";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CONTACT, mailtoLink } from "@/data/contact";
import seoMockupA from "@/assets/projects/dentallux.png";
import seoMockupB from "@/assets/projects/creditpath.png";
import officeDesk from "@/assets/portraits/marianna-office-desk.jpeg";


const SeoPage = () => {
  const { lang, path } = useLang();
  const t = pick(lang,
    {
      seoTitle: "SEO Nürnberg | SEO Optimierung für Unternehmen — Marianna Kuzmenko",
      seoDesc: "Professionelle SEO-Optimierung für Unternehmen in Nürnberg, Fürth, Erlangen, München und ganz Deutschland. Mehr Sichtbarkeit, bessere Nutzererfahrung und eine technisch starke Website.",
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
      seoTitle: "SEO Nuremberg | SEO Optimization for Businesses — Marianna Kuzmenko",
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
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: pick(lang, "SEO Optimierung", "SEO optimization"),
          name: t.seoTitle,
          description: t.seoDesc,
          provider: {
            "@type": "Person",
            name: CONTACT.name,
            email: CONTACT.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: CONTACT.street,
              addressLocality: "Nürnberg",
              postalCode: "90461",
              addressCountry: "DE",
            },
          },
          areaServed: ["Nürnberg", "Fürth", "Erlangen", "München", "Deutschland", "Österreich", "Schweiz"],
        }}
      />

      <section className="container-editorial pt-12 md:pt-20 pb-12 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-center relative">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow mb-6">{t.eye}</p>
            <h1 className="display-xl">
              {pick(lang, "Mehr Sichtbarkeit bei Google.", "More visibility on Google.")}<br />
              <span className="italic text-rose">
                {pick(lang, "Mehr Menschen erreichen.", "Reach more people.")}
              </span>
            </h1>
            <p className="mt-7 text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl">
              {pick(lang,
                "Eine schöne Website ist nur dann wertvoll, wenn potenzielle Kundinnen und Kunden sie auch finden. Ich verbinde Webdesign, SEO, UX und technische Optimierung zu Websites, die nicht nur gut aussehen, sondern in Suchmaschinen sichtbar sind.",
                "A beautiful website only creates value when potential customers can actually find it. I combine web design, SEO, UX and technical optimization into websites that look refined and stay visible in search."
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={path("inquiry")} className="btn-cta">
                {pick(lang, "SEO-Beratung anfragen", "Request SEO consulting")} <ArrowUpRight size={16} />
              </Link>
              <WhatsAppButton lang={lang} />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                pick(lang, "Webdesign", "Web design"),
                "SEO",
                "UX",
                pick(lang, "Technische Optimierung", "Technical optimization"),
              ].map((k) => (
                <span key={k} className="inline-flex items-center gap-2">
                  <span aria-hidden className="inline-block w-1.5 h-1.5 rounded-full bg-rose" />
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="showcase-mockup rounded-[1.75rem] overflow-hidden tilt-right">
                <img
                  src={seoMockupA}
                  alt={pick(lang, "Website-Mockup eines SEO-optimierten Projekts von Marianna Kuzmenko", "Website mockup of an SEO-optimized project by Marianna Kuzmenko")}
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -left-4 w-40 md:w-52 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] rotate-[-4deg] border border-white/70">
                <img
                  src={officeDesk}
                  alt={pick(lang, "Marianna Kuzmenko bei der SEO-Arbeit am Schreibtisch", "Marianna Kuzmenko working on SEO at her desk")}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-16 relative">
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed font-display">
              {t.lead1a}<span className="marker">{t.leadMark}</span>{t.lead1b}
            </p>
          </div>
        </div>
      </section>

      {/* WARUM SEO WICHTIG IST */}
      <section className="container-editorial py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Der Nutzen", "The value")}</p>
          <h2 className="display-lg">
            {pick(lang, "Warum SEO ", "Why SEO ")}
            <span className="italic text-rose">{pick(lang, "wichtig ist.", "matters.")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Eye, t: pick(lang, "Mehr Sichtbarkeit", "More visibility"), d: pick(lang, "Potenzielle Kundinnen und Kunden finden Ihr Unternehmen über Google.", "Potential customers can find your business through Google.") },
            { icon: ShieldCheck, t: pick(lang, "Mehr Vertrauen", "More trust"), d: pick(lang, "Eine professionelle Google-Präsenz stärkt Ihre Glaubwürdigkeit.", "A professional Google presence strengthens credibility.") },
            { icon: MessageSquare, t: pick(lang, "Mehr Anfragen", "More inquiries"), d: pick(lang, "Bessere Sichtbarkeit kann mehr relevante Besucher und Anfragen bringen.", "Better visibility can bring more relevant visitors and inquiries.") },
            { icon: InfinityIcon, t: pick(lang, "Langfristiger Effekt", "Long-term effect"), d: pick(lang, "SEO wirkt weiter, auch lange nach dem Launch der Website.", "SEO keeps working long after the website launch.") },
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

      {/* PROZESS */}
      <section className="container-editorial py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Vorgehen", "Process")}</p>
          <h2 className="display-lg">
            {pick(lang, "Wie ich Ihre Website für ", "How I optimize your website for ")}
            <span className="italic text-rose">{pick(lang, "Google optimiere.", "Google.")}</span>
          </h2>
        </div>
        <ol className="relative border-l border-border/80 pl-6 md:pl-10 space-y-8">
          {[
            { n: "01", t: pick(lang, "SEO-Analyse", "SEO analysis"), d: pick(lang, "Ehrliche Bestandsaufnahme: Technik, Inhalte, Wettbewerb.", "An honest baseline: technology, content, competition.") },
            { n: "02", t: pick(lang, "Keyword-Strategie", "Keyword strategy"), d: pick(lang, "Themen und Suchintentionen statt reiner Wortlisten.", "Topics and search intent instead of plain word lists.") },
            { n: "03", t: pick(lang, "On-Page Optimierung", "On-page optimization"), d: pick(lang, "Titel, Meta-Daten, Überschriften, interne Verlinkung.", "Titles, meta data, headings, internal linking.") },
            { n: "04", t: pick(lang, "Technische SEO", "Technical SEO"), d: pick(lang, "Ladezeit, Indexierung, strukturierte Daten, Core Web Vitals.", "Speed, indexing, structured data, Core Web Vitals.") },
            { n: "05", t: pick(lang, "Content & Struktur", "Content & structure"), d: pick(lang, "Klare Seitenarchitektur und Texte, die Fragen beantworten.", "Clear site architecture and copy that answers real questions.") },
            { n: "06", t: pick(lang, "Monitoring & Weiterentwicklung", "Monitoring & iteration"), d: pick(lang, "Messen, lernen, nachschärfen — Schritt für Schritt.", "Measure, learn, refine — step by step.") },
          ].map((it, i) => (
            <li key={it.n} className="relative reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <span
                aria-hidden
                className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full border-2 border-background"
                style={{ background: "hsl(var(--berry))" }}
              />
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                <span className="font-mono text-xs tracking-[0.2em] text-rose-hover">{it.n}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl mb-1">{it.t}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{it.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* SEO + WEBDESIGN */}
      <section className="container-editorial py-16 md:py-20">
        <div className="card-soft p-8 md:p-14">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4">{pick(lang, "Zusammenspiel", "Working together")}</p>
              <h2 className="display-md">
                {pick(lang, "SEO beginnt bereits beim ", "SEO starts with ")}
                <span className="italic text-rose">{pick(lang, "Webdesign.", "web design.")}</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {pick(lang,
                  "SEO ist keine Ergänzung, die man am Ende hinzufügt. Struktur, UX, mobile Darstellung, Ladegeschwindigkeit, semantisches HTML, Überschriften, Inhalte, Metadaten und interne Verlinkung entscheiden gemeinsam darüber, wie gut eine Website verstanden und gefunden werden kann.",
                  "SEO isn't something you bolt on at the end. Structure, UX, mobile experience, loading speed, semantic HTML, headings, content, metadata and internal linking together decide how well a website can be understood and discovered."
                )}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {pick(lang,
                  "Weil ich Webdesign und SEO aus einer Hand anbiete, wird beides von Anfang an zusammen gedacht.",
                  "Because I offer both web design and SEO, the two are considered together from day one."
                )}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to={path("web")} className="btn-ghost-soft">
                  {pick(lang, "Webentwicklung ansehen", "See web development")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
              {[
                pick(lang, "Struktur", "Structure"), "UX",
                pick(lang, "Mobile Darstellung", "Mobile experience"),
                pick(lang, "Ladegeschwindigkeit", "Loading speed"),
                pick(lang, "Semantisches HTML", "Semantic HTML"),
                pick(lang, "Überschriften", "Headings"),
                pick(lang, "Metadaten", "Metadata"),
                pick(lang, "Interne Verlinkung", "Internal linking"),
              ].map((k) => (
                <div key={k} className="rounded-2xl bg-white/80 backdrop-blur border border-border/70 px-4 py-3 text-sm text-foreground/85">
                  {k}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4">{pick(lang, "Lokale Sichtbarkeit", "Local visibility")}</p>
            <h2 className="display-lg">
              {pick(lang, "Gefunden werden — genau dort, ", "Get found — right where ")}
              <span className="italic text-rose">{pick(lang, "wo Ihre Kunden suchen.", "your customers search.")}</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
              {pick(lang,
                "Viele Anfragen entstehen regional: Menschen suchen nach einem Studio, einer Praxis oder einem Handwerksbetrieb in ihrer Nähe. Lokales SEO sorgt dafür, dass Ihr Unternehmen bei genau diesen Suchanfragen sichtbar wird — mit sauberen Standortangaben, passenden Inhalten und einer technisch stabilen Website.",
                "Many inquiries start locally: people look for a studio, practice or service near them. Local SEO helps your business show up for exactly those searches — with clean location data, relevant content and a technically solid website."
              )}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              {pick(lang,
                "Ich arbeite mit Unternehmen in Nürnberg, Fürth, Erlangen und München sowie deutschlandweit, in Österreich und der Schweiz.",
                "I work with businesses in Nuremberg, Fürth, Erlangen and Munich, as well as across Germany, Austria and Switzerland."
              )}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="panel-white">
              <p className="case-step-label">{pick(lang, "Regionen", "Regions")}</p>
              <ul className="mt-3 space-y-2">
                {["Nürnberg", "Fürth", "Erlangen", "München", pick(lang, "Deutschland", "Germany"), pick(lang, "Österreich", "Austria"), pick(lang, "Schweiz", "Switzerland")].map((c) => (
                  <li key={c} className="flex items-center gap-3 text-foreground/85">
                    <MapPin size={15} className="text-rose shrink-0" strokeWidth={1.8} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL CASE STUDY */}
      <section className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="showcase-mockup rounded-[1.75rem] overflow-hidden tilt-left">
              <img
                src={seoMockupB}
                alt={pick(lang, "Website-Projekt auf einem Desktop-Mockup — Design, UX und SEO zusammen gedacht", "Website project on a desktop mockup — design, UX and SEO considered together")}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">{pick(lang, "Beispiel", "Example")}</p>
            <h2 className="display-md">
              {pick(lang, "Von der Gestaltung ", "From design ")}
              <span className="italic text-rose">{pick(lang, "bis zur Sichtbarkeit.", "to visibility.")}</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {pick(lang,
                "Ich gestalte keine Website und lasse Sie danach allein. Design, UX, technische Struktur, Performance, SEO und mobile Nutzung betrachte ich als ein zusammenhängendes System — jedes Element beeinflusst das andere.",
                "I don't design a website and leave you alone with it. Design, UX, technical structure, performance, SEO and the mobile experience are one connected system — each element affects the others."
              )}
            </p>
            <div className="mt-7">
              <Link to={path("work")} className="btn-ghost-soft">
                {t.seoWork} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20">
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

      <section className="container-editorial py-16 md:py-20">
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

      <section className="container-editorial py-16 md:py-20">
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

      <section className="container-editorial py-16 md:py-20">
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

      {/* SEO is more than keywords */}
      <section className="container-editorial py-20 md:py-16 md:py-20">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Mehr als Keywords", "More than keywords")}</p>
          <h2 className="display-lg">
            {pick(lang, "SEO ist mehr als ", "SEO is more than ")}
            <span className="italic text-rose">{pick(lang, "Keywords.", "keywords.")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            {pick(lang,
              "Echte Sichtbarkeit entsteht, wenn vier Disziplinen zusammenspielen — Technik, Struktur, Performance und Nutzererfahrung.",
              "Real visibility happens when four disciplines align — technical SEO, structure, performance and user experience."
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Wrench, t: pick(lang, "Technisches SEO", "Technical SEO"), d: pick(lang, "Crawlbarkeit, Indexierung, Schema — das unsichtbare Fundament.", "Crawlability, indexing, schema — the invisible foundation.") },
            { icon: Layers, t: pick(lang, "Website-Struktur", "Site Structure"), d: pick(lang, "Klare Hierarchie, die Nutzer und Google sofort verstehen.", "Clear hierarchy that users and Google instantly understand.") },
            { icon: Gauge, t: pick(lang, "Performance", "Performance"), d: pick(lang, "Schnelle Seiten ranken besser und konvertieren stärker.", "Fast pages rank better and convert stronger.") },
            { icon: MousePointer2, t: pick(lang, "Nutzererfahrung", "User Experience"), d: pick(lang, "Verweildauer, Klarheit, Vertrauen — die neuen Ranking-Signale.", "Time on site, clarity, trust — the new ranking signals.") },
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

      {/* SEO Growth Journey */}
      <section className="container-editorial py-20 md:py-16 md:py-20">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Die SEO-Reise", "The SEO journey")}</p>
          <h2 className="display-lg">
            {pick(lang, "Von Sichtbarkeit ", "From visibility ")}
            <span className="italic text-rose">{pick(lang, "zur Autorität.", "to authority.")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {pick(lang,
              "SEO ist kein Schalter, sondern ein Prozess. So sieht eine ehrliche Zeitleiste aus.",
              "SEO isn't a switch — it's a process. Here's an honest timeline."
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Sprout, eye: pick(lang, "Monat 1", "Month 1"), t: pick(lang, "Fundament", "Foundation"), d: pick(lang, "Audit, technische Basis, Keyword-Strategie.", "Audit, technical baseline, keyword strategy."), p: 25 },
            { icon: Wrench, eye: pick(lang, "Monat 2", "Month 2"), t: pick(lang, "Optimierung", "Optimization"), d: pick(lang, "On-Page, Inhalte, Struktur, interne Verlinkung.", "On-page, content, structure, internal linking."), p: 50 },
            { icon: LineChart, eye: pick(lang, "Monat 3", "Month 3"), t: pick(lang, "Wachstum", "Growth"), d: pick(lang, "Erste Rankings, Traffic-Zuwachs, Feinjustierung.", "First rankings, traffic growth, fine-tuning."), p: 75 },
            { icon: Trophy, eye: pick(lang, "Langfristig", "Long-term"), t: pick(lang, "Autorität", "Authority"), d: pick(lang, "Stabile Positionen, organisches Wachstum, Vertrauen.", "Stable positions, organic growth, trust."), p: 100 },
          ].map((it, i) => (
            <div key={i} className="relative panel-white reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{it.eye}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--rose-soft))" }}>
                  <it.icon size={16} className="text-rose" strokeWidth={1.6} />
                </div>
              </div>
              <h3 className="font-display text-2xl mb-2">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              <div className="mt-5 h-1 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${it.p}%`, background: "linear-gradient(90deg, hsl(var(--rose)), hsl(var(--rose-hover)))" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why businesses lose visibility */}
      <section className="container-editorial py-20 md:py-16 md:py-20">
        <div className="card-soft p-8 md:p-16" style={{ background: "var(--gradient-sky)" }}>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow mb-4">{pick(lang, "Häufige Fehler", "Common mistakes")}</p>
              <h2 className="display-lg">
                {pick(lang, "Warum Unternehmen ", "Why businesses ")}
                <span className="italic">{pick(lang, "Sichtbarkeit verlieren.", "lose visibility.")}</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {pick(lang,
                  "Die meisten Websites scheitern nicht an Inhalten, sondern an unsichtbaren technischen Lücken. Professionelles SEO schließt sie systematisch.",
                  "Most sites don't fail on content — they fail on invisible technical gaps. Professional SEO closes them systematically."
                )}
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 space-y-3">
              {[
                { t: pick(lang, "Langsame Websites", "Slow websites"), d: pick(lang, "Jede Sekunde Ladezeit kostet Rankings und Conversions.", "Every second of load time costs rankings and conversions.") },
                { t: pick(lang, "Schwache Struktur", "Poor structure"), d: pick(lang, "Ohne klare Hierarchie versteht Google den Inhalt nicht.", "Without clear hierarchy, Google can't understand the content.") },
                { t: pick(lang, "Schwaches technisches SEO", "Weak technical SEO"), d: pick(lang, "Fehlende Meta-Daten, schlechte Indexierung, kaputtes Schema-Markup.", "Missing meta, poor indexing, broken schema markup.") },
                { t: pick(lang, "Fehlende Optimierung", "Missing optimization"), d: pick(lang, "Keine kontinuierliche Pflege — Rankings rutschen langsam ab.", "No ongoing care — rankings slowly slip away.") },
              ].map((it, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl bg-white/80 backdrop-blur p-5 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "hsl(38 80% 88%)" }}>
                    <AlertTriangle size={16} className="text-foreground/70" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg mb-1">{it.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Without / With SEO */}
      <section className="container-editorial py-20 md:py-16 md:py-20">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="eyebrow mb-4">{pick(lang, "Was steht auf dem Spiel?", "What's at stake?")}</p>
          <h2 className="display-lg">
            {pick(lang, "Was passiert ", "What if you ")}
            <span className="italic text-rose">{pick(lang, "ohne SEO?", "ignore SEO?")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-3xl p-8 md:p-10 border border-border bg-white/60">
            <p className="eyebrow mb-5">{pick(lang, "Ohne SEO", "Without SEO")}</p>
            <ul className="space-y-3">
              {[
                pick(lang, "Geringere Sichtbarkeit bei Google", "Lower visibility on Google"),
                pick(lang, "Weniger qualifizierter Traffic", "Less qualified traffic"),
                pick(lang, "Abhängigkeit von bezahlter Werbung", "Dependence on paid advertising"),
                pick(lang, "Schwankende, unvorhersehbare Anfragen", "Volatile, unpredictable inquiries"),
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
            <p className="eyebrow mb-5 !text-white/80">{pick(lang, "Mit professionellem SEO", "With professional SEO")}</p>
            <ul className="space-y-3 text-white">
              {[
                pick(lang, "Bessere Rankings bei Google", "Better rankings on Google"),
                pick(lang, "Konstanter, organischer Traffic", "Consistent organic traffic"),
                pick(lang, "Langfristiges Wachstum", "Long-term growth"),
                pick(lang, "Mehr Geschäftsmöglichkeiten", "More business opportunities"),
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

      <section className="container-editorial pb-8">
        <div className="card-soft p-10 md:p-16 text-center" style={{ background: "var(--gradient-sky)" }}>
          <h2 className="display-md mb-5">
            {pick(lang, "Bereit, online ", "Ready to get ")}
            <span className="italic text-rose">{pick(lang, "besser gefunden zu werden?", "found more easily?")}</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
            {pick(lang,
              "Erzählen Sie mir kurz von Ihrem Unternehmen — ich sage Ihnen ehrlich, welche SEO-Schritte den größten Unterschied machen.",
              "Tell me briefly about your business — I'll honestly tell you which SEO steps will make the biggest difference."
            )}
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link to={path("inquiry")} className="btn-cta">
              {pick(lang, "SEO-Beratung anfragen", "Request SEO consulting")} <ArrowUpRight size={16} />
            </Link>
            <WhatsAppButton lang={lang} />
            <a href={mailtoLink("SEO")} className="btn-ghost-soft">
              <Mail size={14} /> {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      <ConversionCta
        eyebrow={pick(lang, "Sichtbarkeit aufbauen", "Build visibility")}
        title={
          <>
            {pick(lang, "Hol dir einen ", "Get a ")}
            <span className="italic text-rose">{pick(lang, "kostenlosen Website-Check.", "free website review.")}</span>
          </>
        }
        lead={pick(lang,
          "Ich werfe einen ehrlichen Blick auf deine Website — technisches SEO, Struktur, Performance — und sage dir, wo der größte Hebel liegt.",
          "I'll take an honest look at your site — technical SEO, structure, performance — and tell you where the biggest lever is."
        )}
        primary={{ label: pick(lang, "Website-Check anfragen", "Request a website review"), href: path("inquiry") }}
        secondary={{ label: pick(lang, "Projekt besprechen", "Discuss your project"), href: "mailto:mari1992.kuzmenko@gmail.com" }}
      />
    </Layout>
  );
};

export default SeoPage;
