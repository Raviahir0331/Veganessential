const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  quntity:{
    type:Number,
    default:1,
  }
});

module.exports = mongoose.model("cartItem", cartItemSchema);
