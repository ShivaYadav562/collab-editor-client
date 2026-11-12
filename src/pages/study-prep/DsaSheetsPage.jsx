
import { useEffect, useMemo, useState } from "react";
import { dsaCategories, dsaPatterns } from "../../data/study-prep/dsaProblems";

const STORAGE_KEY = "study-prep-dsa-solved";

export default function DsaSheetsPage() {
  const [solved, setSolved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  });

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedPattern, setExpandedPattern] = useState(1);
  const [showSolvedOnly, setShowSolvedOnly] = useState(false);

  // Save solved progress in browser
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(solved));
  }, [solved]);

  // Unique key for every problem inside a pattern
  const getProblemKey = (pattern, problem) =>
    `${pattern.number}-${problem.id}-${problem.title}`;

  const totalProblems = dsaPatterns.reduce(
    (total, pattern) => total + pattern.problems.length,
    0
  );

  const solvedCount = Object.values(solved).filter(Boolean).length;
  const progress = totalProblems
    ? Math.round((solvedCount / totalProblems) * 100)
    : 0;

  const filteredPatterns = useMemo(() => {
    const query = search.trim().toLowerCase();

    return dsaPatterns
      .filter((pattern) => {
        const matchesCategory =
          activeCategory === "All" ||
          pattern.category === activeCategory;

        const matchesSearch =
          !query ||
          pattern.title.toLowerCase().includes(query) ||
          pattern.category.toLowerCase().includes(query) ||
          pattern.problems.some(
            (problem) =>
              problem.title.toLowerCase().includes(query) ||
              String(problem.id).includes(query)
          );

        const matchesSolvedFilter =
          !showSolvedOnly ||
          pattern.problems.some((problem) =>
            Boolean(solved[getProblemKey(pattern, problem)])
          );

        return (
          matchesCategory &&
          matchesSearch &&
          matchesSolvedFilter
        );
      })
      .map((pattern) => {
        const matchingProblems = pattern.problems.filter((problem) => {
          if (!query) return true;

          return (
            pattern.title.toLowerCase().includes(query) ||
            pattern.category.toLowerCase().includes(query) ||
            problem.title.toLowerCase().includes(query) ||
            String(problem.id).includes(query)
          );
        });

        return {
          ...pattern,
          visibleProblems: matchingProblems,
        };
      });
  }, [search, activeCategory, showSolvedOnly, solved]);

  const toggleSolved = (pattern, problem) => {
    const key = getProblemKey(pattern, problem);

    setSolved((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const getPatternProgress = (pattern) => {
    const count = pattern.problems.filter((problem) =>
      solved[getProblemKey(pattern, problem)]
    ).length;

    return {
      count,
      total: pattern.problems.length,
      percentage: pattern.problems.length
        ? Math.round((count / pattern.problems.length) * 100)
        : 0,
    };
  };

  const getCategoryProgress = (category) => {
    const patterns = dsaPatterns.filter(
      (pattern) => pattern.category === category
    );

    const total = patterns.reduce(
      (sum, pattern) => sum + pattern.problems.length,
      0
    );

    const completed = patterns.reduce(
      (sum, pattern) =>
        sum +
        pattern.problems.filter((problem) =>
          solved[getProblemKey(pattern, problem)]
        ).length,
      0
    );

    return {
      completed,
      total,
      percentage: total ? Math.round((completed / total) * 100) : 0,
    };
  };

  const resetProgress = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset all DSA progress?"
    );

    if (confirmed) {
      setSolved({});
    }
  };

  return (
   
    <div className="min-h-screen bg-[#f8faf9]  text-slate-800">    
      <div className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">

        {/* PAGE HEADER */}
        <div className="mb-7">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-emerald-700">
              STUDY PREP / DSA SHEETS
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            DSA Patterns Sheet
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Master Data Structures and Algorithms through structured
            coding patterns and LeetCode practice.
          </p>
        </div>

        {/* STATS */}
        <div className="mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            label="Total Patterns"
            value={dsaPatterns.length}
            icon="▤"
          />
          <StatCard
            label="Categories"
            value={dsaCategories.length}
            icon="▦"
          />
          <StatCard
            label="Total Problems"
            value={totalProblems}
            icon="⌘"
          />
          <StatCard
            label="Solved Problems"
            value={`${solvedCount}/${totalProblems}`}
            icon="✓"
          />
        </div>

        {/* OVERALL PROGRESS */}
        <div className="mb-7 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold text-slate-900">
                Your Overall Progress
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Keep practicing to complete your DSA journey.
              </p>
            </div>

            <span className="text-2xl font-bold text-emerald-600">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>{solvedCount} completed</span>
            <span>{totalProblems - solvedCount} remaining</span>
          </div>
        </div>

        {/* SEARCH AND FILTERS */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search patterns or LeetCode questions..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500"
          >
            <option value="All">All Categories</option>
            {dsaCategories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowSolvedOnly(!showSolvedOnly)}
            className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
              showSolvedOnly
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {showSolvedOnly ? "✓ Solved Only" : "Show Solved"}
          </button>

          <button
            onClick={resetProgress}
            className="rounded-xl border border-red-100 bg-white px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Reset Progress
          </button>
        </div>

        {/* MAIN CONTENT */}
       <div className="grid grid-cols-1 items-start gap-6 lg:h-[calc(100vh-220px)] lg:min-h-0 lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* CATEGORY SIDEBAR */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:h-full lg:overflow-y-auto hide-scrollbar">
            <h2 className="mb-4 text-sm font-bold text-slate-900">
              DSA Categories
            </h2>

            <button
              onClick={() => setActiveCategory("All")}
              className={`mb-2 flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition ${
                activeCategory === "All"
                  ? "bg-emerald-50 font-semibold text-emerald-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span>All Patterns</span>
              <span className="text-xs">
                {dsaPatterns.length}
              </span>
            </button>

            <div className="space-y-1">
              {dsaCategories.map((category) => {
                const categoryProgress = getCategoryProgress(
                  category.name
                );

                const isActive = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full rounded-xl px-3 py-3 text-left transition ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-medium leading-5">
                        {category.name}
                      </span>

                      <span className="shrink-0 text-xs text-slate-400">
                        {category.patterns.length}
                      </span>
                    </div>

                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{
                          width: `${categoryProgress.percentage}%`,
                        }}
                      />
                    </div>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {categoryProgress.completed}/
                      {categoryProgress.total} solved
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* PATTERN LIST */}
          <section className="lg:h-full lg:overflow-y-auto lg:pr-2 hide-scrollbar">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {activeCategory === "All"
                    ? "All DSA Patterns"
                    : activeCategory}
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {filteredPatterns.length} patterns found
                </p>
              </div>
            </div>

            {filteredPatterns.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
                <div className="mb-3 text-3xl">🔍</div>
                <h3 className="font-semibold text-slate-800">
                  No patterns found
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Try another search or category.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                    setShowSolvedOnly(false);
                  }}
                  className="mt-4 text-sm font-semibold text-emerald-600"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredPatterns.map((pattern) => {
                  const patternProgress = getPatternProgress(pattern);
                  const isExpanded =
                    expandedPattern === pattern.number;

                  return (
                    <div
                      key={pattern.number}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-emerald-200"
                    >
                      {/* PATTERN HEADER */}
                      <button
                        onClick={() =>
                          setExpandedPattern(
                            isExpanded ? null : pattern.number
                          )
                        }
                        className="flex w-full items-center gap-3 p-4 text-left sm:p-5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-700">
                          {pattern.number}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-bold text-slate-800">
                              {pattern.title}
                            </h3>

                            {patternProgress.percentage === 100 && (
                              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                                Completed
                              </span>
                            )}
                          </div>

                          <p className="mt-1 text-xs text-slate-400">
                            {pattern.category}
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            <div className="h-1.5 w-28 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-emerald-500"
                                style={{
                                  width: `${patternProgress.percentage}%`,
                                }}
                              />
                            </div>
                            <span className="text-[10px] text-slate-400">
                              {patternProgress.count}/
                              {patternProgress.total}
                            </span>
                          </div>
                        </div>

                        <span className="shrink-0 text-lg text-slate-400">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </button>

                      {/* PROBLEM LIST */}
                      {isExpanded && (
                        <div className="border-t border-slate-100 bg-slate-50/70 p-4 sm:p-5">
                          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                              Practice Questions
                            </h4>

                            <span className="text-xs text-slate-400">
                              {pattern.visibleProblems.length} questions
                            </span>
                          </div>

                          <div className="space-y-2">
                            {pattern.visibleProblems.map((problem) => {
                              const key = getProblemKey(
                                pattern,
                                problem
                              );
                              const isSolved = Boolean(solved[key]);

                              return (
                                <div
                                  key={key}
                                  className={`flex items-center gap-3 rounded-xl border p-3 transition ${
                                    isSolved
                                      ? "border-emerald-100 bg-emerald-50/70"
                                      : "border-slate-200 bg-white hover:border-emerald-200"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSolved}
                                    onChange={() =>
                                      toggleSolved(pattern, problem)
                                    }
                                    className="h-4 w-4 shrink-0 cursor-pointer accent-emerald-600"
                                    aria-label={`Mark ${problem.title} as solved`}
                                  />

                                  <div className="min-w-0 flex-1">
                                    <p
                                      className={`text-sm font-medium ${
                                        isSolved
                                          ? "text-emerald-700"
                                          : "text-slate-700"
                                      }`}
                                    >
                                      <span className="mr-2 text-xs text-slate-400">
                                        #{problem.id}
                                      </span>
                                      {problem.title}
                                    </p>
                                  </div>
                                <a
                              href={`https://leetcode.com/problems/${getSlug(
                            problem.title
                         )}/`}
                       target="_blank"
                      rel="noopener noreferrer"
                     aria-label={`Solve ${problem.title} on LeetCode`}
                     className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 transition hover:border-orange-400 hover:bg-orange-100"
                >
  <img
    src="https://leetcode.com/favicon.ico"
    alt="LeetCode"
    className="h-4 w-4 object-contain"
  />
  Solve
  </a>
                                
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

// Convert problem title into a LeetCode URL slug
function getSlug(title) {
  return title
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Reusable statistics card
function StatCard({ label, value, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-lg font-bold text-emerald-600">
        {icon}
      </div>

      <p className="text-xl font-bold text-slate-900 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {label}
      </p>
    </div>
  );
}
