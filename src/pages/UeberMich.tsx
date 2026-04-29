import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";

const UeberMich = () => {
  return (
    <Layout>
      <Seo
        title="Über mich — Marianna Kuzmenko · Webdesignerin & SEO Freelancer"
        description="Webdesignerin und Entwicklerin mit Fokus auf UX/UI Design und SEO Optimierung. Ausgebildet in Portugal & Kanada, tätig als Freelancer Webdesigner in Deutschland."
        path="/ueber-mich"
      />

      <section className="container-editorial pt-16 md:pt-24 pb-20">
        <p className="eyebrow mb-8">02 — Über mich</p>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9">
            <h1 className="display-xl">
              Über mich<br />
              <span className="italic text-accent">— Marianna<br />Kuzmenko.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3 md:self-end">
            <div className="font-mono text-xs uppercase tracking-widest space-y-2 text-muted-foreground">
              <p>Webdesign</p>
              <p>UX / UI Design</p>
              <p>Webentwicklung</p>
              <p>SEO Optimierung</p>
              <p className="text-accent">Deutschland · Remote</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">Wer</p>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-8 text-xl md:text-2xl leading-relaxed font-display">
            <p className="reveal">
              Ich bin <span className="marker">Webdesignerin und Entwicklerin</span> mit Fokus auf UX/UI und SEO.
            </p>
            <p className="reveal">
              Ich habe Frontend Development in <em>Portugal</em> und <em>Kanada</em> gelernt und mich zusätzlich im Bereich Internet Marketing spezialisiert.
            </p>
            <p className="reveal">
              Heute verbinde ich Design, Technik und SEO zu einem klaren Ziel: <span className="text-accent">Websites, die sichtbar sind und Ergebnisse bringen.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Wie ich arbeite */}
      <section className="bg-foreground text-background py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-6 text-background/60">Methode</p>
              <h2 className="display-lg">Wie ich<br /><span className="italic">arbeite.</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/15">
            {[
              { n: "01", t: "Strukturiert", d: "Klare Phasen, klare Deliverables. Kein Chaos, kein Bauchgefühl." },
              { n: "02", t: "Transparent", d: "Du siehst, was passiert. Immer. Updates ohne Marketing-Geschwafel." },
              { n: "03", t: "Ohne Komplexität", d: "Nur das, was wirklich nötig ist. Keine Tools-Sammlung als Selbstzweck." },
            ].map((s, i) => (
              <div key={i} className="reveal bg-foreground p-10 md:p-14" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="font-mono text-xs text-background/60">{s.n}</span>
                <h3 className="font-display text-3xl mt-6 mb-4">{s.t}</h3>
                <p className="text-background/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was mir wichtig ist */}
      <section className="container-editorial py-32">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-6">Werte</p>
            <h2 className="display-lg">Was mir<br /><span className="italic">wichtig</span> ist.</h2>
          </div>
        </div>

        <ul className="border-t border-foreground/15">
          {[
            ["Klarheit", "vor Design-Trends."],
            ["Funktion", "vor Spielerei."],
            ["Nachhaltige SEO", "statt kurzfristiger Tricks."],
          ].map(([a, b], i) => (
            <li
              key={i}
              className="reveal border-b border-foreground/15 py-10 grid grid-cols-12 gap-6 items-baseline group cursor-default hover:bg-foreground/5 transition-colors duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="col-span-2 font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="col-span-10 font-display text-3xl md:text-5xl">
                <span className="group-hover:text-accent transition-colors duration-500">{a}</span> <span className="italic text-muted-foreground">{b}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default UeberMich;
