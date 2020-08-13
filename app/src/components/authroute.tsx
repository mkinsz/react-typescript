import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default AuthRoute;
