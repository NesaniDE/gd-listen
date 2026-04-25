import PageHero from '@/components/layout/PageHero'
import TopListCard from '@/components/cards/TopListCard'
import { categories } from '@/data/categories'
import { top10Lists } from '@/data/lists'

export const metadata = {
  title: 'Alle Top-10 Listen',
  description:
    'Übersicht aller Top-10 Listen für Schwäbisch Gmünd — kuratierte Empfehlungen für Restaurants, Cafés, Fitnessstudios, Friseure, Zahnärzte und mehr.',
  alternates: { canonical: '/top10' },
}

export default function Top10OverviewPage() {
  return (
    <div>
      <PageHero
        badge="Top-10 Übersicht"
        title="Alle aktuellen GD-Listen"
        subtitle={`Aktuell ${top10Lists.length} veröffentlichte Top-10-Listen für Schwäbisch Gmünd. Die Plattform wächst Kategorie für Kategorie.`}
      />

      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gap: '4rem' }}>
          {categories.map((category) => {
            const listsForCategory = top10Lists.filter((list) => list.categorySlug === category.slug)

            return (
              <section key={category.slug}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.5rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <h2
                    className="section-title"
                    style={{ fontSize: '1.375rem' }}
                  >
                    {category.label}
                  </h2>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {listsForCategory.length} {listsForCategory.length === 1 ? 'Liste' : 'Listen'}
                  </span>
                </div>

                {listsForCategory.length > 0 ? (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '1.25rem',
                    }}
                  >
                    {listsForCategory.map((list) => (
                      <TopListCard key={list.slug} list={list} />
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      padding: '2rem',
                      border: '1px dashed var(--border)',
                      borderRadius: '12px',
                      color: 'var(--text-subtle)',
                      fontSize: '0.875rem',
                      textAlign: 'center',
                    }}
                  >
                    Struktur angelegt, Inhalte folgen.
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
