
import { Search, X } from "lucide-react";

function SearchBar({ search, onSearchChange }) {
  return (
    <div className="flex max-w-xl items-center gap-3 rounded-xl border border-[#dfe3e7] bg-white px-4 py-3 shadow-sm transition focus-within:border-[#308d46] focus-within:ring-4 focus-within:ring-[#308d46]/10">

      <Search
        size={19}
        className="shrink-0 text-[#9aa1a9]"
      />

      <input
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search DSA, Java, AWS, DevOps..."
        className="w-full bg-transparent text-sm text-[#26323c] outline-none placeholder:text-[#a1a7af]"
      />

      {search && (
        <button
          onClick={() => onSearchChange("")}
          className="text-[#9aa1a9] hover:text-[#26323c]"
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
