import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Auto Servis Savić — Podgorica",
  description:
    "Premium auto servis u Podgorici. Specijalizovani za VW, Audi, Seat i Škodu. Dijagnostika, servis i popravke uz garanciju.",
};

function Footer() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Auto Servis Savić
            <div className="mt-1">Pohorska 17, Podgorica • +382 69 976 007</div>
          </div>

          {/* Payment logos – bigger, no bg, no border */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/50">Prihvatamo:</span>

            <img
              src={`${base}/credit-cards.jpg`}
              alt="Visa & Mastercard"
              className="h-12 w-auto"   // ⬅️ make it bigger (try h-9, h-10, h-12)
            />
          </div>
        </div>
      </div>
    </footer>
  );
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
    <body className="min-h-screen bg-fixed">
	  <div
		className="fixed inset-0 -z-10 bg-gradient-to-b from-[#111117] to-[#0A0A0F]"
	  />
	  <div
		className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,30,35,0.4),transparent)]"
	  />
	  <Navbar />
	  <main className="mx-auto max-w-6xl px-4 py-10">
		{children}
	  </main>
	  <Footer />
	</body>
    </html>
  );
}
