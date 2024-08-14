const Contact_Us = require('../Models/Contact_model');

exports.Contact_Us = async (req,res)=>{
    try{
 const data = new Contact_Us(req.body);
 const saveData = await data.save();
 res.status(200).json(`Registation successfully ${saveData}`);
}
catch(err){
    res.status(400).json("Something went wrong"+ err);
}
};