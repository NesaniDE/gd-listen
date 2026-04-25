import PageHero from '@/components/layout/PageHero'

export const metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von GD Listen — Hinweise zur Datenverarbeitung und deinen Rechten gemäß DSGVO.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: true, follow: false },
}

const sections = [
  { title: 'Datenschutz auf einen Blick', text: 'Platzhalter — allgemeiner Datenschutztext folgt hier gemäß DSGVO.' },
  {
    title: 'Allgemeine Hinweise und Pflichtinformationen',
    text: 'Platzhalter — Hinweise zur Datenverarbeitung und Verantwortlichkeit.',
  },
  {
    title: 'Datenerfassung auf dieser Website',
    text: 'Platzhalter — Informationen zu Cookies, Server-Logs und Kontaktformular.',
  },
  { title: 'Analyse-Tools und Werbung', text: 'Platzhalter — Hinweise zu eingesetzten Analyse-Diensten.' },
  { title: 'Plugins und Tools', text: 'Platzhalter — Informationen zu eingebundenen Drittdiensten.' },
  {
    title: 'Ihre Rechte',
    text: 'Platzhalter — Auskunft, Berichtigung, Löschung, Widerspruch gemäß DSGVO Art. 15–21.',
  },
]

export default function DatenschutzPage() {
  return (
    <div>
      <PageHero badge="Rechtliches" title="Datenschutzerklärung" />

      <div className="section-container-narrow" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {sections.map((s, i) => (
            <div
              key={s.title}
              style={{
                padding: '1.5rem 0',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <h2
                className="section-title"
                style={{ fontSize: '1.05rem', marginBottom: '0.625rem' }}
              >
                {String(i + 1).padStart(2, '0')}. {s.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
