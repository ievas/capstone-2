import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
// import ShopDetail from "./ShopDetail";
import LoginForm from "./LoginForm";
import Room from "./Room";
import Cart from "./Cart";
// import ProfileForm from "./ProfileForm";


/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
//   console.debug(
//       "Routes",
//       `login=${typeof login}`,
//       `register=${typeof register}`,
//   );

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          {/* <Route exact path="/login">
            <LoginForm login={login} />
          </Route> */}

          <Route exact path="/room">
            <Room/>
          </Route>

          <Route exact path="/cart">
            <Cart/>
          </Route>


          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;