import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";


import {
  Wrench,
  LaptopMinimalCheck,
  SlidersHorizontal,
  Disc3,
  CarFront,
  ThermometerSnowflake,
  type LucideIcon,
} from "lucide-react";

const phoneDisplay = "+382 69 976 007";
const phoneHref = "tel:+38269976007";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const services: { slug: string; title: string; desc: string; Icon: LucideIcon }[] = [
  { slug: "redovni-servis", title: "Redovni servis", desc: "Ulje, filteri, svećice, servisni intervali.", Icon: Wrench },
  { slug: "dijagnostika-vag", title: "Dijagnostika (VAG)", desc: "Fabrička dijagnostika i procedure za VAG grupu.", Icon: LaptopMinimalCheck },
  { slug: "kodiranje-i-adaptacije", title: "Kodiranje i adaptacije", desc: "Kodiranje modula, adaptacije, reset servisnih poruka.", Icon: SlidersHorizontal },
  { slug: "kocioni-sistem", title: "Kočioni sistem", desc: "Diskovi, pločice, senzori, kočiona tečnost.", Icon: Disc3 },
  { slug: "trap-i-ogibljenje", title: "Trap i ogibljenje", desc: "Seleni, amortizeri, spone, troubleshooting.", Icon: CarFront },
  { slug: "sistem-hladjenja", title: "Sistem hlađenja", desc: "Termostat, pumpa vode, antifriz, curenja.", Icon: ThermometerSnowflake },
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
      <div className="-mt-10">
        <HeroCarousel />
      </div> 

      {/* USLUGE */}
      <section id="usluge">
        <SectionTitle kicker="Usluge" title="Šta radimo" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		  {services.map(({ title, desc, slug, Icon }) => (
		  <Link key={slug} href={`/usluge/${slug}`} className="block">
			<div
			  key={title}
			  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] transition
						 hover:border-white/20 hover:bg-white/[0.07]"
			>
			  {/* suptilan premium glow */}
			  <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand-red/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

			  <div className="relative flex items-start gap-4">
				<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
				  <Icon className="h-6 w-6 text-white/85" />
				</div>

				<div className="min-w-0">
				  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
				  <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>

				  {/* premium mikro detalj */}
				  <div className="mt-4 h-px w-full bg-white/10" />
				  <div className="mt-3 text-xs text-white/55">
					Efikasnost • Kvalitet • Tradicija
				  </div>
				</div>
			  </div>
			</div>
		  </Link>	
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
            <div className="font-medium">Kvalitetni Djelovi</div>
            <p className="mt-2 text-sm text-white/70">
              Originalni ili kvalitetni aftermarket djelovi, uz garanciju do 25 mjeseci.
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
	  
	  {/* GALERIJA PREVIEW — PREMIUM EDITORIAL */}
		<section>
		  <div className="mb-6 flex items-end justify-between gap-4">
			<div>
			  <div className="text-xs uppercase tracking-widest text-white/60">Galerija</div>
			  <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Pogled iz radionice</h2>
			  <p className="mt-2 max-w-2xl text-sm text-white/70">
				Prostor, oprema i detalji rada — selekcija fotografija iz svakodnevnog servisa.
			  </p>
			</div>

			<Link
			  href="/galerija"
			  className="hidden shrink-0 rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 md:inline-flex"
			>
			  Pogledaj sve →
			</Link>
		  </div>

		  <div className="grid gap-4 lg:grid-cols-12">
			{/* Lijevo: 2 velike */}
			<div className="grid gap-4 lg:col-span-7">
			  {[
				{ src: "/galerija/01.jpg", alt: "Radionica" },
				{ src: "/galerija/02.jpg", alt: "Servis — detalj" },
			  ].map((img, i) => (
				<Link
				  key={i}
				  href="/galerija"
				  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20"
				>
				  <img
					src={`${base}${img.src}`}
					alt={img.alt}
					loading="lazy"
					className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02] md:h-72"
				  />
				  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
				  <div className="absolute bottom-0 left-0 right-0 p-5">
					<div className="text-sm font-medium text-white/90">{img.alt}</div>
					<div className="mt-1 text-xs text-white/60">Klikni za galeriju →</div>
				  </div>
				</Link>
			  ))}
			</div>

			{/* Desno: 4 manje */}
			<div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
			  {[
				{ src: "/galerija/03.jpg", alt: "Servis" },
				{ src: "/galerija/04.jpg", alt: "EV vozila" },
				{ src: "/galerija/05.jpg", alt: "Ostali brendovi" },
				{ src: "/galerija/06.jpg", alt: "Dijagnostika" },
			  ].map((img, i) => (
				<Link
				  key={i}
				  href="/galerija"
				  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20"
				>
				  <img
					src={`${base}${img.src}`}
					alt={img.alt}
					loading="lazy"
					className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02] md:h-48"
				  />
				  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
				  <div className="absolute bottom-0 left-0 right-0 p-4">
					<div className="text-sm font-medium text-white/90">{img.alt}</div>
				  </div>
				</Link>
			  ))}
			</div>
		  </div>

		  {/* Mobile CTA */}
		  <div className="mt-6 md:hidden">
			<Link
			  href="/galerija"
			  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
			>
			  Pogledaj sve fotografije →
			</Link>
		  </div>
		</section>

	    
	  
	  {/* PARTNERSTVO / TOPDON */}
		<section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] md:p-10">
		  <div className="grid items-center gap-8 md:grid-cols-2">
			{/* Lijevo: tekst */}
			<div>
			  <div className="text-xs uppercase tracking-widest text-white/60">Novosti</div>

			  <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
				Uzbudljivo partnerstvo: Naš izvršni direktor Petar u saradnji sa Topdon-om na reklami za projekat “Share your story“
			  </h2>

			  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
				Auto Servis Savić sa ponosom ističe da je 2024 godinu obilježilo partnerstvo sa svjetskim liderom,
				kompanijom Topdon!
			  </p>

			  <div className="mt-6">
				<Link
				  href="/novosti/topdon-share-your-story"
				  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white
							 hover:bg-white/15"
				>
				  Klikni da saznaš više
				</Link>
			  </div>
			</div>

			{/* Desno: slika */}
			<div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
			  <img
				src={`${base}/novosti/topdon-story.jpg`}
				alt="Topdon — Share your story"
				className="h-full w-full object-cover"
			  />
			</div>
		  </div>
		</section>
		
      {/* DONJI CTA */}
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] md:p-10">
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
