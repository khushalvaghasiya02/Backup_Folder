// const express = require('express')
// const socketIO = require('socket.io')
// const cors = require('cors')
// const app = express()
// const port = 8000;

// const http = require('http');
// const server = http.createServer(app);

// const io = socketIO(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST'],

//     }
// })

// app.use(cors('*'))

// app.use(express.json())

// app.post('/send', (req, res) => {
//     const message = req.body.message;
//     console.log(message);

//     io.emit('pushNotification', {
//         message
//     });

//     res.status(200).send({
//         message: 'Message sent successfully',
//     });
// });

// io.on('connection', (socket) => {
//     console.log('Connected');

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   })


// const express = require('express');
// const socketIO = require('socket.io');
// const cors = require('cors');
// const app = express();
// const port = 8000;

// const http = require('http');
// const server = http.createServer(app);

// // Socket.IO server configuration
// const io = socketIO(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST'],
//     }
// });

// // Middleware
// app.use(cors('*'));
// app.use(express.json());

// // POST route to send data to clients
// app.post('/send', (req, res) => {
//     const message = req.body.message;
//     console.log('Message received:', message);

//     // Emit the message to all connected clients
//     io.emit('pushNotification', { message });

//     res.status(200).send({
//         message: 'Message sent successfully',
//     });
// });

// // Handle new socket connections
// io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     // Handle socket disconnection
//     socket.on('disconnect', () => {
//         console.log('Client disconnected:', socket.id);
//     });
// });

// // Start the server
// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const message = req.body.message;
  console.log('Message received:', message);

  io.emit('pushNotification', { message });

  res.status(200).send({
    message: 'Message sent successfully',
  });
});

app.post('/addData', (req, res) => {
  const { title, description } = req.body;
  console.log('Data received:', title, description);

  io.emit('addData', { title, description });

  res.status(200).send({
    message: 'Data added successfully',
  });
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('addData', (data) => {
    console.log('Data received from client:', data);

    const notificationData = {
      title: 'New Data Added!',
      message: `Title: ${data.title}, Description: ${data.description}`,
    };

    socket.emit('message', notificationData);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
