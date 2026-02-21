const router = require("express").Router();
const Team = require("../models/Team");

// Add Team Member
router.post("/", async (req, res) => {
  const member = await Team.create(req.body);
  res.json(member);
});

// Get All Team Members
router.get("/", async (req, res) => {
  const members = await Team.find();
  res.json(members);
});

// Update Team Member
router.put("/:id", async (req, res) => {
  await Team.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Updated" });
});

// Delete Team Member
router.delete("/:id", async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;