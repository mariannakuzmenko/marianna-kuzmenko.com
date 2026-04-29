import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/posts";

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="Blog — Webdesign, SEO & UX · Marianna Kuzmenko"
        description="Gedanken zu Webdesign, SEO Optimierung und UX/UI. Praxisnahe Artikel für Selbstständige und kleine Unternehmen in Deutschland."
        path="/blog"
      />

      <section className="container-editorial pt-16 md:pt-24 pb-12 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 380, height: 380, top: "-60px", right: "-100px" }} />
        <p className="eyebrow mb-6 relative">06 — Blog</p>
        <h1 className="display-xl relative">
          Gedanken,<br />
          <span className="italic">die ich</span> <span className="text-rose">teilen</span> wollte<span className="text-rose">.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-6 md:col-start-3">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Webdesign, SEO und UX — kurz, ehrlich, ohne Marketing-Geschwafel. Für alle, die Websites bauen oder bauen lassen.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
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
                Ein kleiner Einblick
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
