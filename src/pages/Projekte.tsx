import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import workspace from "@/assets/workspace.jpg";

const projects = [
  {
    year: "2026",
    name: "Atelier Norden",
    tags: ["Webdesign", "Webentwicklung", "UX/UI"],
    problem:
      "Eine etablierte Architektur-Firma in Hamburg hatte eine veraltete Website ohne Sichtbarkeit in Google.",
    solution:
      "Editorial gestaltete Website mit klarer Projekt-Architektur, technischer Webentwicklung in React und SEO Optimierung von Grund auf.",
    result: "+312% organischer Traffic in 6 Monaten. Drei Anfragen pro Woche statt drei pro Quartal.",
    image: project1,
  },
  {
    year: "2025",
    name: "Kraft & Klarheit",
    tags: ["UX/UI", "SEO", "Conversion"],
    problem: "Coaching-Plattform mit guter Reichweite, aber niedriger Conversion auf der Website.",
    solution:
      "UX-Audit, Restrukturierung der Nutzerflüsse, neues UI-System und nachhaltige SEO-Strategie für lokale Sichtbarkeit in Deutschland.",
    result: "Conversion-Rate von 1,2% auf 4,8%. Top-3 Rankings für 14 relevante Keywords.",
    image: project2,
  },
  {
    year: "2025",
    name: "Studio Linde",
    tags: ["Branding", "Webentwicklung", "Portfolio"],
    problem: "Designstudio brauchte eine Website, die ihre Arbeit nicht überschattet, sondern unterstützt.",
    solution:
      "Minimal-mutiges Webdesign, modulare Komponenten, performante Webentwicklung — und SEO, das Bestand hat.",
    result: "Eingeladen zum Awwwards-Honorable-Mention. Zwei Großkunden gewonnen über organische Suche.",
    image: project3,
  },
  {
    year: "2024",
    name: "Nordlicht Café",
    tags: ["Local SEO", "Landingpage", "Webdesign"],
    problem: "Lokales Café in Köln war auf Google Maps unsichtbar.",
    solution:
      "Local SEO Setup, schlanke Landingpage mit klarer Struktur, Schema-Markup und konsequente Keyword-Strategie.",
    result: "Platz 1 für 'Café Köln Innenstadt'. Wochenenden ausgebucht.",
    image: project4,
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

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">05 — Projekte</p>
        <h1 className="display-xl relative">
          Nur das,<br />
          <span className="italic">was </span>
          <span className="text-rose">wirklich zählt.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-6 md:col-start-3">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-muted-foreground">
              Eine Auswahl an Projekten — mit echtem Problem, echter Lösung und messbarem Ergebnis.
            </p>
          </div>
        </div>
      </section>

      {/* Vorher / Nachher feature */}
      <section className="container-editorial pb-24">
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">Vorher · Nachher</p>
            <h2 className="display-md">
              Sichtbar wird,<br />
              <span className="italic text-rose">was vorher fehlte.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-muted-foreground leading-relaxed">
              Schieb den Regler. Manche Veränderungen brauchen keine Worte.
            </p>
          </div>
        </div>
        <BeforeAfter
          beforeSrc={workspace}
          afterSrc={project1}
          beforeAlt="Website vor dem Redesign"
          afterAlt="Website nach dem Redesign"
        />
      </section>

      <section className="container-editorial pb-28 space-y-24">
        {projects.map((p, i) => (
          <article
            key={i}
            className="scene-fade grid grid-cols-12 gap-8 items-center"
          >
            <div className={`col-span-12 md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="project-card frame-soft aspect-[4/3]">
                <img src={p.image} alt={`${p.name} — Projekt von Marianna Kuzmenko`} loading="lazy" />
                <div className="project-overlay text-white">
                  <p className="font-mono text-[11px] uppercase tracking-widest opacity-80">{p.tags.join(" · ")}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-2">{p.name}</h3>
                  <p className="text-sm leading-relaxed opacity-90 mt-3">{p.solution}</p>
                </div>
              </div>
            </div>
            <div className={`col-span-12 md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                <ArrowUpRight className="text-muted-foreground" size={20} />
              </div>
              <h2 className="display-md mb-5">{p.name}</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div>
                <div className="story-step">
                  <p className="eyebrow mb-1.5 flex items-center gap-2"><AlertCircle size={12} className="text-rose" /> Problem</p>
                  <p className="leading-relaxed">{p.problem}</p>
                </div>
                <div className="story-step">
                  <p className="eyebrow mb-1.5 flex items-center gap-2"><Lightbulb size={12} className="text-rose" /> Lösung</p>
                  <p className="leading-relaxed">{p.solution}</p>
                </div>
                <div className="story-step">
                  <p className="eyebrow mb-1.5 flex items-center gap-2"><TrendingUp size={12} className="text-rose" /> Ergebnis</p>
                  <p className="leading-relaxed text-rose font-display text-xl">{p.result}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-editorial pb-28">
        <div className="card-soft p-10 md:p-16 text-center" style={{ background: "var(--gradient-sky)" }}>
          <h2 className="display-md mb-6">
            Interessiert an einem<br />
            <span className="italic text-rose">ähnlichen Projekt?</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/webentwicklung" className="btn-ghost-soft">Web Development <ArrowRight size={14} /></Link>
            <Link to="/seo" className="btn-ghost-soft">SEO Optimierung <ArrowRight size={14} /></Link>
            <a href="/#kontakt" className="btn-pink">ok, ich schaue es mir an →</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
