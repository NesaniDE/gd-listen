import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { categories } from '@/data/categories'
import { top10Lists } from '@/data/lists'
import { companies } from '@/data/companies'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()
  const parseListDate = (value: string) => new Date(`${value}-01T00:00:00.000Z`)

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/kategorie`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/top10`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/fuer-unternehmen`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/methodik`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/ueber-gd-listen`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/kategorie/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const subcategoryEntries: MetadataRoute.Sitemap = categories.flatMap((c) =>
    c.subcategories.map((s) => ({
      url: `${base}/kategorie/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  )

  const listEntries: MetadataRoute.Sitemap = top10Lists.map((l) => ({
    url: `${base}/top10/${l.slug}`,
    lastModified: parseListDate(l.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const companyEntries: MetadataRoute.Sitemap = companies.map((c) => ({
    url: `${base}/unternehmen/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    ...staticEntries,
    ...categoryEntries,
    ...subcategoryEntries,
    ...listEntries,
    ...companyEntries,
    ...blogEntries,
  ]
}
