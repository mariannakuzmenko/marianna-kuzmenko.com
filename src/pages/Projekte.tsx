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
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

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

const projects_de: Project[] = [
  { year: "2026", name: "Pfotenhaus", category: "Tierhotel · Storytelling",
    intro: "Eine Geschichte, gespürt von zwei Herzen. Eine Website, die wie eine warme Umarmung wirkt.",
    challenge: "Ein Pfotenhaus brauchte mehr als Buchungsformulare — es brauchte eine Stimme. Eine, die Trennungsschmerz versteht und Vertrauen aufbaut, bevor das Tier den ersten Pfotenabdruck setzt.",
    concept: "Ein erzählerisches Design in warmen Erdtönen, weiche Blobs und handgesetzte Serif-Headlines. Jede Section ein Kapitel, jede Microcopy ein Hauch Empathie.",
    result: "Aus Besuchern werden Begleiter:innen. Die Conversion-Rate verdoppelte sich, die Stornoquote sank — weil Menschen sich verstanden fühlen, bevor sie buchen.",
    tags: ["Webdesign", "Brand Voice", "UX Writing"], image: pfotenhaus, mood: "emotion", device: "phones", align: "left" },
  { year: "2025", name: "NEIN / STUDIO", category: "Anti-Agentur · Editorial",
    intro: "Wir sind wahrscheinlich nichts für dich. Eine Website, die Haltung zeigt — und genau dadurch anzieht.",
    challenge: "Wie sticht eine Kreativagentur in einem Meer austauschbarer Studio-Sites hervor? Indem sie aufhört, sich anzubiedern.",
    concept: "Brutalistische Typografie, säuerliches Limonengrün als Signature, Stockfoto-Verbot. Layouts, die kanten dürfen. Buttons, die wie Plakate wirken.",
    result: "Ein Auftritt, der polarisiert — und qualifiziert. Anfragen kommen seltener, passen dafür präzise. Erste Erwähnung in zwei Branchenmagazinen innerhalb von 8 Wochen.",
    tags: ["Branding", "Typografie", "Webdesign"], image: neinStudio, mood: "bold", device: "phone", align: "right" },
  { year: "2025", name: "Four Elements", category: "Spa & Ritual · Cinematic",
    intro: "Step beyond the veil. Eine digitale Schwelle, die Stille verspricht — und sie hält.",
    challenge: "Ein Wellness-Konzept rund um die vier Elemente brauchte eine Website, die nicht erklärt, sondern atmen lässt. Premium ohne Gold-Klischee.",
    concept: "Tiefe Schattenwelt, langsame Übergänge, Kalligrafie-Akzente. Jeder Scroll ein Atemzug. Animationen wie Rauch, der sich legt.",
    result: "Buchungen für höherpreisige Rituale stiegen um 38 %. Die durchschnittliche Verweildauer verdreifachte sich — weil Menschen bleiben, wo sie zur Ruhe kommen.",
    tags: ["Editorial", "Animation", "Luxury UX"], image: fourElements, mood: "dark", device: "phone", align: "left" },
  { year: "2025", name: "Atelier Nova", category: "Architektur · Minimal",
    intro: "We create spaces that resonate. Eine Website, die der Architektur den Vortritt lässt.",
    challenge: "Das Atelier wollte keine Galerie, sondern ein Manifest. Räume zeigen, ohne sie zu illustrieren.",
    concept: "Beige-Töne, klassische Display-Serife, dünne Outline-Akzente. Großformatige Bildflächen, die wie Lichtschneisen durchs Layout fallen.",
    result: "Anfragen verschoben sich messbar nach oben — kleinere Projekte werden seltener angefragt, dafür Bauvolumen ab €1,2M. Drei Wettbewerbszuschläge in 5 Monaten.",
    tags: ["Webdesign", "Editorial", "Photography"], image: atelierNova, mood: "beige", device: "phone", align: "right" },
  { year: "2025", name: "Lush & Bloom", category: "Beauty Studio · Soft",
    intro: "Beauty that feels like a reset. Eine Pause für die Augen, lange bevor sie zur Pause für den Körper wird.",
    challenge: "Ein Berliner Beauty-Studio mit hoher Qualität, aber überladener Altsite. Conversion-Strecke war ein Labyrinth.",
    concept: "Aquarellige Pastell-Verläufe, runde Pill-Buttons, Display-Serif mit Atem. Eine einzige klare Aktion pro Section: Termin buchen.",
    result: "Online-Buchungen +210 %. No-Show-Rate halbiert dank klarerer Vorab-Kommunikation. Die Marke wirkt jetzt wie das Treatment selbst: ruhig.",
    tags: ["UX/UI", "Conversion", "Pastel Design"], image: lushBloom, mood: "pastel", device: "phone", align: "left" },
  { year: "2024", name: "Lior. Friseur", category: "Salon · Cinematic Dark",
    intro: "Farbe, die dich verändert. Eine Website, die wirkt wie der Moment vor dem ersten Schnitt.",
    challenge: "Ein Premium-Friseursalon in Nürnberg, der sich von Standard-Branchenseiten absetzen wollte. Keine Stock-Lächeln, keine Preislisten-Friedhöfe.",
    concept: "Dunkler Hintergrund, glänzende Haarpartien als Hero, warmes Champagner-Gold als Akzent. Display-Serif mit kursiven Highlights — wie Schrift, die fließt.",
    result: "Termine im Premium-Segment ausgebucht 6 Wochen im Voraus. Walk-Ins durch klare lokale SEO-Struktur verdoppelt.",
    tags: ["Webdesign", "Local SEO", "Branding"], image: liorFriseur, mood: "luxury", device: "phone", align: "right" },
  { year: "2024", name: "Raumform Atelier", category: "Innenarchitektur · Editorial",
    intro: "Räume, die man fühlt — nicht nur sieht. Eine Website, die haptisch wirkt, ohne es zu sein.",
    challenge: "Ein Innenarchitektur-Atelier brauchte eine Bühne für Materialität. Holz, Stein, Stoff — auf einem Bildschirm, der nichts davon kennt.",
    concept: "Naturholz-Töne als Hintergrund, transparente Outline-Buttons, Serifen-Headlines im Italic. Vollflächige Hero-Bilder, die wie Räume durchschritten werden.",
    result: "Drei Großprojekte über die Site akquiriert. Die Anfragen werden konkreter — Briefings kommen mit klarer Ästhetik-Vorstellung statt vagem Bauchgefühl.",
    tags: ["Editorial Web", "Photography", "Brand"], image: raumform, mood: "warm", device: "phone", align: "left" },
  { year: "2024", name: "CreditPath", category: "Fintech · Trust",
    intro: "Get approved for your dream home — even if your credit isn't perfect. Vertrauen, in Pixel gegossen.",
    challenge: "Eine Kredit- und Hypothekenberatung brauchte einen Auftritt, der Seriosität ausstrahlt, ohne kalt zu wirken. Vertrauen ist hier die Conversion.",
    concept: "Tiefes Mitternachtsblau, warmes Sonnengelb als Akzent. Klare Hierarchien, große Headlines mit Highlight-Hintergrund, ruhige Abstände.",
    result: "Pre-Qualification-Submissions +180 %. Die Beratungsgespräche starten besser informiert — Abschlussquote im Erstgespräch von 22 % auf 41 %.",
    tags: ["Fintech UX", "Conversion", "Trust Design"], image: creditpath, mood: "corporate", device: "laptop-tablet", align: "right" },
  { year: "2024", name: "DentalLux", category: "Premium Zahnmedizin · Berlin",
    intro: "Ihr Lächeln in besten Händen. Medizin, die sich anfühlt wie ein gutes Hotel.",
    challenge: "Eine Premium-Zahnarztpraxis wollte raus aus dem klinischen Standard. Kompetenz vermitteln, ohne Distanz zu erzeugen.",
    concept: "Salbei-Grün und gedämpftes Beige, weiche Display-Serife, ein menschliches Hero-Portrait. Trust-Marker (Bewertungen) ruhig integriert, nie aufdringlich.",
    result: "Online-Terminbuchungen verdreifacht. Der Anteil an Selbstzahler-Behandlungen stieg signifikant — die Site qualifiziert vor.",
    tags: ["Healthcare UX", "Premium", "Local SEO"], image: dentallux, mood: "clinic", device: "tablet-laptop", align: "left" },
];

