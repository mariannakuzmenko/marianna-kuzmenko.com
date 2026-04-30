import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Marquee } from "@/components/site/Marquee";
import { IconCard } from "@/components/site/IconCard";
import { FloatingNote } from "@/components/site/FloatingNote";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactSection } from "@/components/site/ContactSection";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Palette,
  Layers,
  Code2,
  Search,
  ArrowRight,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Webdesigner & Webentwicklung in Deutschland — Marianna Kuzmenko"
        description="Moderne Websites, UX/UI Design und SEO Optimierung in Deutschland. Webdesigner & SEO Freelancer mit klarer Strategie statt Templates."
        path="/"
      />

      {/* HERO */}
      <section className="container-editorial pt-12 md:pt-20 pb-20 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 460, height: 460, top: "-100px", right: "-120px" }} />
        <div className="blob blob-blue animate-float-slower" style={{ width: 380, height: 380, top: "200px", left: "-150px" }} />

        <div className="grid grid-cols-12 gap-6 items-end relative">
          <div className="col-span-12 md:col-span-8">
            <div className="chip mb-8">
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              Verfügbar für neue Projekte · Q3 2026
            </div>
            <h1 className="display-xl">
              Webdesign,<br />
              <span className="italic font-light">das sich</span><br />
              <span className="text-rose marker">leise </span>
              <span className="italic">behauptet.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 hidden md:block">
            <div className="frame-soft aspect-[3/4] max-w-[280px] ml-auto">
              <img src={portrait} alt="Marianna Kuzmenko, Webdesignerin in Deutschland" loading="eager" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-20 relative">
          <div className="col-span-12 md:col-span-6">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
              Ich bin <span className="marker-blue">Webdesignerin und Entwicklerin</span> in Deutschland. Ich baue moderne Websites mit klarer Struktur, ruhigem Design und nachhaltiger SEO Optimierung — für Menschen, die mehr wollen als ein Template.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <FloatingNote rotate={-4}>
              „Schön ist gut. <br />Verständlich ist besser."
            </FloatingNote>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4 relative">
          <Link to="/projekte" className="btn-pink group">
            Ein kleiner Einblick
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 duration-500" />
          </Link>
          <a href="#kontakt" className="btn-ghost-soft">
            Schreib mir
          </a>
        </div>
      </section>

      <Marquee items={["Webdesign", "UX / UI", "SEO Optimierung", "Webentwicklung", "Strategie"]} />

      {/* DAS BIN ICH NICHT */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-4">02 — Was ich nicht bin</p>
            <h2 className="display-lg">
              Das bin ich<br />
              <span className="italic text-rose">nicht.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              Manchmal sagt es mehr, was man <em>nicht</em> macht. Drei Dinge, die du bei mir nicht bekommst.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-5">
            {[
              ["Keine Templates", "von der Stange.", "Jede Website beginnt mit deiner Geschichte — nicht mit einem Layout."],
              ["Kein Design", "ohne Strategie.", "Ästhetik ist wichtig. Aber sie kommt nach dem Verstehen."],
              ["Keine SEO", "ohne Ergebnis.", "Sichtbarkeit, die bleibt. Keine Tricks, keine kurzfristigen Hacks."],
            ].map(([a, b, c], i) => (
              <div
                key={i}
                className="reveal card-soft group flex flex-col md:flex-row md:items-center gap-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-mono text-xs text-muted-foreground md:w-12">0{i + 1}</span>
                <div className="flex-1">
                  <p className="font-display text-2xl md:text-3xl group-hover:text-rose transition-colors duration-500">
                    {a} <span className="italic text-muted-foreground">{b}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — icon cards */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4">03 — Leistungen</p>
            <h2 className="display-lg">
              Website erstellen lassen<br />
              <span className="italic text-rose">— aber richtig.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-muted-foreground leading-relaxed">
              Vier Bereiche, die zusammengehören. Eine Website, die wirkt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IconCard
            icon={Palette}
            title="Individuelles Webdesign"
            desc="Visuelle Identität, die zu dir passt — keine Vorlagen, kein Bauchgefühl."
            index={0}
          />
          <IconCard
            icon={Layers}
            title="UX/UI mit klarer Struktur"
            desc="Nutzerführung, Hierarchie und Microinteractions, die Conversions bringen."
            variant="blue"
            index={1}
          />
          <IconCard
            icon={Code2}
            title="Technische Webentwicklung"
            desc="Schnell, sauber gebaut, wartbar. React, Performance, Accessibility."
            variant="pink"
            index={2}
          />
          <IconCard
            icon={Search}
            title="SEO Optimierung von Anfang an"
            desc="Sichtbarkeit ist kein Nachgedanke. SEO-Strategie ist im Design eingebaut."
            index={3}
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/webentwicklung" className="btn-ghost-soft">
            Mehr zu Web Development <ArrowRight size={14} />
          </Link>
          <Link to="/seo" className="btn-ghost-soft">
            Mehr zu SEO <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* PROJEKTE PREVIEW with images */}
      <section className="container-editorial py-28 relative">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4">04 — Werk</p>
            <h2 className="display-lg">
              Ausgewählte<br />
              <span className="italic">Projekte.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ein paar Projekte, die zeigen, wie Strategie, Design und Entwicklung zusammenkommen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Atelier Norden", category: "Webdesign · Webentwicklung", img: project1 },
            { name: "Kraft & Klarheit", category: "UX/UI · SEO", img: project2 },
            { name: "Studio Linde", category: "Branding · Webdev", img: project3 },
          ].map((p, i) => (
            <Link
              to="/projekte"
              key={i}
              className="reveal group block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="frame-soft aspect-[4/5] mb-5">
                <img src={p.img} alt={`${p.name} — Projekt von Marianna Kuzmenko`} loading="lazy" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl group-hover:text-rose transition-colors duration-500">{p.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest mt-1.5">{p.category}</p>
                </div>
                <ArrowUpRight className="transition-transform group-hover:rotate-45 duration-500 text-muted-foreground group-hover:text-rose mt-1" size={22} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/projekte" className="btn-pink">
            Alle Projekte ansehen <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="container-editorial py-28">
        <div className="card-soft relative overflow-hidden p-10 md:p-20" style={{ background: "var(--gradient-soft)" }}>
          <div className="blob blob-pink" style={{ width: 320, height: 320, top: "-80px", right: "-80px" }} />
          <div className="blob blob-blue" style={{ width: 280, height: 280, bottom: "-100px", left: "-80px" }} />
          <div className="relative">
            <div className="chip-pink mb-6">
              <Sparkles size={12} /> 05 — Kontakt
            </div>
            <h2 className="display-lg max-w-4xl">
              Bereit für eine Website,<br />
              die wirklich <span className="italic text-rose">funktioniert?</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Schreib mir kurz, was du vorhast. Ich melde mich innerhalb von 48 Stunden zurück — persönlich, nicht aus dem Funnel.
            </p>
            <a href="mailto:hello@mariannakuzmenko.de" className="btn-pink mt-10">
              ok, ich schaue es mir an →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
