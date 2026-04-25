export const siteConfig = {
  name: 'GD Listen',
  shortName: 'GD Listen',
  description:
    'Die besten Top-10 Listen für Schwäbisch Gmünd — kuratierte lokale Empfehlungen für Gastro, Freizeit, Dienstleister, Beauty und Gesundheit.',
  shortDescription: 'Lokale Top-10 Empfehlungen für Schwäbisch Gmünd.',
  url: 'https://gd-listen-two.vercel.app',
  city: 'Schwäbisch Gmünd',
  cityShort: 'GD',
  region: 'Baden-Württemberg',
  postalCode: '73525',
  country: 'DE',
  language: 'de',
  locale: 'de_DE',
  publisher: {
    name: 'Nesani UG (haftungsbeschränkt) i.G.',
    url: 'https://www.nesani.de',
    address: 'Basilikumweg 8, 73527 Schwäbisch Gmünd',
    email: 'info@nesani.de',
  },
  twitter: '@nesani_de',
  ogImage: '/og.png',
  keywords: [
    'Schwäbisch Gmünd',
    'GD Listen',
    'Top 10 Schwäbisch Gmünd',
    'lokale Empfehlungen',
    'beste Restaurants Schwäbisch Gmünd',
    'beste Cafés Schwäbisch Gmünd',
    'Branchenverzeichnis Schwäbisch Gmünd',
    'lokale Anbieter GD',
    'Schwäbisch Gmünd Tipps',
  ],
} as const

export const navLinks = [
  { label: 'Kategorien', href: '/kategorie' },
  { label: 'Top 10 Listen', href: '/top10' },
  { label: 'Blog', href: '/blog' },
  { label: 'Für Unternehmen', href: '/fuer-unternehmen' },
  { label: 'Über uns', href: '/ueber-gd-listen' },
]

export const footerLinks = {
  platform: [
    { label: 'Kategorien', href: '/kategorie' },
    { label: 'Methodik', href: '/methodik' },
    { label: 'Blog', href: '/blog' },
    { label: 'Über GD Listen', href: '/ueber-gd-listen' },
  ],
  unternehmen: [
    { label: 'Für Unternehmen', href: '/fuer-unternehmen' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
}
