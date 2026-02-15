"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = {
  src: string;
  alt: string;
  tag: "Servis" | "Oprema" | "Prije/Poslije";
};

export default function GalerijaPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // 1) Ovdje samo dodaješ svoje slike (putanja je iz /public)
  const items: Item[] = useMemo(
    () => [
      { src: "/galerija/01.jpg", alt: "Radionica — detalj", tag: "Servis" },
      { src: "/galerija/02.jpg", alt: "Radionica — prostor", tag: "Servis" },
      { src: "/galerija/03.jpg", alt: "Dijagnostika — oprema", tag: "Oprema" },
      { src: "/galerija/04.jpg", alt: "Dijagnostika — rad", tag: "Oprema" },
      { src: "/galerija/05.jpg", alt: "Prije/poslije — detalj", tag: "Prije/Poslije" },
      { src: "/galerija/06.jpg", alt: "Prije/poslije — detalj", tag: "Prije/Poslije" },

      // Dodaj dalje 07..12 itd
      { src: "/galerija/07.jpg", alt: "Servis — detalj", tag: "Servis" },
      { src: "/galerija/08.jpg", alt: "Oprema — detalj", tag: "Oprema" },
      { src: "/galerija/09.jpg", alt: "Servis — detalj", tag: "Servis" },
      { src: "/galerija/10.jpg", alt: "Prije/poslije — detalj", tag: "Prije/Poslije" },
      { src: "/galerija/11.jpg", alt: "Oprema — detalj", tag: "Oprema" },
      { src: "/galerija/12.jpg", alt: "Servis — detalj", tag: "Servis" },
    ],
    []
  );

  const [filter, setFilter] = useState<"Sve" | Item["tag"]>("Sve");
  const visible = useMemo(
    () => (filter === "Sve" ? items : items.filter((i) => i.tag === filter)),
    [items, filter]
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Keyboard controls for premium feel
  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : Math.min(i + 1, visible.length - 1)));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : Math.max(i - 1, 0)));
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, visible.length]);

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-widest text-white/60">Galerija</div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Prostor, oprema i radovi
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          Odabran set fotografija — čisto, precizno i profesionalno. Kliknite na sliku za pregled.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          {(["Sve", "Servis", "Oprema", "Prije/Poslije"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={[
                "rounded-full border px-4 py-2 text-sm transition",
                filter === t
                  ? "border-white/20 bg-white/15 text-white"
                  : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {t}
            </button>
          ))}

          <div className="ml-auto hidden md:block">
            <Link href="/kontakt" className="text-sm text-white/80 hover:text-white">
              Zakaži termin →
            </Link>
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((it, idx) => (
          <button
            key={`${it.src}-${idx}`}
            onClick={() => setOpenIndex(idx)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 text-left"
          >
            <img
              src={`${base}${it.src}`}
              alt={it.alt}
              loading="lazy"
              className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />

            {/* Premium overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/85">
                {it.tag}
              </div>
              <div className="mt-2 text-sm font-medium text-white/90">{it.alt}</div>
            </div>
          </button>
        ))}
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-[2px]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${base}${visible[openIndex].src}`}
              alt={visible[openIndex].alt}
              className="max-h-[78vh] w-full object-contain"
            />

            <div className="flex items-center justify-between gap-3 border-t border-white/10 p-4">
              <div className="min-w-0">
                <div className="text-xs text-white/60">{visible[openIndex].tag}</div>
                <div className="truncate text-sm text-white/85">{visible[openIndex].alt}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setOpenIndex((i) => (i === null ? i : Math.max(i - 1, 0)))}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
                >
                  ←
                </button>
                <button
                  onClick={() => setOpenIndex((i) => (i === null ? i : Math.min(i + 1, visible.length - 1)))}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
                >
                  →
                </button>
                <button
                  onClick={() => setOpenIndex(null)}
                  className="rounded-2xl bg-brand-red px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Zatvori
                </button>
              </div>
            </div>

            <div className="px-4 pb-4 text-xs text-white/50">
              Tip: ESC zatvara • strelice lijevo/desno mijenjaju slike
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
