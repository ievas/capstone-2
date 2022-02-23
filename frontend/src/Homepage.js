import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
// import UserContext from "../auth/UserContext";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = "Liva";
  console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Little Shop Of Horrors</h1>
          <p className="lead">Choose your shop</p>
          <div className="container2">

          <Link className="nav-link" to="/room">
            <p className="door">Decorations</p>
          </Link>
          
          <p className="door">Party Supplies</p>
          <p className="door">Clothing</p>
          <p className="door">Accessories</p>
          <p className="door">Bakery</p>
          <p className="door">Shop by Holiday</p>
          </div>
          
          {/* {currentUser
              ? <h2>
                Welcome Back, {currentUser.firstName || currentUser.username}!
              </h2>
              : (
                  <p>
                    <Link className="btn btn-primary font-weight-bold mr-3"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/signup">
                      Sign up
                    </Link>
                  </p>
              )} */}
        </div>
      </div>
  );
}

export default Homepage;
