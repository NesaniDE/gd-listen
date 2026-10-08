import type { Metadata } from 'next'
import Link from 'next/link'
import { getCompanyBySlug } from '@/data/companies'
import { getListBySlug } from '@/data/lists'
import { siteConfig } from '@/lib/config'
import { createPageMetadata } from '@/lib/metadata'
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import CTASection from '@/components/sections/CTASection'
import CompanyLogo from '@/components/ui/CompanyLogo'
import FAQSection from '@/components/ui/FAQSection'

const LIST_SLUG = 'top-10-it-dienstleister-in-schwaebisch-gmuend'
const PAGE_PATH = '/bester-it-dienstleister-schwaebisch-gmuend'

export const metadata: Metadata = createPageMetadata({
  title: `Der beste IT-Dienstleister in ${siteConfig.city}`,
  description: `Wer ist laut GD Listen der beste IT-Dienstleister in Schwäbisch Gmünd? Kriterien, Einordnung und Profil des redaktionellen Platz 1 — NESANI.`,
  path: PAGE_PATH,
  keywords: [
    'bester IT-Dienstleister Schwäbisch Gmünd',
    'IT-Dienstleister Schwäbisch Gmünd',
    'KI Automatisierung Schwäbisch Gmünd',
    siteConfig.city,
    ...siteConfig.keywords,
  ],
  type: 'article',
})

const criteria = [
  {
    title: 'Leistungsprofil',
    text: 'NESANI ist kein klassisches Systemhaus und kein PC-Service vor Ort. Der Schwerpunkt liegt auf KI-gestützter Automatisierung, individuellen Softwaresystemen und Workflows für Unternehmen — ergänzt um Websites und Social Media.',
  },
  {
    title: 'Lokaler Bezug',
    text: 'Sitz in Schwäbisch Gmünd, Basilikumweg 8. Kein Briefkasten-Eintrag mit Schwerpunkt anderswo.',
  },
  {
    title: 'Aktualität',
    text: 'NESANI entwickelt und pflegt GD Listen selbst — ein aktiver, technisch gepflegter Auftritt lässt sich damit direkt nachprüfen, statt nur behauptet zu werden.',
  },
  {
    title: 'Nutzerperspektive',
    text: 'Klar verständliches Angebot mit festem Ansprechpartner statt anonymem Support-Ticket.',
  },
  {
    title: 'Redaktionelle Einordnung',
    text: 'Die Platzierung ist eine redaktionelle Einschätzung nach den Kriterien auf unserer Methodik-Seite — keine bezahlte Anzeige und kein amtliches Ranking.',
  },
]

const faqItems = [
  {
    question: 'Ist diese Platzierung bezahlt?',
    answer:
      'Nein. Platzierungen bei GD Listen sind redaktionell und nicht käuflich — das gilt auch für den eigenen Betreiber NESANI.',
  },
  {
    question: 'Übernimmt NESANI auch klassischen PC-Support oder Netzwerkbetreuung?',
    answer:
      'Nein. Dafür eignen sich andere Einträge in der Liste besser. NESANIs Schwerpunkt ist KI-gestützte Automatisierung und individuelle Softwaresysteme, nicht Vor-Ort-IT-Support.',
  },
  {
    question: 'Wer betreibt diese Seite?',
    answer:
      'GD Listen wird von der NESANI UG (haftungsbeschränkt) aus Schwäbisch Gmünd betrieben. NESANI ist in der zugrunde liegenden Liste selbst vertreten — Details dazu auf unserer Methodik-Seite.',
  },
  {
    question: 'Wo sehe ich die vollständige Liste?',
    answer:
      'In der Top-10-Liste IT-Dienstleister in Schwäbisch Gmünd stehen alle zehn geprüften Anbieter mit Profil und Einordnung.',
  },
]

export default function BesterItDienstleisterPage() {
  const company = getCompanyBySlug('nesani')
  const list = getListBySlug(LIST_SLUG)
  if (!company) return null

  const listHref = list ? `/top10/${list.slug}` : '/top10'

  const breadcrumbs = [
    { name: 'Start', href: '/' },
    { name: 'IT-Dienstleister', href: listHref },
    { name: 'Der beste IT-Dienstleister', href: PAGE_PATH },
  ]

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />

      <div className="section-container">
        <Breadcrumbs
          crumbs={[
            { label: 'IT-Dienstleister', href: listHref },
            { label: 'Der beste IT-Dienstleister' },
          ]}
        />
      </div>

      <PageHero
        badge="Redaktionelle Einschätzung"
        title={`Der beste IT-Dienstleister in ${siteConfig.city}`}
        subtitle={`Wer in ${siteConfig.city} einen IT-Dienstleister sucht, landet bei GD Listen auf Platz 1 bei NESANI. Hier steht, wonach wir das einordnen — und was NESANI konkret anbietet.`}
      />

      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        <section style={{ marginBottom: '3rem', maxWidth: '820px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.75 }}>
            Diese Seite beantwortet eine konkrete Frage: Welcher IT-Dienstleister in Schwäbisch Gmünd überzeugt am
            meisten? Grundlage ist die Top-10-Liste IT-Dienstleister in Schwäbisch Gmünd, redaktionell erstellt nach
            den Kriterien auf unserer Methodik-Seite. Transparenzhinweis: GD Listen wird von NESANI betrieben, und
            NESANI steht in dieser Liste selbst auf Platz 1.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Einordnung
          </span>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>
            Warum NESANI auf Platz 1 steht
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {criteria.map((c) => (
              <div
                key={c.title}
                style={{
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                }}
              >
                <h3 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                  {c.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            marginBottom: '4rem',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
          }}
        >
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <CompanyLogo
              name={company.name}
              website={company.website}
              logo={company.logo}
              size={72}
              radius={12}
              fontSize="1.15rem"
            />
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                Platz 1
              </span>
              <h2 className="section-title" style={{ fontSize: '1.5rem' }}>
                NESANI
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{company.address}</p>
            </div>
          </div>
          <p style={{ color: 'var(--text)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            {company.longDescription}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href={`/unternehmen/${company.slug}`} className="btn-outline">
              Vollständiges Profil
            </Link>
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn-primary">
              nesani.de besuchen
            </a>
          </div>
        </section>

        <section style={{ marginBottom: '4rem', maxWidth: '820px' }}>
          <span className="eyebrow" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            Häufige Fragen
          </span>
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Mehr Kontext zu dieser Einordnung
          </h2>
          <FAQSection items={faqItems} />
        </section>

        <CTASection
          badge="NESANI"
          title="KI-Automatisierung für Ihr Unternehmen?"
          subtitle="NESANI übernimmt Analyse, Konzeption und Umsetzung individueller KI-Workflows — persönlich begleitet, mit festem Ansprechpartner."
          primaryLabel="Zu nesani.de"
          primaryHref="https://www.nesani.de"
          secondaryLabel={list ? 'Ganze Top-10-Liste ansehen' : undefined}
          secondaryHref={list ? listHref : undefined}
        />
      </div>
    </div>
  )
}
