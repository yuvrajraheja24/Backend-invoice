const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({

  invoiceNo: Number,
  student: String,
  email: String,
  date: String,

  courses: [
    {
      course: String,
      duration: String,
      fee: Number,
      qty: Number
    }
  ],

  subTotal: Number,
  gst: Number,
  grandTotal: Number

}, { timestamps: true });

module.exports =
  mongoose.model("Invoice", invoiceSchema);