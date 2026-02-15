import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Novosti</div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Uzbudljivo partnerstvo: Petar u saradnji sa Topdon-om na reklami za projekat “Share your story”
        </h1>

        <p className="max-w-3xl text-sm leading-relaxed text-white/70">
          Tokom 2024. godine Auto Servis Savić obilježava saradnju sa globalnim liderom u aftermarket
          dijagnostici i servisnoj opremi — kompanijom Topdon. Povodom njihove godišnjice pozvani smo da,
          kao predstavnici Evrope, učestvujemo u kampanji “My Topdon Story”. Ova saradnja je potvrda da
          smo dio zajednice vrhunskih nezavisnih servisa.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://www.topdon.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium
                       hover:bg-white/15"
          >
            Saznajte više o Topdon-u
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            Nazad na početnu
          </Link>
        </div>
      </header>

      {/* Video (centralni dio) */}
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/clDQAfcgWzg"
            title="From Banker to Mechanic — Breaking the Expectation #MyTopdonStory"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 p-5 md:flex-row md:items-center md:justify-between">

          <a
            href="https://www.topdon.com/pages/news-detail.html?id=1858436803376812032"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/80 hover:text-white"
          >
            Otvori na Topdon website →
          </a>
        </div>
      </section>

      {/* Kontakt info (kao na WP dnu) */}
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px]">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Lokacija</div>
            <div className="mt-2 text-sm text-white/80">
              Pohorska 17, Podgorica 81000, Crna Gora
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Kontakt</div>
            <div className="mt-2 text-sm text-white/80">
              <a className="hover:text-white" href="mailto:savag.crnagora@gmail.com">
                savag.crnagora@gmail.com
              </a>
              <div className="mt-1">
                <a className="hover:text-white" href="tel:+38269976007">
                  +382 69 976 007
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
