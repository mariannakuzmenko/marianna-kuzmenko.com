import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { useConsent } from "@/consent/ConsentContext";
import { useLang, pick, ROUTES } from "@/i18n/LanguageContext";
import { Settings2 } from "lucide-react";

const CookieRichtlinie = () => {
  const { lang } = useLang();
  const { openSettings } = useConsent();

  const t = pick(lang, {
    title: "Cookie-Richtlinie — Marianna Kuzmenko",
    desc: "Informationen zu den auf dieser Website eingesetzten Cookies, ihren Kategorien, Zwecken und Speicherdauern.",
    eyebrow: "Rechtliches",
    h1: "Cookie-Richtlinie",
    intro: "Diese Cookie-Richtlinie erklärt, welche Cookies und ähnlichen Technologien auf mariannakuzmenko.de eingesetzt werden, zu welchem Zweck und wie du deine Einwilligung jederzeit verwalten kannst.",
    settingsCta: "Cookie-Einstellungen öffnen",
    sections: [
      { h: "1. Was sind Cookies?", p: "Cookies sind kleine Textdateien, die beim Besuch einer Website auf deinem Endgerät gespeichert werden. Sie ermöglichen unter anderem, Einstellungen zu speichern, die Nutzung zu analysieren oder Inhalte auszuspielen." },
      { h: "2. Rechtsgrundlage", p: "Notwendige Cookies werden auf Grundlage von § 25 Abs. 2 TTDSG bzw. Art. 6 Abs. 1 lit. f DSGVO eingesetzt. Alle anderen Kategorien nur nach ausdrücklicher Einwilligung gemäß § 25 Abs. 1 TTDSG und Art. 6 Abs. 1 lit. a DSGVO." },
      { h: "3. Kategorien",
        list: [
          { k: "Notwendig", v: "Für den Betrieb der Website unverzichtbar (Session, Consent-Status, Sicherheit). Speicherung deiner Cookie-Auswahl — Speicherdauer bis zu 12 Monate." },
          { k: "Analyse", v: "Google Analytics 4 (nur nach Einwilligung, IP-Anonymisierung, Consent Mode v2). Speicherdauer bis zu 14 Monate." },
          { k: "Marketing", v: "Aktuell nicht aktiv — vorbereitet für zukünftige Kampagnen (z.B. Meta Pixel, LinkedIn Insight). Speicherdauer bis zu 12 Monate." },
          { k: "Externe Medien", v: "Eingebettete Inhalte wie Google Maps, YouTube oder Vimeo. Werden erst nach Einwilligung geladen." },
        ] },
      { h: "4. Widerruf & Verwaltung", p: "Du kannst deine Einwilligung jederzeit über den Button „Cookie-Einstellungen" (auch im Footer verlinkt) widerrufen oder anpassen. Die Rechtmäßigkeit bereits erfolgter Verarbeitung bleibt davon unberührt." },
      { h: "5. Drittanbieter", p: "Beim Einsatz von Diensten wie Google Analytics werden Daten ggf. in Drittländer außerhalb der EU/des EWR (insbesondere USA) übertragen. Grundlage sind Standardvertragsklauseln gemäß Art. 46 DSGVO." },
    ],
  }, {
    title: "Cookie policy — Marianna Kuzmenko",
    desc: "Information on the cookies used on this website, their categories, purposes and retention periods.",
    eyebrow: "Legal",
    h1: "Cookie policy",
    intro: "This cookie policy explains which cookies and similar technologies are used on mariannakuzmenko.de, for what purpose, and how you can manage your consent at any time.",
    settingsCta: "Open cookie settings",
    sections: [
      { h: "1. What are cookies?", p: "Cookies are small text files stored on your device when you visit a website. They enable settings to be saved, usage to be analysed and content to be delivered." },
      { h: "2. Legal basis", p: "Necessary cookies are set on the basis of § 25 (2) TTDSG and Art. 6 (1) (f) GDPR. All other categories are set only after your explicit consent under § 25 (1) TTDSG and Art. 6 (1) (a) GDPR." },
      { h: "3. Categories",
        list: [
          { k: "Necessary", v: "Essential for site operation (session, consent state, security). Consent selection is stored for up to 12 months." },
          { k: "Analytics", v: "Google Analytics 4 (only after consent, IP anonymised, Consent Mode v2). Retention up to 14 months." },
          { k: "Marketing", v: "Not active — prepared for future campaigns (e.g. Meta Pixel, LinkedIn Insight). Retention up to 12 months." },
          { k: "External media", v: "Embedded content such as Google Maps, YouTube or Vimeo. Only loaded after consent." },
        ] },
      { h: "4. Withdrawal & management", p: "You can withdraw or adjust your consent at any time via the “Cookie settings” button (also linked in the footer). The lawfulness of processing based on consent before its withdrawal is not affected." },
      { h: "5. Third parties", p: "When services like Google Analytics are used, data may be transferred to third countries outside the EU/EEA (in particular the USA). Standard contractual clauses under Art. 46 GDPR apply." },
    ],
  });

  return (
    <Layout>
      <Seo title={t.title} description={t.desc} path={pick(lang, "/cookie-richtlinie", "/en/cookie-policy")} pathDe={ROUTES.cookie?.de ?? "/cookie-richtlinie"} pathEn={ROUTES.cookie?.en ?? "/en/cookie-policy"} />
      <section className="container-editorial pt-12 pb-24 max-w-3xl">
        <p className="eyebrow mb-6">{t.eyebrow}</p>
        <h1 className="display-xl mb-6">{t.h1}</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">{t.intro}</p>
        <button onClick={openSettings} className="btn-pink text-sm mb-12">
          <Settings2 size={14} strokeWidth={1.6} />
          {t.settingsCta}
        </button>

        <article className="space-y-10">
          {t.sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-2xl mb-3">{s.h}</h2>
              {"p" in s && s.p && <p className="text-foreground leading-relaxed">{s.p}</p>}
              {"list" in s && s.list && (
                <ul className="space-y-3 mt-3">
                  {s.list.map((it, j) => (
                    <li key={j} className="rounded-xl border border-border p-4">
                      <p className="font-medium">{it.k}</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{it.v}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>
      </section>
    </Layout>
  );
};

export default CookieRichtlinie;
