const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders
// router.get('/', ordersCtrl.index);

// GET /api/orders/:id
// router.get('/:id', ordersCtrl.show);

// POST /api/orders/cart/products/:productId
router.post('/cart/products/:productId', ordersCtrl.addToCart); 

// 
router.get('/cart', ordersCtrl.getCart); 

router.put('/cart/qty', ordersCtrl.changeQty); 

router.post('/cart/checkout', ordersCtrl.checkOut); 

router.get('/', ordersCtrl.getOrders); 

module.exports = router;
