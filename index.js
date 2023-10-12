const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

//connect database
require("./utility/database");

//connect to models
const Product = require("./models/product");

//posisi folder views
app.set("views", path.join(__dirname, "views"));
//menggunakan EJS Template Engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//halaman home
app.get("/", (req, res) => {
  res.send("hello world");
});

//getAllProducts
app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category });
  }else {
    const products = await Product.find({});
  res.render("products/index", { products, category: 'All' });
  }
});

//FormCreateProduct
app.get("/products/create", (req, res) => {
  res.render("products/create");
});

//PostProduct
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect("/products");
});

//getProductById
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/detail", { product });
});

//Form Edit
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

//PUT
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/products/${product._id}`);
});

//Delete
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});
//server running
app.listen(port, () => {
  console.log(`server is running on port http://127.0.0.1:${port}/`);
});
