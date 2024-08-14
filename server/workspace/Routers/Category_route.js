const Category = require('../Contollers/Category_controller');
const express = require('express');
const router = express.Router();

router.post('/add_category',Category.add_Category);
router.get('/all_category',Category.get_category);


module.exports = router;