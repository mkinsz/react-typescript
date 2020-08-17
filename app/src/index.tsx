import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./containers/app";
import { configureStore, history } from "./helpers";

const store = configureStore();

ReactDOM.render(
    <Router history={history}>
        <App store={store} />
    </Router>,
    document.getElementById("root") as HTMLElement
);
