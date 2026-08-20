import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { IconCard } from "@/components/site/IconCard";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactSection } from "@/components/site/ContactSection";
import { WaveDivider } from "@/components/site/WaveDivider";
import { HeroBlueprint } from "@/components/site/HeroBlueprint";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CONTACT } from "@/data/contact";
import { EinblickSection } from "@/components/site/EinblickSection";
import { ConversionCta } from "@/components/site/ConversionCta";
import { ThreePerspectives } from "@/components/site/ThreePerspectives";
import { BeforeAfterSection } from "@/components/site/BeforeAfterSection";
import { ClientJourney } from "@/components/site/ClientJourney";
import { WebsiteDiagnosis } from "@/components/site/WebsiteDiagnosis";
import { DigitalJourney } from "@/components/site/DigitalJourney";
import { ResultsSection } from "@/components/site/ResultsSection";
import { StatsSection } from "@/components/site/StatsSection";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Code2,
  Compass,
  Globe2,
  Layers,
  LineChart,
  MapPin,
  Search,
  ShieldCheck,
  CircleDot,
} from "lucide-react";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";
import portraitWindowSrc from "@/assets/portraits/marianna-portrait-window.jpeg";
import portraitPampasSrc from "@/assets/portraits/marianna-portrait-pampas.jpeg";
import portraitSuitSrc from "@/assets/portraits/marianna-portrait-suit.jpeg";
import portraitLaptopSrc from "@/assets/portraits/marianna-laptop-coffee.jpeg";
import dentalluxImg from "@/assets/projects/dentallux.png";
import raumformImg from "@/assets/projects/raumform.png";
import atelierNovaImg from "@/assets/projects/atelier-nova.png";
import neinStudioImg from "@/assets/projects/nein-studio.png";
import liorImg from "@/assets/projects/lior-friseur.png";
import fourElementsImg from "@/assets/projects/four-elements.png";
import pfotenhausImg from "@/assets/projects/pfotenhaus.png";
import lushBloomImg from "@/assets/projects/lush-bloom-mockup.jpeg";

// Aliases preserved for readability across the page
const portraitWindow = { url: portraitWindowSrc };
const portraitSuit = { url: portraitSuitSrc };
const portraitLaptop = { url: portraitLaptopSrc };
const editorialPortrait = { url: portraitWindowSrc };
const closePortrait = { url: portraitPampasSrc };
const dentalluxMockup = { url: dentalluxImg };
const raumformMockup = { url: raumformImg };
const therapistMockup = { url: atelierNovaImg };
const neinStudioMockup = { url: neinStudioImg };
const liorMockup = { url: liorImg };
const fourElementsMockup = { url: fourElementsImg };
const nuernbergGuideMockup = { url: pfotenhausImg };
const creditpathMockup = { url: lushBloomImg };

