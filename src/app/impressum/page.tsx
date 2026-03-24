import { getContent } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
  const { impressum } = getContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-dark-500">
        <div className="section-container section-padding py-20 pt-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-padding py-16">
        <div className="max-w-2xl prose prose-slate prose-lg">
          <h2>Angaben gemäß § 5 TMG</h2>

          <p>
            {impressum.firmenname}
            <br />
            {impressum.inhaber}
            <br />
            {impressum.strasse}
            <br />
            {impressum.plz} {impressum.ort}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {impressum.telefon}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${impressum.email}`}>{impressum.email}</a>
          </p>

          {impressum.steuernummer && (
            <>
              <h2>Steuernummer</h2>
              <p>{impressum.steuernummer}</p>
            </>
          )}

          {impressum.ustIdNr && (
            <>
              <h2>Umsatzsteuer-Identifikationsnummer</h2>
              <p>
                USt-IdNr. gemäß §27a Umsatzsteuergesetz:{" "}
                {impressum.ustIdNr}
              </p>
            </>
          )}

          {impressum.zusatz && (
            <div
              dangerouslySetInnerHTML={{
                __html: impressum.zusatz.replace(/\n/g, "<br />"),
              }}
            />
          )}

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
            der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
        </div>
      </div>
    </div>
  );
}
