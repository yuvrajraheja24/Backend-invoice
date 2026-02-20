const router = require("express").Router();
const Course = require("../models/Course");

// Add
router.post("/", async (req, res) => {
  const data = await Course.create(req.body);
  res.json(data);
});

// Get
router.get("/", async (req, res) => {
  const data = await Course.find();
  res.json(data);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;