const projects_en: Project[] = [
  { year: "2026", name: "Pfotenhaus", category: "Pet hotel · Storytelling",
    intro: "A story felt by two hearts. A website that lands like a warm hug.",
    challenge: "A pet hotel needed more than booking forms — it needed a voice. One that understands separation anxiety and builds trust before the first paw print.",
    concept: "Narrative design in warm earth tones, soft blobs and hand-set serif headlines. Each section a chapter, each microcopy a touch of empathy.",
    result: "Visitors became companions. Conversions doubled, cancellations dropped — because people feel understood before they book.",
    tags: ["Web Design", "Brand Voice", "UX Writing"], image: pfotenhaus, mood: "emotion", device: "phones", align: "left" },
  { year: "2025", name: "NEIN / STUDIO", category: "Anti-agency · Editorial",
    intro: "We’re probably not for you. A site that takes a stance — and attracts because of it.",
    challenge: "How does a creative agency stand out in a sea of look-alike studio sites? By refusing to please everyone.",
    concept: "Brutalist typography, sour lime green as a signature, no stock photos. Layouts allowed to be sharp. Buttons that read like posters.",
    result: "A presence that polarizes — and qualifies. Inquiries come less often but fit precisely. Two industry mentions within 8 weeks of launch.",
    tags: ["Branding", "Typography", "Web Design"], image: neinStudio, mood: "bold", device: "phone", align: "right" },
  { year: "2025", name: "Four Elements", category: "Spa & ritual · Cinematic",
    intro: "Step beyond the veil. A digital threshold that promises stillness — and keeps it.",
    challenge: "A wellness brand around the four elements needed a website that doesn’t explain — it lets you breathe. Premium without the gold cliché.",
    concept: "Deep shadow palette, slow transitions, calligraphy accents. Each scroll a breath. Animations like smoke that settles.",
    result: "Bookings of higher-priced rituals rose 38%. Average dwell time tripled — because people stay where they can rest.",
    tags: ["Editorial", "Animation", "Luxury UX"], image: fourElements, mood: "dark", device: "phone", align: "left" },
  { year: "2025", name: "Atelier Nova", category: "Architecture · Minimal",
    intro: "We create spaces that resonate. A website that lets the architecture lead.",
    challenge: "The atelier didn’t want a gallery, it wanted a manifesto. Show spaces without illustrating them.",
    concept: "Beige tones, classical display serif, thin outline accents. Large image fields cutting through the layout like shafts of light.",
    result: "Inquiries shifted measurably upmarket — fewer small jobs, more €1.2M+ projects. Three competition wins in five months.",
    tags: ["Web Design", "Editorial", "Photography"], image: atelierNova, mood: "beige", device: "phone", align: "right" },
  { year: "2025", name: "Lush & Bloom", category: "Beauty studio · Soft",
    intro: "Beauty that feels like a reset. A pause for the eyes, long before the body’s.",
    challenge: "A high-quality Berlin beauty studio stuck on an overloaded legacy site. The conversion path was a maze.",
    concept: "Watercolor pastel gradients, rounded pill buttons, display serif with breathing room. One single clear action per section: book a slot.",
    result: "Online bookings +210%. No-show rate halved thanks to clearer pre-visit communication. The brand now feels like the treatment itself: calm.",
    tags: ["UX/UI", "Conversion", "Pastel Design"], image: lushBloom, mood: "pastel", device: "phone", align: "left" },
  { year: "2024", name: "Lior. Friseur", category: "Salon · Cinematic dark",
    intro: "Color that changes you. A site that lands like the moment before the first cut.",
    challenge: "A premium hair salon in Nuremberg wanting to break away from generic industry sites. No stock smiles, no price-list graveyards.",
    concept: "Dark background, glossy hair shots as the hero, warm champagne gold as accent. Display serif with italic highlights — type that flows.",
    result: "Premium-segment slots booked out 6 weeks ahead. Walk-ins doubled thanks to a clear local SEO structure.",
    tags: ["Web Design", "Local SEO", "Branding"], image: liorFriseur, mood: "luxury", device: "phone", align: "right" },
  { year: "2024", name: "Raumform Atelier", category: "Interior design · Editorial",
    intro: "Spaces you feel — not just see. A website with a tactile pulse.",
    challenge: "An interior design atelier needed a stage for materiality. Wood, stone, fabric — on a screen that knows none of them.",
    concept: "Natural-wood tones as background, transparent outline buttons, italic serif headlines. Full-bleed hero images you walk through, not look at.",
    result: "Three large projects acquired through the site. Briefings now arrive with a clear aesthetic intention instead of a vague gut feeling.",
    tags: ["Editorial Web", "Photography", "Brand"], image: raumform, mood: "warm", device: "phone", align: "left" },
  { year: "2024", name: "CreditPath", category: "Fintech · Trust",
    intro: "Get approved for your dream home — even if your credit isn't perfect. Trust, cast in pixels.",
    challenge: "A credit and mortgage advisor needed a presence that radiates seriousness without feeling cold. Trust is the conversion here.",
    concept: "Deep midnight blue, warm sun-yellow accent. Clear hierarchies, large headlines with highlight backgrounds, generous spacing.",
    result: "Pre-qualification submissions +180%. Initial calls start better informed — first-meeting close rate from 22% to 41%.",
    tags: ["Fintech UX", "Conversion", "Trust Design"], image: creditpath, mood: "corporate", device: "laptop-tablet", align: "right" },
  { year: "2024", name: "DentalLux", category: "Premium dentistry · Berlin",
    intro: "Your smile in the best hands. Medicine that feels like a great hotel.",
    challenge: "A premium dental practice wanting to escape clinical defaults. Convey expertise without creating distance.",
    concept: "Sage green and muted beige, soft display serif, a human hero portrait. Trust markers (reviews) integrated quietly, never pushy.",
    result: "Online appointments tripled. The share of self-pay treatments rose significantly — the site pre-qualifies.",
    tags: ["Healthcare UX", "Premium", "Local SEO"], image: dentallux, mood: "clinic", device: "tablet-laptop", align: "left" },
];

