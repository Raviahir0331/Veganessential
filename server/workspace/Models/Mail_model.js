const mongoose = require("mongoose");

const nodeMailer = new mongoose.Schema({
  
  email:{
    type:String
}
}
);
module.exports = mongoose.model('Emails',nodeMailer);