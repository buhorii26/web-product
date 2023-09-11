const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

//connect to mongoDb
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/onlineshop_db", {})
  .then(() => {
    console.log("Database connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//posisi folder views
app.set("views", path.join(__dirname, "views"));
//menggunakan EJS Template Engine
app.set("view engine", "ejs");

//halaman home
app.get("/", (req, res) => {
  res.send("hello world");
});

//server running
app.listen(port, () => {
  console.log(`server is running on port http://127.0.0.1:${port}/`);
});
