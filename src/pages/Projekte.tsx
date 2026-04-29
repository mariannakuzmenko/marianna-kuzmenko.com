import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "2026",
    name: "Atelier Norden",
    tags: ["Webdesign", "Webentwicklung", "UX/UI"],
    problem: "Eine etablierte Architektur-Firma in Hamburg hatte eine veraltete Website ohne Sichtbarkeit in Google.",
    solution: "Editorial gestaltete Website mit klarer Projekt-Architektur, technischer Webentwicklung in React und SEO Optimierung von Grund auf.",
    result: "+312% organischer Traffic in 6 Monaten. Drei Anfragen pro Woche statt drei pro Quartal.",
  },
  {
    year: "2025",
    name: "Kraft & Klarheit",
    tags: ["UX/UI", "SEO Optimierung", "Conversion"],
    problem: "Coaching-Plattform mit guter Reichweite, aber niedriger Conversion auf der Website.",
    solution: "UX-Audit, Restrukturierung der Nutzerflüsse, neues UI-System und nachhaltige SEO-Strategie für lokale Sichtbarkeit in Deutschland.",
    result: "Conversion-Rate von 1,2% auf 4,8%. Top-3 Rankings für 14 relevante Keywords.",
  },
  {
    year: "2025",
    name: "Studio Linde",
    tags: ["Branding", "Webentwicklung", "Portfolio"],
    problem: "Designstudio brauchte eine Website, die ihre Arbeit nicht überschattet, sondern unterstützt.",
    solution: "Minimal-mutiges Webdesign, modulare Komponenten, performante Webentwicklung — und SEO, das Bestand hat.",
    result: "Eingeladen zum Awwwards-Honorable-Mention. Zwei Großkunden gewonnen über organische Suche.",
  },
  {
    year: "2024",
    name: "Nordlicht Café",
    tags: ["Local SEO", "Landingpage", "Webdesign"],
    problem: "Lokales Café in Köln war auf Google Maps unsichtbar.",
    solution: "Local SEO Setup, schlanke Landingpage mit klarer Struktur, Schema-Markup und konsequente Keyword-Strategie.",
    result: "Platz 1 für 'Café Köln Innenstadt'. Wochenenden ausgebucht.",
  },
];

const Projekte = () => {
  return (
    <Layout>
      <Seo
        title="Projekte — Webdesign, UX/UI & SEO Cases · Marianna Kuzmenko"
        description="Ausgewählte Projekte aus Webdesign, Webentwicklung und SEO Optimierung. Echte Cases mit Problem, Lösung und messbarem Ergebnis."
        path="/projekte"
      />

      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8">05 — Projekte</p>
        <h1 className="display-xl">
          Projekte<span className="text-accent">.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-16">
          <div className="col-span-12 md:col-span-6 md:col-start-3">
            <p className="text-xl md:text-2xl font-display leading-relaxed">
              <span className="italic text-muted-foreground">Nicht alles.</span> Nur das, was <span className="marker">wirklich zählt.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-32 space-y-px bg-foreground/15 border-y border-foreground/15">
        {projects.map((p, i) => (
          <article
            key={i}
            className="reveal bg-background p-8 md:p-14 group cursor-default hover:bg-foreground hover:text-background transition-colors duration-700"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-5">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{p.year}</span>
                  <ArrowUpRight className="transition-transform group-hover:rotate-45 duration-500 group-hover:text-accent" size={28} />
                </div>
                <h2 className="display-md mb-6">{p.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-xs uppercase tracking-widest border border-current/30 px-3 py-1.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 space-y-6">
                <div>
                  <p className="eyebrow mb-2 group-hover:text-background/60">Problem</p>
                  <p className="text-lg leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2 group-hover:text-background/60">Lösung</p>
                  <p className="text-lg leading-relaxed">{p.solution}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2 group-hover:text-background/60">Ergebnis</p>
                  <p className="text-lg leading-relaxed text-accent font-display">{p.result}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Projekte;
