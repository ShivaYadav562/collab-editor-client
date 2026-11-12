import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FileCode2,
  FileText,
  Plus,
  Search,
  MoreHorizontal,
  Files,
} from "lucide-react";

const initialFiles = [
  {
    id: "src",
    name: "src",
    type: "folder",
    children: [
      {
        id: "components",
        name: "components",
        type: "folder",
        children: [
          { id: "app-jsx", name: "App.jsx", type: "file" },
          { id: "navbar-jsx", name: "Navbar.jsx", type: "file" },
        ],
      },
      { id: "index-jsx", name: "index.jsx", type: "file" },
      { id: "styles-css", name: "styles.css", type: "file" },
    ],
  },
  {
    id: "public",
    name: "public",
    type: "folder",
    children: [
      { id: "favicon", name: "favicon.svg", type: "file" },
    ],
  },
  { id: "package-json", name: "package.json", type: "file" },
  { id: "readme-md", name: "README.md", type: "file" },
];

function FileExplorer({
  files = initialFiles,
  activeFile,
  onFileSelect,
}) {
  const [expanded, setExpanded] = useState(["src", "components"]);
  const [search, setSearch] = useState("");

  const toggleFolder = (id) => {
    setExpanded((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const renderTree = (items, depth = 0) =>
    items
      .filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((item) => {
        const isFolder = item.type === "folder";
        const isExpanded = expanded.includes(item.id);
        const isActive = activeFile === item.name;

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() =>
                isFolder
                  ? toggleFolder(item.id)
                  : onFileSelect?.(item)
              }
              className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[13px] transition ${
                isActive
                  ? "bg-blue-500/15 text-blue-300"
                  : "text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-100"
              }`}
              style={{ paddingLeft: `${12 + depth * 16}px` }}
            >
              {isFolder ? (
                <>
                  {isExpanded ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  )}
                  {isExpanded ? (
                    <FolderOpen size={16} className="text-blue-400" />
                  ) : (
                    <Folder size={16} className="text-blue-400" />
                  )}
                </>
              ) : (
                <>
                  <span className="w-[14px]" />
                  {item.name.endsWith(".jsx") ||
                  item.name.endsWith(".js") ? (
                    <FileCode2 size={16} className="text-yellow-400" />
                  ) : (
                    <FileText size={16} className="text-sky-400" />
                  )}
                </>
              )}

              <span className="truncate">{item.name}</span>
            </button>

            {isFolder &&
              isExpanded &&
              item.children?.length > 0 &&
              renderTree(item.children, depth + 1)}
          </div>
        );
      });

  return (
    <aside className="flex h-full w-[250px] min-w-[220px] flex-col border-r border-white/[0.08] bg-[#0b0d12] text-white">
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] px-4">
        <div className="flex items-center gap-2">
          <Files size={17} className="text-blue-400" />
          <h2 className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-200">
            Explorer
          </h2>
        </div>

        <button
          type="button"
          title="Explorer options"
          className="rounded-md p-1.5 text-zinc-500 hover:bg-white/[0.07] hover:text-white"
        >
          <MoreHorizontal size={17} />
        </button>
      </div>

      <div className="border-b border-white/[0.06] p-3">
        <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#11141c] px-3">
          <Search size={15} className="shrink-0 text-zinc-500" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search files..."
            className="h-9 w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-zinc-600"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
          Project Files
        </span>

        <button
          type="button"
          title="Add file (coming soon)"
          className="rounded-md p-1 text-zinc-500 hover:bg-white/[0.07] hover:text-white"
        >
          <Plus size={15} />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-2 pb-4">
        {renderTree(files)}
      </div>

      <div className="shrink-0 border-t border-white/[0.07] px-4 py-3">
        <p className="text-[11px] text-zinc-600">
          Collaborative Workspace
        </p>
      </div>
    </aside>
  );
}

export default FileExplorer;