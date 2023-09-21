const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static CSS files from 'public' directory
app.use('/css', express.static(path.join(__dirname, 'public')));

// Middleware to serve the app.js from the root directory
app.use('/js', express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
