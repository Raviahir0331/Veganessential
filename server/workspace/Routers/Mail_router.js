const transpoter = require("../Contollers/Mail_controller");
const express = require("express");
const router = express.Router();

router.post("/mail", transpoter.transporter_email);

module.exports = router;
