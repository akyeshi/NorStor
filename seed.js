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
      price: 120.00, 
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
// 2 [done]

    {
      title: "Natural Massage Oil | Handmade Massage Lotion - Handcrafted Rose Petals Massage Oil - Valentines Day gift lovers - Romantic Gift under 30", 
      description: 
      `
      Immerse your skin in the calming and healing benefits of liquid coconut oil and soothing essential oils that are gentle enough for even the most sensitive skin. This relaxing massage oil is handcrafted with purifying essential oils of bergamot, lemon and lavender.
      dimensions
      volume: 120 ml | 4 oz
      ingredients
      liquid coconut oil, rose petals, essential oils of lemon, lavender and bergamot. 
      `, 
      price: 27.32, 
      stock: 5, 
      images: 
      [
        "https://i.etsystatic.com/8924622/r/il/1cdbb0/4526018248/il_1588xN.4526018248_jaq1.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "So cute! Second time buying this one my first one lasted over a year i wore it everyday even showered with it and didnt turn rusty. i took it off once and lost it lol."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

// 3 [done]
    {
      title: "Custom Wedding Neon Sign", 
      description: 
      `
        ♥ This beautifully neon sign is perfect for your special day ♥

        - Better Together LED Neon Sign in your choice of color -
    
        Traditional neon is made out of glass that is bent to create its shape. LED neon is made out of flexible LED lights that are encased in a PVC jacket. While both pieces glow, LED neon is durable, cost-effective and an energy-efficient alternative to the classic glass neon that we all love. If used correctly our neon range should last 50,000+hrs
    
        ♥ MADE FROM
        13mm Flexible LED tubing mounted onto a 4mm acrylic backing.
        Our Neons are made to suit the purchasing countries' voltage and plug style and will come with your local plug type.
    
        ♥ DIMENSIONS:
        This neon sign measures: 31.5" x 31" (800mm x 780mm) making it a nice large centerpiece for your special day.
    
        ♥ LEAD TIME
        - Please allow up to 4-6 weeks for production time and shipping as this product is made to order.
    
        ♥ WHAT'S INCLUDED?
        Neon Sign Customized to Your Specifications
        Power Supply and Adaptor
        Dimmer Switch
        Drill holes for installation
    
        ♥ NOTES:
        - Listing image is in our warm white colour.
        - Our LED neon is handmade by bending material into shapes. The nature of this process means that there are some bends, curves and sizes we just can’t make.
        We’ll let you know when we run into this with your design!
    
        ♥ INSTALLING MY NEON
        Our Neons are surprisingly light and on average weigh 6-10lbs (3-5kg)
        They come with pre-drilled holes in the acrylic backing for easy hanging.
    
        Hang your neon with hooks; wire or heavy-duty removable hooks.
    
        Suitable hanging methods:
        - Fishing wire (knotted with fisherman’s knots)
        - Thin wire
        - Hooks
        - Rope (correctly knotted)
        - 3m heavy-duty removable hooks (available from your local hardware store)
    
        ♥ LIGHTING UP MY NEON
        Lighting up your neon is easy! Our Neons plug into the wall and do not come with a battery pack (for very small neons we can offer a battery pack).
        Your custom neon order will include:
        1 x Clear cord 1-2 metres attached to the sign (depending on the size of the sign)
        1 x Adaptor + Transformer (compatible with your country) with a 1-2 meter cord, which connects to the clear cord and plugs into the wall.
      `, 
      price: 589.85, 
      stock: 2, 
      images: 
      [
        "https://i.etsystatic.com/19897516/r/il/32f154/5912421278/il_1588xN.5912421278_kghu.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "Loved our sign!!! 36in Neutral white and in font Hesterica. Tammy was so helpful and quick with answers. We needed our sign in one month, she got it to us in 2 weeks. It was just as we expected."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

// 4 [done]
    {
      title: "Custom Scent - Aroma Candle with Rose petals 7oz - Hand poured Candle - Valentine’s Day gift - Housewarming - Glass Container Candle", 
      description: 
      `
        - HANDCRAFTED IN CHARLOTTE, NORTH CAROLINA, USA.
        - ALL-NATURAL SOY WAX.
        - 100% COTTON WICK.
        - ECO-FRIENDLY & SUSTAINABLE WAX ONLY.
        - PHTHALATE-FREE, PARAFFIN-FREE.
        Burn in increments of 4 hours for best results. Trim wicks to 1/4" before each use.
        Please also be advised "frosting" may occur and this is not a fault in the candle. This is a natural effect of using soy wax and does not, in any way, impact the performance of your candle.
        Due to the design of our candle, we recommend placing the candle on top of a dish or plate to prevent wax from coming in contact with your surfaces.
        Because all candles are 100 percent handmade, each candle will have minor imperfections by nature and color may slightly vary.
        For irregular shaped candles, we cannot guarantee that each one will be fully burned. 
      `, 
      price: 27.99, 
      stock: 20, 
      images: 
      [
        "https://i.etsystatic.com/15246890/r/il/793d83/4586763577/il_1588xN.4586763577_ci9w.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "The picture doesn't even do these justice! Sooo pretty! Nothing but beautiful, quality beads throughout the entire strand. Thanks!."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 
// 5 [done]

    {
      title: "Custom Mens Necklace - Old English Letter Necklace - Gold Mens Necklace - Father's Day Gift - Personalized Mens Necklace - Gift for Him", 
      description: 
      `
        Made from 100% 14k Gold Filled (NOT gold vermeil) or Sterling Silver components
        All letter charms are made in-house and are made to order just for you from our studio located in beautiful Vancouver, BC :)   
        All raw materials are sourced from the US and are very high quality. Durable enough for everyday wear!
        Each letter charm is approx. 20mm long and 12mm wide but size does vary depending on the letter. Please refer to photos above. Please also note that the alphabet shown is for ILLUSTRATION ONLY and is not an exact representation. Each charm is cut from a 20 gauge sheet. 
        The ball chain is 1.5mm wide and the flat curb chain is 1mm wide. Please contact us if you would like a different style of chain (additional costs may apply).
        🎁 Comes ready to gift
      `, 
      price: 84.31, 
      stock: 15, 
      images: 
      [
        "https://i.etsystatic.com/15246890/r/il/3881a3/3987905350/il_1588xN.3987905350_4h3u.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "This doesn’t look at all like how the picture the font is completely different. There is no outline border and looks very cheap and I’m sad. Why can’t you sell things that match the picture exactly that’s why people purchase it based off of pictures but thanks for ruining Valentine’s Day gifts.."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

// 6 [done]
    {
      title: "Nature Engagement Ring, Mountain Engagement Ring, Nature Diamond Ring, Diamond Mountain Ring, Mountain Wedding Ring", 
      description: 
      `
        Nature Engagement Ring, Mountain Engagement Ring, Nature Diamond Ring, Diamond Mountain Ring, Mountain Wedding Ring
        Celebrate the start of your new adventure with this elegant diamond mountain ring.
        From the top down, it looks like a sparkling diamond band. But tilt your finger just so and you’ll see its majestic peaks and valleys, reminding you of your resilient spirit.
        Whether you’re saying “I do”, taking a risk to do what you love, or making big changes to live the life you want, let this ring inspire you to brave that worthwhile journey.
      `, 
      price: 475.00, 
      stock: 0, 
      images: 
      [
        "https://i.etsystatic.com/14110719/r/il/d5e2cf/5327439897/il_1588xN.5327439897_3h09.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "Lovely! A matching gift for my sister and I. Fits on my wrist wonderfully. I can't wait to give the other to my sister. Thank you so much!."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

// 7 [done]
    {
      title: "Cozy Socks | Abstract Art Socks | Pink Socks | Gift for Her | Scribble Design", 
      description: 
      `
        PAR KER made abstract art socks are a perfect and stylish, accessory for your feet.

        Made with high-quality, durable cotton, these classic crew-length style socks are perfect for those that are on their feet all day.

        Expertly crafted and carefully designed with some of our best selling hand-painted pieces of art, these jacquard woven - full cushion socks comfortably make you feel unique and one of a kind just like the chic modern design that bears your feet.

        Made here in the USA

        Designed by hand in San Diego, CA

        Machine Washable with Cold Water

        Tumble Dry Low

        Materials:
        73% Cotton
        15% Polyester
        9% Nylon
        2% Rubber
        1% Spandex
      `, 
      price: 24.00, 
      stock: 30, 
      images: 
      [
        "https://i.etsystatic.com/12140672/r/il/d3cb60/1963173703/il_1588xN.1963173703_bpxl.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "Very soft and comfortable socks. Would definitely buy another pair!."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 
// 8 [done]

    {
      title: "I Dig You Hand Trowel Wood Plant Pick [Valentine’s Day Gift, Encouraging, Uplifting, Houseplant Gifts for Her, Plant Lover, Birthday]", 
      description: 
      `
      Whether you plan to send a subtle message to your crush or a cute reminder to your partner, this punny plant pick will let them know how much you care. We hope you make a deep impression with this playful gift!

      Spruce up your space or surprise your favorite people with these plant picks as a gesture of your ever growing love. Hereafter plant picks offer playful statements of affection, uplifting messages of personal growth, as well as a plant pun or two. A fun way to add personality to your houseplants, just stick them in the soil with your plant bebes and admire them every time you pass by. Whether you're a plant novice or have named all the plants in your collection, these plant picks will bring whimsy and joy into your everyday.

      Product Details
      • Total Plant Pick Height: approximately 3.5-4"
      • Paired with a fun, colorful paper backing that is ready to gift
      • Recommended to use with indoor plants
      • Made with certified sustainable American hardwood
      • Made in Los Angeles, CA
      `, 
      price: 9.00, 
      stock: 80, 
      images: 
      [
        "https://i.etsystatic.com/6748817/r/il/f1aa1b/3081997883/il_1588xN.3081997883_snra.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "Workmanship very nice. Very cute little item to put in flower containers.."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

// 9 [done]
    {
      title: "Glass Blown Neapolitan Mini Vase", 
      description: 
      `
      Please note that the vase you will receive may not be the one pictured here, but one that is very similar as they are all one of a kind.

      This is a one of a kind glass blown mini vase handmade with love in Vancouver, BC.

      This vase is a colourful creation with colours of milky white, raspberry, flamingo, and mocha.

      Vase measures approximately 2-3” H X 1.5-2” D

      Truly one of a kind art glass for your home! Perfect little vase for a flower or two.

      Please note this listing is for one vase :) Thanks!
      `, 
      price: 50.74, 
      stock: 42, 
      images: 
      [
        "https://i.etsystatic.com/12140672/r/il/ae21cb/2223593107/il_1588xN.2223593107_rh4v.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "Excellent craftsmanship and gorgeous little vase! I bought this ahead of the holidays because I knew this would make a great present and it shipped super fast, which is a plus.."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

// 10 [done]
    {
      title: "heart mittens, knit mittens for women, wool mittens, winter accessories, fleece lined mittens, birthday gift, valentine’s day gift", 
      description: 
      `
      Handmade and shipped from Winnipeg, Manitoba, Canada!

      These guys are called Little Heart Mittens! These knit mittens are made from material that is 20% wool and 80% acrylic so they will help keep your little fingers warm during those cold spells! This little winter accessory is perfect as a valentines day gift, birthday gift, or just a simple gift for her. All mittens now come fleece-lined! Fleece color will either be black, white, or grey - depending on the main color of the mitten.

      SIZING
      This item comes in a ONE SIZE ONLY. See below for measurements. This is the measurement from the outside of the mitt. The inside of the mitt with fleece will vary 0.5-1in. tighter. The cuff of the mittens are not fleeced.
      9in. high (including cuff)
      7in. high (excluding cuff)
      2.5in. thumb inseam
      3.75in. hand width
      `, 
      price: 46.84, 
      stock: 15, 
      images: 
      [
        "https://i.etsystatic.com/35558980/r/il/a6cbfd/4481663808/il_1588xN.4481663808_jl0m.jpg"
      ], 
      category: categories[10], 
      reviews: 
      [
        {
          rating: 5, 
          comment: "Ah! I am SO happy for these mittens 🥰 They are so well made, thick and very warm. The fleece lining is such a nice touch. Absolutely adorable! Very happy with this purchase.."
        }
      ], 
      tags: [tags[3], tags[8]]
    }, 

// 11 []
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
      price: 120.00, 
      stock: 8, 
      images: 
      [
        "https://i.etsystatic.com/12565301/r/il/b33b60/1900093743/il_1588xN.1900093743_t756.jpg"
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

// 12 []
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
      price: 89.00, 
      stock: 8, 
      images: 
      [
        "https://i.etsystatic.com/35558980/r/il/572ed5/4481664132/il_1588xN.4481664132_ilsc.jpg"
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