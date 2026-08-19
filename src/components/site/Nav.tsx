import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang, ROUTES, pick } from "@/i18n/LanguageContext";
import { WhatsAppButton } from "./WhatsAppButton";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const { lang, path, altPath } = useLang();

  const links = [
    { to: path("home"),    label: pick(lang, "Start", "Home") },
    { to: path("about"),   label: pick(lang, "Über mich", "About") },
    { to: path("web"),     label: pick(lang, "Web Dev", "Web Dev") },
    { to: path("seo"),     label: pick(lang, "SEO", "SEO") },
    { to: path("work"),    label: pick(lang, "Projekte", "Work") },
    { to: path("pricing"), label: pick(lang, "Preise", "Pricing") },
    { to: path("faq"),     label: pick(lang, "FAQ", "FAQ") },
    { to: path("blog"),    label: pick(lang, "Blog", "Blog") },
    { to: path("contact"), label: pick(lang, "Kontakt", "Contact") },
  ];

  const ctaLabel = pick(lang, "Projekt starten", "Start a Project");
  const ctaHref = path("inquiry");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="container-editorial flex items-center justify-between h-16 md:h-20 xl:h-24 gap-4">
        <Link to={path("home")} className="group flex items-center py-2 shrink-0" aria-label="Marianna Kuzmenko — Web Design & Development">
          <img
            src={logo}
            alt="Marianna Kuzmenko"
            className="h-10 md:h-14 xl:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ filter: "drop-shadow(0 4px 18px hsl(208 70% 50% / 0.35))" }}
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 min-w-0">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === ROUTES.home.de || l.to === ROUTES.home.en}
              className={({ isActive }) =>
                `swap-link text-sm tracking-wide whitespace-nowrap ${isActive ? "text-rose" : "text-foreground"}`
              }
            >
              <span>{l.label}</span>
              <span aria-hidden>{l.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <LangSwitcher />
          <WhatsAppButton
            lang={lang}
            label="WhatsApp"
            variant="compact"
            className="!py-2.5 !px-4 !text-xs whitespace-nowrap"
          />
          <Link to={ctaHref} className="btn-cta !py-3 !px-6 !text-sm whitespace-nowrap">
            {ctaLabel} <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>

        <div className="xl:hidden flex items-center gap-2 shrink-0">
          <LangSwitcher compact />
          <WhatsAppButton
            lang={lang}
            label="WhatsApp"
            variant="compact"
            className="!py-2 !px-3 !text-[11px] whitespace-nowrap"
          />
          <Link
            to={ctaHref}
            className="hidden sm:inline-flex btn-cta !py-2.5 !px-4 !text-xs whitespace-nowrap"
          >
            {pick(lang, "Projekt", "Project")} <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full bg-secondary"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-paper/95 backdrop-blur-xl animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-editorial py-6 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === ROUTES.home.de || l.to === ROUTES.home.en}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-2xl md:text-3xl py-1.5 ${isActive ? "text-rose italic" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-3 items-start">
              <Link to={ctaHref} onClick={() => setOpen(false)} className="btn-cta">
                {ctaLabel} <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
              <WhatsAppButton lang={lang} variant="compact" />
            </div>
          </div>
        </div>
      )}
    </header>
  );

  function LangSwitcher({ compact = false }: { compact?: boolean }) {
    const base = "font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300";
    return (
      <div className="inline-flex items-center gap-1 shrink-0">
        {lang === "de" ? (
          <span className={`${base} px-2 py-1 rounded-full text-rose bg-rose-soft`} aria-current="true">DE</span>
        ) : (
          <Link to={altPath("de")} className={`${base} px-2 py-1 rounded-full text-muted-foreground hover:text-foreground`}>DE</Link>
        )}
        <span className="text-muted-foreground/40 text-[10px]">/</span>
        {lang === "en" ? (
          <span className={`${base} px-2 py-1 rounded-full text-rose bg-rose-soft`} aria-current="true">EN</span>
        ) : (
          <Link to={altPath("en")} className={`${base} px-2 py-1 rounded-full text-muted-foreground hover:text-foreground`}>EN</Link>
        )}
      </div>
    );
  }
};
