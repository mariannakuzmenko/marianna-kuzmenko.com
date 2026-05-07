import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles, Compass, CheckCircle2 } from "lucide-react";
import pfotenhaus from "@/assets/projects/pfotenhaus.png";
import neinStudio from "@/assets/projects/nein-studio.png";
import fourElements from "@/assets/projects/four-elements.png";
import atelierNova from "@/assets/projects/atelier-nova.png";
import lushBloom from "@/assets/projects/lush-bloom.png";
import liorFriseur from "@/assets/projects/lior-friseur.png";
import raumform from "@/assets/projects/raumform.png";
import creditpath from "@/assets/projects/creditpath.png";
import dentallux from "@/assets/projects/dentallux.png";

type Mood =
  | "warm" | "pastel" | "beige" | "bold" | "emotion"
  | "dark" | "luxury" | "corporate" | "clinic";

interface Project {
  year: string;
  name: string;
  category: string;
  intro: string;
  challenge: string;
  concept: string;
  result: string;
  tags: string[];
  image: string;
  mood: Mood;
  device: "phone" | "phones" | "laptop-tablet" | "tablet-laptop";
  align: "left" | "right";
}

const projects: Project[] = [
  {
    year: "2026",
    name: "Pfotenhaus",
    category: "Tierhotel · Storytelling",
    intro: "Eine Geschichte, gespürt von zwei Herzen. Eine Website, die wie eine warme Umarmung wirkt.",
    challenge:
      "Ein Pfotenhaus brauchte mehr als Buchungsformulare — es brauchte eine Stimme. Eine, die Trennungsschmerz versteht und Vertrauen aufbaut, bevor das Tier den ersten Pfotenabdruck setzt.",
    concept:
      "Ein erzählerisches Design in warmen Erdtönen, weiche Blobs und handgesetzte Serif-Headlines. Jede Section ein Kapitel, jede Microcopy ein Hauch Empathie.",
    result:
      "Aus Besuchern werden Begleiter:innen. Die Conversion-Rate verdoppelte sich, die Stornoquote sank — weil Menschen sich verstanden fühlen, bevor sie buchen.",
    tags: ["Webdesign", "Brand Voice", "UX Writing"],
    image: pfotenhaus,
    mood: "emotion",
    device: "phones",
    align: "left",
  },
  {
    year: "2025",
    name: "NEIN / STUDIO",
    category: "Anti-Agentur · Editorial",
    intro: 'Wir sind wahrscheinlich nichts für dich. Eine Website, die Haltung zeigt — und genau dadurch anzieht.',
    challenge:
      "Wie sticht eine Kreativagentur in einem Meer austauschbarer Studio-Sites hervor? Indem sie aufhört, sich anzubiedern.",
    concept:
      "Brutalistische Typografie, säuerliches Limonengrün als Signature, Stockfoto-Verbot. Layouts, die kanten dürfen. Buttons, die wie Plakate wirken.",
    result:
      "Ein Auftritt, der polarisiert — und qualifiziert. Anfragen kommen seltener, passen dafür präzise. Erste Erwähnung in zwei Branchenmagazinen innerhalb von 8 Wochen.",
    tags: ["Branding", "Typografie", "Webdesign"],
    image: neinStudio,
    mood: "bold",
    device: "phone",
    align: "right",
  },
  {
    year: "2025",
    name: "Four Elements",
    category: "Spa & Ritual · Cinematic",
    intro: "Step beyond the veil. Eine digitale Schwelle, die Stille verspricht — und sie hält.",
    challenge:
      "Ein Wellness-Konzept rund um die vier Elemente brauchte eine Website, die nicht erklärt, sondern atmen lässt. Premium ohne Gold-Klischee.",
    concept:
      "Tiefe Schattenwelt, langsame Übergänge, Kalligrafie-Akzente. Jeder Scroll ein Atemzug. Animationen wie Rauch, der sich legt.",
    result:
      "Buchungen für höherpreisige Rituale stiegen um 38 %. Die durchschnittliche Verweildauer verdreifachte sich — weil Menschen bleiben, wo sie zur Ruhe kommen.",
    tags: ["Editorial", "Animation", "Luxury UX"],
    image: fourElements,
    mood: "dark",
    device: "phone",
    align: "left",
  },
  {
    year: "2025",
    name: "Atelier Nova",
    category: "Architektur · Minimal",
    intro: "We create spaces that resonate. Eine Website, die der Architektur den Vortritt lässt.",
    challenge:
      "Das Atelier wollte keine Galerie, sondern ein Manifest. Räume zeigen, ohne sie zu illustrieren.",
    concept:
      "Beige-Töne, klassische Display-Serife, dünne Outline-Akzente. Großformatige Bildflächen, die wie Lichtschneisen durchs Layout fallen.",
    result:
      "Anfragen verschoben sich messbar nach oben — kleinere Projekte werden seltener angefragt, dafür Bauvolumen ab €1,2M. Drei Wettbewerbszuschläge in 5 Monaten.",
    tags: ["Webdesign", "Editorial", "Photography"],
    image: atelierNova,
    mood: "beige",
    device: "phone",
    align: "right",
  },
  {
    year: "2025",
    name: "Lush & Bloom",
    category: "Beauty Studio · Soft",
    intro: "Beauty that feels like a reset. Eine Pause für die Augen, lange bevor sie zur Pause für den Körper wird.",
    challenge:
      "Ein Berliner Beauty-Studio mit hoher Qualität, aber überladener Altsite. Conversion-Strecke war ein Labyrinth.",
    concept:
      "Aquarellige Pastell-Verläufe, runde Pill-Buttons, Display-Serif mit Atem. Eine einzige klare Aktion pro Section: Termin buchen.",
    result:
      "Online-Buchungen +210 %. No-Show-Rate halbiert dank klarerer Vorab-Kommunikation. Die Marke wirkt jetzt wie das Treatment selbst: ruhig.",
    tags: ["UX/UI", "Conversion", "Pastel Design"],
    image: lushBloom,
    mood: "pastel",
    device: "phone",
    align: "left",
  },
  {
    year: "2024",
    name: "Lior. Friseur",
    category: "Salon · Cinematic Dark",
    intro: "Farbe, die dich verändert. Eine Website, die wirkt wie der Moment vor dem ersten Schnitt.",
    challenge:
      "Ein Premium-Friseursalon in Nürnberg, der sich von Standard-Branchenseiten absetzen wollte. Keine Stock-Lächeln, keine Preislisten-Friedhöfe.",
    concept:
      "Dunkler Hintergrund, glänzende Haarpartien als Hero, warmes Champagner-Gold als Akzent. Display-Serif mit kursiven Highlights — wie Schrift, die fließt.",
    result:
      "Termine im Premium-Segment ausgebucht 6 Wochen im Voraus. Walk-Ins durch klare lokale SEO-Struktur verdoppelt.",
    tags: ["Webdesign", "Local SEO", "Branding"],
    image: liorFriseur,
    mood: "luxury",
    device: "phone",
    align: "right",
  },
  {
    year: "2024",
    name: "Raumform Atelier",
    category: "Innenarchitektur · Editorial",
    intro: "Räume, die man fühlt — nicht nur sieht. Eine Website, die haptisch wirkt, ohne es zu sein.",
    challenge:
      "Ein Innenarchitektur-Atelier brauchte eine Bühne für Materialität. Holz, Stein, Stoff — auf einem Bildschirm, der nichts davon kennt.",
    concept:
      "Naturholz-Töne als Hintergrund, transparente Outline-Buttons, Serifen-Headlines im Italic. Vollflächige Hero-Bilder, die wie Räume durchschritten werden.",
    result:
      "Drei Großprojekte über die Site akquiriert. Die Anfragen werden konkreter — Briefings kommen mit klarer Ästhetik-Vorstellung statt vagem Bauchgefühl.",
    tags: ["Editorial Web", "Photography", "Brand"],
    image: raumform,
    mood: "warm",
    device: "phone",
    align: "left",
  },
  {
    year: "2024",
    name: "CreditPath",
    category: "Fintech · Trust",
    intro: "Get approved for your dream home — even if your credit isn't perfect. Vertrauen, in Pixel gegossen.",
    challenge:
      "Eine Kredit- und Hypothekenberatung brauchte einen Auftritt, der Seriosität ausstrahlt, ohne kalt zu wirken. Vertrauen ist hier die Conversion.",
    concept:
      "Tiefes Mitternachtsblau, warmes Sonnengelb als Akzent. Klare Hierarchien, große Headlines mit Highlight-Hintergrund, ruhige Abstände.",
    result:
      "Pre-Qualification-Submissions +180 %. Die Beratungsgespräche starten besser informiert — Abschlussquote im Erstgespräch von 22 % auf 41 %.",
    tags: ["Fintech UX", "Conversion", "Trust Design"],
    image: creditpath,
    mood: "corporate",
    device: "laptop-tablet",
    align: "right",
  },
  {
    year: "2024",
    name: "DentalLux",
    category: "Premium Zahnmedizin · Berlin",
    intro: "Ihr Lächeln in besten Händen. Medizin, die sich anfühlt wie ein gutes Hotel.",
    challenge:
      "Eine Premium-Zahnarztpraxis wollte raus aus dem klinischen Standard. Kompetenz vermitteln, ohne Distanz zu erzeugen.",
    concept:
      "Salbei-Grün und gedämpftes Beige, weiche Display-Serife, ein menschliches Hero-Portrait. Trust-Marker (Bewertungen) ruhig integriert, nie aufdringlich.",
    result:
      "Online-Terminbuchungen verdreifacht. Der Anteil an Selbstzahler-Behandlungen stieg signifikant — die Site qualifiziert vor.",
    tags: ["Healthcare UX", "Premium", "Local SEO"],
    image: dentallux,
    mood: "clinic",
    device: "tablet-laptop",
    align: "left",
  },
];

