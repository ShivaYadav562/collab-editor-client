import React, { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Star,
  Trash2,
  FolderOpen,
  Folder,
  ChevronDown,
  ChevronRight,
  FileCode2,
  FileJson,
  File,
  Search,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const projectFiles = [
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
    ],
  },
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "App.jsx", type: "file" },
          { name: "Navbar.jsx", type: "file" },
        ],
      },
      { name: "App.jsx", type: "file" },
      { name: "main.jsx", type: "file" },
      { name: "index.css", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "README.md", type: "file" },
];

function Sidebar({ workspaceMode = false }) {
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState(["src"]);
  const [search, setSearch] = useState("");

  const allMenuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Rooms", path: "/my-rooms", icon: FileText },
    { name: "Starred", path: "/starred", icon: Star },
    { name: "Trash", path: "/trash", icon: Trash2 },
  ];

  const menuItems = workspaceMode
    ? allMenuItems.slice(0, 1)
    : allMenuItems;

  const toggleFolder = (name) => {
    setExpandedFolders((previous) =>
      previous.includes(name)
        ? previous.filter((folder) => folder !== name)
        : [...previous, name]
    );
  };

  const getFileIcon = (name) => {
    if (name.endsWith(".jsx") || name.endsWith(".js")) {
      return <FileCode2 size={15} className="shrink-0 text-yellow-400" />;
    }

    if (name.endsWith(".json")) {
      return <FileJson size={15} className="shrink-0 text-green-400" />;
    }

    if (name.endsWith(".css")) {
      return <FileCode2 size={15} className="shrink-0 text-blue-400" />;
    }

    return <File size={15} className="shrink-0 text-slate-400" />;
  };

  const renderFiles = (items, depth = 0) =>
    items
      .filter((item) => {
        if (!search.trim()) return true;

        const query = search.toLowerCase();

        return (
          item.name.toLowerCase().includes(query) ||
          (item.children &&
            JSON.stringify(item.children).toLowerCase().includes(query))
        );
      })
      .map((item) => {
        const isFolder = item.type === "folder";
        const isExpanded =
          expandedFolders.includes(item.name) || Boolean(search.trim());

        return (
          <div key={`${depth}-${item.name}`}>
            <button
              type="button"
              onClick={() =>
                isFolder ? toggleFolder(item.name) : undefined
              }
              className="flex w-full min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              style={{ paddingLeft: `${10 + depth * 13}px` }}
            >
              {isFolder ? (
                isExpanded ? (
                  <ChevronDown size={14} className="shrink-0 text-slate-500" />
                ) : (
                  <ChevronRight size={14} className="shrink-0 text-slate-500" />
                )
              ) : (
                <span className="w-[14px] shrink-0" />
              )}

              {isFolder ? (
                isExpanded ? (
                  <FolderOpen size={16} className="shrink-0 text-blue-400" />
                ) : (
                  <Folder size={16} className="shrink-0 text-blue-400" />
                )
              ) : (
                getFileIcon(item.name)
              )}

              <span className="truncate">{item.name}</span>
            </button>

            {isFolder &&
              isExpanded &&
              item.children &&
              renderFiles(item.children, depth + 1)}
          </div>
        );
      });

  return (
    <aside className="flex h-screen w-[220px] min-w-[220px] shrink-0 flex-col overflow-hidden border-r border-white/[0.07] bg-[#0b0b0b] text-white">
      {/* Brand */}
      <div className="flex shrink-0 items-center gap-3 px-4 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 text-xl font-bold">
          C
        </div>

        <div className="min-w-0">
          <h1 className="truncate text-base font-bold">Collab Editor</h1>
          <p className="text-xs text-gray-400">Workspace</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex shrink-0 flex-col gap-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-blue-500/15 text-blue-300"
                    : "text-gray-400 hover:bg-white/[0.06] hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Explorer: shown inside sidebar in workspace */}
      {workspaceMode && (
        <section className="mt-5 flex min-h-0 flex-1 flex-col border-t border-white/[0.08] pt-3">
          <button
            type="button"
            onClick={() => setExplorerOpen((open) => !open)}
            className="flex shrink-0 items-center justify-between px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 hover:text-white"
          >
            <span className="flex items-center gap-2">
              {explorerOpen ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
              Explorer
            </span>
          </button>

          {explorerOpen && (
            <>
              <div className="mx-3 mb-2 mt-1 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5">
                <Search size={14} className="shrink-0 text-slate-500" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search files..."
                  className="h-8 w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-slate-600"
                />
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-2 pb-3">
                <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Project Files
                </p>

                {renderFiles(projectFiles)}
              </div>
            </>
          )}
        </section>
      )}

      {/* Footer */}
      <div className="mt-auto shrink-0 border-t border-white/[0.07] px-4 py-3 text-[11px] text-gray-500">
        Collaborative Workspace
      </div>
    </aside>
  );
}

export default Sidebar;