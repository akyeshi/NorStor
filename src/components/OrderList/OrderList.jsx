

import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css';

export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {

  const orderItems = orders.map((order) =>
    <OrderListItem
      order={order}
      isSelected={order === selectedOrder} key={order._id}
      setSelectedOrder={setSelectedOrder}
    />)

  return (
    <main className="order-list">
      <h1>Order History</h1>
      {orders.length ?
        orderItems
        :
        <span className="no-orders" >No Orders Yet</span>
      }
    </main>
  );
}