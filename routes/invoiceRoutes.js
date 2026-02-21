const router = require("express").Router();
const Invoice = require("../models/Invoice");
const generateInvoicePDF = require("../utils/generateInvoicePDF");

// Add Invoice
router.post("/", async (req, res) => {
  const invoice = await Invoice.create(req.body);
  res.json(invoice);
});

// Get All Invoices
router.get("/", async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
});

// Get Single
router.get("/:id", async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);
  res.json(invoice);
});

// Update
router.put("/:id", async (req, res) => {
  await Invoice.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Updated" });
});

// Delete
router.delete("/:id", async (req, res) => {
  await Invoice.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});
router.post("/", async (req, res) => {

    const invoice = await Invoice.create(req.body);
  
    const pdfPath = generateInvoicePDF(invoice);
  
    res.json({
      msg: "Invoice Saved + PDF Generated ✅",
      pdfPath
    });
  });

module.exports = router;