import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";

function EditorLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#020617]"
          : "bg-gray-100"
      }`}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default EditorLayout;