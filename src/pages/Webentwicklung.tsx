import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Marquee } from "@/components/site/Marquee";
import { ProcessStep } from "@/components/site/ProcessStep";
import { IconCard } from "@/components/site/IconCard";
import { Link } from "react-router-dom";
import {
  Compass,
  PenTool,
  Code2,
  Search,
  Briefcase,
  Rocket,
  LayoutGrid,
  Globe,
  ArrowRight,
} from "lucide-react";

const Webentwicklung = () => {
  return (
    <Layout>
      <Seo
        title="Webentwicklung & Webdesign in Deutschland — Marianna Kuzmenko"
        description="Moderne Websites für Unternehmen und Selbstständige in Deutschland. Webentwicklung, UX/UI Design und SEO Optimierung — alles aus einer Hand."
        path="/webentwicklung"
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-blue animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">03 — Web Development</p>
        <h1 className="display-xl relative">
          Websites,<br />
          <span className="italic">die </span><span className="text-rose">leise</span><br />
          <span className="italic">funktionieren.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl leading-relaxed font-display">
              Ich entwickle <span className="marker">moderne Websites</span> für Unternehmen und Selbstständige in Deutschland. Von der ersten Idee bis zur fertigen Website — alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      <Marquee items={["React", "TypeScript", "SEO", "Performance", "Accessibility", "Tailwind"]} />

      {/* Was ich umsetze — icon cards */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">Leistungen</p>
            <h2 className="display-lg">Was ich<br /><span className="italic">umsetze.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IconCard icon={Briefcase} title="Business Websites" desc="Repräsentative Webpräsenz für KMUs und etablierte Marken in Deutschland." index={0} />
          <IconCard icon={Rocket} title="Landingpages" desc="Conversion-optimierte Seiten für Kampagnen, Produkte und Launches." variant="blue" index={1} />
          <IconCard icon={LayoutGrid} title="Portfolio Websites" desc="Editorial gestaltete Plattformen für Kreative und Selbstständige." variant="pink" index={2} />
          <IconCard icon={Globe} title="SEO-optimierte Seiten" desc="Technisch sauber, semantisch korrekt, ranking-bereit ab Tag eins." index={3} />
        </div>
      </section>

      {/* Ablauf — interactive process line */}
      <section className="container-editorial py-28 relative">
        <div className="mb-16">
          <p className="eyebrow mb-4">Prozess</p>
          <h2 className="display-lg">
            Vier Phasen,<br />
            <span className="italic text-rose">ein klares Bild.</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl">
            Hover über jeden Schritt — er erzählt dir mehr.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            n="01"
            icon={Compass}
            title="Analyse & Struktur"
            desc="Ziele, Zielgruppe, Wettbewerb, Keywords."
            detail="Wir starten mit einem klaren Bild: für wen, warum, womit. Das Fundament steht zuerst."
            index={0}
          />
          <ProcessStep
            n="02"
            icon={PenTool}
            title="UX/UI Design"
            desc="Nutzerflüsse, Wireframes, visuelles System."
            detail="Klar bevor schön. Erst die Struktur, dann die Atmosphäre — beides gemeinsam getestet."
            index={1}
          />
          <ProcessStep
            n="03"
            icon={Code2}
            title="Entwicklung"
            desc="Sauberer Code in React. Performance & A11y."
            detail="Modular, schnell, wartbar. Keine zehn Plugins, kein Chaos im Maschinenraum."
            index={2}
          />
          <ProcessStep
            n="04"
            icon={Search}
            title="SEO Integration"
            desc="Technisches SEO, Inhalte, Struktur."
            detail="Sichtbarkeit ist eingebaut, nicht aufgesetzt. Du startest mit Fundament, nicht mit Hoffnung."
            index={3}
          />
        </div>

        <div className="mt-12">
          <Link to="/seo" className="btn-ghost-soft">
            Mehr über meinen SEO-Ansatz <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="container-editorial py-28">
        <div className="card-soft p-10 md:p-16" style={{ background: "var(--gradient-sky)" }}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow mb-4">Ergebnis</p>
              <h2 className="display-lg">
                Eine Website,<br />
                <span className="italic">die...</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ul className="space-y-5 font-display text-3xl md:text-5xl">
                {["schnell lädt.", "gut aussieht.", "gefunden wird."].map((t, i) => (
                  <li key={i} className="reveal flex items-baseline gap-5" style={{ transitionDelay: `${i * 150}ms` }}>
                    <span className="text-rose">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/projekte" className="btn-pink mt-12">
                Projekte ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Webentwicklung;
