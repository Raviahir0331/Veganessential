const Product = require('../Models/Product_model');

exports.add_product = async (req, res) => {
  try {
    const add_product = new Product(req.body);
    const save_product = await add_product.save();
    res.status(200).json({ message: `Product added successfully`, save_product });
  } catch (err) {
    res.status(400).json({ message: `Something went wrong, can't add Product`, error: err });
    console.log("Something went wrong", err);
  }
}

exports.get_product = async (req, res) => {
  try {
    const data = await Product.find({});
    console.log("all data", data);
    res.status(200).json({ message: `Product retrieved successfully`, data });
  } catch (err) {
    res.status(400).json({ message: `Something went wrong, can't get Product`, error: err });
    console.log("Can't get data", err);
  }
}
