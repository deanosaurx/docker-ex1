const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  const db = await mongoose.connect(process.env.MONGO_DB_URI, {});
  console.log("connected!");
};

module.exports = connectDB;
