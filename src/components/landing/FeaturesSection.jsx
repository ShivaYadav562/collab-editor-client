
import { ArrowRight } from "lucide-react";

const features = [
  {
    num: "1",
    title: "Instant Collaborative Rooms",
    desc: "Create coding rooms and share a link with peers, mentees, or interview partners to start collaborating.",
    action: "Explore Room Controls",
    href: "/editor",
  },
  {
    num: "2",
    title: "Docked Video & Audio Calls",
    desc: "Plan a workspace for video and audio calls alongside your active code editor.",
    action: "View Call Architecture",
    href: "/editor",
  },
  {
    num: "3",
    title: "Multi-Language Coding",
    desc: "Design a coding experience for languages such as Java, Python, TypeScript, C++, Rust, and Go.",
    action: "Explore Editor",
    href: "/editor",
  },
  {
    num: "4",
    title: "Study Materials & Concept Hub",
    desc: "Organize Data Structures and Algorithms roadmaps, system design notes, and coding patterns.",
    action: "Browse Library",
    href: "/study-materials",
  },
  {
    num: "5",
    title: "AI Contextual Assistant",
    desc: "Get hints, test-case ideas, and explanations to help you understand algorithms and code.",
    action: "Meet The AI Tutor",
    href: "/editor",
  },
  {
    num: "6",
    title: "Keystroke Session Replay",
    desc: "Plan a way to review coding sessions for learning, mentoring, and interview practice.",
    action: "Explore Features",
    href: "/editor",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden border-t border-[#403448] bg-[#08090d] px-4 py-16 sm:px-6 md:px-12 md:py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-8">
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#a78bfa] sm:text-sm">
              Complete Workspace Toolkit
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Everything You Can Do on{" "}
              <span className="bg-gradient-to-r from-[#c4b5fd] to-[#818cf8] bg-clip-text text-transparent">
                CollabEditor
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#b9adbf] sm:text-base">
            A workspace designed for collaborative coding, study groups,
            interview practice, and peer learning.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.num}
              className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[#403448] bg-gradient-to-br from-[#191526] to-[#0e0d17] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-2xl hover:shadow-violet-950/20 sm:p-7"
            >
              {/* Hover Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition-all duration-300 group-hover:bg-violet-500/15"
              />

              <div className="relative flex flex-1 flex-col space-y-5">
                {/* Number */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/15 text-base font-bold text-violet-300 transition-colors group-hover:bg-violet-500/25">
                  {feature.num}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-7 text-white transition-colors group-hover:text-violet-300 sm:text-xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-7 text-[#c2b6ca] sm:text-base">
                  {feature.desc}
                </p>

                {/* Action Link */}
                <a
                  href={feature.href}
                  className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-violet-400 transition-colors hover:text-violet-300"
                >
                  <span>{feature.action}</span>

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
