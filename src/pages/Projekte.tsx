import { useMemo, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ExternalLink, Search, Sparkles } from "lucide-react";
import { projects, Project } from "@/data/projects";
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
    <img
      src={p.image}
      alt={`${p.name} — ${p.category}`}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
      <p className="text-lg md:text-xl font-display italic leading-snug mb-6 opacity-90">
        {content.intro}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {content.overview}
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
        {p.liveUrl ? (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="glow-btn">
            {t.visit} <ExternalLink size={14} />
          </a>
        ) : (
          <span className="glow-btn opacity-60 cursor-not-allowed" aria-disabled>
            {t.visit} <ExternalLink size={14} />
          </span>
        )}
        <Link to={caseHref} className="btn-ghost-soft">
          {t.discover} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );

  return (
    <article className={`showcase-scene mood-${p.mood} scene-fade group`}>
      <span className="floating-tag" style={{ top: 20, left: 20 }}>
        {String(index + 1).padStart(2, "0")} · {p.year}
      </span>
      <span className="floating-tag hidden md:inline-flex" style={{ top: 20, right: 20 }}>
        {p.category}
      </span>

      {isFull ? (
        <div className="mt-14 space-y-10">
          <Mockup p={p} className="tilt-right" />
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 md:col-start-3">{Info}</div>
          </div>
        </div>
      ) : isSplit ? (
        <div className="mt-14 grid grid-cols-12 gap-8 md:gap-10 items-stretch">
          <div className="col-span-12 md:col-span-5"><Mockup p={p} className="tilt-left h-full" /></div>
          <div className="col-span-12 md:col-span-7 flex items-center">{Info}</div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center mt-12 md:mt-8">
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
  const [query, setQuery] = useState("");
  const filters = lang === "en" ? FILTERS_EN : FILTERS_DE;
  const allLabel = filters[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const passFilter =
        filter === allLabel ||
        p.serviceTags.includes(filter) ||
        p.categoryTags.includes(filter);
      const passQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.serviceTags.some((t) => t.toLowerCase().includes(q)) ||
        p.categoryTags.some((t) => t.toLowerCase().includes(q));
      return passFilter && passQuery;
    });
  }, [filter, query, allLabel]);

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
                <img src={projects[2].image} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="showcase-mockup rounded-2xl overflow-hidden tilt-right mt-8">
                <img src={projects[4].image} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="container-editorial pb-8 sticky top-16 md:top-20 xl:top-24 z-20 bg-background/80 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
          <div className="relative md:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPh}
              className="w-full h-11 pl-11 pr-4 rounded-full border border-border bg-card/80 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
            />
          </div>
          <div className="flex-1 overflow-x-auto scrollbar-none">
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
                p={p} index={i}
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
            <Sparkles size={12} /> {t.ctaEye}
          </p>
          <h2 className="display-md mb-6">
            {t.ctaA}<br />
            <span className="italic text-rose">{t.ctaB}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.ctaLead}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={path("web")} className="btn-ghost-soft">{t.bWeb} <ArrowRight size={14} /></Link>
            <Link to={path("seo")} className="btn-ghost-soft">{t.bSeo} <ArrowRight size={14} /></Link>
            <Link to={path("inquiry")} className="glow-btn">{t.bStart} <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
