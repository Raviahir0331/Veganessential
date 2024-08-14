const order = require('../Models/Order_model')
exports.order_checkout = async (req,res)=>{
//     try{
//  const data = new order(req.body);
//  console.log("cartitem data",data)
//  const saveData = await data.save();
// //  console.log("save data ",saveData)
//  res.status(200).json(`Registation successfully ${saveData}`);
// }
// catch(err){
//     res.status(400).json("Something went wrong"+ err);
// }


try {
    const {
      isEmail,
      isCountry,
      isfName,
      islIsName,
      company,
      address,
      apartment,
      city,
      state,
      zip,
      phone,
      cartItem,
    } = req.body;

   
    const newOrder = new order({
      email: isEmail,
      country: isCountry,
      firstName: isfName,
      lastName: islIsName,
      company,
      address,
      apartment,
      city,
      state,
      zip,
      phone,
      cartItems: cartItem,
    });
  

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


