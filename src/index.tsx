import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/global.scss";
import App from "./pages/App";
import SimpleReading from "./pages/SimpleReading";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/simplereading" exact component={SimpleReading} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
