

import sendRequest from "./send-requests";

const BASE_URL = '/api/products'; 

export function getAllProducts() {
  return sendRequest(BASE_URL); 
}