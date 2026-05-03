import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

export interface BlogBlock {
  type: "p" | "h2" | "h3" | "quote" | "list" | "link";
  text?: string;
  items?: string[];
  to?: string;
  label?: string;
}

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
  related: string[];
  serviceLink?: { to: string; label: string };
  content: BlogBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "website-erstellen-lassen",
    n: "01",
    title: "Website erstellen lassen — worauf achten",
    excerpt:
      "Welche Fragen du stellen solltest, bevor du einen Freelancer Webdesigner beauftragst. Was wichtig ist und was nur Marketing.",
    date: "April 2026",
    readTime: "8 min",
    category: "Webdesign",
    image: blog1,
    imageAlt: "Soft pastel abstract shapes representing planning a website",
    related: ["seo-grundlagen", "ux-design-einfach-erklaert"],
    serviceLink: { to: "/webentwicklung", label: "Web Development" },
    content: [
      { type: "h2", text: "Einleitung" },
      { type: "p", text: "Eine Website erstellen lassen klingt simpel — bis du anfängst, Angebote zu vergleichen. Plötzlich reden alle über Templates, Conversion, Pixel, KPIs. Und am Ende fehlt das Wichtigste: ein klarer Kopf, mit dem du entscheidest, wem du dein digitales Zuhause anvertraust." },
      { type: "p", text: "Dieser Artikel ist ein ehrlicher Leitfaden — keine Verkaufsmasche. Wenn du danach besser weißt, was du willst (und was nicht), hat er seinen Zweck erfüllt." },

      { type: "h2", text: "1. Wer denkt mit?" },
      { type: "p", text: "Eine gute Website beginnt nicht mit Pixeln, sondern mit Struktur. Frag die Person gegenüber, wie sie an Inhalte herangeht, welche Fragen sie stellt, und ob sie dir auch mal widerspricht. Ein Webdesigner, der alles gut findet, ist kein Sparringspartner — sondern ein Ausführer." },
      { type: "h3", text: "Worauf du achten solltest" },
      { type: "list", items: [
        "Stellt die Person Fragen zu Zielgruppe und Ziel?",
        "Wird über Inhalte gesprochen, nicht nur über Layout?",
        "Gibt es einen klaren Prozess statt Bauchgefühl?",
      ]},

      { type: "h2", text: "2. Was passiert nach dem Launch?" },
      { type: "p", text: "Eine Website ist kein Projekt mit Enddatum, sondern ein lebendes System. Wartung, SEO, Updates, Inhalte — wer kümmert sich darum? Wer ist erreichbar, wenn nach drei Monaten etwas nicht mehr funktioniert?" },
      { type: "quote", text: "Templates sind günstig. Aber sie sind nicht deine Marke." },

      { type: "h2", text: "3. Wird SEO mitgedacht?" },
      { type: "p", text: "Wenn SEO ein Aufpreis ist, läuft etwas falsch. Sichtbarkeit gehört in die Struktur, nicht in ein Add-on. Eine sauber gebaute Seite ist die halbe SEO-Miete — alles andere ist Reparaturarbeit am bewegten Auto." },
      { type: "link", to: "/blog/seo-grundlagen", label: "Mehr dazu: SEO Grundlagen für Unternehmen" },

      { type: "h2", text: "Praktische Tipps" },
      { type: "list", items: [
        "Bitte um Beispiele aus echten Projekten — nicht aus Designaufträgen.",
        "Frag, wie viele Korrekturschleifen vereinbart sind.",
        "Lass dir den Umgang mit deinen Inhalten erklären.",
        "Kläre Eigentum: Domain, Hosting, Code — alles bei dir?",
      ]},

      { type: "h2", text: "Fazit" },
      { type: "p", text: "Eine Website ist eine Investition, kein Wegwerfprodukt. Nimm dir Zeit, frag nach, und arbeite mit Menschen, die mitdenken. Der günstigste Anbieter wird selten der günstigste am Ende des Jahres sein." },
    ],
  },
  {
    slug: "seo-grundlagen",
    n: "02",
    title: "SEO Grundlagen für Unternehmen",
    excerpt:
      "Die SEO Optimierung, die wirklich zählt — keine Tricks, sondern Fundament. Für Selbstständige und kleine Unternehmen in Deutschland.",
    date: "März 2026",
    readTime: "10 min",
    category: "SEO",
    image: blog2,
    imageAlt: "Magnifying glass over pastel data visualization",
    related: ["fehler-bei-websites", "website-erstellen-lassen"],
    serviceLink: { to: "/seo", label: "SEO Optimierung" },
    content: [
      { type: "h2", text: "Einleitung" },
      { type: "p", text: "SEO ist kein Hexenwerk. Es ist Sorgfalt — über Monate, nicht über Nacht. Wer ein Unternehmen führt, braucht keine SEO-Tricks, sondern ein Fundament, das trägt. Hier sind die Grundlagen, die wirklich zählen." },

      { type: "h2", text: "1. Technische Basis" },
      { type: "p", text: "Schnell, mobil, crawlbar. Wenn die Basis nicht stimmt, hilft kein Content der Welt. Google schaut zuerst, ob deine Seite überhaupt funktioniert — und entscheidet danach, ob sie es wert ist, sie zu verstehen." },
      { type: "h3", text: "Die wichtigsten Punkte" },
      { type: "list", items: [
        "Sauberes HTML & semantische Struktur",
        "Sinnvolle interne Verlinkung",
        "Schnelle Ladezeiten (Core Web Vitals)",
        "Mobile First — wirklich, nicht als Checkbox",
      ]},

      { type: "h2", text: "2. Inhalte mit Intent" },
      { type: "p", text: "Schreib für Menschen mit echten Fragen. Keywords sind der Anfang, nicht das Ziel. Wenn jemand nach einem Webdesigner in Deutschland sucht, will sie keine Synonyme — sondern jemanden, dem sie vertrauen kann." },
      { type: "quote", text: "Gutes SEO ist gutes Schreiben mit Strategie." },

      { type: "h2", text: "3. Struktur statt Stichwortdichte" },
      { type: "p", text: "Überschriften, Absätze, Listen — sie sind kein Designelement, sondern Orientierung. Für Leser:innen und Suchmaschinen gleichermaßen. Eine klare H2/H3-Hierarchie ist oft mehr wert als zehn zusätzliche Keywords." },

      { type: "h2", text: "4. Praktische Tipps" },
      { type: "list", items: [
        "Eine Seite — eine Hauptbotschaft",
        "Title und Meta-Description aktiv schreiben, nicht generieren lassen",
        "Bilder komprimieren und mit Alt-Text versehen",
        "Interne Links beschreibend formulieren statt nur zu verlinken",
      ]},
      { type: "link", to: "/blog/fehler-bei-websites", label: "Häufige Fehler vermeiden →" },

      { type: "h2", text: "Fazit" },
      { type: "p", text: "SEO ist nicht laut. Es ist die ruhige Arbeit im Hintergrund, die nach Monaten plötzlich Sinn ergibt. Fang früh an, bleib dran — und verlass dich auf jemanden, der erklärt statt verspricht." },
    ],
  },
  {
    slug: "ux-design-einfach-erklaert",
    n: "03",
    title: "UX Design einfach erklärt",
    excerpt:
      "UX/UI Design ist nicht Pixel-Schubsen. Wie gute Nutzerführung Conversions verändert — mit Beispielen aus echten Projekten.",
    date: "Februar 2026",
    readTime: "7 min",
    category: "UX/UI",
    image: blog3,
    imageAlt: "Hands sketching wireframes with a pink pen",
    related: ["website-erstellen-lassen", "fehler-bei-websites"],
    serviceLink: { to: "/webentwicklung", label: "Web Development" },
    content: [
      { type: "h2", text: "Einleitung" },
      { type: "p", text: "UX Design heißt: Menschen verstehen, bevor man gestaltet. Klingt einfach, ist es aber selten. Die meisten Websites werden gebaut, wie sich Marken sehen wollen — nicht wie ihre Nutzer:innen denken." },

      { type: "h2", text: "Hierarchie ist alles" },
      { type: "p", text: "Was zuerst gesehen wird, entscheidet alles. Lenke den Blick — gezielt, nicht laut. Ein einziges starkes Element schlägt zehn mittelmäßige." },
      { type: "h3", text: "Drei einfache Regeln" },
      { type: "list", items: [
        "Eine zentrale Botschaft pro Bildschirm",
        "Maximal ein Haupt-CTA",
        "Whitespace ist Inhalt — kein Defizit",
      ]},

      { type: "h2", text: "Mikrointeraktionen" },
      { type: "p", text: "Kleine Animationen, klare Feedbacks. Sie machen den Unterschied zwischen Frust und Freude. Ein Button, der reagiert, fühlt sich vertrauenswürdig an. Ein Formular, das erklärt, was schiefläuft, hält Menschen auf der Seite." },
      { type: "quote", text: "Gute UX ist unsichtbar. Schlechte fällt sofort auf." },

      { type: "h2", text: "Praktische Tipps" },
      { type: "list", items: [
        "Teste mit echten Menschen — drei reichen für viele Erkenntnisse",
        "Lies deine Texte laut, kürze, was nicht trägt",
        "Beobachte, wo Menschen zögern — dort liegt die Arbeit",
      ]},
      { type: "link", to: "/blog/website-erstellen-lassen", label: "Vorab: Website erstellen lassen — worauf achten" },

      { type: "h2", text: "Fazit" },
      { type: "p", text: "UX ist keine Magie, sondern Empathie mit Methode. Wer zuhört, baut bessere Websites — fast unabhängig vom Tool, vom Trend, vom Budget." },
    ],
  },
  {
    slug: "fehler-bei-websites",
    n: "04",
    title: "Fehler bei Websites",
    excerpt:
      "Die häufigsten Fehler auf modernen Websites — und warum sie SEO und Conversion gleichzeitig kaputtmachen.",
    date: "Januar 2026",
    readTime: "9 min",
    category: "Strategie",
    image: blog4,
    imageAlt: "Cracked phone screen in pastel colors symbolising broken websites",
    related: ["seo-grundlagen", "ux-design-einfach-erklaert"],
    serviceLink: { to: "/seo", label: "SEO Optimierung" },
    content: [
      { type: "h2", text: "Einleitung" },
      { type: "p", text: "Diese Fehler sehe ich immer wieder. Bei großen Marken, bei kleinen Selbstständigen — sie kosten echtes Geld, jeden Tag, leise im Hintergrund." },

      { type: "h2", text: "Die häufigsten Stolpersteine" },
      { type: "list", items: [
        "Hero ohne klare Botschaft",
        "Navigation, die niemand versteht",
        "Bilder ohne Alt-Texte",
        "CTAs, die alles und nichts wollen",
        "Mobile als Nachgedanke",
        "Kein klarer Kontaktweg",
      ]},

      { type: "h2", text: "Warum das mehr ist als Kosmetik" },
      { type: "p", text: "Jeder dieser Fehler trifft zwei Ebenen gleichzeitig: die Suchmaschine und den Menschen. Wenn deine Hauptaussage unklar ist, springt die eine ab und die andere versteht nicht, wofür du rankst." },
      { type: "quote", text: "Die meisten Conversion-Probleme sind in Wahrheit Klarheits-Probleme." },

      { type: "h2", text: "Praktische Tipps" },
      { type: "h3", text: "Drei Sofort-Maßnahmen" },
      { type: "list", items: [
        "Schreib deinen Hero-Text in einem Satz neu — was bietest du, für wen?",
        "Reduziere die Hauptnavigation auf maximal 5 Punkte",
        "Versieh jedes Bild mit einem beschreibenden Alt-Text",
      ]},
      { type: "link", to: "/blog/seo-grundlagen", label: "Mehr SEO-Grundlagen verstehen →" },

      { type: "h2", text: "Fazit" },
      { type: "p", text: "Die meisten dieser Fehler lassen sich in wenigen Tagen beheben — wenn jemand die richtigen Fragen stellt. Du brauchst keinen Relaunch. Du brauchst Klarheit." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getRelated = (slugs: string[]) => posts.filter((p) => slugs.includes(p.slug));
