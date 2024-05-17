



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
// import './OrderHistoryPage.css';
import OrderList from '../../components/OrderList/OrderList';
// import OrderListPage from '../OrderListPage/OrderListPage';

export default function OrderHistoryPage({ user, setUser }) {

  const [orders, setOrders] = useState([]);
  // if it is an object, initialize to null; array initialize to []
  const [selectedOrder, setSelectedOrder] = useState(null); // css 'selected' class attribute 

  useEffect(() => {
    async function getAllOrders() {
      const allOrders = await ordersAPI.getAllPaidOrders(); 
      setOrders(allOrders); 
    }; 
    getAllOrders(); 
  }, []);

  return (
    <main className="OrderHistoryPage">
      <OrderList
        orders={orders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />

      {/* <OrderDetail order={selectedOrder} /> */}
    </main>
  );
}
