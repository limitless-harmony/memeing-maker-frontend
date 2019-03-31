import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import RootApp from 'App';
import configureStore, { history } from 'store';
import { register } from 'serviceWorker';

const store = configureStore();
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    document.getElementById('root')
  );
};

render(RootApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register();
