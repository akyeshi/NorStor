import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-services';

import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import ProductsListPage from '../ProductsListPage/ProductsListPage';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';

export default function App() {
  // user = {name: 'Dorjee', email: 'dorjee@gmail.com', _id: '6636cfcfd3ee0ebd4cb33643', createdAt: '2024-05-05T00:16:15.806Z', updatedAt: '2024-05-05T00:16:15.806Z', …}
  // user object has password key deleted 
  const [user, setUser] = useState(getUser()); // users-services module from utilities folder 
  const [products, setProducts] = useState([]);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {user ?
        <>
          <Routes>
            <Route path="/products" element={<ProductsListPage products={products} setProducts={setProducts} />} />
            <Route path="/products/:productId" element={<ProductDetailPage products={products} setProducts={setProducts} />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


