
import { useState } from "react";
import { FileSpreadsheet, Search, ExternalLink } from "lucide-react";

function SheetsSection({ course, sheets = [] }) {
  const [search, setSearch] = useState("");

  const filteredSheets = sheets.filter((sheet) =>
    sheet.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-bold text-[#17212b]">
          {course?.title || "Course"} Practice Sheets
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Follow structured sheets and improve your problem-solving skills.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search sheets..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#308d46]"
        />
      </div>

      {/* Sheets Grid */}
      {filteredSheets.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredSheets.map((sheet) => (
            <a
              key={sheet.id}
              href={sheet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:border-[#308d46] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <FileSpreadsheet size={23} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-[#17212b]">
                  {sheet.title}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                  {sheet.description}
                </p>

                {sheet.questionCount !== undefined && (
                  <p className="mt-2 text-xs font-semibold text-[#308d46]">
                    {sheet.questionCount} Questions
                  </p>
                )}
              </div>

              <ExternalLink
                size={17}
                className="shrink-0 text-gray-400 transition group-hover:text-[#308d46]"
              />
            </a>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <FileSpreadsheet size={32} className="mx-auto text-gray-400" />

          <h3 className="mt-3 font-semibold text-gray-700">
            No sheets found
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {search
              ? "Try another search keyword."
              : "Practice sheets will appear here when they are added."}
          </p>
        </div>
      )}
    </div>
  );
}

export default SheetsSection;
