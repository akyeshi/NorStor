require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Tag = require('./models/tag'); 
const Product = require('./models/product');
const data = require('./data'); 

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create(data.category);

  await Tag.deleteMany({}); 
  const tags = await Tag.create(data.tags)

  await Product.deleteMany({});
  const products = await Product.create([
    {
      title: "Light Pink Red Pearls Beaded Choker Necklace, Red Statement Necklace, Stones Pearls Necklace, Valentines Day Gift, Mom Daughter Gift, Niece", 
      description: 
      `
      The 'rojo' statement necklace features a combination of recycled glass beads, silver beads and natural pearls.
      ― DETAILS ―
      • recycled glass beads, sterling silver spheres and natural pearls
      • sterling silver findings and accents
      • necklace is 16 inches long + it has an extension of 2 inches
      • ideal to layer with other necklaces or wear solo
      • slow made with attention to details in our home studio based in Puerto Rico
      • each comes with our branded packaging, ready for gift giving and it includes a polishing pad for maintenance
      `, 
      price: 120, 
      stock: 8, 
      images: 
      [
        "https://i.etsystatic.com/8924622/r/il/d66598/4326514702/il_1588xN.4326514702_2tj3.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "This is the most beautiful delicate necklace I’ve ever owned. The owner did what I asked and was great to work with. Shipping was fast."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

  ]);


  console.log(categories); 
  console.log(products); 

  process.exit();

})();