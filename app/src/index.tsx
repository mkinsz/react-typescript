import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { configureStore } from "./helpers";

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>,
    document.getElementById("root") as HTMLElement
);
