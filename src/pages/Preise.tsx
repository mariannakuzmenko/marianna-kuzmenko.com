import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight, ShieldCheck, Clock, Heart } from "lucide-react";
import { useLang, pick } from "@/i18n/LanguageContext";

const Preise = () => {
  const { lang, path } = useLang();
  const t = pick(lang,
    {
      title: "Preise — Webdesign, Entwicklung & SEO | Marianna Kuzmenko",
      desc: "Transparente Preise für Webdesign, Webentwicklung und SEO. Freelancer in Nürnberg, Bayern — für Kunden in Deutschland, Österreich und der Schweiz.",
      eye: "Preise",
      h1a: "Faire Preise.",
      h1b: "Klare Leistungen.",
      lead: "Jedes Projekt ist individuell — die folgenden Pakete geben eine Orientierung. Das genaue Angebot erstelle ich nach einem persönlichen Gespräch.",
      from: "ab",
      mostPopular: "Beliebteste Wahl",
      cta: "Anfrage senden",
      ctaCustom: "Gespräch vereinbaren",
      trust: [
        { icon: ShieldCheck, t: "Festpreis-Garantie", d: "Keine versteckten Kosten — Preis steht vor Projektstart." },
        { icon: Clock, t: "Klare Timeline", d: "Verbindliche Meilensteine und transparente Kommunikation." },
        { icon: Heart, t: "Persönliche Betreuung", d: "Direkter Kontakt — kein Agentur-Funnel, kein Bot." },
      ],
      plans: [
        {
          name: "Starter Website",
          price: "1.490 €",
          tag: "Für Selbstständige & kleine Unternehmen",
          desc: "Eine elegante Onepage-Website, die deine Leistungen klar präsentiert.",
          features: ["Bis zu 1 Seite (Onepage)", "Individuelles Design", "Mobile-optimiert", "Technisches SEO Basis", "Kontaktformular", "DSGVO-konform"],
          highlight: false,
        },
        {
          name: "Business Website",
          price: "2.890 €",
          tag: "Für wachsende Unternehmen",
          desc: "Mehrseitige Website mit klarer Struktur, Inhalten und Conversion-Fokus.",
          features: ["Bis zu 6 Seiten", "Individuelles UX/UI Design", "CMS-Integration optional", "On-Page SEO", "Blog-System optional", "Analytics & Tracking", "Performance-Optimierung"],
          highlight: true,
        },
        {
          name: "Premium Website",
          price: "4.900 €",
          tag: "Für anspruchsvolle Marken",
          desc: "Maßgeschneidertes Design, fortgeschrittene Funktionen und vollständige SEO-Strategie.",
          features: ["Unbegrenzte Seiten", "Premium Custom Design", "Animationen & Interaktionen", "Vollständige SEO-Strategie", "Mehrsprachigkeit", "Integrationen (CRM, Buchung, etc.)", "3 Monate Support inklusive"],
          highlight: false,
        },
      ],
      addons: [
        { name: "SEO Optimierung", price: "ab 590 €", desc: "Technisches SEO, On-Page Optimierung, Keyword-Strategie, Content-Beratung — monatlich oder einmalig." },
        { name: "Individuelle Lösungen", price: "auf Anfrage", desc: "Web-Apps, Shop-Systeme, Buchungsplattformen, Branding-Pakete oder laufende Betreuung." },
      ],
      faqEye: "Häufige Fragen",
      faqTitle: "Noch unsicher?",
      faqLead: "Auf der FAQ-Seite findest du Antworten zu Ablauf, Dauer, Wartung und mehr.",
      faqCta: "Zur FAQ",
    },
    {
      title: "Pricing — Web Design, Development & SEO | Marianna Kuzmenko",
      desc: "Transparent pricing for web design, development and SEO. Freelancer in Nuremberg, Bavaria — serving clients in Germany, Austria and Switzerland.",
      eye: "Pricing",
      h1a: "Fair pricing.",
      h1b: "Clear deliverables.",
      lead: "Every project is unique — the packages below are a starting point. The final quote follows a personal conversation.",
      from: "from",
      mostPopular: "Most popular",
      cta: "Send inquiry",
      ctaCustom: "Book a call",
      trust: [
        { icon: ShieldCheck, t: "Fixed-price guarantee", d: "No hidden costs — pricing is set before kickoff." },
        { icon: Clock, t: "Clear timeline", d: "Defined milestones and transparent communication." },
        { icon: Heart, t: "Personal partnership", d: "Direct contact — no agency funnel, no bot." },
      ],
      plans: [
        {
          name: "Starter Website",
          price: "€1,490",
          tag: "For freelancers & small businesses",
          desc: "An elegant onepage site that clearly presents your services.",
          features: ["Up to 1 page (onepage)", "Custom design", "Mobile-optimized", "Technical SEO basics", "Contact form", "GDPR-compliant"],
          highlight: false,
        },
        {
          name: "Business Website",
          price: "€2,890",
          tag: "For growing companies",
          desc: "Multi-page website with clear structure, content and conversion focus.",
          features: ["Up to 6 pages", "Custom UX/UI design", "Optional CMS integration", "On-page SEO", "Optional blog system", "Analytics & tracking", "Performance optimization"],
          highlight: true,
        },
        {
          name: "Premium Website",
          price: "€4,900",
          tag: "For ambitious brands",
          desc: "Tailor-made design, advanced features and full SEO strategy.",
          features: ["Unlimited pages", "Premium custom design", "Animations & interactions", "Full SEO strategy", "Multilingual setup", "Integrations (CRM, booking, etc.)", "3 months support included"],
          highlight: false,
        },
      ],
      addons: [
        { name: "SEO Optimization", price: "from €590", desc: "Technical SEO, on-page optimization, keyword strategy, content advice — monthly or one-off." },
        { name: "Custom Solutions", price: "on request", desc: "Web apps, shop systems, booking platforms, branding packages or ongoing partnerships." },
      ],
      faqEye: "Common questions",
      faqTitle: "Still unsure?",
      faqLead: "Find answers on timing, process, maintenance and more on the FAQ page.",
      faqCta: "Go to FAQ",
    }
  );

  return (
    <Layout>
      <Seo title={t.title} description={t.desc} path={lang === "en" ? "/en/pricing" : "/preise"} />
      <section className="container-editorial pt-12 pb-20">
        <p className="eyebrow mb-6">{t.eye}</p>
        <h1 className="display-xl mb-6 max-w-4xl">
          {t.h1a} <span className="italic text-rose">{t.h1b}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{t.lead}</p>
      </section>

      <section className="container-editorial pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {t.plans.map((p) => (
            <div key={p.name} className={`relative rounded-[1.75rem] p-8 flex flex-col ${p.highlight ? "bg-gradient-to-br from-rose-soft to-paper border border-rose/30 shadow-[var(--shadow-pink)]" : "panel-white"}`}>
              {p.highlight && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose text-white text-[10px] font-mono uppercase tracking-widest">
                  <Sparkles size={12} /> {t.mostPopular}
                </span>
              )}
              <p className="eyebrow mb-3">{p.tag}</p>
              <h3 className="font-display text-3xl mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 min-h-[3.5rem]">{p.desc}</p>
              <div className="mb-6">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{t.from}</span>
                <div className="font-display text-4xl text-rose">{p.price}</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-rose mt-0.5 shrink-0" strokeWidth={2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to={`${path("home")}#kontakt`} className={p.highlight ? "btn-pink justify-center" : "btn-pink-outline justify-center"}>
                {t.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {t.addons.map((a) => (
            <div key={a.name} className="panel-white p-8 flex flex-col">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display text-2xl">{a.name}</h3>
                <span className="font-display text-xl text-rose">{a.price}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{a.desc}</p>
              <Link to={`${path("home")}#kontakt`} className="btn-pink-outline self-start">
                {t.ctaCustom} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {t.trust.map((tr) => {
            const Icon = tr.icon;
            return (
              <div key={tr.t} className="panel-white p-6">
                <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center mb-4">
                  <Icon size={18} className="text-rose" strokeWidth={1.6} />
                </div>
                <h4 className="font-display text-xl mb-2">{tr.t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tr.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-editorial pb-28">
        <div className="panel-white p-10 md:p-14 text-center">
          <p className="eyebrow mb-4">{t.faqEye}</p>
          <h2 className="display-md mb-4">{t.faqTitle}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.faqLead}</p>
          <Link to={lang === "en" ? "/en/faq" : "/faq"} className="btn-pink inline-flex">
            {t.faqCta} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Preise;
