import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang, pick } from "@/i18n/LanguageContext";
import { useConsent } from "@/consent/ConsentContext";
import { WhatsAppButton } from "./WhatsAppButton";
import { CONTACT, telLink } from "@/data/contact";

export const Footer = () => {
  const { lang, path } = useLang();
  const { openSettings } = useConsent();
  return (
    <footer className="relative mt-20 md:mt-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
      <div className="blob blob-pink" style={{ width: 380, height: 380, top: "-80px", right: "10%" }} />
      <div className="container-editorial py-16 md:py-20 relative">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <img
              src={logo}
              alt="Marianna Kuzmenko"
              className="h-12 md:h-14 w-auto object-contain mb-8"
              style={{ filter: "drop-shadow(0 4px 18px hsl(208 70% 50% / 0.35))" }}
            />
            <p className="eyebrow mb-6">{pick(lang, "Lass uns reden", "Let’s talk")}</p>
            <h2 className="display-md mb-8">
              {pick(lang, <>Bereit für eine Website,<br />die wirklich <em className="text-rose not-italic">funktioniert</em>?</>,
                          <>Ready for a website<br />that actually <em className="text-rose not-italic">works</em>?</>)}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link to={path("inquiry")} className="btn-cta">
                {pick(lang, "Projekt starten", "Start a Project")}
                <Mail size={16} strokeWidth={1.6} />
              </Link>
              <WhatsAppButton lang={lang} />
              <a href={`mailto:${CONTACT.email}`} className="btn-cta-outline">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">{pick(lang, "Navigation", "Navigation")}</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to={path("home")}    className="underline-draw">{pick(lang, "Startseite", "Home")}</Link></li>
              <li><Link to={path("about")}   className="underline-draw">{pick(lang, "Über mich", "About")}</Link></li>
              <li><Link to={path("web")}     className="underline-draw">{pick(lang, "Webentwicklung", "Web Development")}</Link></li>
              <li><Link to={path("seo")}     className="underline-draw">{pick(lang, "SEO Optimierung", "SEO Optimization")}</Link></li>
              <li><Link to={path("work")}    className="underline-draw">{pick(lang, "Projekte", "Work")}</Link></li>
              <li><Link to={path("pricing")} className="underline-draw">{pick(lang, "Preise", "Pricing")}</Link></li>
              <li><Link to={path("inquiry")} className="underline-draw">{pick(lang, "Projektanfrage", "Project Inquiry")}</Link></li>
              <li><Link to={path("certs")}   className="underline-draw">{pick(lang, "Zertifikate", "Certificates")}</Link></li>
              <li><Link to={path("faq")}     className="underline-draw">FAQ</Link></li>
              <li><Link to={path("blog")}    className="underline-draw">Blog</Link></li>
              <li><Link to={path("contact")} className="underline-draw">{pick(lang, "Kontakt", "Contact")}</Link></li>
            </ul>
            <p className="eyebrow mt-8 mb-4">{pick(lang, "Rechtliches", "Legal")}</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to={path("imprint")} className="underline-draw">Impressum</Link></li>
              <li><Link to={path("privacy")} className="underline-draw">{pick(lang, "Datenschutz", "Privacy")}</Link></li>
              <li><Link to={path("terms")}   className="underline-draw">AGB</Link></li>
              <li><Link to={path("cookie")} className="underline-draw">{pick(lang, "Cookie-Richtlinie", "Cookie policy")}</Link></li>
              <li><Link to={path("disclaimer")} className="underline-draw">{pick(lang, "Haftungsausschluss", "Disclaimer")}</Link></li>
              <li><button type="button" onClick={openSettings} className="underline-draw text-left">{pick(lang, "Cookie-Einstellungen", "Cookie settings")}</button></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">{pick(lang, "Standort", "Location")}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {pick(lang, <>Freelancer Webdesigner<br />Deutschland · Remote weltweit</>,
                          <>Freelance Web Designer<br />Germany · Remote worldwide</>)}
            </p>
            <p className="eyebrow mt-8 mb-4">{pick(lang, "Direktkontakt", "Direct contact")}</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 underline-draw">
                  <Mail size={14} strokeWidth={1.6} /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={telLink} className="inline-flex items-center gap-2 underline-draw">
                  <Phone size={14} strokeWidth={1.6} /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} strokeWidth={1.6} /> {CONTACT.street}, {CONTACT.zipCity}
              </li>
            </ul>
          </div>
        </div>



        <div className="hairline mt-14 mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Marianna Kuzmenko · {pick(lang, "Alle Rechte vorbehalten", "All rights reserved")}</p>
          <p>{pick(lang, "Mit Sorgfalt gemacht — in Deutschland", "Crafted with care — in Germany")}</p>
        </div>
      </div>
    </footer>
  );
};
