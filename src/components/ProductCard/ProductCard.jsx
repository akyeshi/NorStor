



import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-item">
      <Link to={`/products/${product._id}`} >
        <div
          style={{
            backgroundImage: `url(${product.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '20rem',
            width: '20rem',
          }}
        >
          <span id="item-price">{`$${product.price}`}</span>

        </div>
        <p>{product.title}</p>
      </Link>
    </div>
  )
}