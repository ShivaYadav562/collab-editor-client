
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";

function EditorLayout({ children, workspaceMode = false }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex w-full overflow-hidden ${
        workspaceMode
          ? "fixed inset-0 h-[100dvh]"
          : "relative min-h-screen"
      } ${
        theme === "dark" ? "bg-[#0b0b0b]" : "bg-white"
      }`}
      style={{ overflowAnchor: "none" }}
    >
      {/* Sidebar */}
      <aside className="h-full shrink-0 overflow-hidden">
        <Sidebar workspaceMode={workspaceMode} />
      </aside>

      {/* Main Content */}
      <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        {!workspaceMode && (
          <div className="z-10 shrink-0">
            <Navbar />
          </div>
        )}

        {/* Page Content */}
        <main className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

export default EditorLayout;
