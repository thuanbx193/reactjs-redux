import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider }         from "react-redux";
import { createStore }      from "redux";
import Thunk                from "redux-thunk";
import { 
    StateListenerRegistry, 
    ReducerRegistry, 
    MiddlewareRegistry 
}                           from "./react/base/redux";
import { CookiesProvider } from 'react-cookie';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

window.APP = {};

let _createStore = () => {
    let middleware = MiddlewareRegistry.applyMiddleware(Thunk);
    const reducer = ReducerRegistry.combineReducers();
    const store = createStore( reducer, middleware );
    StateListenerRegistry.subscribe(store);
    if (typeof APP !== "undefined") {
        window.APP.store = store;
    }
    return store;
};
let store = _createStore();


ReactDOM.render(
	<CookiesProvider> 
	   <Provider store={store}>
            <Router history={browserHistory}>
                <Routes />
            </Router>
		</Provider>
	</CookiesProvider>,
  document.getElementById('root')
);
