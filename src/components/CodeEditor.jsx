import React, { useState } from "react";

import Editor from "@monaco-editor/react";

import Terminal from "./Terminal";

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

    <div className="bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col">

      {/* TOP BAR */}
      <div className="h-[70px] border-b border-white/10 px-6 flex items-center justify-between">

        <div>

          <h2 className="text-white text-xl font-bold">
            Live Code Editor
          </h2>

          <p className="text-gray-400 text-sm">
            Real-time collaborative coding
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:bg-white/10 transition">
            <Save size={18} />
            Save
          </button>

          <button
            onClick={copyCode}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:bg-white/10 transition"
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
          theme="vs-dark"
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