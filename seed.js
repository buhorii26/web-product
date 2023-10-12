
//mongoose
const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/shop_db")
  .then(() => {
    console.log("Database connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const seedProducts = [
  {
    name: "Celana Chino",
    brand: "Levi's",
    price: 900000,
    color: "krem",
    category: "Sepatu",
  },
  {
    name: "Baju Loafers",
    brand: "Adidas",
    price: 8000000,
    color: "coklat",
    category: "Baju",
  },
  {
    name: "Celana Sportwear",
    brand: "Adidas",
    price: 1200000,
    color: "putih",
    category: "Celana",
  },
  {
    name: "Jam Tangan Casio",
    brand: "Casio",
    price: 900000,
    color: "krem",
    category: "Aksesoris",
  },
];

Product.insertMany(seedProducts).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
