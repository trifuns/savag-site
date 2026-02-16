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
  { slug: "redovni-servis", title: "Routine maintenance", desc: "Oil, filters, spark plugs, service intervals.", Icon: Wrench },
  { slug: "dijagnostika-vag", title: "Diagnostics", desc: "Factory-level and aftermarket diagnostics and procedures.", Icon: LaptopMinimalCheck },
  { slug: "kodiranje-i-adaptacije", title: "Coding & adaptations", desc: "Module coding, adaptations, service message resets.", Icon: SlidersHorizontal },
  { slug: "kocioni-sistem", title: "Braking system", desc: "Discs, pads, sensors, brake fluid.", Icon: Disc3 },
  { slug: "trap-i-ogibljenje", title: "Suspension & steering", desc: "Bushings, shocks, links, troubleshooting.", Icon: CarFront },
  { slug: "sistem-hladjenja", title: "Cooling system", desc: "Thermostat, water pump, coolant, leaks.", Icon: ThermometerSnowflake },
];

export default function ServicesIndexEn() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Services</div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">All services</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          Focused on the VAG platform — diagnostics, servicing and repairs with clear recommendations and warranty.
        </p>
      </header>

      {/* Grid */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ slug, title, desc, Icon }) => (
          <Link
            key={slug}
            href={`/en/usluge/${slug}`}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] transition
                       hover:border-white/20 hover:bg-white/[0.07]"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand-red/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                <Icon className="h-6 w-6 text-white/85" />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>

                <div className="mt-4 h-px w-full bg-white/10" />
                <div className="mt-3 text-xs text-white/55">View details →</div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-brand-red/20 to-white/5 p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Not sure what you need?</h2>
            <p className="mt-2 text-white/75">
              Send an inquiry or call us — we’ll recommend the best option for your vehicle.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-brand-red px-6 py-3 text-center font-medium hover:opacity-90"
            >
              Call
            </a>
            <Link
              href="/en/kontakt"
              className="rounded-2xl bg-white/10 px-6 py-3 text-center font-medium hover:bg-white/15"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
