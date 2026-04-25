import { categories } from '@/data/categories'
import CategoryCard from '@/components/cards/CategoryCard'
import PageHero from '@/components/layout/PageHero'
import { siteConfig } from '@/lib/config'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Kategorien',
  description:
    'Alle Kategorien von GD Listen — von Gastro über Freizeit, Dienstleister, Beauty, Gesundheit, Handwerk bis Shopping in Schwäbisch Gmünd.',
  path: '/kategorie',
  keywords: ['Kategorien', siteConfig.city, ...siteConfig.keywords],
})

export default function KategoriePage() {
  return (
    <div>
      <PageHero
        badge="Übersicht"
        title="Alle Kategorien"
        subtitle="Von Gastro bis Handwerk — entdecke lokale Anbieter in Schwäbisch Gmünd, redaktionell eingeordnet in thematischen Listen."
      />
      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        <div
          className="stagger-children"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </div>
  )
}
