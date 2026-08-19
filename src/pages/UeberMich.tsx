import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { ConversionCta } from "@/components/site/ConversionCta";
import { MockupShowcase } from "@/components/site/MockupShowcase";
import { StatsSection } from "@/components/site/StatsSection";
import { Testimonials } from "@/components/site/Testimonials";
import { ResultsSection } from "@/components/site/ResultsSection";
import { useParallax } from "@/hooks/useParallax";
import {
  ArrowUpRight,
  GraduationCap,
  Palette,
  Layers,
  Code2,
  Search,
  Users,
  CircleDot,
  Smartphone,
  Compass,
  ShieldCheck,
  MessageCircle,
  Gauge,
  Handshake,
  PenTool,
  Braces,
  Component,
  Boxes,
  Monitor,
  ImageIcon,
  Brush,
  BarChart3,
  Building2,
  Leaf,
  Cloud,
  Type,
  Camera,
  Lightbulb,
  Coffee,
  Globe2,
  BookOpen,
  Heart,
} from "lucide-react";
import portraitWindow from "@/assets/portraits/marianna-portrait-window.jpeg";
import portraitPampas from "@/assets/portraits/marianna-portrait-pampas.jpeg";
import studioChairAsset from "@/assets/portraits/marianna-studio-chair.jpeg.asset.json";
const portraitStudio = studioChairAsset.url;
import portraitSuit from "@/assets/portraits/marianna-portrait-suit.jpeg";
import portraitLaptop from "@/assets/portraits/marianna-laptop-coffee.jpeg";
import workspace from "@/assets/workspace.jpg";
import projectPfotenhaus from "@/assets/projects/pfotenhaus.png";
import projectDental from "@/assets/projects/dentallux.png";
import projectAtelier from "@/assets/projects/atelier-nova.png";
import projectLushImage from "@/assets/projects/lush-bloom-mockup.jpeg";
const projectLushAsset = { url: projectLushImage };
import projectRaum from "@/assets/projects/raumform.png";
import certUxui from "@/assets/certificates/genius-uxui.jpg";
import certReact from "@/assets/certificates/shecodes-react.png";
import certResponsive from "@/assets/certificates/shecodes-responsive.png";
import certMarketing from "@/assets/certificates/para-marketing.jpg";
import { useLang, pick } from "@/i18n/LanguageContext";

