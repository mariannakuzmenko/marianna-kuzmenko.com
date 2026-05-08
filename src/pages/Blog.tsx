import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/posts";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const Blog = () => {
  const { lang, path } = useLang();
  const t = pick(lang,
    {
      seoTitle: "Blog — Webdesign, SEO & UX · Marianna Kuzmenko",
      seoDesc: "Gedanken zu Webdesign, SEO Optimierung und UX/UI. Praxisnahe Artikel für Selbstständige und kleine Unternehmen in Deutschland.",
      eye: "06 — Blog",
      h1A: "Gedanken,",
      h1B: "die ich",
      h1Accent: "teilen",
      h1C: "wollte",
      lead: "Webdesign, SEO und UX — kurz, ehrlich, ohne Marketing-Geschwafel. Für alle, die Websites bauen oder bauen lassen.",
      cta: "Ein kleiner Einblick",
    },
    {
      seoTitle: "Journal — Web Design, SEO & UX · Marianna Kuzmenko",
      seoDesc: "Notes on web design, SEO and UX. Practical articles for independents and small businesses, in Europe and beyond.",
      eye: "06 — Journal",
      h1A: "Notes",
      h1B: "I wanted",
      h1Accent: "to share",
      h1C: "",
      lead: "Web design, SEO and UX — short, honest, without marketing fog. For anyone building (or commissioning) a website.",
      cta: "Read more",
    }
  );

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("blog")}
        pathDe={ROUTES.blog.de}
        pathEn={ROUTES.blog.en}
      />

      <section className="container-editorial pt-16 md:pt-24 pb-12 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 380, height: 380, top: "-60px", right: "-100px" }} />
        <p className="eyebrow mb-6 relative">{t.eye}</p>
        <h1 className="display-xl relative">
          {t.h1A}<br />
          <span className="italic">{t.h1B}</span> <span className="text-rose">{t.h1Accent}</span> {t.h1C}<span className="text-rose">.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-6 md:col-start-3">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">{t.lead}</p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to={`${lang === "en" ? "/en/blog" : "/blog"}/${p.slug}`}
              className="reveal card-soft group block"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="frame-soft aspect-[16/10] mb-6 -mx-2 -mt-2">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="chip-pink">{p.category}</span>
                <span className="text-xs text-muted-foreground font-mono">{p.date} · {p.readTime}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-rose transition-colors duration-500">
                {p.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-mono uppercase tracking-widest">
                {t.cta}
                <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45 duration-500" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
