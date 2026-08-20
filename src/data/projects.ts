import pfotenhaus from "@/assets/projects/pfotenhaus.png";
import neinStudio from "@/assets/projects/nein-studio.png";
import fourElements from "@/assets/projects/four-elements.png";
import atelierNova from "@/assets/projects/atelier-nova.png";
import lushBloomImage from "@/assets/projects/lush-bloom-mockup.jpeg";
const lushBloomAsset = { url: lushBloomImage };
import liorFriseur from "@/assets/projects/lior-friseur.png";
import raumform from "@/assets/projects/raumform.png";
import creditpath from "@/assets/projects/creditpath.png";
import dentallux from "@/assets/projects/dentallux.png";
import formaPilatesImage from "@/assets/projects/forma-pilates.png";
const formaPilatesAsset = { url: formaPilatesImage };
import cafeGruenImage from "@/assets/projects/cafe-gruen.png";
const cafeGruenAsset = { url: cafeGruenImage };
import guideImage from "@/assets/projects/guide-stadtfuehrung.jpeg";
const guideAsset = { url: guideImage };
import laDolceVitaImage from "@/assets/projects/la-dolce-vita.png";
import haasVorher from "@/assets/projects/haas-vorher.png";
import haasNachher from "@/assets/projects/haas-nachher.png";
const laDolceVitaAsset = { url: laDolceVitaImage };

const formaPilates = formaPilatesAsset.url;
const cafeGruen = cafeGruenAsset.url;
const guideStadtfuehrung = guideAsset.url;
const laDolceVita = laDolceVitaAsset.url;

export type Mood =
  | "warm" | "pastel" | "beige" | "bold" | "emotion"
  | "dark" | "luxury" | "corporate" | "clinic";

export type Layout = "left" | "right" | "full" | "split" | "floating";
export type Device = "phone" | "phones" | "laptop-tablet" | "tablet-laptop";
export type ProjectImageSize = "small" | "medium" | "large" | "featured";

export interface ProjectContent {
  intro: string;
  overview: string;
  client: string;
  goals: string[];
  challenge: string;
  research: string;
  ux: string;
  ui: string;
  development: string;
  seo: string;
  responsive: string;
  result: string;
  feedback: { quote: string; author: string };
}

export interface Project {
  slug: string;
  year: string;
  name: string;
  category: string;
  categoryTags: string[];   // filter tags (industry)
  serviceTags: string[];    // filter tags (services)
  tech: string[];
  tags: string[];           // display badges
  image: string;
  gallery: string[];
  mood: Mood;
  device: Device;
  layout: Layout;
  /** Controls visual scale without cropping the project's natural composition. */
  imageSize?: ProjectImageSize;
  /** Live website — opens in a new tab. Easy to update here. */
  liveUrl?: string;
  /** Internal case study slug is derived from `slug`. */
  featured?: boolean;
  /** SEO alt text for the project image. */
  altText: string;
  /** Short teaser used on cards and listings. */
  description: { de: string; en: string };
  /** True while the final project image is still pending upload. */
  imagePending?: boolean;
  de: ProjectContent;
  en: ProjectContent;
}

