import Link from "next/link";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";


export default function ONamaPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[32px] bg-black/10 backdrop-blur-[1px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="relative z-10 px-8 py-14 text-center md:px-12 md:py-20">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            O nama
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 md:text-lg">
            Auto Servis Savić je premium servis u Podgorici, specijalizovan za VAG
            grupu — VW, Audi, Seat i Škodu. Fokus nam je precizna dijagnostika,
            zvanične procedure i pouzdane popravke.
          </p>

          {/* Brand logos row (optional) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-95">
            <img
              src={`${base}/brands/vw.svg`}
              alt="Volkswagen"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <img
              src={`${base}/brands/audi.svg`}
              alt="Audi"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <img
              src={`${base}/brands/seat.svg`}
              alt="SEAT"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <img
              src={`${base}/brands/skoda.svg`}
              alt="Škoda"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+38269976007"
              className="rounded-2xl bg-brand-red px-6 py-3 text-center font-medium hover:opacity-90"
            >
              Pozovi +382 69 976 007
            </a>
            <Link
              href="/kontakt"
              className="rounded-2xl bg-white/10 px-6 py-3 text-center font-medium hover:bg-white/15"
            >
              Pošalji upit
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="space-y-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-white/60">
            Naš pristup
          </div>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Standard premium servisa
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            Kombinujemo iskustvo, dijagnostiku i kvalitetnu ugradnju djelova kako bi
            vozilo bilo ispravno i pouzdano.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-black/15 p-6 backdrop-blur-[1px]">
            <h3 className="text-lg font-medium">Fabrička dijagnostika</h3>
            <p className="mt-2 text-sm text-white/70">
              Ovlašćen pristup fabričkoj dijagnostici, kodiranju i zvaničnim
              procedurama popravke za VAG vozila.
            </p>
          </div>

          <div className="rounded-3xl bg-black/15 p-6 backdrop-blur-[1px]">
            <h3 className="text-lg font-medium">Kodiranje i softver</h3>
            <p className="mt-2 text-sm text-white/70">
              Kodiranja, adaptacije i ažuriranja softvera (gdje je primjenjivo),
              uz pravilne procedure i pouzdanu provjeru.
            </p>
          </div>

          <div className="rounded-3xl bg-black/15 p-6 backdrop-blur-[1px]">
            <h3 className="text-lg font-medium">Djelovi uz garanciju</h3>
            <p className="mt-2 text-sm text-white/70">
              Ugradnja originalnih ili kvalitetnih aftermarket djelova uz
              garanciju od 1 mjesec do 2 godine (u zavisnosti od usluge/dijela).
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="rounded-[32px] bg-black/10 p-8 backdrop-blur-[1px] md:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">
              Kako radimo
            </div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Jasno, uredno i bez nagađanja
            </h2>
            <p className="mt-3 text-white/75">
              Naš cilj je da se problem riješi ispravno iz prve, uz transparentnu
              komunikaciju i jasnu preporuku.
            </p>
          </div>

          <ol className="space-y-4">
            {[
              {
                t: "1. Dijagnostika i pregled",
                d: "Utvrđujemo stanje i greške kroz provjeru i fabričku dijagnostiku.",
              },
              {
                t: "2. Preporuka i plan popravke",
                d: "Objašnjavamo šta je potrebno i predlažemo optimalno rješenje.",
              },
              {
                t: "3. Ugradnja / popravka po proceduri",
                d: "Radimo po zvaničnim procedurama i provjerenim standardima.",
              },
              {
                t: "4. Test i provjera",
                d: "Nakon rada provjeravamo sistem i rad vozila, brišemo greške i testiramo.",
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
              Treba ti dijagnostika ili popravka?
            </h2>
            <p className="mt-2 text-white/75">
              Pozovi nas ili pošalji upit — odgovaramo brzo u radno vrijeme.
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
			Pogledaj sve recenzije na Google Maps →
		  </a>
        </section>

      </section>
    </div>
  );
}
