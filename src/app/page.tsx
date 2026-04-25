import Link from 'next/link'
import { categories } from '@/data/categories'
import { featuredLists, top10Lists } from '@/data/lists'
import { featuredCompanies, companies } from '@/data/companies'
import { blogPosts } from '@/data/blog'
import CategoryCard from '@/components/cards/CategoryCard'
import TopListCard from '@/components/cards/TopListCard'
import CompanyCard from '@/components/cards/CompanyCard'
import BlogCard from '@/components/cards/BlogCard'
import SearchPlaceholder from '@/components/ui/SearchPlaceholder'

export default function HomePage() {
  const stats = [
    { value: String(categories.length), label: 'Kategorien' },
    { value: String(top10Lists.length), label: 'Top-10 Listen' },
    { value: String(companies.length), label: 'Unternehmensprofile' },
    { value: '1', label: 'Stadt im Fokus' },
  ]

  const principles = [
    {
      title: 'Lokal',
      desc: 'Keine deutschlandweiten Trefferlisten. Nur Schwäbisch Gmünd, dafür mit Kontext.',
    },
    {
      title: 'Kuratiert',
      desc: 'Redaktionell sortierte Top-10. Reihenfolge erklärt, nicht gewürfelt.',
    },
    {
      title: 'Klar',
      desc: 'Kein Branchenbuch-Ballast. Klare Kategorien, Profile und Sprache.',
    },
    {
      title: 'Skalierbar',
      desc: 'Kategorie für Kategorie wachsend. Aufgebaut, um zu bestehen.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '7rem 0 5rem' }}>
        <div className="section-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
              Lokales Verzeichnis · Schwäbisch Gmünd
            </span>

            <h1
              className="section-title animate-slide-up"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                marginBottom: '1.75rem',
                lineHeight: 1.05,
              }}
            >
              Die besten Adressen.
              <br />
              <span className="font-serif" style={{ color: 'var(--text-muted)', fontWeight: 400 }}>
                Lokal kuratiert.
              </span>
            </h1>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.125rem',
                lineHeight: 1.55,
                maxWidth: '640px',
                marginBottom: '2.5rem',
              }}
            >
              GD Listen bündelt redaktionell kuratierte Top-10-Empfehlungen für Gastro, Freizeit, Dienstleister, Beauty
              und Gesundheit — nur für Schwäbisch Gmünd.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link href="/top10" className="btn-primary">
                Alle Top-10 Listen
              </Link>
              <Link href="/kategorie" className="btn-outline">
                Nach Kategorie
              </Link>
            </div>

            <SearchPlaceholder />
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '0',
              marginTop: '5rem',
              borderTop: '1px solid var(--border)',
              paddingTop: '2rem',
            }}
            className="hero-stats"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '0.5rem 0',
                  borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : 0,
                }}
                className="hero-stat"
              >
                <div
                  className="font-serif"
                  style={{ fontSize: '2.25rem', color: 'var(--text)', marginBottom: '0.25rem', lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '5rem 0' }}>
        <div className="section-container">
          <SectionHeader
            eyebrow="Kategorien"
            title="Was suchst du in GD?"
            link={{ href: '/kategorie', label: 'Alle Kategorien' }}
          />

          <div
            className="stagger-children"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Top-10 */}
      <section style={{ padding: '5rem 0' }}>
        <div className="section-container">
          <SectionHeader
            eyebrow="Aktuelle Listen"
            title="Top-10 Empfehlungen"
            link={{ href: '/top10', label: 'Alle Listen' }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {featuredLists.map((list) => (
              <TopListCard key={list.slug} list={list} />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: '5rem 0' }}>
        <div className="section-container">
          <div style={{ marginBottom: '3rem', maxWidth: '720px' }}>
            <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              Prinzipien
            </span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>
              Anders als ein Branchenbuch.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0',
              borderTop: '1px solid var(--border)',
            }}
            className="principles-grid"
          >
            {principles.map((p, i) => (
              <div
                key={p.title}
                style={{
                  padding: '2rem 1.5rem 2rem 0',
                  borderRight: i < principles.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingLeft: i > 0 ? '1.5rem' : 0,
                }}
                className="principle-item"
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
                    fontSize: '1.05rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section style={{ padding: '5rem 0' }}>
        <div className="section-container">
          <SectionHeader eyebrow="Beispielprofile" title="So sehen Unternehmensprofile aus" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1rem',
            }}
          >
            {featuredCompanies.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* For Businesses CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="section-container">
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="cta-grid"
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                Für Unternehmen
              </span>
              <h2
                className="section-title"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', marginBottom: '1rem' }}
              >
                Lokal sichtbar werden — im richtigen Kontext.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Statt anonymem Massenlisting eine thematisch passende Einordnung in einer Stadt, die für Nutzer klar,
                übersichtlich und lokal relevant bleibt.
              </p>
              <Link href="/fuer-unternehmen" className="btn-primary">
                Mehr erfahren
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {['Lokale Sichtbarkeit', 'Profilseite mit Kontext', 'Klare Kategorien', 'Später erweiterbar'].map((b, i) => (
                <div
                  key={b}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '0.875rem 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <svg width="14" height="14" fill="none" stroke="var(--text-muted)" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section style={{ padding: '5rem 0' }}>
        <div className="section-container">
          <SectionHeader
            eyebrow="Ratgeber"
            title="Aus dem Blog"
            link={{ href: '/blog', label: 'Alle Artikel' }}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .principles-grid { grid-template-columns: 1fr !important; }
          .principle-item { border-right: none !important; border-bottom: 1px solid var(--border); padding-left: 0 !important; }
          .principle-item:last-child { border-bottom: none; }
          .hero-stat { border-left: none !important; padding-left: 0 !important; padding-top: 1rem !important; padding-bottom: 1rem !important; border-top: 1px solid var(--border); }
          .hero-stat:first-child { border-top: none; padding-top: 0.5rem !important; }
        }
      `}</style>
    </div>
  )
}

function SectionHeader({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string
  title: string
  link?: { href: string; label: string }
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '2.5rem',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <span className="eyebrow" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
          {eyebrow}
        </span>
        <h2
          className="section-title"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}
        >
          {title}
        </h2>
      </div>
      {link && (
        <Link href={link.href} className="link-arrow">
          {link.label}
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </div>
  )
}
