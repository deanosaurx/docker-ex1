const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const devopsStudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

const devopsStudent = new mongoose.model("Student", devopsStudentSchema);

module.exports = devopsStudent;
