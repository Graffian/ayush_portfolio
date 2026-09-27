import type { Metadata } from "next";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects — Ayushkant Behera",
  description:
    "Full-stack apps, AI agents, and developer tools built by Ayushkant Behera.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted sm:mb-6 sm:text-sm">
        Projects
      </h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="block rounded-lg border border-border p-3 transition-colors hover:bg-zinc-900 sm:p-4"
          >
            <h2 className="text-sm font-medium sm:text-base">{p.title}</h2>
            <p className="mt-1 text-sm text-muted">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-accent hover:underline"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
