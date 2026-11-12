import React from "react";
import { Code2, Users, ArrowUpRight, Sparkles } from "lucide-react";

function JoinRoom({
  username,
  setUsername,
  room,
  setRoom,
  joinRoom,
  createRoom,
}) {
  return (
    <div className="h-full min-h-0 w-full overflow-y-auto bg-[#0b0b0b] text-white lg:overflow-hidden">
      <div className="mx-auto flex min-h-full w-full max-w-[1600px] flex-col px-4 py-3 sm:px-6 lg:h-full lg:min-h-0 lg:px-8 lg:py-2 xl:px-10">

        {/* WELCOME SECTION */}
        <section className="mb-2 shrink-0">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/80" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">
              Your creative workspace
            </span>
          </div>

          <h1 className="text-[40px] font-bold leading-[1.12] tracking-[-0.045em] text-white sm:text-[48px] xl:text-[54px]">
            Your workspace.
            <br />
            Your ideas. Your next big thing.
          </h1>

          <p className="mt-3 max-w-5xl text-[18px] leading-7 text-[#9caec2] sm:text-[20px]">
            A focused space to collaborate, write code, and build something
            meaningful together.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-2 text-[16px] text-[#687b94]">
            <span className="flex items-center gap-2">
              <Code2 size={18} />
              Real-time coding
            </span>

            <span className="text-[#374151]">•</span>

            <span className="flex items-center gap-2">
              <Users size={18} />
              Built for collaboration
            </span>
          </div>
        </section>

        {/* WORKSPACE CARDS */}
        <section className="grid min-h-0 flex-1 -translate-y-2 grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">

          {/* JOIN WORKSPACE CARD */}
          <div className="flex min-h-0 flex-col justify-center rounded-3xl border border-white/10 bg-[#131313] p-5 sm:p-6 xl:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Code2 size={23} className="text-gray-200" />
              </div>

              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl xl:text-3xl">
                  Join workspace
                </h2>

                <p className="mt-1 text-sm text-gray-400 sm:text-base">
                  Your team is just one step away.
                </p>
              </div>
            </div>

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                joinRoom();
              }}
            >
              <div>
                <label
                  htmlFor="join-username"
                  className="mb-1.5 block text-sm font-medium text-gray-300"
                >
                  Your name
                </label>

                <input
                  id="join-username"
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="name"
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/5"
                />
              </div>

              <div>
                <label
                  htmlFor="join-room-id"
                  className="mb-1.5 block text-sm font-medium text-gray-300"
                >
                  Room ID
                </label>

                <input
                  id="join-room-id"
                  type="text"
                  placeholder="Enter or paste room ID"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/5"
                />

                <p className="mt-1.5 text-xs text-gray-500">
                  Get the room ID from the person who invited you.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                <button
                  type="submit"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-black transition hover:bg-gray-200 active:scale-[0.99]"
                >
                  <Users size={17} />
                  Join room
                </button>

                <button
                  type="button"
                  onClick={createRoom}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.99]"
                >
                  <Code2 size={17} />
                  Create room
                </button>
              </div>
            </form>
          </div>

          {/* INFORMATION CARD */}
          <div className="relative flex min-h-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#131313] p-5 sm:p-6 xl:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.025] blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Users size={23} className="text-gray-200" />
                </div>

                <ArrowUpRight size={22} className="text-gray-500" />
              </div>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                Built for teams
              </p>

              <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-white xl:text-3xl">
                Better code.
                <br />
                Built together.
              </h2>

              <p className="mt-2 max-w-md text-sm leading-5 text-gray-400 sm:text-base sm:leading-6">
                Bring your ideas together in one shared coding environment.
                Collaborate, discuss, and make progress as a team.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-300">
                  Live code editing
                </span>

                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-300">
                  Team chat
                </span>
              </div>
            </div>

            <div className="relative mt-4 border-t border-white/10 pt-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Sparkles size={17} className="text-gray-300" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-200">
                    One workspace, shared progress.
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Code together. Build better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JoinRoom;