import Link from "next/link";

export default function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Usluge</div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Redovni servis
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-white/70">
          Veliki servis, zamjena ulja i filtera, provjere i servisni intervali — po fabričkim preporukama, kvalitetno i efikasno.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/#usluge"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
          >
            Sve usluge
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            Zakaži termin
          </Link>
        </div>
      </header>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={`${base}/services/hero-regular.jpg`}
          alt="Redovni servis"
          className="h-full w-full object-cover"
        />
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] md:p-8">
        <h2 className="text-xl font-semibold">Šta uključuje</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/75">
          {[
		    "Veliki servis",
            "Zamjena ulja i filtera (uljni, vazduha, kabine, goriva gdje je primjenjivo)",
            "Kontrola tečnosti (kočiona, rashladna, servo, stakla) i vizuelni pregled curenja",
            "Provjera vitalnih tačaka (remenje, crijeva, kočnice, akumulator)",
            "Preporuka narednog intervala i servisna evidencija",
          ].map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/50" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+38269976007"
            className="rounded-2xl bg-brand-red px-6 py-3 text-center text-sm font-medium hover:opacity-90"
          >
            Pozovi +382 69 976 007
          </a>
          <Link
            href="/kontakt"
            className="rounded-2xl bg-white/10 px-6 py-3 text-center text-sm font-medium hover:bg-white/15"
          >
            Pošalji upit
          </Link>
        </div>
      </section>
    </div>
  );
}
