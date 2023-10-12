const mongoose = require("mongoose");
//membuat schema dengan object
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Baju', 'Celana','Aksesoris', 'Sepatu'],
  }
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
