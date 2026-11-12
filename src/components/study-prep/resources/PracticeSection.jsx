
import { useState } from "react";
import { Code2, Search, ExternalLink } from "lucide-react";

function PracticeSection({ course, problems = [] }) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || problem.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  const difficultyStyles = {
    Easy: "bg-green-50 text-green-600",
    Medium: "bg-yellow-50 text-yellow-600",
    Hard: "bg-red-50 text-red-600",
  };

  return (
    <div className="space-y-5">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-bold text-[#17212b]">
          {course?.title || "Course"} Practice
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Solve problems and strengthen your practical skills.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative max-w-md flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search problems..."
            className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#308d46]"
          />
        </div>

        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#308d46]"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Problems */}
      {filteredProblems.length > 0 ? (
        <div className="space-y-3">
          {filteredProblems.map((problem) => (
            <a
              key={problem.id}
              href={problem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-[#308d46] hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Code2 size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-[#17212b]">
                  {problem.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {problem.topic || "Practice Problem"}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  difficultyStyles[problem.difficulty] ||
                  "bg-gray-100 text-gray-600"
                }`}
              >
                {problem.difficulty || "Practice"}
              </span>

              <ExternalLink
                size={17}
                className="shrink-0 text-gray-400"
              />
            </a>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <Code2 size={32} className="mx-auto text-gray-400" />

          <h3 className="mt-3 font-semibold text-gray-700">
            No problems found
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {search || difficulty !== "All"
              ? "Try changing your search or difficulty filter."
              : "Practice problems will appear here when they are added."}
          </p>
        </div>
      )}
    </div>
  );
}

export default PracticeSection;
