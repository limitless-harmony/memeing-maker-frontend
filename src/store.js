import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from 'reducers';

export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware(...middlewares));

const configureStore = preLoadedState =>
  createStore(rootReducer(history), preLoadedState, enhancer);

export default configureStore;
