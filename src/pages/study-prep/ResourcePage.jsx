
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";

import { resourceContent } from "../../data/study-prep/resources";

const resourceKeyMap = {
  notes: "DSA Notes",
  playlists: "DSA Playlists",
  sheets: "DSA Sheets",
  practice: "DSA Practice",
  java: "Java Playlists",
  javaBackend: "Java Backend Playlists",
  aws: "AWS Playlists",
  machineLearning: "Machine Learning Playlists",
  python: "Python Playlists",
  cpp: "C++ Playlists",
  javascript: "JavaScript Playlists",
};

const resourceTitles = {
  notes: "Notes",
  playlists: "Video Playlists",
  sheets: "DSA Sheets",
  practice: "Practice",
  java: "Java Playlists",
  javaBackend: "Java Backend Playlists",
  aws: "AWS Playlists",
  machineLearning: "Machine Learning Playlists",
  python: "Python Playlists",
  cpp: "C++ Playlists",
  javascript: "JavaScript Playlists",
};

function ResourcePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { course: courseParam, type: resourceType } = useParams();

  const state = location.state || {};

  const course =
    state.course || {
      title: decodeURIComponent(courseParam || ""),
    };

  const resourceKey = resourceKeyMap[resourceType];

  const resources =
    state.resources?.length > 0
      ? state.resources
      : resourceContent[resourceKey]?.resources || [];

  const pageTitle = resourceTitles[resourceType] || resourceType;

  if (!course.title || !resourceType || !resourceKey) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f8faf9]">
        <h2 className="text-xl font-bold text-[#17212b]">
          Resource not found
        </h2>

        <button
          onClick={() => navigate("/study-prep")}
          className="mt-4 rounded-xl bg-[#308d46] px-5 py-3 text-white"
        >
          Back to Study Prep
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf9] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => navigate("/study-prep")}
          className="mb-7 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:border-[#308d46] hover:text-[#308d46]"
        >
          <ArrowLeft size={17} />
          Back to Courses
        </button>

        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#308d46]">
            {course.title}
          </span>

          <h1 className="mt-3 text-3xl font-extrabold text-[#17212b]">
            {pageTitle}
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Explore learning resources and start your preparation.
          </p>
        </div>

        {resources.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource, index) => {
              const item =
                typeof resource === "string"
                  ? {
                      id: `resource-${index}`,
                      title: resource.trim(),
                      description: "Explore this learning resource.",
                    }
                  : resource;

              return (
                <button
                  key={item.id || index}
                  onClick={() =>
                    navigate(
                      `/study-prep/resource/${encodeURIComponent(
                        course.title
                      )}/${resourceType}/${encodeURIComponent(
                        item.id || `resource-${index}`
                      )}`,
                      {
                        state: {
                          course,
                          resourceType,
                          resource: item,
                          resources,
                        },
                      }
                    )
                  }
                  className="group rounded-2xl border border-[#e3e8e4] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#b9d9c1] hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ed] text-[#308d46] transition group-hover:bg-[#308d46] group-hover:text-white">
                    <BookOpen size={22} />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-[#202b35]">
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-gray-400 transition group-hover:text-[#308d46]"
                    />
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    {item.description ||
                      "Explore this learning resource."}
                  </p>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <BookOpen size={35} className="mx-auto text-gray-400" />

            <h3 className="mt-3 font-semibold text-gray-700">
              Resources coming soon
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Learning materials will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourcePage;
