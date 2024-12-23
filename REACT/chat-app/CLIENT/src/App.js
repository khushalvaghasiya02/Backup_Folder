import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css"; 
const socket = io("http://localhost:3001");

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userId, setUserId] = useState("user123"); 

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3001/messages/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching messages:", error));
    }
  }, [newMessage]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const msg = {
        userId,
        text: newMessage,
        timestamp: new Date().toISOString(),
      };
      socket.emit("send_message", msg);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          className="message-input"
        />
        <button onClick={sendMessage} className="send-button">
          Send
        </button>
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.userId === userId ? "my-message" : "other-message"
            }`}
          >
            <p className="message-text">{msg.text}</p>
            <span className="message-time">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;