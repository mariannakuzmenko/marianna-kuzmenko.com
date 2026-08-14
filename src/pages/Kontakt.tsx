import { Link } from "react-router-dom";
import { Mail, Phone, Clock, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { ConversionCta } from "@/components/site/ConversionCta";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CONTACT, telLink } from "@/data/contact";
import portraitWindow from "@/assets/portraits/marianna-portrait-window.jpeg";
import portraitLaptop from "@/assets/portraits/marianna-laptop-coffee.jpeg";
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
      eyebrow: "— Kontakt —",
      h1A: "Lass uns",
      h1B: "reden.",
      lead:
        "Ob konkretes Projekt oder erste Idee — schreib mir direkt. Du sprichst mit mir, nicht mit einer Hotline.",
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
      eyebrow: "— Contact —",
      h1A: "Let’s",
      h1B: "talk.",
      lead:
        "Whether it’s a concrete project or an early idea — write to me directly. You’ll be talking to me, not a hotline.",
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
    { icon: Phone, key: "phone" as const, href: `tel:${PHONE_TEL}` },
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
      <section className="container-editorial pt-12 md:pt-20 pb-16 relative">
        <div
          className="blob blob-pink animate-float-slow"
          style={{ width: 380, height: 380, top: "40px", right: "-100px" }}
        />
        <div
          className="blob blob-blue animate-float-slower"
          style={{ width: 320, height: 320, bottom: "-40px", left: "-80px" }}
        />
        <p className="eyebrow mb-6 relative">{t.eyebrow}</p>
        <div className="grid grid-cols-12 gap-8 items-end relative">
          <div className="col-span-12 md:col-span-7">
            <h1 className="display-xl">
              {t.h1A}
              <br />
              <span className="italic text-rose">{t.h1B}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.lead}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 relative">
            <div className="frame-soft aspect-[4/5] max-w-[380px] ml-auto">
              <img src={portraitWindow} alt={t.portraitAlt} loading="eager" />
            </div>
            <div
              className="hidden md:block frame-soft aspect-square w-32 absolute -bottom-8 -left-4 shadow-xl"
              style={{ transform: "rotate(-4deg)" }}
            >
              <img src={portraitLaptop} alt={t.laptopAlt} loading="lazy" />
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
              <a href={`mailto:${EMAIL}`} className="btn-cta">
                {t.quickCta} <Mail size={16} strokeWidth={1.8} />
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-cta-outline">
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
