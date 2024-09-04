const express = require("express");
const Place = require("./models/Place");
const router = express.Router();

// Get all places
router.get("/places", async (req, res) => {
  const places = await Place.findAll();
  res.json(places);
});

// Get a single place by ID
router.get("/places/:id", async (req, res) => {
  const place = await Place.findByPk(req.params.id);
  if (place) {
    res.json(place);
  } else {
    res.status(404).send("Place not found");
  }
});

// Create a new place
router.post("/places", async (req, res) => {
  const { name, description, imageUrl } = req.body;
  const newPlace = await Place.create({ name, description, imageUrl });
  res.status(201).json(newPlace);
});

module.exports = router;
