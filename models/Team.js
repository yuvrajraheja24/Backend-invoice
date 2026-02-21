const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("Team", teamSchema);