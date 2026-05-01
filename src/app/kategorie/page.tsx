import { categories } from '@/data/categories'
import CategoryCard from '@/components/cards/CategoryCard'
import PageHero from '@/components/layout/PageHero'
import { siteConfig } from '@/lib/config'
import { createPageMetadata } from '@/lib/metadata'
import { collectionPageJsonLd } from '@/lib/jsonld'

export const metadata = createPageMetadata({
  title: 'Kategorien',
  description:
    'Alle Kategorien von GD Listen — Gastro, Freizeit, Beauty, Gesundheit, Handwerk, Dienstleister und mehr. Redaktionell eingeordnet für Schwäbisch Gmünd.',
  path: '/kategorie',
  keywords: ['Kategorien', siteConfig.city, ...siteConfig.keywords],
})

export default function KategoriePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionPageJsonLd(
              `Kategorien in ${siteConfig.city}`,
              'Alle Hauptkategorien von GD Listen mit thematischen Einstiegen für Schwäbisch Gmünd.',
              '/kategorie',
            ),
          ),
        }}
      />
      <PageHero
        badge="Übersicht"
        title="Alle Kategorien"
        subtitle="Von Gastro bis Handwerk — entdecke lokale Anbieter in Schwäbisch Gmünd, redaktionell eingeordnet in thematischen Listen."
      />
      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        <section style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.75 }}>
            Die Kategorien auf GD Listen sind keine leeren Container, sondern die strukturelle Basis für lokale
            Themencluster. Von hier aus führen Pfade in Unterkategorien, Top-10-Listen, Unternehmensprofile und
            begleitende Blogartikel für Schwäbisch Gmünd.
          </p>
        </section>
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
