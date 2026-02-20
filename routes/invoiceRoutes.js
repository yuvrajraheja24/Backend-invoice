const router = require("express").Router();
const Invoice = require("../models/Invoice");

// Save Invoice
router.post("/", async (req, res) => {
  const data = await Invoice.create(req.body);
  res.json(data);
});

// Get All
router.get("/", async (req, res) => {
  const data = await Invoice.find();
  res.json(data);
});

// Get Single
router.get("/:id", async (req, res) => {
  const data = await Invoice.findById(
    req.params.id
  );
  res.json(data);
});

// Update
router.put("/:id", async (req, res) => {
  const data =
    await Invoice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(data);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Invoice.findByIdAndDelete(
    req.params.id
  );

  res.json({ msg: "Deleted" });
});

module.exports = router;