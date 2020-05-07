import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log("Current state: ", store.getState());

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));

