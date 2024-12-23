const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let messages = [];

io.on("connection", (socket) => {
  console.log(`user connected : ${socket.id}`);

  socket.on("send_message", (data) => {
    const userMessage = {
      userId: data.userId,
      text: data.text,
      timestamp: new Date().toISOString(),
    };
    messages.push(userMessage);
    socket.broadcast.emit("receive_message", data);
  });
});

app.get("/messages/:userId", (req, res) => {
  const userId = req.params.userId;
  const userMessages = messages.filter((msg) => msg.userId === userId);
//   console.log(userMessages);
  res.json(userMessages);
});

server.listen(3001, () => console.log("Server is running on port 3001"));
