import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk';
// import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById("root")
);
