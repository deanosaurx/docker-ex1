const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// const connectDB = async () => {
//   const db = await mongoose.connect(process.env.MONGO_DB_URI, {});
//   console.log("connected!");
// };
const connectDB = async () => {
  try {
    const db = await mongoose.connect(`mongodb://127.0.0.1:27017/devops`, {});
    console.log(`connected on ${db.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
