export const GITHUB_LOGIN = "Graffian";

const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const QUERY = `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            firstDay
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export type ContributionCell = {
  date: string;
  count: number;
  inYear: boolean;
};

type ContributionDay = {
  date: string;
  contributionCount: number;
};

export type ContributionData = {
  year: number;
  totalCommits: number;
  activeDays: number;
  weeks: ContributionCell[][];
};

export async function getContributions(): Promise<ContributionData | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const year = new Date().getFullYear();
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "ayush-portfolio",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: GITHUB_LOGIN, from, to },
      }),
    });

    if (!res.ok) {
      console.warn(`[github] contributions fetch returned ${res.status}`);
      return null;
    }

    const payload = await res.json();

    if (payload?.errors?.length) {
      console.warn(`[github] GraphQL error: ${payload.errors[0].message}`);
      return null;
    }

    const calendar =
      payload?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar?.weeks?.length) {
      console.warn("[github] contributionCalendar came back empty");
      return null;
    }

    const weeks: ContributionCell[][] = calendar.weeks.map(
      (week: { contributionDays: ContributionDay[] }) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          inYear: day.date.startsWith(String(year)),
        })),
    );

    const inYear = weeks.flat().filter((day) => day.inYear);

    return {
      year,
      totalCommits: inYear.reduce((sum, day) => sum + day.count, 0),
      activeDays: inYear.filter((day) => day.count > 0).length,
      weeks,
    };
  } catch (error) {
    console.warn("[github] contributions fetch threw:", error);
    return null;
  }
}