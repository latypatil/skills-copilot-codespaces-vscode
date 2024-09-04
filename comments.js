// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  {
    username: 'Alice',
    comment: 'Hi, my name is Alice.'
  },
  {
    username: 'Bob',
    comment: 'Hello, I am Bob.'
  }
];

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});