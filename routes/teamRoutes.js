const router = require("express").Router();
const Team = require("../models/Team");

// Add
router.post("/", async (req, res) => {
  const data = await Team.create(req.body);
  res.json(data);
});

// Get All
router.get("/", async (req, res) => {
  const data = await Team.find();
  res.json(data);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;