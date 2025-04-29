// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like CSS, JS, images if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Aiminions landing page running at http://localhost:${port}`);
});
