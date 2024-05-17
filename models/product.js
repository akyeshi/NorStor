

const mongoose = require('mongoose'); 
const productSchema = require('./productSchema')


// compile the product schema into a product model and export it 
module.exports = mongoose.model('Product', productSchema); 

