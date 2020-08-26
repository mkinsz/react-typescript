import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

const AuthRoute = ({ component: Component, ...rest }: RouteProps) => {
    const history = useHistory();
    const location = useLocation();

    React.useEffect(() => {
        if (!localStorage.getItem("user"))
            history.replace("/login", location.state);
    }, []);

    return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default AuthRoute;
