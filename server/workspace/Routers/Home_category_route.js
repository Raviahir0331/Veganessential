const Home_Category = require('../Contollers/Home_category_controller');
const express = require('express');
const router = express.Router();

router.post('/add_home_category',Home_Category.add_home_Category);
router.get('/get_home_category',Home_Category.get_home_category);


module.exports = router;