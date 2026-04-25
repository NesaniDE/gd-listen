import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCompanyBySlug, companies } from '@/data/companies'
import { top10Lists } from '@/data/lists'
import { siteConfig } from '@/lib/config'
import { breadcrumbJsonLd, companyJsonLd } from '@/lib/jsonld'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import CTASection from '@/components/sections/CTASection'
import CompanyLogo from '@/components/ui/CompanyLogo'

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const company = getCompanyBySlug(params.slug)
  if (!company) return {}
  const path = `/unternehmen/${company.slug}`
  const title = `${company.name} — ${siteConfig.city}`
  const description = (company.longDescription || company.description).slice(0, 160)
  return {
    title,
    description,
    keywords: [company.name, ...company.tags, siteConfig.city, 'Schwäbisch Gmünd'],
    alternates: { canonical: path },
    openGraph: {
      type: 'profile',
      url: `${siteConfig.url}${path}`,
      title,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function UnternehmenPage({ params }: { params: { slug: string } }) {
  const company = getCompanyBySlug(params.slug)
  if (!company) notFound()

  const featuredInLists = top10Lists
    .filter((list) => list.entries.some((entry) => entry.slug === company.slug))
    .slice(0, 3)

  const breadcrumbs = [
    { name: 'Start', href: '/' },
    { name: 'Unternehmen', href: '/' },
    { name: company.name, href: `/unternehmen/${company.slug}` },
  ]

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd(company)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <div className="section-container">
        <Breadcrumbs crumbs={[{ label: 'Unternehmen' }, { label: company.name }]} />
      </div>

      {/* Header */}
      <section style={{ padding: '3rem 0 4rem', borderBottom: '1px solid var(--border)' }}>
        <div
          className="section-container"
          style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <CompanyLogo
            name={company.name}
            website={company.website}
            logo={company.logo}
            size={88}
            radius={12}
            fontSize="1.35rem"
            priority
          />

          <div style={{ flex: 1, minWidth: '240px' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
              {company.tags.map((t) => (
                <span key={t} className="badge badge-purple">
                  {t}
                </span>
              ))}
            </div>
            <h1
              className="section-title"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '0.5rem' }}
            >
              {company.name}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              {company.address || `${siteConfig.city}`}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {company.phone && (
                <a href={`tel:${company.phone}`} className="btn-primary">
                  Anrufen
                </a>
              )}
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="section-container" style={{ paddingBottom: '6rem', paddingTop: '4rem' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'start' }}
          className="company-grid"
        >
          <div>
            <section style={{ marginBottom: '3rem' }}>
              <span className="eyebrow" style={{ marginBottom: '0.875rem', display: 'inline-block' }}>
                Über das Unternehmen
              </span>
              <p
                style={{
                  color: 'var(--text)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                }}
              >
                {company.longDescription || company.description}
              </p>
            </section>

            {company.services && company.services.length > 0 && (
              <section style={{ marginBottom: '3rem' }}>
                <span className="eyebrow" style={{ marginBottom: '0.875rem', display: 'inline-block' }}>
                  Typische Leistungen
                </span>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '0.625rem',
                    marginTop: '0.5rem',
                  }}
                >
                  {company.services.map((service) => (
                    <div
                      key={service}
                      style={{
                        padding: '0.875rem 1rem',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        color: 'var(--text)',
                        fontSize: '0.85rem',
                      }}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {featuredInLists.length > 0 && (
              <section style={{ marginBottom: '3rem' }}>
                <span className="eyebrow" style={{ marginBottom: '0.875rem', display: 'inline-block' }}>
                  Aktuell gelistet in
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {featuredInLists.map((list) => (
                    <Link
                      key={list.slug}
                      href={`/top10/${list.slug}`}
                      className="featured-list-link"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.875rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border)',
                        background: 'var(--surface)',
                        color: 'var(--text)',
                        fontSize: '0.875rem',
                        transition: 'border-color 0.15s ease, background-color 0.15s ease',
                      }}
                    >
                      <span>{list.title}</span>
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        viewBox="0 0 24 24"
                        style={{ flexShrink: 0, color: 'var(--text-muted)' }}
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
              }}
            >
              <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                Kontakt
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {company.address && <ContactRow label="Adresse" value={company.address} />}
                {company.phone && <ContactRow label="Telefon" value={company.phone} />}
                {company.website && (
                  <ContactRow
                    label="Website"
                    value={company.website.replace('https://', '').replace('http://', '')}
                    href={company.website}
                  />
                )}
              </div>
            </div>

            <div
              style={{
                padding: '1.5rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                textAlign: 'center',
              }}
            >
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.875rem' }}>
                Ist das dein Unternehmen?
              </p>
              <Link
                href="/fuer-unternehmen"
                className="btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Eintrag optimieren
              </Link>
            </div>
          </aside>
        </div>

        <CTASection
          badge="Für Unternehmen"
          title="Sichtbarkeit weiter ausbauen"
          subtitle="Unternehmen können später zusätzliche Profildaten, Bilder und klarere Leistungsbeschreibungen ergänzen lassen."
          primaryLabel="Für Unternehmen"
          primaryHref="/fuer-unternehmen"
          secondaryLabel="Kontakt"
          secondaryHref="/kontakt"
        />
      </div>

      <style>{`
        .featured-list-link:hover {
          border-color: var(--border-strong) !important;
          background: var(--surface-hover) !important;
        }
        @media (max-width: 860px) {
          .company-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div style={{ display: 'grid', gap: '0.25rem' }}>
      <span className="eyebrow" style={{ fontSize: '0.65rem' }}>
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text)', fontSize: '0.875rem', lineHeight: 1.5 }}
        >
          {value}
        </a>
      ) : (
        <span style={{ color: 'var(--text)', fontSize: '0.875rem', lineHeight: 1.5 }}>{value}</span>
      )}
    </div>
  )
}
