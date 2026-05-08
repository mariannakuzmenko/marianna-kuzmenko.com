import { Helmet } from "react-helmet-async";
import { useLang } from "@/i18n/LanguageContext";

interface SeoProps {
  title: string;
  description: string;
  /** Path used for canonical/og:url. If both pathDe & pathEn omitted, falls back to "/". */
  path?: string;
  /** Optional explicit alternate paths (used to emit hreflang). */
  pathDe?: string;
  pathEn?: string;
}

const ORIGIN = "https://mariannakuzmenko.de";

export const Seo = ({ title, description, path = "/", pathDe, pathEn }: SeoProps) => {
  const { lang } = useLang();
  const url = `${ORIGIN}${path}`;
  const altDe = pathDe ? `${ORIGIN}${pathDe}` : undefined;
  const altEn = pathEn ? `${ORIGIN}${pathEn}` : undefined;
  return (
    <Helmet>
      <html lang={lang === "en" ? "en" : "de"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {altDe && <link rel="alternate" hrefLang="de" href={altDe} />}
      {altEn && <link rel="alternate" hrefLang="en" href={altEn} />}
      {altDe && altEn && <link rel="alternate" hrefLang="x-default" href={altDe} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "de_DE"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
