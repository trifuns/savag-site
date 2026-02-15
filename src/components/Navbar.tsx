"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 md:py-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-4"
          onClick={() => setOpen(false)}
        >
          <img
			src={`${base}/logo_transparent.png`}
			alt="Auto Servis Savić logo"
		    className="h-24 md:h-28 w-auto object-contain"
		  />
          <div className="leading-tight">
            <div className="text-lg font-semibold">Auto Servis Savić</div>
            <div className="text-sm text-white/70">VW, Audi, Seat, Škoda</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
		  <Link className="text-sm text-white/80 hover:text-white" href="/">
            Početna
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href="/usluge">
            Usluge
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href="/o-nama">
            O nama
          </Link>
		  <Link className="text-sm text-white/80 hover:text-white" href="/galerija">
            Galerija
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href="/kontakt">
            Kontakt
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+38269976007"
            className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          >
            Pozovi
          </a>
          <Link
            href="/kontakt"
            className="rounded-2xl bg-brand-red px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Pošalji upit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden rounded-xl bg-white/10 p-3 hover:bg-white/15"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[2px] w-6 bg-white" />
          <span className="mt-1.5 block h-[2px] w-6 bg-white" />
          <span className="mt-1.5 block h-[2px] w-6 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-50 border-t border-white/10 bg-black/30 backdrop-blur-[2px]">
            <div className="mx-auto max-w-6xl px-4 py-5">
              <div className="flex flex-col gap-3">
			    <Link 
				  href="/"
			  	  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15" 
				  onClick={() => setOpen(false)}
				>
				  Početna
                </Link>
                <Link
                  href="/usluge"
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  Usluge
                </Link>
                <Link
                  href="/o-nama"
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  O nama
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  Kontakt
                </Link>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <a
                    href="tel:+38269976007"
                    className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm hover:bg-white/15"
                    onClick={() => setOpen(false)}
                  >
                    Pozovi
                  </a>
                  <Link
                    href="/kontakt"
                    className="rounded-2xl bg-brand-red px-4 py-3 text-center text-sm font-medium hover:opacity-90"
                    onClick={() => setOpen(false)}
                  >
                    Pošalji upit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
