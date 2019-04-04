import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from 'reducers';

export const history = createBrowserHistory();

const configureStore = preLoadedState => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer(history),
    preLoadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );

  return store;
};

export default configureStore;
