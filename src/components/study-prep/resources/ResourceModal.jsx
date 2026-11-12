
import {
  X,
  NotebookPen,
  Video,
  ListTree,
  Code2,
  ChevronRight,
  Coffee,
  Server,
  Cloud,
  BrainCircuit,
  FileCode2,
  Braces,
  Layers,
} from "lucide-react";

const resourceOptions = [
  {
    id: "notes",
    title: "Notes",
    description: "Handwritten notes, PDFs and revision material",
    icon: NotebookPen,
    color: "blue",
  },
  {
    id: "playlists",
    title: "DSA Playlists",
    description: "DSA video lectures by Pratush and Striver",
    icon: Video,
    color: "green",
  },
  {
    id: "sheets",
    title: "DSA Sheets",
    description: "Structured questions and problem-solving sheets",
    icon: ListTree,
    color: "purple",
  },
  {
    id: "practice",
    title: "Practice",
    description: "Coding problems and practical exercises",
    icon: Code2,
    color: "orange",
  },
  {
    id: "java",
    title: "Java Playlists",
    description: "Java programming and DSA by Kunal Kushwaha",
    icon: Coffee,
    color: "orange",
  },
  {
    id: "javaBackend",
    title: "Java Backend",
    description: "Backend development tutorials by Coder Army",
    icon: Server,
    color: "green",
  },
  {
    id: "aws",
    title: "AWS Playlists",
    description: "AWS Cloud tutorials by M. Prashant",
    icon: Cloud,
    color: "orange",
  },
  {
    id: "machineLearning",
    title: "Machine Learning Playlists",
    description: "Machine Learning tutorials by CampusX",
    icon: BrainCircuit,
    color: "purple",
  },
  {
    id: "python",
    title: "Python Playlists",
    description: "Python tutorials by CodeWithHarry",
    icon: FileCode2,
    color: "blue",
  },
  {
    id: "cpp",
    title: "C++ Playlists",
    description: "C++ tutorials by CodeWithHarry",
    icon: Code2,
    color: "green",
  },
  {
    id: "javascript",
    title: "JavaScript Playlists",
    description: "JavaScript tutorials by Chai aur Code",
    icon: Braces,
    color: "orange",
  },
];

const colorStyles = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
};

const courseResourceMap = {
  "DSA Preparation": [
    "notes",
    "playlists",
    "sheets",
    "practice",
  ],
  "Java Programming": ["java"],
  "Java Backend": ["javaBackend"],
  "AWS Cloud": ["aws"],
  "Machine Learning": ["machineLearning"],
  "Python Programming": ["python"],
  "C++ Programming": ["cpp"],
  JavaScript: ["javascript"],
};

function ResourceModal({ course, onClose, onSelectResource }) {
  if (!course) return null;

  const allowedResources = courseResourceMap[course.title] || [];

  const visibleResources = resourceOptions.filter((resource) =>
    allowedResources.includes(resource.id)
  );

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 p-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#308d46]">
              FREE LEARNING RESOURCES
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-[#17212b]">
              {course.title}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose how you want to learn.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Resource Options */}
        <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2">
          {visibleResources.length > 0 ? (
            visibleResources.map((resource) => {
              const Icon = resource.icon;

              return (
                <button
                  type="button"
                  key={resource.id}
                  onClick={() =>
                    onSelectResource(resource.id, course)
                  }
                  className="group flex items-start gap-3 rounded-xl border border-gray-200 p-4 text-left transition hover:-translate-y-0.5 hover:border-[#308d46] hover:shadow-md"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colorStyles[resource.color]}`}
                  >
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[#202b35]">
                      {resource.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {resource.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    className="mt-1 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#308d46]"
                  />
                </button>
              );
            })
          ) : (
            <div className="col-span-full py-8 text-center">
              <Layers
                size={32}
                className="mx-auto text-gray-400"
              />
              <h3 className="mt-3 font-semibold text-gray-700">
                Resources coming soon
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Learning materials will be added soon.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
          <p className="text-center text-xs font-medium text-gray-500">
            All learning resources are free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResourceModal;
