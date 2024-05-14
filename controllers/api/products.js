
const Product = require('../../models/product'); 


module.exports = {
  index, 
}; 


async function index(req, res) {
  const products = await Product.find({}); 
  console.log('backend product lists ---: \n', products); 
  res.json(products); 
}; 