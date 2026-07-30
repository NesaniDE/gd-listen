import Link from 'next/link'
import RankingCard from '@/components/cards/RankingCard'
import { companies } from '@/data/companies'

type AdSpotTeaserProps = {
  context: string
  compact?: boolean
}

const nesani = companies.find((company) => company.slug === 'nesani')

if (!nesani) {
  throw new Error('Nesani company entry is required for sponsored teaser slots.')
}

const sponsoredEntry = {
  rank: 0,
  name: nesani.name,
  description: nesani.description,
  tags: nesani.tags.slice(0, 3),
  slug: nesani.slug,
  website: nesani.website,
  logo: nesani.logo,
}

export default function AdSpotTeaser({ context, compact = false }: AdSpotTeaserProps) {
  return (
    <section style={{ marginBottom: compact ? '1.5rem' : '2rem' }}>
      <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <span className="eyebrow">Empfohlene Anzeige</span>
        <span
          style={{
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-subtle)',
          }}
        >
          Sponsored
        </span>
      </div>

      <RankingCard entry={sponsoredEntry} isSponsored />

      <div
        style={{
          marginTop: '0.75rem',
          padding: compact ? '0 0.25rem' : '0 0.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.6, margin: 0 }}>
          Sichtbarer Anzeigenplatz oberhalb von {context}. Auch dein Unternehmen kann hier als Anzeige erscheinen.
        </p>
        <Link href="/fuer-unternehmen" className="link-arrow">
          Anzeige schalten
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
