export default function AnalyticsChart() {
  return (
    <div className="xl:col-span-2 bg-[#0f172a] border border-white/10 rounded-3xl p-6 shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold">
            System Analytics
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Real-time platform growth & activity
          </p>
        </div>

        <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition-all">
          Last 7 Days
        </button>
      </div>

      {/* Fake Graph */}
      <div className="h-[350px] rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 relative overflow-hidden">

        {/* Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full grid grid-cols-6 grid-rows-6">
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="border border-white/10"
              ></div>
            ))}
          </div>
        </div>

        {/* Graph Lines */}
        <div className="absolute bottom-10 left-10 right-10 flex items-end gap-4 h-[220px]">

          {[40, 70, 55, 90, 75, 110, 95].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-2xl hover:scale-105 transition-all duration-300"
              style={{
                height: `${height}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Bottom Labels */}
        <div className="absolute bottom-3 left-10 right-10 flex justify-between text-xs text-gray-400">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}