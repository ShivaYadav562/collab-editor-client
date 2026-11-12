
import {
  Play,
  MessageCircle,
  Send,
  Smile,
  Paperclip,
  Code2,
  Link2,
  Users,
  CircleCheck,
  Wifi,
  Sun,
  LogOut,
  Save,
  Copy,
} from "lucide-react";

export default function ProductPreview() {
  const messages = [
    {
      name: "You",
      message: "Hello Sanidhya",
      time: "3:57 AM",
      own: true,
      avatar: "S",
    },
    {
      name: "Sanidhya",
      message: "Hey! I have reviewed your code.",
      time: "3:58 AM",
      own: false,
      avatar: "E",
    },
    {
      name: "Shubhank",
      message: "Let's solve this problem together!",
      time: "4:00 AM",
      own: false,
      avatar: "M",
    },
  ];

  const javaCode = [
    'public class Main {',
    '',
    '    public static void main(String[] args) {',
    '',
    '        System.out.println("Welcome to My Code Editor!");',
    '        System.out.println("Code. Collaborate. Create.");',
    '        System.out.println("Happy Coding!");',
    '',
    '    }',
    '}',
  ];

  return (
    <section className="relative px-4 pb-16 sm:px-6 md:px-12">

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-indigo-400/20 bg-[#080d1b] p-2 shadow-2xl shadow-indigo-950/30 sm:p-3">

        {/* MAIN EDITOR HEADER */}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0b1220] px-3 py-3 sm:px-5">

          {/* BRANDING */}

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
              <Code2 className="h-7 w-7 text-white" />
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-tight text-white">
                Collab<span className="text-indigo-400">Editor</span>
              </h2>

              <p className="text-xs text-slate-400">
                Real-Time Collaboration
              </p>
            </div>
          </div>

          {/* ROOM ID */}

          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2">
            <div>
              <p className="text-[10px] tracking-wider text-slate-400">
                ROOM ID
              </p>

              <p className="text-sm font-bold text-white">
                3df82cd3...
              </p>
            </div>

            <Link2 className="h-5 w-5 text-blue-400" />
          </div>

          {/* ONLINE MEMBERS */}

          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2">
            <Users className="h-6 w-6 text-emerald-400" />

            <div>
              <p className="text-sm font-bold text-white">
                1 Online
              </p>

              <p className="text-xs text-slate-400">
                raju
              </p>
            </div>
          </div>

          {/* SAVED STATUS */}

          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-4 py-3 text-emerald-400">
            <CircleCheck className="h-5 w-5" />

            <span className="text-sm font-semibold">
              Saved
            </span>
          </div>

          {/* CONNECTION STATUS */}

          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-emerald-400">
            <Wifi className="h-5 w-5" />

            <span className="text-sm font-semibold">
              Connected
            </span>
          </div>

          {/* LANGUAGE */}

          <div className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold text-white">
            <span>Java</span>
            <span className="text-slate-400">⌄</span>
          </div>

          {/* THEME */}

          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <Sun className="h-5 w-5" />

            <span className="text-sm font-medium">
              Light
            </span>
          </div>

          {/* LEAVE */}

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-500"
          >
            <LogOut className="h-5 w-5" />
            Leave
          </button>

        </div>

        {/* IDE TITLEBAR */}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-3 py-3 text-xs">

          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>

            <span className="ml-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-slate-400">
              collaborative-workspace
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex -space-x-1.5 text-[9px] font-bold">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#080d1b] bg-indigo-600">A</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#080d1b] bg-emerald-600">E</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#080d1b] bg-amber-600">M</span>
            </div>

            <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              LIVE • Workspace Preview
            </span>

            <a
              href="/editor"
              className="flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-indigo-500"
            >
              <Play className="h-3 w-3 fill-current" />
              Open Editor
            </a>

          </div>
        </div>

        {/* IDE BODY */}

        <div className="mt-2 grid grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-[#0a1020] font-mono text-xs md:grid-cols-12">

          {/* PROJECT EXPLORER */}

          <aside className="border-b border-white/10 bg-[#080e1b] p-4 md:col-span-2 md:border-b-0 md:border-r">

            <p className="mb-5 text-[10px] font-bold tracking-widest text-slate-500">
              PROJECT TREE
            </p>

            <div className="space-y-3 text-[10px] text-slate-400">
              <p className="text-indigo-300">▾ src</p>
              <p className="pl-3 text-indigo-300">◇ Main.java</p>
              <p className="pl-3">◇ Solution.java</p>
              <p className="pl-3">◇ App.js</p>
              <p className="pl-3">◇ README.md</p>
            </div>

          </aside>

          {/* CODE EDITOR */}

          <div className="min-w-0 border-b border-white/10 p-3 sm:p-4 md:col-span-7 md:border-b-0 md:border-r">

            {/* EDITOR TOOLBAR */}

            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">

              <div>
                <h3 className="font-sans text-sm font-bold text-white">
                  Live Code Editor
                </h3>

                <p className="mt-1 font-sans text-[10px] text-slate-400">
                  Real-time collaborative coding
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800 px-3 py-2 font-sans text-xs text-white transition hover:bg-slate-700"
                >
                  <Save className="h-3.5 w-3.5" />
                  Save
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800 px-3 py-2 font-sans text-xs text-white transition hover:bg-slate-700"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 font-sans text-xs font-semibold text-white transition hover:opacity-90"
                >
                  <Play className="h-3.5 w-3.5" />
                  Run
                </button>

              </div>
            </div>

            {/* FILE INFORMATION */}

            <div className="flex items-center justify-between border-b border-white/10 py-3 text-[10px] text-slate-500">
              <span>src/Main.java • Java</span>

              <span className="text-emerald-400">
                ● Synced
              </span>
            </div>

            {/* JAVA CODE */}

            <div className="space-y-2 overflow-x-auto pt-4 text-[10px] leading-relaxed text-indigo-100 sm:text-xs">

              {javaCode.map((line, index) => (
                <p
                  key={index}
                  className="whitespace-pre relative"
                >
                  <span className="mr-3 inline-block w-3 text-right text-slate-600">
                    {index + 1}
                  </span>

                  {line.includes("public class") ? (
                    <>
                      <span className="text-indigo-400">public class</span>{" "}
                      <span className="text-amber-300">Main</span>{" "}
                      {"{"}
                    </>
                  ) : line.includes("public static void") ? (
                    <>
                      <span className="text-indigo-400">public static void</span>{" "}
                      <span className="text-sky-300">main</span>
                      <span className="text-slate-300">(String[] args) {"{"}</span>
                    </>
                  ) : line.includes("System.out.println") ? (
                    <>
                      <span className="pl-8 text-slate-300">System.out.</span>
                      <span className="text-sky-300">println</span>
                      <span className="text-slate-300">(</span>
                      <span className="text-emerald-300">
                        {line.match(/"([^"]*)"/)?.[0]}
                      </span>
                      <span className="text-slate-300">);</span>
                    </>
                  ) : (
                    <span className="text-slate-300">{line}</span>
                  )}
                </p>
              ))}

            </div>

            {/* OUTPUT PANEL */}

            <div className="mt-6 rounded-lg border border-white/10 bg-[#060b16] p-3 text-[10px] sm:text-xs">

              <div className="flex flex-wrap justify-between gap-2 border-b border-white/10 pb-2 font-semibold text-slate-400">
                <span>OUTPUT • JAVA</span>

                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Execution Successful
                </span>
              </div>

              <div className="space-y-2 pt-3 font-mono text-emerald-400">
                <p>{">"} Welcome to My Code Editor!</p>
                <p>{">"} Code. Collaborate. Create.</p>
                <p>{">"} Happy Coding!</p>
              </div>

              <div className="mt-3 border-t border-white/10 pt-2 text-slate-500">
                Process finished with exit code 0
              </div>

            </div>

          </div>

          {/* TEAM CHAT */}

          <div className="flex min-h-[420px] flex-col bg-[#080e1b] md:col-span-3">

            {/* CHAT HEADER */}

            <div className="flex items-center justify-between border-b border-white/10 p-3">

              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="font-sans text-xs font-bold text-white">
                    Team Chat
                  </h3>

                  <p className="font-sans text-[9px] text-slate-400">
                    Collaborate in real time
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                3 Online
              </div>

            </div>

            {/* CHAT MESSAGES */}

            <div className="flex flex-1 flex-col gap-4 overflow-hidden p-3">

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    msg.own ? "justify-end" : "justify-start"
                  }`}
                >

                  {!msg.own && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-sans text-[10px] font-bold text-white">
                      {msg.avatar}
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-xl p-2.5 ${
                      msg.own
                        ? "rounded-tr-sm bg-blue-600 text-white"
                        : "rounded-tl-sm border border-white/5 bg-slate-800 text-slate-200"
                    }`}
                  >
                    <p className="mb-1 font-sans text-[10px] font-bold">
                      {msg.name}
                    </p>

                    <p className="font-sans text-[11px] leading-relaxed">
                      {msg.message}
                    </p>

                    <p
                      className={`mt-1 text-right font-sans text-[8px] ${
                        msg.own ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            {/* CHAT INPUT */}

            <div className="border-t border-white/10 p-3">

              <div className="flex items-center gap-2 rounded-xl border border-blue-500/60 bg-slate-800/80 p-2">

                <input
                  type="text"
                  placeholder="Type your message..."
                  readOnly
                  className="min-w-0 flex-1 bg-transparent font-sans text-[10px] text-white outline-none placeholder:text-slate-400"
                />

                <Paperclip className="h-3.5 w-3.5 shrink-0 text-slate-400" />

                <Smile className="h-3.5 w-3.5 shrink-0 text-slate-400" />

                <button
                  type="button"
                  aria-label="Send message"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
