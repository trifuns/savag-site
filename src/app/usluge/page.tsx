import Link from "next/link";
import {
  Wrench,
  LaptopMinimalCheck,
  SlidersHorizontal,
  Disc3,
  CarFront,
  ThermometerSnowflake,
  type LucideIcon,
} from "lucide-react";

type Service = {
  slug: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
};

const services: Service[] = [
  { slug: "redovni-servis", title: "Redovni servis", desc: "Ulje, filteri, svećice, servisni intervali.", Icon: Wrench },
  { slug: "dijagnostika-vag", title: "Dijagnostika (VAG)", desc: "Fabrička dijagnostika i procedure za VAG grupu.", Icon: LaptopMinimalCheck },
  { slug: "kodiranje-i-adaptacije", title: "Kodiranje i adaptacije", desc: "Kodiranje modula, adaptacije i reset poruka.", Icon: SlidersHorizontal },
  { slug: "kocioni-sistem", title: "Kočioni sistem", desc: "Diskovi, pločice, senzori, kočiona tečnost.", Icon: Disc3 },
  { slug: "trap-i-ogibljenje", title: "Trap i ogibljenje", desc: "Seleni, amortizeri, spone, troubleshooting.", Icon: CarFront },
  { slug: "sistem-hladjenja", title: "Sistem hlađenja", desc: "Termostat, pumpa vode, antifriz, curenja.", Icon: ThermometerSnowflake },
];

export default function ServicesIndex() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Usluge</div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Sve usluge
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          Fokusirani na VAG platformu — dijagnostika, servis i popravke uz jasne preporuke i garanciju.
        </p>
      </header>

      {/* Grid */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ slug, title, desc, Icon }) => (
          <Link
            key={slug}
            href={`/usluge/${slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] transition
                       hover:border-white/20 hover:bg-white/[0.07]"
          >
            {/* glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand-red/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                <Icon className="h-6 w-6 text-white/85" />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>

                <div className="mt-4 h-px w-full bg-white/10" />
                <div className="mt-3 text-xs text-white/55">
                  Pogledaj detalje →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-brand-red/20 to-white/5 p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Niste sigurni šta vam treba?</h2>
            <p className="mt-2 text-white/75">
              Pošaljite upit ili nas pozovite — preporučićemo najbolju opciju za vaše vozilo.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-brand-red px-6 py-3 text-center font-medium hover:opacity-90"
            >
              Pozovi
            </a>
            <Link
              href="/kontakt"
              className="rounded-2xl bg-white/10 px-6 py-3 text-center font-medium hover:bg-white/15"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
