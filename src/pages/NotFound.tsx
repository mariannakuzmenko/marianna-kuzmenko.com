import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowUpRight, Home, Mail, Search } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { useLang, pick } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { lang, path } = useLang();

  useEffect(() => {
    console.warn("404:", location.pathname);
  }, [location.pathname]);

  const t = pick(
    lang,
    {
      eyebrow: "Fehler 404",
      title: "Diese Seite",
      titleItalic: "existiert nicht.",
      lead: "Vielleicht wurde sie verschoben oder es hat sich ein Tippfehler eingeschlichen. Kein Grund zur Sorge — hier geht es weiter:",
      home: "Zur Startseite",
      work: "Projekte ansehen",
      contact: "Kontakt aufnehmen",
      pathLabel: "Aufgerufener Pfad",
    },
    {
      eyebrow: "Error 404",
      title: "This page",
      titleItalic: "doesn't exist.",
      lead: "It may have been moved or the link contains a typo. No worries — here's how to continue:",
      home: "Back to Home",
      work: "Browse projects",
      contact: "Get in touch",
      pathLabel: "Requested path",
    },
  );

  return (
    <Layout>
      <Seo
        title={pick(lang, "Seite nicht gefunden — Marianna Kuzmenko", "Page not found — Marianna Kuzmenko")}
        description={t.lead}
        path={location.pathname}
        noindex
      />
      <section className="container-editorial py-24 md:py-20 md:py-24 min-h-[70vh] flex items-center">
        <div className="grid grid-cols-12 gap-8 w-full items-center">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-6">{t.eyebrow}</p>
            <h1 className="display-lg mb-6">
              {t.title}<br />
              <span className="italic text-rose">{t.titleItalic}</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">{t.lead}</p>

            <div className="flex flex-wrap gap-3">
              <Link to={path("home")} className="btn-cta">
                <Home size={16} strokeWidth={1.8} /> {t.home}
              </Link>
              <Link to={path("work")} className="btn-cta-outline">
                <Search size={16} strokeWidth={1.8} /> {t.work}
              </Link>
              <Link to={path("contact")} className="btn-cta-outline">
                <Mail size={16} strokeWidth={1.8} /> {t.contact} <ArrowUpRight size={14} />
              </Link>
            </div>

            <p className="mt-10 text-xs font-mono uppercase tracking-widest text-muted-foreground/70 break-all">
              {t.pathLabel}: <span className="text-foreground/70">{location.pathname}</span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
            <div className="relative select-none" aria-hidden="true">
              <div className="absolute inset-0 blur-3xl bg-rose-soft rounded-full scale-90 opacity-70" />
              <div className="relative font-display italic text-[10rem] md:text-[14rem] leading-none text-rose/90 tracking-tighter">
                404
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
