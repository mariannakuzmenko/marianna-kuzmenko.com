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
  /** OG/Twitter image (absolute URL preferred). */
  image?: string;
  /** OG type — defaults to "website". Use "article" for blog posts. */
  type?: "website" | "article" | "profile";
  /** Additional JSON-LD structured-data objects to inject. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** If true, emits robots noindex,nofollow. */
  noindex?: boolean;
}

const ORIGIN = "https://mariannakuzmenko.de";
const DEFAULT_OG = `${ORIGIN}/og-cover.jpg`;

export const Seo = ({
  title,
  description,
  path = "/",
  pathDe,
  pathEn,
  image,
  type = "website",
  jsonLd,
  noindex,
}: SeoProps) => {
  const { lang } = useLang();
  const url = `${ORIGIN}${path}`;
  const altDe = pathDe ? `${ORIGIN}${pathDe}` : undefined;
  const altEn = pathEn ? `${ORIGIN}${pathEn}` : undefined;
  const ogImage = image ?? DEFAULT_OG;

  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang={lang === "en" ? "en" : "de"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1"} />
      <link rel="canonical" href={url} />
      {altDe && <link rel="alternate" hrefLang="de" href={altDe} />}
      {altEn && <link rel="alternate" hrefLang="en" href={altEn} />}
      {altDe && altEn && <link rel="alternate" hrefLang="x-default" href={altDe} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Marianna Kuzmenko" />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "de_DE"} />
      <meta property="og:locale:alternate" content={lang === "en" ? "de_DE" : "en_US"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
