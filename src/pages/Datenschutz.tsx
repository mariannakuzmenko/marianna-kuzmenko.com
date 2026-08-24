import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { CONTACT, telLink } from "@/data/contact";


const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-display text-2xl mb-3">{title}</h2>
    <div className="space-y-3 text-foreground leading-relaxed">{children}</div>
  </div>
);

const Datenschutz = () => (
  <Layout>
    <Seo title="Datenschutzerklärung — Marianna Kuzmenko" description="Datenschutzerklärung gemäß DSGVO für die Website von Marianna Kuzmenko — Webdesign, Webentwicklung und SEO." path="/datenschutz" noindex />
    <section className="container-editorial pt-12 pb-24 max-w-3xl">
      <p className="eyebrow mb-6">Rechtliches</p>
      <h1 className="display-xl mb-10">Datenschutz&shy;erklärung</h1>

      <article className="space-y-10">
        <Section title="1. Allgemeine Hinweise">
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst.
            Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
          </p>
        </Section>

        <Section title="2. Verantwortliche Stelle">
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            {CONTACT.name}<br />
            {CONTACT.street}, {CONTACT.zipCity}, {CONTACT.country}<br />
            Telefon: <a href={telLink} className="underline-draw">{CONTACT.phoneDisplay}</a><br />
            E-Mail: <a href={`mailto:${CONTACT.email}`} className="underline-draw">{CONTACT.email}</a>
          </p>
        </Section>

        <Section title="3. Hosting via Netlify">
          <p>
            Diese Website wird bei Netlify (Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA) gehostet.
            Beim Aufruf der Website werden technische Daten (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit) in Server-Logfiles verarbeitet.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung).
            Mit Netlify besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
          </p>
        </Section>

        <Section title="4. Kontaktformular">
          <p>
            Wenn du mir über das Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir angegebenen
            Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung deiner Anfrage).
          </p>
        </Section>

        <Section title="5. Google Analytics">
          <p>
            Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            Google Analytics verwendet Cookies und ähnliche Technologien, die eine Analyse der Benutzung der Website ermöglichen. Die Verarbeitung erfolgt nur
            mit deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, die du jederzeit über den Cookie-Banner widerrufen kannst.
          </p>
          <p>
            IP-Anonymisierung ist aktiviert; deine IP-Adresse wird vor jeder Speicherung gekürzt. Weitere Informationen findest du in der Datenschutzerklärung
            von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline-draw">policies.google.com/privacy</a>.
          </p>
        </Section>

        <Section title="6. Cookies & Cookie-Banner">
          <p>
            Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf deinem Endgerät gespeichert werden. Notwendige Cookies werden
            auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO eingesetzt. Alle übrigen Cookies (z. B. für Analyse oder Marketing) werden nur nach deiner
            ausdrücklichen Einwilligung über den Cookie-Banner gesetzt (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG). Du kannst deine Einwilligung
            jederzeit widerrufen.
          </p>
        </Section>

        <Section title="7. Deine Rechte nach DSGVO">
          <p>Dir stehen jederzeit folgende Rechte zu:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
        </Section>

        <Section title="8. Speicherdauer & Löschung">
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten
            bestehen. Nach Wegfall des Zwecks bzw. Ablauf der Fristen werden die Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gelöscht.
          </p>
        </Section>

        <Section title="9. Kontakt zu Datenschutzanfragen">
          <p>
            Für Fragen zum Datenschutz und zur Ausübung deiner Rechte erreichst du mich jederzeit per E-Mail unter{" "}
            <a href="mailto:mari1992.kuzmenko@gmail.com" className="underline-draw">mari1992.kuzmenko@gmail.com</a>.
          </p>
        </Section>

        <p className="text-sm text-muted-foreground pt-6 border-t border-border">
          Stand: {new Date().getFullYear()}. Diese Datenschutzerklärung wird bei Änderungen der Verarbeitung aktualisiert.
        </p>
      </article>
    </section>
  </Layout>
);

export default Datenschutz;
