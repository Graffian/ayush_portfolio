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
        At 18, interned at{" "}
        <ExtLink href="https://leveluplabs.space/">LevelUp Labs</ExtLink>,
        Hyderabad, as a full-stack engineer in its early days, building a
        gamified learning platform by laying out most of its core infrastructure
        with Supabase and Clerk to track user progress and personalize what each
        learner sees.
      </p>
      <p className="leading-relaxed">
        At 19, started freelancing on automation and web scraping gigs —
        including iOS game-automation bots using computer vision (OpenCV) for a
        US client. Grew that income from $60/month to $350+/month at its peak.
      </p>
      <p className="leading-relaxed">
        At 20 (now), built and grew{" "}
        <ExtLink href="https://rizzup.antideploy.com">RizzUp</ExtLink> — an AI
        wingman app that helps people navigate dating, from what to text to when
        to send it. Now at 20 paying subscribers at $15/month.
      </p>
      <p className="leading-relaxed">
        Won a hackathon at IIT Mandi, and was a finalist at a Gen AI hackathon at
        IIT Bhubaneswar — the only one from my state in the top 12 out of 200
        participants.
      </p>
    </section>
  );
}
