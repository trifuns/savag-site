export type Locale = "me" | "en";

export type ServiceSlug =
  | "redovni-servis"
  | "dijagnostika-vag"
  | "kodiranje-i-adaptacije"
  | "kocioni-sistem"
  | "trap-i-ogibljenje"
  | "sistem-hladjenja";

export type ServiceContent = {
  title: string;
  subtitle: string;
  includesTitle: string;
  bullets: string[];
  ctaPrimary: string;
  ctaSecondary: string;
};

export type Service = {
  slug: ServiceSlug;
  image: string; // /public path
  me: ServiceContent;
  en: ServiceContent;
};

export const services: Service[] = [
  {
    slug: "redovni-servis",
    image: "/services/hero-redovni-servis.jpg",
    me: {
      title: "Redovni servis",
      subtitle:
        "Veliki servis, zamjena ulja i filtera, provjere i servisni intervali — po fabričkim preporukama, kvalitetno i efikasno.",
      includesTitle: "Šta uključuje",
      bullets: [
        "Veliki servis",
        "Zamjena ulja i filtera (uljni, vazduha, kabine, goriva gdje je primjenjivo)",
        "Kontrola tečnosti (kočiona, rashladna, servo, stakla) i vizuelni pregled curenja",
        "Provjera vitalnih tačaka (remenje, crijeva, kočnice, akumulator)",
        "Preporuka narednog intervala i servisna evidencija",
      ],
      ctaPrimary: "Zakaži termin",
      ctaSecondary: "Pošalji upit",
    },
    en: {
      title: "Routine service",
      subtitle:
        "Major service, oil & filter replacement, checks and service intervals — per factory recommendations, done efficiently and with quality.",
      includesTitle: "What’s included",
      bullets: [
        "Major service",
        "Oil and filter replacement (oil, air, cabin, fuel where applicable)",
        "Fluid check (brake, coolant, power steering, washer) and visual leak inspection",
        "Inspection of key items (belts, hoses, brakes, battery)",
        "Next interval recommendation and service record",
      ],
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Send an inquiry",
    },
  },

  {
    slug: "dijagnostika-vag",
    image: "/services/hero-diagnostics.jpg",
    me: {
      title: "Dijagnostika (VAG)",
      subtitle:
        "Fabrička dijagnostika za VW/Audi/Seat/Škoda: greške, mjerenja, testovi i procedure — uz jasan izvještaj.",
      includesTitle: "Šta uključuje",
      bullets: [
        "Čitanje i analiza grešaka na svim modulima",
        "Live data mjerenja i testovi aktuatora",
        "Fabričke procedure (gdje je primjenjivo)",
        "Izvještaj + preporuka narednih koraka",
      ],
      ctaPrimary: "Zakaži termin",
      ctaSecondary: "Pošalji upit",
    },
    en: {
      title: "Diagnostics (VAG)",
      subtitle:
        "Factory-level diagnostics for VW/Audi/Seat/Škoda: fault codes, live data, tests and procedures — with a clear report.",
      includesTitle: "What’s included",
      bullets: [
        "Reading and analysis of fault codes across all modules",
        "Live data measurements and actuator tests",
        "Factory procedures (where applicable)",
        "Report with recommendations for next steps",
      ],
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Send an inquiry",
    },
  },

  {
    slug: "kodiranje-i-adaptacije",
    image: "/services/hero-kodiranje-i-adaptacije.jpg",
    me: {
      title: "Kodiranje i adaptacije",
      subtitle:
        "Kodiranje modula, adaptacije i reset servisnih poruka — uredno, sigurno i u skladu sa kompatibilnošću vozila.",
      includesTitle: "Šta uključuje",
      bullets: [
        "Kodiranje funkcija/opcija (gdje je podržano)",
        "Adaptacije i osnovna podešavanja modula",
        "Reset servisnih poruka i kalibracije (gdje je primjenjivo)",
        "Provjera kompatibilnosti prije izmjena + kontrola grešaka nakon",
      ],
      ctaPrimary: "Zakaži termin",
      ctaSecondary: "Pošalji upit",
    },
    en: {
      title: "Coding & adaptations",
      subtitle:
        "Module coding, adaptations and service message resets — safely and in line with vehicle compatibility.",
      includesTitle: "What’s included",
      bullets: [
        "Coding of functions/options (where supported)",
        "Adaptations and basic module settings",
        "Service message reset and calibrations (where applicable)",
        "Compatibility check before changes + fault check afterwards",
      ],
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Send an inquiry",
    },
  },

  {
    slug: "kocioni-sistem",
    image: "/services/hero-kocioni-sistem.jpg",
    me: {
      title: "Kočioni sistem",
      subtitle:
        "Diskovi, pločice, senzori i kočiona tečnost — precizno, čisto i sa fokusom na sigurnost.",
      includesTitle: "Šta uključuje",
      bullets: [
        "Zamjena diskova/pločica i senzora habanja (po potrebi)",
        "Servis vodilica i kontrola čeljusti",
        "Zamjena i odzračivanje kočione tečnosti (prema preporuci)",
        "Kontrola vibracija/škripanja + finalni test kočenja",
      ],
      ctaPrimary: "Zakaži termin",
      ctaSecondary: "Pošalji upit",
    },
    en: {
      title: "Braking system",
      subtitle:
        "Discs, pads, sensors and brake fluid — done precisely, cleanly, with safety as the priority.",
      includesTitle: "What’s included",
      bullets: [
        "Replacement of discs/pads and wear sensors (as needed)",
        "Guide pin service and caliper inspection",
        "Brake fluid replacement and bleeding (per recommendation)",
        "Vibration/squeal check + final braking test",
      ],
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Send an inquiry",
    },
  },

  {
    slug: "trap-i-ogibljenje",
    image: "/services/hero-trap-i-ogibljenje.jpg",
    me: {
      title: "Trap i ogibljenje",
      subtitle:
        "Dijagnostika i servis trapa — stabilnost, udobnost i sigurnost bez “lupkanja” i luftova.",
      includesTitle: "Šta uključuje",
      bullets: [
        "Dijagnostika luftova i zvukova (vizuelno + test vožnja po potrebi)",
        "Zamjena spone, selena, krajnika, amortizera (po potrebi)",
        "Kontrola ležajeva i nosača",
        "Preporuka podešavanja geometrije nakon intervencije",
      ],
      ctaPrimary: "Zakaži termin",
      ctaSecondary: "Pošalji upit",
    },
    en: {
      title: "Suspension & steering",
      subtitle:
        "Suspension diagnostics and service — stability, comfort and safety without knocks and play.",
      includesTitle: "What’s included",
      bullets: [
        "Diagnosis of play and noises (visual + test drive if needed)",
        "Replacement of links, bushings, tie-rod ends, shocks (as needed)",
        "Inspection of bearings and mounts",
        "Recommendation for alignment after the work",
      ],
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Send an inquiry",
    },
  },

  {
    slug: "sistem-hladjenja",
    image: "/services/hero-sistem-hladjenja.jpg",
    me: {
      title: "Sistem hlađenja - AC klima",
      subtitle:
        "Termostat, pumpa vode, antifriz i curenja — stabilna temperatura i pouzdan rad motora.",
      includesTitle: "Šta uključuje",
      bullets: [
        "Detekcija curenja i kontrola pritiska sistema",
        "Provjera termostata, ventilatora i temperature rada",
        "Zamjena pumpe vode / termostata (po potrebi)",
        "Zamjena ili ispiranje antifriza i finalna provjera",
      ],
      ctaPrimary: "Zakaži termin",
      ctaSecondary: "Pošalji upit",
    },
    en: {
      title: "Cooling system - A/C",
      subtitle:
        "Thermostat, water pump, coolant and leaks — stable temperature and reliable engine operation.",
      includesTitle: "What’s included",
      bullets: [
        "Leak detection and system pressure check",
        "Thermostat, fan and operating temperature check",
        "Water pump / thermostat replacement (as needed)",
        "Coolant replacement or flush with final inspection",
      ],
      ctaPrimary: "Book an appointment",
      ctaSecondary: "Send an inquiry",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
