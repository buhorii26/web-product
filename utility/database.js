//connect to mongoDb
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shop_db")
  .then(() => {
    console.log("Database connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
