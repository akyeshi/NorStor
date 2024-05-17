import { Link, useLocation } from 'react-router-dom';
import * as userService from '../../utilities/users-services';
import './NavBar.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
// react emits an <a> element to the DOM when <Link> component is used, 
// react intercepts <a> tag's click event thus preventing an HTTP request being sent to the backend server 

export default function NavBar({ user, setUser, searchText, setSearchText }) {

  const location = useLocation();
  // console.log('location: ', location); 

  function handleLogOut() {
    userService.logOut();  // delegate to users-service
    setUser(null); // update state will cause a re-render 
  };

  return (
    <>

      <nav>
        {/* <Link to={'/products'} ><Logo /></Link> */}
        <Logo />

        {user && location.pathname === '/products' &&
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        }
        { user && 
          <>
            <Link to="/products">Products</Link>
            <Link to="/orders">Order History</Link>
          </>
        }

        {user &&
          <>
            {location.pathname === '/products' &&
              <span id="welcome-text">&nbsp;&nbsp; Welcome, {user.name}</span>
            }
            <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
            <Link to="" onClick={handleLogOut} >Log Out</Link>
          </>
        }
      </nav>
      <br />
      <hr />
    </>
  )
}