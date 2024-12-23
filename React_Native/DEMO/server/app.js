const express = require('express');
const http = require('http');
const { Server } = require("socket.io")
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const PORT = 8000;
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE'],
  },
});

app.use(express.static('public'));
  
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('New client connected', socket.id);
  socket.on('sendNotification', data => {
    io.emit('receiveNotification', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});