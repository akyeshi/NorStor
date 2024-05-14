


const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


// Review Schema 
const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, 
  rating: Number, 
  comment: String 
}, {
  timestamps: true
})


// define user schema and add required fields/validation properties on the user schema/model 
const productSchema = new Schema({
  title: {
    type: String, 
    required: true
  }, 
  description: {
    type: String, 
    trim: true,     // Mongoose trim whitespaces before and after the string before saving 
    required: true 
  }, 
  price: Number, 
  quantity: Number, 
  images: [String], 
  category: {
    type: Schema.Types.ObjectId, 
    ref: 'Category', 
    required: true 
  }, 
  reviews: [reviewSchema], 
  tags: [String]
}, {
  timestamps: true, 
}); 


// compile the product schema into a product model and export it 
module.exports = mongoose.model('Product', productSchema); 

