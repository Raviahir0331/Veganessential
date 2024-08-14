const express = require('express');
const router = express.Router();
const  order  = require('../Contollers/Order_contoller'); // Adjust the path accordingly

// Define the route to save order data
router.post('/order', order.order_checkout);

module.exports = router;
