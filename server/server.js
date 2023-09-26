require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const spotifyService = require("./utils/spotifyService");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// client is listen in 3000 and server is lisent in 3001
app.use(cors({ origin: "http://localhost:3002" }));

app.use(express.json()); // To handle JSON requests
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

app.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    const results = await spotifyService.searchMusic(query);
    res.json(results);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
