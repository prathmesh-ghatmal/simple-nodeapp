const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.post("/welcome", (req, res) => {
  const name = req.body.username || "Guest";
  res.send(`
    <h2 style="font-family:sans-serif;">👋 Hello, ${name}!</h2>
    <p style="font-family:sans-serif;">Welcome to my Node.js web app running on <b>${process.platform}</b>!</p>
    <a href="/">⬅️ Go Back</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
