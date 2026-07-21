import React, { useState } from "react";

import Editor from "@monaco-editor/react";

import Terminal from "./Terminal";

import { useTheme } from "../context/ThemeContext";

import {
  Play,
  Save,
  Copy,
} from "lucide-react";



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

 

  // COPY CODE
 const copyCode = () => {

    navigator.clipboard.writeText(code);

    alert("Code copied!");

  };

  // RUN CODE
  const runCode = async () => {

    try {

      setRunning(true);

      setOutput("Running...");

      const languageMap = {
       javascript: 63,
       python: 71,
       java: 62,
       cpp: 54,
       c: 50,
};

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

    stdin: stdin,
    }),
   }
);

const data = await response.json();

console.log(data);

setOutput(
  data.stdout ||
  data.compile_output ||
  data.stderr ||
  "No Output"
);
  
 


    } catch (error) {
      console.log(error)

      setOutput(error.message);

    } finally {

      setRunning(false);

    }
  };

  return (
       <div className={`rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col border transition-all duration-300 ${
        theme === "dark"
      ? "bg-[#0f172a] border-white/10"
      : "bg-white border-gray-300"
  }`}
>

      {/* TOP BAR */}
       <div className={`h-[70px] border-b px-6 flex items-center justify-between ${
        theme === "dark"
        ? "border-white/10"
        : "border-gray-300"
  }`}
>

        <div>

          <h2
              className={`text-xl font-bold ${
              theme === "dark"
              ? "text-white"
              : "text-gray-900"
          }`}
>
            Live Code Editor
          </h2>
             <p
                className={`text-sm ${
                theme === "dark"
                ? "text-gray-400"
                : "text-gray-600"
             }`}
>
            Real-time collaborative coding
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button
              className={`px-4 py-2 rounded-xl flex items-center gap-2 border transition ${
              theme === "dark"
              ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
              : "bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200"
          }`}
>
           <Save size={18} />
           Save
      </button>


        <button onClick={copyCode}
        className={`px-4 py-2 rounded-xl flex items-center gap-2 border transition ${
        theme === "dark"
        ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
        : "bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200"
     }`}
>
  <Copy size={18} />
  Copy
</button>
          <button
            onClick={runCode}
            disabled={running}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white flex items-center gap-2 hover:opacity-90 transition"
          >
            <Play size={18} />

            {running ? "Running..." : "Run"}
          </button>

        </div>

      </div>

      {/* EDITOR */}
      <div className="flex-1">

        <Editor
          height="100%"
          language={language}
          theme={theme === "dark" ? "vs-dark" : "light"}
          value={code}
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            automaticLayout: true,
            padding: {
              top: 20,
            },
            smoothScrolling: true,
            cursorBlinking: "smooth",
            fontFamily: "Fira Code",
          }}
          onChange={(value) => {

            const newCode = value || "";

            if (isRemoteChange.current) {

              isRemoteChange.current = false;

              setCode(newCode);

              return;
            }

            setCode(newCode);

            setSaveStatus("Saving...");

            sendCode(newCode);
          }}
        />

      </div>

      <Terminal
       input={stdin}
      setInput={setStdin}
       output={output}
/>
      
     </div> 
  )}


      

export default CodeEditor;