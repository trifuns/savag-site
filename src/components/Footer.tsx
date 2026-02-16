"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

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

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale = detectLocale(pathname);

  const t = useMemo(() => {
    return locale === "en"
      ? {
          accepts: "We accept:",
          addressLine: "Pohorska 17, Podgorica • +382 69 976 007",
        }
      : {
          accepts: "Prihvatamo:",
          addressLine: "Pohorska 17, Podgorica • +382 69 976 007",
        };
  }, [locale]);

  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Auto Servis Savić
            <div className="mt-1">{t.addressLine}</div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-white/50">{t.accepts}</span>

            <img
              src={`${base}/credit-cards.jpg`}
              alt="Visa & Mastercard"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
