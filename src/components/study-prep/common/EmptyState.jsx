
import { BookOpen } from "lucide-react";

function EmptyState({
  title = "No resources available",
  description = "Resources will appear here when they are added.",
  icon: Icon = BookOpen,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
        <Icon size={28} />
      </div>

      <h3 className="mt-4 text-base font-bold text-[#17212b]">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;
