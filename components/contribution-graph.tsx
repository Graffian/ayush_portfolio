import type { ContributionCell } from "@/lib/github";

const LEVELS = [
  "bg-zinc-800",
  "bg-[#1c3f5f]",
  "bg-[#2b628f]",
  "bg-[#4a8ac2]",
  "bg-[#93c5fd]",
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
      <div className="mt-4 overflow-x-auto pb-1">
        <div
          role="img"
          aria-label={`Contribution graph for ${year}: ${totalCommits} commits across ${activeDays} active days.`}
          className="flex w-max gap-[3px]"
        >
          {weeks.map((week) => (
            <div key={week[0]?.date} className="flex flex-col gap-[3px]">
              {week.map((day) =>
                day.inYear ? (
                  <div
                    key={day.date}
                    title={`${day.count} commit${day.count === 1 ? "" : "s"} on ${day.date}`}
                    className={`h-[11px] w-[11px] rounded-[2px] ${LEVELS[levelFor(day.count)]}`}
                  />
                ) : (
                  <div key={day.date} className="h-[11px] w-[11px]" />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
        <span>Less</span>
        {LEVELS.map((level) => (
          <span key={level} className={`h-[11px] w-[11px] rounded-[2px] ${level}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}