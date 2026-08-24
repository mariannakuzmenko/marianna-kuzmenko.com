import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";

const Section = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-display text-2xl mb-3"><span className="text-rose">§ {n}</span> {title}</h2>
    <div className="space-y-3 text-foreground leading-relaxed">{children}</div>
  </div>
);

const Agb = () => (
  <Layout>
    <Seo title="AGB — Marianna Kuzmenko" description="Allgemeine Geschäftsbedingungen für Webdesign, Webentwicklung und SEO-Dienstleistungen." path="/agb" noindex />
    <section className="container-editorial pt-12 pb-24 max-w-3xl">
      <p className="eyebrow mb-6">Rechtliches</p>
      <h1 className="display-xl mb-6">Allgemeine Geschäfts&shy;bedingungen</h1>
      <p className="text-muted-foreground mb-12">
        Die folgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Marianna Kuzmenko (nachfolgend „Auftragnehmerin")
        und ihren Auftraggebern (nachfolgend „Kunde") über Leistungen im Bereich Webdesign, Webentwicklung, UX/UI Design und SEO-Optimierung.
      </p>

      <article className="space-y-10">
        <Section n="1" title="Geltungsbereich & Leistungen">
          <p>
            Diese AGB gelten für sämtliche Leistungen der Auftragnehmerin, insbesondere Konzeption, Design, Entwicklung, Wartung und SEO-Optimierung
            von Websites und digitalen Produkten. Abweichende Bedingungen des Kunden werden nur wirksam, wenn sie schriftlich bestätigt wurden.
          </p>
        </Section>

        <Section n="2" title="Angebote & Vertragsschluss">
          <p>
            Angebote der Auftragnehmerin sind freibleibend. Ein Vertrag kommt zustande, sobald der Kunde ein konkretes Angebot schriftlich (auch per E-Mail)
            annimmt. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
          </p>
        </Section>

        <Section n="3" title="Mitwirkungspflichten des Kunden">
          <p>
            Der Kunde stellt alle für die Leistungserbringung notwendigen Inhalte (Texte, Bilder, Logos, Zugänge) rechtzeitig und in geeigneter Form bereit
            und garantiert, dass die zur Verfügung gestellten Inhalte frei von Rechten Dritter sind. Verzögerungen, die aufgrund fehlender Mitwirkung entstehen,
            verlängern vereinbarte Fristen entsprechend.
          </p>
        </Section>

        <Section n="4" title="Zahlungsbedingungen">
          <p>
            Sofern nicht anders vereinbart, werden 50 % des Projektpreises bei Vertragsschluss und 50 % nach Abnahme fällig. Rechnungen sind innerhalb von
            14 Tagen ohne Abzug zahlbar. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen.
          </p>
        </Section>

        <Section n="5" title="Termine & Projektlaufzeit">
          <p>
            Termine sind unverbindlich, soweit sie nicht ausdrücklich schriftlich als verbindlich vereinbart wurden. Verzögerungen aufgrund höherer Gewalt
            oder verspäteter Zulieferungen des Kunden verlängern die Lieferfristen angemessen.
          </p>
        </Section>

        <Section n="6" title="Abnahme">
          <p>
            Der Kunde hat das Werk innerhalb von 14 Tagen nach Übergabe zu prüfen und ggf. Mängel schriftlich zu rügen. Erfolgt innerhalb dieser Frist keine Rüge,
            gilt das Werk als abgenommen. Bei produktiver Nutzung des Werkes gilt die Abnahme ebenfalls als erfolgt.
          </p>
        </Section>

        <Section n="7" title="Haftung">
          <p>
            Die Auftragnehmerin haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der
            Gesundheit. Bei einfacher Fahrlässigkeit haftet sie nur bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den vorhersehbaren,
            vertragstypischen Schaden.
          </p>
        </Section>

        <Section n="8" title="Urheber- & Nutzungsrechte">
          <p>
            Mit vollständiger Zahlung erhält der Kunde die einfachen, nicht ausschließlichen Nutzungsrechte an den im Rahmen des Projekts erstellten Werken
            für den vereinbarten Zweck. Die Auftragnehmerin bleibt berechtigt, das Projekt in ihrem Portfolio (online und offline) zu Referenzzwecken zu zeigen,
            sofern der Kunde dem nicht ausdrücklich schriftlich widerspricht.
          </p>
        </Section>

        <Section n="9" title="Schlussbestimmungen">
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Erfüllungsort und Gerichtsstand ist – soweit gesetzlich zulässig –
            der Sitz der Auftragnehmerin. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </Section>

        <p className="text-sm text-muted-foreground pt-6 border-t border-border">
          Diese AGB sind ein Muster zur weiteren Anpassung. Vor Veröffentlichung wird eine juristische Prüfung empfohlen.
        </p>
      </article>
    </section>
  </Layout>
);

export default Agb;
