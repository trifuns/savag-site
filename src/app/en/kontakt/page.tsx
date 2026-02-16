import { Instagram } from "lucide-react";

export default function KontaktPageEn() {
  return (
    <div className="space-y-14">
      {/* Header */}
      <section className="relative overflow-hidden rounded-[32px] bg-black/10 backdrop-blur-[1px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 py-14 text-center md:px-12 md:py-20">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Contact
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 md:text-lg">
            Call us or send an inquiry. We respond quickly during working hours.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-brand-red px-6 py-3 text-center font-medium hover:opacity-90"
            >
              Call +382 69 976 007
            </a>
            <a
              href="https://wa.me/38269976007"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 px-6 py-3 text-center font-medium hover:bg-white/15"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/autoservis.savic?igsh=MWtuODlpamVqZTA4cw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <Instagram className="h-8 w-8 text-white/80 group-hover:text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Info card */}
        <div className="rounded-[32px] bg-black/10 p-6 backdrop-blur-[1px] md:p-8">
          <h2 className="text-2xl font-semibold">Information</h2>

          <div className="mt-6 space-y-4 text-white/80">
            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Phone</div>
              <a
                className="mt-1 block text-lg text-white hover:opacity-90"
                href="tel:+38269976007"
              >
                +382 69 976 007
              </a>
            </div>

            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Address</div>
              <div className="mt-1 text-lg text-white">Pohorska 17, Podgorica</div>
            </div>

            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Working hours</div>
              <div className="mt-1 text-lg text-white">Monday – Friday: 09:00 – 17:00</div>
            </div>

            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Warranty</div>
              <div className="mt-1 text-white">
                From 1 month up to 2 years (depending on the part and service).
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm hover:bg-white/15"
            >
              Call
            </a>
            <a
              href="https://www.google.com/maps?q=Pohorska%2017%20Podgorica"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm hover:bg-white/15"
            >
              Directions
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[32px] bg-black/10 backdrop-blur-[1px]">
          <iframe
            title="Map - Auto Servis Savić"
            src="https://www.google.com/maps?q=Pohorska%2017%20Podgorica&output=embed"
            className="h-[520px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Form */}
      <section className="rounded-[32px] bg-black/10 p-6 backdrop-blur-[1px] md:p-8">
        <h2 className="text-2xl font-semibold">Send an inquiry</h2>
        <p className="mt-2 text-sm text-white/70">
          (Static for now) Later we can easily connect this to an email service, Formspree or a backend.
        </p>

        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Full name"
          />
          <input
            className="rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Phone"
          />
          <input
            className="md:col-span-2 rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Vehicle (e.g. Golf 7 2.0 TDI)"
          />
          <textarea
            className="md:col-span-2 min-h-[140px] rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Message (symptoms, errors, what’s happening...)"
          />

          <button
            type="button"
            className="md:col-span-2 rounded-2xl bg-brand-red px-6 py-3 font-medium hover:opacity-90"
          >
            Send (demo)
          </button>
        </form>
      </section>
    </div>
  );
}