const Mockup = ({ src, alt, variant }: { src: string; alt: string; variant: Project["device"] }) => (
  <div className={`showcase-mockup rounded-[1.75rem] overflow-hidden ${variant === "phone" ? "tilt-left" : "tilt-right"}`}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

const ProjectScene = ({ p, index, labels }: { p: Project; index: number; labels: { ch: string; co: string; re: string; by: string } }) => {
  const isLeft = p.align === "left";
  const moodClass = `mood-${p.mood}`;
  return (
    <article className={`showcase-scene ${moodClass} scene-fade`}>
      <span className="floating-tag" style={{ top: 24, left: 24 }}>
        {String(index + 1).padStart(2, "0")} · {p.year}
      </span>
      <span className="floating-tag hidden md:inline-flex" style={{ top: 24, right: 24 }}>{p.category}</span>

      <div className="grid grid-cols-12 gap-8 md:gap-12 items-center mt-12 md:mt-8">
        <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-2"}`}>
          <Mockup src={p.image} alt={`${p.name} — ${labels.by}`} variant={p.device} />
        </div>
        <div className={`col-span-12 md:col-span-6 ${isLeft ? "" : "md:order-1"}`}>
          <p className="case-meta mb-3">{p.tags.join(" · ")}</p>
          <h2 className="font-display leading-[0.95] mb-5" style={{ fontSize: "clamp(2rem, 4.4vw, 3.6rem)", letterSpacing: "-0.02em" }}>{p.name}</h2>
          <p className="text-lg md:text-xl font-display italic leading-snug mb-8 opacity-90">{p.intro}</p>

          <div className="case-step">
            <p className="case-step-label flex items-center gap-2"><Sparkles size={11} /> {labels.ch}</p>
            <p className="leading-relaxed">{p.challenge}</p>
          </div>
          <div className="case-step">
            <p className="case-step-label flex items-center gap-2"><Compass size={11} /> {labels.co}</p>
            <p className="leading-relaxed">{p.concept}</p>
          </div>
          <div className="case-step">
            <p className="case-step-label flex items-center gap-2"><CheckCircle2 size={11} /> {labels.re}</p>
            <p className="leading-relaxed font-display text-xl opacity-95">{p.result}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projekte = () => {
  const { lang, path } = useLang();
  const data = lang === "en" ? projects_en : projects_de;
  const t = pick(lang,
    {
      seoTitle: "Projekte — Cinematic Portfolio · Marianna Kuzmenko",
      seoDesc: "Ausgewählte Webdesign- und Webentwicklungs-Projekte. Eine digitale Ausstellung mit Story, Konzept und Ergebnis.",
      eye: "05 — Projekte",
      h1A: "Eine digitale",
      h1B: "Ausstellung ",
      h1C: "in Kapiteln.",
      lead: "Kein Raster, keine Thumbnails. Jedes Projekt eine Bühne — mit eigener Stimmung, eigener Stimme, eigener Choreografie.",
      labels: { ch: "Challenge", co: "Concept", re: "Result", by: "Projekt von Marianna Kuzmenko" },
      ctaEye: "Nächstes Kapitel",
      ctaA: "Soll deins",
      ctaB: "das nächste sein?",
      ctaLead: "Eine Website, die wirkt wie deine Handschrift — und arbeitet wie ein gutes Team.",
      bWeb: "Webentwicklung",
      bSeo: "SEO Optimierung",
      bStart: "Projekt starten",
    },
    {
      seoTitle: "Selected Work — Cinematic Portfolio · Marianna Kuzmenko",
      seoDesc: "Selected web design and development projects. A digital exhibition with story, concept and result.",
      eye: "05 — Selected Work",
      h1A: "A digital",
      h1B: "exhibition ",
      h1C: "in chapters.",
      lead: "No grid, no thumbnails. Each project a stage — with its own mood, voice and choreography.",
      labels: { ch: "Challenge", co: "Concept", re: "Result", by: "Project by Marianna Kuzmenko" },
      ctaEye: "Next chapter",
      ctaA: "Should yours",
      ctaB: "be the next?",
      ctaLead: "A website that looks like your handwriting — and works like a good team.",
      bWeb: "Web Development",
      bSeo: "SEO Optimization",
      bStart: "Start a project",
    }
  );

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("work")}
        pathDe={ROUTES.work.de}
        pathEn={ROUTES.work.en}
      />

      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div className="blob blob-pink animate-float-slow" style={{ width: 420, height: 420, top: "-80px", right: "-80px" }} />
        <p className="eyebrow mb-6 relative">{t.eye}</p>
        <h1 className="display-xl relative">
          {t.h1A}<br />
          <span className="italic">{t.h1B}</span>
          <span className="text-rose">{t.h1C}</span>
        </h1>
        <div className="grid grid-cols-12 gap-6 mt-12 relative">
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-muted-foreground">{t.lead}</p>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-28 space-y-16 md:space-y-24">
        {data.map((p, i) => (
          <ProjectScene key={p.name} p={p} index={i} labels={t.labels} />
        ))}
      </section>

      <section className="container-editorial pb-28">
        <div className="card-soft p-10 md:p-16 text-center" style={{ background: "var(--gradient-sky)" }}>
          <p className="eyebrow mb-4">{t.ctaEye}</p>
          <h2 className="display-md mb-6">
            {t.ctaA}<br />
            <span className="italic text-rose">{t.ctaB}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.ctaLead}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={path("web")} className="btn-ghost-soft">{t.bWeb} <ArrowRight size={14} /></Link>
            <Link to={path("seo")} className="btn-ghost-soft">{t.bSeo} <ArrowRight size={14} /></Link>
            <a href={`${path("home")}#kontakt`} className="glow-btn">{t.bStart} <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
