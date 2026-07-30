import Link from 'next/link'

type AdSpotTeaserProps = {
  context: string
  compact?: boolean
}

export default function AdSpotTeaser({ context, compact = false }: AdSpotTeaserProps) {
  return (
    <section style={{ marginBottom: compact ? '1.5rem' : '2rem' }}>
      <div
        style={{
          borderRadius: '18px',
          border: '1px solid rgba(232, 185, 72, 0.24)',
          background: 'linear-gradient(180deg, rgba(232, 185, 72, 0.1), rgba(232, 185, 72, 0.05))',
          padding: compact ? '1.15rem' : '1.35rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '0.85rem',
          }}
        >
          <span className="eyebrow">Empfohlene Anzeige</span>
          <span
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-subtle)',
              border: '1px solid rgba(232, 185, 72, 0.28)',
              borderRadius: '999px',
              padding: '0.22rem 0.5rem',
              background: 'rgba(255, 255, 255, 0.04)',
            }}
          >
            Anzeige
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: compact ? '1fr' : '1.3fr auto',
            gap: '1rem',
            alignItems: 'center',
          }}
          className="ad-spot-grid"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.6rem' }}>
              <div
                aria-hidden="true"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(232, 185, 72, 0.16)',
                  border: '1px solid rgba(232, 185, 72, 0.32)',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.5 18 4 7.5l5 3L12 4l3 6.5 5-3L17.5 18H6.5Zm.9-2h9.2l1.2-4.7-3.6 2.2L12 8.8l-2.2 4.7-3.6-2.2L7.4 16Z" />
                </svg>
              </div>

              <div>
                <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem', lineHeight: 1.35 }}>
                  Beispielunternehmen
                </div>
                <div style={{ color: 'var(--text-subtle)', fontSize: '0.78rem' }}>
                  Premium-Platzierung oberhalb von {context}
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
              Hier kann dein Unternehmen als sichtbare Anzeige eingebunden werden, noch bevor Nutzer in die eigentliche
              Liste oder Kategorie einsteigen. Ideal für lokale Sichtbarkeit, Branding und direkte Anfragen.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: compact ? 'flex-start' : 'flex-end' }}>
            <Link href="/fuer-unternehmen" className="btn-primary">
              Anzeige schalten
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .ad-spot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
