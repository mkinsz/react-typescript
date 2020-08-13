import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./containers/app";
import configureStore from "./helpers/store";

const store = configureStore();

ReactDOM.render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById("root") as HTMLElement
);
