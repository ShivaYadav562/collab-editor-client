
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Code2,
  BookOpen,
  BrainCircuit,
  Users,
  Plus,
  ArrowUpRight,
  ChevronRight,
  Flame,
  Target,
  Clock3,
  Zap,
  Search,
  Bell,
  Settings,
  Layers3,
  Monitor,
  FileText,
  GraduationCap,
  CalendarDays,
  Sparkles,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const learningItems = [
  {
    title: "Data Structures & Algorithms",
    subtitle: "Master problem solving",
    icon: Code2,
    progress: 68,
    completed: "34 / 50 problems",
    tag: "DSA",
  },
  {
    title: "System Design",
    subtitle: "Build scalable systems",
    icon: Layers3,
    progress: 32,
    completed: "8 / 25 topics",
    tag: "DESIGN",
  },
  {
    title: "Web Development",
    subtitle: "Build real-world projects",
    icon: Monitor,
    progress: 74,
    completed: "18 / 24 topics",
    tag: "DEVELOPMENT",
  },
  {
    title: "Interview Preparation",
    subtitle: "Get placement ready",
    icon: GraduationCap,
    progress: 45,
    completed: "9 / 20 topics",
    tag: "CAREER",
  },
];

const studyItems = [
  {
    title: "DSA Practice",
    description: "Patterns, problems and contests",
    icon: Code2,
  },
  {
    title: "Core CS Subjects",
    description: "DBMS, OS, CN and OOP",
    icon: BrainCircuit,
  },
  {
    title: "Study Materials",
    description: "Notes, PDFs and revision sheets",
    icon: FileText,
  },
  {
    title: "Interview Prep",
    description: "Technical and HR questions",
    icon: GraduationCap,
  },
  {
    title: "Web Development",
    description: "Frontend and backend learning",
    icon: Monitor,
  },
  {
    title: "System Design",
    description: "Architecture and scalability",
    icon: Layers3,
  },
];

function getUserName() {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return user?.username || user?.name || "Student";
  } catch {
    return "Student";
  }
}

function SectionHeading({ eyebrow, title, action, onAction }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </p>
        )}
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
          {title}
        </h2>
      </div>

      {action && (
        <button
          onClick={onAction}
          className="flex shrink-0 items-center gap-1 text-xs text-zinc-400 transition hover:text-white"
        >
          {action}
          <ChevronRight size={15} />
        </button>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, detail }) {
  return (
    <div className="rounded-2xl border border-[#303030] bg-[#1a1a1a] p-5 transition duration-200 hover:border-[#414141]">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#303030] bg-white/[0.035] text-zinc-300">
          <Icon size={19} strokeWidth={1.7} />
        </div>
        <ArrowUpRight size={16} className="text-zinc-600" />
      </div>

      <p className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
      <p className="mt-3 text-xs text-zinc-600">{detail}</p>
    </div>
  );
}

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [activeNav, setActiveNav] = useState("Dashboard");

  const username = getUserName();
  const firstName = username.split(" ")[0];

  const openEditor = () => navigate("/editor");

  const joinRoom = (event) => {
    event.preventDefault();
    const id = roomId.trim();

    if (!id) {
      navigate("/editor");
      return;
    }

    navigate(`/editor?room=${encodeURIComponent(id)}`);
  };

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Rooms", icon: Users },
    { label: "Study & Prepare", icon: BookOpen },
    { label: "AI Tutor", icon: BrainCircuit },
  ];

  
