
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';



// this is a hacky way to get product detail without a proper backend route to get that detail 
export default function ProductDetailPage({ products }) {

  let { productId } = useParams();
  // let product = products.find(product => product._id === productId);
  let product = products.find(product => product._id === productId);
  const releasedDate = new Date(product.updatedAt).toLocaleDateString();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Released: {releasedDate}</p>
      <img src={product.images[0]} alt="image" />
    </div>
  )
}