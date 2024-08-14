const Home_Category = require('../Models/Home_category_model');

exports.add_home_Category = async (req, res) => {
  try {
    const add_Category = new Home_Category(req.body);
    const save_category = await add_Category.save();
    res.status(200).json({ message: `Category added successfully`, save_category });
  } catch (err) {
    res.status(400).json({ message: `Something went wrong, can't add category`, error: err });
    console.log("Something went wrong", err);
  }
}

exports.get_home_category = async (req, res) => {
  try {
    const data = await Home_Category.find({});
    console.log("all data", data);
    res.status(200).json({ message: `Category retrieved successfully`, data });
  } catch (err) {
    res.status(400).json({ message: `Something went wrong, can't get category`, error: err });
    console.log("Can't get data", err);
  }
}
