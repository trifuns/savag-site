import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Auto Servis Savić — Podgorica",
  description:
    "Premium auto servis u Podgorici. Specijalizovani za VW, Audi, Seat i Škodu. Dijagnostika, servis i popravke uz garanciju.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className="min-h-screen bg-fixed">
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#111117] to-[#0A0A0F]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,30,35,0.4),transparent)]" />

        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
