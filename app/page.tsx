type ProjectLink = { label: string; href: string };

type Project = {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
  links?: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "Across",
    desc: "Index, search, and chat with your browser history and open tabs.",
    tags: ["Chrome Extension", "RAG", "AI"],
    href: "https://github.com/Graffian/Across",
  },
  {
    title: "LevelUp Labs",
    desc: "Gamified learning platform with session tracking and personalized workflows.",
    tags: ["Supabase", "Clerk", "React", "Progress Tracking"],
    href: "https://github.com/Graffian/Levelup-Labs",
  },
  {
    title: "SelfHeal",
    desc: "A self-correcting AI agent that turns a plain-English goal into a real API request, executes it, and fixes its own failures by feeding errors back to the LLM and retrying — streaming every attempt live.",
    tags: ["Next.js", "AI Agents", "Groq", "OpenAPI"],
    links: [
      { label: "GitHub", href: "https://github.com/Graffian/SelfHeal" },
      { label: "Live Demo", href: "https://self-heal-sigma.vercel.app/" },
      { label: "Watch Demo", href: "https://www.youtube.com/watch?v=pwOvrO10c5g" },
    ],
  },
  {
    title: "iOS Game Automation Bots",
    desc: "Two paid iOS automation bots for Triumph.gg — a blackjack bot using computer vision for card/state detection, and a word-link solver using OpenCV template matching and DFS. $250 each.",
    tags: ["Python", "OpenCV", "Computer Vision", "WebDriverAgent"],
    links: [
      { label: "GitHub — blackjack", href: "https://github.com/Graffian/triul_blackjack" },
      { label: "GitHub — word-link", href: "https://github.com/Graffian/word_link" },
    ],
  },
];

const skills = [
  "Rust", "Python", "TypeScript", "JavaScript",
  "React", "Next.js", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Supabase",
  "Clerk", "AI/LLMs", "Blockchain", "Linux",
];

import { Mail, Phone } from "lucide-react";
import { siGithub } from "simple-icons";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siGithub.path} />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2a6 6 0 0 1 2-2z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6 sm:py-20">
      {/* Hero */}
      <header className="mb-10 sm:mb-16">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
          Ayushkant Behera
        </h1>
        <p className="mt-1 sm:mt-2 text-base sm:text-lg text-muted">
          Full-stack developer & AI agent engineer.
        </p>
        <p className="text-sm sm:text-base text-muted">20, shipping AI agents and playing with LLMs.</p>
      </header>

      {/* Story */}
      <section className="mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        <p className="leading-relaxed">
          I got into programming early and never stopped. I build full-stack
          apps, developer tools, and AI-powered systems. I love integrating AI
          agents into websites and playing with LLMs. I work across the stack
          and ship real software.
        </p>
        <p className="leading-relaxed">
          Started freelancing at 19 — early projects included paid iOS
          game-automation bots (computer vision, OpenCV) for a US client, and I
          currently freelance on a Unity 6.3 game for a Japan-market client,
          communicating directly in Japanese. Freelance income has grown from
          $60/month to $350+/month, and I&rsquo;m on track to go higher.
        </p>
        <p className="leading-relaxed">
          Won a hackathon at IIT Mandi, and was a finalist at a Gen AI
          hackathon at IIT Bhubaneswar — the only one from my state in the top
          12 out of 200 participants. Proud of that.
        </p>
        <p className="leading-relaxed">
          Interned at LevelUp Labs, Hyderabad — built a gamified learning
          platform with Supabase and Clerk for progress tracking and
          personalized workflows.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-10 sm:mb-16">
        <h2 className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest text-muted">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            p.links ? (
              <div
                key={p.title}
                className="block rounded-lg border border-border p-3 sm:p-4 transition-colors hover:bg-zinc-900"
              >
                <h3 className="text-sm sm:text-base font-medium">{p.title}</h3>
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
            ) : (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border p-3 sm:p-4 transition-colors hover:bg-zinc-900"
              >
                <h3 className="text-sm sm:text-base font-medium">{p.title}</h3>
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
              </a>
            )
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10 sm:mb-16">
        <h2 className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest text-muted">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border px-3 py-1 text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact & Resume */}
      <footer className="border-t border-border pt-6 sm:pt-8">
        <div className="flex flex-col gap-3 text-xs sm:text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <a
              href="mailto:ayushkantworks@gmail.com"
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              ayushkantworks@gmail.com
            </a>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              +91 9124706434
            </span>
            <a
              href="https://github.com/Graffian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              github.com/Graffian
            </a>
            <a
              href="https://www.linkedin.com/in/ayushkant-behera-18a860279"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              linkedin.com/in/ayushkant-behera-18a860279
            </a>
          </div>
          <a
            href="/ayush_resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download Resume
          </a>
        </div>
      </footer>
    </div>
  );
}
