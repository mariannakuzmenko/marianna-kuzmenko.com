import { useState } from "react";
import { MapPin, Play } from "lucide-react";
import { useConsent } from "@/consent/ConsentContext";
import { useLang, pick } from "@/i18n/LanguageContext";

interface Props {
  /** Full Google Maps embed URL. Falls back to a Nuremberg placeholder if omitted. */
  src?: string;
  address?: string;
}

/** Consent-aware Google Maps embed. Shows placeholder until user allows external media. */
export const MapEmbed = ({ src, address = "Nürnberg, Deutschland" }: Props) => {
  const { lang } = useLang();
  const { consent, openSettings, save } = useConsent();
  const [oneOff, setOneOff] = useState(false);
  const show = consent.external_media || oneOff;

  const embedSrc = src ?? `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const t = pick(lang, {
    title: "Karte laden",
    lead: "Diese Karte wird von Google Maps bereitgestellt. Beim Laden werden Daten an Google übertragen.",
    load: "Karte anzeigen",
    always: "Immer erlauben",
    change: "Einstellungen ändern",
  }, {
    title: "Load map",
    lead: "This map is provided by Google Maps. Loading it transfers data to Google.",
    load: "Show map",
    always: "Always allow",
    change: "Change settings",
  });

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border aspect-[16/10] bg-muted">
      {show ? (
        <iframe
          title={`Google Maps — ${address}`}
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6" style={{ background: "var(--gradient-soft)" }}>
          <div className="max-w-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-soft flex items-center justify-center mb-4">
              <MapPin size={20} strokeWidth={1.6} />
            </div>
            <p className="font-display text-xl mb-2">{t.title}</p>
            <p className="text-sm text-muted-foreground mb-5">{t.lead}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <button onClick={() => setOneOff(true)} className="btn-pink text-sm">
                <Play size={14} strokeWidth={1.6} /> {t.load}
              </button>
              <button onClick={() => save({ external_media: true })} className="btn-pink-outline text-sm">
                {t.always}
              </button>
              <button onClick={openSettings} className="text-xs underline-draw">{t.change}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
