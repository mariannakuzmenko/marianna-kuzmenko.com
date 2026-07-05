import { createContext, useContext, useMemo, ReactNode } from "react";
import { useLocation } from "react-router-dom";

export type Lang = "de" | "en";

/**
 * Bilingual route map. Keys are stable identifiers, values are localized URL paths.
 * Used both for the language switcher (to find the counterpart of the current page)
 * and for any `Link` that wants the right URL for the active language.
 */
export const ROUTES: Record<string, { de: string; en: string }> = {
  home:    { de: "/",                en: "/en" },
  about:   { de: "/ueber-mich",      en: "/en/about" },
  web:     { de: "/webentwicklung",  en: "/en/web-development" },
  seo:     { de: "/seo",             en: "/en/seo" },
  work:    { de: "/projekte",        en: "/en/projects" },
  blog:    { de: "/blog",            en: "/en/blog" },
  pricing: { de: "/preise",          en: "/en/pricing" },
  certs:   { de: "/zertifikate",     en: "/en/certificates" },
  faq:     { de: "/faq",             en: "/en/faq" },
  inquiry: { de: "/projektanfrage",  en: "/en/project-inquiry" },
  contact: { de: "/kontakt",         en: "/en/contact" },
  imprint:    { de: "/impressum",    en: "/impressum" },
  privacy:    { de: "/datenschutz",  en: "/datenschutz" },
  terms:      { de: "/agb",          en: "/agb" },
};

interface Ctx {
  lang: Lang;
  /** Returns the localized version of a known route key. */
  path: (key: keyof typeof ROUTES) => string;
  /** Returns the counterpart of the current pathname in the other language (for switcher). */
  altPath: (otherLang: Lang) => string;
}

const LangCtx = createContext<Ctx | null>(null);

const detectLang = (pathname: string): Lang =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const lang = detectLang(pathname);

  const value = useMemo<Ctx>(() => {
    const path = (key: keyof typeof ROUTES) => ROUTES[key][lang];

    const altPath = (other: Lang): string => {
      // Try to find a known route mapping match.
      for (const k of Object.keys(ROUTES) as (keyof typeof ROUTES)[]) {
        const cur = ROUTES[k][lang];
        if (pathname === cur) return ROUTES[k][other];
      }
      // Blog post: /blog/:slug ↔ /en/blog/:slug (slug stays same)
      if (pathname.startsWith("/blog/")) {
        const slug = pathname.replace("/blog/", "");
        return other === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;
      }
      if (pathname.startsWith("/en/blog/")) {
        const slug = pathname.replace("/en/blog/", "");
        return other === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;
      }
      // Case study: /projekte/:slug ↔ /en/projects/:slug
      if (pathname.startsWith("/projekte/")) {
        const slug = pathname.replace("/projekte/", "");
        return other === "en" ? `/en/projects/${slug}` : `/projekte/${slug}`;
      }
      if (pathname.startsWith("/en/projects/")) {
        const slug = pathname.replace("/en/projects/", "");
        return other === "en" ? `/en/projects/${slug}` : `/projekte/${slug}`;
      }

      // Fallback to home.
      return ROUTES.home[other];
    };

    return { lang, path, altPath };
  }, [lang, pathname]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
};

export const useLang = (): Ctx => {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
};

/** Picks the right value for the current language. */
export const pick = <T,>(lang: Lang, de: T, en: T): T => (lang === "en" ? en : de);
