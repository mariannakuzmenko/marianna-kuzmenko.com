import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { useLang, pick } from "@/i18n/LanguageContext";

const Disclaimer = () => {
  const { lang } = useLang();
  const t = pick(lang, {
    title: "Haftungsausschluss — Marianna Kuzmenko",
    desc: "Haftungsausschluss (Disclaimer) für Inhalte, Links, Urheberrechte und Datenschutz auf marianna-kuzmenko.com.",
    eyebrow: "Rechtliches",
    h1: "Haftungsausschluss",
    sections: [
      { h: "Inhalte dieser Website", p: "Die Inhalte dieser Website werden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden. Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich." },
      { h: "Externe Links", p: "Diese Website enthält Verlinkungen zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar." },
      { h: "Urheberrecht", p: "Alle auf dieser Website veröffentlichten Inhalte, Werke und Bilder unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung." },
      { h: "Datenschutz", p: "Details zur Verarbeitung personenbezogener Daten findest du in der Datenschutzerklärung." },
    ],
  }, {
    title: "Disclaimer — Marianna Kuzmenko",
    desc: "Disclaimer for content, links, copyright and data protection on marianna-kuzmenko.com.",
    eyebrow: "Legal",
    h1: "Disclaimer",
    sections: [
      { h: "Content of this website", p: "The content of this website is created with the greatest care. However, no guarantee can be given for accuracy, completeness or timeliness. As a service provider, I am responsible for my own content according to § 7 (1) TMG." },
      { h: "External links", p: "This website contains links to external websites of third parties over whose content I have no influence. The respective provider or operator of the linked pages is always responsible for their content. No legal violations were apparent at the time of linking." },
      { h: "Copyright", p: "All content, works and images published on this website are subject to German copyright law. Any reproduction, editing, distribution or use beyond the limits of copyright law requires written consent." },
      { h: "Data protection", p: "Details about the processing of personal data can be found in the privacy policy." },
    ],
  });

  return (
    <Layout>
      <Seo title={t.title} description={t.desc} path={pick(lang, "/disclaimer", "/en/disclaimer")} />
      <section className="container-editorial pt-12 pb-24 max-w-3xl">
        <p className="eyebrow mb-6">{t.eyebrow}</p>
        <h1 className="display-xl mb-10">{t.h1}</h1>
        <article className="space-y-10">
          {t.sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-2xl mb-3">{s.h}</h2>
              <p className="text-foreground leading-relaxed">{s.p}</p>
            </div>
          ))}
        </article>
      </section>
    </Layout>
  );
};

export default Disclaimer;
