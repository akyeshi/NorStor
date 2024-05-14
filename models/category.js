

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const categorySchema = new Schema({
  name: String, 
})



// compile the product schema into a product model and export it 
module.exports = mongoose.model('Category', categorySchema); 