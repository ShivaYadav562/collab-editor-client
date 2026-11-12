import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import debounce from "lodash.debounce";
import { v4 as uuidv4 } from "uuid";

import TopBar from "../components/TopBar";
import ChatBox from "../components/ChatBox";
import CodeEditor from "../components/CodeEditor";
import JoinRoom from "../components/JoinRoom";
import EditorLayout from "../components/ui/EditorLayout";

import {
  Panel,
  Group,
  Separator,
} from "react-resizable-panels";

function EditorPage() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [socket, setSocket] = useState(null);
  const [language, setLanguage] = useState("javascript");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");
  const [saveStatus, setSaveStatus] = useState("Saved");

  const isRemoteChange = useRef(false);

  // Protect editor route
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      sessionStorage.setItem(
        "redirectAfterLogin",
        window.location.pathname + window.location.search
      );

      alert("Please login first.");
      navigate("/");
    }
  }, [navigate]);

  // Load username
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user?.username) {
        setUsername(user.username);
      }
    } catch (error) {
      console.error("Unable to read user information:", error);
    }
  }, []);

  // Connect Socket.IO
  useEffect(() => {
    const newSocket = io(
      "https://collab-editor-backend-1-fy11.onrender.com"
    );

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Auto-join room from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("room");

    if (roomId && socket && username) {
      setRoom(roomId);

      socket.emit("join_room", {
        room: roomId,
        username,
      });

      setJoined(true);
    }
  }, [socket, username]);

  // Synchronize code
  const sendCode = useMemo(
    () =>
      debounce((newCode) => {
        if (!socket) return;

        socket.emit("send_message", {
          room,
          message: newCode,
        });
      }, 200),
    [socket, room]
  );

  useEffect(() => {
    return () => sendCode.cancel();
  }, [sendCode]);

  // Receive synchronized code
  useEffect(() => {
    if (!socket) return;

    const handleReceiveMessage = (newCode) => {
      isRemoteChange.current = true;
      setCode(newCode);
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [socket]);

  // Synchronize programming language
  useEffect(() => {
    if (!socket) return;

    const handleLanguageChange = (lang) => {
      setLanguage(
        typeof lang === "string"
          ? lang
          : lang?.language || "javascript"
      );
    };

    socket.on("language_change", handleLanguageChange);

    return () => {
      socket.off("language_change", handleLanguageChange);
    };
  }, [socket]);

  // Online users
  useEffect(() => {
    if (!socket) return;

    const handleUsersUpdate = (usersList) => {
      setUsers(Array.isArray(usersList) ? usersList : []);
    };

    socket.on("users_update", handleUsersUpdate);

    return () => {
      socket.off("users_update", handleUsersUpdate);
    };
  }, [socket]);

  // Receive chat messages
  useEffect(() => {
    if (!socket) return;

    const handleReceiveChat = (data) => {
      setChat((previous) => [...previous, data]);
    };

    socket.on("receive_chat", handleReceiveChat);

    return () => {
      socket.off("receive_chat", handleReceiveChat);
    };
  }, [socket]);

  // Save status
  useEffect(() => {
    if (!socket) return;

    const handleSaved = () => {
      setSaveStatus("Saved");
    };

    socket.on("saved", handleSaved);

    return () => {
      socket.off("saved", handleSaved);
    };
  }, [socket]);

  // Create room
  const createRoom = async () => {
    if (room) return;

    const newRoomId = uuidv4();
    setRoom(newRoomId);

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const response = await fetch(
        "https://collab-editor-backend-1-fy11.onrender.com/api/rooms/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            roomId: newRoomId,
            roomName: "Untitled Room",
            owner: user?.id,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Room creation failed:", data);
      }
    } catch (error) {
      console.error("Unable to create room:", error);
    }
  };

  // Copy room link
  const copyLink = async () => {
    const link = `${window.location.origin}/editor?room=${room}`;

    try {
      await navigator.clipboard.writeText(link);
      alert("Link copied!");
    } catch (error) {
      console.error("Unable to copy room link:", error);
      alert("Could not copy link. Copy it from the browser address bar.");
    }
  };

  // Join room
  const joinRoom = () => {
    if (!room || !username || !socket) {
      alert("Enter username and room ID");
      return;
    }

    socket.emit("join_room", {
      room,
      username,
    });

    window.history.pushState({}, "", `?room=${room}`);
    setJoined(true);
  };

  // Send chat message
  const sendMessage = () => {
    if (!msg.trim() || !socket) return;

    socket.emit("send_chat", {
      room,
      message: msg.trim(),
    });

    setMsg("");
  };

  // Starter templates
  const templates = {
    javascript: 'console.log("Hello World");',
    python: 'print("Hello World")',
    java: `class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`,
    c: `#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}`,
  };

  // Change language
  const handleLanguage = (event) => {
    const lang = event.target.value;

    setLanguage(lang);
    setCode(templates[lang] || "");

    if (socket) {
      socket.emit("language_change", {
        room,
        language: lang,
      });
    }
  };

  return (
    <EditorLayout workspaceMode={joined}>
      {!joined ? (
        // Keep the existing Join Room screen unchanged.
        <div className="h-full w-full overflow-y-auto">
          <JoinRoom
            username={username}
            setUsername={setUsername}
            room={room}
            setRoom={setRoom}
            joinRoom={joinRoom}
            createRoom={createRoom}
          />
        </div>
      ) : (
        <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#08090d] text-white">
          {/* Compact top header */}
          <div className="z-20 shrink-0">
            <TopBar
              room={room}
              users={users}
              copyLink={copyLink}
              saveStatus={saveStatus}
              language={language}
              handleLanguage={handleLanguage}
            />
          </div>

          {/* Main workspace: Editor + Chat */}
          <main className="min-h-0 flex-1 overflow-hidden">
            <Group
              direction="horizontal"
              className="flex h-full min-h-0 w-full overflow-hidden"
            >
              {/* Code Editor: 78% */}
              <Panel defaultSize={78} minSize={60}>
                <div className="h-full min-h-0 min-w-0 overflow-hidden">
                  <CodeEditor
                    code={code}
                    language={language}
                    setCode={setCode}
                    sendCode={sendCode}
                    isRemoteChange={isRemoteChange}
                    setSaveStatus={setSaveStatus}
                  />
                </div>
              </Panel>

              <Separator className="w-1 shrink-0 cursor-col-resize bg-white/10 transition-colors hover:bg-blue-500" />

              {/* Team Chat: 22% */}
              <Panel defaultSize={22} minSize={18}>
                <div className="h-full min-h-0 min-w-0 overflow-hidden">
                  <ChatBox
                    chat={chat}
                    username={username}
                    msg={msg}
                    setMsg={setMsg}
                    sendMessage={sendMessage}
                  />
                </div>
              </Panel>
            </Group>
          </main>
        </div>
      )}
    </EditorLayout>
  );
}

export default EditorPage;