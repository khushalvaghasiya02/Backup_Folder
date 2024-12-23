const express = require('express');
const bodyParser = require('body-parser');
const nodeNotifier = require('node-notifier');

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

// Sample in-memory database
let data = [];

// API to add data
app.post('/addData', (req, res) => {
  const newData = req.body;
  data.push(newData);

  // Send notification when new data is added
  nodeNotifier.notify({
    title: 'New Data Added',
    message: `New data with title: ${newData.title} has been added!`,
    sound: true,
  });

  return res.status(200).json({ message: 'Data added and notification sent', data: newData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
