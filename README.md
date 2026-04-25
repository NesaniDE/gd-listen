# GD Listen

Lokale Top-10 Plattform für Schwäbisch Gmünd.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** – Unbounded (Headings) + Sora (Body)

## Setup

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Struktur

```
src/
├── app/               # Alle Pages (App Router)
├── components/
│   ├── layout/        # Header, Footer, PageHero, Breadcrumbs
│   ├── cards/         # RankingCard, CategoryCard, TopListCard, BlogCard, CompanyCard, PackageCard
│   ├── sections/      # CTASection, RelatedLists
│   └── ui/            # SearchPlaceholder, FilterBar, FAQSection
├── data/              # Placeholder-Datenmodelle (categories, lists, companies, blog)
├── lib/               # utils.ts, config.ts
└── styles/            # globals.css (Design-System, CSS-Variablen)
```

## Routen

| Route | Beschreibung |
|---|---|
| `/` | Homepage |
| `/kategorie` | Kategorie-Übersicht |
| `/kategorie/[category]` | Kategorie-Detail |
| `/kategorie/[category]/[subcategory]` | Unterkategorie |
| `/top10/[slug]` | Top-10 Listen-Seite |
| `/unternehmen/[slug]` | Unternehmensprofil |
| `/blog` | Blog-Übersicht |
| `/blog/[slug]` | Blog-Artikel |
| `/fuer-unternehmen` | Pakete & Eintragen |
| `/ueber-gd-listen` | Über uns |
| `/kontakt` | Kontakt |
| `/methodik` | Bewertungsmethodik |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutz |

## Design-System

Alle CSS-Variablen in `globals.css`:

| Variable | Wert |
|---|---|
| `--color-deep-purple` | `#7A3FFF` |
| `--color-dark-purple` | `#4B1FA8` |
| `--color-yellow` | `#FFD54A` |
| `--color-gold` | `#F5B700` |
| `--color-bg` | `#12091F` |
| `--color-card` | `#1B1230` |
| `--color-text` | `#F8F6FF` |
| `--color-muted` | `#C7B5FF` |

### Utility-Klassen
- `.btn-primary` – Gelber CTA-Button
- `.btn-outline` – Transparenter Border-Button
- `.card-base` – Dunkle Karte mit Hover-Effekt
- `.badge-purple` / `.badge-yellow` – Badges
- `.rank-number` – Gelbe Ranking-Zahl (Unbounded)
- `.placeholder-block` – Gestrichelter Platzhalter-Block
- `.section-title` – Überschriften-Stil
- `.gradient-text` – Gelb-Lila Verlaufstext
- `.stagger-children` – Animierte Kinder-Elemente
- `.section-container` – Max-Width + Padding Container

## Content befüllen

Alle Daten liegen in `src/data/`:
- `categories/index.ts` – Kategorien + Unterkategorien
- `lists/index.ts` – Top-10 Listen + Einträge
- `companies/index.ts` – Unternehmen
- `blog/index.ts` – Blog-Artikel
