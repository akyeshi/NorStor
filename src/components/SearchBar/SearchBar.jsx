
import './SearchBar.css';
// import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ searchText, setSearchText }) {

  return (
    <div className="searchbar-results-wrapper">
      <div className="input-icon-wrapper">
        {/* <FaSearch id='search-icon' /> */}
        <i id='search-icon' className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-bar"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Type to search ..."
        />
      </div>
    </div>
  )
}


