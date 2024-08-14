const mongoose = require("mongoose");

const show_Product = new mongoose.Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
  },
  quntity:{
    type:Number,
    default:1,
  }
});
module.exports = mongoose.model("show_products", show_Product);
