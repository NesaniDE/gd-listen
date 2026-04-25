export default function SearchPlaceholder() {
  return (
    <div
      className="search-placeholder"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '0.875rem 1.125rem',
        maxWidth: '520px',
        cursor: 'text',
        transition: 'border-color 0.2s ease',
      }}
    >
      <svg width="16" height="16" fill="none" stroke="var(--text-subtle)" strokeWidth={1.75} viewBox="0 0 24 24">
        <circle cx={11} cy={11} r={8} />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      </svg>
      <span style={{ color: 'var(--text-subtle)', fontSize: '0.9rem' }}>
        Suche nach Kategorie, Liste oder Unternehmen
      </span>
      <span
        style={{
          marginLeft: 'auto',
          color: 'var(--text-subtle)',
          fontSize: '0.7rem',
          padding: '0.2rem 0.5rem',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          background: 'var(--surface)',
        }}
      >
        Bald
      </span>
      <style>{`.search-placeholder:hover { border-color: var(--border-strong) !important; }`}</style>
    </div>
  )
}
