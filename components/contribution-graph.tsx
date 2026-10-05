import type { ContributionCell } from "@/lib/github";

const LEVELS = [
  "bg-zinc-800",
  "bg-zinc-700",
  "bg-zinc-600",
  "bg-[#a1a1a1]",
  "bg-[#ededed]",
];

function levelFor(count: number) {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

export default function ContributionGraph({
  year,
  totalCommits,
  activeDays,
  weeks,
  login,
}: {
  year: number;
  totalCommits: number;
  activeDays: number;
  weeks: ContributionCell[][];
  login: string;
}) {
  return (
    <div className="mt-10 border-t border-border pt-6 sm:mt-14 sm:pt-8">
      <a
        href={`https://github.com/${login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-accent"
      >
        GitHub Activity
      </a>
      <p className="mt-2 text-sm text-muted">
        {totalCommits.toLocaleString()} commits across {activeDays} active days
        in {year}.
      </p>
      <div
        role="img"
        aria-label={`Contribution graph for ${year}: ${totalCommits} commits across ${activeDays} active days.`}
        className="mt-4 flex w-full gap-[2px]"
      >
        {weeks.map((week) => (
          <div
            key={week[0]?.date}
            className="flex min-w-0 flex-1 flex-col gap-[2px]"
          >
            {week.map((day) =>
              day.inYear ? (
                <div
                  key={day.date}
                  title={`${day.count} commit${day.count === 1 ? "" : "s"} on ${day.date}`}
                  className={`aspect-square w-full rounded-[2px] ${LEVELS[levelFor(day.count)]}`}
                />
              ) : (
                <div key={day.date} className="aspect-square w-full" />
              ),
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-foreground">
        <span>Less</span>
        {LEVELS.map((level) => (
          <span
            key={level}
            className={`h-2.5 w-2.5 rounded-[2px] ${level}`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}