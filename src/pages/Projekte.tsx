import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { ProjectImage } from "@/components/site/ProjectImage";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { projects, Project } from "@/data/projects";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";
import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectVisual = ({ project, eager = false }: { project: Project; eager?: boolean }) => (
  <div className={`portfolio-visual portfolio-visual-${project.imageSize ?? "medium"}`}>
    <ProjectImage
      project={project}
      loading={eager ? "eager" : "lazy"}
      className="w-full h-full"
      imgClassName="transition-transform duration-700 group-hover:scale-[1.015]"
    />
  </div>
);

const ProjectInfo = ({ project, number, caseHref, lang }: {
  project: Project; number: number; caseHref: string; lang: "de" | "en";
}) => {
  const content = pick(lang, project.de, project.en);
  return (
    <div className="portfolio-copy">
      <p className="case-meta mb-3">{String(number).padStart(2, "0")} — {project.category}</p>
      <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.05] mb-4 break-words">{project.name}</h2>
      <p className="font-display italic text-lg md:text-xl leading-snug text-foreground/90 mb-3">{content.intro}</p>
      <p className="text-[0.95rem] text-muted-foreground leading-relaxed mb-6 max-w-[46ch]">{pick(lang, project.description.de, project.description.en)}</p>
      <div className="flex flex-wrap gap-3">
        <Link to={caseHref} className="btn-cta">
          {pick(lang, "Projekt entdecken", "Discover project")} <ArrowRight size={15} />
        </Link>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-soft">
            {pick(lang, "Website besuchen", "Visit website")} <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

const Projekte = () => {
  const { lang, path } = useLang();
  const caseBase = lang === "en" ? "/en/projects/" : "/projekte/";
  const heroProject = projects.find((project) => project.slug === "lush-bloom") ?? projects[0];

  const t = pick(lang, {
    seoTitle: "Webdesign Projekte & Case Studies | Marianna Kuzmenko",
    seoDesc: "Ausgewählte Webdesign-, UX/UI- und SEO-Projekte von Marianna Kuzmenko. Individuelle Websites für Unternehmen und Marken.",
    eyebrow: "Selected Work",
    headingA: "Websites, die Unternehmen",
    headingB: "sichtbar machen.",
    lead: "Eine Auswahl meiner Projekte — von strategischem Webdesign und UX/UI bis zur technischen Umsetzung und SEO.",
    explore: "Meine Projekte entdecken",
    introTitle: "Aus Ideen werden digitale Erlebnisse.",
    intro: "Jedes Projekt beginnt mit einer individuellen Idee. Ich verbinde Strategie, Design, Nutzererfahrung, Entwicklung und SEO, um Websites zu entwickeln, die nicht nur gut aussehen, sondern Unternehmen sichtbar machen.",
    ctaEye: "Ihr Projekt · Ihr nächstes Kapitel",
    ctaTitle: "Bereit für einen Auftritt, der im Gedächtnis bleibt?",
    ctaText: "Erzählen Sie mir von Ihrem Unternehmen und Ihren Zielen. Gemeinsam entwickeln wir eine Website, die zu Ihnen passt und für Sie arbeitet.",
    cta: "Projekt anfragen",
  }, {
    seoTitle: "Web Design Projects & Case Studies | Marianna Kuzmenko",
    seoDesc: "Selected web design, UX/UI and SEO projects by Marianna Kuzmenko. Individually crafted websites for businesses and brands.",
    eyebrow: "Selected Work",
    headingA: "Websites designed to make",
    headingB: "businesses stand out.",
    lead: "A selection of projects — from strategic web design and UX/UI to development and SEO.",
    explore: "Explore my projects",
    introTitle: "Ideas become digital experiences.",
    intro: "Every project begins with an individual idea. I combine strategy, design, user experience, development and SEO to create websites that look exceptional and make businesses visible.",
    ctaEye: "Your project · Your next chapter",
    ctaTitle: "Ready for a presence people remember?",
    ctaText: "Tell me about your business and goals. Together, we'll create a website that fits you and works for you.",
    cta: "Start a project",
  });

  return (
    <Layout>
      <Seo title={t.seoTitle} description={t.seoDesc} path={path("work")} pathDe={ROUTES.work.de} pathEn={ROUTES.work.en} />

      <section className="portfolio-hero container-editorial">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow text-rose mb-5">{t.eyebrow}</p>
            <h1 className="portfolio-title mb-6">
              {t.headingA}<br /><em>{t.headingB}</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-[52ch] mb-8">{t.lead}</p>
            <a href="#selected-projects" className="btn-cta">{t.explore} <ArrowDown size={16} /></a>
          </div>
          <div className="lg:col-span-7 group">
            <div className="portfolio-hero-visual">
              <ProjectImage project={heroProject} loading="eager" className="w-full h-full" />
              <div className="portfolio-hero-caption">
                <span>{heroProject.name}</span><span>{heroProject.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial py-12 md:py-16">
        <div className="portfolio-intro">
          <p className="case-meta">01 — Approach</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">{t.introTitle}</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">{t.intro}</p>
        </div>
      </section>

      <section id="selected-projects" className="container-editorial pb-20 md:pb-28 scroll-mt-28">
        <div className="portfolio-list">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <article key={project.slug} className="portfolio-project group">
                <div className={`portfolio-project-grid ${reverse ? "portfolio-project-reverse" : ""}`}>
                  <ProjectVisual project={project} eager={index === 0} />
                  <ProjectInfo project={project} number={index + 1} caseHref={`${caseBase}${project.slug}`} lang={lang} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-28">
        <div className="portfolio-final-cta">
          <p className="eyebrow text-rose mb-4">{t.ctaEye}</p>
          <h2 className="font-display text-4xl md:text-6xl leading-none max-w-3xl mx-auto mb-6">{t.ctaTitle}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={path("briefing")} className="btn-cta">{t.cta} <ArrowUpRight size={16} /></Link>
            <WhatsAppButton lang={lang} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;