const UeberMich = () => {
  const { lang, path } = useLang();
  const collageA = useParallax(0.05);
  const collageB = useParallax(-0.05);

  const t = pick(
    lang,
    {
      seoTitle: "Über mich | Webdesignerin & Webentwicklerin aus Nürnberg | Marianna Kuzmenko",
      seoDesc:
        "Marianna Kuzmenko — Webdesign, Webentwicklung, UX/UI und SEO aus Nürnberg. Moderne, responsive Websites für Unternehmen in Bayern, Deutschland, Österreich und der Schweiz.",

      heroEye: "Über mich",
      heroTitleA: "Web Design, Entwicklung & SEO —",
      heroTitleB: "persönlich, kreativ und mit Strategie.",
      heroLead:
        "Ich bin Marianna Kuzmenko, Webdesignerin und Webentwicklerin aus Nürnberg. Ich gestalte moderne Websites für Unternehmen, die online professionell wirken, Vertrauen aufbauen und bei Google sichtbarer werden möchten.",
      ctaWork: "Meine Projekte",
      ctaTalk: "Kostenloses Erstgespräch",
      heroCap1: "UX/UI Design",
      heroCap2: "SEO-optimiert",
      heroCap3: "Responsive",

      introEye: "Persönlich",
      introTitle: "Schön, dass Sie da sind.",
      introP: [
        "Mein Name ist Marianna Kuzmenko. Ich arbeite als Webdesignerin, Webentwicklerin und UX/UI Designerin in Nürnberg — und betreue Kundinnen und Kunden in ganz Bayern, Deutschland, Österreich und der Schweiz.",
        "Zum Webdesign kam ich über die Neugier: Wie entsteht aus einer Idee eine Seite, die Menschen wirklich verstehen? Seitdem gestalte und entwickle ich Websites selbst — vom ersten Wireframe bis zum fertigen Code.",
        "UX/UI ist für mich kein Zusatz, sondern der Kern. Eine Website darf schön sein, aber sie muss vor allem führen: klare Struktur, ruhige Navigation, verständliche Inhalte.",
        "SEO denke ich von Anfang an mit. Struktur, Ladezeit, Inhalte und Technik entscheiden gemeinsam darüber, ob Sie bei Google gefunden werden — nachträglich lässt sich das nur teuer reparieren.",
        "Am liebsten arbeite ich direkt mit Inhaberinnen und Inhabern zusammen. Kurze Wege, ehrliche Antworten, keine Agentur-Kette dazwischen. So entstehen Websites, die zum Unternehmen passen — nicht zur Vorlage.",
      ],

      wayEye: "Mein Weg",
      wayTitle: "Vom ersten Wireframe bis heute.",
      way: [
        { icon: GraduationCap, k: "Lernen & Ausbildung", d: "Strukturierte Weiterbildungen in Web-Grundlagen, Responsive Design, React und UX/UI." },
        { icon: Palette, k: "Web Design", d: "Erste Gestaltungsprojekte: Typografie, Farbe, Layout und visuelle Hierarchie." },
        { icon: Layers, k: "UX/UI Design", d: "Nutzerführung, Wireframes und Prototypen in Figma — Design mit Begründung." },
        { icon: Code2, k: "Webentwicklung", d: "Eigene Umsetzung in HTML, CSS, JavaScript und React statt Baukasten." },
        { icon: Search, k: "SEO & Digital Marketing", d: "Technisches SEO, Inhalte und lokale Sichtbarkeit für den DACH-Markt." },
        { icon: Users, k: "Kundenprojekte", d: "Reale Projekte für Studios, Praxen, Dienstleister und kleine Marken." },
        { icon: CircleDot, k: "Heute", d: "Websites, die gestalterisch, technisch und strategisch zusammenpassen." },
      ],

      svcEye: "Was ich mache",
      svcTitle: "Sechs Leistungen, ein Ergebnis.",
      svc: [
        { icon: Palette, k: "Web Design", d: "Individuelles Design, das Ihre Marke trägt — kein Template.", to: "web" },
        { icon: Code2, k: "Webentwicklung", d: "Sauber entwickelt, schnell und wartbar in modernem Code.", to: "web" },
        { icon: Layers, k: "UX/UI Design", d: "Nutzerführung, die Besucher ruhig zum nächsten Schritt bringt.", to: "web" },
        { icon: Search, k: "SEO", d: "Technische Basis, Struktur und Inhalte für bessere Sichtbarkeit.", to: "seo" },
        { icon: Compass, k: "Digitale Strategie", d: "Ziele, Zielgruppe und Inhalte werden vor dem Design geklärt.", to: "pricing" },
        { icon: Smartphone, k: "Responsive Design", d: "Perfekte Darstellung auf Smartphone, Tablet und Desktop.", to: "web" },
      ],
      svcLink: "Mehr erfahren",

      philEye: "Design-Philosophie",
      philQuote:
        "Eine gute Website muss nicht nur schön aussehen. Sie muss Vertrauen schaffen, Informationen verständlich machen und Menschen zu einer Entscheidung führen.",
      philPoints: [
        "Vertrauen aufbauen",
        "Informationen verständlich machen",
        "Mobil einwandfrei funktionieren",
        "Schnell laden",
        "Bei Google sichtbar sein",
        "Zur Handlung führen",
        "Das Unternehmen wachsen lassen",
      ],

      diffEye: "Warum ich anders arbeite",
      diffTitle: "Acht Dinge, die den Unterschied machen.",
      diff: [
        { icon: Brush, k: "Individuelles Design", d: "Jedes Projekt beginnt bei Ihnen — nicht bei einer Vorlage." },
        { icon: ShieldCheck, k: "Keine Templates", d: "Struktur und Gestaltung entstehen für Ihr Angebot." },
        { icon: MessageCircle, k: "Persönliche Kommunikation", d: "Sie sprechen direkt mit mir, nicht mit einem Ticketsystem." },
        { icon: Search, k: "SEO von Anfang an", d: "Sichtbarkeit ist Teil der Planung, nicht ein Nachtrag." },
        { icon: Smartphone, k: "Responsive Entwicklung", d: "Mobil zuerst gedacht, überall sauber umgesetzt." },
        { icon: Layers, k: "Klare Struktur", d: "Ruhige Navigation und Inhalte, die man sofort versteht." },
        { icon: BarChart3, k: "Business-orientiert", d: "Design mit Blick auf Anfragen, nicht nur auf Ästhetik." },
        { icon: Handshake, k: "Langfristige Betreuung", d: "Auch nach dem Launch bleibe ich ansprechbar." },
      ],

      procEye: "Arbeitsweise",
      procTitle: "So entsteht eine Website.",
      proc: [
        { k: "Discovery", d: "Ziele, Zielgruppe und Wettbewerb verstehen." },
        { k: "Strategie", d: "Struktur, Inhalte und Keywords festlegen." },
        { k: "UX/UI Design", d: "Wireframes und Gestaltung in Figma." },
        { k: "Entwicklung", d: "Saubere Umsetzung in modernem Code." },
        { k: "SEO", d: "Technik, Metadaten und Inhalte optimieren." },
        { k: "Testing", d: "Geräte, Browser, Tempo und Barrierefreiheit." },
        { k: "Launch", d: "Livegang inklusive Einrichtung und Übergabe." },
        { k: "Support", d: "Pflege, Erweiterungen und Weiterentwicklung." },
      ],

      deskEye: "Mein Creative Desk",
      deskTitle: "Wo die Arbeit entsteht.",
      deskLead:
        "Figma, Code-Editor, Kaffee und viel Ruhe. Hier entstehen Layouts, Prototypen und die fertige Website — Schritt für Schritt.",
      deskTags: ["Figma", "UX Sketches", "Farbpalette", "Responsive Testing"],

      insightEye: "Einblick in meine Arbeit",
      insightTitle: "Zwischen Skizze und Code.",
      insightLead: "Ein paar Momente aus dem Alltag: Planen, Gestalten, Entwickeln, Prüfen.",

      toolEye: "Mein Toolkit",
      toolTitle: "Werkzeuge, mit denen ich täglich arbeite.",
      tools: [
        { icon: PenTool, k: "Figma" },
        { icon: Code2, k: "HTML" },
        { icon: Boxes, k: "CSS" },
        { icon: Braces, k: "JavaScript" },
        { icon: Component, k: "Bootstrap" },
        { icon: Component, k: "React" },
        { icon: Monitor, k: "VS Code" },
        { icon: ImageIcon, k: "Photoshop" },
        { icon: Brush, k: "Illustrator" },
        { icon: Search, k: "SEO Tools" },
        { icon: BarChart3, k: "Google Analytics" },
        { icon: Gauge, k: "PageSpeed" },
      ],

      inspEye: "Was mich inspiriert",
      inspTitle: "Woher die Ideen kommen.",
      insp: [
        { icon: Building2, k: "Moderne Architektur", d: "Klare Linien und Proportion." },
        { icon: Leaf, k: "Minimalistische Interiors", d: "Ruhe durch Weglassen." },
        { icon: Cloud, k: "Himmel & Licht", d: "Weiche Farbverläufe, sanfte Übergänge." },
        { icon: Type, k: "Typografie", d: "Schrift als Stimme einer Marke." },
        { icon: Camera, k: "Fotografie", d: "Bildsprache mit Atmosphäre." },
        { icon: Lightbulb, k: "Digitale Produkte", d: "Interfaces, die sich selbst erklären." },
      ],

      factEye: "Ein paar Dinge über mich",
      facts: [
        { icon: CircleDot, k: "Kreativ & neugierig" },
        { icon: BookOpen, k: "Immer am Lernen" },
        { icon: Heart, k: "Liebe zu minimalem Design" },
        { icon: Coffee, k: "Kaffee & kreative Arbeit" },
        { icon: MessageCircle, k: "Mehrsprachig unterwegs" },
        { icon: Globe2, k: "Kunden in ganz Europa" },
      ],

      certEye: "Zertifikate",
      certTitle: "Ausbildung, die belegbar ist.",
      certLead: "UX/UI, React, Responsive Design und Digital Marketing — dokumentiert und nachprüfbar.",
      certCta: "Alle Zertifikate ansehen",

      projEye: "Ein Blick auf meine Projekte",
      projTitle: "Drei Arbeiten, drei Branchen.",
      projCta: "Projekt entdecken",
      projAll: "Alle Projekte ansehen",

      linkEye: "Weiterlesen",
      linkTitle: "Wohin als Nächstes?",
      links: [
        { k: "Webentwicklung", d: "Wie ich Websites technisch umsetze.", to: "web" as const },
        { k: "SEO Nürnberg", d: "Sichtbarkeit für den DACH-Markt.", to: "seo" as const },
        { k: "Preise", d: "Transparente Pakete und Leistungen.", to: "pricing" as const },
        { k: "Blog", d: "Gedanken zu Design, Technik und SEO.", to: "blog" as const },
        { k: "Zertifikate", d: "Ausbildung und Nachweise.", to: "certs" as const },
        { k: "Kontakt", d: "Direkt schreiben oder anrufen.", to: "contact" as const },
      ],

      finalTitle: "Lassen Sie uns gemeinsam eine Website entwickeln, die Ihr Unternehmen sichtbar macht.",
      finalLead:
        "Erzählen Sie mir kurz von Ihrem Vorhaben. Im ersten Gespräch klären wir Ziele, Umfang und Zeitrahmen — unverbindlich und ohne Verkaufsdruck.",
      finalPrimary: "Kostenloses Erstgespräch",
      finalSecondary: "Meine Projekte ansehen",
    },
    {
      seoTitle: "About | Web Designer & Developer in Nuremberg | Marianna Kuzmenko",
      seoDesc:
        "Marianna Kuzmenko — web design, development, UX/UI and SEO from Nuremberg. Modern, responsive websites for businesses in Germany, Austria and Switzerland.",

      heroEye: "About me",
      heroTitleA: "Web design, development & SEO —",
      heroTitleB: "personal, creative and strategic.",
      heroLead:
        "I'm Marianna Kuzmenko, a web designer and developer based in Nuremberg. I build modern websites for businesses that want to look professional online, earn trust and become more visible on Google.",
      ctaWork: "My projects",
      ctaTalk: "Free first call",
      heroCap1: "UX/UI Design",
      heroCap2: "SEO optimised",
      heroCap3: "Responsive",

      introEye: "Personal",
      introTitle: "Good to have you here.",
      introP: [
        "My name is Marianna Kuzmenko. I work as a web designer, developer and UX/UI designer in Nuremberg — with clients across Bavaria, Germany, Austria and Switzerland.",
        "I came to web design through curiosity: how does an idea turn into a page people actually understand? Since then I design and build websites myself — from the first wireframe to the finished code.",
        "UX/UI isn't an add-on for me, it's the core. A website may be beautiful, but above all it has to guide: clear structure, calm navigation, understandable content.",
        "SEO is part of the plan from day one. Structure, speed, content and technology decide together whether you are found on Google — fixing that later is expensive.",
        "I prefer working directly with owners. Short paths, honest answers, no agency chain in between. That's how websites end up matching the business, not the template.",
      ],

      wayEye: "My path",
      wayTitle: "From the first wireframe until today.",
      way: [
        { icon: GraduationCap, k: "Learning & education", d: "Structured training in web fundamentals, responsive design, React and UX/UI." },
        { icon: Palette, k: "Web design", d: "First design work: typography, colour, layout and visual hierarchy." },
        { icon: Layers, k: "UX/UI design", d: "User flows, wireframes and prototypes in Figma — design with reasons." },
        { icon: Code2, k: "Web development", d: "Building in HTML, CSS, JavaScript and React instead of page builders." },
        { icon: Search, k: "SEO & digital marketing", d: "Technical SEO, content and local visibility for the DACH market." },
        { icon: Users, k: "Client projects", d: "Real work for studios, practices, service businesses and small brands." },
        { icon: CircleDot, k: "Today", d: "Websites where design, technology and strategy finally align." },
      ],

      svcEye: "What I do",
      svcTitle: "Six services, one outcome.",
      svc: [
        { icon: Palette, k: "Web design", d: "Individual design that carries your brand — never a template.", to: "web" },
        { icon: Code2, k: "Web development", d: "Cleanly built, fast and maintainable modern code.", to: "web" },
        { icon: Layers, k: "UX/UI design", d: "User flow that calmly leads visitors to the next step.", to: "web" },
        { icon: Search, k: "SEO", d: "Technical base, structure and content for better visibility.", to: "seo" },
        { icon: Compass, k: "Digital strategy", d: "Goals, audience and content clarified before design starts.", to: "pricing" },
        { icon: Smartphone, k: "Responsive design", d: "Perfect rendering on phone, tablet and desktop.", to: "web" },
      ],
      svcLink: "Learn more",

      philEye: "Design philosophy",
      philQuote:
        "A good website doesn't just have to look beautiful. It has to build trust, make information easy to understand and lead people to a decision.",
      philPoints: [
        "Build trust",
        "Make information clear",
        "Work perfectly on mobile",
        "Load quickly",
        "Be visible on Google",
        "Guide towards action",
        "Help the business grow",
      ],

      diffEye: "Why I work differently",
      diffTitle: "Eight things that make the difference.",
      diff: [
        { icon: Brush, k: "Individual design", d: "Every project starts with you — not with a layout file." },
        { icon: ShieldCheck, k: "No generic templates", d: "Structure and design are made for your offer." },
        { icon: MessageCircle, k: "Personal communication", d: "You talk to me directly, not to a ticket queue." },
        { icon: Search, k: "SEO from the start", d: "Visibility is planned in, not added afterwards." },
        { icon: Smartphone, k: "Responsive development", d: "Mobile-first thinking, clean everywhere." },
        { icon: Layers, k: "Clear structure", d: "Calm navigation and content you grasp instantly." },
        { icon: BarChart3, k: "Business-oriented", d: "Design aimed at inquiries, not only aesthetics." },
        { icon: Handshake, k: "Long-term support", d: "I stay reachable well after launch." },
      ],

      procEye: "How I work",
      procTitle: "How a website comes to life.",
      proc: [
        { k: "Discovery", d: "Understand goals, audience and competitors." },
        { k: "Strategy", d: "Define structure, content and keywords." },
        { k: "UX/UI design", d: "Wireframes and visual design in Figma." },
        { k: "Development", d: "Clean implementation in modern code." },
        { k: "SEO", d: "Technology, metadata and content optimised." },
        { k: "Testing", d: "Devices, browsers, speed and accessibility." },
        { k: "Launch", d: "Go live including setup and handover." },
        { k: "Support", d: "Maintenance, extensions and growth." },
      ],

      deskEye: "My creative desk",
      deskTitle: "Where the work happens.",
      deskLead:
        "Figma, a code editor, coffee and a lot of quiet. Layouts, prototypes and the finished website grow here — step by step.",
      deskTags: ["Figma", "UX sketches", "Colour palette", "Responsive testing"],

      insightEye: "Behind my work",
      insightTitle: "Between sketch and code.",
      insightLead: "A few moments from the everyday: planning, designing, building, checking.",

      toolEye: "My toolkit",
      toolTitle: "Tools I work with every day.",
      tools: [
        { icon: PenTool, k: "Figma" },
        { icon: Code2, k: "HTML" },
        { icon: Boxes, k: "CSS" },
        { icon: Braces, k: "JavaScript" },
        { icon: Component, k: "Bootstrap" },
        { icon: Component, k: "React" },
        { icon: Monitor, k: "VS Code" },
        { icon: ImageIcon, k: "Photoshop" },
        { icon: Brush, k: "Illustrator" },
        { icon: Search, k: "SEO tools" },
        { icon: BarChart3, k: "Google Analytics" },
        { icon: Gauge, k: "PageSpeed" },
      ],

      inspEye: "What inspires me",
      inspTitle: "Where the ideas come from.",
      insp: [
        { icon: Building2, k: "Modern architecture", d: "Clear lines and proportion." },
        { icon: Leaf, k: "Minimal interiors", d: "Calm through subtraction." },
        { icon: Cloud, k: "Sky & light", d: "Soft gradients, gentle transitions." },
        { icon: Type, k: "Typography", d: "Type as the voice of a brand." },
        { icon: Camera, k: "Photography", d: "Visual language with atmosphere." },
        { icon: Lightbulb, k: "Digital products", d: "Interfaces that explain themselves." },
      ],

      factEye: "A few things about me",
      facts: [
        { icon: CircleDot, k: "Creative & curious" },
        { icon: BookOpen, k: "Always learning" },
        { icon: Heart, k: "Minimal design lover" },
        { icon: Coffee, k: "Coffee & creative work" },
        { icon: MessageCircle, k: "Multilingual" },
        { icon: Globe2, k: "Clients across Europe" },
      ],

      certEye: "Certificates",
      certTitle: "Training you can verify.",
      certLead: "UX/UI, React, responsive design and digital marketing — documented and verifiable.",
      certCta: "See all certificates",

      projEye: "A look at my projects",
      projTitle: "Three projects, three industries.",
      projCta: "Explore project",
      projAll: "See all projects",

      linkEye: "Keep reading",
      linkTitle: "Where to next?",
      links: [
        { k: "Web development", d: "How I build websites technically.", to: "web" as const },
        { k: "SEO Nuremberg", d: "Visibility for the DACH market.", to: "seo" as const },
        { k: "Pricing", d: "Transparent packages and scope.", to: "pricing" as const },
        { k: "Blog", d: "Notes on design, tech and SEO.", to: "blog" as const },
        { k: "Certificates", d: "Education and proof.", to: "certs" as const },
        { k: "Contact", d: "Write or call directly.", to: "contact" as const },
      ],

      finalTitle: "Let's build a website that makes your business visible.",
      finalLead:
        "Tell me briefly about your plans. In the first call we clarify goals, scope and timing — free and without sales pressure.",
      finalPrimary: "Free first call",
      finalSecondary: "See my projects",
    }
  );

  const featured = [
    { slug: "pfotenhaus", name: "Pfotenhaus", img: projectPfotenhaus, cat: pick(lang, "Tierhotel · Storytelling", "Pet hotel · Storytelling"), desc: pick(lang, "Warmes Markenbild mit klarer Buchungsführung und mobiler Optimierung.", "A warm brand image with a clear booking flow and mobile optimisation.") },
    { slug: "dentallux", name: "Dentallux", img: projectDental, cat: pick(lang, "Zahnarztpraxis · Vertrauen", "Dental practice · Trust"), desc: pick(lang, "Ruhige Praxis-Website mit Fokus auf Vertrauen, Team und Terminanfrage.", "A calm practice website focused on trust, team and appointment requests.") },
    { slug: "atelier-nova", name: "Atelier Nova", img: projectAtelier, cat: pick(lang, "Studio · Editorial", "Studio · Editorial"), desc: pick(lang, "Editoriales Portfolio mit großzügiger Typografie und schneller Ladezeit.", "An editorial portfolio with generous typography and fast loading.") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Marianna Kuzmenko",
      jobTitle: pick(lang, "Webdesignerin, Webentwicklerin & SEO-Spezialistin", "Web Designer, Web Developer & SEO Specialist"),
      address: { "@type": "PostalAddress", addressLocality: "Nürnberg", addressCountry: "DE" },
      email: "mari1992.kuzmenko@gmail.com",
      telephone: "+49 179 1111607",
      knowsAbout: [
        "Webdesign Nürnberg",
        "Webentwicklung Nürnberg",
        "UX/UI Design",
        "SEO Nürnberg",
        "Responsive Webdesign",
      ],
      areaServed: ["Nürnberg", "Fürth", "Erlangen", "München", "Bayern", "Deutschland", "Österreich", "Schweiz"],
    },
  };

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("about")}
        pathDe="/ueber-mich"
        pathEn="/en/about"
        type="profile"
        jsonLd={jsonLd}
      />

      {/* 1 — HERO */}
      <section className="container-editorial pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="col-span-12 lg:col-span-6 reveal-stagger">
            <p className="eyebrow mb-5 reveal-line">{t.heroEye}</p>
            <h1 className="display-lg reveal-line">
              {t.heroTitleA}
              <br />
              <span className="italic text-rose">{t.heroTitleB}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed reveal-line">
              {t.heroLead}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 md:gap-4 reveal-line">
              <Link to={path("work")} className="btn-cta">
                {t.ctaWork} <ArrowUpRight size={18} strokeWidth={2} />
              </Link>
              <Link to={path("inquiry")} className="btn-cta-outline">
                {t.ctaTalk} <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 reveal">
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-soft">
                <img
                  src={portraitWindow}
                  alt="Marianna Kuzmenko, Webdesignerin und Webentwicklerin aus Nürnberg"
                  className="w-full aspect-[4/5] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
              </div>

              <div className="hidden md:block absolute -left-10 bottom-6 w-[58%] pointer-events-none">
                <MockupShowcase screens={[projectPfotenhaus, projectDental, projectAtelier]} alt="Website-Vorschau" />
              </div>

              <div className="absolute -right-2 md:-right-6 top-10 w-20 md:w-28 rounded-[1.4rem] overflow-hidden border-4 border-background shadow-soft bg-background">
                <img src={projectLushAsset.url} alt="Mobile Ansicht einer Website" className="w-full aspect-[9/19] object-cover object-top" loading="lazy" />
              </div>

              <div className="glass-panel absolute left-3 md:left-6 -bottom-6 px-4 py-3 md:px-5 md:py-4">
                <p className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {t.heroCap1} · {t.heroCap2} · {t.heroCap3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — PERSONAL INTRO */}
      <section className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="relative">
              <img
                src={portraitStudio}
                alt="Marianna Kuzmenko in ihrem Studio in Nürnberg — der Mensch hinter den Websites"
                className="w-full rounded-[2rem] object-cover aspect-[4/5] shadow-soft"
                loading="lazy"
              />
              <img
                src={portraitSuit}
                alt="Marianna Kuzmenko bei der Arbeit"
                className="hidden sm:block absolute -bottom-10 -right-6 w-40 md:w-48 rounded-[1.5rem] object-cover aspect-square border-4 border-background shadow-soft"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-14 sm:mt-16 md:mt-0 reveal-stagger">
            <p className="eyebrow mb-4 reveal-line">{t.introEye}</p>
            <h2 className="display-lg reveal-line">{t.introTitle}</h2>
            <div className="mt-7 space-y-5">
              {t.introP.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed reveal-line">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — MEIN WEG */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.wayEye}</p>
          <h2 className="display-lg reveal-line">{t.wayTitle}</h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-rose/40 via-primary/25 to-transparent md:-translate-x-1/2" aria-hidden />
          <div className="space-y-8 md:space-y-12">
            {t.way.map((s, i) => {
              const Icon = s.icon;
              const right = i % 2 === 1;
              return (
                <div key={s.k} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                  <span className="absolute -left-8 md:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-rose ring-4 ring-background md:-translate-x-1/2" aria-hidden />
                  <div className={`${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}>
                    <div className="glass-panel p-6 md:p-7 reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                      <div className={`flex items-center gap-3 mb-3 ${!right ? "md:flex-row-reverse" : ""}`}>
                        <span className="w-10 h-10 rounded-2xl bg-rose-soft flex items-center justify-center shrink-0">
                          <Icon size={18} strokeWidth={1.5} className="text-rose" />
                        </span>
                        <h3 className="font-display text-xl md:text-2xl leading-tight">{s.k}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — WHAT I DO */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.svcEye}</p>
          <h2 className="display-lg reveal-line">{t.svcTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.svc.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.k}
                to={path(s.to as "web")}
                className="glass-panel p-7 group reveal transition-transform duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-5 transition-transform duration-500 group-hover:-rotate-6">
                  <Icon size={20} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">{s.k}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-rose">
                  {t.svcLink} <ArrowUpRight size={15} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5 — PHILOSOPHY */}
      <section className="container-editorial py-16 md:py-24">
        <div className="card-soft p-8 md:p-16 text-center" style={{ background: "var(--gradient-soft)" }}>
          <p className="eyebrow mb-6 reveal">{t.philEye}</p>
          <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl leading-[1.15] max-w-4xl mx-auto reveal">
            <span className="italic text-rose">„</span>
            {t.philQuote}
            <span className="italic text-rose">“</span>
          </blockquote>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5 md:gap-3">
            {t.philPoints.map((p, i) => (
              <span
                key={p}
                className="reveal px-4 py-2 rounded-full bg-background/70 backdrop-blur text-xs md:text-sm text-muted-foreground"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — WHY DIFFERENT */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.diffEye}</p>
          <h2 className="display-lg reveal-line">{t.diffTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.diff.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={d.k}
                className="glass-panel p-6 group reveal transition-transform duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl bg-rose-soft flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={18} strokeWidth={1.5} className="text-rose" />
                </div>
                <h3 className="font-display text-lg md:text-xl mb-2 leading-tight">{d.k}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7 — PROCESS */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.procEye}</p>
          <h2 className="display-lg reveal-line">{t.procTitle}</h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-rose/35 to-transparent" aria-hidden />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.proc.map((s, i) => (
              <div key={s.k} className="relative reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center font-mono text-sm text-rose mb-5 relative z-10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl mb-2 leading-tight">{s.k}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — CREATIVE DESK */}
      <section className="container-editorial py-16 md:py-24">
        <div className="card-soft p-6 md:p-14" style={{ background: "var(--gradient-soft)" }}>
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-5 reveal-stagger">
              <p className="eyebrow mb-4 reveal-line">{t.deskEye}</p>
              <h2 className="display-lg reveal-line">{t.deskTitle}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed reveal-line">{t.deskLead}</p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {t.deskTags.map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-background/70 backdrop-blur text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 reveal">
              <div className="relative">
                <MockupShowcase screens={[projectRaum, projectAtelier, projectLushAsset.url]} alt="MacBook mit Website-Projekt" />
                <div className="absolute -right-1 md:right-4 -bottom-6 w-20 md:w-28 rounded-[1.3rem] overflow-hidden border-4 border-background shadow-soft bg-background">
                  <img src={projectPfotenhaus} alt="iPhone mit mobiler Website-Ansicht" className="w-full aspect-[9/19] object-cover object-top" loading="lazy" />
                </div>
                <div className="hidden sm:block absolute -left-4 -top-6 w-28 md:w-36 rounded-2xl overflow-hidden border-4 border-background shadow-soft">
                  <img src={portraitLaptop} alt="Arbeitsplatz mit Laptop und Kaffee" className="w-full aspect-square object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — EDITORIAL COLLAGE */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger max-w-2xl">
          <p className="eyebrow mb-4 reveal-line">{t.insightEye}</p>
          <h2 className="display-lg reveal-line">{t.insightTitle}</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed reveal-line">{t.insightLead}</p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
          <div className="col-span-7 md:col-span-5 reveal" ref={collageA}>
            <img src={portraitLaptop} alt="Marianna arbeitet am Laptop" className="w-full rounded-[1.8rem] object-cover aspect-[4/5] shadow-soft" loading="lazy" />
          </div>
          <div className="col-span-5 md:col-span-3 space-y-4 md:space-y-6 reveal" ref={collageB}>
            <img src={workspace} alt="Arbeitsplatz mit Notizen und Skizzen" className="w-full rounded-[1.4rem] object-cover aspect-square shadow-soft" loading="lazy" />
            <img src={portraitSuit} alt="Marianna Kuzmenko im Portrait" className="w-full rounded-[1.4rem] object-cover aspect-[3/4] shadow-soft" loading="lazy" />
          </div>
          <div className="col-span-12 md:col-span-4 reveal">
            <img src={projectRaum} alt="Screenshot eines Website-Projekts" className="w-full rounded-[1.8rem] object-cover aspect-[4/3] md:aspect-[3/4] object-top shadow-soft" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 10 — TOOLKIT */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.toolEye}</p>
          <h2 className="display-lg reveal-line">{t.toolTitle}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {t.tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.k}
                className="glass-panel p-5 text-center group reveal transition-transform duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                <div className="w-11 h-11 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon size={18} strokeWidth={1.5} className="text-foreground" />
                </div>
                <p className="text-sm">{tool.k}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11 — INSPIRATION */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.inspEye}</p>
          <h2 className="display-lg reveal-line">{t.inspTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.insp.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.k}
                className={`card-soft p-7 reveal ${i % 2 === 0 ? "bg-secondary" : "bg-rose-soft"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Icon size={22} strokeWidth={1.5} className="text-foreground mb-4" />
                <h3 className="font-display text-xl mb-2 leading-tight">{s.k}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 12 — FACTS */}
      <section className="container-editorial py-16 md:py-24">
        <p className="eyebrow mb-8 reveal">{t.factEye}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.k} className="glass-panel p-5 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <Icon size={18} strokeWidth={1.5} className="text-rose mb-3" />
                <p className="text-sm leading-snug">{f.k}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 13 — CERTIFICATES PREVIEW */}
      <section className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8 items-end mb-10 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.certEye}</p>
            <h2 className="display-lg reveal-line">{t.certTitle}</h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.certLead}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {[certUxui, certReact, certResponsive, certMarketing].map((c, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-background border border-border shadow-soft reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <img src={c} alt={`Zertifikat ${i + 1} von Marianna Kuzmenko`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to={path("certs")} className="btn-cta-outline">
            {t.certCta} <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* 14 — FEATURED PROJECTS */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-12 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.projEye}</p>
          <h2 className="display-lg reveal-line">{t.projTitle}</h2>
        </div>
        <div className="space-y-14 md:space-y-20">
          {featured.map((p, i) => (
            <article key={p.slug} className={`grid grid-cols-12 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="col-span-12 md:col-span-7 reveal md:[direction:ltr]">
                <div className="rounded-[1.8rem] overflow-hidden shadow-soft bg-background">
                  <img src={p.img} alt={`${p.name} — Website-Projekt von Marianna Kuzmenko`} className="w-full aspect-[16/11] object-cover object-top" loading="lazy" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 reveal md:[direction:ltr]">
                <p className="eyebrow mb-3">{p.cat}</p>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">{p.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                <Link to={`${path("work")}/${p.slug}`} className="btn-cta mt-7">
                  {t.projCta} <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link to={path("work")} className="btn-cta-outline">
            {t.projAll} <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* 15 — RESULTS */}
      <ResultsSection />

      {/* 16 — TESTIMONIALS */}
      <Testimonials />

      {/* 17 — STATS */}
      <StatsSection />

      {/* 20 — INTERNAL LINKS */}
      <section className="container-editorial py-16 md:py-24">
        <div className="mb-10 reveal-stagger">
          <p className="eyebrow mb-4 reveal-line">{t.linkEye}</p>
          <h2 className="display-lg reveal-line">{t.linkTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.links.map((l, i) => (
            <Link
              key={l.k}
              to={path(l.to)}
              className="glass-panel p-6 group reveal flex items-start justify-between gap-4 transition-transform duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span>
                <span className="block font-display text-xl mb-1.5">{l.k}</span>
                <span className="block text-sm text-muted-foreground leading-relaxed">{l.d}</span>
              </span>
              <ArrowUpRight size={18} strokeWidth={1.8} className="text-rose shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* 25 — FINAL CTA */}
      <ConversionCta
        title={t.finalTitle}
        lead={t.finalLead}
        primary={{ label: t.finalPrimary, href: path("inquiry") }}
        secondary={{ label: t.finalSecondary, href: path("work") }}
      />
    </Layout>
  );
};

export default UeberMich;
