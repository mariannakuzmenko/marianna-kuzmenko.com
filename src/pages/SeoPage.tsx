import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";

const SeoPage = () => {
  return (
    <Layout>
      <Seo
        title="SEO Optimierung für Websites — SEO Freelancer Deutschland"
        description="Nachhaltige SEO Optimierung für Selbstständige und kleine Unternehmen. Technisches SEO, On-Page Optimierung, Keyword-Strategie aus Deutschland."
        path="/seo"
      />

      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8">04 — SEO</p>
        <h1 className="display-xl">
          SEO Optimierung<br />
          <span className="italic">für</span> <span className="text-accent">Websites.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-16">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl leading-relaxed font-display">
              SEO ist mehr als Keywords. Es geht darum, <span className="marker">gefunden zu werden</span> — von den richtigen Menschen.
            </p>
          </div>
        </div>
      </section>

      {/* Was ich mache */}
      <section className="container-editorial py-32">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-6">Was ich mache</p>
            <h2 className="display-lg">Vier<br /><span className="italic">Hebel.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {[
            { n: "01", t: "Technisches SEO", d: "Crawlbarkeit, Indexierung, Performance, Core Web Vitals, Schema." },
            { n: "02", t: "On-Page Optimierung", d: "Meta, Headings, interne Verlinkung, semantische Auszeichnung." },
            { n: "03", t: "Struktur & Inhalte", d: "Informationsarchitektur, die Nutzer und Suchmaschinen verstehen." },
            { n: "04", t: "Keyword-Strategie", d: "Recherche mit Intent. Keine Keyword-Listen ohne Strategie." },
          ].map((s, i) => (
            <div
              key={i}
              className="reveal bg-background p-10 md:p-14 group hover:bg-accent hover:text-accent-foreground transition-colors duration-500 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-xs text-muted-foreground group-hover:text-accent-foreground/70">{s.n}</span>
              <h3 className="font-display text-3xl md:text-4xl mt-6 mb-4">{s.t}</h3>
              <p className="text-muted-foreground group-hover:text-accent-foreground/90 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mein Ansatz */}
      <section className="bg-foreground text-background py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-6 text-background/60">Mein Ansatz</p>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-6 font-display text-4xl md:text-6xl leading-[1.05]">
              <p className="reveal">Keine Tricks.</p>
              <p className="reveal text-accent italic" style={{ transitionDelay: "120ms" }}>Keine kurzfristigen Hacks.</p>
              <p className="reveal" style={{ transitionDelay: "240ms" }}>
                Sondern <span className="underline decoration-accent decoration-4 underline-offset-8">nachhaltige Optimierung</span>, die langfristig funktioniert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="container-editorial py-32">
        <p className="eyebrow mb-6">Für wen</p>
        <h2 className="display-lg mb-16">Passend<br /><span className="italic">für...</span></h2>

        <ul className="border-t border-foreground/15">
          {[
            ["Selbstständige", "Solopreneure, Coaches, Berater — die online gefunden werden müssen."],
            ["Kleine Unternehmen", "KMUs, die organischen Traffic statt teurer Ads wollen."],
            ["Lokale Businesses in Deutschland", "Local SEO für regionale Sichtbarkeit und echte Kundschaft."],
          ].map(([t, d], i) => (
            <li
              key={i}
              className="reveal border-b border-foreground/15 py-10 grid grid-cols-12 gap-6 items-baseline group hover:bg-foreground/5 cursor-default transition-colors duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="col-span-2 font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="col-span-10 md:col-span-5 font-display text-3xl md:text-4xl group-hover:text-accent transition-colors duration-500">{t}</span>
              <span className="col-span-12 md:col-span-5 text-muted-foreground leading-relaxed">{d}</span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default SeoPage;
