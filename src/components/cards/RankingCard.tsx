import Link from 'next/link'
import { RankingEntry } from '@/data/lists'

export default function RankingCard({ entry }: { entry: RankingEntry; listSlug?: string }) {
  return (
    <Link
      href={`/unternehmen/${entry.slug}`}
      className="card-link"
      style={{ display: 'block' }}
    >
      <div
        className="card-base"
        style={{
          display: 'grid',
          gridTemplateColumns: '64px 1fr auto',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1.25rem 1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'flex-start',
          }}
        >
          <span
            className="rank-number"
            style={{
              fontSize: entry.rank === 1 ? '2.5rem' : '2rem',
              color: entry.rank <= 3 ? 'var(--text)' : 'var(--text-subtle)',
            }}
          >
            {entry.rank.toString().padStart(2, '0')}
          </span>
        </div>

        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--text)',
              marginBottom: '0.25rem',
              letterSpacing: '-0.015em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {entry.name}
          </h3>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              marginBottom: entry.tags.length > 0 ? '0.5rem' : 0,
            }}
          >
            {entry.description}
          </p>
          {entry.tags.length > 0 && (
            <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
              {entry.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="badge badge-purple">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '0.8rem',
            fontWeight: 500,
          }}
          className="ranking-arrow"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
