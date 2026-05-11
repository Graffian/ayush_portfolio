const projects = [
  {
    title: "WORSIN AI",
    desc: "Context-aware Chrome AI assistant that remembers across tabs.",
    tags: ["Chrome Extension", "AI", "Context-Aware"],
    href: "https://github.com/Graffian/CYBAU_worsinAI",
  },
  {
    title: "ShipReel",
    desc: "Turns screen recordings into polished launch reels with AI.",
    tags: ["Next.js", "Remotion", "FFmpeg", "AI"],
    href: "https://github.com/Graffian/shipreel",
  },
  {
    title: "BRUZZ Therapist",
    desc: "Voice-based AI assistant for conversational emotional support.",
    tags: ["Speech AI", "LLM", "Voice"],
    href: "https://github.com/Graffian/Bruzz_therapist",
  },
  {
    title: "LevelUp Labs",
    desc: "Gamified learning platform with session tracking and personalized workflows.",
    tags: ["Supabase", "Clerk", "React", "Progress Tracking"],
    href: "https://github.com/Graffian/Levelup-Labs",
  },
];

const skills = [
  "Rust", "Python", "TypeScript", "JavaScript",
  "React", "Next.js", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Supabase",
  "Clerk", "AI/LLMs", "Blockchain", "Linux",
];

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Ayushkant Behera
        </h1>
        <p className="mt-2 text-lg text-muted">
          Full-stack developer & AI agent engineer.
        </p>
        <p className="text-muted">20, shipping AI agents and playing with LLMs.</p>
      </header>

      {/* Story */}
      <section className="mb-16 space-y-4">
        <p className="leading-relaxed">
          I got into programming early and never stopped. I build full-stack
          apps, developer tools, and AI-powered systems. I love integrating AI
          agents into websites and playing with LLMs. I work across the stack
          and ship real software.
        </p>
        <p className="leading-relaxed">
          Active in the coding community — built two failed startups of my own,
          and I constantly learn from every mistake. Claude says my code is
          &ldquo;surprisingly readable for someone who ships at 2AM.&rdquo;
        </p>
        <p className="leading-relaxed">
          Won a hackathon at IIT Mandi, and was a finalist at a Gen AI
          hackathon at IIT Bhubaneswar — the only one from my state in the top
          12 out of 200 participants. Proud of that.
        </p>
        <p className="leading-relaxed">
          Worked as a Full Stack Developer Intern at LevelUp Labs, Hyderabad.
          Built a gamified learning platform that tracks activity across browser
          sessions and organizes content by learning goals. Set up Supabase for
          backend infrastructure and Clerk for authentication. Built progress
          tracking, content segregation, and personalized learning workflows.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
          Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border p-4 transition-colors hover:bg-zinc-50"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
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
      <footer className="border-t border-border pt-8">
        <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <a
              href="mailto:ayushkantworks@gmail.com"
              className="hover:text-foreground"
            >
              ayushkantworks@gmail.com
            </a>
            <span>+91 9124706434</span>
            <a
              href="https://github.com/graffian"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              github.com/graffian
            </a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download Resume
          </a>
        </div>
      </footer>
    </div>
  );
}
