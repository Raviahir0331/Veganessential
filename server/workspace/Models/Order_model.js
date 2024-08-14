const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  country: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: String },
  address: { type: String, required: true },
  apartment: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  cartItems: [
    {
      img: { type: String, required: true },
      title: { type: String, required: true },
      quantity: { type: Number },
      price: { type: Number },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
