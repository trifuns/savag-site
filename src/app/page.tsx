import Link from "next/link";

const phoneDisplay = "+382 69 976 007";
const phoneHref = "tel:+38269976007";

const services = [
  { title: "Redovni servis", desc: "Ulje, filteri, svećice, servisni intervali." },
  { title: "Dijagnostika (VAG)", desc: "Ovlašćen pristup fabričkoj dijagnostici i procedurama." },
  { title: "Kodiranje i adaptacije", desc: "Kodiranje modula, adaptacije, reseti servisnih poruka." },
  { title: "Softverska ažuriranja", desc: "Ažuriranja po zvaničnim procedurama (gdje je primjenjivo)." },
  { title: "Kočioni sistem", desc: "Diskovi, pločice, senzori, kočiona tečnost." },
  { title: "Trap i ogibljenje", desc: "Seleni, amortizeri, spone, troubleshooting." },
  { title: "Sistem hlađenja", desc: "Termostat, pumpa vode, antifriz, curenja." },
  { title: "Elektronika", desc: "Senzori, instalacije, greške, rješavanje problema." },
  { title: "Ugradnja djelova uz garanciju", desc: "Originalni ili kvalitetni aftermarket djelovi." },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="text-xs uppercase tracking-widest text-white/60">{kicker}</div>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[32px] ">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
		  <div className="relative z-10 px-8 py-12 md:px-12 md:py-2">
          

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl md:py-4">
			  Servis i Fabrička Dijagnostika 
		  </h1>

			<div className="mt-5 flex flex-wrap items-center gap-4">
			  <img
				src="/brands/vw.svg"
				alt="Volkswagen"
				className="h-10 md:h-12 w-auto object-contain"
			  />
			  <img
				src="/brands/audi.svg"
				alt="Audi"
				className="h-10 md:h-12 w-auto object-contain"
			  />
			  <img
				src="/brands/seat.svg"
				alt="SEAT"
				className="h-10 md:h-12 w-auto object-contain"
			  />
			  <img
				src="/brands/skoda.svg"
				alt="Škoda"
				className="h-10 md:h-12 w-auto object-contain"
			  />
			</div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={phoneHref}
              className="rounded-2xl bg-brand-red px-6 py-3 text-center font-medium hover:opacity-90"
            >
              Pozovi {phoneDisplay}
            </a>

            <Link
              href="/kontakt"
              className="rounded-2xl bg-white/10 px-6 py-3 text-center font-medium hover:bg-white/15"
            >
              Pošalji upit
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-white/80 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="text-white">Radno vrijeme</div>
              <div>Ponedjeljak – Petak: 09h – 17h</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="text-white">Adresa</div>
              <div>Pohorska 17, Podgorica</div>
            </div>
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section>
        <SectionTitle kicker="Usluge" title="Šta radimo" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium">{s.title}</h3>
                <span className="h-2 w-2 rounded-full" />
              </div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/usluge" className="text-sm text-white/80 hover:text-white">
            Pogledaj sve usluge →
          </Link>
        </div>
      </section>

      {/* ZAŠTO MI */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <SectionTitle kicker="Zašto mi" title="Standard premium servisa" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">Fabrička dijagnostika</div>
            <p className="mt-2 text-sm text-white/70">
              Ovlašćen pristup kodiranju, softverskim ažuriranjima i zvaničnim procedurama.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">Djelovi uz garanciju</div>
            <p className="mt-2 text-sm text-white/70">
              Originalni ili kvalitetni aftermarket djelovi, uz garanciju od 1 mjesec do 2 godine.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="font-medium">Transparentna preporuka</div>
            <p className="mt-2 text-sm text-white/70">
              Jasna dijagnostika i preporuke — bez nagađanja i nepotrebnih troškova.
            </p>
          </div>
        </div>
      </section>

      {/* DONJI CTA */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-brand-red/20 to-white/5 p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Spremni da zakažete?</h2>
            <p className="mt-2 text-white/75">
              Pošaljite upit ili nas pozovite — odgovaramo brzo u radno vrijeme.
            </p>
          </div>		
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={phoneHref}
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
