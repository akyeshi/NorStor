
const Product = require('../../models/product'); 


module.exports = {
  index, 
  search, 
  show, 
}; 


async function index(req, res) {
  const products = await Product.find({}); 
  // console.log('backend product lists ---: \n', products); 
  res.json(products); 
}; 

async function show(req, res) {
  const product = await Product.findById(req.params.id); 
  console.log('one product from backend: ', product); 
  res.json(product); 
}


async function search(req, res) {
   // req.params.searchValue
  // const { query } = req.query; 
  console.log('req.params: ', req.params); 
  
  const { searchValue } = req.params; 
  // console.log(searchValue); 

  const searchedProducts = await Product.find({
    // $regex: MongoDB query operator used to perform regex pattern matching on a field 
    title: { $regex: searchValue, $options: 'i'}  // i (optional parameter specifying search to be case-insensitive)
  }); 
  // console.log('searched results: ', searchedProducts.length); 
  res.json(searchedProducts); 
}