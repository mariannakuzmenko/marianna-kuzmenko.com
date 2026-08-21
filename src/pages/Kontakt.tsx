import { Link } from "react-router-dom";
import { Mail, Phone, Clock, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { ConversionCta } from "@/components/site/ConversionCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CONTACT, telLink } from "@/data/contact";
import portraitWindow from "@/assets/portraits/marianna-portrait-window.jpeg";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";

const EMAIL = CONTACT.email;
const PHONE_DISPLAY = CONTACT.phoneDisplay;
const PHONE_TEL = telLink;

const Kontakt = () => {
  const { lang, path } = useLang();

  const t = pick(
    lang,
    {
      seoTitle: "Kontakt — Marianna Kuzmenko · Webdesign & SEO Nürnberg",
      seoDesc:
        "Direkter Kontakt zu Marianna Kuzmenko: E-Mail, Telefon und Projektanfrage. Persönliche Antwort innerhalb von 24 Stunden — aus Nürnberg für ganz Deutschland.",
      eyebrow: "— Get in touch —",
      h1A: "Lass uns über dein",
      h1B: "Projekt sprechen.",
      lead:
        "Du hast eine Idee für eine neue Website, möchtest deine bestehende Website verbessern oder bei Google besser sichtbar werden? Schreib mir — ich freue mich, dein Projekt kennenzulernen.",
      portraitAlt: "Marianna Kuzmenko im schwarzen Blazer",
      laptopAlt: "Marianna arbeitet am Laptop",
      cards: {
        email: { label: "E-Mail", value: EMAIL, hint: "Ich antworte innerhalb von 24 Stunden." },
        phone: { label: "Telefon", value: PHONE_DISPLAY, hint: "Mo–Fr, 9:00–18:00 Uhr (MEZ)" },
        response: { label: "Antwortzeit", value: "< 24 Stunden", hint: "An Werktagen. Persönlich, nicht automatisiert." },
        location: { label: "Standort", value: "Nürnberg · Deutschland", hint: "Kund:innen in DACH und international." },
      },
      formEye: "Projektanfrage",
      formTitleA: "Detaillierte Anfrage?",
      formTitleB: "Nutze das Projekt-Formular.",
      formLead:
        "Für konkrete Projekte gibt es ein geführtes Formular — es hilft mir, dein Vorhaben schneller einzuschätzen und ein präzises Angebot zu erstellen.",
      formCta: "Projekt-Formular öffnen",
      quickTitle: "Direkt schreiben",
      quickLead: "Wenn du lieber kurz per E-Mail startest — ein Klick genügt.",
      quickCta: "E-Mail schreiben",
      callCta: "Anrufen",
      ctaEye: "— Bereit? —",
      ctaTitle: (
        <>
          Bereit für eine Website,
          <br />
          die wirklich <span className="italic text-rose">funktioniert</span>?
        </>
      ),
      ctaLead:
        "Ein kurzes Gespräch reicht, um Passung, Budget und Timing zu klären — unverbindlich.",
      ctaPrimary: "Kostenloses Gespräch",
      ctaSecondary: "Projekte ansehen",
    },
    {
      seoTitle: "Contact — Marianna Kuzmenko · Web Design & SEO Nuremberg",
      seoDesc:
        "Get in touch with Marianna Kuzmenko: email, phone and project inquiry form. Personal response within 24 hours — from Nuremberg to clients worldwide.",
      eyebrow: "— Get in touch —",
      h1A: "Let’s talk about",
      h1B: "your project.",
      lead:
        "Planning a new website, improving an existing one, or want to be more visible on Google? Write to me — I’d love to hear about your project.",
      portraitAlt: "Marianna Kuzmenko in a black blazer",
      laptopAlt: "Marianna working on laptop",
      cards: {
        email: { label: "Email", value: EMAIL, hint: "I reply within 24 hours." },
        phone: { label: "Phone", value: PHONE_DISPLAY, hint: "Mon–Fri, 9:00–18:00 (CET)" },
        response: { label: "Response time", value: "< 24 hours", hint: "On working days. Personal, never automated." },
        location: { label: "Location", value: "Nuremberg · Germany", hint: "Clients across DACH and internationally." },
      },
      formEye: "Project inquiry",
      formTitleA: "Detailed project?",
      formTitleB: "Use the guided form.",
      formLead:
        "For concrete projects there’s a guided inquiry form — it helps me understand your project faster and prepare a precise proposal.",
      formCta: "Open project form",
      quickTitle: "Write directly",
      quickLead: "If you’d rather start with a short email — one click is enough.",
      quickCta: "Send an email",
      callCta: "Call",
      ctaEye: "— Ready? —",
      ctaTitle: (
        <>
          Ready for a website
          <br />
          that actually <span className="italic text-rose">works</span>?
        </>
      ),
      ctaLead:
        "A short conversation is enough to clarify fit, budget and timing — no commitment.",
      ctaPrimary: "Book a free call",
      ctaSecondary: "View projects",
    },
  );

  const contactItems = [
    { icon: Mail, key: "email" as const, href: `mailto:${EMAIL}` },
    { icon: Phone, key: "phone" as const, href: PHONE_TEL },
    { icon: Clock, key: "response" as const, href: null },
    { icon: MapPin, key: "location" as const, href: null },
  ];

  return (
    <Layout>
      <Seo
        title={t.seoTitle}
        description={t.seoDesc}
        path={path("contact")}
        pathDe={ROUTES.contact.de}
        pathEn={ROUTES.contact.en}
      />

      {/* HERO */}
      <section className="container-editorial pt-10 md:pt-16 pb-14 md:pb-20 relative">
        <div
          className="blob blob-blue animate-float-slower"
          style={{ width: 420, height: 420, top: "-60px", right: "-140px" }}
        />
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-center relative">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-6 reveal">
            <p className="eyebrow mb-5">{t.eyebrow}</p>
            <h1 className="font-display text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.08] tracking-tight">
              {t.h1A} <span className="italic text-rose">{t.h1B}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={path("inquiry")} className="btn-cta">
                {pick(lang, "Projekt anfragen", "Start a project")}
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
              <WhatsAppButton lang={lang} label="WhatsApp" />
            </div>

            <ul className="mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={15} strokeWidth={1.6} className="text-rose" />
                <a href={`mailto:${EMAIL}`} className="underline-draw text-foreground/85 break-all">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} strokeWidth={1.6} className="text-rose" />
                <a href={PHONE_TEL} className="underline-draw text-foreground/85">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} strokeWidth={1.6} className="text-rose" />
                <span className="text-muted-foreground">{pick(lang, "Nürnberg, Deutschland", "Nuremberg, Germany")}</span>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-6 reveal" style={{ transitionDelay: "120ms" }}>
            <div className="relative max-w-[440px] mx-auto lg:mr-0 lg:ml-auto">
              <div
                className="overflow-hidden shadow-[0_30px_70px_-30px_rgba(30,55,75,0.35)]"
                style={{ borderRadius: "48% 48% 44% 44% / 12% 12% 8% 8%" }}
              >
                <img
                  src={portraitWindow}
                  alt={t.portraitAlt}
                  loading="eager"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="glass-card absolute -bottom-5 -left-3 sm:-left-8 px-5 py-4 max-w-[230px]">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  Web Design · Development · SEO
                </p>
                <p className="font-display italic text-base mt-1.5 text-foreground">
                  {pick(lang, "Lass uns etwas Bleibendes schaffen.", "Let’s create something meaningful.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT CARDS */}
      <section className="container-editorial pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const c = t.cards[item.key];
            const Inner = (
              <>
                <div className="w-11 h-11 rounded-2xl bg-rose-soft flex items-center justify-center mb-5 transition-transform duration-500 group-hover:-rotate-6">
                  <Icon size={20} strokeWidth={1.5} className="text-foreground" />
                </div>
                <p className="eyebrow mb-2">{c.label}</p>
                <p className="font-display text-xl md:text-2xl mb-2 break-words">{c.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.hint}</p>
              </>
            );
            const className = "reveal card-soft group cursor-pointer";
            const style = { transitionDelay: `${i * 80}ms` };
            return item.href ? (
              <a key={item.key} href={item.href} className={className} style={style}>
                {Inner}
              </a>
            ) : (
              <div key={item.key} className={className.replace("cursor-pointer", "cursor-default")} style={style}>
                {Inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK ACTIONS + FORM POINTER */}
      <section className="container-editorial pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal card-soft p-8 md:p-10 bg-background/70 backdrop-blur">
            <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center mb-5">
              <MessageCircle size={20} strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">{t.quickTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.quickLead}</p>
            <div className="flex flex-wrap gap-3">
              <WhatsAppButton lang={lang} />
              <a href={`mailto:${EMAIL}`} className="btn-cta-outline">
                {t.quickCta} <Mail size={16} strokeWidth={1.8} />
              </a>
              <a href={PHONE_TEL} className="btn-cta-outline">
                {t.callCta} <Phone size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div
            className="reveal card-soft p-8 md:p-10"
            style={{ background: "var(--gradient-soft)", transitionDelay: "120ms" }}
          >
            <p className="eyebrow mb-4">{t.formEye}</p>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              {t.formTitleA}
              <br />
              <span className="italic text-rose">{t.formTitleB}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.formLead}</p>
            <Link to={path("inquiry")} className="btn-cta">
              {t.formCta} <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
            <div className="mt-8 pt-6 border-t border-border/70">
              <p className="text-sm text-muted-foreground mb-4">
                {pick(lang, "Sie möchten direkt ein konkretes Projekt anfragen?", "Ready to request a concrete project?")}
              </p>
              <Link to={path("briefing")} className="btn-cta-outline">
                {pick(lang, "Zum Projekt-Briefing", "Go to project briefing")} <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConversionCta
        eyebrow={t.ctaEye}
        title={t.ctaTitle}
        lead={t.ctaLead}
        primary={{ label: t.ctaPrimary, href: path("inquiry") }}
        secondary={{ label: t.ctaSecondary, href: path("work") }}
      />
    </Layout>
  );
};

export default Kontakt;
