import react from "react";
import {Redirect, Route } from "react-router-dom";

export const PrivateRoute = (component:Component, ...rest) => (
  <Route {...rest} render={(props) => (window.localStorage.getItem('isLoggedIn') === true ?
  (<Component {...props}/>) : (<Redirect to="/login" /> ) ) } />
);
