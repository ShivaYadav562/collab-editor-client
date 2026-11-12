
import {
  Code2,
  Network,
  Coffee,
  Server,
  Cloud,
  Workflow,
  BrainCircuit,
  Layers,
  FileCode2,
  Cpu,
  Braces,
  BookOpen,
  Database,
  GraduationCap,
  Star,
  Signal,
  ArrowUpRight,
} from "lucide-react";

import { themeStyles } from "../../../data/study-prep/courses";

const iconMap = {
  Code2,
  Network,
  Coffee,
  Server,
  Cloud,
  Workflow,
  BrainCircuit,
  Layers,
  FileCode2,
  Cpu,
  Braces,
  BookOpen,
  Database,
  GraduationCap,
};

function CourseCard({ course, onExplore }) {
    const Icon =
  typeof course.icon === "string"
    ? iconMap[course.icon] || BookOpen
    : course.icon || BookOpen;
  const theme = themeStyles[course.theme] || themeStyles.blue;
  

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e1e4e8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d9c1] hover:shadow-lg">

      {/* Card Artwork */}
      <div
        className={`relative h-[125px] shrink-0 overflow-hidden bg-gradient-to-br ${theme.background}`}
      >
        <div
          className={`absolute -right-10 -top-16 h-44 w-44 rounded-full ${theme.glow} opacity-40 blur-3xl`}
        />

        <div className="absolute right-4 top-4 flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-white/80 bg-white/65 shadow-md backdrop-blur-xl transition duration-300 group-hover:scale-105">
          <Icon
            size={38}
            strokeWidth={1.6}
            className={theme.text}
          />
        </div>

        <span className="absolute left-4 top-4 rounded bg-red-600 px-2 py-1 text-[9px] font-bold tracking-wide text-white shadow-sm">
          {course.badge}
        </span>

        <div className="absolute bottom-4 left-4 z-10 max-w-[65%]">
          <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#102b45]">
            {course.title}
          </h3>

          <p className="mt-1 line-clamp-1 text-[10px] font-semibold text-slate-700">
            {course.subtitle}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4">

        <div className="mb-2 flex items-center justify-between gap-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-wide ${theme.text}`}
          >
            {course.category}
          </span>

          <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#fff8e8] px-2 py-1 text-[11px] font-semibold text-[#b7791f]">
            <Star size={11} fill="currentColor" />
            {course.rating}
          </span>
        </div>

        <p className="mb-3 line-clamp-2 min-h-[40px] text-xs leading-5 text-[#6b7280]">
          {course.description}
        </p>

        <div className="mt-auto flex items-center gap-2 text-xs text-[#858b93]">
          <Signal size={13} className="shrink-0 text-[#a1a5ab]" />
          <span>{course.level}</span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#edf0f2] pt-3">
          <span className="text-[10px] font-medium text-[#8a929b]">
            {course.lessons}
          </span>

          <button
            onClick={() => onExplore(course)}
            className="flex shrink-0 items-center gap-1 rounded-lg bg-[#308d46] px-3 py-2 text-[11px] font-bold text-white transition hover:bg-[#246e37]"
          >
            Explore
            <ArrowUpRight size={13} />
          </button>
        </div>

      </div>
    </article>
  );
}

export default CourseCard;
