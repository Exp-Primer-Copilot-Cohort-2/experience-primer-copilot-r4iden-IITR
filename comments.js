//create web server
const express = require('express');
const app = express();
const port = 3000;

// get comments from the database
const { getComments } = require('./database');

app.get('/comments', (req, res) => {
  // get comments from the database
  const comments = getComments();
  
  // send comments as a response
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});