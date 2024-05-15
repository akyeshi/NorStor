import { useState } from 'react'; 
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; 

export default function SearchBar() {

  const [input, setInput] = useState(null); 
  const [results, setResults] = useState([]); 


  const fetchedData = (value) => {
    fetch('/api/products').then(res => res.json()).then(data => console.log(data)); 
  }

  async function fetchResultData() {
    const results = await fetch('/api/products'); 
    setResults(results); 
  }

  const handleChange = (value) => {
    setInput(value); 
    fetchedData(value)
  }

  return (
    <div className="searchbar-results-wrapper">
      <div className="input-icon-wrapper">
        {/* <FaSearch id='search-icon' /> */}
        <i id='search-icon' class="fa-solid fa-magnifying-glass"></i>
        <input 
          placeholder="Type to search ..." 
          className="search-bar" 
          value={input}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
      <div>Search Results</div>
    </div>
  )
}

