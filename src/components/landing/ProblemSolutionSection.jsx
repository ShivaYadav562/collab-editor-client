
import {
  Code2,
  Users,
  MessageSquare,
  Video,
  BookOpen,
  FileText,
  CheckCircle2,
} from "lucide-react";

const painPoints = [
  {
    number: "01",
    title: "Real-Time Collaboration",
    description:
      "Working on code alone can be difficult. Collaborate with your teammates in real time and solve problems together.",
    features: [
      "Multiple developers in one editor",
      "Live code synchronization",
      "Work together from anywhere",
    ],
    solution: "Code together in one shared workspace.",
    icon: Users,
  },
  {
    number: "02",
    title: "Integrated Video Meetings",
    description:
      "Switching between coding tools and meeting platforms interrupts your workflow and wastes valuable time.",
    features: [
      "Built-in video meetings",
      "Connect with your teammates",
      "Discuss code while collaborating",
    ],
    solution: "Communicate without leaving your editor.",
    icon: Video,
  },
  {
    number: "03",
    title: "Real-Time Team Chat",
    description:
      "Explaining code changes through external messaging apps makes collaboration confusing and unorganized.",
    features: [
      "Instant team messaging",
      "Share ideas and code discussions",
      "Stay connected with your team",
    ],
    solution: "Keep every discussion in one place.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Live Code Execution",
    description:
      "Testing code separately slows down development and makes it harder to review solutions together.",
    features: [
      "Write and execute code",
      "View output instantly",
      "Debug problems together",
    ],
    solution: "Write, run and debug code in one workspace.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Study Resources",
    description:
      "Finding quality learning resources across different websites takes time and makes structured learning difficult.",
    features: [
      "Java, Python and C++ resources",
      "Web Development tutorials",
      "DBMS, OS and Computer Networks",
    ],
    solution: "Access important study materials in one place.",
    icon: BookOpen,
  },
  {
    number: "06",
    title: "DSA Sheets & Notes",
    description:
      "Preparing for coding interviews becomes difficult without organized topic-wise notes and practice sheets.",
    features: [
      "Topic-wise DSA notes",
      "Java explanations and examples",
      "LeetCode practice sheets",
    ],
    solution: "Learn, revise and practice DSA systematically.",
    icon: FileText,
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative w-full px-5 pt-0 pb-16 md:px-8 md:pb-20 lg:px-10">
      <div className="mx-auto w-full max-w-[1500px]">

        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Why Collab Editor?
          </span>

          <h2 className="whitespace-nowrap text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-indigo-400">
              Collaborate Better
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-none whitespace-nowrap text-sm leading-7 text-gray-400 lg:text-base">
            A single workspace designed to make coding, learning and collaborating with your team easier.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid w-full grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">

          {painPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="flex h-full min-h-[350px] flex-col rounded-2xl border border-white/10 bg-[#10111b] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-[#141625] md:p-5"
              >
                {/* Card Header */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-gray-600">
                    {item.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mb-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-5 flex-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    What you get
                  </p>

                  <ul className="space-y-3">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-indigo-400"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="mt-auto rounded-xl border border-indigo-500/15 bg-indigo-500/[0.06] p-3">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    Our Solution
                  </p>

                  <p className="text-sm font-medium leading-5 text-gray-200">
                    {item.solution}
                  </p>
                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
