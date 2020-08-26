import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import ParticlesBg from "particles-bg";

import GlobalStyles from "./components/globalstyles";
import theme from "./views/theme";

import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import AuthRoute from "./components/authroute";

const App = (props: { store: any }) => {
    // type ConfigProp = {
    //   num: number[], rps: number, radius: number[], life: number[], v: number[],
    //   tha: number[], alpha: number[], scale: number[], body: string, position: any,
    //   color: string[], cross: string, random: number, g: number
    // }

    // const pgconfig: ConfigProp = {
    //   num: [4, 7],
    //   rps: 0.1,
    //   radius: [5, 40],
    //   life: [1.5, 3],
    //   v: [2, 3],
    //   tha: [-50, 50],
    //   alpha: [0.6, 0],
    //   scale: [.1, 0.9],
    //   body: icon,
    //   position: "all",
    //   color: ["random", "#ff0000"],
    //   cross: "dead",
    //   random: 10,
    //   g: 1
    // };

    type ConfigProp = {
        num: number[];
        rps: number;
        radius: number[];
        life: number[];
        v: number[];
        tha: number[];
        alpha: number[];
        scale: number[];
        position: any;
        color: string[];
        cross: string;
        random: number;
        g: number;
    };

    const pgconfig: ConfigProp = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [0.1, 0.4],
        position: "all",
        color: ["random", "#ff0000"],
        cross: "dead",
        random: 15,
        g: 1,
    };

    return (
        <Provider store={props.store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <AuthRoute path="/" component={Home} />
                </Switch>
            </ThemeProvider>
            <ParticlesBg type="custom" bg={true} config={pgconfig} />
        </Provider>
    );
};

export default App;
