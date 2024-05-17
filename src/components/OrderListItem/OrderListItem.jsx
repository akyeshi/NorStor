
import './OrderListItem.css'; 
export default function OrderListItem({ order, isSelected, setSelectedOrder }) {
  return (
    <div 
      id="order-history"
      className={`OrderListItem${isSelected ? ' selected' : ''}`}
      onClick={() => setSelectedOrder(order)}
    >
      <div style={{marginBottom: '15px'}}>
        <div>Order Id: <span className="smaller">{order.orderId}</span></div>
        <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>{order.orderTotal.toFixed(2)}</div>
        <div className="smaller">{order.orderQty} Item{order.orderQty > 1 && 's'}</div>
      </div>
    </div>
  );
}