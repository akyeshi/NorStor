


const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const tagSchema = new Schema({
  name: String, 
  
}, {
  timestamps: true
})


// compile the product schema into a product model and export it 
module.exports = mongoose.model('Tag', tagSchema); 
