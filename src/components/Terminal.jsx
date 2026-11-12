
import React from "react";

function Terminal({ input, setInput, output }) {
  const handleKeyDown = (e) => {
    // Prevent keyboard events from reaching parent components
    e.stopPropagation();

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const newValue =
        input.substring(0, start) +
        "\n" +
        input.substring(end);

      setInput(newValue);

      // Restore cursor position after React updates
      requestAnimationFrame(() => {
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = start + 1;
      });
    }
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden border-t border-white/10 bg-black p-3 font-mono text-sm text-green-400">

      {/* Terminal Header */}
      <div className="mb-2 flex shrink-0 items-center justify-between">
        <span className="font-bold text-white">
          Terminal
        </span>

        <span className="text-xs text-gray-500">
          Input / Output
        </span>
      </div>

      {/* Input Section */}
      <div className="mb-2 flex shrink-0 flex-col">
        <label className="mb-1 text-xs text-gray-300">
          Input
        </label>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter input..."
          rows={2}
          className="h-[55px] w-full resize-none overflow-y-auto rounded-lg border border-white/10 bg-[#111] p-2 text-green-400 outline-none focus:border-purple-500"
        />
      </div>

      {/* Output Section */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="mb-1 shrink-0 text-xs text-gray-300">
          Output
        </div>

        <pre className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-[#090909] p-2 text-green-400">
          {output || "Output will appear here..."}
        </pre>
      </div>

    </div>
  );
}

export default Terminal;
