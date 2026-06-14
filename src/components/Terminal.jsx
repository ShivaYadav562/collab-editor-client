// src/components/Terminal.jsx

import React from "react";

function Terminal({
  input,
  setInput,
  output,
}) {

  return (

    <div className="bg-black text-green-400 p-4 h-[220px] overflow-auto border-t border-white/10 font-mono text-sm">

      {/* TITLE */}
      <div className="text-white font-bold mb-4">
        Terminal
      </div>

      {/* INPUT */}
      <div className="mb-4">

        <div className="text-gray-300 mb-2">
          Input
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter input..."
          className="w-full bg-[#111] text-green-400 p-3 rounded-lg outline-none resize-none h-[80px]"
        />

      </div>

      {/* OUTPUT */}
      <div>

        <div className="text-gray-300 mb-2">
          Output
        </div>

        <pre>
          {output}
        </pre>

      </div>

    </div>
  );
}

export default Terminal;