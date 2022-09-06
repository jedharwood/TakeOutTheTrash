import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./js/App";
import store from "./js/configureStore";
import { fetchPrefecturesList } from "./js/Actions/Prefectures/index";
import "./index.css";

store.dispatch(fetchPrefecturesList());

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
