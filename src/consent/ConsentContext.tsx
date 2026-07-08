import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type ConsentCategory = "necessary" | "analytics" | "marketing" | "external_media";
export type Consent = Record<ConsentCategory, boolean>;

const STORAGE_KEY = "mk-consent-v1";
const DEFAULT: Consent = { necessary: true, analytics: false, marketing: false, external_media: false };

interface Ctx {
  consent: Consent;
  decided: boolean;
  bannerOpen: boolean;
  settingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  openBanner: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (c: Partial<Consent>) => void;
}

const ConsentCtx = createContext<Ctx | null>(null);

/** Google Consent Mode v2 default: everything denied until user consents. */
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; }
}

const pushConsent = (c: Consent) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const fn: (...args: unknown[]) => void =
    window.gtag ||
    ((...args: unknown[]) => { window.dataLayer!.push(args); });
  window.gtag = fn;
  fn("consent", "update", {
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
    analytics_storage: c.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
};

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<Consent>(DEFAULT);
  const [decided, setDecided] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    // Initialize Consent Mode defaults BEFORE any tag loads.
    window.dataLayer = window.dataLayer || [];
    const fn: (...args: unknown[]) => void =
      window.gtag ||
      ((...args: unknown[]) => { window.dataLayer!.push(args); });
    window.gtag = fn;
    fn("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
      wait_for_update: 500,
    });

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Consent;
        const merged = { ...DEFAULT, ...parsed, necessary: true };
        setConsent(merged);
        setDecided(true);
        pushConsent(merged);
      } else {
        setBannerOpen(true);
      }
    } catch {
      setBannerOpen(true);
    }
  }, []);

  const persist = useCallback((c: Consent) => {
    const next = { ...c, necessary: true };
    setConsent(next);
    setDecided(true);
    setBannerOpen(false);
    setSettingsOpen(false);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
    pushConsent(next);
  }, []);

  const value = useMemo<Ctx>(() => ({
    consent,
    decided,
    bannerOpen,
    settingsOpen,
    openSettings: () => setSettingsOpen(true),
    closeSettings: () => setSettingsOpen(false),
    openBanner: () => setBannerOpen(true),
    acceptAll: () => persist({ necessary: true, analytics: true, marketing: true, external_media: true }),
    rejectAll: () => persist({ necessary: true, analytics: false, marketing: false, external_media: false }),
    save: (partial) => persist({ ...consent, ...partial, necessary: true }),
  }), [consent, decided, bannerOpen, settingsOpen, persist]);

  return <ConsentCtx.Provider value={value}>{children}</ConsentCtx.Provider>;
};

export const useConsent = () => {
  const ctx = useContext(ConsentCtx);
  if (!ctx) throw new Error("useConsent must be used inside <ConsentProvider>");
  return ctx;
};
