
import React from "react";
import {
  Code2,
  Users,
  Link2,
  CheckCircle2,
  Loader2,
  Wifi,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

function TopBar({
  room,
  users = [],
  copyLink,
  saveStatus = "Saved",
  language,
  handleLanguage,
}) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const isSaved = saveStatus?.toLowerCase().includes("saved");

  const cardClass = isDark
    ? "border-slate-700 bg-slate-800 text-white"
    : "border-gray-300 bg-white text-gray-900";

  return (
    <header
      className={`relative z-30 h-[88px] min-h-[88px] max-h-[88px] w-full shrink-0 overflow-hidden border-b px-4 ${
        isDark
          ? "border-slate-700 bg-[#0b1222] text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      {/* Horizontal Scroll Container */}
      <div className="h-full w-full overflow-x-auto overflow-y-hidden">
        <div className="flex h-full min-w-max flex-nowrap items-center gap-3">

          {/* Logo */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-lg">
              <Code2 size={24} className="text-white" />
            </div>

            <div className="leading-tight">
              <h2 className="whitespace-nowrap text-xl font-bold tracking-tight">
                Collab<span className="text-blue-500">Editor</span>
              </h2>

              <p
                className={`mt-1 whitespace-nowrap text-xs ${
                  isDark ? "text-slate-400" : "text-gray-500"
                }`}
              >
                Real-Time Collaboration
              </p>
            </div>
          </div>

          {/* Room ID */}
          <div
            className={`flex shrink-0 items-center gap-3 rounded-xl border px-3 py-2 ${cardClass}`}
          >
            <div>
              <p
                className={`text-[10px] uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-gray-500"
                }`}
              >
                Room ID
              </p>

              <p className="mt-1 text-sm font-semibold">
                {room ? `${room.slice(0, 8)}...` : "No room"}
              </p>
            </div>

            <button
              type="button"
              onClick={copyLink}
              title="Copy room link"
              className="shrink-0 text-blue-500 hover:text-blue-400"
            >
              <Link2 size={18} />
            </button>
          </div>

          {/* Online Users */}
          <div
            className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 ${cardClass}`}
          >
            <Users size={19} className="text-green-500" />

            <div>
              <p className="whitespace-nowrap text-sm font-semibold">
                {users.length} Online
              </p>

              <p
                className={`max-w-32 truncate text-xs ${
                  isDark ? "text-slate-400" : "text-gray-500"
                }`}
                title={users.map((user) => user.name).join(", ")}
              >
                {users.length
                  ? users.map((user) => user.name).join(", ")
                  : "No users"}
              </p>
            </div>
          </div>

          {/* Save Status */}
          <div
            className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 ${
              isSaved
                ? "border-green-700 bg-green-900/20 text-green-400"
                : "border-yellow-700 bg-yellow-900/20 text-yellow-400"
            }`}
          >
            {isSaved ? (
              <CheckCircle2 size={18} />
            ) : (
              <Loader2 size={18} className="animate-spin" />
            )}

            <span className="whitespace-nowrap text-sm font-medium">
              {saveStatus}
            </span>
          </div>

          {/* Connection Status */}
          <div
            className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 ${cardClass}`}
          >
            <Wifi size={18} className="text-green-500" />

            <span className="whitespace-nowrap text-sm font-medium text-green-500">
              Connected
            </span>
          </div>

          {/* Right Controls */}
          <div className="ml-auto flex shrink-0 items-center gap-2">

            {/* Language Selector */}
            <select
              value={language}
              onChange={handleLanguage}
              aria-label="Programming language"
              className={`h-9 w-32 shrink-0 rounded-lg border px-2.5 text-sm outline-none focus:border-blue-500 ${cardClass}`}
            >
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="c">C</option>
            </select>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`flex h-9 shrink-0 items-center gap-1.5 rounded-lg border px-2.5 text-sm transition hover:border-blue-500 ${cardClass}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}

              <span>{isDark ? "Light" : "Dark"}</span>
            </button>

            {/* Leave */}
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Leave this room?")) {
                  window.location.href = "/dashboard";
                }
              }}
              className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-red-600 px-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <LogOut size={16} />
              Leave
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
