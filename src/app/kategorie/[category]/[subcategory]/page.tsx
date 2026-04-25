import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, categories } from '@/data/categories'
import { top10Lists } from '@/data/lists'
import { siteConfig } from '@/lib/config'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import TopListCard from '@/components/cards/TopListCard'

export async function generateStaticParams() {
  return categories.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; subcategory: string }
}): Promise<Metadata> {
  const category = getCategoryBySlug(params.category)
  if (!category) return {}
  const sub = category.subcategories.find((s) => s.slug === params.subcategory)
  if (!sub) return {}
  const path = `/kategorie/${category.slug}/${sub.slug}`
  const title = `${sub.label} in ${siteConfig.city}`
  const description = `Redaktionell eingeordnete Top-10-Liste für ${sub.label} in ${siteConfig.city} — lokale Orientierung für ${category.label}.`
  return {
    title,
    description,
    keywords: [sub.label, category.label, siteConfig.city, 'Top 10', ...siteConfig.keywords],
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

export default function SubcategoryPage({
  params,
}: {
  params: { category: string; subcategory: string }
}) {
  const category = getCategoryBySlug(params.category)
  if (!category) notFound()

  const sub = category.subcategories.find((s) => s.slug === params.subcategory)
  if (!sub) notFound()

  const list = top10Lists.find((l) => l.slug === sub.listSlug)
  const path = `/kategorie/${category.slug}/${sub.slug}`

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Start', href: '/' },
              { name: 'Kategorien', href: '/kategorie' },
              { name: category.label, href: `/kategorie/${category.slug}` },
              { name: sub.label, href: path },
            ]),
          ),
        }}
      />

      <div className="section-container">
        <Breadcrumbs
          crumbs={[
            { label: 'Kategorien', href: '/kategorie' },
            { label: category.label, href: `/kategorie/${category.slug}` },
            { label: sub.label },
          ]}
        />
      </div>

      <PageHero
        badge={category.label}
        title={`${sub.label} in ${siteConfig.city}`}
        subtitle={`Redaktionell eingeordnete Auswahl für ${sub.label} in ${siteConfig.city}. Die spätere Listenreihenfolge spiegelt unsere Einschätzung wider.`}
      />

      <div className="section-container" style={{ paddingBottom: '6rem', maxWidth: '760px' }}>
        {list ? (
          <TopListCard list={list} />
        ) : (
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
            Top-10 Liste folgt — {sub.label} in {siteConfig.city}.
          </div>
        )}
      </div>
    </div>
  )
}
