import type { Metadata } from "next";
import ExtLink from "@/components/ext-link";

export const metadata: Metadata = {
  title: "Ayushkant Behera — About",
  description:
    "Full-stack developer & AI agent engineer. Shipping AI agents, full-stack apps, and writing about how they work under the hood.",
};

export default function AboutPage() {
  return (
    <section className="space-y-3 sm:space-y-4">
      <p className="leading-relaxed">
        I got into programming early and never stopped. I build full-stack apps
        and AI-powered systems, and I like wiring AI agents into real products.
        I also love researching things and writing about them on{" "}
        <ExtLink href="https://medium.com/@ayushkantworks">Medium</ExtLink>.
      </p>
      <p className="leading-relaxed">
        At 18 — Interned at{" "}
        <ExtLink href="https://leveluplabs.space/">LevelUp Labs</ExtLink>,
        Hyderabad, building core infra (Supabase + Clerk) for a gamified
        learning platform.
      </p>
      <p className="leading-relaxed">
        At 19 — Freelanced on automation/scraping gigs, including
        CV-based/DFS-based iOS game bots for intl clients; earned starting from
        $60/mo to $350+/mo.
      </p>
      <p className="leading-relaxed">
        At 20 (now) — Built{" "}
        <ExtLink href="https://rizzup.antideploy.com">RizzUp</ExtLink>, an AI
        dating wingman app; now 20 paying subscribers at $15/mo.
      </p>
      <p className="leading-relaxed">
        Won a hackathon at IIT Mandi, and was a finalist at a Gen AI hackathon at
        IIT Bhubaneswar — the only one from my state in the top 12 out of 200
        participants.
      </p>
    </section>
  );
}
