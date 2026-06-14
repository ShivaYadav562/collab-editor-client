import React from "react";
import {
  LayoutDashboard,
  FileText,
  Star,
  Trash2,
} from "lucide-react";

function Sidebar() {
  return (
<div className="w-[220px] min-w-[220px] flex-shrink-0 bg-[#0f172a] border-r border-white/10 h-screen p-4 flex flex-col">

      {/* LOGO */}
      <div className="flex items-center gap-2 mb-8">

        <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
          C
        </div>

        <div className="overflow-hidden">
          <h1 className="text-white font-bold text-sm truncate">
            Collab Editor
          </h1>

          <p className="text-gray-400 text-[11px] truncate">
            Workspace
          </p>
        </div>

      </div>

      {/* MENU */}
      <div className="space-y-2">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white">
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5">
          <FileText size={18} />
          My Rooms
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5">
          <Star size={18} />
          Starred
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5">
          <Trash2 size={18} />
          Trash
        </button>

      </div>

    </div>
  );
}

export default Sidebar;