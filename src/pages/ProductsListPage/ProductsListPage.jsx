

import { useState, useEffect, useRef } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductsListPage.css';


export default function ProductsListPage({ products, searchText }) {

  const [filteredProducts, setFilteredProducts] = useState(products); 

  useEffect(() => {
    const re = new RegExp(`.*${searchText}.*`, "i"); 
    const tempProducts = products.filter(product => re.test(product.title)); 
    setFilteredProducts(tempProducts); 
  }, [searchText, products]);

  // console.log('------------ products: \n', products);

  return (
    <>
      <h1>List of Products</h1>
      <div className="products-container">
        {filteredProducts.map((product) =>
          <ProductCard key={product._id} product={product} />
        )}
      </div>
    </>
  )
}