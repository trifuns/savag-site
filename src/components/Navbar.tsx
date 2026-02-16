"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Instagram } from "lucide-react";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Locale = "me" | "en";

function stripBase(pathname: string) {
  if (!base) return pathname;
  return pathname.startsWith(base) ? pathname.slice(base.length) || "/" : pathname;
}

function detectLocale(pathname: string): Locale {
  const p = stripBase(pathname);
  return p === "/en" || p.startsWith("/en/") ? "en" : "me";
}

function removeLocalePrefix(path: string) {
  return path === "/en" ? "/" : path.replace(/^\/en(\/|$)/, "/");
}

function ensureTrailingSlash(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function addLocalePrefix(path: string, locale: Locale) {
  const p = ensureTrailingSlash(path);
  if (locale === "en") return p === "/" ? "/en/" : `/en${p}`;
  return p;
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const locale = detectLocale(pathname);

  const t = useMemo(() => {
    const dict = {
      me: {
        home: "Početna",
        services: "Usluge",
        about: "O nama",
        gallery: "Galerija",
        contact: "Kontakt",
        topdon: "Topdon Master",
        call: "Pozovi",
      },
      en: {
        home: "Home",
        services: "Services",
        about: "About",
        gallery: "Gallery",
        contact: "Contact",
        topdon: "Topdon Master",
        call: "Call",
      },
    } as const;

    return dict[locale];
  }, [locale]);

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

  const makeHref = (path: string) => `${base}${addLocalePrefix(path, locale)}`;

  // Keep current page when switching language
  const { hrefMe, hrefEn } = useMemo(() => {
    const p = stripBase(pathname);
    const withoutLocale = removeLocalePrefix(p);
    return {
      hrefMe: `${base}${addLocalePrefix(withoutLocale, "me")}`,
      hrefEn: `${base}${addLocalePrefix(withoutLocale, "en")}`,
    };
  }, [pathname]);

const Toggle = ({ size = "md" }: { size?: "sm" | "md" }) => (
  <div
    className={[
      "inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1",
      size === "sm" ? "text-[11px]" : "text-xs",
    ].join(" ")}
    aria-label="Language switch"
  >
    <Link
      href={hrefMe}
      onClick={() => setOpen(false)}
      className={[
        "rounded-full font-semibold tracking-widest transition",
        size === "sm" ? "px-2.5 py-1" : "px-3 py-1.5",
        locale === "me"
          ? "bg-white/15 text-white"
          : "text-white/70 hover:text-white hover:bg-white/10",
      ].join(" ")}
      aria-label="Crnogorski (CG)"
      title="Crnogorski (CG)"
    >
      CG
    </Link>

    <Link
      href={hrefEn}
      onClick={() => setOpen(false)}
      className={[
        "rounded-full font-semibold tracking-widest transition",
        size === "sm" ? "px-2.5 py-1" : "px-3 py-1.5",
        locale === "en"
          ? "bg-white/15 text-white"
          : "text-white/70 hover:text-white hover:bg-white/10",
      ].join(" ")}
      aria-label="English (EN)"
      title="English (EN)"
    >
      EN
    </Link>
  </div>
);


  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 md:py-4">
        {/* Logo / Brand */}
        <Link
          href={makeHref("/")}
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
          <Link className="text-sm text-white/80 hover:text-white" href={makeHref("/")}>
            {t.home}
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href={makeHref("/usluge")}>
            {t.services}
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href={makeHref("/o-nama")}>
            {t.about}
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href={makeHref("/galerija")}>
            {t.gallery}
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href={makeHref("/kontakt")}>
            {t.contact}
          </Link>
          <Link className="text-sm text-white/80 hover:text-white" href={makeHref("/topdon-master")}>
            {t.topdon}
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Language toggle */}
          <Toggle />

          <a
            href="tel:+38269976007"
            className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          >
            {t.call}
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/autoservis.savic?igsh=MWtuODlpamVqZTA4cw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <Instagram className="h-4.5 w-4.5 text-white/80 group-hover:text-white" />
            </a>
          </div>
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
                  href={makeHref("/")}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  {t.home}
                </Link>
                <Link
                  href={makeHref("/usluge")}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  {t.services}
                </Link>
                <Link
                  href={makeHref("/o-nama")}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  {t.about}
                </Link>
                <Link
                  href={makeHref("/galerija")}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  {t.gallery}
                </Link>
                <Link
                  href={makeHref("/kontakt")}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  {t.contact}
                </Link>
                <Link
                  href={makeHref("/topdon-master")}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15"
                  onClick={() => setOpen(false)}
                >
                  {t.topdon}
                </Link>

                {/* Actions row: Call (left) + Instagram (right) */}
				<div className="mt-2 grid grid-cols-2 gap-3 items-center">
				  <a
					href="tel:+38269976007"
					className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm hover:bg-white/15"
					onClick={() => setOpen(false)}
				  >
					{t.call}
				  </a>

				  <a
					href="https://www.instagram.com/autoservis.savic?igsh=MWtuODlpamVqZTA4cw%3D%3D&utm_source=qr"
					target="_blank"
					rel="noreferrer"
					aria-label="Instagram"
					className="group inline-flex h-[48px] w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
				  >
					<Instagram className="h-7 w-7 text-white/80 group-hover:text-white" />
				  </a>
				</div>

				{/* Toggle below, centered and small */}
				<div className="mt-3 flex justify-center">
				  <Toggle size="sm" />
				</div>

              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
