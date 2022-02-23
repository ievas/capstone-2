import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import UserContext from "../auth/UserContext";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 * 
 * 
 */

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />

function Navigation({ logout }) {
//   const { currentUser } = useContext(UserContext);
    const { currentUser } = "Liva";
//   console.debug("Navigation", "currentUser=", currentUser);



  function loggedInNav() {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/favorites">
                Favorites
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/profile">
              Your Account
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={logout}>
              Log out
            </Link>
          </li>
        </ul>
    );
  }

  function loggedOutNav() {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>

          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/cart">
    {element} Cart
            </NavLink>
          </li>

        </ul>
    );
  }

  return (
      <nav className="Navigation navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">
          Little Shop of Horrors
        </Link>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </nav>
  );
}

export default Navigation;