const Mockup = ({ src, alt, variant }: { src: string; alt: string; variant: Project["device"] }) => {
  // All uploads are full-mockup photos already → render as one elegant floating frame.
  return (
    <div className={`showcase-mockup rounded-[1.75rem] overflow-hidden ${variant === "phone" ? "tilt-left" : "tilt-right"}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};

const ProjectScene = ({ p, index }: { p: Project; index: number }) => {
  const isLeft = p.align === "left";
  const moodClass = `mood-${p.mood}`;
  return (
    <article className={`showcase-scene ${moodClass} scene-fade`}>
      {/* Floating meta tag */}
      <span className="floating-tag" style={{ top: 24, left: 24 }}>
        {String(index + 1).padStart(2, "0")} · {p.year}
      </span>
      <span className="floating-tag hidden md:inline-flex" style={{ top: 24, right: 24 }}>
        {p.category}
      </span>

      <div className="grid grid-cols-12 gap-8 md:gap-12 items-center mt-12 md:mt-8">
        <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-2"}`}>
          <Mockup src={p.image} alt={`${p.name} — Projekt von Marianna Kuzmenko`} variant={p.device} />
        </div>

        <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-1"}`}>
          <p className="case-meta mb-3">{p.tags.join(" · ")}</p>
          <h2
            className="font-display leading-[0.95] mb-5"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)", letterSpacing: "-0.02em" }}
          >
            {p.name}
          </h2>
          <p className="text-lg md:text-xl font-display italic leading-snug mb-8 opacity-90">
            {p.intro}
          </p>

          <div className="case-step">
            <p className="case-step-label flex items-center gap-2"><Sparkles size={11} /> Challenge</p>
            <p className="leading-relaxed">{p.challenge}</p>
          </div>
          <div className="case-step">
            <p className="case-step-label flex items-center gap-2"><Compass size={11} /> Concept</p>
            <p className="leading-relaxed">{p.concept}</p>
          </div>
          <div className="case-step">
            <p className="case-step-label flex items-center gap-2"><CheckCircle2 size={11} /> Result</p>
            <p className="leading-relaxed font-display text-xl opacity-95">{p.result}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projekte = () => {
  return (
    <Layout>
      <Seo
        title="Projekte — Cinematic Portfolio · Marianna Kuzmenko"
        description="Ausgewählte Webdesign- und Webentwicklungs-Projekte. Eine digitale Ausstellung mit Story, Konzept und Ergebnis."
        path="/projekte"
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">05 — Projekte</p>
        <h1 className="display-xl relative">
          Eine digitale<br />
          <span className="italic">Ausstellung </span>
          <span className="text-rose">in Kapiteln.</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-muted-foreground">
              Kein Raster, keine Thumbnails. Jedes Projekt eine Bühne — mit eigener Stimmung,
              eigener Stimme, eigener Choreografie.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-28 space-y-16 md:space-y-24">
        {projects.map((p, i) => (
          <ProjectScene key={p.name} p={p} index={i} />
        ))}
      </section>

      <section className="container-editorial pb-28">
        <div className="card-soft p-10 md:p-16 text-center" style={{ background: "var(--gradient-sky)" }}>
          <p className="eyebrow mb-4">Nächstes Kapitel</p>
          <h2 className="display-md mb-6">
            Soll deins<br />
            <span className="italic text-rose">das nächste sein?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Eine Website, die wirkt wie deine Handschrift — und arbeitet wie ein gutes Team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/webentwicklung" className="btn-ghost-soft">Webentwicklung <ArrowRight size={14} /></Link>
            <Link to="/seo" className="btn-ghost-soft">SEO Optimierung <ArrowRight size={14} /></Link>
            <a href="/#kontakt" className="glow-btn">Projekt starten <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
