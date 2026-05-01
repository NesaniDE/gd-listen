import PackageCard from '@/components/cards/PackageCard'
import PageHero from '@/components/layout/PageHero'
import FAQSection from '@/components/ui/FAQSection'
import { siteConfig } from '@/lib/config'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Für Unternehmen',
  description:
    'Werde Teil von GD Listen — redaktionelle Sichtbarkeit für lokale Unternehmen in Schwäbisch Gmünd. Informationen zu Paketen, Ablauf und häufigen Fragen.',
  path: '/fuer-unternehmen',
  keywords: ['Für Unternehmen', siteConfig.city, ...siteConfig.keywords],
})

const packages = [
  {
    name: 'Basic',
    price: 'Kostenlos',
    description: 'Ein erster Eintrag mit Basisdaten, wenn dein Unternehmen redaktionell aufgenommen wird.',
    features: ['Basis-Profil', 'Nennung in Listen', 'Lokale Sichtbarkeit'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 'Auf Anfrage',
    description: 'Mehr Profil-Tiefe, bessere Darstellung und mehr Kontrolle über die präsentierten Informationen.',
    features: [
      'Erweitertes Profil',
      'Längere Beschreibung',
      'Leistungen & Schwerpunkte',
      'Spätere Bildintegration',
    ],
    highlighted: true,
  },
  {
    name: 'Business',
    price: 'Auf Anfrage',
    description: 'Für Unternehmen, die GD Listen als starken lokalen Sichtbarkeitskanal nutzen wollen.',
    features: [
      'Alles aus Premium',
      'Featured-Darstellung',
      'Mehr Kontext im Profil',
      'Individuelle Abstimmung',
    ],
    highlighted: false,
  },
]

const faqItems = [
  {
    question: 'Wie kommt mein Unternehmen auf eine Liste?',
    answer:
      'Grundsätzlich redaktionell: GD Listen beobachtet lokale Kategorien und baut daraus Listen-Seiten. Unternehmen können zusätzlich anfragen, ob ihr Profil ergänzt, korrigiert oder überarbeitet werden soll.',
  },
  {
    question: 'Kann ich meinen Eintrag bearbeiten lassen?',
    answer:
      'Ja. Langfristig ist genau das vorgesehen: bessere Texte, zusätzliche Informationen, Leistungen, Kontaktpunkte und später auch Bilder oder besondere Hinweise.',
  },
  {
    question: 'Wie wird die Reihenfolge bestimmt?',
    answer:
      'Die Reihenfolge ist redaktionell und orientiert sich an lokaler Relevanz, Profilklarheit und Nutzwert für Suchende. Sie stellt unsere Einschätzung dar und ist nicht einfach kaufbar.',
  },
  {
    question: 'Kann ich eine Korrektur oder Entfernung meines Unternehmens anfragen?',
    answer:
      `Ja. Hinweise zu fehlerhaften Angaben, Ergänzungen oder die Bitte um Prüfung einer Entfernung können jederzeit an ${siteConfig.publisher.email} gesendet werden.`,
  },
  {
    question: 'Ist GD Listen nur für Schwäbisch Gmünd?',
    answer:
      'Ja, der Startfokus ist bewusst eng gesetzt. Genau das macht die Plattform lokal klarer und stärker als ein generisches Verzeichnis.',
  },
]

const benefits = [
  { title: 'Lokaler Fokus', desc: 'GD Listen konzentriert sich nicht auf ganz Deutschland, sondern auf Schwäbisch Gmünd.' },
  { title: 'Klare Kategorien', desc: 'Unternehmen erscheinen im passenden thematischen Kontext, nicht irgendwo.' },
  { title: 'Mehr Einordnung', desc: 'Profile zeigen mehr als nur Name, Adresse und Telefonnummer.' },
  { title: 'Skalierbar', desc: 'Die Plattform ist so angelegt, dass sie Stück für Stück erweitert werden kann.' },
]

const steps = ['Anfrage senden', 'Profil abstimmen', 'Eintrag veröffentlichen', 'Später ausbauen']

export default function FuerUnternehmenPage() {
  return (
    <div>
      <PageHero
        badge="Für Unternehmen"
        title="Werde Teil von GD Listen"
        subtitle="Die Plattform ist auf Schwäbisch Gmünd fokussiert. Listen und Reihenfolgen sind redaktionelle Einschätzungen und keine objektiven Qualitätsurteile."
      />

      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        {/* Benefits */}
        <section style={{ marginBottom: '5rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Vorteile
          </span>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>
            Warum GD Listen?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0',
              borderTop: '1px solid var(--border)',
            }}
            className="benefits-grid"
          >
            {benefits.map((b, i) => (
              <div
                key={b.title}
                style={{
                  padding: '2rem 1.5rem 2rem 0',
                  borderRight: i < benefits.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : 0,
                }}
                className="benefit-item"
              >
                <div
                  className="font-serif"
                  style={{ fontSize: '1.5rem', color: 'var(--text-subtle)', marginBottom: '1rem', lineHeight: 1 }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section style={{ marginBottom: '5rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Pakete
          </span>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
            Mögliche Pakete
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              marginBottom: '2.5rem',
              maxWidth: '600px',
            }}
          >
            Die Pakete sind als sinnvolle Struktur für später gedacht und können beim Livegang final festgelegt werden.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </section>

        {/* Process */}
        <section style={{ marginBottom: '5rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Ablauf
          </span>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>
            So könnte der Ablauf aussehen
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0',
              borderTop: '1px solid var(--border)',
            }}
            className="process-grid"
          >
            {steps.map((step, i) => (
              <div
                key={step}
                style={{
                  padding: '2rem 1.5rem 2rem 0',
                  borderRight: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : 0,
                }}
                className="process-item"
              >
                <div
                  className="font-serif"
                  style={{ fontSize: '2rem', color: 'var(--text)', marginBottom: '0.75rem', lineHeight: 1 }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    color: 'var(--text)',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: '720px', marginBottom: '5rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            FAQ
          </span>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>
            Häufige Fragen
          </h2>
          <FAQSection items={faqItems} />
        </section>

        {/* Final CTA */}
        <section
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '3rem 2.5rem',
            textAlign: 'center',
          }}
        >
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Interesse an einem Eintrag?
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Die Website ist bereits inhaltlich gestartet. Unternehmen können ihre Daten später gezielt ergänzen oder
            erweitern lassen. Korrekturen oder die Prüfung einer Entfernung sind ebenfalls jederzeit auf Anfrage
            möglich.
          </p>
        </section>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .benefit-item { border-right: none !important; padding-left: 0 !important; border-bottom: 1px solid var(--border); }
          .benefit-item:last-child { border-bottom: none; }
          .process-item { border-right: none !important; padding-left: 0 !important; border-bottom: 1px solid var(--border); }
          .process-item:last-child { border-bottom: none; }
        }
      `}</style>
    </div>
  )
}
