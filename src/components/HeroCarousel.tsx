"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  title: string;
  subtitle: string;
  href: string;
  image: string; // path from /public
  cta: string;
};

export default function HeroCarousel() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Servis i fabrička dijagnostika",
        subtitle: "VW • Audi • SEAT • Škoda — premium standard servisa u Podgorici.",
        href: "/usluge",
        image: "/hero/servis-dijagnostika.jpg",
        cta: "Pogledaj više",
      },
      {
        title: "Topdon Master",
        subtitle: "Profesionalna oprema i procedure za preciznu dijagnostiku i testiranja.",
        href: "/topdon-master",
        image: "/hero/topdon-master.jpg",
        cta: "Saznaj više",
      },
      {
        title: "Topdon Story",
        subtitle: "Naša priča u kampanji “Share your story” — pogledaj video i detalje.",
        href: "/novosti/topdon-share-your-story",
        image: "/hero/topdon-story.jpg",
        cta: "Pogledaj priču",
      },
      {
        title: "Usluge",
        subtitle: "Pregled najtraženijih usluga i detalji za svaku — brzo i jasno.",
        href: "/usluge",
        image: "/hero/usluge.jpg",
        cta: "Sve usluge",
      },
    ],
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    // Full-bleed: izlazi iz px-4 wrappera na Home
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div
        ref={emblaRef}
        // full width, bez rounding (kao fife). Ako želiš rounding na desktop:
        // className="overflow-hidden bg-black/20 md:rounded-[32px]"
        className="overflow-hidden bg-black/20"
      >
        <div className="flex">
          {slides.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden"
              aria-label={s.title}
            >
              {/* Background image */}
              <img
                src={`${base}${s.image}`}
                alt=""
                className="h-[520px] w-full object-cover md:h-[640px]"
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Premium overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              {/* Content in centered container */}
              <div className="absolute inset-0 flex items-end">
                <div className="mx-auto w-full max-w-6xl px-4 pb-10 md:pb-14">
                  <div className="max-w-2xl">
                    <div className="text-xs uppercase tracking-widest text-white/70">
                      {i + 1} / {slides.length}
                    </div>

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
                      <span className="hidden text-sm text-white/70 md:inline">
                        Klikni na slajd →
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle glow */}
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl opacity-60" />
            </Link>
          ))}
        </div>
      </div>

      {/* Arrows (full-bleed positioning) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 md:px-4">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canPrev}
          className="pointer-events-auto rounded-2xl border border-white/15 bg-black/35 p-2 text-white/85 backdrop-blur-[2px] transition hover:bg-black/45 disabled:opacity-40"
          aria-label="Prethodni slajd"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          disabled={!canNext}
          className="pointer-events-auto rounded-2xl border border-white/15 bg-black/35 p-2 text-white/85 backdrop-blur-[2px] transition hover:bg-black/45 disabled:opacity-40"
          aria-label="Sledeći slajd"
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
            aria-label={`Idi na slajd ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
