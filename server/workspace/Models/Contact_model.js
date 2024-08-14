const moongoose = require('mongoose');
const Contact_Us = new moongoose.Schema({
    name:{
        type:String,
        require:true
        
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number
    },
    message:{
        type:String
    }
});
module.exports = moongoose.model('Contact_Us',Contact_Us);