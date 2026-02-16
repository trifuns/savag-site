import Link from "next/link";

export default function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Services</div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Braking system
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-white/70">
          Discs, pads, wear sensors and brake fluid — done precisely, cleanly, with safety as the top priority.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/en/#usluge"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
          >
            All services
          </Link>
          <Link
            href="/en/kontakt"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            Book an appointment
          </Link>
        </div>
      </header>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={`${base}/services/hero-brakes.jpg`}
          alt="Braking system"
          className="h-full w-full object-cover"
        />
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] md:p-8">
        <h2 className="text-xl font-semibold">What’s included</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/75">
          {[
            "Replacement of discs/pads and wear sensors (as needed)",
            "Guide pin service and caliper inspection",
            "Brake fluid replacement and bleeding (per recommendation)",
            "Vibration/squeal check + final braking test",
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
            Call +382 69 976 007
          </a>
          <Link
            href="/en/kontakt"
            className="rounded-2xl bg-white/10 px-6 py-3 text-center text-sm font-medium hover:bg-white/15"
          >
            Send an inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
