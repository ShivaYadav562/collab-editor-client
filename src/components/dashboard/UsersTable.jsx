export default function UsersTable() {
  const users = [
    {
      name: "Arjun Sharma",
      email: "arjun@gmail.com",
      status: "Active",
    },
    {
      name: "Ananya Verma",
      email: "ananya@gmail.com",
      status: "Online",
    },
    {
      name: "Rohit Gupta",
      email: "rohit@gmail.com",
      status: "Active",
    },
    {
      name: "Simran Kaur",
      email: "simran@gmail.com",
      status: "Offline",
    },
  ];

  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-6 shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold">
            Recent Users
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Recently active platform users
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium hover:scale-105 transition-all">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b border-white/10">

              <th className="pb-4 text-gray-400 font-medium">
                User
              </th>

              <th className="pb-4 text-gray-400 font-medium">
                Email
              </th>

              <th className="pb-4 text-gray-400 font-medium">
                Status
              </th>

              <th className="pb-4 text-gray-400 font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition-all"
              >

                {/* User */}
                <td className="py-5">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold">
                      {user.name[0]}
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {user.name}
                      </h3>

                      <p className="text-sm text-gray-400">
                        Collaborator
                      </p>
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td className="text-gray-300">
                  {user.email}
                </td>

                {/* Status */}
                <td>

                  <span
                    className={`px-4 py-1 rounded-full text-sm ${
                      user.status === "Offline"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Action */}
                <td>
                  <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}