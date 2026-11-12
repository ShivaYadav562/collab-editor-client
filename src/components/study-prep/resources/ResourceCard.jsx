
import { ArrowUpRight, FileText } from "lucide-react";

function ResourceCard({
  title,
  description,
  icon: Icon = FileText,
  category,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#308d46] hover:shadow-lg"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf6ed] text-[#308d46]">
        <Icon size={23} />
      </div>

      <div className="min-w-0 flex-1">
        {category && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#308d46]">
            {category}
          </span>
        )}

        <h3 className="mt-1 truncate text-sm font-bold text-[#17212b]">
          {title}
        </h3>

        {description && (
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
            {description}
          </p>
        )}
      </div>

      <ArrowUpRight
        size={18}
        className="shrink-0 text-gray-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#308d46]"
      />
    </button>
  );
}

export default ResourceCard;
