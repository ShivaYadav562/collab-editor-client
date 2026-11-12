import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Menu,
  X,
  ChevronRight,
  ArrowUpRight,
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
  BriefcaseBusiness,
  FileSpreadsheet,
  NotebookPen,
  ListTree,
  Video,
  Bot,
} from "lucide-react";

import { courses } from "../../data/study-prep/courses";
import { categories } from "../../data/study-prep/categories";
import { sidebarGroups } from "../../data/study-prep/sidebarMenu";
import { resourceContent } from "../../data/study-prep/resources";

import CourseGrid from "../../components/study-prep/courses/CourseGrid";
import SearchBar from "../../components/study-prep/courses/SearchBar";
import CategoryFilter from "../../components/study-prep/courses/CategoryFilter";
import ResourceModal from "../../components/study-prep/resources/ResourceModal";
import DsaSheetsPage from "./DsaSheetsPage";

const sidebarIconMap = {
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

const courseMenuMap = {
  DSA: "DSA Preparation",
  Java: "Java Programming",
  "Java Backend": "Java Backend",
  AWS: "AWS Cloud",
  DevOps: "DevOps",
  "Machine Learning": "Machine Learning",
  "MERN Stack": "MERN Stack",
  Python: "Python Programming",
  "C++": "C++ Programming",
  JavaScript: "JavaScript",
};

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

const sectionResourceTypeMap = {
  "DSA Notes": "notes",
  "DSA Playlists": "playlists",
  "DSA Sheets": "sheets",

  "Java Playlists": "java",
  "Java Backend Playlists": "javaBackend",
  "AWS Playlists": "aws",
  "Machine Learning Playlists": "machineLearning",
  "Python Playlists": "python",
  "C++ Playlists": "cpp",
  "JavaScript Playlists": "javascript",
};

function StudyPrepPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [activeSection, setActiveSection] = useState("All Courses");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Filter Courses
  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();
    const selectedCourseTitle =
      courseMenuMap[activeSection] || activeSection;

    return courses.filter((course) => {
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.subtitle.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === "All Courses" ||
        course.category === activeCategory;

      const matchesSection =
        activeSection === "All Courses" ||
        course.title === selectedCourseTitle;

      return matchesSearch && matchesCategory && matchesSection;
    });
  }, [search, activeCategory, activeSection]);

  const isCoursePage =
    activeSection === "All Courses" ||
    courses.some(
      (course) =>
        course.title ===
        (courseMenuMap[activeSection] || activeSection)
    );

  const currentResource = resourceContent[activeSection];

  // Sidebar Navigation
  const handleSidebarClick = (name) => {
    if (name === "Practice Code") return;

    setActiveSection(name);
    setActiveCategory("All Courses");
    setSearch("");
    setSidebarOpen(false);
  };

  // Course Modal se Resource Page open karna
  const handleResourceSelect = (resourceType, course) => {
    const resourceKey = resourceKeyMap[resourceType];

    const resources = resourceKey
      ? resourceContent[resourceKey]?.resources || []
      : [];

    setSelectedCourse(null);

    navigate(
      `/study-prep/resource/${encodeURIComponent(
        course.title
      )}/${resourceType}`,
      {
        state: {
          course,
          resourceType,
          resources,
        },
      }
    );
  };

  // Sidebar resource card se Detail Page open karna
  const handleSidebarResourceClick = (item) => {
    const resourceType = sectionResourceTypeMap[activeSection];

    const sidebarCourseMap = {
      "DSA Notes": "DSA Preparation",
      "DSA Playlists": "DSA Preparation",
      "DSA Sheets": "DSA Preparation",
      "Java Playlists": "Java Programming",
      "Java Backend Playlists": "Java Backend",
      "AWS Playlists": "AWS Cloud",
      "Machine Learning Playlists": "Machine Learning",
      "Python Playlists": "Python Programming",
      "C++ Playlists": "C++ Programming",
      "JavaScript Playlists": "JavaScript",
    };

    const courseTitle = sidebarCourseMap[activeSection];

    if (!courseTitle || !resourceType || !item) return;

    const course = courses.find(
      (course) => course.title === courseTitle
    );

    if (!course) return;

    const resourceId = item.id || "resource-0";

    navigate(
      `/study-prep/resource/${encodeURIComponent(
        course.title
      )}/${resourceType}/${encodeURIComponent(resourceId)}`,
      {
        state: {
          course,
          resourceType,
          resource: { ...item, id: resourceId },
          resources: currentResource?.resources || [],
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#17212b]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#e7e9ec] bg-white/95 backdrop-blur-xl">
        <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen((open) => !open)}
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

      <div className="flex min-h-[calc(100vh-72px)]">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar overlay"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed bottom-0 left-0 top-[72px] z-50 flex w-[265px] flex-col overflow-y-auto bg-[#101114] px-4 py-6 text-white transition-transform duration-300 lg:sticky lg:top-[72px] lg:z-20 lg:h-[calc(100vh-72px)] lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
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
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-gray-400 hover:bg-white/10 lg:hidden"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Explore Courses */}
          <button
            type="button"
            onClick={() => handleSidebarClick("All Courses")}
            className={`mb-7 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
              activeSection === "All Courses"
                ? "bg-[#237b3c] text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <GraduationCap size={18} />
            Explore Courses
            <ChevronRight size={16} className="ml-auto" />
          </button>

          {/* Sidebar Groups */}
          {sidebarGroups.map((group) => (
            <div key={group.title} className="mb-8">
              <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.15em] text-gray-500">
                {group.title}
              </p>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon =
                    typeof item.icon === "string"
                      ? sidebarIconMap[item.icon] || BookOpen
                      : item.icon || BookOpen;

                  const isActive = activeSection === item.name;

                  return (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => handleSidebarClick(item.name)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-[13px] font-medium transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon
                        size={17}
                        className={
                          isActive
                            ? "text-green-400"
                            : "text-gray-500"
                        }
                      />

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

          {/* Sidebar Footer */}
          <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
              <Sparkles size={18} />
            </div>

            <p className="text-sm font-semibold">Keep Learning!</p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Consistency is the key to mastering technology.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10">
          {isCoursePage && (
            <>
              {/* Hero Section */}
              <section className="relative mb-10 overflow-hidden rounded-2xl border border-[#e1e8e2] bg-gradient-to-r from-[#edf8ef] via-white to-[#eef5ff] p-6 sm:p-9">
                <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />

                <div className="relative z-10 max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#308d46]">
                    <Sparkles size={13} />
                    HELLO, ENGINEER!
                  </span>

                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#17212b] sm:text-4xl">
                    Toh chalo,
                    <span className="text-[#308d46]">
                      {" "}shuru karte hain!
                    </span>
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#64707c] sm:text-base">
                    Aaj kuch naya seekhte hain, thodi practice karte hain
                    aur har din apne aap ko better banate hain. Yahan learning
                    sabke liye 100% free hai!
                  </p>

                  <div className="mt-6 flex flex-wrap gap-5 text-xs font-medium text-[#66717b]">
                    <span className="flex items-center gap-2">
                      <BookOpen size={15} className="text-[#308d46]" />
                      Seekho, Practice Karo
                    </span>

                    <span className="flex items-center gap-2">
                      <GraduationCap size={16} className="text-[#308d46]" />
                      Grow Every Day
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-[-35px] right-12 hidden h-48 w-48 items-center justify-center rounded-full border-[18px] border-white/50 bg-white/20 lg:flex">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white bg-white/70 text-[#308d46] shadow-xl">
                    <GraduationCap size={65} strokeWidth={1.3} />
                  </div>
                </div>
              </section>

              {/* Course Heading */}
              <section className="mb-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#17212b]">
                      Find Your Learning Path
                    </h2>

                    <p className="mt-1.5 text-sm text-[#7b8490]">
                      Choose a course and start learning at your own pace.
                    </p>
                  </div>

                  <span className="text-sm font-medium text-[#7b8490]">
                    {filteredCourses.length} Courses Available
                  </span>
                </div>
              </section>

              {/* Search */}
              <div className="mb-7">
                <SearchBar
                  search={search}
                  onSearchChange={setSearch}
                />
              </div>

              {/* Category Filter */}
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {/* Course Grid */}
              <section>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#202b35]">
                    {activeSection === "All Courses"
                      ? "All Learning Paths"
                      : activeSection}
                  </h3>

                  <span className="text-xs text-[#8b939c]">
                    Updated learning resources
                  </span>
                </div>

                <CourseGrid
                  courses={filteredCourses}
                  onExplore={setSelectedCourse}
                />
              </section>
            </>
          )}

          {/* Sidebar Resource Content */}
          {!isCoursePage && activeSection === "DSA Sheets" && (
              <DsaSheetsPage />
            )}

{/* Sidebar Resource Content */}
{!isCoursePage &&
  activeSection !== "DSA Sheets" &&
  currentResource && (

            <section>
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#308d46]">
                  Study Workspace
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#17212b]">
                  {currentResource.title}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                  {currentResource.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {currentResource.resources.map((resource, index) => {
                  const item =
                    typeof resource === "string"
                      ? {
                          id: `resource-${index}`,
                          title: resource.trim(),
                          description: "Explore this learning resource.",
                          type: "note",
                        }
                      : {
                          ...resource,
                          id: resource.id || `resource-${index}`,
                        };

                  return (
                    <button
                      key={item.id || index}
                      type="button"
                      onClick={() => handleSidebarResourceClick(item)}
                      className="group w-full rounded-2xl border border-[#e3e8e4] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#b9d9c1] hover:shadow-lg"
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
                          `Learning resource ${index + 1}`}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* AI Tutor */}
              {activeSection === "AI Tutor" && (
                <div className="mt-8 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50 to-white p-6">
                  <div className="flex items-center gap-3">
                    <Bot className="text-purple-600" size={25} />

                    <h3 className="text-lg font-bold">
                      AI Learning Assistant
                    </h3>
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    AI Tutor integration will be implemented here.
                  </p>
                </div>
              )}
            </section>
          )}
        </main>
      </div>

      {/* Course Resource Modal */}
      {selectedCourse && (
        <ResourceModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onSelectResource={handleResourceSelect}
        />
      )}
    </div>
  );
}

export default StudyPrepPage;