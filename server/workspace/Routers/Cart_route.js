const cart_controller = require('../Contollers/Cart_controller');

const express = require('express');
const router = express.Router();

router.post('/add_cart',cart_controller.add_cart);
router.get('/get_cart', cart_controller.get_cart);
router.delete('/delete/:id',cart_controller.delete_cart)
router.put('/update/:id',cart_controller.update_cart);


module.exports = router;