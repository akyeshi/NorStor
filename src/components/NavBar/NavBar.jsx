import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-services';
// react emits an <a> element to the DOM when <Link> component is used, 
// react intercepts <a> tag's click event thus preventing an HTTP request being sent to the backend server 

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();  // delegate to users-service
    setUser(null); // update state will cause a re-render 
  };

  return (
    <nav>
      <Link to="/products">Products</Link>
      &nbsp; | &nbsp;

      {user &&
        <>
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut} >Log Out</Link>
        </>
      }
    </nav>
  )
}