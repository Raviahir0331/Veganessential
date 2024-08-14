const show_Product = require('../Contollers/Show_product');
const express = require('express');
const router = express.Router();

router.post('/add_show_product',show_Product.show_product_add);
router.get('/get_show_product',show_Product.show_product_get);


module.exports = router;