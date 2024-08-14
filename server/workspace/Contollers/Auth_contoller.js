const Auth_Data = require('../Models/Auth_model');

exports.SignUp = async (req, res) => {
    try {
      const newUser = new Auth_Data(req.body);
      const saveuser = await newUser.save();
      res.status(200).json(`Registation succsessfully ${saveuser}`);
    } catch (err) {
      res.status(400).json("something went wrong " + err);
    }
  };
  exports.SignIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Auth_Data.findOne({ email });
      if (!user) {
        res.status(400).json({ message: "Invalid email or password" });
      }
      if (password !== user.password) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      res.json({ message: "Sign-in successful", user });
    } catch (err) {
      res.status(500).json(`something went wrong  ${err}`);
    }
  };