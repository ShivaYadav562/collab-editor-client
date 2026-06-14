import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FileText,
  Activity,
  Database,
  Shield,
  Server,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Overview",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Users",
      icon: <Users size={20} />,
    },
    {
      name: "Rooms",
      icon: <FolderKanban size={20} />,
    },
    {
      name: "Documents",
      icon: <FileText size={20} />,
    },
    {
      name: "Analytics",
      icon: <Activity size={20} />,
    },
    {
      name: "Database",
      icon: <Database size={20} />,
    },
    {
      name: "Security",
      icon: <Shield size={20} />,
    },
    {
      name: "Server",
      icon: <Server size={20} />,
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-[280px] bg-[#0f172a] border-r border-white/10 p-6 flex flex-col justify-between">
      
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/20">
            C
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Collab Editor
            </h1>

            <p className="text-xs text-gray-400">
              Admin Dashboard
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-5 py-3 rounded-2xl transition-all border ${
                index === 0
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 border-transparent"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Server Status */}
      <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-5">
        
        <div className="flex items-center gap-3 mb-3">
          
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

          <span className="font-semibold">
            Server Status
          </span>
        </div>

        <p className="text-sm text-gray-400">
          All systems are operational.
        </p>
      </div>
    </aside>
  );
}