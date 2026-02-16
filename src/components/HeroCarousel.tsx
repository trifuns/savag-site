"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Locale = "me" | "en";

type Slide = {
  title: string;
  subtitle: string;
  href: string;
  image: string; // path from /public
  cta: string;
};

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

function stripBase(pathname: string) {
  if (!base) return pathname;
  return pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;
}

function detectLocale(pathname: string): Locale {
  const p = stripBase(pathname);
  return p === "/en" || p.startsWith("/en/") ? "en" : "me";
}

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

function addLocalePrefix(path: string, locale: Locale) {
  const p = ensureLeadingSlash(path);
  if (locale === "en") return p === "/" ? "/en" : `/en${p}`;
  return p;
}

export default function HeroCarousel() {
  const pathname = usePathname() || "/";
  const locale = detectLocale(pathname);

  const slides: Slide[] = useMemo(() => {
    const dict: Record<Locale, Slide[]> = {
      me: [
        {
          title: "Servis i usluge",
          subtitle: "Pregled najtraženijih usluga i detalji za svaku — brzo i jasno.",
          href: "/usluge",
          image: "/hero/usluge.jpg",
          cta: "Sve usluge",
        },
        {
          title: "Fabrička dijagnostika",
          subtitle: "VW • Audi • SEAT • Škoda — premium standard servisa u Podgorici.",
          href: "/fabricka-dijagnostika",
          image: "/hero/servis-dijagnostika.jpg",
          cta: "Pogledaj više",
        },
        {
          title: "Topdon Story",
          subtitle: "Naša priča u kampanji “Share your story” — pogledaj video i detalje.",
          href: "/novosti/topdon-share-your-story",
          image: "/hero/topdon-story.jpg",
          cta: "Pogledaj priču",
        },
        {
          title: "Topdon Master",
          subtitle: "Profesionalna oprema i procedure za preciznu dijagnostiku i testiranja.",
          href: "/topdon-master",
          image: "/hero/topdon-master.jpg",
          cta: "Saznaj više",
        },
      ],
      en: [
        {
          title: "Service & Repairs",
          subtitle: "Overview of the most requested services with clear details for each.",
          href: "/usluge",
          image: "/hero/usluge.jpg",
          cta: "All services",
        },
        {
          title: "Factory Diagnostics",
          subtitle: "VW • Audi • SEAT • Škoda — premium service standard in Podgorica.",
          href: "/fabricka-dijagnostika",
          image: "/hero/servis-dijagnostika.jpg",
          cta: "Learn more",
        },
        {
          title: "Topdon Story",
          subtitle: "Our story in the “Share your story” campaign — watch the video and read more.",
          href: "/novosti/topdon-share-your-story",
          image: "/hero/topdon-story.jpg",
          cta: "View story",
        },
        {
          title: "Topdon Master",
          subtitle: "Professional equipment and procedures for precise diagnostics and testing.",
          href: "/topdon-master",
          image: "/hero/topdon-master.jpg",
          cta: "Find out more",
        },
      ],
    };

    return dict[locale];
  }, [locale]);

  // Autoplay: 6s, stop on hover, stop on interaction
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 6000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [autoplay]);

  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    autoplay.reset();
    emblaApi?.scrollPrev();
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    autoplay.reset();
    emblaApi?.scrollNext();
  }, [emblaApi, autoplay]);

  const scrollTo = useCallback(
    (i: number) => {
      autoplay.reset();
      emblaApi?.scrollTo(i);
    },
    [emblaApi, autoplay]
  );

  const prevLabel = locale === "en" ? "Previous slide" : "Prethodni slajd";
  const nextLabel = locale === "en" ? "Next slide" : "Sledeći slajd";
  const dotLabel = (i: number) => (locale === "en" ? `Go to slide ${i}` : `Idi na slajd ${i}`);

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div ref={emblaRef} className="overflow-hidden bg-black/20">
        <div className="flex">
          {slides.map((s, i) => (
            <Link
              key={i}
              href={`${base}${addLocalePrefix(s.href, locale)}`}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden"
              aria-label={s.title}
              onClick={() => autoplay.reset()}
            >
              <img
                src={`${base}${s.image}`}
                alt=""
                className="h-[520px] w-full object-cover md:h-[640px]"
                loading={i === 0 ? "eager" : "lazy"}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-end">
                <div className="mx-auto w-full max-w-6xl px-4 pb-10 md:pb-14">
                  <div className="max-w-2xl">
                    <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                      {s.title}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                      {s.subtitle}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-3">
                      <span className="rounded-2xl bg-brand-red px-6 py-3 text-sm font-medium text-white hover:opacity-90">
                        {s.cta}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl opacity-60" />
            </Link>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 md:px-4">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canPrev}
          className="pointer-events-auto rounded-2xl border border-white/15 bg-black/35 p-2 text-white/85 backdrop-blur-[2px] transition hover:bg-black/45 disabled:opacity-40"
          aria-label={prevLabel}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          disabled={!canNext}
          className="pointer-events-auto rounded-2xl border border-white/15 bg-black/35 p-2 text-white/85 backdrop-blur-[2px] transition hover:bg-black/45 disabled:opacity-40"
          aria-label={nextLabel}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2 px-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={[
              "h-2.5 rounded-full border border-white/20 transition",
              selected === i ? "w-8 bg-white/70" : "w-2.5 bg-white/15 hover:bg-white/25",
            ].join(" ")}
            aria-label={dotLabel(i + 1)}
          />
        ))}
      </div>
    </section>
  );
}
