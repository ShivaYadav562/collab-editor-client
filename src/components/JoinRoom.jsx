import React from "react";

function JoinRoom({
  username,
  setUsername,
  room,
  setRoom,
  joinRoom,
  createRoom,
}) {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white mb-2">
          Join Workspace
        </h2>

        <p className="text-gray-400 mb-8">
          Collaborate with your team in real-time
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-violet-500"
          />

          <input
            type="text"
            placeholder="Enter Room ID"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-violet-500"
          />

          <button
            onClick={joinRoom}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold hover:opacity-90 transition"
          >
            Join Room
          </button>

          <button
            onClick={createRoom}
            className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
          >
            Create Room
          </button>

        </div>

      </div>

    </div>
  );
}

export default JoinRoom;