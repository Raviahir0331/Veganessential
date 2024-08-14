const cartItem = require("../Models/Cart_model");

exports.add_cart = async (req, res) => {
  try {
    const add_data = new cartItem(req.body);
    const save_data = await add_data.save();
    res.status(200).json({ message: "add_cart successfully", save_data });
  } catch (err) {
    res
      .status(400)
      .json({ message: "something went wrong, cannot add_cart", error: err });
  }
};

exports.get_cart = async (req, res) => {
  try {
    const data = await cartItem.find({});
    res.status(200).json({ message: "Data retrieved successfully", data });
  } catch (err) {
    res
      .status(400)
      .json({
        message: `Something went wrong, can't get category`,
        error: err,
      });
    console.log("Can't get data", err);
  }
};

exports.delete_cart = async (req, res) => {
  try {
    const deleteItems = await cartItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Items Removed", deleteItems });
  } catch (error) {
    res.status(400).json({ message: "something went wrong", error: error });
    console.log(error);
  }
};
exports.update_cart = async (req, res) => {
  try {
    const update_items = await cartItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
     if(!update_items){
      return res.status(404).json("Item not found");
     }
    res.status(200).json({ message: "item update sucsessfully", update_items });
  } catch (err) {
    res.status(400).json({message:`something went wrong`,err });
  }
};
