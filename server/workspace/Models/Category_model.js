const mongoose = require("mongoose");

const Category = new mongoose.Schema({
  img:
    {
       type:String
    },
  title:{
    type:String,
    
  },
  price :{
    type: Number, 
  }
});
module.exports = mongoose.model('Category',Category);
