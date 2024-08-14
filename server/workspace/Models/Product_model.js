const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required:true
  },
  status: {
    type: String,
    required:true
  },
});
module.exports = mongoose.model("Product", Product);
