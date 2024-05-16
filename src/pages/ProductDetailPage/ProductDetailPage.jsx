
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';



// this is a hacky way to get product detail without a proper backend route to get that detail 
export default function ProductDetailPage({ products }) {

  // without going to the backend, use 'products' already loaded to the frontend here 
  let { productId } = useParams();
  let product = products.find(product => product._id === productId);

  if (!product) return null; // refresh would bring me back to empty products array
  const releasedDate = new Date(product.updatedAt).toLocaleDateString();


  return (
    <div className="container">
      <div className="top">
        <div className="image">
          {/* <img src={product.images[0]} alt="image" /> */}
          <div
            style={{
              backgroundImage: `url(${product.images[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '20rem',
              width: '20rem',
              borderRadius: '8px'
            }}
          >
            <span className="item-price">{product.price}</span>
          </div>
        </div>
        <div className="details">
          <h1>{product.title}</h1>
          <p>Released: {releasedDate}</p>
          <p>Description: {product.description}</p>
          <button>Buy Item</button>
          <button>Add To Cart</button>
        </div>
      </div>





      <div className="bottom">
        <br />
        <hr />Reviews
        <div className="product-reviews">

          <p>{product.reviews[0].comment}</p>
        </div>

      </div>
    </div>
  )
}

