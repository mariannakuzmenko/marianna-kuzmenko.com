import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Marquee } from "@/components/site/Marquee";
import { Link } from "react-router-dom";
import { ArrowUpRight, Asterisk } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Webdesigner & Webentwicklung in Deutschland — Marianna Kuzmenko"
        description="Moderne Websites, UX/UI Design und SEO Optimierung in Deutschland. Webdesigner & SEO Freelancer mit klarer Strategie statt Templates."
        path="/"
      />

      {/* HERO */}
      <section className="container-editorial pt-16 md:pt-28 pb-20">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow rotate-[-90deg] origin-left translate-y-12 hidden md:block">01 — Hello</p>
            <p className="eyebrow md:hidden mb-4">01 — Hello</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="display-xl">
              Webdesigner<br />
              <span className="italic font-light">&amp;</span> Webentwicklung<br />
              in <span className="text-accent">Deutschland<span className="text-foreground">.</span></span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-24">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <p className="text-lg md:text-xl leading-relaxed">
              Ich baue <span className="marker">moderne Websites</span>, die nicht nur gut aussehen, sondern auch funktionieren. Klar strukturiert, SEO-optimiert und auf dein Business abgestimmt.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="font-display text-3xl md:text-4xl leading-tight space-y-1">
              <p>Manchmal minimal.</p>
              <p className="text-accent italic">Manchmal mutig.</p>
              <p>Aber nie egal.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 flex flex-wrap items-center gap-6">
          <Link
            to="/projekte"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 hover:bg-accent transition-colors duration-500"
          >
            <span className="font-mono uppercase text-xs tracking-[0.25em]">Projekte ansehen</span>
            <ArrowUpRight className="transition-transform group-hover:rotate-45 duration-500" size={18} />
          </Link>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 px-8 py-5 border border-foreground hover:bg-foreground hover:text-background transition-colors duration-500"
          >
            <span className="font-mono uppercase text-xs tracking-[0.25em]">Schreib mir</span>
          </a>
          <p className="font-mono text-xs text-muted-foreground ml-auto hidden md:block">
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
            Verfügbar für neue Projekte · Q3 2026
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Webdesign", "UX / UI", "SEO Optimierung", "Webentwicklung", "Strategie"]} />

      {/* DAS BIN ICH NICHT */}
      <section className="container-editorial py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-6">02 — Was ich nicht bin</p>
            <h2 className="display-md">
              Das bin ich<br />
              <span className="italic">nicht.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
              {[
                ["Keine Templates", "von der Stange."],
                ["Kein Design", "ohne Strategie."],
                ["Keine SEO", "ohne Ergebnis."],
              ].map(([a, b], i) => (
                <li
                  key={i}
                  className="reveal py-8 flex items-baseline justify-between gap-6 group cursor-default"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="font-display text-3xl md:text-5xl flex-1 text-right group-hover:text-accent transition-colors duration-500">
                    {a} <span className="italic">{b}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DAS BEKOMMST DU */}
      <section className="bg-foreground text-background py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-8">
              <p className="eyebrow mb-6 text-background/60">03 — Leistungen</p>
              <h2 className="display-lg">
                Website erstellen lassen<br />
                <span className="italic text-accent">— aber richtig.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/15">
            {[
              {
                n: "01",
                title: "Individuelles Webdesign",
                text: "Visuelle Identität, die zu dir passt — keine Vorlagen, kein Bauchgefühl.",
              },
              {
                n: "02",
                title: "UX/UI mit klarer Struktur",
                text: "Nutzerführung, Hierarchie und Microinteractions, die Conversions bringen.",
              },
              {
                n: "03",
                title: "Technische Webentwicklung",
                text: "Schnell, sauber gebaut, wartbar. React, Performance, Accessibility.",
              },
              {
                n: "04",
                title: "SEO Optimierung von Anfang an",
                text: "Sichtbarkeit ist kein Nachgedanke. SEO-Strategie ist im Design eingebaut.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="reveal bg-foreground p-10 md:p-14 group hover:bg-accent transition-colors duration-700 cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-sm text-background/60 group-hover:text-background">{s.n}</span>
                  <Asterisk className="text-background/40 group-hover:rotate-180 group-hover:text-background transition-all duration-700" size={28} />
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">{s.title}</h3>
                <p className="text-background/70 group-hover:text-background/90 leading-relaxed max-w-md">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJEKTE PREVIEW */}
      <section className="container-editorial py-32">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-6">04 — Werk</p>
            <h2 className="display-lg">Ausgewählte<br /><span className="italic">Projekte.</span></h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ein paar Projekte, die zeigen, wie Strategie, Design und Entwicklung zusammenkommen.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-foreground/15 border-y border-foreground/15">
          {[
            { year: "2026", name: "Atelier Norden", category: "Webdesign · Webentwicklung", color: "from-orange-200 to-rose-200" },
            { year: "2025", name: "Kraft & Klarheit", category: "UX/UI · SEO Optimierung", color: "from-amber-100 to-yellow-200" },
            { year: "2025", name: "Studio Linde", category: "Branding · Webentwicklung", color: "from-stone-200 to-amber-100" },
          ].map((p, i) => (
            <Link
              to="/projekte"
              key={i}
              className="reveal group bg-background flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 hover:bg-foreground hover:text-background transition-colors duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-baseline gap-6 md:gap-12 flex-1">
                <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{p.year}</span>
                <span className="font-display text-3xl md:text-5xl">{p.name}</span>
              </div>
              <div className="flex items-center justify-between gap-6 mt-4 md:mt-0">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/60">{p.category}</span>
                <ArrowUpRight className="transition-transform group-hover:rotate-45 duration-500 group-hover:text-accent" size={28} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="container-editorial py-32">
        <div className="border border-foreground p-10 md:p-20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          <p className="eyebrow mb-6">05 — Kontakt</p>
          <h2 className="display-lg max-w-4xl">
            Bereit für eine Website,<br />
            die wirklich <span className="italic text-accent">funktioniert?</span>
          </h2>
          <a
            href="mailto:hello@mariannakuzmenko.de"
            className="mt-10 inline-flex items-center gap-3 group"
          >
            <span className="font-display text-2xl md:text-3xl underline-draw">→ Schreib mir</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
