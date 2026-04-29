import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

export interface BlogPost {
  slug: string;
  n: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  related: string[]; // slugs
  serviceLink?: { to: string; label: string };
  content: { type: "p" | "h2" | "quote" | "list"; text?: string; items?: string[] }[];
}

export const posts: BlogPost[] = [
  {
    slug: "website-erstellen-lassen",
    n: "01",
    title: "Website erstellen lassen — worauf achten",
    excerpt:
      "Welche Fragen du stellen solltest, bevor du einen Freelancer Webdesigner beauftragst. Was wichtig ist und was nur Marketing.",
    date: "April 2026",
    readTime: "6 min",
    category: "Webdesign",
    image: blog1,
    imageAlt: "Soft pastel abstract shapes representing planning a website",
    related: ["seo-grundlagen", "ux-design-einfach-erklaert"],
    serviceLink: { to: "/webentwicklung", label: "Web Development" },
    content: [
      { type: "p", text: "Eine Website erstellen lassen klingt simpel — bis du anfängst, Angebote zu vergleichen. Hier ein paar Fragen, die wirklich helfen." },
      { type: "h2", text: "1. Wer denkt mit?" },
      { type: "p", text: "Eine gute Website beginnt nicht mit Pixeln, sondern mit Struktur. Frag, wer deine Inhalte und Ziele wirklich versteht." },
      { type: "h2", text: "2. Was passiert nach dem Launch?" },
      { type: "p", text: "Eine Website ist kein Projekt mit Enddatum, sondern ein lebendes System. Wartung, SEO, Updates — wer kümmert sich darum?" },
      { type: "quote", text: "Templates sind günstig. Aber sie sind nicht deine Marke." },
      { type: "h2", text: "3. Wird SEO mitgedacht?" },
      { type: "p", text: "Wenn SEO ein Aufpreis ist, läuft etwas falsch. Sichtbarkeit gehört in die Struktur, nicht in ein Add-on." },
    ],
  },
  {
    slug: "seo-grundlagen",
    n: "02",
    title: "SEO Grundlagen für Unternehmen",
    excerpt:
      "Die SEO Optimierung, die wirklich zählt — keine Tricks, sondern Fundament. Für Selbstständige und kleine Unternehmen in Deutschland.",
    date: "März 2026",
    readTime: "8 min",
    category: "SEO",
    image: blog2,
    imageAlt: "Magnifying glass over pastel data visualization",
    related: ["fehler-bei-websites", "website-erstellen-lassen"],
    serviceLink: { to: "/seo", label: "SEO Optimierung" },
    content: [
      { type: "p", text: "SEO ist kein Hexenwerk. Es ist Sorgfalt. Hier die Grundlagen, die jedes Unternehmen verstehen sollte." },
      { type: "h2", text: "Technische Basis" },
      { type: "p", text: "Schnell, mobil, crawlbar. Wenn die Basis nicht stimmt, hilft kein Content der Welt." },
      { type: "h2", text: "Inhalte mit Intent" },
      { type: "p", text: "Schreib für Menschen mit echten Fragen. Keywords sind der Anfang, nicht das Ziel." },
      { type: "list", items: ["Sauberes HTML & semantische Struktur", "Sinnvolle interne Verlinkung", "Schnelle Ladezeiten (Core Web Vitals)", "Hochwertige, einzigartige Inhalte"] },
    ],
  },
  {
    slug: "ux-design-einfach-erklaert",
    n: "03",
    title: "UX Design einfach erklärt",
    excerpt:
      "UX/UI Design ist nicht Pixel-Schubsen. Wie gute Nutzerführung Conversions verändert — mit Beispielen aus echten Projekten.",
    date: "Februar 2026",
    readTime: "5 min",
    category: "UX/UI",
    image: blog3,
    imageAlt: "Hands sketching wireframes with a pink pen",
    related: ["website-erstellen-lassen", "fehler-bei-websites"],
    serviceLink: { to: "/webentwicklung", label: "Web Development" },
    content: [
      { type: "p", text: "UX Design heißt: Menschen verstehen, bevor man gestaltet. Klingt einfach, ist es aber selten." },
      { type: "h2", text: "Hierarchie ist alles" },
      { type: "p", text: "Was zuerst gesehen wird, entscheidet alles. Lenke den Blick — gezielt, nicht laut." },
      { type: "quote", text: "Gute UX ist unsichtbar. Schlechte fällt sofort auf." },
      { type: "h2", text: "Mikrointeraktionen" },
      { type: "p", text: "Kleine Animationen, klare Feedbacks. Sie machen den Unterschied zwischen Frust und Freude." },
    ],
  },
  {
    slug: "fehler-bei-websites",
    n: "04",
    title: "Fehler bei Websites",
    excerpt:
      "Die häufigsten Fehler auf modernen Websites — und warum sie SEO und Conversion gleichzeitig kaputtmachen.",
    date: "Januar 2026",
    readTime: "7 min",
    category: "Strategie",
    image: blog4,
    imageAlt: "Cracked phone screen in pastel colors symbolising broken websites",
    related: ["seo-grundlagen", "ux-design-einfach-erklaert"],
    serviceLink: { to: "/seo", label: "SEO Optimierung" },
    content: [
      { type: "p", text: "Diese Fehler sehe ich immer wieder. Und sie kosten echtes Geld." },
      { type: "list", items: ["Hero ohne klare Botschaft", "Navigation, die niemand versteht", "Bilder ohne Alt-Texte", "CTAs, die alles und nichts wollen", "Mobile als Nachgedanke"] },
      { type: "h2", text: "Die gute Nachricht" },
      { type: "p", text: "Die meisten dieser Fehler lassen sich in wenigen Tagen beheben — wenn jemand die richtigen Fragen stellt." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getRelated = (slugs: string[]) => posts.filter((p) => slugs.includes(p.slug));
