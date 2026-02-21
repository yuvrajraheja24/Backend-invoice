const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./database/db");
const courseRoutes = require("./routes/courseRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const teamRoutes = require("./routes/teamRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("API Running ✅");
});

app.use("/course", courseRoutes);
app.use("/invoice", invoiceRoutes);
app.use("/team", teamRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server Running on ${process.env.PORT} 🚀`)
);