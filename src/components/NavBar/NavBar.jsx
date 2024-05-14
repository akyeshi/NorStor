import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-services';
import './NavBar.css';
// react emits an <a> element to the DOM when <Link> component is used, 
// react intercepts <a> tag's click event thus preventing an HTTP request being sent to the backend server 

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();  // delegate to users-service
    setUser(null); // update state will cause a re-render 
  };

  return (
    <nav>
      <div style={{position: 'fixed', top: 28, left: 28, color: 'red', fontSize: '20px', fontWeight: 'bold'}}>
        NORSTOR
      </div>
      <Link to="/products">Products</Link>

      {user &&
        <>
          <span id="welcome-text">(Welcome, {user.name})</span>
          <Link to="" onClick={handleLogOut} >Log Out</Link>
        </>
      }
    </nav>
  )
}