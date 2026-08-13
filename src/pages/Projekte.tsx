import { useMemo, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { ProjectImage } from "@/components/site/ProjectImage";
import { Sparkle } from "@/components/site/Sparkle";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const FILTERS_DE = [
  "Alle Projekte", "Web Development", "Web Design", "UX/UI", "SEO",
  "Restaurants", "Hotels", "Veterinary", "Pet Business",
  "Beauty", "Healthcare", "E-Commerce", "Corporate",
];
const FILTERS_EN = [
  "All Projects", "Web Development", "Web Design", "UX/UI", "SEO",
  "Restaurants", "Hotels", "Veterinary", "Pet Business",
  "Beauty", "Healthcare", "E-Commerce", "Corporate",
];

const Mockup = ({ p, className = "" }: { p: Project; className?: string }) => (
  <div className={`showcase-mockup rounded-[1.75rem] overflow-hidden ${className}`}>
    <ProjectImage
      project={p}
      imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
      className="w-full h-full"
    />
  </div>
);

const ProjectScene = ({ p, index, caseHref, t, lang }: {
  p: Project; index: number; caseHref: string; lang: "de" | "en";
  t: { visit: string; discover: string; services: string; tech: string; year: string };
}) => {
  const isLeft = p.layout === "left" || p.layout === "floating";
  const isFull = p.layout === "full";
  const isSplit = p.layout === "split";
  const content = pick(lang, p.de, p.en);

  const Info = (
    <div>
      <p className="case-meta mb-3">
        {p.serviceTags.join(" · ")} · {p.year}
      </p>
      <h2 className="font-display leading-[0.95] mb-4" style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)", letterSpacing: "-0.02em" }}>
        {p.name}
      </h2>
      <p className="text-lg md:text-xl font-display italic leading-snug mb-5 text-foreground/90">
        {content.intro}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {pick(lang, p.description.de, p.description.en)}
      </p>

      <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <dt className="case-step-label mb-1">{t.services}</dt>
          <dd className="text-foreground/80">{p.serviceTags.join(", ")}</dd>
        </div>
        <div>
          <dt className="case-step-label mb-1">{t.tech}</dt>
          <dd className="text-foreground/80">{p.tech.slice(0, 3).join(", ")}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-3">
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-cta">
            {t.visit} <ExternalLink size={14} />
          </a>
        )}
        <Link to={caseHref} className="btn-ghost-soft">
          {t.discover} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );

  return (
    <article className={`showcase-scene mood-${p.mood} scene-fade group`}>
      {isFull ? (
        <div className="space-y-10">
          <Mockup p={p} className="tilt-right" />
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 md:col-start-3">{Info}</div>
          </div>
        </div>
      ) : isSplit ? (
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
          <div className="col-span-12 md:col-span-5"><Mockup p={p} className="tilt-left h-full" /></div>
          <div className="col-span-12 md:col-span-7 flex items-center">{Info}</div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-2"}`}>
            <Mockup p={p} className={isLeft ? "tilt-left" : "tilt-right"} />
          </div>
          <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-1"}`}>{Info}</div>
        </div>
      )}
    </article>
  );
};


