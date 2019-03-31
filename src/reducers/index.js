import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modal from 'reducers/modal';
import auth from 'reducers/auth';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    modal,
    auth,
  });

export default rootReducer;
