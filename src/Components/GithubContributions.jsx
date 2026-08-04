import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const GITHUB_USERNAME = "princeleo400";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const Wrap = styled.div`
  background: var(--bg-card);
  border: 0.5px solid var(--border);
  border-radius: 14px;
  padding: 20px 22px;
  transition: border-color 0.25s ease;
  animation: ${fadeIn} 0.5s ease forwards;
  margin: 80px 0;

  &:hover {
    border-color: var(--blue-border);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;
`;

const Title = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--text-dim);
`;

const TotalBadge = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--green);
  background: var(--green-dim);
  border: 0.5px solid var(--green-border);
  padding: 2px 10px;
  border-radius: 999px;
`;

const GridScroll = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 6px;

  /* Hide scrollbar visually */
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: flex;
  gap: 3px;
  min-width: max-content;
`;

const WeekCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Cell = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 2px;
  background: ${({ $level }) => {
    const colors = [
      "var(--border)", // 0 — no contributions
      "rgba(69,128,255,0.20)", // 1 — low
      "rgba(69,128,255,0.45)", // 2 — medium
      "rgba(69,128,255,0.70)", // 3 — high
      "rgba(69,128,255,0.95)", // 4 — very high
    ];
    return colors[$level] ?? colors[0];
  }};
  transition: transform 0.15s ease;
  cursor: default;
  position: relative;

  &:hover {
    transform: scale(1.5);
    z-index: 10;
  }
`;

const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 10px;
  justify-content: flex-end;
`;

const LegendLabel = styled.span`
  font-size: 10px;
  color: var(--text-dim);
`;

const ErrorText = styled.p`
  font-size: 13px;
  color: var(--text-secondary);
  text-align: center;
  padding: 16px 0;
  font-style: italic;
`;

// ─── Skeleton loader ──────────────────────────────────────────────────────────
const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.8; }
`;

const SkeletonCell = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 2px;
  background: var(--border);
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}ms;
`;

function SkeletonGrid() {
  return (
    <GridScroll>
      <Grid>
        {Array.from({ length: 52 }).map((_, w) => (
          <WeekCol key={w}>
            {Array.from({ length: 7 }).map((_, d) => (
              <SkeletonCell key={d} $delay={(w * 7 + d) * 5} />
            ))}
          </WeekCol>
        ))}
      </Grid>
    </GridScroll>
  );
}

// ─── Group flat contributions array into weeks ────────────────────────────────
function groupIntoWeeks(contributions) {
  if (!contributions?.length) return [];

  // Find the first Sunday at or before the first contribution
  const first = new Date(contributions[0].date + "T00:00:00");
  const startDay = first.getDay(); // 0=Sun
  const weeks = [];
  let week = Array(startDay).fill(null); // pad first week

  contributions.forEach((c) => {
    week.push(c);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  // Pad last week
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return weeks;
}

export default function GitHubContributions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const weeks = data ? groupIntoWeeks(data.contributions ?? []) : [];
  const total = data?.total
    ? Object.values(data.total).reduce((a, b) => a + b, 0)
    : 0;

  return (
    <Wrap>
      <Header>
        <Title>GitHub contributions</Title>
        {!loading && !error && (
          <TotalBadge>
            {total.toLocaleString()} contributions this year
          </TotalBadge>
        )}
      </Header>

      {loading && <SkeletonGrid />}

      {!loading && error && (
        <ErrorText>
          Could not load contributions
        </ErrorText>
      )}

      {!loading && !error && (
        <>
          <GridScroll>
            <Grid>
              {weeks.map((week, wi) => (
                <WeekCol key={wi}>
                  {week.map((day, di) => (
                    <Cell
                      key={di}
                      $level={day?.level ?? 0}
                      title={
                        day
                          ? `${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`
                          : ""
                      }
                    />
                  ))}
                </WeekCol>
              ))}
            </Grid>
          </GridScroll>

          <LegendRow>
            <LegendLabel>Less</LegendLabel>
            {[0, 1, 2, 3, 4].map((l) => (
              <Cell key={l} $level={l} style={{ width: 10, height: 10 }} />
            ))}
            <LegendLabel>More</LegendLabel>
          </LegendRow>
        </>
      )}
    </Wrap>
  );
}
