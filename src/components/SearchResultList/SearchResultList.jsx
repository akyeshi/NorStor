import { Link, Navigate } from 'react-router-dom'; 
import './SearchResultList.css'; 

export default function SearchResultList({results}) {
  return (
    <div className="results-list">
      {
        results.map(result => 
          <Link to={`/products/${result._id}`} >
            <div className="search-result" key={result._id}>{result.title}</div>
          </Link>
        )
      }
    </div>
  )
}
