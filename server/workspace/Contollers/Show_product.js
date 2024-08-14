const show_Product = require('../Models/Show_product')

exports.show_product_add = async (req, res) => {
  try {
    const add_product = new show_Product(req.body);
    const save_product = await add_product.save();
    res.status(200).json({ message: `Product added successfully`, save_product });
  } catch (err) {
    res.status(400).json({ message: `Something went wrong, can't add Product`, error: err });
    console.log("Something went wrong", err);
  }
}

exports.show_product_get = async (req, res) => {
  try {
    const data = await show_Product.find({});
    res.status(200).json({ message: `Product retrieved successfully`, data });
  } catch (err) {
    res.status(400).json({ message: `Something went wrong, can't get Product`, error: err });
    console.log("Can't get data", err);
  }
}
