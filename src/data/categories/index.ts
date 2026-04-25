export interface Category {
  slug: string
  label: string
  emoji: string
  description: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  slug: string
  label: string
  listSlug: string
}

export const categories: Category[] = [
  {
    slug: 'gastro',
    label: 'Gastro',
    emoji: '',
    description: 'Restaurants, Cafés, Bars und mehr in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'restaurants', label: 'Restaurants', listSlug: 'top-10-restaurants-in-schwaebisch-gmuend' },
      { slug: 'cafes', label: 'Cafés', listSlug: 'top-10-cafes-in-schwaebisch-gmuend' },
      { slug: 'fruehstueck', label: 'Frühstück & Brunch', listSlug: 'top-10-fruehstueck-brunch-in-schwaebisch-gmuend' },
      { slug: 'burger', label: 'Burgerläden', listSlug: 'top-10-burgerladen-in-schwaebisch-gmuend' },
      { slug: 'italiener', label: 'Italiener', listSlug: 'top-10-italiener-in-schwaebisch-gmuend' },
      { slug: 'pizzerien', label: 'Pizzerien', listSlug: 'top-10-pizzerien-in-schwaebisch-gmuend' },
      { slug: 'doener', label: 'Dönerläden', listSlug: 'top-10-donerladen-in-schwaebisch-gmuend' },
      { slug: 'bars', label: 'Bars', listSlug: 'top-10-bars-in-schwaebisch-gmuend' },
      { slug: 'cocktailbars', label: 'Cocktailbars', listSlug: 'top-10-cocktailbars-in-schwaebisch-gmuend' },
      { slug: 'lieferdienste', label: 'Lieferdienste', listSlug: 'top-10-lieferdienste-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'freizeit',
    label: 'Freizeit',
    emoji: '',
    description: 'Sport, Erholung und Freizeitaktivitäten in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'fitnessstudios', label: 'Fitnessstudios', listSlug: 'top-10-fitnessstudios-in-schwaebisch-gmuend' },
      { slug: 'schwimmbader', label: 'Freibäder / Schwimmbäder', listSlug: 'top-10-schwimmbaeder-in-schwaebisch-gmuend' },
      { slug: 'saunen', label: 'Saunen', listSlug: 'top-10-saunen-in-schwaebisch-gmuend' },
      { slug: 'kletterhallen', label: 'Kletterhallen', listSlug: 'top-10-kletterhallen-in-schwaebisch-gmuend' },
      { slug: 'ausflugsziele', label: 'Ausflugsziele', listSlug: 'top-10-ausflugsziele-in-schwaebisch-gmuend' },
      { slug: 'freizeitaktivitaten', label: 'Freizeitaktivitäten', listSlug: 'top-10-freizeitaktivitaten-in-schwaebisch-gmuend' },
      { slug: 'familien', label: 'Orte für Familien', listSlug: 'top-10-orte-familien-in-schwaebisch-gmuend' },
      { slug: 'sportangebote', label: 'Sportangebote', listSlug: 'top-10-sportangebote-in-schwaebisch-gmuend' },
      { slug: 'date-spots', label: 'Date-Spots', listSlug: 'top-10-date-spots-in-schwaebisch-gmuend' },
      { slug: 'sehenswurdigkeiten', label: 'Sehenswürdigkeiten', listSlug: 'top-10-sehenswurdigkeiten-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'dienstleister',
    label: 'Dienstleister',
    emoji: '',
    description: 'Professionelle Dienstleister und Experten in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'friseure', label: 'Friseure', listSlug: 'top-10-friseure-in-schwaebisch-gmuend' },
      { slug: 'barbiere', label: 'Barbiere', listSlug: 'top-10-barbiere-in-schwaebisch-gmuend' },
      { slug: 'reinigungsfirmen', label: 'Reinigungsfirmen', listSlug: 'top-10-reinigungsfirmen-in-schwaebisch-gmuend' },
      { slug: 'steuerberater', label: 'Steuerberater', listSlug: 'top-10-steuerberater-in-schwaebisch-gmuend' },
      { slug: 'fotografen', label: 'Fotografen', listSlug: 'top-10-fotografen-in-schwaebisch-gmuend' },
      { slug: 'webagenturen', label: 'Webagenturen', listSlug: 'top-10-webagenturen-in-schwaebisch-gmuend' },
      { slug: 'werbeagenturen', label: 'Werbeagenturen', listSlug: 'top-10-werbeagenturen-in-schwaebisch-gmuend' },
      { slug: 'unternehmensberater', label: 'Unternehmensberater', listSlug: 'top-10-unternehmensberater-in-schwaebisch-gmuend' },
      { slug: 'it-dienstleister', label: 'IT-Dienstleister', listSlug: 'top-10-it-dienstleister-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'beauty-wellness',
    label: 'Beauty & Wellness',
    emoji: '',
    description: 'Schönheit, Pflege und Wellness in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'kosmetikstudios', label: 'Kosmetikstudios', listSlug: 'top-10-kosmetikstudios-in-schwaebisch-gmuend' },
      { slug: 'nagelstudios', label: 'Nagelstudios', listSlug: 'top-10-nagelstudios-in-schwaebisch-gmuend' },
      { slug: 'massagestudios', label: 'Massagestudios', listSlug: 'top-10-massagestudios-in-schwaebisch-gmuend' },
      { slug: 'wellnessanbieter', label: 'Wellnessanbieter', listSlug: 'top-10-wellnessanbieter-in-schwaebisch-gmuend' },
      { slug: 'spas', label: 'Spas', listSlug: 'top-10-spas-in-schwaebisch-gmuend' },
      { slug: 'tattoostudios', label: 'Tattoostudios', listSlug: 'top-10-tattoostudios-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'gesundheit',
    label: 'Gesundheit',
    emoji: '',
    description: 'Ärzte, Therapeuten und Gesundheitszentren in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'zahnarzte', label: 'Zahnärzte', listSlug: 'top-10-zahnarzte-in-schwaebisch-gmuend' },
      { slug: 'physiotherapie', label: 'Physiotherapie', listSlug: 'top-10-physiotherapie-in-schwaebisch-gmuend' },
      { slug: 'orthopaden', label: 'Orthopäden', listSlug: 'top-10-orthopaden-in-schwaebisch-gmuend' },
      { slug: 'hausarztpraxen', label: 'Hausarztpraxen', listSlug: 'top-10-hausarztpraxen-in-schwaebisch-gmuend' },
      { slug: 'apotheken', label: 'Apotheken', listSlug: 'top-10-apotheken-in-schwaebisch-gmuend' },
      { slug: 'gesundheitszentren', label: 'Gesundheitszentren', listSlug: 'top-10-gesundheitszentren-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'handwerk',
    label: 'Handwerk',
    emoji: '',
    description: 'Handwerker und Fachbetriebe in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'elektriker', label: 'Elektriker', listSlug: 'top-10-elektriker-in-schwaebisch-gmuend' },
      { slug: 'sanitarbetriebe', label: 'Sanitärbetriebe', listSlug: 'top-10-sanitarbetriebe-in-schwaebisch-gmuend' },
      { slug: 'malerbetriebe', label: 'Malerbetriebe', listSlug: 'top-10-malerbetriebe-in-schwaebisch-gmuend' },
      { slug: 'umzugsfirmen', label: 'Umzugsfirmen', listSlug: 'top-10-umzugsfirmen-in-schwaebisch-gmuend' },
      { slug: 'schreinereien', label: 'Schreinereien', listSlug: 'top-10-schreinereien-in-schwaebisch-gmuend' },
      { slug: 'dachdecker', label: 'Dachdecker', listSlug: 'top-10-dachdecker-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'wohnen-immobilien',
    label: 'Wohnen & Immobilien',
    emoji: '',
    description: 'Immobilien, Einrichtung und Wohnen in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'immobilienmakler', label: 'Immobilienmakler', listSlug: 'top-10-immobilienmakler-in-schwaebisch-gmuend' },
      { slug: 'kuchenstudios', label: 'Küchenstudios', listSlug: 'top-10-kuchenstudios-in-schwaebisch-gmuend' },
      { slug: 'innenausbauer', label: 'Innenausbauer', listSlug: 'top-10-innenausbauer-in-schwaebisch-gmuend' },
      { slug: 'mobelhauser', label: 'Möbelhäuser', listSlug: 'top-10-mobelhauser-in-schwaebisch-gmuend' },
      { slug: 'hausverwaltungen', label: 'Hausverwaltungen', listSlug: 'top-10-hausverwaltungen-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'auto-mobilitat',
    label: 'Auto & Mobilität',
    emoji: '',
    description: 'Kfz-Betriebe, Fahrschulen und Mobilität in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'autowerkstatten', label: 'Autowerkstätten', listSlug: 'top-10-autowerkstatten-in-schwaebisch-gmuend' },
      { slug: 'fahrschulen', label: 'Fahrschulen', listSlug: 'top-10-fahrschulen-in-schwaebisch-gmuend' },
      { slug: 'autohauser', label: 'Autohäuser', listSlug: 'top-10-autohauser-in-schwaebisch-gmuend' },
      { slug: 'reifenservices', label: 'Reifenservices', listSlug: 'top-10-reifenservices-in-schwaebisch-gmuend' },
      { slug: 'aufbereitungsdienste', label: 'Aufbereitungsdienste', listSlug: 'top-10-aufbereitungsdienste-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'hochzeit-events',
    label: 'Hochzeit & Events',
    emoji: '',
    description: 'Hochzeitslocations, Fotografen und Events in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'hochzeitslocations', label: 'Hochzeitslocations', listSlug: 'top-10-hochzeitslocations-in-schwaebisch-gmuend' },
      { slug: 'hochzeitsfotografen', label: 'Hochzeitsfotografen', listSlug: 'top-10-hochzeitsfotografen-in-schwaebisch-gmuend' },
      { slug: 'caterer', label: 'Caterer', listSlug: 'top-10-caterer-in-schwaebisch-gmuend' },
      { slug: 'djs', label: 'DJs', listSlug: 'top-10-djs-in-schwaebisch-gmuend' },
      { slug: 'eventlocations', label: 'Eventlocations', listSlug: 'top-10-eventlocations-in-schwaebisch-gmuend' },
      { slug: 'floristen', label: 'Floristen', listSlug: 'top-10-floristen-in-schwaebisch-gmuend' },
    ],
  },
  {
    slug: 'shopping',
    label: 'Shopping',
    emoji: '',
    description: 'Lokale Geschäfte, Boutiquen und Shopping in Schwäbisch Gmünd.',
    subcategories: [
      { slug: 'boutiquen', label: 'Boutiquen', listSlug: 'top-10-boutiquen-in-schwaebisch-gmuend' },
      { slug: 'backereien', label: 'Bäckereien', listSlug: 'top-10-backereien-in-schwaebisch-gmuend' },
      { slug: 'feinkostladen', label: 'Feinkostläden', listSlug: 'top-10-feinkostladen-in-schwaebisch-gmuend' },
      { slug: 'juweliere', label: 'Juweliere', listSlug: 'top-10-juweliere-in-schwaebisch-gmuend' },
      { slug: 'geschenkeshops', label: 'Geschenkeshops', listSlug: 'top-10-geschenkeshops-in-schwaebisch-gmuend' },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
