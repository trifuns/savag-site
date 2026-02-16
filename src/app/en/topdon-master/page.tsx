import Link from "next/link";
import { topdonPosts } from "../topdon-master/posts";

function formatDate(d?: string) {
  if (!d) return null;
  // Simple format: YYYY-MM-DD -> DD.MM.YYYY
  const [y, m, day] = d.split("-");
  if (!y || !m || !day) return d;
  return `${day}.${m}.${y}.`;
}

export default function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Header */}
      <header className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Topdon Master — expert articles
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-white/70">
            Petar, CEO of Auto Servis Savić, publishes expert articles as part of the Topdon Master
            program. Here you can find links to all published articles.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://community.topdon.com/topdonMaster"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
            >
              Topdon Master website →
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative overflow-hidden rounded-3xl bg-black/20">
          <img
            src={`${base}/hero/topdon-master.jpg`}
            alt="Topdon Master"
            className="h-[320px] w-full object-contain p-6 md:h-[380px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </header>

      {/* Posts grid */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/60">Articles</div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              All published articles
            </h2>
          </div>
        </div>

        {topdonPosts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-white/70">
            No links yet. Add new articles in{" "}
            <code className="rounded bg-black/30 px-2 py-1 text-white/85">
              app/topdon-master/posts.ts
            </code>
            .
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topdonPosts.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] transition
                           hover:border-white/20 hover:bg-white/[0.07]"
              >
                {/* glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-brand-red/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs text-white/60">
                      {formatDate(p.date) ?? "Topdon Master"}
                    </div>
                    {p.tag ? (
                      <div className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/75">
                        {p.tag}
                      </div>
                    ) : null}
                  </div>

                  <div className="text-lg font-semibold leading-snug tracking-tight">
                    {p.title}
                  </div>

                  {p.excerpt ? (
                    <p className="text-sm leading-relaxed text-white/70">
                      {p.excerpt}
                    </p>
                  ) : (
                    <p className="text-sm leading-relaxed text-white/70">
                      Read on the Topdon platform.
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-white/55">Open article</div>
                    <div className="text-sm text-white/85 transition group-hover:translate-x-0.5">
                      →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Mobile CTA */}
        <div className="md:hidden">
          <a
            href="https://community.topdon.com/topdonMaster"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
          >
            Open Topdon Master →
          </a>
        </div>
      </section>
    </div>
  );
}
