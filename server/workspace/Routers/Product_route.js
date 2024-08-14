const Product = require('../Contollers/Product_controller');
const express = require('express');
const router = express.Router();

router.post('/add_product',Product.add_product);
router.get('/get_product',Product.get_product);


module.exports = router;