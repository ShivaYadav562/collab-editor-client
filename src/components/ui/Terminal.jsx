import React from "react";

function Terminal({ input, setInput, output }) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden border-t border-white/10 bg-black p-3 font-mono text-sm text-green-400">
      {/* Terminal Header */}
      <div className="mb-2 flex shrink-0 items-center justify-between">
        <h3 className="font-bold text-white">Terminal</h3>
        <span className="text-xs text-gray-500">Input / Output</span>
      </div>

      {/* Input */}
      <div className="mb-2 shrink-0">
        <label className="mb-1 block text-xs text-gray-300">
          Input
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter input..."
          className="h-[55px] w-full resize-y rounded-lg border border-white/10 bg-[#111] p-2 text-sm text-green-400 outline-none placeholder:text-gray-500 focus:border-blue-500"
        />
      </div>

      {/* Output */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <h4 className="mb-1 shrink-0 text-xs text-gray-300">
          Output
        </h4>

        <pre className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-words rounded-md bg-[#080808] p-2 text-sm text-green-400">
          {output || "Output will appear here..."}
        </pre>
      </div>
    </div>
  );
}

export default Terminal;