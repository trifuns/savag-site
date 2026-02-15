export type Service = {
  slug: string;
  title: string;
  desc: string;
  heroImage: string; // putanja iz /public
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "redovni-servis",
    title: "Redovni servis",
    desc: "Ulje, filteri, svećice i servisni intervali — sve po fabričkim specifikacijama.",
    heroImage: "/services/hero-regular.jpg",
    bullets: [
      "Zamjena ulja i filtera (uljni, vazduha, kabine, goriva gdje je primjenjivo)",
      "Kontrola nivoa i stanja tečnosti",
      "Provjera curenja, remenja, opterećenja i vitalnih tačaka",
      "Servisna evidencija i preporuka narednog intervala",
    ],
  },
  {
    slug: "dijagnostika-vag",
    title: "Dijagnostika (VAG)",
    desc: "Fabrička dijagnostika za VW/Audi/Seat/Škoda: greške, mjerenja i procedure.",
    heroImage: "/services/hero-diagnostics.jpg",
    bullets: [
      "Čitanje i analiza grešaka na svim modulima",
      "Live data mjerenja i testovi aktuatora",
      "Fabričke procedure (gdje je primjenjivo)",
      "Izvještaj + jasna preporuka popravke",
    ],
  },
  {
    slug: "kodiranje-i-adaptacije",
    title: "Kodiranje i adaptacije",
    desc: "Kodiranje modula, adaptacije i reseti servisnih poruka — uredno i bez rizika.",
    heroImage: "/services/hero-coding.jpg",
    bullets: [
      "Kodiranje funkcija i opcija (gdje je podržano)",
      "Adaptacije i osnovna podešavanja",
      "Reset servisnih poruka i kalibracije",
      "Provjera kompatibilnosti prije izmjena",
    ],
  },
  {
    slug: "kocioni-sistem",
    title: "Kočioni sistem",
    desc: "Diskovi, pločice, senzori i kočiona tečnost — sigurnost na prvom mjestu.",
    heroImage: "/services/hero-brakes.jpg",
    bullets: [
      "Zamjena diskova/pločica i senzora",
      "Servis i odzračivanje kočione tečnosti",
      "Kontrola čeljusti, vodilica i habanja",
      "Test kočenja i preporuke",
    ],
  },
  {
    slug: "trap-i-ogibljenje",
    title: "Trap i ogibljenje",
    desc: "Seleni, amortizeri, spone i troubleshooting — udobnost i stabilnost.",
    heroImage: "/services/hero-suspension.jpg",
    bullets: [
      "Dijagnostika luftova i lupkanja",
      "Zamjena spona, selena, amortizera",
      "Kontrola geometrije (preporuka podešavanja)",
      "Test vožnja i finalna provjera",
    ],
  },
  {
    slug: "sistem-hladjenja",
    title: "Sistem hlađenja",
    desc: "Termostat, pumpa vode, antifriz i curenja — pouzdano hlađenje motora.",
    heroImage: "/services/hero-cooling.jpg",
    bullets: [
      "Detekcija curenja i provjera pritiska",
      "Zamjena termostata / pumpe vode (po potrebi)",
      "Zamjena/ispiranje antifriza",
      "Kontrola rada ventilatora i temperature",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