const handleNavigation = (label) => {
  setActiveNav(label);
  setMobileMenuOpen(false);

  if (label === "My Rooms") {
    navigate("/editor");
  } else if (label === "Study & Prepare") {
    navigate("/study-prep");
  } else if (label === "AI Tutor") {
    document.getElementById("ai-tutor")?.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};


  const sidebar = (
    <aside className="flex h-full w-[245px] shrink-0 flex-col overflow-y-auto border-r border-[#303030] bg-[#191919]">
      <div className="flex h-[76px] items-center gap-3 border-b border-white/[0.06] px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
          <Code2 size={20} strokeWidth={2.4} />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight text-white">
            Collab Editor
          </p>
          <p className="mt-0.5 text-[10px] tracking-wide text-zinc-500">
            LEARNING WORKSPACE
          </p>
        </div>

        <button
          className="ml-auto text-zinc-500 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={19} />
        </button>
      </div>

      <div className="px-4 pt-7">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
          WORKSPACE
        </p>

        <div className="space-y-1">
          {navItems.map(({ label, icon: Icon }) => {
            const active = activeNav === label;

            return (
              <button
                key={label}
                onClick={() => handleNavigation(label)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] transition ${
                  active
                    ? "border border-[#303030] bg-white/[0.07] text-white"
                    : "border border-transparent text-zinc-500 hover:bg-white/[0.035] hover:text-zinc-200"
                }`}
              >
                <Icon size={17} strokeWidth={1.8} />
                <span>{label}</span>
                {active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-6 my-6 border-t border-white/[0.06]" />

      <div className="px-4">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
          YOUR LEARNING
        </p>

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            document.getElementById("learning-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] text-zinc-500 transition hover:bg-white/[0.035] hover:text-zinc-200"
        >
          <BookOpen size={17} />
          Continue Learning
        </button>

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            document.getElementById("goals-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] text-zinc-500 transition hover:bg-white/[0.035] hover:text-zinc-200"
        >
          <Target size={17} />
          Today's Goals
        </button>
      </div>

      <div className="mt-auto p-4">
        <div className="rounded-xl border border-[#303030] bg-white/[0.025] p-4">
          <div className="flex items-center gap-2 text-zinc-300">
            <Sparkles size={16} />
            <span className="text-xs font-medium">Keep the streak alive</span>
          </div>
          <p className="mt-2 text-[11px] leading-5 text-zinc-500">
            Small daily progress builds strong skills.
          </p>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl px-2 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-sm font-semibold text-white">
            {firstName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-zinc-200">
              {username}
            </p>
            <p className="mt-1 text-[10px] text-zinc-500">Student account</p>
          </div>
          <button
            title="Sign out"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login");
            }}
            className="text-zinc-600 transition hover:text-white"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="h-screen overflow-hidden bg-[#0b0b0b] text-zinc-100">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-200 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </div>

      <div className="flex h-full min-h-0">
        <div className="hidden lg:block">{sidebar}</div>

        <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#303030] bg-[#0b0b0b]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <button
                className="text-zinc-400 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={21} />
              </button>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Student Dashboard
                </p>
                <p className="mt-1 hidden text-[11px] text-zinc-600 sm:block">
                  Your personal learning space
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-lg border border-[#303030] bg-white/[0.025] px-3 py-2 text-xs text-zinc-500 md:flex">
                <Search size={14} />
                <span>Search workspace</span>
                <span className="ml-5 rounded border border-[#303030] px-1.5 py-0.5 text-[10px]">
                  /
                </span>
              </div>

              <button
                aria-label="Notifications"
                className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[#303030] text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                <Bell size={17} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white" />
              </button>

              <button
                onClick={() => navigate("/editor")}
                className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200 sm:flex"
              >
                <Plus size={15} />
                New Room
              </button>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div className="mx-auto max-w-[1600px] space-y-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            {/* Welcome */}
            <section className="relative overflow-hidden rounded-2xl border border-[#303030] bg-[#1a1a1a] p-6 sm:p-9">
              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[100px]" />

              <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#303030] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Your workspace is ready
                  </div>

                  <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Welcome back, {firstName}
                    <span className="text-zinc-500">.</span>
                  </h1>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                    Pick up where you left off. Practice, collaborate, and make
                    progress toward your next goal.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={openEditor}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-black transition hover:bg-zinc-200"
                    >
                      <Plus size={16} />
                      Create Room
                    </button>

                    <button
                      onClick={() =>
                        document.getElementById("join-room-form")?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                      }
                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.025] px-4 py-3 text-xs font-medium text-zinc-200 transition hover:bg-white/[0.06]"
                    >
                      <Users size={16} />
                      Join Room
                    </button>
                  </div>
                </div>

                <div className="hidden min-w-[190px] rounded-2xl border border-[#303030] bg-black/20 p-5 md:block">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Flame size={17} />
                    <span className="text-xs">Learning streak</span>
                  </div>
                  <p className="mt-4 text-4xl font-semibold tracking-tight text-white">
                    7 <span className="text-sm font-normal text-zinc-500">days</span>
                  </p>
                  <p className="mt-2 text-[11px] text-zinc-600">
                    Keep showing up every day.
                  </p>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section>
              <SectionHeading eyebrow="YOUR OVERVIEW" title="Learning at a glance" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  icon={Code2}
                  label="Problems practiced"
                  value="34"
                  detail="Across your DSA practice"
                />
                <StatCard
                  icon={Clock3}
                  label="Study time"
                  value="12.5 hrs"
                  detail="Illustrative dashboard data"
                />
                <StatCard
                  icon={Target}
                  label="Goals completed"
                  value="8 / 12"
                  detail="Your weekly targets"
                />
                <StatCard
                  icon={Flame}
                  label="Current streak"
                  value="7 days"
                  detail="One step every day"
                />
              </div>
            </section>

            {/* Join Room */}
            <section
              id="join-room-form"
              className="rounded-2xl border border-[#303030] bg-[#1a1a1a] p-5 sm:p-6"
            >
              <div className="mb-4">
                <h2 className="text-base font-semibold text-white">
                  Join a collaborative room
                </h2>
                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Enter a room ID to open a shared coding workspace.
                </p>
              </div>

              <form
                onSubmit={joinRoom}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  value={roomId}
                  onChange={(event) => setRoomId(event.target.value)}
                  placeholder="Enter room ID"
                  className="min-w-0 flex-1 rounded-xl border border-[#303030] bg-[#090a0c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/25"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Join Workspace
                  <ArrowUpRight size={15} />
                </button>
              </form>
            </section>

            {/* Learning */}
            <section id="learning-section">
              <SectionHeading
                eyebrow="PICK UP WHERE YOU LEFT OFF"
                title="Continue learning"
                action="View all"
                onAction={() =>
                  document.getElementById("study-section")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
                {learningItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      onClick={() =>
                        document.getElementById("study-section")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                      className="group rounded-2xl border border-[#303030] bg-[#1a1a1a] p-5 text-left transition hover:border-[#414141] hover:bg-[#222222]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#303030] bg-white/[0.035] text-zinc-300">
                          <Icon size={19} strokeWidth={1.7} />
                        </div>
                        <span className="rounded-md border border-[#303030] px-2 py-1 text-[9px] tracking-[0.12em] text-zinc-500">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="mt-5 text-sm font-semibold text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-500">
                        {item.subtitle}
                      </p>

                      <div className="mt-5 flex items-center justify-between text-[10px] text-zinc-500">
                        <span>{item.completed}</span>
                        <span>{item.progress}%</span>
                      </div>

                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                        <div
                          className="h-full rounded-full bg-zinc-300 transition-all group-hover:bg-white"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                        <span>Continue course</span>
                        <ArrowUpRight
                          size={15}
                          className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Study section */}
            <section id="study-section">
              <SectionHeading
                eyebrow="PREPARE FOR YOUR NEXT STEP"
                title="Study & prepare"
                action="Explore"
                onAction={() => navigate("/study-prep")}
              />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {studyItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      onClick={() => {
                        if (item.title === "DSA Practice") {
                          navigate("/editor");
                        } else {
                          alert(
                            `${item.title} section ka content hum next step mein implement karenge.`
                          );
                        }
                      }}
                      className="group flex items-center gap-4 rounded-2xl border border-[#303030] bg-[#1a1a1a] p-4 text-left transition hover:border-[#414141] hover:bg-[#222222] sm:p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#303030] bg-white/[0.035] text-zinc-300 transition group-hover:bg-white/[0.07]">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-medium text-zinc-200">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-zinc-500">
                          {item.description}
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="shrink-0 text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Goals and schedule */}
            <section
              id="goals-section"
              className="grid grid-cols-1 gap-5 xl:grid-cols-2"
            >
              <div className="rounded-2xl border border-[#303030] bg-[#1a1a1a] p-5 sm:p-6">
                <SectionHeading eyebrow="STAY CONSISTENT" title="Today's goals" />

                <div className="space-y-4">
                  {[
                    ["Solve 2 DSA problems", "45 min", true],
                    ["Revise one core CS topic", "30 min", false],
                    ["Practice interview questions", "20 min", false],
                  ].map(([title, time, completed]) => (
                    <div
                      key={title}
                      className="flex items-center gap-3 border-b border-white/[0.05] pb-4 last:border-0 last:pb-0"
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                          completed
                            ? "border-white bg-white text-black"
                            : "border-white/15 bg-transparent"
                        }`}
                      >
                        {completed && <Zap size={12} />}
                      </div>
                      <span
                        className={`flex-1 text-sm ${
                          completed ? "text-zinc-500 line-through" : "text-zinc-300"
                        }`}
                      >
                        {title}
                      </span>
                      <span className="text-[11px] text-zinc-600">{time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Daily progress</span>
                    <span className="text-zinc-300">1 of 3 completed</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                    <div className="h-full w-1/3 rounded-full bg-zinc-300" />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#303030] bg-[#1a1a1a] p-5 sm:p-6">
                <SectionHeading
                  eyebrow="YOUR PLAN"
                  title="Upcoming schedule"
                  action="View calendar"
                  onAction={() =>
                    alert("Calendar feature ko hum baad mein implement karenge.")
                  }
                />

                <div className="space-y-4">
                  {[
                    {
                      day: "TODAY",
                      time: "05:00 PM",
                      title: "DSA Practice Session",
                      subtitle: "Arrays & sliding window",
                      icon: Code2,
                    },
                    {
                      day: "TODAY",
                      time: "07:00 PM",
                      title: "Core CS Revision",
                      subtitle: "DBMS and operating systems",
                      icon: BrainCircuit,
                    },
                    {
                      day: "TOMORROW",
                      time: "06:00 PM",
                      title: "Mock Interview",
                      subtitle: "Technical interview practice",
                      icon: GraduationCap,
                    },
                  ].map((event) => {
                    const Icon = event.icon;

                    return (
                      <div
                        key={event.title}
                        className="flex items-center gap-4"
                      >
                        <div className="w-[68px] shrink-0">
                          <p className="text-[9px] font-semibold tracking-[0.12em] text-zinc-600">
                            {event.day}
                          </p>
                          <p className="mt-1 text-[10px] text-zinc-400">
                            {event.time}
                          </p>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#303030] bg-white/[0.035] text-zinc-400">
                          <Icon size={17} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-zinc-200">
                            {event.title}
                          </p>
                          <p className="mt-1 text-xs text-zinc-500">
                            {event.subtitle}
                          </p>
                        </div>

                        <CalendarDays
                          size={15}
                          className="shrink-0 text-zinc-600"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* AI Tutor */}
            <section
              id="ai-tutor"
              className="relative overflow-hidden rounded-2xl border border-[#303030] bg-[#1a1a1a] p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.08] blur-[90px]" />

              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#303030] bg-white/[0.04] text-zinc-200">
                    <BrainCircuit size={23} />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                        YOUR PERSONAL ASSISTANT
                      </span>
                      <Sparkles size={13} className="text-violet-300" />
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      Meet your AI Tutor
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
                      Get help understanding concepts, reviewing code, and
                      preparing for interviews — right from your learning space.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    alert("AI Tutor ko next phase mein AI API ke saath connect karenge.")
                  }
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.06] px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Open AI Tutor
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </section>

            <footer className="flex flex-col justify-between gap-2 border-t border-white/[0.06] pt-5 text-[10px] text-zinc-600 sm:flex-row">
              <p>Collab Editor · Your learning workspace</p>
              <p>Keep learning. Keep building.</p>
            </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}