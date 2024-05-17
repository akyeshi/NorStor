import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-services';

import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import ProductsListPage from '../ProductsListPage/ProductsListPage';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import OrderListPage from '../OrderListPage/OrderListPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import * as productsAPI from '../../utilities/products-api';


export default function App() {
  // user = {name: 'Dorjee', email: 'dorjee@gmail.com', _id: '6636cfcfd3ee0ebd4cb33643', createdAt: '2024-05-05T00:16:15.806Z', updatedAt: '2024-05-05T00:16:15.806Z', …}
  // user object has password key deleted 
  const [user, setUser] = useState(getUser()); // users-services module from utilities folder 
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    async function getAllProducts(){
      const products = await productsAPI.getAllProducts(); 
      setProducts(products); 
    }
    getAllProducts(); 
  }, [])

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} searchText={searchText} setSearchText={setSearchText} />
      {user ?
        <>
          <Routes>
            <Route path="/products" element={<ProductsListPage products={products} searchText={searchText} />} />
            <Route path="/products/:productId" element={<ProductDetailPage products={products} setProducts={setProducts} />} />
            <Route path="/cart"   element={<OrderListPage />} />
            <Route path="/orders"   element={<OrderHistoryPage />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


