import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    n: "01",
    title: "Website erstellen lassen — worauf achten",
    excerpt: "Welche Fragen du stellen solltest, bevor du einen Freelancer Webdesigner beauftragst. Was wichtig ist und was nur Marketing.",
    date: "April 2026",
    readTime: "6 min",
  },
  {
    n: "02",
    title: "SEO Grundlagen für Unternehmen",
    excerpt: "Die SEO Optimierung, die wirklich zählt — keine Tricks, sondern Fundament. Für Selbstständige und kleine Unternehmen in Deutschland.",
    date: "März 2026",
    readTime: "8 min",
  },
  {
    n: "03",
    title: "UX Design einfach erklärt",
    excerpt: "UX/UI Design ist nicht Pixel-Schubsen. Wie gute Nutzerführung Conversions verändert — mit Beispielen aus echten Projekten.",
    date: "Februar 2026",
    readTime: "5 min",
  },
  {
    n: "04",
    title: "Fehler bei Websites",
    excerpt: "Die häufigsten Fehler auf modernen Websites — und warum sie SEO und Conversion gleichzeitig kaputtmachen.",
    date: "Januar 2026",
    readTime: "7 min",
  },
];

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="Blog — Webdesign, SEO & UX · Marianna Kuzmenko"
        description="Gedanken zu Webdesign, SEO Optimierung und UX/UI. Praxisnahe Artikel für Selbstständige und kleine Unternehmen in Deutschland."
        path="/blog"
      />

      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8">06 — Blog</p>
        <h1 className="display-xl">
          Blog <span className="italic">— Webdesign,</span><br />
          <span className="text-accent">SEO &amp; UX.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-16">
          <div className="col-span-12 md:col-span-6 md:col-start-3">
            <p className="text-xl md:text-2xl font-display leading-relaxed italic text-muted-foreground">
              Gedanken, die ich teilen wollte.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-32">
        <ul className="border-t border-foreground/15">
          {posts.map((p, i) => (
            <li
              key={i}
              className="reveal border-b border-foreground/15 group cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <a href="#" className="block py-10 md:py-12 hover:bg-foreground hover:text-background transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{p.n}</span>
                  </div>
                  <div className="col-span-10 md:col-span-7">
                    <h2 className="font-display text-3xl md:text-5xl group-hover:text-accent transition-colors duration-500 mb-4">
                      {p.title}
                    </h2>
                    <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed max-w-2xl">
                      {p.excerpt}
                    </p>
                  </div>
                  <div className="col-span-10 col-start-3 md:col-span-3 md:col-start-9 flex md:flex-col md:items-end gap-4 md:gap-2 mt-4 md:mt-0">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/60">
                      {p.date}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/60">
                      {p.readTime}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-1 hidden md:flex justify-end">
                    <ArrowUpRight className="transition-transform group-hover:rotate-45 duration-500 group-hover:text-accent" size={28} />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Blog;
