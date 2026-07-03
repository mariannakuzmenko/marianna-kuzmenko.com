import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { getPost, getRelated, posts } from "@/data/posts";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, ArrowRight } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  const { lang, path } = useLang();

  const blogBase = lang === "en" ? "/en/blog" : "/blog";

  if (!post) return <Navigate to={blogBase} replace />;

  const related = getRelated(post.related);

  const ui = pick(lang,
    { back: "Zurück zum Blog", relatedTo: "Passend dazu", helpQ: "Brauchst du Hilfe damit?", view: "ansehen", prev: "Vorheriger Artikel", next: "Nächster Artikel", relatedH: "Weiterlesen", relatedEye: "Ähnliche Artikel", read: "Lesen", authorEye: "Über die Autorin", authorRole: "Webdesignerin · Webentwicklerin · SEO Freelancerin", authorBio: "Ich gestalte, entwickle und optimiere Websites für Selbstständige und kleine Unternehmen in Nürnberg, Bayern und ganz DACH — persönlich, strukturiert, langfristig.", authorLink: "Mehr über mich", ctaEye: "Nächster Schritt", ctaTitle: "Bereit für deine Website?", ctaLead: "Erzähl mir kurz von deinem Projekt — ich melde mich innerhalb von 48 Stunden.", ctaBtn: "Projekt anfragen" },
    { back: "Back to journal", relatedTo: "Related", helpQ: "Need help with this?", view: "view", prev: "Previous article", next: "Next article", relatedH: "Keep reading", relatedEye: "Related articles", read: "Read", authorEye: "About the author", authorRole: "Web Designer · Web Developer · SEO Freelancer", authorBio: "I design, build and optimize websites for independents and small businesses in Nuremberg, Bavaria and across DACH — personal, structured, long-term.", authorLink: "More about me", ctaEye: "Next step", ctaTitle: "Ready for your website?", ctaLead: "Tell me briefly about your project — I reply within 48 hours.", ctaBtn: "Start inquiry" },
  );

  const canonical = `${blogBase}/${post.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: `https://mariannakuzmenko.de${post.image}`,
      datePublished: post.date,
      inLanguage: lang === "en" ? "en" : "de",
      author: { "@type": "Person", "@id": "https://mariannakuzmenko.de/#person", name: "Marianna Kuzmenko" },
      publisher: { "@id": "https://mariannakuzmenko.de/#person" },
      mainEntityOfPage: `https://mariannakuzmenko.de${canonical}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: lang === "en" ? "Home" : "Startseite", item: `https://mariannakuzmenko.de${lang === "en" ? "/en" : "/"}` },
        { "@type": "ListItem", position: 2, name: lang === "en" ? "Journal" : "Blog", item: `https://mariannakuzmenko.de${blogBase}` },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://mariannakuzmenko.de${canonical}` },
      ],
    },
  ];

  return (
    <Layout>
      <Seo
        title={`${post.title} — Marianna Kuzmenko`}
        description={post.excerpt}
        path={canonical}
        pathDe={`/blog/${post.slug}`}
        pathEn={`/en/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      <article className="container-editorial pt-12 md:pt-16 pb-20">
        <Link
          to={blogBase}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-rose transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          {ui.back}
        </Link>

        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="chip-pink">{post.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Calendar size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h1 className="display-lg mb-12">{post.title}</h1>
        </div>

        <div className="frame-soft aspect-[16/9] mb-16 max-w-5xl">
          <img src={post.image} alt={post.imageAlt} loading="eager" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-3 space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "h2")
                return <h2 key={i} className="font-display text-3xl md:text-4xl mt-14 mb-3">{block.text}</h2>;
              if (block.type === "h3")
                return <h3 key={i} className="font-display text-2xl mt-10 mb-2 text-foreground/90">{block.text}</h3>;
              if (block.type === "quote")
                return (
                  <blockquote key={i} className="my-12 pl-6 border-l-2 border-rose">
                    <p className="font-display italic text-2xl md:text-3xl leading-snug">{block.text}</p>
                  </blockquote>
                );
              if (block.type === "list")
                return (
                  <ul key={i} className="space-y-2 list-none my-4">
                    {block.items?.map((it, j) => (
                      <li key={j} className="flex gap-3 text-lg leading-relaxed">
                        <span className="text-rose mt-1">→</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              if (block.type === "link" && block.to) {
                const to = lang === "en" && block.to.startsWith("/blog/")
                  ? `/en${block.to}`
                  : block.to;
                return (
                  <Link key={i} to={to} className="my-6 inline-flex items-center gap-2 text-rose-hover hover:text-rose underline-draw font-medium">
                    {block.label}
                  </Link>
                );
              }
              return <p key={i} className="text-lg leading-relaxed text-foreground/85">{block.text}</p>;
            })}

            {post.serviceLink && (
              <div className="mt-16 card-soft bg-secondary">
                <p className="eyebrow mb-3">{ui.relatedTo}</p>
                <h3 className="font-display text-2xl md:text-3xl mb-4">{ui.helpQ}</h3>
                <Link
                  to={post.serviceLink.to === "/webentwicklung" ? path("web") : post.serviceLink.to === "/seo" ? path("seo") : post.serviceLink.to}
                  className="btn-pink mt-2"
                >
                  {post.serviceLink.label} {ui.view} →
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>

      {(() => {
        const idx = posts.findIndex((p) => p.slug === post.slug);
        const prev = idx > 0 ? posts[idx - 1] : null;
        const next = idx < posts.length - 1 ? posts[idx + 1] : null;
        return (
          <section className="container-editorial pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prev ? (
                <Link to={`${blogBase}/${prev.slug}`} className="card-soft group">
                  <p className="eyebrow mb-2 flex items-center gap-2"><ArrowLeft size={12} /> {ui.prev}</p>
                  <p className="font-display text-xl md:text-2xl group-hover:text-rose transition-colors">{prev.title}</p>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`${blogBase}/${next.slug}`} className="card-soft group md:text-right">
                  <p className="eyebrow mb-2 flex items-center gap-2 md:justify-end">{ui.next} <ArrowRight size={12} /></p>
                  <p className="font-display text-xl md:text-2xl group-hover:text-rose transition-colors">{next.title}</p>
                </Link>
              ) : <div />}
            </div>
          </section>
        );
      })()}

      {related.length > 0 && (
        <section className="container-editorial py-24">
          <p className="eyebrow mb-4">{ui.relatedEye}</p>
          <h2 className="display-md mb-12">{ui.relatedH}<span className="text-rose">.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((p, i) => (
              <Link
                key={p.slug}
                to={`${blogBase}/${p.slug}`}
                className="reveal group card-soft block"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="frame-soft aspect-[16/10] mb-6 -mx-2 -mt-2">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="chip-pink">{p.category}</span>
                  <span className="text-xs text-muted-foreground font-mono">{p.readTime}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-rose transition-colors">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-mono uppercase tracking-widest">
                  {ui.read} <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45 duration-500" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
