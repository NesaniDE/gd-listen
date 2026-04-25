import { categories } from '@/data/categories'
import CategoryCard from '@/components/cards/CategoryCard'
import PageHero from '@/components/layout/PageHero'

export const metadata = {
  title: 'Kategorien',
  description:
    'Alle Kategorien von GD Listen — von Gastro über Freizeit, Dienstleister, Beauty, Gesundheit, Handwerk bis Shopping in Schwäbisch Gmünd.',
  alternates: { canonical: '/kategorie' },
}

export default function KategoriePage() {
  return (
    <div>
      <PageHero
        badge="Übersicht"
        title="Alle Kategorien"
        subtitle="Von Gastro bis Handwerk — entdecke die besten lokalen Anbieter in Schwäbisch Gmünd, kuratiert in Top-10 Listen."
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
