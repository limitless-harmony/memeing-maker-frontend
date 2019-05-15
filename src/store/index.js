import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { throttle } from 'lodash';

import { saveState, loadState } from 'services/persistState';
import rootReducer from 'reducers';

export const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preLoadedState = loadState();

// Middlewarees only in development
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancer = composeEnhancer(applyMiddleware(...middlewares));

const store = createStore(rootReducer(history), preLoadedState, enhancer);

store.subscribe(
  throttle(() => {
    const { auth } = store.getState();
    return saveState({ auth });
  }, 1000)
);
const configureStore = () => store;

export default configureStore;
