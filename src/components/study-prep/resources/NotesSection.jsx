
import { useState } from "react";
import { FileText, Search } from "lucide-react";
import ResourceCard from "./ResourceCard";

function NotesSection({ course, notes = [], onOpenNote }) {
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-bold text-[#17212b]">
          {course?.title || "Study"} Notes
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Handwritten notes, PDFs and revision material.
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
          placeholder="Search notes..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#308d46]"
        />
      </div>

      {/* Notes Grid */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredNotes.map((note) => (
            <ResourceCard
              key={note.id}
              title={note.title}
              description={note.description}
              category={note.category || "NOTES"}
              icon={FileText}
              onClick={() => onOpenNote?.(note)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <FileText size={32} className="mx-auto text-gray-400" />

          <h3 className="mt-3 font-semibold text-gray-700">
            No notes found
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {search
              ? "Try searching with another keyword."
              : "Notes will appear here when they are added."}
          </p>
        </div>
      )}
    </div>
  );
}

export default NotesSection;
