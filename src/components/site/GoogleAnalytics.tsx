import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsent } from "@/consent/ConsentContext";

/**
 * Google Analytics 4 loader — respects Consent Mode.
 * Set VITE_GA_MEASUREMENT_ID in env to activate. Without it, nothing loads.
 * The tag is loaded even before consent so Consent Mode defaults apply;
 * pageviews are only sent when analytics consent is granted.
 */
export const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();
  const { consent, decided } = useConsent();
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

  useEffect(() => {
    if (!gaId) return;
    if (document.getElementById("ga4-src")) return;
    const s = document.createElement("script");
    s.id = "ga4-src";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    const gtag = window.gtag || ((...args: unknown[]) => { window.dataLayer!.push(args); });
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", gaId, { send_page_view: false, anonymize_ip: true });
  }, [gaId]);

  useEffect(() => {
    if (!gaId || !decided || !consent.analytics || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search, consent.analytics, decided, gaId]);

  return null;
};
