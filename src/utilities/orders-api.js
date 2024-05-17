



import sendRequest from "./send-requests";

const BASE_URL = '/api/orders'; 

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`); 
}

export function addItemToCart(product) {
  return sendRequest(`${BASE_URL}/cart/products/${product._id}`, 'POST'); 
}


export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}


export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST'); 
}; 

// get all paid order history list 
export function getAllPaidOrders() {
  return sendRequest(BASE_URL); 
}