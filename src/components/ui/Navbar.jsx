import React from "react";
import {
  Bell,
  Moon,
  Search,
} from "lucide-react";

function Navbar() {
  return (
    <header className="flex h-[80px] w-full shrink-0 items-center justify-between border-b border-white/[0.07] bg-[#0b0b0b] px-5 text-white transition-colors duration-200 sm:px-8">

      {/* SEARCH BAR */}
      <div className="flex h-12 w-full max-w-[350px] items-center gap-3 rounded-xl border border-white/[0.06] bg-[#141414] px-4 transition-all duration-200 focus-within:border-white/[0.18] focus-within:bg-[#171717]">

        <Search
          className="shrink-0 text-zinc-500"
          size={19}
          strokeWidth={1.8}
        />

        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />
      </div>

      {/* RIGHT ACTIONS */}
      <div className="ml-4 flex shrink-0 items-center gap-3 sm:gap-5">

        {/* THEME BUTTON */}
        <button
          type="button"
          aria-label="Theme"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-300 transition-colors duration-200 hover:bg-white/[0.07] hover:text-white"
        >
          <Moon size={23} strokeWidth={1.8} />
        </button>

        {/* NOTIFICATIONS */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-zinc-300 transition-colors duration-200 hover:bg-white/[0.07] hover:text-white"
        >
          <Bell size={23} strokeWidth={1.8} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white" />
        </button>

        {/* PROFILE */}
        <button
          type="button"
          aria-label="User profile"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-500 p-[2px] transition-transform duration-200 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <span className="h-full w-full rounded-full border border-white/10 bg-[#141414]" />
        </button>

      </div>
    </header>
  );
}

export default Navbar;