
import {
  FileSpreadsheet,
  NotebookPen,
  ListTree,
  Video,
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
  Network,
  BriefcaseBusiness,
  Code2,
  Bot,
  GraduationCap,
  ChevronRight,
  X,
} from "lucide-react";

import { sidebarGroups } from "../../../data/study-prep/sidebarMenu";

const iconMap = {
  FileSpreadsheet,
  NotebookPen,
  ListTree,
  Video,
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
  Network,
  BriefcaseBusiness,
  Code2,
  Bot,
};

function StudySidebar({
  activeSection,
  onSectionChange,
  isOpen,
  onClose,
}) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed bottom-0 left-0 top-[72px] z-50
          flex w-[265px] flex-col overflow-y-auto
          bg-[#101114] px-4 py-6 text-white
          transition-transform duration-300
          lg:sticky lg:top-[72px] lg:z-20
          lg:h-[calc(100vh-72px)] lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="mb-8 flex items-center justify-between px-2">
          <div>
            <p className="text-sm font-bold tracking-wide">
              Learning Hub
            </p>

            <p className="mt-1 text-[11px] text-gray-500">
              Explore your resources
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <button
          onClick={() => onSectionChange("All Courses")}
          className={`
            mb-7 flex w-full items-center gap-3 rounded-xl
            px-3 py-3 text-sm font-semibold transition
            ${
              activeSection === "All Courses"
                ? "bg-[#237b3c] text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }
          `}
        >
          <GraduationCap size={18} />
          Explore Courses
          <ChevronRight size={16} className="ml-auto" />
        </button>

        {sidebarGroups.map((group) => (
          <div key={group.title} className="mb-8">
            <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.15em] text-gray-500">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon];
                const isActive = activeSection === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (item.comingSoon) return;
                      onSectionChange(item.name);
                    }}
                    className={`
                      flex w-full items-center gap-3 rounded-lg
                      px-3 py-3 text-left text-[13px] font-medium
                      transition
                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    {Icon && (
                      <Icon
                        size={17}
                        className={
                          isActive ? "text-green-400" : "text-gray-500"
                        }
                      />
                    )}

                    <span>{item.name}</span>

                    {item.comingSoon && (
                      <span className="ml-auto rounded bg-white/10 px-1.5 py-1 text-[9px] text-gray-400">
                        SOON
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
            <Bot size={18} />
          </div>

          <p className="text-sm font-semibold">
            Keep Learning!
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            Consistency is the key to mastering technology.
          </p>
        </div>
      </aside>
    </>
  );
}

export default StudySidebar;
