"use client";

import { useEffect, useState } from "react";
import SectionFrame from "./SectionFrame";

// r = 70, circumference = 2πr ≈ 439.82
const CIRCUMFERENCE = 439.82;

const SEGMENTS = [
  {
    label: "Maker Kits",
    pct: 58,
    color: "#B5651D",
    detail: "Manufacturing and distributing kits to partner schools.",
  },
  {
    label: "Project Funding",
    pct: 30,
    color: "#3F7A5C",
    detail:
      "Parts and components for individual student projects — batteries, motors, wire, circuit boards, 3D-printed bodies.",
  },
  {
    label: "Operations",
    pct: 12,
    color: "#24425C",
    detail:
      "7% fiscal sponsorship fee to The Hack Foundation, plus 5% for tools like Notion and Jira that track projects, kits, and spending.",
  },
];

let cumulative = 0;
const ARCS = SEGMENTS.map((s) => {
  const length = (s.pct / 100) * CIRCUMFERENCE;
  const arc = { ...s, length, offset: cumulative };
  cumulative += length;
  return arc;
});

// Configurable donation goal
const DONATION_GOAL = 1000;

export default function Budget() {
  const [totalDonations, setTotalDonations] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();

  const fetchDonations = async () => {
    try {
      setLoading(true);
      /*const response = await fetch(
        "https://bank.hackclub.com/api/v3/organizations/stevenson-highschool-forge-club",
        { signal: controller.signal }
      );
      */
      const response = await fetch(
          "https://corsproxy.io/?" + encodeURIComponent("https://bank.hackclub.com/api/v3/organizations/stevenson-highschool-forge-club")
      ) ;
      if (!response.ok) {
        throw new Error("Failed to fetch donation data");
      }

      const data = await response.json();
      
      // Accessing balances.total_raised correctly
      const raisedCents = data.balances?.total_raised ?? 0;
      setTotalDonations(raisedCents / 100);
    } catch (err) {
      // Ignore errors caused by component unmounting
      if (err.name !== "AbortError") {
        console.error("Error fetching donations:", err);
        setError("Unable to load donation data");
      }
    } finally {
      // Guarantees loading state updates regardless of success or error
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  };

  fetchDonations();

    // Poll every 5 minutes for updates
    const interval = setInterval(fetchDonations, 5 * 60 * 1000);

    return () => {clearInterval(interval); controller.abort();};
  }, []);

  // Calculate funding progress
  const fundingPercentage = totalDonations !== null 
    ? Math.min((totalDonations / DONATION_GOAL) * 100, 100)
    : 0;
  
  const fundingArcLength = (fundingPercentage / 100) * CIRCUMFERENCE;
  const remainingArcLength = CIRCUMFERENCE - fundingArcLength;

  return (
    <SectionFrame id="budget" eyebrow="Budget & Spending" eyebrowNote="Fig. 04">
      {/* Funding Goal Section */}
      <div className="mb-16 pb-16 border-b border-ink/10">
        <h3 className="text-2xl font-display font-semibold mb-8">Funding Goal</h3>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
          <div className="mx-auto">
            <svg
              width="240"
              height="240"
              viewBox="0 0 200 200"
              role="img"
              aria-label={`Funding progress: ${fundingPercentage.toFixed(1)}% of $${DONATION_GOAL} goal`}
            >
              <g transform="rotate(-90 100 100)">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#E7E3D6"
                  strokeWidth="26"
                />
                {/* Progress arc */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#3F7A5C"
                  strokeWidth="26"
                  strokeDasharray={`${fundingArcLength} ${remainingArcLength}`}
                  strokeDashoffset="0"
                  style={{
                    transition: "stroke-dasharray 0.5s ease-in-out",
                  }}
                />
              </g>
              {/* Center text */}
              <text
                x="100"
                y="96"
                textAnchor="middle"
                className="fill-ink"
                fontSize="26"
                fontWeight="700"
                fontFamily="var(--font-display)"
              >
                {loading ? "..." : `${fundingPercentage.toFixed(0)}%`}
              </text>
              <text
                x="100"
                y="114"
                textAnchor="middle"
                className="fill-ink/50"
                fontSize="9"
                letterSpacing="1"
                fontFamily="var(--font-mono)"
              >
                FUNDED
              </text>
            </svg>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-display font-semibold text-lg mb-1">
                {loading ? (
                  "Loading..."
                ) : error ? (
                  "Error loading data"
                ) : (
                  `$${totalDonations?.toFixed(2) || "0.00"} raised of $${DONATION_GOAL} goal`
                )}
              </p>
              <p className="text-sm text-ink/60 leading-relaxed">
                Help us reach our funding goal to support maker education and provide resources 
                for student projects. Every donation brings us closer to empowering the next 
                generation of innovators.
              </p>
            </div>
            {totalDonations !== null && totalDonations < DONATION_GOAL && (
              <div className="pt-2">
                <p className="text-sm font-mono text-ink/70">
                  ${(DONATION_GOAL - totalDonations).toFixed(2)} remaining
                </p>
              </div>
            )}
            {totalDonations !== null && totalDonations >= DONATION_GOAL && (
              <div className="pt-2">
                <p className="text-sm font-semibold text-[#3F7A5C]">
                  🎉 Goal reached! Thank you for your support!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Budget Allocation Section */}
      <div>
        <h3 className="text-2xl font-display font-semibold mb-8">Budget Allocation</h3>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
          <div className="mx-auto">
            <svg
              width="240"
              height="240"
              viewBox="0 0 200 200"
              role="img"
              aria-label="Donut chart: 58% Maker Kits, 30% Project Funding, 12% Operations"
            >
              <g transform="rotate(-90 100 100)">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#E7E3D6"
                  strokeWidth="26"
                />
                {ARCS.map((a) => (
                  <circle
                    key={a.label}
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke={a.color}
                    strokeWidth="26"
                    strokeDasharray={`${a.length} ${CIRCUMFERENCE - a.length}`}
                    strokeDashoffset={-a.offset}
                  />
                ))}
              </g>
              <text
                x="100"
                y="96"
                textAnchor="middle"
                className="fill-ink"
                fontSize="26"
                fontWeight="700"
                fontFamily="var(--font-display)"
              >
                100%
              </text>
              <text
                x="100"
                y="114"
                textAnchor="middle"
                className="fill-ink/50"
                fontSize="9"
                letterSpacing="1"
                fontFamily="var(--font-mono)"
              >
                ALLOCATED
              </text>
            </svg>
          </div>

          <div className="space-y-6">
            {SEGMENTS.map((s) => (
              <div key={s.label} className="grid grid-cols-[16px_1fr_auto] gap-4 items-start">
                <span
                  className="w-4 h-4 mt-0.5"
                  style={{ backgroundColor: s.color }}
                />
                <div>
                  <p className="font-display font-semibold">{s.label}</p>
                  <p className="text-sm text-ink/60 leading-relaxed mt-1">
                    {s.detail}
                  </p>
                </div>
                <span className="font-mono text-lg tabular-nums">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
