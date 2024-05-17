
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'; 
import './OrderListPage.css';
import * as ordersAPI from '../../utilities/orders-api';
import LineItemPage from '../../components/LineItemPage/LineItemPage';

export default function OrderListPage() {

  const [cart, setCart] = useState(null);
  const navigate = useNavigate(); 

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty); 
    setCart(updatedCart); 
  }; 

  async function handleCheckOut() {
    await ordersAPI.checkout(); 
    navigate('/orders'); 
  }


  useEffect(() => {
    async function getCart() {
      const orders = await ordersAPI.getCart();
      setCart(orders);
    }
    getCart();
  }, [])

  return (
    <main className='order-list'>
      <h1>Cart</h1>
      {cart && cart.lineItems.map(lineItem => 
        <LineItemPage key={lineItem._id} lineItem={lineItem} handleChangeQty={handleChangeQty} />
      )}
      <h1 style={{color: 'red'}}>Order Total: ${cart && cart.orderTotal.toFixed(2)}</h1>
      <button style={{width: '150px'}}  onClick={handleCheckOut} >CheckOut</button>

    </main>
  )
}
