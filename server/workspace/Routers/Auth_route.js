const Auth_controller = require('../Contollers/Auth_contoller');

const express = require("express");
const router = express.Router();
router.post("/signup",Auth_controller.SignUp );
router.post("/signin",Auth_controller.SignIn );
module.exports = router;
