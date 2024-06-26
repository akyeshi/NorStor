const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

// GET /api/products
router.get('/', productsCtrl.index);

// GET /api/products/:id
router.get('/:id', productsCtrl.show);

// GET /api/products/search?title
router.get('/search/:searchValue', productsCtrl.search); 

module.exports = router;
