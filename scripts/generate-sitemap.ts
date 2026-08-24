// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.marianna-kuzmenko.com";

interface Entry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
  altDe?: string;
  altEn?: string;
}

// Static routes — mirrored to /en counterparts via ROUTES map in src/i18n/LanguageContext.tsx
const pairs: Array<{ de: string; en: string; priority?: string; changefreq?: Entry["changefreq"] }> = [
  { de: "/", en: "/en", priority: "1.0", changefreq: "weekly" },
  { de: "/ueber-mich", en: "/en/about", priority: "0.9", changefreq: "monthly" },
  { de: "/webentwicklung", en: "/en/web-development", priority: "0.9", changefreq: "monthly" },
  { de: "/seo", en: "/en/seo", priority: "0.9", changefreq: "monthly" },
  { de: "/projekte", en: "/en/projects", priority: "0.8", changefreq: "monthly" },
  { de: "/blog", en: "/en/blog", priority: "0.8", changefreq: "weekly" },
  { de: "/preise", en: "/en/pricing", priority: "0.8", changefreq: "monthly" },
  { de: "/zertifikate", en: "/en/certificates", priority: "0.6", changefreq: "yearly" },
  { de: "/faq", en: "/en/faq", priority: "0.7", changefreq: "monthly" },
  { de: "/projektanfrage", en: "/en/project-inquiry", priority: "0.9", changefreq: "monthly" },
];

// Blog posts — kept in sync with src/data/posts.ts (slug only)
const blogSlugs = [
  "website-erstellen-lassen",
  "seo-nuernberg",
  "webdesign-trends-2026",
  "ux-ui-fuer-kmu",
];

const entries: Entry[] = [];
for (const p of pairs) {
  entries.push({ path: p.de, altDe: p.de, altEn: p.en, priority: p.priority, changefreq: p.changefreq });
  entries.push({ path: p.en, altDe: p.de, altEn: p.en, priority: p.priority, changefreq: p.changefreq });
}
for (const s of blogSlugs) {
  entries.push({ path: `/blog/${s}`, altDe: `/blog/${s}`, altEn: `/en/blog/${s}`, priority: "0.6", changefreq: "monthly" });
  entries.push({ path: `/en/blog/${s}`, altDe: `/blog/${s}`, altEn: `/en/blog/${s}`, priority: "0.6", changefreq: "monthly" });
}

// Legal pages (single-language)
for (const p of ["/impressum", "/datenschutz", "/agb"]) {
  entries.push({ path: p, priority: "0.3", changefreq: "yearly" });
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      e.altDe ? `    <xhtml:link rel="alternate" hreflang="de" href="${BASE_URL}${e.altDe}"/>` : null,
      e.altEn ? `    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${e.altEn}"/>` : null,
      e.altDe && e.altEn ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.altDe}"/>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
