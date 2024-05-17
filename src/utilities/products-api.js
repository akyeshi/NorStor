

import sendRequest from "./send-requests";

const BASE_URL = '/api/products'; 

export function getAllProducts() {
  return sendRequest(BASE_URL); 
}

export function getOneProduct(id) {
  return sendRequest(`${BASE_URL}/${id}`); 
}


// export function getAllSearchResults(searchValue) {
//   console.log('search value: ', searchValue); 
//   return sendRequest(`${BASE_URL}/search/${searchValue}`)
// }