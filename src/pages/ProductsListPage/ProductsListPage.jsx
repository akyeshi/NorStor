

import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductsListPage.css';


export default function ProductsListPage({ products, setProducts }) {

  useEffect(() => {
    async function getProducts() {
      // avoid naming conflict with 'products' state 
      const fetchedProducts = await productsAPI.getAllProducts();
      console.log('hello fetchedProducts ---: ', fetchedProducts);
      setProducts(fetchedProducts);
    };
    getProducts();
  }, []);

  console.log('------------ products: \n', products);

  return (
    <>
      <h1>List of Products</h1>
      <div className="products-container">
        {products.map((product) =>
          <ProductCard key={product._id} product={product} />
        )}
      </div>
    </>
  )
}