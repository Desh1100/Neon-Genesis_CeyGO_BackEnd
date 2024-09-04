const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Place = require("./models/place");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, Tourist Backend!");
});

// API Route to Get Place Data
app.get("/places", async (req, res) => {
  try {
    const places = await Place.findAll();
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
