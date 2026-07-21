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
  users,
  copyLink,
  saveStatus,
  language,
  handleLanguage,
}) {
  const isSaved = saveStatus?.toLowerCase().includes("saved");

  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`w-full border rounded-2xl px-6 py-4 shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#0F172A] border-slate-700"
          : "bg-white border-gray-300"
      }`}
    >
      {/* LEFT */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
            <Code2 className="text-white" size={24} />
          </div>

          <div>
            <h2
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Collab
              <span className="text-blue-500">Editor</span>
            </h2>

            <p
              className={`text-xs ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Real-Time Collaboration
            </p>
          </div>
        </div>

        {/* Room */}
        <div
          className={`border rounded-xl px-4 py-3 ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <p
            className={`text-[11px] uppercase ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Room ID
          </p>

          <div className="flex items-center gap-3 mt-1">
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {room.slice(0, 8)}...
            </span>

            <button
              onClick={copyLink}
              className="text-blue-500 hover:text-blue-600 transition"
            >
              <Link2 size={18} />
            </button>
          </div>
        </div>

        {/* Users */}
        <div
          className={`border rounded-xl px-4 py-3 ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <Users className="text-green-500" size={18} />

            <span
              className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {users.length} Online
            </span>
          </div>

          <p
            className={`text-xs mt-1 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {users.length
              ? users.map((u) => u.name).join(", ")
              : "No users"}
          </p>
        </div>

        {/* Save Status */}
        <div
          className={`flex items-center gap-2 rounded-xl px-4 py-3 border ${
            isSaved
              ? "bg-green-900/30 border-green-700 text-green-400"
              : "bg-yellow-900/30 border-yellow-700 text-yellow-400"
          }`}
        >
          {isSaved ? (
            <CheckCircle2 size={18} />
          ) : (
            <Loader2 size={18} className="animate-spin" />
          )}

          <span className="font-medium">{saveStatus}</span>
        </div>

        {/* Connection */}
        <div
          className={`flex items-center gap-2 border rounded-xl px-4 py-3 ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <Wifi size={18} className="text-green-500" />

          <span className="text-green-500 font-medium">
            Connected
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 flex-wrap">
        <select
          value={language}
          onChange={handleLanguage}
          className={`rounded-xl px-5 py-3 outline-none border transition ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700 text-white hover:border-blue-500"
              : "bg-white border-gray-300 text-gray-900 hover:border-blue-500"
          }`}
        >
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="c">C</option>
        </select>

        {/* Theme Toggle */}
        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700 text-white hover:border-blue-500"
              : "bg-white border-gray-300 text-gray-900 hover:border-blue-500"
          }`}
        >
          {theme === "dark" ? (
            <>
              <Sun size={18} />
              Light
            </>
          ) : (
            <>
              <Moon size={18} />
              Dark
            </>
          )}
        </button>

        {/* Leave */}
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white transition">
          <LogOut size={18} />
          Leave
        </button>
      </div>
    </div>
  );
}

export default TopBar;