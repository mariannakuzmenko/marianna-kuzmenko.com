import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink,
  Target, Search, Palette, Code2, LineChart, Smartphone,
  Quote, X, Sparkles,
} from "lucide-react";
import { getProject, getRelated, getNeighbors, projects } from "@/data/projects";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const { lang, path } = useLang();
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!project) {
    return <Navigate to={lang === "en" ? "/en/projects" : "/projekte"} replace />;
  }

  const c = pick(lang, project.de, project.en);
  const related = getRelated(project.slug, 3);
  const { prev, next } = getNeighbors(project.slug);
  const workBase = lang === "en" ? "/en/projects" : "/projekte";
  const caseBase = `${workBase}/`;

  const t = pick(lang,
    {
      back: "Alle Projekte",
      prevLabel: "Vorheriges Projekt", nextLabel: "Nächstes Projekt",
      visit: "Website besuchen", discover: "Projekt entdecken",
      sec: {
        overview: "Projekt-Überblick", client: "Über den Kunden", goals: "Business-Ziele",
        challenge: "Challenge", research: "Research", ux: "UX-Strategie",
        ui: "UI Design", dev: "Entwicklung", seo: "SEO Optimierung",
        responsive: "Responsive Design", tech: "Verwendete Technologien",
        result: "Ergebnis", gallery: "Projekt-Galerie", feedback: "Kunden-Feedback",
        related: "Das könnte dir auch gefallen", nav: "Weiter durchs Portfolio",
      },
      ctaEye: "Bereit für den nächsten Schritt?",
      ctaTitle: "Bereit für eine Website wie diese?",
      ctaLead: "Erzähl mir von deinem Vorhaben. In einem entspannten Gespräch klären wir Ziele, Zeitrahmen und den passenden Weg — unverbindlich.",
      ctaPrimary: "Kostenloses Erstgespräch",
      ctaSecondary: "Kontakt aufnehmen",
    },
    {
      back: "All projects",
      prevLabel: "Previous project", nextLabel: "Next project",
      visit: "Visit website", discover: "Discover project",
      sec: {
        overview: "Project overview", client: "About the client", goals: "Business goals",
        challenge: "Challenge", research: "Research", ux: "UX strategy",
        ui: "UI design", dev: "Development", seo: "SEO optimization",
        responsive: "Responsive design", tech: "Technologies used",
        result: "Final result", gallery: "Project gallery", feedback: "Client feedback",
        related: "You may also like", nav: "Keep exploring",
      },
      ctaEye: "Ready for the next step?",
      ctaTitle: "Ready for a website like this?",
      ctaLead: "Tell me about your project. In a relaxed conversation we'll map out goals, timeline and the right path forward — no strings attached.",
      ctaPrimary: "Book a free consultation",
      ctaSecondary: "Contact me",
    }
  );

  return (
    <Layout>
      <Seo
        title={`${project.name} — ${project.category} · Marianna Kuzmenko`}
        description={c.intro}
        path={`${workBase}/${project.slug}`}
        pathDe={`${ROUTES.work.de}/${project.slug}`}
        pathEn={`${ROUTES.work.en}/${project.slug}`}
      />

      {/* HERO */}
      <section className={`container-editorial pt-10 md:pt-14 pb-10 relative mood-${project.mood}`}>
        <div className="blob blob-pink animate-float-slow" style={{ width: 380, height: 380, top: "-100px", right: "-60px" }} />
        <Link to={workBase} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> {t.back}
        </Link>
        <p className="case-meta mb-3">{project.year} · {project.category}</p>
        <h1 className="display-xl leading-[0.95]">{project.name}</h1>
        <p className="text-xl md:text-2xl font-display italic mt-6 max-w-3xl opacity-90">{c.intro}</p>

        <div className="mt-12 showcase-mockup rounded-[2rem] overflow-hidden">
          <img src={project.image} alt={project.name} className="w-full h-auto" />
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="glow-btn">
              {t.visit} <ExternalLink size={14} />
            </a>
          ) : (
            <span className="glow-btn opacity-60 cursor-not-allowed" aria-disabled>{t.visit} <ExternalLink size={14} /></span>
          )}
          <Link to={path("inquiry")} className="btn-ghost-soft">{t.ctaPrimary} <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="container-editorial pb-20 space-y-16 max-w-5xl">
        <Chapter icon={<Target size={16} />} label={t.sec.overview}>{c.overview}</Chapter>
        <Chapter icon={<Sparkles size={16} />} label={t.sec.client}>{c.client}</Chapter>

        <div>
          <SectionLabel icon={<Target size={16} />}>{t.sec.goals}</SectionLabel>
          <ul className="grid md:grid-cols-3 gap-4 mt-6">
            {c.goals.map((g, i) => (
              <li key={i} className="card-soft p-6">
                <p className="case-step-label mb-2">0{i + 1}</p>
                <p className="text-foreground/90 leading-relaxed">{g}</p>
              </li>
            ))}
          </ul>
        </div>

        <Chapter icon={<Sparkles size={16} />} label={t.sec.challenge}>{c.challenge}</Chapter>
        <Chapter icon={<Search size={16} />} label={t.sec.research}>{c.research}</Chapter>
        <Chapter icon={<Target size={16} />} label={t.sec.ux}>{c.ux}</Chapter>
        <Chapter icon={<Palette size={16} />} label={t.sec.ui}>{c.ui}</Chapter>
        <Chapter icon={<Code2 size={16} />} label={t.sec.dev}>{c.development}</Chapter>
        <Chapter icon={<LineChart size={16} />} label={t.sec.seo}>{c.seo}</Chapter>
        <Chapter icon={<Smartphone size={16} />} label={t.sec.responsive}>{c.responsive}</Chapter>

        <div>
          <SectionLabel icon={<Code2 size={16} />}>{t.sec.tech}</SectionLabel>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-border bg-card/60 text-sm">{tech}</span>
            ))}
          </div>
        </div>

        <div className="card-soft p-8 md:p-12" style={{ background: "var(--gradient-sky)" }}>
          <SectionLabel icon={<Sparkles size={16} />}>{t.sec.result}</SectionLabel>
          <p className="text-xl md:text-2xl font-display leading-snug mt-5">{c.result}</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-editorial pb-20">
        <SectionLabel icon={<Palette size={16} />}>{t.sec.gallery}</SectionLabel>
        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-6">
          {project.gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className={`showcase-mockup rounded-2xl overflow-hidden group ${
                i % 3 === 0 ? "col-span-12" : "col-span-6"
              }`}
            >
              <img
                src={src} alt={`${project.name} ${i + 1}`} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="container-editorial pb-24">
        <div className="card-soft p-10 md:p-14 relative">
          <Quote size={40} className="text-rose opacity-40 absolute top-6 left-6" />
          <p className="text-2xl md:text-3xl font-display italic leading-snug pl-14">"{c.feedback.quote}"</p>
          <p className="text-sm text-muted-foreground mt-6 pl-14">— {c.feedback.author}</p>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="container-editorial pb-20">
          <SectionLabel icon={<Sparkles size={16} />}>{t.sec.related}</SectionLabel>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {related.map((r) => {
              const rc = pick(lang, r.de, r.en);
              return (
                <Link to={`${caseBase}${r.slug}`} key={r.slug} className={`card-soft overflow-hidden group mood-${r.mood} block`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="case-meta mb-1">{r.category}</p>
                    <h3 className="font-display text-xl mb-2">{r.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{rc.intro}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium">
                      {t.discover} <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* PROJECT NAV */}
      <section className="container-editorial pb-20">
        <div className="border-t border-border pt-10 grid grid-cols-3 gap-4 items-center">
          {prev ? (
            <Link to={`${caseBase}${prev.slug}`} className="flex items-center gap-3 text-left group">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="block text-xs text-muted-foreground">{t.prevLabel}</span>
                <span className="font-display">{prev.name}</span>
              </span>
            </Link>
          ) : <span />}
          <Link to={workBase} className="text-center text-sm underline-offset-4 hover:underline">{t.back}</Link>
          {next ? (
            <Link to={`${caseBase}${next.slug}`} className="flex items-center gap-3 justify-end text-right group">
              <span>
                <span className="block text-xs text-muted-foreground">{t.nextLabel}</span>
                <span className="font-display">{next.name}</span>
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ) : <span />}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial pb-28">
        <div className="card-soft p-10 md:p-16 text-center" style={{ background: "var(--gradient-sky)" }}>
          <p className="eyebrow mb-4">{t.ctaEye}</p>
          <h2 className="display-md mb-6">{t.ctaTitle}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.ctaLead}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={path("inquiry")} className="glow-btn">{t.ctaPrimary} <ArrowUpRight size={16} /></Link>
            <Link to={path("contact")} className="btn-ghost-soft">{t.ctaSecondary} <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border hover:bg-muted transition" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={18} />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </Layout>
  );
};

const SectionLabel = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <p className="case-step-label flex items-center gap-2">{icon}{children}</p>
);

const Chapter = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div>
    <SectionLabel icon={icon}>{label}</SectionLabel>
    <p className="text-lg leading-relaxed mt-4 text-foreground/85">{children}</p>
  </div>
);

export default CaseStudy;
