



import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <>
      <Link to={`/products/${product._id}`} >
        <div
          className="product"
          style={{
            backgroundImage: `url(${product.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '20rem',
            width: '20rem',
          }}
        >
        </div>
        <p>{product.title}</p>
      </Link>
    </>
  )
}