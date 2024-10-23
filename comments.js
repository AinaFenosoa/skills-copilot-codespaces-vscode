// Create web server
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Use the express.static middleware to serve static files
app.use(express.static('public'));

// Use the express.json middleware to parse JSON bodies
app.use(express.json());

// Use the express.urlencoded middleware to parse URL-encoded bodies
app.use(express.urlencoded());

// Read the comments from the comments.json file
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('An error occurred while reading the comments file');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Write the comments to the comments.json file
app.post('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('An error occurred while reading the comments file');
    } else {
      const comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (err) => {
        if (err) {
          res.status(500).send('An error occurred while writing the comments file');
        } else {
          res.send('Comment added successfully');
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});