
import CourseCard from "./CourseCard";

function CourseGrid({ courses, onExplore }) {
  if (!courses || courses.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#d9dfe4] bg-white py-16 text-center">
        <h3 className="font-bold text-[#26323c]">
          No courses found
        </h3>

        <p className="mt-1 text-sm text-[#89919a]">
          Try another course name or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {courses.map((course) => (
        <CourseCard
          key={course.title}
          course={course}
          onExplore={onExplore}
        />
      ))}
    </div>
  );
}

export default CourseGrid;
