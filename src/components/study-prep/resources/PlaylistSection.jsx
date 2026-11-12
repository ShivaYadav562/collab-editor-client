
import { useState } from "react";
import { Video, Search, ExternalLink } from "lucide-react";

function PlaylistSection({ course, playlists = [] }) {
  const [search, setSearch] = useState("");

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-bold text-[#17212b]">
          {course?.title || "Course"} Video Playlists
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Learn through topic-wise video lectures and tutorials.
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
          placeholder="Search playlists..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#308d46]"
        />
      </div>

      {/* Playlist Grid */}
      {filteredPlaylists.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPlaylists.map((playlist) => (
            <a
              key={playlist.id}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:border-[#308d46] hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Video size={23} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-[#17212b]">
                  {playlist.title}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                  {playlist.description}
                </p>
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
          <Video size={32} className="mx-auto text-gray-400" />

          <h3 className="mt-3 font-semibold text-gray-700">
            No playlists found
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {search
              ? "Try another search keyword."
              : "Video playlists will appear here when they are added."}
          </p>
        </div>
      )}
    </div>
  );
}

export default PlaylistSection;
