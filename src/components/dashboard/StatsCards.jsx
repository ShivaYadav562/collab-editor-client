import {
  Users,
  FolderKanban,
  FileText,
  Activity,
} from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Users",
      value: "2,543",
      growth: "+12%",
      icon: <Users size={28} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Active Rooms",
      value: "342",
      growth: "+8%",
      icon: <FolderKanban size={28} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Documents",
      value: "1,287",
      growth: "+15%",
      icon: <FileText size={28} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Collaborations",
      value: "8,932",
      growth: "+20%",
      icon: <Activity size={28} />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#0f172a] border border-white/10 rounded-3xl p-6 hover:scale-[1.03] transition-all duration-300 shadow-2xl hover:shadow-purple-500/10"
        >

          {/* Icon */}
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-5 shadow-lg`}
          >
            {stat.icon}
          </div>

          {/* Title */}
          <h3 className="text-gray-400 text-sm mb-2">
            {stat.title}
          </h3>

          {/* Value */}
          <h1 className="text-4xl font-bold">
            {stat.value}
          </h1>

          {/* Growth */}
          <p className="text-green-400 text-sm mt-4">
            {stat.growth} from last month
          </p>
        </div>
      ))}
    </div>
  );
}