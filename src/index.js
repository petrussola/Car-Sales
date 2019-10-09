import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

// reducers

import * as reducers from "./state/reducers";

// redux library

import { combineReducers, createStore } from "redux";

// react-redux library

import { Provider } from "react-redux";

// monster reducer

const masterReducer = combineReducers({
  car: reducers.carReducer,
  shop: reducers.shopReducer,
  extras: reducers.extrasReducer
});

// store

const store = createStore(
  masterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
