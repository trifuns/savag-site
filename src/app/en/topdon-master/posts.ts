export type TopdonPost = {
  title: string;
  href: string;        // link ka Topdon članku
  date?: string;       // npr. "2025-02-01" (opciono)
  excerpt?: string;    // kratko, 1-2 rečenice (ti pišeš)
  tag?: string;        // npr. "Dijagnostika", "VAG", "Savjeti"
};

export const topdonPosts: TopdonPost[] = [
  {
    title: "10 Minute Diagnosis – MAP Sensor Failure on VW Golf 1.9 TDI (BLS)",
    href: "https://community.topdon.com/detail?id=1997&type=1",
    date: "2026-02-09",
    excerpt: "Practical solutions",
    tag: "Diagnostics",
  },
  // Dodaj ovdje ostale Petrove tekstove (svaki kao novi objekat)
];
