
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Terminal from "./Terminal";
import { useTheme } from "../context/ThemeContext";
import { Play, Save, Copy } from "lucide-react";

function CodeEditor({
  code,
  language,
  setCode,
  sendCode,
  isRemoteChange,
  setSaveStatus,
}) {
  const { theme } = useTheme();

  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [stdin, setStdin] = useState("");

  const isDark = theme === "dark";

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied!");
    } catch (error) {
      console.error("Copy failed:", error);
      alert("Unable to copy code.");
    }
  };

  const saveCode = () => {
    setSaveStatus("Saved");
  };

  const runCode = async () => {
    const languageMap = {
      javascript: 63,
      python: 71,
      java: 62,
      cpp: 54,
      c: 50,
    };

    if (!languageMap[language]) {
      setOutput("Unsupported programming language.");
      return;
    }

    try {
      setRunning(true);
      setOutput("Running...");

      const response = await fetch(
        "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source_code: code,
            language_id: languageMap[language],
            stdin,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Code execution failed.");
      }

      setOutput(
        data.stdout ??
        data.compile_output ??
        data.stderr ??
        data.message ??
        "No Output"
      );
    } catch (error) {
      console.error("Execution error:", error);
      setOutput(error.message || "Unable to execute code.");
    } finally {
      setRunning(false);
    }
  };

  return (
    <section
      className={`flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border shadow-xl ${
        isDark
          ? "border-white/10 bg-[#0f172a]"
          : "border-gray-300 bg-white"
      }`}
    >
      {/* TOOLBAR */}
      <header
        className={`flex h-[64px] shrink-0 items-center justify-between gap-3 border-b px-4 ${
          isDark ? "border-white/10" : "border-gray-300"
        }`}
      >
        <div className="min-w-0">
          <h2
            className={`truncate text-lg font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Live Code Editor
          </h2>

          <p
            className={`truncate text-xs ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real-time collaborative coding
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={saveCode}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
              isDark
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            <Save size={16} />
            Save
          </button>

          <button
            type="button"
            onClick={copyCode}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
              isDark
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            <Copy size={16} />
            Copy
          </button>

          <button
            type="button"
            onClick={runCode}
            disabled={running}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-2 text-sm text-white disabled:opacity-60"
          >
            <Play size={16} />
            {running ? "Running..." : "Run"}
          </button>
        </div>
      </header>

      {/* MONACO EDITOR */}
        <div
          className="relative min-h-0 min-w-0 flex-1 overflow-hidden"
          style={{ overflowAnchor: "none" }}
        >
        <Editor
          height="100%"
          width="100%"
          language={language}
          theme={isDark ? "vs-dark" : "light"}
          value={code}
          onChange={(value) => {
            const newCode = value ?? "";

            if (isRemoteChange.current) {
              isRemoteChange.current = false;
              setCode(newCode);
              return;
            }

            setCode(newCode);
            setSaveStatus("Saving...");
            sendCode(newCode);
          }}
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 12 },
            smoothScrolling: true,
            cursorBlinking: "smooth",
            fontFamily: "'Fira Code', Consolas, monospace",
            wordWrap: "on",
          }}
        />
      </div>

      {/* TERMINAL */}
      <div className="h-[190px] min-h-[190px] max-h-[190px] w-full shrink-0 overflow-hidden">
        <Terminal
          input={stdin}
          setInput={setStdin}
          output={output}
        />
      </div>
    </section>
  );
}

export default CodeEditor;
