import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function EditorLayout({ children }) {
  return (
    <div className="flex bg-[#020617] min-h-screen">
      
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