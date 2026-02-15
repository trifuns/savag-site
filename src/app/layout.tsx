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
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Auto Servis Savić</div>
          <div>Pohorska 17, Podgorica • +382 69 976 007</div>
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
	<body
	  className="min-h-screen bg-fixed bg-center bg-cover"
	  style={{
		backgroundImage: `url('${base}/main_bg.jpg')`,
	  }}
	>
	  {/* Global overlay za čitljivost */}
	  <div className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-[1px]" />

	  <Navbar />
	  <main className="mx-auto max-w-6xl px-4 py-10">
		{children}
	  </main>
	  <Footer />
	</body>
    </html>
  );
}
