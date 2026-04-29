import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { IconCard } from "@/components/site/IconCard";
import { FloatingNote } from "@/components/site/FloatingNote";
import { Link } from "react-router-dom";
import { GraduationCap, Eye, Feather, ArrowRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import workspace from "@/assets/workspace.jpg";

const UeberMich = () => {
  return (
    <Layout>
      <Seo
        title="Über mich — Marianna Kuzmenko · Webdesignerin & SEO Freelancer"
        description="Webdesignerin und Entwicklerin mit Fokus auf UX/UI Design und SEO Optimierung. Ausgebildet in Portugal & Kanada, tätig als Freelancer Webdesigner in Deutschland."
        path="/ueber-mich"
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-blue animate-float-slower" style={{ width: 420, height: 420, top: "100px", left: "-100px" }} />
        <p className="eyebrow mb-6 relative">02 — Über mich</p>
        <div className="grid grid-cols-12 gap-8 items-end relative">
          <div className="col-span-12 md:col-span-8">
            <h1 className="display-xl">
              Hallo,<br />
              <span className="italic">ich bin</span><br />
              <span className="text-rose">Marianna.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="frame-soft aspect-[3/4] max-w-[320px] ml-auto">
              <img src={portrait} alt="Marianna Kuzmenko, Webdesignerin und Entwicklerin in Deutschland" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Wer */}
      <section className="container-editorial pb-24">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow">Wer</p>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6 text-xl md:text-2xl leading-relaxed font-display">
            <p className="reveal">
              Ich bin <span className="marker">Webdesignerin und Entwicklerin</span> mit Fokus auf UX/UI und SEO.
            </p>
            <p className="reveal" style={{ transitionDelay: "120ms" }}>
              Ich habe Frontend Development in <em>Portugal</em> und <em>Kanada</em> gelernt und mich zusätzlich im Bereich Internet Marketing spezialisiert.
            </p>
            <p className="reveal" style={{ transitionDelay: "240ms" }}>
              Heute verbinde ich Design, Technik und SEO zu einem klaren Ziel: <span className="text-rose">Websites, die sichtbar sind und Ergebnisse bringen.</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 mt-6 md:mt-12">
            <FloatingNote rotate={4}>
              „Strukturiert,<br />nicht steif."
            </FloatingNote>
          </div>
        </div>
      </section>

      {/* Workspace image */}
      <section className="container-editorial pb-28">
        <div className="frame-soft aspect-[16/9] md:aspect-[21/9]">
          <img src={workspace} alt="Mariannas Arbeitsplatz mit Laptop, Notizbuch und Kaffee" loading="lazy" />
        </div>
      </section>

      {/* Wie ich arbeite — icon cards */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">Methode</p>
            <h2 className="display-lg">Wie ich<br /><span className="italic text-rose">arbeite.</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <IconCard icon={GraduationCap} title="Strukturiert" desc="Klare Phasen, klare Deliverables. Kein Chaos, kein Bauchgefühl." index={0} />
          <IconCard icon={Eye} title="Transparent" desc="Du siehst, was passiert. Immer. Updates ohne Marketing-Geschwafel." variant="blue" index={1} />
          <IconCard icon={Feather} title="Ohne Komplexität" desc="Nur das, was wirklich nötig ist. Keine Tools-Sammlung als Selbstzweck." variant="pink" index={2} />
        </div>
      </section>

      {/* Werte */}
      <section className="container-editorial pb-28">
        <div className="card-soft p-10 md:p-16" style={{ background: "var(--gradient-soft)" }}>
          <p className="eyebrow mb-4">Werte</p>
          <h2 className="display-lg mb-12">Was mir<br /><span className="italic">wichtig ist.</span></h2>

          <ul className="space-y-2">
            {[
              ["Klarheit", "vor Design-Trends."],
              ["Funktion", "vor Spielerei."],
              ["Nachhaltige SEO", "statt kurzfristiger Tricks."],
            ].map(([a, b], i) => (
              <li
                key={i}
                className="reveal py-6 grid grid-cols-12 gap-6 items-baseline group cursor-default border-b border-border last:border-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <span className="col-span-10 md:col-span-11 font-display text-2xl md:text-4xl">
                  <span className="group-hover:text-rose transition-colors duration-500">{a}</span>{" "}
                  <span className="italic text-muted-foreground">{b}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/webentwicklung" className="btn-pink">Web Development entdecken →</Link>
            <Link to="/projekte" className="btn-ghost-soft">Projekte ansehen <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberMich;
