import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../pages/Home"
import Authentication from "../pages/Authentication"
import NotFound from "../pages/404"
import Cart from "../pages/Cart"
import {useSelector } from "react-redux"
export default () => (
        <Switch>
          <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Authentication />
            </Route>
            <PrivateRoute path="/cart">
                <Cart />
            </PrivateRoute>
            <Route>
                <NotFound />
            </Route>
        </Switch>
)


function PrivateRoute({ children, ...rest }) {
  const user = useSelector(state => state.auth.user)
    return (
      <Route
        {...rest}
        render={({ location }) =>
         user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }