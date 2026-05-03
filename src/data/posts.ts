import blog1 from \u201C@/assets/blog-1.jpg\u201C;
import blog2 from \u201C@/assets/blog-2.jpg\u201C;
import blog3 from \u201C@/assets/blog-3.jpg\u201C;
import blog4 from \u201C@/assets/blog-4.jpg\u201C;

export interface BlogBlock {
  type: \u201Cp\u201C | \u201Ch2\u201C | \u201Ch3\u201C | \u201Cquote\u201C | \u201Clist\u201C | \u201Clink\u201C;
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
    slug: \u201Cwebsite-erstellen-lassen\u201C,
    n: \u201C01\u201C,
    title: \u201CWebsite erstellen lassen — worauf achten\u201C,
    excerpt:
      \u201CWelche Fragen du stellen solltest, bevor du einen Freelancer Webdesigner beauftragst. Was wichtig ist und was nur Marketing.\u201C,
    date: \u201CApril 2026\u201C,
    readTime: \u201C8 min\u201C,
    category: \u201CWebdesign\u201C,
    image: blog1,
    imageAlt: \u201CSoft pastel abstract shapes representing planning a website\u201C,
    related: [\u201Cseo-grundlagen\u201C, \u201Cux-design-einfach-erklaert\u201C],
    serviceLink: { to: \u201C/webentwicklung\u201C, label: \u201CWeb Development\u201C },
    content: [
      { type: \u201Ch2\u201C, text: \u201CEinleitung\u201C },
      { type: \u201Cp\u201C, text: \u201CEine Website erstellen lassen klingt simpel — bis du anfängst, Angebote zu vergleichen. Plötzlich reden alle über Templates, Conversion, Pixel, KPIs. Und am Ende fehlt das Wichtigste: ein klarer Kopf, mit dem du entscheidest, wem du dein digitales Zuhause anvertraust.\u201C },
      { type: \u201Cp\u201C, text: \u201CDieser Artikel ist ein ehrlicher Leitfaden — keine Verkaufsmasche. Wenn du danach besser weißt, was du willst (und was nicht), hat er seinen Zweck erfüllt.\u201C },

      { type: \u201Ch2\u201C, text: \u201C1. Wer denkt mit?\u201C },
      { type: \u201Cp\u201C, text: \u201CEine gute Website beginnt nicht mit Pixeln, sondern mit Struktur. Frag die Person gegenüber, wie sie an Inhalte herangeht, welche Fragen sie stellt, und ob sie dir auch mal widerspricht. Ein Webdesigner, der alles gut findet, ist kein Sparringspartner — sondern ein Ausführer.\u201C },
      { type: \u201Ch3\u201C, text: \u201CWorauf du achten solltest\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CStellt die Person Fragen zu Zielgruppe und Ziel?\u201C,
        \u201CWird über Inhalte gesprochen, nicht nur über Layout?\u201C,
        \u201CGibt es einen klaren Prozess statt Bauchgefühl?\u201C,
      ]},

      { type: \u201Ch2\u201C, text: \u201C2. Was passiert nach dem Launch?\u201C },
      { type: \u201Cp\u201C, text: \u201CEine Website ist kein Projekt mit Enddatum, sondern ein lebendes System. Wartung, SEO, Updates, Inhalte — wer kümmert sich darum? Wer ist erreichbar, wenn nach drei Monaten etwas nicht mehr funktioniert?\u201C },
      { type: \u201Cquote\u201C, text: \u201CTemplates sind günstig. Aber sie sind nicht deine Marke.\u201C },

      { type: \u201Ch2\u201C, text: \u201C3. Wird SEO mitgedacht?\u201C },
      { type: \u201Cp\u201C, text: \u201CWenn SEO ein Aufpreis ist, läuft etwas falsch. Sichtbarkeit gehört in die Struktur, nicht in ein Add-on. Eine sauber gebaute Seite ist die halbe SEO-Miete — alles andere ist Reparaturarbeit am bewegten Auto.\u201C },
      { type: \u201Clink\u201C, to: \u201C/blog/seo-grundlagen\u201C, label: \u201CMehr dazu: SEO Grundlagen für Unternehmen\u201C },

      { type: \u201Ch2\u201C, text: \u201CPraktische Tipps\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CBitte um Beispiele aus echten Projekten — nicht aus Designaufträgen.\u201C,
        \u201CFrag, wie viele Korrekturschleifen vereinbart sind.\u201C,
        \u201CLass dir den Umgang mit deinen Inhalten erklären.\u201C,
        \u201CKläre Eigentum: Domain, Hosting, Code — alles bei dir?\u201C,
      ]},

      { type: \u201Ch2\u201C, text: \u201CFazit\u201C },
      { type: \u201Cp\u201C, text: \u201CEine Website ist eine Investition, kein Wegwerfprodukt. Nimm dir Zeit, frag nach, und arbeite mit Menschen, die mitdenken. Der günstigste Anbieter wird selten der günstigste am Ende des Jahres sein.\u201C },
    ],
  },
  {
    slug: \u201Cseo-grundlagen\u201C,
    n: \u201C02\u201C,
    title: \u201CSEO Grundlagen für Unternehmen\u201C,
    excerpt:
      \u201CDie SEO Optimierung, die wirklich zählt — keine Tricks, sondern Fundament. Für Selbstständige und kleine Unternehmen in Deutschland.\u201C,
    date: \u201CMärz 2026\u201C,
    readTime: \u201C10 min\u201C,
    category: \u201CSEO\u201C,
    image: blog2,
    imageAlt: \u201CMagnifying glass over pastel data visualization\u201C,
    related: [\u201Cfehler-bei-websites\u201C, \u201Cwebsite-erstellen-lassen\u201C],
    serviceLink: { to: \u201C/seo\u201C, label: \u201CSEO Optimierung\u201C },
    content: [
      { type: \u201Ch2\u201C, text: \u201CEinleitung\u201C },
      { type: \u201Cp\u201C, text: \u201CSEO ist kein Hexenwerk. Es ist Sorgfalt — über Monate, nicht über Nacht. Wer ein Unternehmen führt, braucht keine SEO-Tricks, sondern ein Fundament, das trägt. Hier sind die Grundlagen, die wirklich zählen.\u201C },

      { type: \u201Ch2\u201C, text: \u201C1. Technische Basis\u201C },
      { type: \u201Cp\u201C, text: \u201CSchnell, mobil, crawlbar. Wenn die Basis nicht stimmt, hilft kein Content der Welt. Google schaut zuerst, ob deine Seite überhaupt funktioniert — und entscheidet danach, ob sie es wert ist, sie zu verstehen.\u201C },
      { type: \u201Ch3\u201C, text: \u201CDie wichtigsten Punkte\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CSauberes HTML & semantische Struktur\u201C,
        \u201CSinnvolle interne Verlinkung\u201C,
        \u201CSchnelle Ladezeiten (Core Web Vitals)\u201C,
        \u201CMobile First — wirklich, nicht als Checkbox\u201C,
      ]},

      { type: \u201Ch2\u201C, text: \u201C2. Inhalte mit Intent\u201C },
      { type: \u201Cp\u201C, text: \u201CSchreib für Menschen mit echten Fragen. Keywords sind der Anfang, nicht das Ziel. Wenn jemand \u201EWebdesigner Deutschland\u201C googelt, sucht sie nicht nach Synonymen — sondern nach jemandem, dem sie vertrauen kann.\u201C },
      { type: \u201Cquote\u201C, text: \u201CGutes SEO ist gutes Schreiben mit Strategie.\u201C },

      { type: \u201Ch2\u201C, text: \u201C3. Struktur statt Stichwortdichte\u201C },
      { type: \u201Cp\u201C, text: \u201CÜberschriften, Absätze, Listen — sie sind kein Designelement, sondern Orientierung. Für Leser:innen und Suchmaschinen gleichermaßen. Eine klare H2/H3-Hierarchie ist oft mehr wert als zehn zusätzliche Keywords.\u201C },

      { type: \u201Ch2\u201C, text: \u201C4. Praktische Tipps\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CEine Seite — eine Hauptbotschaft\u201C,
        \u201CTitle und Meta-Description aktiv schreiben, nicht generieren lassen\u201C,
        \u201CBilder komprimieren und mit Alt-Text versehen\u201C,
        \u201CInterne Links: nicht \u201Ehier klicken\u201C, sondern beschreibend\u201C,
      ]},
      { type: \u201Clink\u201C, to: \u201C/blog/fehler-bei-websites\u201C, label: \u201CHäufige Fehler vermeiden →\u201C },

      { type: \u201Ch2\u201C, text: \u201CFazit\u201C },
      { type: \u201Cp\u201C, text: \u201CSEO ist nicht laut. Es ist die ruhige Arbeit im Hintergrund, die nach Monaten plötzlich Sinn ergibt. Fang früh an, bleib dran — und verlass dich auf jemanden, der erklärt statt verspricht.\u201C },
    ],
  },
  {
    slug: \u201Cux-design-einfach-erklaert\u201C,
    n: \u201C03\u201C,
    title: \u201CUX Design einfach erklärt\u201C,
    excerpt:
      \u201CUX/UI Design ist nicht Pixel-Schubsen. Wie gute Nutzerführung Conversions verändert — mit Beispielen aus echten Projekten.\u201C,
    date: \u201CFebruar 2026\u201C,
    readTime: \u201C7 min\u201C,
    category: \u201CUX/UI\u201C,
    image: blog3,
    imageAlt: \u201CHands sketching wireframes with a pink pen\u201C,
    related: [\u201Cwebsite-erstellen-lassen\u201C, \u201Cfehler-bei-websites\u201C],
    serviceLink: { to: \u201C/webentwicklung\u201C, label: \u201CWeb Development\u201C },
    content: [
      { type: \u201Ch2\u201C, text: \u201CEinleitung\u201C },
      { type: \u201Cp\u201C, text: \u201CUX Design heißt: Menschen verstehen, bevor man gestaltet. Klingt einfach, ist es aber selten. Die meisten Websites werden gebaut, wie sich Marken sehen wollen — nicht wie ihre Nutzer:innen denken.\u201C },

      { type: \u201Ch2\u201C, text: \u201CHierarchie ist alles\u201C },
      { type: \u201Cp\u201C, text: \u201CWas zuerst gesehen wird, entscheidet alles. Lenke den Blick — gezielt, nicht laut. Ein einziges starkes Element schlägt zehn mittelmäßige.\u201C },
      { type: \u201Ch3\u201C, text: \u201CDrei einfache Regeln\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CEine zentrale Botschaft pro Bildschirm\u201C,
        \u201CMaximal ein Haupt-CTA\u201C,
        \u201CWhitespace ist Inhalt — kein Defizit\u201C,
      ]},

      { type: \u201Ch2\u201C, text: \u201CMikrointeraktionen\u201C },
      { type: \u201Cp\u201C, text: \u201CKleine Animationen, klare Feedbacks. Sie machen den Unterschied zwischen Frust und Freude. Ein Button, der reagiert, fühlt sich vertrauenswürdig an. Ein Formular, das erklärt, was schiefläuft, hält Menschen auf der Seite.\u201C },
      { type: \u201Cquote\u201C, text: \u201CGute UX ist unsichtbar. Schlechte fällt sofort auf.\u201C },

      { type: \u201Ch2\u201C, text: \u201CPraktische Tipps\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CTeste mit echten Menschen — drei reichen für viele Erkenntnisse\u201C,
        \u201CLies deine Texte laut, kürze, was nicht trägt\u201C,
        \u201CBeobachte, wo Menschen zögern — dort liegt die Arbeit\u201C,
      ]},
      { type: \u201Clink\u201C, to: \u201C/blog/website-erstellen-lassen\u201C, label: \u201CVorab: Website erstellen lassen — worauf achten\u201C },

      { type: \u201Ch2\u201C, text: \u201CFazit\u201C },
      { type: \u201Cp\u201C, text: \u201CUX ist keine Magie, sondern Empathie mit Methode. Wer zuhört, baut bessere Websites — fast unabhängig vom Tool, vom Trend, vom Budget.\u201C },
    ],
  },
  {
    slug: \u201Cfehler-bei-websites\u201C,
    n: \u201C04\u201C,
    title: \u201CFehler bei Websites\u201C,
    excerpt:
      \u201CDie häufigsten Fehler auf modernen Websites — und warum sie SEO und Conversion gleichzeitig kaputtmachen.\u201C,
    date: \u201CJanuar 2026\u201C,
    readTime: \u201C9 min\u201C,
    category: \u201CStrategie\u201C,
    image: blog4,
    imageAlt: \u201CCracked phone screen in pastel colors symbolising broken websites\u201C,
    related: [\u201Cseo-grundlagen\u201C, \u201Cux-design-einfach-erklaert\u201C],
    serviceLink: { to: \u201C/seo\u201C, label: \u201CSEO Optimierung\u201C },
    content: [
      { type: \u201Ch2\u201C, text: \u201CEinleitung\u201C },
      { type: \u201Cp\u201C, text: \u201CDiese Fehler sehe ich immer wieder. Bei großen Marken, bei kleinen Selbstständigen — sie kosten echtes Geld, jeden Tag, leise im Hintergrund.\u201C },

      { type: \u201Ch2\u201C, text: \u201CDie häufigsten Stolpersteine\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CHero ohne klare Botschaft\u201C,
        \u201CNavigation, die niemand versteht\u201C,
        \u201CBilder ohne Alt-Texte\u201C,
        \u201CCTAs, die alles und nichts wollen\u201C,
        \u201CMobile als Nachgedanke\u201C,
        \u201CKein klarer Kontaktweg\u201C,
      ]},

      { type: \u201Ch2\u201C, text: \u201CWarum das mehr ist als Kosmetik\u201C },
      { type: \u201Cp\u201C, text: \u201CJeder dieser Fehler trifft zwei Ebenen gleichzeitig: die Suchmaschine und den Menschen. Wenn deine Hauptaussage unklar ist, springt die eine ab und die andere versteht nicht, wofür du rankst.\u201C },
      { type: \u201Cquote\u201C, text: \u201CDie meisten Conversion-Probleme sind in Wahrheit Klarheits-Probleme.\u201C },

      { type: \u201Ch2\u201C, text: \u201CPraktische Tipps\u201C },
      { type: \u201Ch3\u201C, text: \u201CDrei Sofort-Maßnahmen\u201C },
      { type: \u201Clist\u201C, items: [
        \u201CSchreib deinen Hero-Text in einem Satz neu — was bietest du, für wen?\u201C,
        \u201CReduziere die Hauptnavigation auf maximal 5 Punkte\u201C,
        \u201CVersieh jedes Bild mit einem beschreibenden Alt-Text\u201C,
      ]},
      { type: \u201Clink\u201C, to: \u201C/blog/seo-grundlagen\u201C, label: \u201CMehr SEO-Grundlagen verstehen →\u201C },

      { type: \u201Ch2\u201C, text: \u201CFazit\u201C },
      { type: \u201Cp\u201C, text: \u201CDie meisten dieser Fehler lassen sich in wenigen Tagen beheben — wenn jemand die richtigen Fragen stellt. Du brauchst keinen Relaunch. Du brauchst Klarheit.\u201C },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getRelated = (slugs: string[]) => posts.filter((p) => slugs.includes(p.slug));
