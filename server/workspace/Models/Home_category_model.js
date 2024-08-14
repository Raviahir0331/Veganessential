const mongoose = require("mongoose");

const Home_category = new mongoose.Schema({
  img:
    {
       type:String
    },
  title:{
    type:String
}
}
);
module.exports = mongoose.model('Home_category',Home_category);