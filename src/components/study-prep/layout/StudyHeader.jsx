
function StudyHeader({
  title = "Find Your Learning Path",
  description = "Choose a course and start learning at your own pace.",
  count,
}) {
  return (
    <section className="mb-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#17212b]">
            {title}
          </h2>

          <p className="mt-1.5 text-sm text-[#7b8490]">
            {description}
          </p>
        </div>

        {count !== undefined && (
          <span className="text-sm font-medium text-[#7b8490]">
            {count} Courses Available
          </span>
        )}
      </div>
    </section>
  );
}

export default StudyHeader;
