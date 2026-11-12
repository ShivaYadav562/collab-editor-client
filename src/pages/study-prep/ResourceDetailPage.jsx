
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Play,
} from "lucide-react";

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

function ResourceDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { course: courseParam, type: resourceType, resourceId } = useParams();

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

  const resource =
    state.resource ||
    resources.find(
      (item, index) =>
        String(
          typeof item === "string"
            ? `resource-${index}`
            : item.id
        ) === decodeURIComponent(resourceId || "")
    );

  if (!course.title || !resource || !resourceType) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f8faf9]">
        <h2 className="text-xl font-bold text-[#17212b]">
          Resource not found
        </h2>

        <button
          onClick={() => navigate("/study-prep")}
          className="mt-5 rounded-lg bg-[#308d46] px-5 py-2 text-white"
        >
          Back to Study Prep
        </button>
      </div>
    );
  }

  const currentResource =
    typeof resource === "string"
      ? {
          id: resourceId,
          title: resource,
          description: "Explore this learning resource.",
        }
      : resource;

  const isVideo =
    currentResource.type === "video" ||
    currentResource.type === "playlist" ||
    Boolean(currentResource.videoId) ||
    Boolean(currentResource.playlistId);

  const embedUrl = currentResource.videoId
    ? `https://www.youtube.com/embed/${currentResource.videoId}`
    : currentResource.playlistId
      ? `https://www.youtube.com/embed/videoseries?list=${currentResource.playlistId}`
      : null;

  const youtubeUrl =
    currentResource.url ||
    (currentResource.videoId
      ? `https://www.youtube.com/watch?v=${currentResource.videoId}`
      : currentResource.playlistId
        ? `https://www.youtube.com/playlist?list=${currentResource.playlistId}`
        : null);

  const backToResources = () => {
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

  return (
    <div className="min-h-screen bg-[#f8faf9] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={backToResources}
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:border-[#308d46] hover:text-[#308d46]"
        >
          <ArrowLeft size={17} />
          Back to Resources
        </button>

        {/* Resource Details */}
        <div className="rounded-2xl border border-[#e3e8e4] bg-white p-6 shadow-sm sm:p-8">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6ed] text-[#308d46]">
              {isVideo ? (
                <Play size={23} />
              ) : (
                <BookOpen size={23} />
              )}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#308d46]">
                {course.title}
              </p>

              <h1 className="text-2xl font-bold text-[#17212b]">
                {currentResource.title}
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="mb-7 text-sm leading-6 text-gray-500">
            {currentResource.description ||
              "Explore this learning resource."}
          </p>

          {/* YouTube Player */}
          {isVideo && embedUrl ? (
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                src={embedUrl}
                title={currentResource.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : currentResource.thumbnail ? (
            <img
              src={currentResource.thumbnail}
              alt={currentResource.title}
              className="max-h-[450px] w-full rounded-xl object-contain"
            />
          ) : (
            <div className="flex min-h-56 flex-col items-center justify-center rounded-xl bg-[#f5f8f5] text-gray-500">
              <BookOpen size={40} />

              <p className="mt-3 text-sm">
                Resource preview
              </p>
            </div>
          )}

          {/* External Resource Link */}
          {youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#308d46] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#237b3c]"
            >
              {isVideo ? "Watch on YouTube" : "Open Resource"}
              <ExternalLink size={16} />
            </a>
          )}

          {!embedUrl && !currentResource.thumbnail && !youtubeUrl && (
            <p className="mt-5 text-sm text-gray-400">
              Resource content will be available soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResourceDetailPage;