const Projekte = () => {
  const { lang, path } = useLang();
  const [filter, setFilter] = useState<string>(lang === "en" ? "All Projects" : "Alle Projekte");
  const filters = lang === "en" ? FILTERS_EN : FILTERS_DE;
  const allLabel = filters[0];

  const filtered = useMemo(() => {
    return projects.filter(
      (p) =>
        filter === allLabel ||
        p.serviceTags.includes(filter) ||
        p.categoryTags.includes(filter),
    );
  }, [filter, allLabel]);

  const caseBase = lang === "en" ? "/en/projects/" : "/projekte/";

  const t = pick(lang,
    {
      seoTitle: "Projekte — Selected Work · Marianna Kuzmenko",
      seoDesc: "Ausgewählte Webdesign- und Webentwicklungs-Projekte. Individuelle Websites mit Fokus auf UX, Performance, SEO und Business-Wachstum.",
      eye: "05 — Selected Projects",
      h1A: "Selected", h1B: "Projects.",
      lead: "Jede Website ist individuell designt — mit Fokus auf User Experience, Performance, SEO und messbares Business-Wachstum. Keine Templates. Kein Standard. Nur Arbeit, die für ihre Marke gemacht ist.",
      searchPh: "Projekte durchsuchen...",
      empty: "Keine Projekte gefunden — probier einen anderen Filter.",
      services: "Leistungen", tech: "Technologie", year: "Jahr",
      visit: "Website besuchen", discover: "Projekt entdecken",
      ctaEye: "Nächstes Kapitel",
      ctaA: "Soll deins", ctaB: "das nächste sein?",
      ctaLead: "Eine Website, die wirkt wie deine Handschrift — und arbeitet wie ein gutes Team.",
      bWeb: "Webentwicklung", bSeo: "SEO Optimierung", bStart: "Projekt starten",
    },
    {
      seoTitle: "Selected Work — Portfolio · Marianna Kuzmenko",
      seoDesc: "Selected web design and development projects. Individually crafted websites focused on UX, performance, SEO and business growth.",
      eye: "05 — Selected Projects",
      h1A: "Selected", h1B: "Projects.",
      lead: "Every website is individually designed — with focus on user experience, performance, SEO and measurable business growth. No templates. No defaults. Just work made for its brand.",
      searchPh: "Search projects...",
      empty: "No projects match — try a different filter.",
      services: "Services", tech: "Technology", year: "Year",
      visit: "Visit website", discover: "Discover project",
      ctaEye: "Next chapter",
      ctaA: "Should yours", ctaB: "be the next?",
      ctaLead: "A website that looks like your handwriting — and works like a good team.",
      bWeb: "Web Development", bSeo: "SEO Optimization", bStart: "Start a project",
    }
  );

  return (
    <Layout>
      <Seo
        title={t.seoTitle} description={t.seoDesc}
        path={path("work")} pathDe={ROUTES.work.de} pathEn={ROUTES.work.en}
      />

      {/* HERO */}
      <section className="container-editorial pt-12 md:pt-20 pb-12 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">{t.eye}</p>
        <h1 className="display-xl relative">
          {t.h1A} <span className="italic text-rose">{t.h1B}</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-8 relative">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-muted-foreground">
              {t.lead}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="showcase-mockup rounded-2xl overflow-hidden tilt-left">
                <ProjectImage project={projects[2]} className="w-full h-full" />
              </div>
              <div className="showcase-mockup rounded-2xl overflow-hidden tilt-right mt-8">
                <ProjectImage project={projects[4]} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="container-editorial pb-6 sticky top-16 md:top-20 xl:top-24 z-20 bg-background/80 backdrop-blur-md">
        <div className="py-4 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 min-w-max">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 h-9 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                  filter === f
                    ? "bg-foreground text-background shadow-md"
                    : "bg-card/60 text-muted-foreground hover:bg-card hover:text-foreground border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container-editorial pb-28 space-y-16 md:space-y-24">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-24 animate-fade-in">{t.empty}</p>
        ) : (
          filtered.map((p, i) => (
            <div key={p.slug} className="animate-fade-in">
              <ProjectScene
                p={p} index={i} lang={lang}
                caseHref={`${caseBase}${p.slug}`}
                t={{ visit: t.visit, discover: t.discover, services: t.services, tech: t.tech, year: t.year }}
              />
            </div>
          ))
        )}
      </section>

      {/* CTA */}
      <section className="container-editorial pb-28">
        <div className="card-soft p-10 md:p-16 text-center" style={{ background: "var(--gradient-sky)" }}>
          <p className="eyebrow mb-4 flex items-center justify-center gap-2">
            <Sparkle size={12} className="text-rose" /> {t.ctaEye}
          </p>
          <h2 className="display-md mb-6">
            {t.ctaA}<br />
            <span className="italic text-rose">{t.ctaB}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.ctaLead}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={path("inquiry")} className="btn-cta">{t.bStart} <ArrowUpRight size={16} /></Link>
            <WhatsAppButton lang={lang} variant="outline" />
            <Link to={path("web")} className="btn-ghost-soft">{t.bWeb} <ArrowRight size={14} /></Link>
            <Link to={path("seo")} className="btn-ghost-soft">{t.bSeo} <ArrowRight size={14} /></Link>
            <Link to={path("pricing")} className="btn-ghost-soft">
              {pick(lang, "Preise ansehen", "See pricing")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