const Index = () => {
  const { lang, path } = useLang();

  const t = pick(
    lang,
    {
      seoTitle:
        "Webdesign Nürnberg, Webentwicklung & SEO Nürnberg - Marianna Kuzmenko",
      seoDesc:
        "Marianna Kuzmenko gestaltet moderne Webseiten für Nürnberg, Fürth, Erlangen, München und ganz Deutschland: Webdesign, Webentwicklung, SEO und UX/UI Design mit hochwertiger Markenwirkung.",
      heroEyebrow: "Marianna Kuzmenko · Webdesign & SEO",
      heroTitle: "Webdesign Nürnberg für Marken, die klarer, sichtbarer und hochwertiger auftreten wollen.",
      heroLead:
        "Ich entwickle moderne Webseiten mit strategischem Webdesign, technischer Webentwicklung, UX/UI Design und SEO Nürnberg — für Unternehmen in Nürnberg, Fürth, Erlangen, München, in Bayern, im deutschsprachigen Raum und für internationale Projekte in ganz Deutschland.",
      heroMeta: [
        "Webdesigner Fürth",
        "Webdesigner Erlangen",
        "Webdesign München",
        "moderne Webseiten Deutschland",
      ],
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Projekt anfragen",
      heroCardTitle: "Positionierung",
      heroCardText:
        "Webdesignerin für Nürnberg und darüber hinaus - mit Fokus auf Sichtbarkeit, Vertrauen und ruhige Premium-Ästhetik.",
      heroPhotoAlt: "Marianna Kuzmenko im schwarzen Blazer vor einem hellen Fenster",
      heroStudioAlt: "Editorial Portrait von Marianna Kuzmenko",
      heroMockupAlt: "Auswahl realer Website-Projekte auf Laptop und Tablet",
      trustEyebrow: "01 - Klarer Mehrwert",
      trustTitleA: "Moderne Webseiten, die",
      trustTitleB: "Vertrauen aufbauen.",
      trustLead:
        "Eine gute Website zeigt nicht nur Arbeit. Sie ordnet Wahrnehmung, erklärt Qualität und macht aus Aufmerksamkeit echte Anfragen.",
      trustPoints: [
        {
          title: "Sichtbarkeit mit Substanz",
          desc: "SEO Nürnberg, klare Struktur und starke Inhalte sorgen dafür, dass deine Marke gefunden und verstanden wird.",
        },
        {
          title: "Professionelle Markenwirkung",
          desc: "Design beeinflusst Wahrnehmung. Eine hochwertige Website macht Qualität sichtbar, bevor jemand Kontakt aufnimmt.",
        },
        {
          title: "Conversion ohne Druck",
          desc: "UX/UI Design, klare Nutzerführung und ruhige Botschaften führen Besucher:innen elegant zur Anfrage.",
        },
      ],
      serviceEyebrow: "02 — Leistungen",
      serviceTitleA: "Webdesign, Webentwicklung",
      serviceTitleB: "und SEO aus einer Hand.",
      serviceLead:
        "Für Markenauftritte, die nicht nur schön aussehen, sondern strukturiert verkaufen, Vertrauen schaffen und langfristig sichtbar bleiben.",
      services: [
        {
          title: "Webdesign Nürnberg",
          desc: "Individuelle Gestaltung für Unternehmen, Studios und Dienstleister — klar, hochwertig und markengerecht.",
        },
        {
          title: "UX/UI Design Nürnberg",
          desc: "Nutzerführung, Inhalte und Interfaces, die verständlich wirken und ruhig zu Conversion führen.",
        },
        {
          title: "Webentwicklung Nürnberg",
          desc: "Saubere Frontend-Entwicklung, schnelle Ladezeiten, klare Systematik und moderne technische Basis.",
        },
        {
          title: "SEO Nürnberg",
          desc: "Technische und inhaltliche SEO-Struktur von Anfang an — für Bayern, ganz Deutschland und nachhaltige Reichweite.",
        },
      ],
      moreWeb: "Mehr zu Web Development",
      moreSeo: "Mehr zu SEO",
      projectsEyebrow: "03 — Ausgewählte Arbeiten",
      projectsTitleA: "Reale Projekte,",
      projectsTitleB: "editorial inszeniert.",
      projectsLead:
        "Die Homepage zeigt echte Arbeiten sofort: Websites auf Laptop-, Tablet- und mobilen Mockups, damit Qualität, Stil und Branchenvielfalt direkt sichtbar werden.",
      featuredTitle: "Projektportfolio für Nürnberg, Bayern und moderne Marken in Deutschland.",
      featuredText:
        "Von Zahnarztpraxis bis Premium-Kanzlei, von Küchenstudio bis Beratung — jedes Projekt verbindet Markenwirkung, klare Struktur und Conversion-orientierte Gestaltung.",
      projectLabels: [
        "Restaurant Website",
        "UX/UI Design",
        "SEO Optimized",
        "Premium Law Firm",
        "Modern Digital Experience",
        "Craft & Service Brand",
      ],
      projectItems: [
        {
          name: "Dentallux",
          category: "Zahnklinik · SEO · Berlin",
          desc: "Ruhige Premium-Ästhetik, medizinisches Vertrauen und klare Terminführung.",
        },
        {
          name: "Raumform",
          category: "Innenarchitektur · Editorial",
          desc: "Großformatige Raumbilder, ruhige Navigation und ein Auftritt, der Materialität in den Vordergrund stellt.",
        },
        {
          name: "Dr. Sarah Mitchell",
          category: "Therapy Practice · International",
          desc: "Sanfte Conversion, Wärme und professionelle Ruhe in einem digitalen Raum.",
        },
        {
          name: "Nein Studio",
          category: "Anti-Agentur · Editorial",
          desc: "Editorial-Website mit markanter Typografie, Ladesequenz und klarer Haltung statt Standard-Agenturlayout.",
        },
        {
          name: "Lior Friseur",
          category: "Salon · Cinematic Dark",
          desc: "Cinematische Bildsprache und lokale SEO-Struktur für einen Premium-Friseursalon.",
        },
        {
          name: "Four Elements",
          category: "Asiatisches Restaurant · Cinematic",
          desc: "Immersive Bildwelt, kapitelartige Menüpräsentation und besondere Atmosphäre.",
        },
      ],
      allProjects: "Alle Projekte ansehen",
      regionEyebrow: "04 — Positionierung",
      regionTitleA: "In Nürnberg verwurzelt,",
      regionTitleB: "international anschlussfähig.",
      regionLead:
        "Ich arbeite für Unternehmen in Nürnberg, Fürth, Erlangen, München und in ganz Bayern — genauso wie für Marken im deutschsprachigen Raum und internationale Zusammenarbeit mit klarem europäischen Stilverständnis.",
      regionPoints: [
        "Nürnberg · Fürth · Erlangen · München",
        "Bayern · ganz Deutschland · DACH",
        "deutschsprachiger Raum · internationale Projekte",
      ],
      processEyebrow: "05 — Ablauf",
      processTitleA: "Strukturiert, ruhig,",
      processTitleB: "professionell umgesetzt.",
      processLead:
        "Vom ersten Gespräch bis zum Launch bleibt das Projekt klar geführt — mit Fokus auf Strategie, Inhalt, Design und technischer Qualität.",
      process: [
        {
          title: "Strategie & Positionierung",
          desc: "Ziele, Zielgruppe, Suchintention und Markenbild werden zuerst geschärft.",
        },
        {
          title: "UX/UI & Copy-Struktur",
          desc: "Inhalte, Nutzerführung und Seitendramaturgie werden präzise aufgebaut.",
        },
        {
          title: "Design & Webentwicklung",
          desc: "Die Website wird hochwertig gestaltet und technisch sauber umgesetzt.",
        },
        {
          title: "SEO & Launch",
          desc: "Zum Schluss wird auf Sichtbarkeit, Performance und Anfragen optimiert.",
        },
      ],
      whyEyebrow: "06 — Warum das wirkt",
      whyTitleA: "Professionelles Design",
      whyTitleB: "verändert Wahrnehmung.",
      whyLead:
        "Menschen entscheiden schnell. Eine moderne Website schafft Klarheit, signalisiert Qualität und macht den nächsten Schritt leichter.",
      why: [
        {
          title: "Klarheit schafft Vertrauen",
          desc: "Wenn Inhalte logisch geführt sind, wirkt ein Unternehmen sicherer und professioneller.",
        },
        {
          title: "Design beeinflusst Wahrnehmung",
          desc: "Hochwertige Gestaltung hebt Qualität, Preiswürdigkeit und Markenwert sichtbar an.",
        },
        {
          title: "SEO bringt die richtigen Besucher:innen",
          desc: "Relevante Reichweite ist wertvoller als bloße Klicks — besonders lokal und im DACH-Markt.",
        },
      ],
      endEye: "— Kontakt —",
      endA: "Wenn du eine Website willst,",
      endB: "die wirklich trägt.",
      endLead:
        "Dann lass uns über einen digitalen Auftritt sprechen, der professionell aussieht, klar kommuniziert und in Suchmaschinen sichtbar wird.",
      endCta: "Projekt starten",
    },
    {
      seoTitle:
        "Web Design, Web Development & SEO in Germany - Marianna Kuzmenko",
      seoDesc:
        "Marianna Kuzmenko creates modern websites, UX/UI systems and SEO-led digital experiences for clients in Germany, the DACH region and international markets.",
      heroEyebrow: "Marianna Kuzmenko · Web Design & SEO",
      heroTitle: "Premium web design and development for brands that need clarity, trust and visibility.",
      heroLead:
        "I create modern websites with strategic web design, thoughtful UX/UI, clean frontend development and SEO — for clients in Germany, across the DACH region and in international collaborations.",
      heroMeta: [
        "Based in Nuremberg",
        "Working across Germany",
        "DACH market focus",
        "International projects",
      ],
      ctaPrimary: "View projects",
      ctaSecondary: "Start a project",
      heroCardTitle: "Positioning",
      heroCardText:
        "A calm, premium digital presence for brands that want to look more established and convert with more intent.",
      heroPhotoAlt: "Marianna Kuzmenko in a black blazer by a bright window",
      heroStudioAlt: "Editorial portrait of Marianna Kuzmenko",
      heroMockupAlt: "Selection of real website projects on laptop and tablet",
      trustEyebrow: "01 — Value",
      trustTitleA: "Modern websites that",
      trustTitleB: "build trust.",
      trustLead:
        "A strong website does more than display work. It shapes perception, communicates quality, and turns attention into meaningful inquiries.",
      trustPoints: [
        {
          title: "Visibility with substance",
          desc: "Clear structure, SEO and considered content help the right people find and understand your brand.",
        },
        {
          title: "Professional brand presence",
          desc: "Design affects perception. A refined website makes quality legible before a conversation even begins.",
        },
        {
          title: "Conversion without pressure",
          desc: "Thoughtful UX/UI and calm messaging gently guide visitors toward the next step.",
        },
      ],
      serviceEyebrow: "02 — Services",
      serviceTitleA: "Web design, development",
      serviceTitleB: "and SEO together.",
      serviceLead:
        "For brand presences that do more than look good - they structure the message, earn trust and support growth.",
      services: [
        {
          title: "Custom Web Design",
          desc: "Distinct visual systems for service brands, studios and businesses that need a premium online presence.",
        },
        {
          title: "UX/UI Design",
          desc: "Clear journeys, hierarchy and interfaces that feel intuitive and conversion-aware.",
        },
        {
          title: "Web Development",
          desc: "Fast, maintainable frontend work with a modern technical foundation and clean execution.",
        },
        {
          title: "SEO Strategy",
          desc: "Technical and content SEO built into the site from the start for durable visibility.",
        },
      ],
      moreWeb: "More on Web Development",
      moreSeo: "More on SEO",
      projectsEyebrow: "03 — Selected Work",
      projectsTitleA: "Real projects,",
      projectsTitleB: "editorially framed.",
      projectsLead:
        "The homepage showcases real work immediately: websites presented on laptop, tablet and mobile mockups so the quality feels tangible from the first screen onward.",
      featuredTitle: "A portfolio designed to feel polished, credible and immediate.",
      featuredText:
        "From premium clinics to service businesses and advisory brands, each project balances structure, atmosphere and conversion-minded clarity.",
      projectLabels: [
        "Restaurant Website",
        "UX/UI Design",
        "SEO Optimized",
        "Premium Law Firm",
        "Modern Digital Experience",
        "Craft & Service Brand",
      ],
      projectItems: [
        {
          name: "Dentallux",
          category: "Dental Clinic · SEO · Berlin",
          desc: "Premium calm, medical trust and clear booking direction.",
        },
        {
          name: "Raumform",
          category: "Interior Design · Editorial",
          desc: "Large-format spatial imagery, calm navigation and a presentation that foregrounds materiality.",
        },
        {
          name: "Dr. Sarah Mitchell",
          category: "Therapy Practice · International",
          desc: "Warmth, reassurance and soft conversion in a quiet digital space.",
        },
        {
          name: "Nein Studio",
          category: "Anti-Agency · Editorial",
          desc: "Editorial website with bold typography, a scripted loading sequence and a clear point of view.",
        },
        {
          name: "Lior Friseur",
          category: "Salon · Cinematic Dark",
          desc: "Cinematic imagery and a local SEO structure for a premium hair salon.",
        },
        {
          name: "Four Elements",
          category: "Asian Restaurant · Cinematic",
          desc: "Immersive visuals, chapter-like menu presentation and a distinctive atmosphere.",
        },
      ],
      allProjects: "View all projects",
      regionEyebrow: "04 — Positioning",
      regionTitleA: "Rooted in Nuremberg,",
      regionTitleB: "ready for international work.",
      regionLead:
        "I work with businesses in Nuremberg and across Germany, as well as brands in the wider DACH market and international collaborations that need a modern European visual language.",
      regionPoints: [
        "Nuremberg · Germany · DACH",
        "German-speaking audiences",
        "International collaboration",
      ],
      processEyebrow: "05 — Process",
      processTitleA: "Structured, calm,",
      processTitleB: "professionally executed.",
      processLead:
        "From the first conversation to launch, the process stays focused — with strategy, content, design and technical quality moving together.",
      process: [
        {
          title: "Strategy & Positioning",
          desc: "Goals, audience, search intent and brand direction are clarified first.",
        },
        {
          title: "UX/UI & Content Structure",
          desc: "Messaging, flow and page narrative are shaped with precision.",
        },
        {
          title: "Design & Development",
          desc: "The site is crafted with a premium visual system and clean frontend execution.",
        },
        {
          title: "SEO & Launch",
          desc: "Visibility, performance and conversion details are refined before going live.",
        },
      ],
      whyEyebrow: "06 — Why it works",
      whyTitleA: "Professional design",
      whyTitleB: "changes perception.",
      whyLead:
        "People decide quickly. A modern site creates clarity, signals quality and makes the next step feel easier.",
      why: [
        {
          title: "Clarity builds trust",
          desc: "When information is well structured, a business feels more confident and more established.",
        },
        {
          title: "Design shapes value perception",
          desc: "Refined design quietly elevates quality, credibility and brand value.",
        },
        {
          title: "SEO attracts the right audience",
          desc: "Relevant visibility matters more than empty traffic — especially for local and high-intent markets.",
        },
      ],
      endEye: "— Contact —",
      endA: "If you want a website",
      endB: "that truly carries the brand.",
      endLead:
        "Let’s create a digital presence that looks professional, communicates clearly and performs in search.",
      endCta: "Start a project",
    }
  );

  const services = [
    { icon: Compass, ...t.services[0], variant: "default" as const },
    { icon: Layers, ...t.services[1], variant: "blue" as const },
    { icon: Code2, ...t.services[2], variant: "default" as const },
    { icon: Search, ...t.services[3], variant: "pink" as const },
  ];

  const trustIcons = [LineChart, ShieldCheck, CircleDot];
  const whyIcons = [BadgeCheck, Building2, Globe2];
  const heroScreens = [
    dentalluxMockup.url,
    raumformMockup.url,
    therapistMockup.url,
    neinStudioMockup.url,
  ];
  const projectImages = [
    dentalluxMockup.url,
    raumformMockup.url,
    therapistMockup.url,
    neinStudioMockup.url,
    liorMockup.url,
    fourElementsMockup.url,
  ];

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("home")}
        pathDe={ROUTES.home.de}
        pathEn={ROUTES.home.en}
      />

      <HeroBlueprint
        eyebrow={t.heroEyebrow}
        titleParts={
          lang === "de"
            ? { l1: "Design.", l2: "Entwicklung.", l3: "Wachstum." }
            : { l1: "Design.", l2: "Development.", l3: "Growth." }
        }
        lead={t.heroLead}
        metaTags={t.heroMeta}
        ctaPrimary={t.ctaPrimary}
        ctaSecondary={t.ctaSecondary}
        ctaPrimaryHref={path("work")}
        ctaSecondaryHref={path("inquiry")}
        zoneLabels={
          lang === "de"
            ? { design: "UX/UI Design", develop: "Webentwicklung", growth: "SEO & Strategie" }
            : { design: "UX/UI Design", develop: "Development", growth: "SEO & Growth" }
        }
        flowLabels={
          lang === "de"
            ? { idea: "Idee", design: "Design", build: "Entwicklung", grow: "Wachstum" }
            : { idea: "Idea", design: "Design", build: "Build", grow: "Grow" }
        }
      />


      <WaveDivider />

      <section className="container-editorial py-24">
        <div className="grid grid-cols-12 gap-8 items-start mb-14 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.trustEyebrow}</p>
            <h2 className="display-lg reveal-line">
              {t.trustTitleA}
              <br />
              <span className="italic text-rose">{t.trustTitleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.trustLead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.trustPoints.map((item, i) => {
            const Icon = trustIcons[i];
            return (
              <div key={item.title} className="glass-panel p-7 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-rose-soft flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.5} className="text-rose" />
                </div>
                <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <WaveDivider flip />

      <section className="container-editorial py-24">
        <div className="grid grid-cols-12 gap-8 items-end mb-14 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.serviceEyebrow}</p>
            <h2 className="display-lg reveal-line">
              {t.serviceTitleA}
              <br />
              <span className="italic text-rose">{t.serviceTitleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.serviceLead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <IconCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              variant={service.variant}
              index={i}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to={path("web")} className="btn-ghost-soft btn-press">
            {t.moreWeb} <ArrowRight size={14} />
          </Link>
          <Link to={path("seo")} className="btn-ghost-soft btn-press">
            {t.moreSeo} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <ConversionCta
        eyebrow={lang === "de" ? "Nächster Schritt" : "Next step"}
        title={
          lang === "de" ? (
            <>Bereit für eine Website, die <span className="italic text-rose">wirklich verkauft</span>?</>
          ) : (
            <>Ready for a website that <span className="italic text-rose">actually converts</span>?</>
          )
        }
        lead={
          lang === "de"
            ? "30 Minuten Erstgespräch, ehrliche Einschätzung, klare nächste Schritte — kostenlos und unverbindlich."
            : "A 30-minute intro call, an honest assessment and a clear next step — free, no strings attached."
        }
        primary={{ label: lang === "de" ? "Kostenloses Beratungsgespräch" : "Request a Free Consultation", href: path("inquiry") }}
        secondary={{ label: lang === "de" ? "Portfolio ansehen" : "View Portfolio", href: path("work") }}
      />

      <WaveDivider />

      <section className="container-editorial py-24 relative overflow-hidden">
        <div className="grid grid-cols-12 gap-8 items-start mb-14 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.projectsEyebrow}</p>
            <h2 className="display-lg reveal-line">
              {t.projectsTitleA}
              <br />
              <span className="italic">{t.projectsTitleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.projectsLead}</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="glass-panel p-4 md:p-6 relative overflow-hidden">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-8">
                  <div className="frame-soft aspect-[16/11] bg-card">
                    <img src={dentalluxMockup.url} alt={t.projectItems[0].name} loading="lazy" />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 md:-ml-8 md:pt-16">
                  <div className="frame-soft aspect-[4/5] bg-card shadow-[0_30px_60px_-30px_hsl(211_50%_30%_/_0.45)]">
                    <img src={raumformMockup.url} alt={t.projectItems[1].name} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="floating-tag top-6 left-6">{t.projectLabels[0]}</div>
              <div className="floating-tag bottom-6 right-6">{t.projectLabels[1]}</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-6 reveal" style={{ transitionDelay: "120ms" }}>
            <div className="panel-white">
              <p className="eyebrow mb-4">Featured</p>
              <h3 className="font-display text-3xl leading-tight mb-4">{t.featuredTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.featuredText}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="frame-soft aspect-[4/5] glass-card p-2">
                <img src={therapistMockup.url} alt={t.projectItems[2].name} loading="lazy" className="rounded-[1.25rem]" />
              </div>
              <div className="frame-soft aspect-[4/5] glass-card p-2 mt-8">
                <img src={neinStudioMockup.url} alt={t.projectItems[3].name} loading="lazy" className="rounded-[1.25rem]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {t.projectItems.map((item, i) => (
            <Link key={item.name} to={path("work")} className="group reveal block" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="glass-panel p-4 h-full">
                <div className="frame-soft aspect-[16/11] mb-5 bg-card">
                  <img src={projectImages[i]} alt={item.name} loading="lazy" />
                </div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">{item.category}</p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl group-hover:text-rose transition-colors duration-500">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.desc}</p>
                  </div>
                  <ArrowUpRight className="mt-1 shrink-0 text-muted-foreground group-hover:text-rose transition-all duration-500 group-hover:rotate-45" size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.projectLabels.map((label) => (
            <span key={label} className="chip" >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <Link to={path("work")} className="btn-cta">
            {t.allProjects} <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <ConversionCta
        title={
          lang === "de" ? (
            <>Du hast ein <span className="italic text-rose">ähnliches Projekt</span> im Kopf?</>
          ) : (
            <>Have a <span className="italic text-rose">similar project</span> in mind?</>
          )
        }
        lead={
          lang === "de"
            ? "Schreib mir kurz, worum es geht. Ich melde mich innerhalb von 48 Stunden mit einer ehrlichen Einschätzung zurück."
            : "Tell me briefly what you have in mind. I'll come back within 48 hours with an honest take."
        }
        primary={{ label: lang === "de" ? "Projekt besprechen" : "Discuss Your Project", href: path("inquiry") }}
      />

      <WaveDivider flip />

      <ThreePerspectives />

      <ConversionCta
        title={
          lang === "de" ? (
            <>Lass uns deine <span className="italic text-rose">Website planen</span>.</>
          ) : (
            <>Let's <span className="italic text-rose">plan your website</span>.</>
          )
        }
        lead={
          lang === "de"
            ? "Design, Entwicklung und SEO — strategisch geplant, ruhig umgesetzt, messbar wirksam."
            : "Design, development and SEO — strategically planned, calmly executed, measurably effective."
        }
        primary={{ label: lang === "de" ? "Projekt starten" : "Start Your Project", href: path("inquiry") }}
        secondary={{ label: lang === "de" ? "Leistungen ansehen" : "See Services", href: path("web") }}
      />

      <WaveDivider />

      <BeforeAfterSection />

      <WaveDivider flip />

      <section className="container-editorial py-24">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 reveal">
            <div className="frame-soft aspect-[4/5] glass-card p-3 max-w-[420px]">
              <img src={editorialPortrait.url} alt={t.heroStudioAlt} loading="lazy" className="rounded-[1.5rem]" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 reveal-stagger">
            <p className="eyebrow mb-4 reveal-line">{t.regionEyebrow}</p>
            <h2 className="display-lg reveal-line">
              {t.regionTitleA}
              <br />
              <span className="italic text-rose">{t.regionTitleB}</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl reveal-line">{t.regionLead}</p>
            <div className="mt-8 space-y-3 reveal-line">
              {t.regionPoints.map((point) => (
                <div key={point} className="glass-panel px-5 py-4 flex items-center gap-3">
                  <MapPin size={16} className="text-rose shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      <ClientJourney />

      <WaveDivider />

      <DigitalJourney />

      <WaveDivider flip />


      <section className="container-editorial py-24">
        <div className="grid grid-cols-12 gap-8 items-start mb-14 reveal-stagger">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal-line">{t.whyEyebrow}</p>
            <h2 className="display-lg reveal-line">
              {t.whyTitleA}
              <br />
              <span className="italic text-rose">{t.whyTitleB}</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 reveal-line">
            <p className="text-muted-foreground leading-relaxed">{t.whyLead}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.why.map((item, i) => {
            const Icon = whyIcons[i];
            return (
              <div key={item.title} className="card-soft reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <WaveDivider />

      <ResultsSection />

      <WaveDivider flip />

      <WebsiteDiagnosis />


      <WaveDivider flip />

      <EinblickSection />

      <WaveDivider flip />

      <StatsSection />

      <WaveDivider />

      <Testimonials />

      <WaveDivider />

      <section className="ending-scene scene-fade">
        <div className="container-editorial relative">
          <p className="eyebrow mb-6 reveal-line">{t.endEye}</p>
          <h2 className="ending-headline">
            {t.endA}
            <br />
            <span className="italic text-rose marker">{t.endB}</span>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">{t.endLead}</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to={path("inquiry")} className="btn-cta">
              {lang === "de" ? "Projekt starten" : "Start Your Project"} <ArrowUpRight size={18} />
            </Link>
            <WhatsAppButton lang={lang} />
            <a href={`mailto:${CONTACT.email}`} className="btn-cta-outline">
              {lang === "de" ? "E-Mail schreiben" : "Send an email"}
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Index;
