const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 



// Review Schema 
const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
  }, 
  rating: Number, 
  comment: String, 
  reviewImgs: [String], 
}, {
  timestamps: true
})


// define user schema and add required fields/validation properties on the user schema/model 
const productSchema = new Schema({
  title: {
    type: String, 
  }, 
  description: {
    type: String, 
    trim: true,     // Mongoose trim whitespaces before and after the string before saving 
  }, 
  price: Number, 
  stock: Number, 
  images: [String], 
  category: {
    type: Schema.Types.ObjectId, 
    ref: 'Category', 
  }, 
  reviews: [reviewSchema], 
  tags: [{
    type: Schema.Types.ObjectId, 
    ref: 'Tag'
  }]
}, {
  timestamps: true, 
}); 


module.exports = productSchema;