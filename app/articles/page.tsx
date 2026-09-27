import type { Metadata } from "next";
import ExtLink from "@/components/ext-link";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles — Ayushkant Behera",
  description:
    "Write-ups on networking, security, and proxies by Ayushkant Behera.",
};

export default function ArticlesPage() {
  return (
    <section>
      <h1 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted sm:mb-6 sm:text-sm">
        Articles
      </h1>
      <div className="space-y-6">
        {articles.map((a) => (
          <div key={a.title}>
            <h2 className="text-sm font-medium sm:text-base">
              {a.href ? (
                <ExtLink href={a.href}>{a.title}</ExtLink>
              ) : (
                a.title
              )}{" "}
              <span className="font-normal text-muted">
                — ({a.topics.join(", ")})
              </span>
            </h2>
            <p className="mt-1 text-sm text-muted">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
