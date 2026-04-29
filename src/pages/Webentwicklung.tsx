import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Marquee } from "@/components/site/Marquee";

const Webentwicklung = () => {
  return (
    <Layout>
      <Seo
        title="Webentwicklung & Webdesign in Deutschland — Marianna Kuzmenko"
        description="Moderne Websites für Unternehmen und Selbstständige in Deutschland. Webentwicklung, UX/UI Design und SEO Optimierung — alles aus einer Hand."
        path="/webentwicklung"
      />

      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8">03 — Web Development</p>
        <h1 className="display-xl">
          Webentwicklung<br />
          <span className="italic">&amp;</span> <span className="text-accent">Webdesign.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-16">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl leading-relaxed font-display">
              Ich entwickle <span className="marker">moderne Websites</span> für Unternehmen und Selbstständige in Deutschland. Von der Idee bis zur fertigen Website — alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      <Marquee items={["React", "TypeScript", "SEO", "Performance", "Accessibility", "Tailwind"]} />

      {/* Was ich umsetze */}
      <section className="container-editorial py-32">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">Leistungen</p>
            <h2 className="display-lg">Was ich<br /><span className="italic">umsetze.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {[
            { t: "Business Websites", d: "Repräsentative Webpräsenz für KMUs und etablierte Marken in Deutschland." },
            { t: "Landingpages", d: "Conversion-optimierte Seiten für Kampagnen, Produkte und Launches." },
            { t: "Portfolio Websites", d: "Editorial gestaltete Plattformen für Kreative und Selbstständige." },
            { t: "SEO-optimierte Seiten", d: "Technisch sauber, semantisch korrekt, ranking-bereit ab Tag eins." },
          ].map((s, i) => (
            <div
              key={i}
              className="reveal bg-background p-10 md:p-14 group hover:bg-foreground hover:text-background transition-colors duration-500 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="font-display text-3xl md:text-4xl mb-4">{s.t}</h3>
              <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ablauf */}
      <section className="bg-foreground text-background py-32">
        <div className="container-editorial">
          <div className="mb-16">
            <p className="eyebrow mb-6 text-background/60">Prozess</p>
            <h2 className="display-lg">Ablauf<span className="text-accent">.</span></h2>
          </div>

          <ol className="space-y-px">
            {[
              ["01", "Analyse & Struktur", "Ziele, Zielgruppe, Wettbewerb, Keywords. Fundament zuerst."],
              ["02", "UX/UI Design", "Nutzerflüsse, Wireframes, visuelles System. Klar bevor schön."],
              ["03", "Entwicklung", "Sauberer Code in React. Performance, Responsive, Accessibility."],
              ["04", "SEO Integration", "Technisches SEO, Inhalte, Struktur. Sichtbarkeit eingebaut."],
            ].map(([n, t, d], i) => (
              <li
                key={i}
                className="reveal grid grid-cols-12 gap-6 items-baseline border-b border-background/15 py-10 group cursor-default hover:bg-accent transition-colors duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-background/60">{n}</span>
                <span className="col-span-10 md:col-span-5 font-display text-3xl md:text-4xl">{t}</span>
                <span className="col-span-12 md:col-span-6 text-background/70 group-hover:text-background leading-relaxed">{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="container-editorial py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">Ergebnis</p>
            <h2 className="display-lg">Eine Website,<br /><span className="italic">die...</span></h2>
          </div>
          <div className="col-span-12 md:col-span-7">
            <ul className="space-y-6 font-display text-3xl md:text-5xl">
              {["schnell lädt.", "gut aussieht.", "gefunden wird."].map((t, i) => (
                <li key={i} className="reveal flex items-baseline gap-6" style={{ transitionDelay: `${i * 120}ms` }}>
                  <span className="text-accent">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Webentwicklung;
