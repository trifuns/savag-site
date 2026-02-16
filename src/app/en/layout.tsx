import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Servis Savić — Podgorica",
  description:
    "Premium auto service in Podgorica. Specialized in VW, Audi, Seat and Škoda. Diagnostics, servicing and repairs with warranty.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
