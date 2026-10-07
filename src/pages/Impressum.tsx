import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { CONTACT } from "@/data/contact";

const Impressum = () => (
  <Layout>
    <Seo title="Impressum — Marianna Kuzmenko" description="Impressum gemäß § 5 TMG der Webdesignerin und SEO-Freelancerin Marianna Kuzmenko aus Nürnberg." path="/impressum" noindex />
    <section className="container-editorial pt-12 pb-24 max-w-3xl">
      <p className="eyebrow mb-6">Rechtliches</p>
      <h1 className="display-xl mb-10">Impressum</h1>

      <article className="space-y-10 text-foreground leading-relaxed">
        <div>
          <h2 className="font-display text-2xl mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            {CONTACT.name}<br />
            {CONTACT.country}
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Vertreten durch</h2>
          <p>{CONTACT.name}</p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${CONTACT.email}`} className="underline-draw">{CONTACT.email}</a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Umsatzsteuer</h2>
          <p>
            Als Kleinunternehmerin im Sinne von § 19 UStG wird keine Umsatzsteuer ausgewiesen.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Berufsbezeichnung</h2>
          <p>
            Berufsbezeichnung: Freiberufliche Webdesignerin / Webentwicklerin<br />
            Verliehen in: Deutschland
          </p>
        </div>


        <div>
          <h2 className="font-display text-2xl mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            {CONTACT.name}
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="underline-draw">https://ec.europa.eu/consumers/odr/</a>.
            Meine E-Mail-Adresse findest du oben im Impressum.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            Nach §§ 8 bis 10 TMG bin ich als Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Haftung für Links</h2>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl mb-3">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.
          </p>
        </div>

        <p className="text-sm text-muted-foreground pt-6 border-t border-border">
          Stand: {new Date().getFullYear()}. Bei Änderungen der Angaben wird dieses Impressum entsprechend aktualisiert.
        </p>
      </article>
    </section>
  </Layout>
);

export default Impressum;
