export default function KontaktPage() {
  return (
    <div className="space-y-14">
      {/* Header */}
      <section className="relative overflow-hidden rounded-[32px] bg-black/10 backdrop-blur-[1px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 py-14 text-center md:px-12 md:py-20">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Kontakt
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 md:text-lg">
            Pozovite nas ili pošaljite upit. Odgovaramo brzo u radno vrijeme.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-brand-red px-6 py-3 text-center font-medium hover:opacity-90"
            >
              Pozovi +382 69 976 007
            </a>
            <a
              href="https://wa.me/38269976007"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 px-6 py-3 text-center font-medium hover:bg-white/15"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Info card */}
        <div className="rounded-[32px] bg-black/10 p-6 backdrop-blur-[1px] md:p-8">
          <h2 className="text-2xl font-semibold">Informacije</h2>

          <div className="mt-6 space-y-4 text-white/80">
            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Telefon</div>
              <a className="mt-1 block text-lg text-white hover:opacity-90" href="tel:+38269976007">
                +382 69 976 007
              </a>
            </div>

            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Adresa</div>
              <div className="mt-1 text-lg text-white">Pohorska 17, Podgorica</div>
            </div>

            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Radno vrijeme</div>
              <div className="mt-1 text-lg text-white">Ponedjeljak – Petak: 09h – 17h</div>
            </div>

            <div className="rounded-2xl bg-black/15 p-5">
              <div className="text-sm text-white/60">Garancija</div>
              <div className="mt-1 text-white">
                Od 1 mjesec do 2 godine (u zavisnosti od dijela i usluge).
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm hover:bg-white/15"
            >
              Pozovi
            </a>
            <a
              href="https://www.google.com/maps?q=Pohorska%2017%20Podgorica"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm hover:bg-white/15"
            >
              Navigacija
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[32px] bg-black/10 backdrop-blur-[1px]">
          <iframe
            title="Mapa - Auto Servis Savić"
            src="https://www.google.com/maps?q=Pohorska%2017%20Podgorica&output=embed"
            className="h-[520px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Form */}
      <section className="rounded-[32px] bg-black/10 p-6 backdrop-blur-[1px] md:p-8">
        <h2 className="text-2xl font-semibold">Pošaljite upit</h2>
        <p className="mt-2 text-sm text-white/70">
          (Za sada statički) Kasnije ovo lako povezujemo na email servis, Formspree ili backend.
        </p>

        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Ime i prezime"
          />
          <input
            className="rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Telefon"
          />
          <input
            className="md:col-span-2 rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Vozilo (npr. Golf 7 2.0 TDI)"
          />
          <textarea
            className="md:col-span-2 min-h-[140px] rounded-2xl bg-black/20 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-white/20"
            placeholder="Poruka (simptomi, greške, šta se dešava...)"
          />

          <button
            type="button"
            className="md:col-span-2 rounded-2xl bg-brand-red px-6 py-3 font-medium hover:opacity-90"
          >
            Pošalji (demo)
          </button>
        </form>
      </section>
    </div>
  );
}
