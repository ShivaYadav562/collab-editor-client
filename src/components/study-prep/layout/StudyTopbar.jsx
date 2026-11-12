
import { BookOpen, Menu, Sparkles } from "lucide-react";

function StudyTopbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e7e9ec] bg-white/95 backdrop-blur-xl">
      <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">

        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu size={22} />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#308d46] text-white shadow-sm">
            <BookOpen size={21} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-[#17212b]">
              Study Prep
            </h1>

            <p className="text-[10px] font-medium tracking-wide text-[#8a929b]">
              YOUR LEARNING SPACE
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-[#f0f7f1] px-4 py-2 text-xs font-semibold text-[#308d46] sm:flex">
          <Sparkles size={14} />
          Learn something new today
        </div>

      </div>
    </header>
  );
}

export default StudyTopbar;
