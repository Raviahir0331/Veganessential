const Contact_controller = require('../Contollers/Contact_controller');

const express = require('express');
const router = express.Router();
router.post('/register',Contact_controller.Contact_Us);
module.exports = router