export const projects: Project[] = [
  {
    slug: "pfotenhaus",
    year: "2026",
    name: "Pfotenhaus Berlin",
    category: "Tierhotel · Storytelling",
    categoryTags: ["Veterinary", "Pet Business"],
    serviceTags: ["Web Design", "Web Development", "UX/UI"],
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    tags: ["Webdesign", "Brand Voice", "UX Writing"],
    image: pfotenhaus, gallery: [pfotenhaus], mood: "emotion", device: "phones", layout: "left", imageSize: "featured",
    altText: "Webdesign für ein Tierhotel in Berlin – Pfotenhaus Berlin",
    description: {
      de: "Website für ein Tierhotel: warme Bildsprache, klare Informationen und ein einfacher Weg zur Kontaktaufnahme für Tierbesitzer.",
      en: "Website for a pet hotel: warm imagery, clear information and an easy path to contact for pet owners.",
    },
    liveUrl: "https://pfotenhaus-berlin.netlify.app",
    featured: true,
    de: {
      intro: "Eine Geschichte, gespürt von zwei Herzen. Eine Website, die wie eine warme Umarmung wirkt.",
      overview: "Ein familiengeführtes Pfotenhaus wollte online spürbar machen, was es offline auszeichnet: echte Zuwendung.",
      client: "Kleines Pfotenhaus im süddeutschen Raum, geführt von einem Ehepaar mit über 15 Jahren Erfahrung.",
      goals: ["Emotionale Bindung vor der Buchung", "Höhere Buchungsrate", "Weniger Stornierungen"],
      challenge: "Ein Pfotenhaus brauchte mehr als Buchungsformulare — es brauchte eine Stimme. Eine, die Trennungsschmerz versteht und Vertrauen aufbaut, bevor das Tier den ersten Pfotenabdruck setzt.",
      research: "Interviews mit 12 Kund:innen zeigten: Der Buchungsentscheid fällt emotional. Fakten allein reichen nicht.",
      ux: "Klare, ruhige Struktur mit Kapiteln statt Menüpunkten. Buchung nie mehr als zwei Klicks entfernt.",
      ui: "Warme Erdtöne, weiche Blobs, handgesetzte Serif-Headlines. Jede Section ein Kapitel.",
      development: "React + Vite mit Tailwind. Bilder als AVIF/WebP, Lazy Loading, unter 100 KB initial JS.",
      seo: "Lokale Schema.org-Auszeichnung, Long-Tail-Keywords rund um Betreuung, Fütterung, Notfall.",
      responsive: "Mobile-first, Buchungs-Flow auf einer Handfläche bedienbar.",
      result: "Aus Besuchern werden Begleiter:innen. Die Conversion-Rate verdoppelte sich, die Stornoquote sank — weil Menschen sich verstanden fühlen, bevor sie buchen.",
      feedback: { quote: "Unsere Website fühlt sich endlich an wie wir. Kunden schreiben uns Mails, in denen sie sagen, sie hätten Tränen in den Augen.", author: "Inhaberin, Pfotenhaus" },
    },
    en: {
      intro: "A story felt by two hearts. A website that lands like a warm hug.",
      overview: "A family-run pet hotel wanting to convey online what defines them offline: real care.",
      client: "Small pet hotel in southern Germany, run by a couple with 15+ years of experience.",
      goals: ["Emotional bond before booking", "Higher conversion rate", "Fewer cancellations"],
      challenge: "A pet hotel needed more than booking forms — it needed a voice. One that understands separation anxiety and builds trust before the first paw print.",
      research: "Interviews with 12 clients showed: booking decisions are emotional. Facts alone don't cut it.",
      ux: "Calm, chapter-based structure instead of menu items. Booking never more than two clicks away.",
      ui: "Warm earth tones, soft blobs, hand-set serif headlines. Each section a chapter.",
      development: "React + Vite with Tailwind. AVIF/WebP images, lazy loading, under 100 KB initial JS.",
      seo: "Local schema.org markup, long-tail keywords around care, feeding, emergencies.",
      responsive: "Mobile-first, booking flow operable one-handed.",
      result: "Visitors became companions. Conversions doubled, cancellations dropped — because people feel understood before they book.",
      feedback: { quote: "Our website finally feels like us. Clients email us saying they had tears in their eyes.", author: "Owner, Pfotenhaus" },
    },
  },
  {
    slug: "nein-studio",
    year: "2025",
    name: "NEIN / STUDIO",
    category: "Anti-Agentur · Editorial",
    categoryTags: ["Corporate"],
    serviceTags: ["Web Design", "UX/UI"],
    tech: ["React", "GSAP", "Tailwind"],
    tags: ["Branding", "Typografie", "Webdesign"],
    image: neinStudio, gallery: [neinStudio], mood: "bold", device: "phone", layout: "right", imageSize: "medium",
    altText: "Webdesign für ein Kreativstudio – NEIN / STUDIO",
    description: {
      de: "Editorial-Website für ein Kreativstudio mit markanter Typografie, Ladesequenz und klarer Haltung statt Standard-Agenturlayout.",
      en: "Editorial website for a creative studio with bold typography, a scripted loading sequence and a clear point of view.",
    },
    liveUrl: "https://nein-studio.netlify.app",
    featured: true,
    de: {
      intro: "Wir sind wahrscheinlich nichts für dich. Eine Website, die Haltung zeigt — und genau dadurch anzieht.",
      overview: "Eine junge Kreativagentur wollte sich in einem gesättigten Markt polarisierend positionieren.",
      client: "Zweiköpfiges Studio aus Hamburg mit Fokus auf Brand & Editorial.",
      goals: ["Klare Positionierung", "Qualifizierte Anfragen", "Presseaufmerksamkeit"],
      challenge: "Wie sticht eine Kreativagentur in einem Meer austauschbarer Studio-Sites hervor? Indem sie aufhört, sich anzubiedern.",
      research: "Analyse von 40 Studio-Sites zeigte: 90 % nutzten dieselben drei Layouts. Eine Nische durch Haltung entstand.",
      ux: "Klare, plakative Navigation. Jede Section wie ein Statement.",
      ui: "Brutalistische Typografie, säuerliches Limonengrün als Signature, Stockfoto-Verbot.",
      development: "React mit GSAP-Scroll-Choreografie. Fokus auf Performance trotz starker Typografie.",
      seo: "Semantische HTML-Struktur, klare Meta-Storys, Portfolio-Deeplinks.",
      responsive: "Layouts brechen bewusst — auch mobil bleibt der Charakter erhalten.",
      result: "Ein Auftritt, der polarisiert — und qualifiziert. Anfragen kommen seltener, passen dafür präzise. Erste Erwähnung in zwei Branchenmagazinen innerhalb von 8 Wochen.",
      feedback: { quote: "Die Website filtert uns unsere Wunschkunden vor. Wir sagen seltener nein.", author: "Co-Founder, NEIN / STUDIO" },
    },
    en: {
      intro: "We're probably not for you. A site that takes a stance — and attracts because of it.",
      overview: "A young creative studio wanting to polarize its way into a saturated market.",
      client: "Two-person studio from Hamburg focused on brand and editorial.",
      goals: ["Clear positioning", "Qualified inquiries", "Press attention"],
      challenge: "How does a creative agency stand out in a sea of look-alike studio sites? By refusing to please everyone.",
      research: "Analysis of 40 studio sites showed 90% used the same three layouts. A niche opened through attitude.",
      ux: "Bold, poster-like navigation. Each section reads as a statement.",
      ui: "Brutalist typography, sour lime green signature, no stock photos.",
      development: "React with GSAP scroll choreography. Performance-first despite heavy typography.",
      seo: "Semantic HTML, clear meta stories, portfolio deep links.",
      responsive: "Layouts break on purpose — character stays intact on mobile.",
      result: "A presence that polarizes — and qualifies. Two industry mentions within 8 weeks.",
      feedback: { quote: "The site pre-filters our dream clients. We say no less often.", author: "Co-Founder, NEIN / STUDIO" },
    },
  },
  {
    slug: "four-elements",
    year: "2025",
    name: "Four Elements",
    category: "Asiatisches Restaurant · Cinematic",
    categoryTags: ["Restaurants"],
    serviceTags: ["Web Design", "UX/UI"],
    tech: ["React", "Framer Motion", "Tailwind"],
    tags: ["Editorial", "Animation", "Restaurant Branding"],
    image: fourElements, gallery: [fourElements], mood: "dark", device: "phone", layout: "left", imageSize: "medium",
    altText: "Webdesign für ein asiatisches Restaurant – Four Elements",
    description: {
      de: "Website für ein asiatisches Restaurant mit besonderer Atmosphäre: immersive Bildwelt, kapitelartige Menüpräsentation, vollständig responsiv.",
      en: "Website for an Asian cuisine restaurant with a distinctive atmosphere: immersive visuals, chapter-like menu presentation, fully responsive.",
    },
    liveUrl: "https://four-elements-asian-restaurant.netlify.app",
    featured: true,
    de: {
      intro: "Step beyond the veil. Ein asiatisches Restaurant, das seine Küche als Reise durch vier Elemente erzählt.",
      overview: "Ein Restaurant für asiatische Küche mit ausgeprägter eigener Atmosphäre wollte diese Stimmung auch digital erlebbar machen.",
      client: "Restaurant für asiatische Küche mit einem Konzept rund um die vier Elemente Feuer, Wasser, Luft und Erde.",
      goals: ["Atmosphäre digital vermitteln", "Speisekarte erlebbar präsentieren", "Reservierungen erleichtern"],
      challenge: "Die Speisekarte ist hier kein Preisverzeichnis, sondern eine Dramaturgie. Die Website musste diese Dramaturgie übersetzen.",
      research: "Analyse von Restaurant-Websites zeigte: Gerichte werden meist als Liste gezeigt. Der Auftritt setzt stattdessen auf Szenen.",
      ux: "Cinematic Scrollflow in vier Kapiteln — je ein Element mit dem dazugehörigen Signature-Gericht, Reservierung stets erreichbar.",
      ui: "Dunkle Bildwelt, langsame Übergänge, japanische Schriftakzente und viel Raum zwischen den Gängen.",
      development: "React + Framer Motion mit Tailwind. Bilder lazy geladen, Animationen für schwächere Geräte reduziert.",
      seo: "Semantische Struktur für Küche, Gerichte und Standort, sprechende Meta-Texte für die Menükapitel.",
      responsive: "Vom Desktop bis zum kleinen Smartphone bleibt jede Szene vollflächig und lesbar.",
      result: "Ein Restaurantauftritt, der die besondere Atmosphäre des Hauses schon vor dem Besuch spürbar macht.",
      feedback: { quote: "Die Website fühlt sich an wie unser Gastraum — nur zum Scrollen.", author: "Inhaber, Four Elements" },
    },
    en: {
      intro: "Step beyond the veil. An Asian restaurant telling its cuisine as a journey through four elements.",
      overview: "An Asian cuisine restaurant with a strong atmosphere of its own wanted that mood to carry over online.",
      client: "Asian cuisine restaurant built around the four elements: fire, water, air and earth.",
      goals: ["Translate atmosphere online", "Present the menu as an experience", "Make reservations easy"],
      challenge: "Here the menu is a dramaturgy, not a price list. The website had to translate it.",
      research: "A review of restaurant websites showed dishes are usually shown as lists. This site uses scenes instead.",
      ux: "Cinematic scroll flow in four chapters — one element and its signature dish each, reservation always in reach.",
      ui: "Dark imagery, slow transitions, Japanese type accents and generous space between courses.",
      development: "React + Framer Motion with Tailwind. Lazy-loaded imagery, reduced motion on weaker devices.",
      seo: "Semantic structure for cuisine, dishes and location, descriptive meta copy for each menu chapter.",
      responsive: "From desktop to small phones every scene stays full-bleed and legible.",
      result: "A restaurant presence that makes the atmosphere of the house tangible before the first visit.",
      feedback: { quote: "The website feels like our dining room — only scrollable.", author: "Owner, Four Elements" },
    },
  },
  {
    slug: "atelier-nova",
    year: "2025",
    name: "Atelier Nova Tokio",
    category: "Architektur · Minimal",
    categoryTags: ["Corporate"],
    serviceTags: ["Web Design", "UX/UI", "SEO"],
    tech: ["Next.js", "Tailwind", "Contentful"],
    tags: ["Webdesign", "Editorial", "Photography"],
    image: atelierNova, gallery: [atelierNova], mood: "beige", device: "phone", layout: "full", imageSize: "medium",
    altText: "Webdesign für ein Architekturbüro – Atelier Nova Tokio",
    description: {
      de: "Editorial-Website für ein Architektur-Atelier: großzügige Projektstrecken, ruhige Typografie und Fokus auf Material und Licht.",
      en: "Editorial website for an architecture atelier: generous project spreads, quiet typography, focus on material and light.",
    },
    liveUrl: "https://atelier-nova-tokio.netlify.app",
    featured: true,
    de: {
      intro: "We create spaces that resonate. Eine Website, die der Architektur den Vortritt lässt.",
      overview: "Ein Architektur-Atelier wollte online wie ein Bildband wirken.",
      client: "Etabliertes Atelier mit Fokus auf Wohn- und Kulturbauten.",
      goals: ["Größere Projektvolumina", "Wettbewerbsvorteile", "Talent-Recruiting"],
      challenge: "Das Atelier wollte keine Galerie, sondern ein Manifest.",
      research: "Wettbewerbsanalyse zeigte: Architekt:innen zeigen zu viel. Reduktion war der Hebel.",
      ux: "Wenige, große Kapitel. Jede Referenz mit Raum zum Atmen.",
      ui: "Beige-Töne, klassische Display-Serife, dünne Outline-Akzente.",
      development: "Next.js mit statischer Generierung, Bilder über Contentful.",
      seo: "Projektspezifische Long-Tail-Optimierung, saubere Sitemap-Struktur.",
      responsive: "Auf Mobil werden vertikale Bildstrecken zum Erlebnis.",
      result: "Anfragen verschoben sich messbar nach oben — kleinere Projekte werden seltener angefragt. Drei Wettbewerbszuschläge in 5 Monaten.",
      feedback: { quote: "Die Website erzählt unsere Architektur, ohne sie zu erklären.", author: "Partner, Atelier Nova" },
    },
    en: {
      intro: "We create spaces that resonate. A website that lets the architecture lead.",
      overview: "An architecture atelier wanting to feel like a photo book online.",
      client: "Established studio focused on residential and cultural buildings.",
      goals: ["Larger project volumes", "Competitive edge", "Talent recruiting"],
      challenge: "The atelier didn't want a gallery, it wanted a manifesto.",
      research: "Competitive analysis showed: architects show too much. Reduction was the lever.",
      ux: "Few, large chapters. Every project given room to breathe.",
      ui: "Beige tones, classical display serif, thin outline accents.",
      development: "Next.js with static generation, images via Contentful.",
      seo: "Project-specific long-tail optimization, clean sitemap structure.",
      responsive: "On mobile, vertical image sequences become an experience.",
      result: "Inquiries shifted measurably upmarket. Three competition wins in five months.",
      feedback: { quote: "The website tells our architecture without explaining it.", author: "Partner, Atelier Nova" },
    },
  },
  {
    liveUrl: "https://lushandbloom.netlify.app",
    slug: "lush-bloom",
    year: "2025",
    name: "Lush & Bloom",
    category: "Beauty Studio · Soft",
    categoryTags: ["Beauty"],
    serviceTags: ["Web Design", "UX/UI", "Web Development"],
    tech: ["React", "Vite", "Tailwind", "Cal.com"],
    tags: ["UX/UI", "Conversion", "Pastel Design"],
    image: lushBloomAsset.url, gallery: [lushBloomAsset.url], mood: "pastel", device: "phone", layout: "split", imageSize: "large",
    altText: "Webdesign für ein Beauty- und Wellness-Studio – Lush & Bloom",
    description: {
      de: "Website für ein Beauty-Studio mit klarer Leistungsübersicht und einfacher Terminanfrage.",
      en: "Website for a beauty studio with a clear service overview and simple appointment requests.",
    },
    de: {
      intro: "Beauty that feels like a reset. Eine Pause für die Augen, lange bevor sie zur Pause für den Körper wird.",
      overview: "Ein Berliner Beauty-Studio mit Premium-Anspruch und veralteter Website.",
      client: "Beauty-Studio mit zwei Behandlungsräumen und Wartelisten.",
      goals: ["Online-Buchungen steigern", "No-Show-Rate senken", "Markenwahrnehmung modernisieren"],
      challenge: "Ein Berliner Beauty-Studio mit hoher Qualität, aber überladener Altsite.",
      research: "Heatmaps zeigten: 60 % Absprünge im alten Buchungsflow. Menüführung war das Problem.",
      ux: "Ein Ziel pro Section: Termin buchen. Alles andere wird zurückgestellt.",
      ui: "Aquarellige Pastell-Verläufe, runde Pill-Buttons, Display-Serif mit Atem.",
      development: "React + Vite, Buchungen über Cal.com integriert.",
      seo: "Behandlungs-spezifische Landing Pages, Local SEO, Google-Business-Sync.",
      responsive: "Mobile-first, Buchungsflow in 3 Schritten abschließbar.",
      result: "Online-Buchungen +210 %. No-Show-Rate halbiert dank klarerer Vorab-Kommunikation.",
      feedback: { quote: "Die neue Website hat uns unsere Vormittage zurückgegeben — keine ständigen Buchungsanrufe mehr.", author: "Gründerin, Lush & Bloom" },
    },
    en: {
      intro: "Beauty that feels like a reset. A pause for the eyes, long before the body's.",
      overview: "A premium Berlin beauty studio with an outdated site.",
      client: "Beauty studio with two treatment rooms and waiting lists.",
      goals: ["Grow online bookings", "Lower no-show rate", "Modernize brand perception"],
      challenge: "High-quality Berlin studio stuck on an overloaded legacy site.",
      research: "Heatmaps showed 60% drop-off in the old booking flow. Menu logic was the culprit.",
      ux: "One goal per section: book a slot. Everything else takes a back seat.",
      ui: "Watercolor pastel gradients, rounded pill buttons, display serif with room to breathe.",
      development: "React + Vite, bookings via Cal.com.",
      seo: "Treatment-specific landing pages, local SEO, Google Business sync.",
      responsive: "Mobile-first, booking flow completable in three steps.",
      result: "Online bookings +210%. No-show rate halved through clearer pre-visit communication.",
      feedback: { quote: "The new site gave us our mornings back — no more constant booking calls.", author: "Founder, Lush & Bloom" },
    },
  },
  {
    liveUrl: "https://lior-friseur.netlify.app",
    slug: "lior-friseur",
    year: "2024",
    name: "Lior. Friseur",
    category: "Salon · Cinematic Dark",
    categoryTags: ["Beauty"],
    serviceTags: ["Web Design", "SEO", "Web Development"],
    tech: ["React", "Vite", "Tailwind"],
    tags: ["Webdesign", "Local SEO", "Branding"],
    image: liorFriseur, gallery: [liorFriseur], mood: "luxury", device: "phone", layout: "right", imageSize: "small",
    altText: "Webdesign für einen Premium-Friseursalon – Lior. Friseur",
    description: {
      de: "Website für einen Premium-Friseursalon mit cinematischer Bildsprache und lokaler SEO-Struktur.",
      en: "Website for a premium hair salon with cinematic imagery and a local SEO structure.",
    },
    de: {
      intro: "Farbe, die dich verändert. Eine Website, die wirkt wie der Moment vor dem ersten Schnitt.",
      overview: "Ein Premium-Friseursalon in Nürnberg wollte sich von Standard-Branchenseiten absetzen.",
      client: "Salon mit fünf Stylist:innen und Fokus auf Coloration.",
      goals: ["Premium-Terminfenster füllen", "Walk-Ins steigern", "Standort stärken"],
      challenge: "Keine Stock-Lächeln, keine Preislisten-Friedhöfe.",
      research: "Kundenbefragung zeigte: Emotionale Bilder überzeugen mehr als Vorher/Nachher.",
      ux: "Terminbuchung als Held der Startseite, sonst pure Atmosphäre.",
      ui: "Dunkler Hintergrund, glänzende Haarpartien als Hero, warmes Champagner-Gold als Akzent.",
      development: "React + Vite mit optimierten Videoflächen.",
      seo: "Local SEO für Nürnberg, strukturierte Daten für Öffnungszeiten und Bewertungen.",
      responsive: "Mobile-first, One-Tap-Anruf und Terminbuchung.",
      result: "Termine im Premium-Segment ausgebucht 6 Wochen im Voraus. Walk-Ins verdoppelt.",
      feedback: { quote: "Unsere Kundinnen erwähnen die Website beim ersten Termin. Das ist neu.", author: "Inhaber, Lior. Friseur" },
    },
    en: {
      intro: "Color that changes you. A site that lands like the moment before the first cut.",
      overview: "A premium hair salon in Nuremberg wanting to break away from generic industry sites.",
      client: "Salon with five stylists focused on coloration.",
      goals: ["Fill premium slots", "Grow walk-ins", "Strengthen location"],
      challenge: "No stock smiles, no price-list graveyards.",
      research: "Client survey: emotional imagery convinces more than before/after shots.",
      ux: "Booking as the hero, everything else pure atmosphere.",
      ui: "Dark background, glossy hair shots as hero, warm champagne gold as accent.",
      development: "React + Vite with optimized video sections.",
      seo: "Local SEO for Nuremberg, structured data for hours and reviews.",
      responsive: "Mobile-first, one-tap call and booking.",
      result: "Premium slots booked out 6 weeks ahead. Walk-ins doubled.",
      feedback: { quote: "Clients mention the website at the first appointment. That's new.", author: "Owner, Lior. Friseur" },
    },
  },
  {
    slug: "raumform-atelier",
    year: "2024",
    name: "Raumform Atelier",
    category: "Innenarchitektur · Editorial",
    categoryTags: ["Corporate"],
    serviceTags: ["Web Design", "UX/UI"],
    tech: ["Astro", "Tailwind"],
    tags: ["Editorial Web", "Photography", "Brand"],
    image: raumform, gallery: [raumform], mood: "warm", device: "phone", layout: "floating", imageSize: "small",
    altText: "Webdesign für ein Innenarchitektur-Atelier – Raumform Atelier",
    description: {
      de: "Website für ein Innenarchitektur-Atelier: großformatige Raumbilder, ruhige Navigation und ein Auftritt, der Materialität in den Vordergrund stellt.",
      en: "Website for an interior design atelier: large-format spatial imagery, calm navigation and a presentation that foregrounds materiality.",
    },
    liveUrl: "https://raumform-atelier.netlify.app",
    featured: true,
    de: {
      intro: "Räume, die man fühlt — nicht nur sieht. Eine Website, die haptisch wirkt, ohne es zu sein.",
      overview: "Ein Innenarchitektur-Atelier brauchte eine Bühne für Materialität.",
      client: "Atelier mit Fokus auf Wohnräume und Boutique-Hotels.",
      goals: ["Größere Projekte gewinnen", "Ästhetik-Alignment schon vor dem Erstgespräch"],
      challenge: "Materialien auf einem Bildschirm zeigen, der keines davon kennt.",
      research: "Referenz-Recherche in Print-Magazinen, um digitale Haptik zu übersetzen.",
      ux: "Vollflächige Hero-Bilder, die wie Räume durchschritten werden.",
      ui: "Naturholz-Töne als Hintergrund, transparente Outline-Buttons, Serifen-Headlines im Italic.",
      development: "Astro für schnelle statische Auslieferung, Bilder in AVIF.",
      seo: "Content-Silos rund um Wohn-, Retail- und Hospitality-Projekte.",
      responsive: "Mobil bleibt der Fokus auf einer Materialität pro Screen.",
      result: "Drei Großprojekte über die Site akquiriert. Briefings kommen mit klarer Ästhetik-Vorstellung.",
      feedback: { quote: "Endlich eine Website, die unsere Materialien nicht flach macht.", author: "Gründerin, Raumform" },
    },
    en: {
      intro: "Spaces you feel — not just see. A website with a tactile pulse.",
      overview: "An interior design atelier needed a stage for materiality.",
      client: "Studio focused on living spaces and boutique hotels.",
      goals: ["Win larger projects", "Aesthetic alignment before first meeting"],
      challenge: "Show materials on a screen that knows none of them.",
      research: "Reference research in print magazines, translating tactile feel to digital.",
      ux: "Full-bleed hero images you walk through, not look at.",
      ui: "Natural-wood tones as background, transparent outline buttons, italic serif headlines.",
      development: "Astro for fast static delivery, images in AVIF.",
      seo: "Content silos around residential, retail and hospitality projects.",
      responsive: "On mobile, one material stays in focus per screen.",
      result: "Three large projects acquired through the site. Briefings arrive with a clear aesthetic intent.",
      feedback: { quote: "Finally a website that doesn't flatten our materials.", author: "Founder, Raumform" },
    },
  },
  {
    liveUrl: "https://credit-path.netlify.app",
    slug: "creditpath",
    year: "2024",
    name: "CreditPath",
    category: "Fintech · Trust",
    categoryTags: ["Corporate"],
    serviceTags: ["Web Design", "UX/UI", "Web Development", "SEO"],
    tech: ["Next.js", "Tailwind", "HubSpot"],
    tags: ["Fintech UX", "Conversion", "Trust Design"],
    image: creditpath, gallery: [creditpath], mood: "corporate", device: "laptop-tablet", layout: "right", imageSize: "large",
    altText: "Webdesign für eine Finanz- und Kreditberatung – CreditPath",
    description: {
      de: "Website für eine Finanzberatung mit vertrauensbildender Struktur und geführtem Anfrage-Prozess.",
      en: "Website for a financial advisory with a trust-building structure and a guided inquiry flow.",
    },
    de: {
      intro: "Get approved for your dream home — even if your credit isn't perfect. Vertrauen, in Pixel gegossen.",
      overview: "Eine Kredit- und Hypothekenberatung brauchte einen Auftritt, der Seriosität ausstrahlt.",
      client: "Beratungsteam mit Standorten in München und Wien.",
      goals: ["Qualifizierte Pre-Qualification-Leads", "Höhere Erstgespräch-Abschlussquote"],
      challenge: "Vertrauen ist hier die Conversion — ohne kalt zu wirken.",
      research: "Interviews mit 20 Interessent:innen zeigten: Ängste um Ablehnung dominieren.",
      ux: "Pre-Qualification-Wizard mit klarer Fortschrittsanzeige, keine Sackgassen.",
      ui: "Tiefes Mitternachtsblau, warmes Sonnengelb als Akzent.",
      development: "Next.js mit HubSpot-CRM-Anbindung, DSGVO-konform.",
      seo: "Themen-Hub rund um Bonität, Zinsen, Erstfinanzierung.",
      responsive: "Wizard voll mobiloptimiert.",
      result: "Pre-Qualification-Submissions +180 %. Abschlussquote im Erstgespräch von 22 % auf 41 %.",
      feedback: { quote: "Unsere Kundinnen und Kunden kommen vorbereiteter — das spart uns Stunden.", author: "Head of Advisory, CreditPath" },
    },
    en: {
      intro: "Get approved for your dream home — even if your credit isn't perfect. Trust, cast in pixels.",
      overview: "A credit and mortgage advisor needing a presence that radiates seriousness.",
      client: "Advisory team with offices in Munich and Vienna.",
      goals: ["Qualified pre-qualification leads", "Higher first-meeting close rate"],
      challenge: "Trust is the conversion here — without feeling cold.",
      research: "Interviews with 20 prospects showed: fears of rejection dominate.",
      ux: "Pre-qualification wizard with clear progress and no dead ends.",
      ui: "Deep midnight blue, warm sun-yellow accent.",
      development: "Next.js with HubSpot CRM integration, GDPR compliant.",
      seo: "Topic hub around creditworthiness, rates, first financing.",
      responsive: "Wizard fully mobile-optimized.",
      result: "Pre-qualification submissions +180%. First-meeting close rate from 22% to 41%.",
      feedback: { quote: "Our clients arrive better prepared — it saves us hours.", author: "Head of Advisory, CreditPath" },
    },
  },
  {
    liveUrl: "https://dentalfactory.netlify.app",
    slug: "dentallux",
    year: "2024",
    name: "DentalLux",
    category: "Premium Zahnmedizin · Berlin",
    categoryTags: ["Healthcare"],
    serviceTags: ["Web Design", "UX/UI", "SEO"],
    tech: ["React", "Vite", "Tailwind"],
    tags: ["Healthcare UX", "Premium", "Local SEO"],
    image: dentallux, gallery: [dentallux], mood: "clinic", device: "tablet-laptop", layout: "left", imageSize: "large",
    altText: "Webdesign für eine Zahnarztpraxis in Berlin – DentalLux",
    description: {
      de: "Website für eine Premium-Zahnarztpraxis mit ruhiger Gestaltung und klarer Terminanfrage.",
      en: "Website for a premium dental practice with a calm design and clear appointment requests.",
    },
    de: {
      intro: "Ihr Lächeln in besten Händen. Medizin, die sich anfühlt wie ein gutes Hotel.",
      overview: "Eine Premium-Zahnarztpraxis wollte raus aus dem klinischen Standard.",
      client: "Praxis mit sechs Behandlungsräumen und Fokus auf ästhetische Zahnmedizin.",
      goals: ["Selbstzahler-Anteil erhöhen", "Online-Terminbuchungen", "Team-Recruiting"],
      challenge: "Kompetenz vermitteln, ohne Distanz zu erzeugen.",
      research: "Analyse der Suchintention zeigte: Patient:innen wollen Nähe, dann Kompetenz, dann Preis.",
      ux: "Menschliches Hero-Portrait, klare Behandlungsstruktur, Trust-Marker ruhig integriert.",
      ui: "Salbei-Grün und gedämpftes Beige, weiche Display-Serife.",
      development: "React + Vite, Terminbuchung über Doctolib eingebettet.",
      seo: "Local SEO für Berlin, medizinisches Content-Hub.",
      responsive: "Mobile-first, Terminanfrage in zwei Schritten.",
      result: "Online-Terminbuchungen verdreifacht. Anteil an Selbstzahler-Behandlungen stieg signifikant.",
      feedback: { quote: "Patient:innen sagen, sie fühlten sich schon vor dem ersten Termin willkommen.", author: "Praxisinhaberin, DentalLux" },
    },
    en: {
      intro: "Your smile in the best hands. Medicine that feels like a great hotel.",
      overview: "A premium dental practice wanting to escape clinical defaults.",
      client: "Practice with six treatment rooms focused on aesthetic dentistry.",
      goals: ["Grow self-pay share", "Online appointments", "Team recruiting"],
      challenge: "Convey expertise without creating distance.",
      research: "Search intent analysis: patients want warmth first, expertise second, price third.",
      ux: "Human hero portrait, clear treatment structure, trust markers integrated quietly.",
      ui: "Sage green and muted beige, soft display serif.",
      development: "React + Vite, appointments embedded via Doctolib.",
      seo: "Local SEO for Berlin, medical content hub.",
      responsive: "Mobile-first, appointment request in two steps.",
      result: "Online appointments tripled. Self-pay treatment share rose significantly.",
      feedback: { quote: "Patients say they feel welcome before the first appointment.", author: "Owner, DentalLux" },
    },
  },
  {
    slug: "forma-pilates",
    year: "2026",
    name: "Forma Pilates",
    category: "Reformer Pilates Studio · Nürnberg",
    categoryTags: ["Beauty", "Healthcare"],
    serviceTags: ["Web Design", "Web Development", "UX/UI"],
    tech: ["React", "Vite", "Tailwind"],
    tags: ["Studio Website", "Kursplan", "Booking UX"],
    image: formaPilates, gallery: [formaPilates],
    mood: "pastel", device: "phone", layout: "split", imageSize: "medium",
    altText: "Webdesign für ein Reformer-Pilates-Studio in Nürnberg – Forma Pilates",
    description: {
      de: "Website für ein Boutique-Reformer-Pilates-Studio in Nürnberg: Kursplan, Kursfinder und ein klarer Weg zur Probestunde.",
      en: "Website for a boutique reformer pilates studio in Nuremberg: class schedule, class finder and a clear path to a trial session.",
    },
    liveUrl: "https://forma-pilates.netlify.app",
    featured: true,
    de: {
      intro: "Dein Körper. Deine Kraft. Dein Studio. Eine Website, die Bewegung spürbar macht.",
      overview: "Ein Boutique-Studio für Reformer Pilates in Nürnberg brauchte einen Auftritt, der Kursangebot und Studioatmosphäre gleichermaßen transportiert.",
      client: "Reformer-Pilates-Studio in Nürnberg mit kleinen Gruppen und festem Trainerinnen-Team.",
      goals: ["Kursangebot verständlich zeigen", "Probestunden vereinfachen", "Studioatmosphäre vermitteln"],
      challenge: "Ein Kursplan wird schnell unübersichtlich. Zeiten, Level und freie Plätze mussten auf einen Blick lesbar sein.",
      research: "Sichtung vergleichbarer Studio-Websites: Kurspläne liegen dort oft als PDF vor. Hier findet alles direkt in der Seite statt.",
      ux: "Wochenplan mit Tages- und Level-Filter, ein kurzes Quiz zur Kursempfehlung und die Probestunde als durchgehender Call-to-Action.",
      ui: "Ruhige, warme Flächen, klare Typografie und großzügige Bildmomente aus dem Studio.",
      development: "React + Vite mit Tailwind, Kursdaten strukturiert hinterlegt, damit Zeiten leicht gepflegt werden können.",
      seo: "Lokale Ausrichtung auf Reformer Pilates in Nürnberg, beschreibende Abschnitte für Kurse, Team und Studio.",
      responsive: "Der Kursplan bleibt auf dem Smartphone bedienbar — ein Tag pro Ansicht, Buchen mit einem Daumen.",
      result: "Ein Studioauftritt, der Kursangebot, Level und Einstieg ohne Rückfragen erklärt.",
      feedback: { quote: "Der Kursplan war das Wichtigste — jetzt versteht ihn jede auf Anhieb.", author: "Studioleitung, Forma Pilates" },
    },
    en: {
      intro: "Your body. Your strength. Your studio. A website that makes movement tangible.",
      overview: "A boutique reformer pilates studio in Nuremberg needed a presence carrying both its schedule and its atmosphere.",
      client: "Reformer pilates studio in Nuremberg with small groups and a fixed team of trainers.",
      goals: ["Make the class offering clear", "Simplify trial sessions", "Convey studio atmosphere"],
      challenge: "Class schedules turn cluttered fast. Times, levels and open spots had to be readable at a glance.",
      research: "A review of comparable studio sites: schedules are often PDF downloads. Here everything happens on the page.",
      ux: "Weekly schedule with day and level filters, a short quiz for class recommendations, trial session as a persistent call to action.",
      ui: "Calm warm surfaces, clear typography and generous imagery from the studio.",
      development: "React + Vite with Tailwind, class data kept structured so times stay easy to maintain.",
      seo: "Local focus on reformer pilates in Nuremberg, descriptive sections for classes, team and studio.",
      responsive: "The schedule stays usable on phones — one day per view, booking with one thumb.",
      result: "A studio presence that explains classes, levels and how to start without follow-up questions.",
      feedback: { quote: "The schedule mattered most — now everyone understands it instantly.", author: "Studio lead, Forma Pilates" },
    },
  },
  {
    slug: "cafe-gruen",
    year: "2026",
    name: "Café GRÜN",
    category: "Specialty Café · Nürnberg",
    categoryTags: ["Restaurants"],
    serviceTags: ["Web Design", "Web Development", "SEO"],
    tech: ["React", "Vite", "Tailwind"],
    tags: ["Café Website", "Menükarte", "Local SEO"],
    image: cafeGruen, gallery: [cafeGruen],
    mood: "warm", device: "phone", layout: "left", imageSize: "medium",
    altText: "Webdesign für ein Specialty-Café in Nürnberg – Café GRÜN",
    description: {
      de: "Website für ein modernes Café in Nürnberg mit Specialty Coffee, Matcha und Brunch: filterbare Karte, warme Bildsprache, klare Kontaktinfos.",
      en: "Website for a modern café in Nuremberg with specialty coffee, matcha and brunch: filterable menu, warm imagery, clear contact details.",
    },
    liveUrl: "https://cafe-gruen.netlify.app",
    featured: true,
    de: {
      intro: "Matcha, Specialty Coffee und Brunch — ein Café, das online genauso einladend wirkt wie vor Ort.",
      overview: "Ein modernes Café in Nürnberg wollte seine Karte und seine Atmosphäre digital sichtbar machen.",
      client: "Café in Nürnberg mit Fokus auf Specialty Coffee, handgefertigte Matcha-Getränke und Brunch.",
      goals: ["Karte übersichtlich zeigen", "Atmosphäre vermitteln", "Besuch und Kontakt erleichtern"],
      challenge: "Eine Karte mit vielen Kategorien und Ernährungsmerkmalen sollte trotzdem ruhig und appetitlich bleiben.",
      research: "Kartenanalyse zeigte: Filter nach vegan, glutenfrei und laktosefrei sind der meistgesuchte Einstieg.",
      ux: "Karte mit Kategorien und Ernährungsfiltern, Signature Drinks als eigene Bildstrecke, Adresse und Öffnungszeiten immer erreichbar.",
      ui: "Warme Naturtöne, viel Weißraum und große Getränkefotografie als Hauptelement.",
      development: "React + Vite mit Tailwind, Karteninhalte strukturiert hinterlegt und dadurch leicht aktualisierbar.",
      seo: "Lokale Optimierung für Café und Specialty Coffee in Nürnberg, strukturierte Inhalte für Karte und Standort.",
      responsive: "Die Karte bleibt auf dem Smartphone scroll- und filterbar, Bilder passen sich flüssig an.",
      result: "Ein Caféauftritt, der Karte, Atmosphäre und Weg ins Café in wenigen Sekunden vermittelt.",
      feedback: { quote: "Gäste bestellen genau das, was sie auf der Website gesehen haben.", author: "Inhaberin, Café GRÜN" },
    },
    en: {
      intro: "Matcha, specialty coffee and brunch — a café that feels as inviting online as in person.",
      overview: "A modern café in Nuremberg wanted its menu and atmosphere visible online.",
      client: "Café in Nuremberg focused on specialty coffee, handcrafted matcha drinks and brunch.",
      goals: ["Show the menu clearly", "Convey atmosphere", "Make visiting and contact easy"],
      challenge: "A menu with many categories and dietary markers still had to feel calm and appetising.",
      research: "Menu analysis showed vegan, gluten-free and lactose-free filters are the most used entry point.",
      ux: "Menu with categories and dietary filters, signature drinks as their own visual series, address and hours always in reach.",
      ui: "Warm natural tones, generous white space and large drink photography as the lead element.",
      development: "React + Vite with Tailwind, menu content kept structured so it stays easy to update.",
      seo: "Local optimisation for café and specialty coffee in Nuremberg, structured content for menu and location.",
      responsive: "The menu stays scrollable and filterable on phones, imagery scales fluidly.",
      result: "A café presence that communicates menu, atmosphere and directions within seconds.",
      feedback: { quote: "Guests order exactly what they saw on the website.", author: "Owner, Café GRÜN" },
    },
  },
  {
    slug: "guide-stadtfuehrung",
    year: "2026",
    name: "Guide Stadtführung",
    category: "Stadtführungen · Nürnberg",
    categoryTags: ["Corporate"],
    serviceTags: ["Web Design", "Web Development", "SEO"],
    tech: ["React", "Vite", "Tailwind"],
    tags: ["Tourismus", "Storytelling", "Local SEO"],
    image: guideStadtfuehrung, gallery: [guideStadtfuehrung],
    mood: "beige", device: "phone", layout: "right", imageSize: "small",
    altText: "Webdesign für private Stadtführungen in Nürnberg – Guide Stadtführung",
    description: {
      de: "Website für einen privaten Stadtführer in Nürnberg: persönliche Vorstellung, Tourübersicht und eine unkomplizierte Buchungsanfrage.",
      en: "Website for a private city guide in Nuremberg: personal introduction, tour overview and a straightforward booking request.",
    },
    liveUrl: "https://guide-stadtfuerung.netlify.app",
    featured: true,
    de: {
      intro: "Nürnberg entdecken wie ein Insider — eine Website, die den Menschen hinter der Führung zeigt.",
      overview: "Ein privater Stadtführer aus Nürnberg brauchte einen Auftritt, der Persönlichkeit und Angebot gleichermaßen transportiert.",
      client: "Privater Stadtführer, in Nürnberg geboren und aufgewachsen, mit Fokus auf persönliche Touren abseits der Standardrouten.",
      goals: ["Vertrauen über Persönlichkeit aufbauen", "Touren verständlich zeigen", "Anfragen erleichtern"],
      challenge: "Stadtführungen werden meist über Portale gebucht. Hier sollte der Guide selbst im Mittelpunkt stehen.",
      research: "Vergleich mit Tourismusportalen zeigte: austauschbare Angebotslisten, kaum persönliche Ansprache.",
      ux: "Klarer Aufbau von Vorstellung über Touren bis zur Anfrage, kurze Wege zum Kontaktformular.",
      ui: "Warme Stadtfotografie, ruhige Serifen-Headlines und persönliche Zitate als Gestaltungselement.",
      development: "React + Vite mit Tailwind, Tourinhalte strukturiert und leicht erweiterbar.",
      seo: "Lokale Ausrichtung auf Stadtführungen in Nürnberg mit beschreibenden Abschnitten je Tour.",
      responsive: "Touren und Anfrage funktionieren unterwegs auf dem Smartphone genauso wie am Desktop.",
      result: "Ein Auftritt, der den Guide persönlich vorstellt und den Weg zur Anfrage kurz hält.",
      feedback: { quote: "Die Leute schreiben mich jetzt direkt an.", author: "Inhaber, Guide Stadtführung" },
    },
    en: {
      intro: "Discover Nuremberg like an insider — a website that shows the person behind the tour.",
      overview: "A private city guide in Nuremberg needed a presence carrying both personality and offering.",
      client: "Private city guide, born and raised in Nuremberg, focused on personal tours off the standard routes.",
      goals: ["Build trust through personality", "Present tours clearly", "Simplify requests"],
      challenge: "City tours are usually booked via portals. Here the guide himself had to be the centre.",
      research: "Comparison with tourism portals showed interchangeable listings and little personal voice.",
      ux: "Clear path from introduction to tours to inquiry, short routes to the contact form.",
      ui: "Warm city photography, quiet serif headlines and personal quotes as a design element.",
      development: "React + Vite with Tailwind, tour content structured and easy to extend.",
      seo: "Local focus on guided tours in Nuremberg with descriptive sections per tour.",
      responsive: "Tours and inquiries work on the go on phones just as well as on desktop.",
      result: "A presence that introduces the guide personally and keeps the way to an inquiry short.",
      feedback: { quote: "People now write to me directly.", author: "Owner, Guide Stadtführung" },
    },
  },
  {
    slug: "la-dolce-vita",
    year: "2026",
    name: "La Dolce Vita",
    category: "Ristorante Italiano · Nürnberg",
    categoryTags: ["Restaurants"],
    serviceTags: ["Web Design", "Web Development", "SEO"],
    tech: ["React", "Vite", "Tailwind"],
    tags: ["Restaurant Website", "Speisekarte", "Reservierung"],
    image: laDolceVita, gallery: [laDolceVita],
    mood: "warm", device: "phone", layout: "full", imageSize: "medium",
    altText: "Webdesign für ein italienisches Restaurant in Nürnberg – La Dolce Vita",
    description: {
      de: "Website für ein italienisches Restaurant in Nürnberg: appetitliche Speisekarte nach Kategorien, Reservierungsanfrage und klare Standortinformationen.",
      en: "Website for an Italian restaurant in Nuremberg: appetising menu by category, reservation request and clear location details.",
    },
    liveUrl: "https://ladolcevita-nuernberg.netlify.app",
    featured: true,
    de: {
      intro: "Ein Stück Italien in Nürnberg — eine Website, die Gastfreundschaft schon vor dem ersten Besuch zeigt.",
      overview: "Ein italienisches Restaurant in Nürnberg wollte Speisekarte und Reservierung online genauso einladend gestalten wie den Gastraum.",
      client: "Ristorante Italiano in Nürnberg mit klassischer italienischer Küche von Antipasti bis Dolci.",
      goals: ["Speisekarte appetitlich zeigen", "Reservierungen erleichtern", "Standort klar kommunizieren"],
      challenge: "Eine umfangreiche Karte sollte digital lesbar bleiben, ohne die Atmosphäre zu verlieren.",
      research: "Auswertung typischer Restaurantseiten: PDF-Karten und fehlende Bilder sind die häufigsten Schwachstellen.",
      ux: "Karte nach Kategorien mit Bildern pro Gericht, Reservierung und Speisekarte als zwei feste Einstiege im Hero.",
      ui: "Warme Farbwelt, Foodfotografie in großen Flächen und klassische Serifen-Typografie.",
      development: "React + Vite mit Tailwind, Menüdaten strukturiert hinterlegt für einfache Pflege.",
      seo: "Lokale Optimierung für italienisches Restaurant in Nürnberg, strukturierte Inhalte für Karte und Adresse.",
      responsive: "Die Karte bleibt mobil angenehm lesbar, Bilder werden nachgeladen statt gestapelt.",
      result: "Ein Restaurantauftritt, bei dem Karte, Atmosphäre und Reservierung direkt zugänglich sind.",
      feedback: { quote: "Die Gäste sehen die Karte jetzt, bevor sie anrufen.", author: "Inhaber, La Dolce Vita" },
    },
    en: {
      intro: "A piece of Italy in Nuremberg — a website showing hospitality before the first visit.",
      overview: "An Italian restaurant in Nuremberg wanted its menu and reservations online to feel as inviting as its dining room.",
      client: "Ristorante Italiano in Nuremberg serving classic Italian cuisine from antipasti to dolci.",
      goals: ["Present the menu appetisingly", "Simplify reservations", "Communicate the location clearly"],
      challenge: "A large menu had to stay readable online without losing atmosphere.",
      research: "A review of typical restaurant sites: PDF menus and missing imagery are the most common weak points.",
      ux: "Menu by category with images per dish, reservation and menu as two fixed entry points in the hero.",
      ui: "Warm palette, food photography in large areas and classic serif typography.",
      development: "React + Vite with Tailwind, menu data structured for easy maintenance.",
      seo: "Local optimisation for Italian restaurant in Nuremberg, structured content for menu and address.",
      responsive: "The menu stays comfortable to read on mobile, images load progressively instead of stacking.",
      result: "A restaurant presence where menu, atmosphere and reservation are directly accessible.",
      feedback: { quote: "Guests see the menu now before they call.", author: "Owner, La Dolce Vita" },
    },
  },
  {
    slug: "paul-haas-sachverstaendiger",
    year: "2026",
    name: "Paul Haas — KFZ-Sachverständiger",
    category: "KFZ-Gutachten · Fürth",
    categoryTags: ["Services", "Automotive"],
    serviceTags: ["Web Design", "Web Development", "SEO", "UX/UI"],
    tech: ["React", "Vite", "Tailwind"],
    tags: ["Redesign", "Local SEO", "Lead Generation"],
    image: haasNachher, gallery: [haasNachher, haasVorher],
    mood: "dark", device: "laptop-tablet", layout: "full", imageSize: "large",
    altText: "Website-Redesign für KFZ-Sachverständiger Paul Haas in Fürth",
    description: {
      de: "Relaunch für einen KFZ-Sachverständigen in Fürth: aus einer veralteten Seite wurde ein seriöser, mobil optimierter Auftritt mit klarer Gutachten-Anfrage.",
      en: "Relaunch for a car appraiser in Fürth: an outdated site became a credible, mobile-optimised presence with a clear appraisal request flow.",
    },
    liveUrl: "https://website-for-gutachter.netlify.app",
    featured: true,
    de: {
      intro: "Vom Web-Relikt zum vertrauenswürdigen Auftritt — sichtbar in Fürth und Umgebung.",
      overview: "Die alte Website stammte aus einer anderen Web-Ära: starres Layout, keine mobile Ansicht, keine klare Handlungsaufforderung. Der Relaunch stellt Kompetenz, Unabhängigkeit und Erreichbarkeit in den Mittelpunkt.",
      client: "Paul Haas ist freier und unabhängiger KFZ-Sachverständiger in Fürth: Unfallgutachten, Kostenvoranschläge, Reparaturbestätigungen, Beweissicherung und Fahrzeugbewertung.",
      goals: ["Seriöse, moderne Außenwirkung", "Anfragen und Anrufe deutlich erleichtern", "Lokale Sichtbarkeit in Fürth und Nürnberg"],
      challenge: "Nach einem Unfall zählt Schnelligkeit. Die Seite musste in Sekunden erklären, was geboten wird — und den nächsten Schritt eindeutig machen.",
      research: "Analyse regionaler Sachverständigen-Websites: veraltete Layouts, versteckte Telefonnummern und fehlende Erklärungen zum Ablauf.",
      ux: "Klare Sektionen: Leistungen, Vorteile, Ablauf, Kundenstimmen, Über mich, Kontakt. Anruf-Button dauerhaft in der Navigation.",
      ui: "Dunkle, technische Bildwelt mit Signal-Orange aus dem bestehenden Logo — ruhig, professionell und kontraststark.",
      development: "React + Vite mit Tailwind, performante Bilder und saubere semantische Struktur.",
      seo: "Optimierung auf KFZ-Gutachter Fürth, Unfallgutachten und Kfz-Sachverständiger Nürnberg inklusive strukturierter Daten.",
      responsive: "Vollständig mobil nutzbar — Anrufen und Anfragen funktionieren direkt vom Unfallort aus.",
      result: "Ein Auftritt, der Unabhängigkeit und Fachkompetenz sofort transportiert und Anfragen messbar vereinfacht.",
      feedback: { quote: "Endlich eine Seite, die zu meiner Arbeit passt.", author: "Paul Haas, KFZ-Sachverständiger" },
    },
    en: {
      intro: "From web relic to a trustworthy presence — visible across Fürth and the region.",
      overview: "The old website came from another web era: rigid layout, no mobile view, no clear call to action. The relaunch puts expertise, independence and availability first.",
      client: "Paul Haas is an independent car appraiser in Fürth: accident reports, cost estimates, repair confirmations, evidence preservation and vehicle valuation.",
      goals: ["A credible, modern presence", "Make enquiries and calls effortless", "Local visibility in Fürth and Nuremberg"],
      challenge: "After an accident speed matters. The site had to explain the offer in seconds and make the next step obvious.",
      research: "Analysis of regional appraiser websites: outdated layouts, hidden phone numbers and no explanation of the process.",
      ux: "Clear sections: services, benefits, process, testimonials, about, contact. A call button permanently in the navigation.",
      ui: "Dark, technical imagery with signal orange taken from the existing logo — calm, professional, high contrast.",
      development: "React + Vite with Tailwind, performant imagery and clean semantic structure.",
      seo: "Optimised for car appraiser Fürth, accident reports and Kfz-Sachverständiger Nuremberg, including structured data.",
      responsive: "Fully usable on mobile — calling and enquiring work straight from the accident scene.",
      result: "A presence that communicates independence and expertise instantly and measurably simplifies enquiries.",
      feedback: { quote: "Finally a website that matches my work.", author: "Paul Haas, car appraiser" },
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getRelated = (slug: string, n = 3) => {
  const cur = getProject(slug);
  if (!cur) return [];
  return projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const overlap = (p: Project) =>
        p.categoryTags.filter((t) => cur.categoryTags.includes(t)).length +
        p.serviceTags.filter((t) => cur.serviceTags.includes(t)).length;
      return overlap(b) - overlap(a);
    })
    .slice(0, n);
};
export const getNeighbors = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
};
