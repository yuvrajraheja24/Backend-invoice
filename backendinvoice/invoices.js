const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  student: String,
  email: String,
  date: String,
  courses: Array,
  subTotal: Number,
  gst: Number,
  grandTotal: Number,
});

module.exports = mongoose.model("Invoice", invoiceSchema);