const mongoose = require('mongoose');
const AuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        require: true,
      }
});
module.exports = mongoose.model('Auth_Data',AuthSchema);


