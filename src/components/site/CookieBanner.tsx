import { useState } from "react";
import { Cookie, Settings2, X } from "lucide-react";
import { useConsent, ConsentCategory } from "@/consent/ConsentContext";
import { useLang, pick } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const CATS: { id: Exclude<ConsentCategory, "necessary">; de: string; en: string; desc_de: string; desc_en: string }[] = [
  { id: "analytics",     de: "Analyse",         en: "Analytics",     desc_de: "Anonymisierte Nutzungsstatistiken (z.B. Google Analytics 4).", desc_en: "Anonymised usage statistics (e.g. Google Analytics 4)." },
  { id: "marketing",     de: "Marketing",       en: "Marketing",     desc_de: "Personalisierte Anzeigen und Remarketing-Pixel.",             desc_en: "Personalised ads and remarketing pixels." },
  { id: "external_media",de: "Externe Medien",  en: "External Media",desc_de: "Eingebettete Inhalte wie Google Maps, YouTube, Vimeo.",        desc_en: "Embedded content like Google Maps, YouTube, Vimeo." },
];

export const CookieBanner = () => {
  const { lang, path } = useLang();
  const { bannerOpen, settingsOpen, consent, acceptAll, rejectAll, save, closeSettings, openSettings } = useConsent();
  const [draft, setDraft] = useState(consent);

  if (!bannerOpen && !settingsOpen) return null;

  const t = pick(lang, {
    title: "Cookies & Privatsphäre",
    lead: "Diese Website nutzt notwendige Cookies für den Betrieb und optionale Cookies für Analyse, Marketing und externe Medien. Deine Einwilligung ist freiwillig und jederzeit widerrufbar.",
    accept: "Alle akzeptieren",
    reject: "Nur Notwendige",
    customize: "Einstellungen",
    save: "Auswahl speichern",
    close: "Schließen",
    necessary: "Notwendig",
    necessaryDesc: "Für Grundfunktionen der Website erforderlich. Immer aktiv.",
    always: "Immer aktiv",
    settingsTitle: "Cookie-Einstellungen",
    more: "Datenschutz",
    cookiePolicy: "Cookie-Richtlinie",
  }, {
    title: "Cookies & privacy",
    lead: "This site uses necessary cookies to run and optional cookies for analytics, marketing and embedded media. Your consent is voluntary and can be withdrawn anytime.",
    accept: "Accept all",
    reject: "Necessary only",
    customize: "Customize",
    save: "Save selection",
    close: "Close",
    necessary: "Necessary",
    necessaryDesc: "Required for core site functions. Always on.",
    always: "Always on",
    settingsTitle: "Cookie settings",
    more: "Privacy",
    cookiePolicy: "Cookie policy",
  });

  return (
    <>
      {/* BANNER */}
      {bannerOpen && !settingsOpen && (
        <div id="cookie-banner" className="fixed inset-x-0 bottom-0 z-[100] p-3 md:p-6 pointer-events-none">
          <div className="pointer-events-auto max-w-4xl mx-auto rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl p-5 md:p-7">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-rose-soft items-center justify-center shrink-0">
                <Cookie size={20} strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-lg md:text-xl mb-1">{t.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.lead}{" "}
                  <Link to={path("privacy")} className="underline-draw">{t.more}</Link>
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <button onClick={acceptAll} className="btn-pink text-sm">{t.accept}</button>
                  <button onClick={rejectAll} className="btn-pink-outline text-sm">{t.reject}</button>
                  <button
                    onClick={() => { setDraft(consent); openSettings(); }}
                    className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-full hover:bg-muted transition-colors"
                  >
                    <Settings2 size={14} strokeWidth={1.6} />
                    {t.customize}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SETTINGS MODAL */}
      {settingsOpen && (
        <div className="fixed inset-0 z-[110] flex items-end md:items-center justify-center p-3 md:p-6 bg-foreground/40 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background shadow-2xl border border-border">
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="eyebrow mb-2">{t.cookiePolicy}</p>
                  <h2 className="font-display text-2xl md:text-3xl">{t.settingsTitle}</h2>
                </div>
                <button onClick={closeSettings} aria-label={t.close} className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center">
                  <X size={18} strokeWidth={1.6} />
                </button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.lead}</p>

              <div className="space-y-3">
                <div className="rounded-xl border border-border p-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{t.necessary}</p>
                    <p className="text-sm text-muted-foreground mt-1">{t.necessaryDesc}</p>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-rose">{t.always}</span>
                </div>

                {CATS.map((c) => (
                  <label key={c.id} className="rounded-xl border border-border p-4 flex items-start justify-between gap-4 cursor-pointer hover:border-foreground/30 transition-colors">
                    <div>
                      <p className="font-medium">{pick(lang, c.de, c.en)}</p>
                      <p className="text-sm text-muted-foreground mt-1">{pick(lang, c.desc_de, c.desc_en)}</p>
                    </div>
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 accent-[hsl(var(--rose,340_65%_45%))]"
                      checked={!!draft[c.id]}
                      onChange={(e) => setDraft({ ...draft, [c.id]: e.target.checked })}
                    />
                  </label>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <button onClick={() => save(draft)} className="btn-pink text-sm">{t.save}</button>
                <button onClick={acceptAll} className="btn-pink-outline text-sm">{t.accept}</button>
                <button onClick={rejectAll} className="btn-pink-outline text-sm">{t.reject}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
