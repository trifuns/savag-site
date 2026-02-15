import Link from "next/link";

export default function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Usluga</div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Fabrička dijagnostika (VW Group — ODIS &amp; ELSA)
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-white/70">
          Auto Servis Savić je nedavno postao prva nezavisna servisna radionica u Crnoj Gori sa zvaničnom licencom za
          korišćenje Volkswagen Group servisnih alata — uključujući ODIS i ELSA.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="tel:+38269976007"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            Pozovi odmah
          </a>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
          >
            Pošalji upit
          </Link>
        </div>
      </header>

      {/* Hero image */}
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={`${base}/novosti/fabricka-dijagnostika.jpg`}
          alt="Fabrička dijagnostika — ODIS & ELSA"
          className="h-full w-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] md:p-8">
        <p className="text-sm leading-relaxed text-white/75">
          To znači da sada imamo sopstveni VW Group nalog i pun pristup fabričkoj dijagnostici, kodiranju, ažuriranjima
          softvera i zvaničnim procedurama popravke — potpuno isto kao ovlašćeni VW, Audi, Škoda i SEAT servisi.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">ODIS — fabrička dijagnostika</div>
            <p className="mt-2 text-sm text-white/70">
              Precizno očitavanje grešaka, testovi komponenti i vođene procedure po zvaničnim protokolima proizvođača.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">ELSA — zvanične procedure</div>
            <p className="mt-2 text-sm text-white/70">
              Pristup fabričkim uputstvima, momentima zatezanja i tehničkim procedurama — korak po korak.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">Kodiranje i adaptacije</div>
            <p className="mt-2 text-sm text-white/70">
              Podešavanja modula i adaptacije po fabričkim parametrima (gdje je primjenjivo).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">Softverska ažuriranja</div>
            <p className="mt-2 text-sm text-white/70">
              Ažuriranja po zvaničnim procedurama, u skladu sa podrškom za konkretan model vozila.
            </p>
          </div>
        </div>

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
            Zakaži termin
          </Link>
        </div>

        <div className="mt-6 text-xs text-white/55">
          Napomena: dostupnost funkcija zavisi od modela, godišta i konfiguracije vozila.
        </div>
      </section>

      {/* Back */}
      <div>
        <Link href="/" className="text-sm text-white/80 hover:text-white">
          ← Nazad na početnu
        </Link>
      </div>
    </div>
  );
}
