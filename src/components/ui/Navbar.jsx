import React from "react";
import {
  Bell,
  Moon,
  Search,
} from "lucide-react";

function Navbar() {
  return (
    <div className="h-[80px] border-b border-white/10 px-8 flex items-center justify-between bg-[#020617]">
      
      <div className="flex items-center gap-4 bg-white/5 px-4 py-3 rounded-xl w-[350px]">
        <Search className="text-gray-400" size={18} />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white w-full"
        />
      </div>

      <div className="flex items-center gap-5">
        <Moon className="text-white cursor-pointer" />
        <Bell className="text-white cursor-pointer" />

        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-blue-500"></div>
      </div>
    </div>
  );
}

export default Navbar;