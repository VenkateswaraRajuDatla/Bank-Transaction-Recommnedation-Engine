// Create final store using all reducers and applying middleware
import { createBrowserHistory } from 'history';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger';
import rootReducer from '../reducers/index';



// Import all reducers




// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below


let middleWares = [promise, thunk, routerMiddleware(history)];

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
export default store;
