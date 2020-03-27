import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { render } from "react-dom";
import AppContainer from "./redux/container/AppContainer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginContainer from "./redux/container/LoginContainer";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById("appRoot")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
