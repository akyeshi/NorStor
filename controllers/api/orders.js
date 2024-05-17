const Order = require('../../models/order'); 


module.exports = {
  getCart, 
  addToCart, 
  changeQty, 
  checkOut, 
  getOrders, 
}; 



async function getCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart); 
}

async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.productId);
  res.json(cart);
}

async function changeQty(req, res) {
  const cart = await Order.getCart(req.user._id); 
  await cart.setItemQty(req.body.itemId, req.body.newQty); 
  res.json(cart); 
}

async function checkOut(req, res) {
  const cart = await Order.getCart(req.user._id); 
  cart.isPaid = true; 
  await cart.save(); 
  res.json(cart); 
}

// return only the paid list of orders from history
async function getOrders(req, res) {
  const orders = await Order.find({
    user: req.user._id, 
    isPaid: true
  }); 
  res.json(orders); 
}