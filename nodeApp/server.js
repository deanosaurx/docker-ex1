const express = require("express");
require("dotenv/config");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
