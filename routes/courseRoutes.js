const router = require("express").Router();
const Course = require("../models/Course");

// Add Course
router.post("/", async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

// Get All Courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Delete Course
router.delete("/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;