import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, categories } from '@/data/categories'
import { getListsByCategory } from '@/data/lists'
import { siteConfig } from '@/lib/config'
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/jsonld'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TopListCard from '@/components/cards/TopListCard'

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.category)
  if (!category) return {}
  const path = `/kategorie/${category.slug}`
  const title = `${category.label} in ${siteConfig.city}`
  const description = `${category.description} Mit Top-10-Listen und Unternehmensprofilen.`
  return {
    title,
    description,
    keywords: [category.label, siteConfig.city, 'Top 10', ...siteConfig.keywords],
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${path}`,
      title,
      description,
      siteName: siteConfig.name,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category)
  if (!category) notFound()

  const lists = getListsByCategory(category.slug)
  const path = `/kategorie/${category.slug}`

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionPageJsonLd(
              `${category.label} in ${siteConfig.city}`,
              category.description,
              path,
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Start', href: '/' },
              { name: 'Kategorien', href: '/kategorie' },
              { name: category.label, href: path },
            ]),
          ),
        }}
      />

      <div className="section-container">
        <Breadcrumbs
          crumbs={[{ label: 'Kategorien', href: '/kategorie' }, { label: category.label }]}
        />
      </div>

      <PageHero
        badge={category.label}
        title={`${category.label} in ${siteConfig.city}`}
        subtitle={category.description}
      />

      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        <section style={{ marginBottom: '4rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Unterkategorien
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {category.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/kategorie/${category.slug}/${sub.slug}`}
                className="subcat-link"
                style={{
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  padding: '0.5rem 0.875rem',
                  borderRadius: '8px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  transition: 'all 0.15s ease',
                }}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </section>

        {lists.length > 0 && (
          <section>
            <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              Top-10 Listen
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.25rem',
                marginTop: '1rem',
              }}
            >
              {lists.map((list) => (
                <TopListCard key={list.slug} list={list} />
              ))}
            </div>
          </section>
        )}

        {lists.length === 0 && (
          <div
            style={{
              padding: '3rem',
              border: '1px dashed var(--border)',
              borderRadius: '12px',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
            }}
          >
            Listen für diese Kategorie folgen bald.
          </div>
        )}
      </div>

      <style>{`
        .subcat-link:hover {
          border-color: var(--border-strong) !important;
          background: var(--surface-hover) !important;
        }
      `}</style>
    </div>
  )
}
