import Link from "next/link";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function AboutPageEn() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[32px] bg-black/10 backdrop-blur-[1px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 py-14 text-center md:px-12 md:py-20">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            About us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 md:text-lg">
            Auto Servis Savić is a premium workshop in Podgorica, specialized in the VAG group — VW,
            Audi, SEAT and Škoda. Our focus is precise diagnostics, official procedures and reliable
            repairs.
          </p>

          {/* Brand logos row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-95">
            <img
              src={`${base}/brands/vw.svg`}
              alt="Volkswagen"
              className="h-10 w-auto object-contain md:h-12"
            />
            <img
              src={`${base}/brands/audi.svg`}
              alt="Audi"
              className="h-10 w-auto object-contain md:h-12"
            />
            <img
              src={`${base}/brands/seat.svg`}
              alt="SEAT"
              className="h-10 w-auto object-contain md:h-12"
            />
            <img
              src={`${base}/brands/skoda.svg`}
              alt="Škoda"
              className="h-10 w-auto object-contain md:h-12"
            />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-brand-red px-6 py-3 text-center font-medium hover:opacity-90"
            >
              Call +382 69 976 007
            </a>
            <Link
              href="/en/kontakt"
              className="rounded-2xl bg-white/10 px-6 py-3 text-center font-medium hover:bg-white/15"
            >
              Send an inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="space-y-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-white/60">
            Our approach
          </div>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Premium service standard
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            We combine experience, diagnostics and quality part installation to keep your vehicle
            safe and reliable.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-black/15 p-6 backdrop-blur-[1px]">
            <h3 className="text-lg font-medium">Factory diagnostics</h3>
            <p className="mt-2 text-sm text-white/70">
              Authorized access to factory-level diagnostics, coding and official repair procedures
              for VAG vehicles.
            </p>
          </div>

          <div className="rounded-3xl bg-black/15 p-6 backdrop-blur-[1px]">
            <h3 className="text-lg font-medium">Coding & software</h3>
            <p className="mt-2 text-sm text-white/70">
              Coding, adaptations and software updates (where applicable), with correct procedures
              and reliable verification.
            </p>
          </div>

          <div className="rounded-3xl bg-black/15 p-6 backdrop-blur-[1px]">
            <h3 className="text-lg font-medium">Parts with warranty</h3>
            <p className="mt-2 text-sm text-white/70">
              Installation of original or high-quality aftermarket parts with a warranty from 1
              month up to 2 years (depending on the service/part).
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="rounded-[32px] bg-black/10 p-8 backdrop-blur-[1px] md:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">
              How we work
            </div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Clear, tidy and no guessing
            </h2>
            <p className="mt-3 text-white/75">
              Our goal is to fix the issue correctly the first time, with transparent communication
              and clear recommendations.
            </p>
          </div>

          <ol className="space-y-4">
            {[
              {
                t: "1. Diagnostics & inspection",
                d: "We determine the condition and faults through checks and factory-level diagnostics.",
              },
              {
                t: "2. Recommendation & repair plan",
                d: "We explain what’s needed and propose the optimal solution.",
              },
              {
                t: "3. Installation / repair by procedure",
                d: "We follow official procedures and proven standards.",
              },
              {
                t: "4. Testing & verification",
                d: "After the work, we verify operation, clear faults and test the vehicle.",
              },
            ].map((s) => (
              <li key={s.t} className="rounded-2xl bg-black/15 p-5 backdrop-blur-[1px]">
                <div className="font-medium">{s.t}</div>
                <div className="mt-1 text-sm text-white/70">{s.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRUST / CTA */}
      <section className="rounded-[32px] bg-gradient-to-r from-brand-red/20 to-white/5 p-8 md:p-12">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Need diagnostics or a repair?
            </h2>
            <p className="mt-2 text-white/75">
              Call us or send an inquiry — we respond quickly during working hours.
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

        <section className="rounded-[32px] bg-black/10 p-6 backdrop-blur-[1px] md:p-8">
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Google Maps – Auto Servis Savić"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1437.9445965428515!2d19.294942331826267!3d42.46218072723583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d93d28bca5551%3A0xd6ef91f7260cb865!2sAuto%20Servis%20Savi%C4%87!5e1!3m2!1sen!2s!4v1770814842460!5m2!1sen!2s"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://www.google.com/search?sca_esv=4ee06a5b294f010f&sxsrf=ANbL-n7iqtNWhdYM9gWDvBjsWwRnc8TBuw:1770819160090&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOeshn9q5LkSDagJOuzJCJGWHnjjryezAGc7nUzy0jNmSt9rlWYamCdqVzGpFfa0zW3LpQPIMv9V9FrsFT39zNxNTzCEJ7xhKSq2hozn0okglCMfh1A%3D%3D&q=Auto+Servis+Savi%C4%87+Reviews&sa=X&ved=2ahUKEwi1n_63z9GSAxWUh_0HHUowHY8Q0bkNegQIIRAH&biw=1280&bih=631&dpr=3"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-white/80 hover:text-white"
          >
            View all reviews on Google Maps →
          </a>
        </section>
      </section>
    </div>
  );
}
