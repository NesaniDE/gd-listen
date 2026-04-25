import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getListBySlug, top10Lists } from '@/data/lists'
import { getCategoryBySlug } from '@/data/categories'
import { siteConfig } from '@/lib/config'
import { breadcrumbJsonLd, top10ListJsonLd } from '@/lib/jsonld'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import RankingCard from '@/components/cards/RankingCard'
import RelatedLists from '@/components/sections/RelatedLists'
import CTASection from '@/components/sections/CTASection'

export async function generateStaticParams() {
  return top10Lists.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const list = getListBySlug(params.slug)
  if (!list) return {}
  const path = `/top10/${list.slug}`
  return {
    title: list.title,
    description: list.intro.slice(0, 160),
    keywords: [list.title, ...siteConfig.keywords],
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: `${siteConfig.url}${path}`,
      title: list.title,
      description: list.intro.slice(0, 160),
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: list.title,
      description: list.intro.slice(0, 160),
    },
  }
}

export default function Top10ListPage({ params }: { params: { slug: string } }) {
  const list = getListBySlug(params.slug)
  if (!list) notFound()

  const category = getCategoryBySlug(list.categorySlug)

  const breadcrumbs = [
    { name: 'Start', href: '/' },
    { name: 'Kategorien', href: '/kategorie' },
    ...(category ? [{ name: category.label, href: `/kategorie/${category.slug}` }] : []),
    { name: list.title, href: `/top10/${list.slug}` },
  ]

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(top10ListJsonLd(list, category)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <div className="section-container">
        <Breadcrumbs
          crumbs={[
            { label: 'Kategorien', href: '/kategorie' },
            ...(category ? [{ label: category.label, href: `/kategorie/${category.slug}` }] : []),
            { label: list.title },
          ]}
        />
      </div>

      <PageHero badge="Top 10 Liste" title={list.title} subtitle={list.intro}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="badge badge-purple">Aktualisiert {list.updatedAt}</span>
          <span className="badge badge-purple">10 Einträge</span>
          {category && <span className="badge badge-purple">{category.label}</span>}
        </div>
      </PageHero>

      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        <ol
          className="stagger-children"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '4rem',
          }}
        >
          {list.entries.map((entry) => (
            <li key={entry.rank}>
              <RankingCard entry={entry} listSlug={list.slug} />
            </li>
          ))}
        </ol>

        <CTASection
          badge="Für Unternehmen"
          title="Bist du auf dieser Liste?"
          subtitle="Optimiere deinen Eintrag und präsentiere dein Unternehmen als starke lokale Anlaufstelle in Schwäbisch Gmünd."
          primaryLabel="Jetzt eintragen"
          primaryHref="/fuer-unternehmen"
          secondaryLabel="Methodik ansehen"
          secondaryHref="/methodik"
        />

        <RelatedLists currentSlug={list.slug} categorySlug={list.categorySlug} />
      </div>
    </div>
  )
}
