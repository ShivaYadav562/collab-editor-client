import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-[#0f172a]/70 backdrop-blur-xl px-8 flex items-center justify-between sticky top-0 z-50">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, Admin 👋
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Monitor your collaborative editor backend system.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-white/5 border border-white/10 pl-11 pr-5 py-3 rounded-2xl outline-none w-[300px]"
          />
        </div>

        {/* Notification */}
        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold text-lg">
          A
        </div>
      </div>
    </header>
  );
} 