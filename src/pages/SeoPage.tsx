import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { IconCard } from "@/components/site/IconCard";
import { ProcessStep } from "@/components/site/ProcessStep";
import { Link } from "react-router-dom";
import {
  Wrench,
  FileText,
  Network,
  Target,
  User,
  Building2,
  MapPin,
  ArrowRight,
} from "lucide-react";

const SeoPage = () => {
  return (
    <Layout>
      <Seo
        title="SEO Optimierung für Websites — SEO Freelancer Deutschland"
        description="Nachhaltige SEO Optimierung für Selbstständige und kleine Unternehmen. Technisches SEO, On-Page Optimierung, Keyword-Strategie aus Deutschland."
        path="/seo"
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">04 — SEO</p>
        <h1 className="display-xl relative">
          SEO,<br />
          <span className="italic">die </span>
          <span className="text-rose">bleibt.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl leading-relaxed font-display">
              SEO ist mehr als Keywords. Es geht darum, <span className="marker">gefunden zu werden</span> — von den richtigen Menschen.
            </p>
          </div>
        </div>
      </section>

      {/* Vier Hebel — icon cards */}
      <section className="container-editorial py-28">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">Was ich mache</p>
            <h2 className="display-lg">Vier<br /><span className="italic text-rose">Hebel.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IconCard icon={Wrench} title="Technisches SEO" desc="Crawlbarkeit, Indexierung, Performance, Core Web Vitals, Schema." index={0} />
          <IconCard icon={FileText} title="On-Page Optimierung" desc="Meta, Headings, interne Verlinkung, semantische Auszeichnung." variant="blue" index={1} />
          <IconCard icon={Network} title="Struktur & Inhalte" desc="Informationsarchitektur, die Nutzer und Suchmaschinen verstehen." variant="pink" index={2} />
          <IconCard icon={Target} title="Keyword-Strategie" desc="Recherche mit Intent. Keine Keyword-Listen ohne Strategie." index={3} />
        </div>
      </section>

      {/* Mein Ansatz */}
      <section className="container-editorial py-28">
        <div className="card-soft p-10 md:p-20 relative overflow-hidden" style={{ background: "var(--gradient-rose)" }}>
          <div className="grid grid-cols-12 gap-6 relative">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">Mein Ansatz</p>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-4 font-display text-3xl md:text-5xl leading-[1.1]">
              <p className="reveal">Keine Tricks.</p>
              <p className="reveal italic" style={{ transitionDelay: "120ms" }}>Keine kurzfristigen Hacks.</p>
              <p className="reveal" style={{ transitionDelay: "240ms" }}>
                Sondern <span className="underline decoration-foreground decoration-2 underline-offset-8">nachhaltige Optimierung</span>, die langfristig funktioniert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* So gehe ich vor */}
      <section className="container-editorial py-28">
        <div className="mb-16">
          <p className="eyebrow mb-4">So gehe ich vor</p>
          <h2 className="display-lg">Schritt<br /><span className="italic">für Schritt.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep n="01" icon={Wrench} title="Audit" desc="Was ist da? Was bremst?" detail="Ehrliche Bestandsaufnahme — technisch, inhaltlich, strategisch." index={0} />
          <ProcessStep n="02" icon={Target} title="Strategie" desc="Welche Keywords mit Intent?" detail="Themen statt Wortlisten. Was suchen deine Wunschkunden wirklich?" index={1} />
          <ProcessStep n="03" icon={FileText} title="Umsetzung" desc="On-Page, Inhalte, Struktur." detail="Sauberes Handwerk: Meta, semantische Tags, interne Verlinkung." index={2} />
          <ProcessStep n="04" icon={Network} title="Monitoring" desc="Messen, lernen, nachschärfen." detail="SEO ist kein Schalter. Wir bleiben dran und justieren." index={3} />
        </div>
      </section>

      {/* Für wen — icon cards */}
      <section className="container-editorial py-28">
        <p className="eyebrow mb-4">Für wen</p>
        <h2 className="display-lg mb-12">Passend<br /><span className="italic text-rose">für...</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <IconCard icon={User} title="Selbstständige" desc="Solopreneure, Coaches, Berater — die online gefunden werden müssen." index={0} />
          <IconCard icon={Building2} title="Kleine Unternehmen" desc="KMUs, die organischen Traffic statt teurer Ads wollen." variant="blue" index={1} />
          <IconCard icon={MapPin} title="Lokale Businesses" desc="Local SEO für regionale Sichtbarkeit und echte Kundschaft in Deutschland." variant="pink" index={2} />
        </div>

        <div className="mt-12">
          <Link to="/projekte" className="btn-ghost-soft">
            SEO-Projekte ansehen <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SeoPage;
