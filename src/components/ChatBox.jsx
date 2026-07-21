import React, { useEffect, useRef } from "react";
import { MessageCircle, SendHorizonal } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ChatBox({
  chat,
  username,
  msg,
  setMsg,
  sendMessage,
}) {
  const bottomRef = useRef();

  const { theme } = useTheme();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);

  return (
    <div
      className={`rounded-2xl shadow-xl h-full flex flex-col overflow-hidden border transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#111827] border-slate-700"
          : "bg-white border-gray-300"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-3 px-5 py-4 border-b ${
          theme === "dark"
            ? "border-slate-700"
            : "border-gray-300"
        }`}
      >
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
          <MessageCircle className="text-white" size={20} />
        </div>

        <div>
          <h2
            className={`font-semibold ${
              theme === "dark"
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            Team Chat
          </h2>

          <p
            className={`text-xs ${
              theme === "dark"
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Collaborate in real time
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scroll">
        {chat.length === 0 && (
          <div
            className={`text-center mt-10 ${
              theme === "dark"
                ? "text-gray-500"
                : "text-gray-600"
            }`}
          >
            No messages yet 👋
          </div>
        )}

        {chat.map((c, i) => {
          const isMe = c.user === username;

          return (
            <div
              key={i}
              className={`flex ${
                isMe
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {!isMe && (
                <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mr-3">
                  {c.user.charAt(0).toUpperCase()}
                </div>
              )}

              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  isMe
                    ? "bg-blue-600 text-white"
                    : theme === "dark"
                    ? "bg-slate-800 text-gray-100"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <div className="text-sm font-semibold mb-1">
                  {isMe ? "You" : c.user}
                </div>

                <div className="break-words">
                  {c.message}
                </div>

                <div className="text-[10px] opacity-70 mt-2 text-right">
                  {c.time}
                </div>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className={`border-t p-4 flex gap-3 ${
          theme === "dark"
            ? "border-slate-700"
            : "border-gray-300"
        }`}
      >
        <input
          value={msg}
          onChange={(e) =>
            setMsg(e.target.value)
          }
          placeholder="Type your message..."
          className={`flex-1 rounded-xl px-4 py-3 outline-none border focus:border-blue-500 ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }`}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 transition px-5 rounded-xl flex items-center justify-center"
        >
          <SendHorizonal
            className="text-white"
            size={20}
          />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;