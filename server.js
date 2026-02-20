require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB =
  require("./database/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use(
  "/api/team",
  require("./routes/teamRoutes")
);

app.use(
  "/api/course",
  require("./routes/courseRoutes")
);

app.use(
  "/api/invoice",
  require("./routes/invoiceRoutes")
);

// Test
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(5000, () =>
  console.log("Server Started 🚀")
);