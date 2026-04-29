import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { getPost, getRelated } from "@/data/posts";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelated(post.related);

  return (
    <Layout>
      <Seo
        title={`${post.title} — Marianna Kuzmenko`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <article className="container-editorial pt-12 md:pt-16 pb-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-rose transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Zurück zum Blog
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
                return <h2 key={i} className="font-display text-3xl md:text-4xl mt-12 mb-2">{block.text}</h2>;
              if (block.type === "quote")
                return (
                  <blockquote key={i} className="my-10 pl-6 border-l-2 border-rose">
                    <p className="font-display italic text-2xl md:text-3xl leading-snug">{block.text}</p>
                  </blockquote>
                );
              if (block.type === "list")
                return (
                  <ul key={i} className="space-y-2 list-none">
                    {block.items?.map((it, j) => (
                      <li key={j} className="flex gap-3 text-lg leading-relaxed">
                        <span className="text-rose mt-1">→</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              return <p key={i} className="text-lg leading-relaxed text-foreground/85">{block.text}</p>;
            })}

            {post.serviceLink && (
              <div className="mt-16 card-soft bg-secondary">
                <p className="eyebrow mb-3">Passend dazu</p>
                <h3 className="font-display text-2xl md:text-3xl mb-4">
                  Brauchst du Hilfe damit?
                </h3>
                <Link to={post.serviceLink.to} className="btn-pink mt-2">
                  {post.serviceLink.label} ansehen →
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-editorial py-24">
          <p className="eyebrow mb-4">Ähnliche Artikel</p>
          <h2 className="display-md mb-12">Weiterlesen<span className="text-rose">.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
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
                  Lesen <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45 duration-500" />
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
