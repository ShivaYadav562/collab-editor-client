import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

import debounce from "lodash.debounce";
import { v4 as uuidv4 } from "uuid";
import TopBar from "../components/TopBar";
import ChatBox from "../components/ChatBox";
import CodeEditor from "../components/CodeEditor";
import JoinRoom from "../components/JoinRoom";
//import { BrowserRouter } from "react-router-dom";
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

   // Protect Editor Route
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

// Auto Fill Username
useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    setUsername(user.username);
  }
}, []);

  //  socket connect
  useEffect(() => {
  const newSocket = io("https://collab-editor-backend-1-fy11.onrender.com");
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);


  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const roomId = params.get("room");

  if (roomId) {
    setRoom(roomId);

    // Agar username aur socket ready hain to auto join
    if (socket && username) {
      socket.emit("join_room", {
        room: roomId,
        username,
      });

      setJoined(true);
    }
  }
}, [socket, username]);





  //  debounce send
  const sendCode = useMemo(() => {
    return debounce((newCode) => {
      if (!socket) return;

      socket.emit("send_message", {
        room,
        message: newCode,
      });
    }, 200);
  }, [socket, room]);

  useEffect(() => {
    return () => sendCode.cancel();
  }, [sendCode]);

  //  receive code
  useEffect(() => {
    if (!socket) return;

    socket.on("receive_message", (newCode) => {
      isRemoteChange.current = true;
      setCode(newCode);
    });

    return () => socket.off("receive_message");
  }, [socket]);

  //  language sync
  useEffect(() => {
    if (!socket) return;

    socket.on("language_change", (lang) => {
      setLanguage(lang);
    });

    return () => socket.off("language_change");
  }, [socket]);

  //  users update

  useEffect(() => {
    if (!socket) return;

    socket.on("users_update", (usersList) => {
      setUsers(usersList);
    });

    return () => socket.off("users_update");
  }, [socket]);


  useEffect(() => {
  if (!socket) return;

  socket.on("receive_chat", (data) => {
     console.log("CHAT:", data); 
    setChat((prev) => [...prev, data]);
  });

  return () => socket.off("receive_chat");
}, [socket]);


useEffect(() => {
  if (!socket) return;

  socket.on("saved", () => {
    setSaveStatus("Saved");
  });

  return () => socket.off("saved");
}, [socket]);

  //  create room
const createRoom = async () => {
    console.log("CREATE ROOM CLICKED");
  if (room) return;

  const newRoomId = uuidv4();

  setRoom(newRoomId);

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

      const response =await fetch(
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

    console.log("STATUS:", response.status);

     const data = await response.json();

    console.log("DATA:", data);

    console.log("Room saved");

  } catch (error) {

    console.log(error);
  }
};

const copyLink = () => {
  const link = `${window.location.origin}/editor?room=${room}`;
  navigator.clipboard.writeText(link);
  alert("Link copied!");
};

 // join room
  const joinRoom = () => {
    if (!room || !username || !socket) {
      alert("Enter username and room ID");
      return;
    }
    console.log("Joining Room:", room);
    socket.emit("join_room", {
      room,
      username,
    });
  window.history.pushState({}, "", `?room=${room}`);

    setJoined(true);
  };

const sendMessage = () => {
  if (!msg.trim()) return;

  const chatData = {
    user: username,
    message: msg,
    time: new Date().toLocaleTimeString(),
  };

  //  LOCAL UI UPDAT
  setChat((prev) => [...prev, chatData]);

  socket.emit("send_chat", {
    room,
    message: msg,
  });

  setMsg("");
};

  const templates = {

  javascript:
`console.log("Hello World");`,

  python:
`print("Hello World")`,

  java:
`class Main {

    public static void main(String[] args) {

    }
}`,

  cpp:
`#include <iostream>
using namespace std;

int main() {

    cout << "Hello World";

    return 0;
}`,

  c:
`#include <stdio.h>

int main() {

    printf("Hello World");

    return 0;
}`,
};

  //  change language
  const handleLanguage = (e) => {
    const lang = e.target.value;

    setLanguage(lang);

     // TEMPLATE SET
  setCode(
    templates[lang]
  );

    socket.emit("language_change", {
      room,
      language: lang,
    });
  };

 return (
  <EditorLayout>

    <div className="container">

      {!joined ? (

        <JoinRoom
          username={username}
          setUsername={setUsername}
          room={room}
          setRoom={setRoom}
          joinRoom={joinRoom}
          createRoom={createRoom}
        />

      ) : (

        <>

          <TopBar
            room={room}
            users={users}
            copyLink={copyLink}
            saveStatus={saveStatus}
            language={language}
            handleLanguage={handleLanguage}
          />

          <Group
            direction="horizontal"
            className="main"
          >

            {/* EDITOR PANEL */}
            <Panel
              defaultSize={78}
              minSize={45}
            >

              <div className="editor-section">

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

            {/* RESIZE HANDLE */}
             <Separator
              style={{
                width: "6px",
                background: "rgba(255,255,255,0.08)",
                cursor: "col-resize",
                borderRadius: "20px",
              }}
            />

            {/* CHAT PANEL */}
            <Panel
              defaultSize={22}
              minSize={18}
            >

              <div className="chat-section">

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

        </>

      )}

    </div>

  </EditorLayout>
);
}
export default EditorPage;