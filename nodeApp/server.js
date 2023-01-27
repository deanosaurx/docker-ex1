const express = require("express");
require("dotenv/config");
const connectDB = require("./config/db");
const devopsStudent = require("./models/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/student", (req, res) => {
  res.sendFile("student.html", { root: __dirname });
});

app.post("/student", async (req, res) => {
  const { name, age } = req.body;
  const student = await devopsStudent.create({ name, age });

  res.status(201).json({ student });
});

app.get("/students", async (req, res) => {
  const students = await devopsStudent.find();
  console.log(students);
  res.status(200).send(students);
});

async function connections() {
  await connectDB();
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
}

connections();
