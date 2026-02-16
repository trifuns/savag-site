import Link from "next/link";

export default function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Service</div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Factory diagnostics (VW Group — ODIS &amp; ELSA)
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-white/70">
          Auto Servis Savić has recently become the first independent service workshop in Montenegro with an official
          license to use Volkswagen Group service tools — including ODIS and ELSA.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="tel:+38269976007"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            Call now
          </a>

          <Link
            href="/en/kontakt"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
          >
            Send an inquiry
          </Link>
        </div>
      </header>

      {/* Hero image */}
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={`${base}/novosti/fabricka-dijagnostika.jpg`}
          alt="Factory diagnostics — ODIS & ELSA"
          className="h-full w-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] md:p-8">
        <p className="text-sm leading-relaxed text-white/75">
          This means we now have our own VW Group account and full access to factory-level diagnostics, coding, software
          updates and official repair procedures — exactly the same tools used by authorized VW, Audi, Škoda and SEAT
          service centers.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">ODIS — factory diagnostics</div>
            <p className="mt-2 text-sm text-white/70">
              Precise fault reading, component tests and guided procedures according to official manufacturer protocols.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">ELSA — official procedures</div>
            <p className="mt-2 text-sm text-white/70">
              Access to factory manuals, torque specs and technical procedures — step by step.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">Coding & adaptations</div>
            <p className="mt-2 text-sm text-white/70">
              Module settings and adaptations according to factory parameters (where applicable).
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">Software updates</div>
            <p className="mt-2 text-sm text-white/70">
              Updates performed according to official procedures, subject to support for the specific vehicle model.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+38269976007"
            className="rounded-2xl bg-brand-red px-6 py-3 text-center text-sm font-medium hover:opacity-90"
          >
            Call +382 69 976 007
          </a>
          <Link
            href="/en/kontakt"
            className="rounded-2xl bg-white/10 px-6 py-3 text-center text-sm font-medium hover:bg-white/15"
          >
            Book an appointment
          </Link>
        </div>

        <div className="mt-6 text-xs text-white/55">
          Note: Feature availability depends on the vehicle model, year and configuration.
        </div>
      </section>

      {/* Back */}
      <div>
        <Link href="/en" className="text-sm text-white/80 hover:text-white">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
