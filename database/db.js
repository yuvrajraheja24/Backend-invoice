
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://rahejayuvraj24_db_user:yuvraj%40123@cluster1.et9ptoc.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
