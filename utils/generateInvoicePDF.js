const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateInvoicePDF = (invoice) => {

  const doc = new PDFDocument({ margin: 50 });

  const filePath = path.join(
    __dirname,
    `../invoices/invoice-${invoice.invoiceNo}.pdf`
  );

  doc.pipe(fs.createWriteStream(filePath));

  // -----------------------------
  // HEADER
  // -----------------------------
  doc
    .fontSize(20)
    .text("Softech Info Ways", { align: "center" });

  doc
    .fontSize(14)
    .text("Course Invoice", { align: "center" });

  doc.moveDown();

  // -----------------------------
  // INVOICE INFO
  // -----------------------------
  doc.fontSize(12);

  doc.text(`Invoice No: ${invoice.invoiceNo}`);
  doc.text(`Student: ${invoice.student}`);
  doc.text(`Email: ${invoice.email}`);
  doc.text(`Date: ${invoice.date}`);

  doc.moveDown();

  // -----------------------------
  // TABLE HEADER
  // -----------------------------
  doc.text("Courses:", { underline: true });
  doc.moveDown(0.5);

  doc.text(
    "Course        Duration        Fee        Qty        Amount"
  );

  doc.moveDown(0.5);

  // -----------------------------
  // COURSE ROWS
  // -----------------------------
  invoice.courses.forEach((c) => {

    const amount = c.fee * c.qty;

    doc.text(
      `${c.course}        ${c.duration}        ₹${c.fee}        ${c.qty}        ₹${amount}`
    );
  });

  doc.moveDown();

  // -----------------------------
  // TOTALS
  // -----------------------------
  doc.text(`Sub Total: ₹ ${invoice.subTotal}`);
  doc.text(`GST: ₹ ${invoice.gst}`);
  doc.text(`Grand Total: ₹ ${invoice.grandTotal}`);

  doc.end();

  return filePath;
};

module.exports = generateInvoicePDF;